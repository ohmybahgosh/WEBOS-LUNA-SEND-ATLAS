/* Luna Atlas - TV app.  Browse/search the luna-send catalog and run commands,
 * with a proper D-pad focus model and a one-tap LAN web editor.
 * Targets the modern webOS WebView (Chromium).  The companion JS service does
 * the actual luna calls and hosts the web editor (see service/). */
(function () {
"use strict";

/* ---------- small helpers ---------- */
var $ = function (id) { return document.getElementById(id); };
function h(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }
function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function store(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function load(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }

var ICON = {
 home:'<path d="M4 11 12 4l8 7"/><path d="M6 10v9h12v-9"/>',
 browse:'<rect x="3" y="4" width="7" height="7" rx="1.5"/><rect x="14" y="4" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/>',
 star:'<path d="M12 3l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.3l6-.8z"/>',
 web:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>',
 gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
 run:'<path d="M7 4l12 8-12 8z"/>',
 copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>'
};
function svg(name) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICON[name] || "") + "</svg>"; }
function logo(sz) {
 return '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 160 160"><defs><linearGradient id="lg' + sz + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3ddc97"/><stop offset="1" stop-color="#33e1ff"/></linearGradient></defs>' +
  '<circle cx="70" cy="68" r="36" fill="none" stroke="url(#lg' + sz + ')" stroke-width="9"/>' +
  '<mask id="lm' + sz + '"><circle cx="70" cy="68" r="22" fill="#fff"/><circle cx="83" cy="59" r="18" fill="#000"/></mask>' +
  '<circle cx="70" cy="68" r="22" fill="#3ddc97" mask="url(#lm' + sz + ')"/>' +
  '<line x1="97" y1="95" x2="126" y2="124" stroke="url(#lg' + sz + ')" stroke-width="13" stroke-linecap="round"/></svg>';
}

var CATTITLES = {apps:"Applications",notifications:"Notifications",audio:"Audio","system-info":"System Info",settings:"Settings",picture:"Picture",sound:"Sound",power:"Power",display:"Display / Panel",input:"Input & Keys",network:"Network / Wi-Fi",bluetooth:"Bluetooth",media:"Media","tv-broadcast":"TV Broadcast / DVR",storage:"Storage & USB",db:"Database (db8)",activity:"Activity Manager",security:"Security / Keys",devmode:"Developer Mode",update:"Software Update","power-mgmt":"Power Management",connection:"Connection Manager",camera:"Camera",location:"Location",keys:"Key Management",ui:"UI / Compositor",misc:"Misc"};

var RAIL = [
 {id:"home",label:"Home",icon:"home"},
 {id:"browse",label:"Browse",icon:"browse"},
 {id:"search",label:"Search",icon:"search"},
 {id:"favorites",label:"Favorites",icon:"star"},
 {id:"webeditor",label:"Web Editor",icon:"web"},
 {id:"settings",label:"Settings",icon:"gear"}
];

/* ---------- state ---------- */
var CAT = null, CATEGORIES = [], byUri = {}, totalMethods = 0, totalServices = 0;
var S = {
 view:"home", rail:null, rootAccess:null,
 home:{zone:"cards", i:0, recent:[]},
 browse:{cat:0, col:0, mi:0, methods:[]},
 detail:{m:null, bi:0, from:"home", result:null, running:false},
 web:{status:null, loading:false},
 search:{q:"", zone:"input", si:0, results:[]},
 fav:{si:0},
 favs: load("la_favs", []), recent: load("la_recent", [])
};

/* ---------- boot ---------- */
boot();
function boot() {
 var x = new XMLHttpRequest();
 x.open("GET", "web/catalog.json", true);
 x.onreadystatechange = function () {
  if (x.readyState !== 4) return;
  if (x.status === 200 || x.status === 0) {
   try { CAT = JSON.parse(x.responseText); } catch (e) { return fatal("Catalog parse error."); }
   indexCatalog(); render();
   if (window.Luna) Luna.status(function (r) { S.rootAccess = r && r.root; if (S.view === "settings") render(); });
  } else fatal("Could not load catalog (" + x.status + ").");
 };
 x.send();
 document.addEventListener("keydown", onKey, true);
}
function fatal(msg) { $("view").innerHTML = '<div style="padding:80px;font-size:28px;color:#ff5d5d">' + esc(msg) + "</div>"; }

function indexCatalog() {
 var cmap = {};
 totalServices = CAT.services.length;
 CAT.services.forEach(function (svc) {
  (svc.methods || []).forEach(function (m) {
   m.svc = svc.service; byUri[m.u] = m; totalMethods++;
   var c = m.c || "misc"; (cmap[c] = cmap[c] || []).push(m);
  });
 });
 Object.keys(cmap).forEach(function (c) { cmap[c].sort(function (a, b) { return (a.svc + a.m).toLowerCase() < (b.svc + b.m).toLowerCase() ? -1 : 1; }); });
 var order = Object.keys(CATTITLES).filter(function (c) { return cmap[c]; });
 Object.keys(cmap).forEach(function (c) { if (order.indexOf(c) < 0) order.push(c); });
 CATEGORIES = order.map(function (c) { return {key:c, title:CATTITLES[c] || c, methods:cmap[c]}; });
 S.browse.methods = CATEGORIES[0] ? CATEGORIES[0].methods : [];
 if (CAT.counts && CAT.counts.methods) totalMethods = CAT.counts.methods;
}

/* ---------- render ---------- */
function render() { renderRail(); var v = S.view;
 if (v === "home") renderHome();
 else if (v === "browse") renderBrowse();
 else if (v === "detail") renderDetail();
 else if (v === "webeditor") renderWeb();
 else if (v === "search") renderSearch();
 else if (v === "favorites") renderFav();
 else if (v === "settings") renderSettings();
 renderHint();
}
function renderRail() {
 var active = S.view === "detail" ? "browse" : S.view;
 var items = RAIL.map(function (it, i) {
  var cls = "navitem" + (it.id === active ? " active" : "") + (S.rail === i ? " focus" : "");
  return '<div class="' + cls + '">' + svg(it.icon) + "<span>" + it.label + "</span></div>";
 }).join("");
 $("rail").innerHTML = '<div class="brand">' + logo(44) + "<b>Luna Atlas</b></div>" + items +
  '<div class="foot"><span class="dot"></span>webOS · on device<br>' + totalMethods.toLocaleString() + " methods</div>";
}
function badge(a) { return '<span class="badge b-' + esc(a) + '">' + esc(a) + "</span>"; }
function confBadge(dc) { return '<span class="badge b-' + (dc === "documented" ? "doc" : "inferred") + '">' + esc(dc) + "</span>"; }

function renderHint() {
 var v = S.view, parts;
 if (v === "browse") parts = [k("←→","Columns"), k("↑↓","Move"), k("OK","Open"), k("↺","Back")];
 else if (v === "detail") parts = [k("↑↓","Choose"), k("OK","Do"), k("↺","Back to list")];
 else if (v === "webeditor") parts = [k("OK","Start / stop"), k("↺","Back")];
 else if (v === "search") parts = [k("OK","Type / open"), k("↓","Results"), k("↺","Back")];
 else parts = [k("↑↓←→","Move"), k("OK","Select"), k("↺","Back")];
 $("hint").innerHTML = parts.join("");
}
function k(key, lbl) { return '<span><span class="key">' + key + "</span>" + lbl + "</span>"; }

/* ----- HOME ----- */
function renderHome() {
 var cards = [
  {t:"Browse the catalog", p:"By category, service or access level", ic:"browse", cls:""},
  {t:"Search", p:"Find any method, service or description", ic:"search", cls:""},
  {t:"Open Web Editor", p:"Drive it from your phone or computer", ic:"web", cls:"web"},
  {t:"Favorites", p:S.favs.length ? S.favs.length + " saved" : "Star methods to pin them here", ic:"star", cls:""}
 ];
 var ch = cards.map(function (c, i) {
  var f = (S.rail === null && S.home.zone === "cards" && S.home.i === i) ? " focus" : "";
  return '<div class="card ' + c.cls + f + '"><div class="ic">' + svg(c.ic) + "</div><div><h3>" + c.t + "</h3><p>" + c.p + "</p></div></div>";
 }).join("");
 var rec = S.recent.slice(0, 3).map(function (u, i) {
  var f = (S.rail === null && S.home.zone === "recent" && S.home.i === i) ? " focus" : "";
  return '<div class="rpill' + f + '">' + esc(u.replace("luna://", "")) + "</div>";
 }).join("");
 var recBlock = S.recent.length ? '<div class="recent"><div class="lbl">Recent</div><div class="rrow">' + rec + "</div></div>"
  : '<div class="recent"><div class="lbl">Recent</div><div class="empty">Open a method and it shows up here.</div></div>';
 $("view").innerHTML =
  '<div style="display:flex;align-items:center;gap:18px">' + logo(58) + '<div class="h1">Luna <span class="grad">Atlas</span></div></div>' +
  '<div class="sub">Every LG webOS <span class="mono" style="color:var(--g)">luna-send</span> command, on your TV.</div>' +
  '<div class="chips"><span class="chip"><b>' + totalMethods.toLocaleString() + '</b> methods</span><span class="chip"><b>' + totalServices + '</b> services</span><span class="chip"><b>on-device</b> verified</span></div>' +
  '<div class="cards">' + ch + "</div>" + recBlock;
}

/* ----- BROWSE ----- */
function renderBrowse() {
 var b = S.browse, cat = CATEGORIES[b.cat];
 var catsHtml = CATEGORIES.map(function (c, i) {
  var f = (S.rail === null && b.col === 0 && b.mi === i) ? " focus" : (i === b.cat ? " sel" : "");
  return '<div class="litem' + f + '" data-fa="' + i + '"><span>' + esc(c.title) + '</span><span class="n">' + c.methods.length + "</span></div>";
 }).join("");
 var methods = cat ? cat.methods : [];
 var mHtml = methods.map(function (m, i) {
  var f = (S.rail === null && b.col === 1 && b.mi === i) ? " focus" : "";
  var dg = m.d ? '<span class="badge b-danger">⚠</span>' : "";
  return '<div class="mitem' + f + '" data-fb="' + i + '"><span class="badge b-' + esc(m.a) + '">' + esc(m.a) + '</span><span class="mono">' + esc(m.m) + '</span><span class="svc">' + esc(m.svc.replace(/^com\.(webos\.)?(service\.)?/, "")) + "</span>" + dg + "</div>";
 }).join("");
 var sel = methods[b.col === 1 ? b.mi : 0] || methods[0];
 var prev = sel ? detailPreview(sel) : '<div class="empty" style="padding:30px">No methods.</div>';
 $("view").innerHTML = '<div class="h1">Browse</div><div class="cols">' +
  '<div class="colA" id="colA"><div class="colh">Categories</div>' + catsHtml + "</div>" +
  '<div class="colB" id="colB"><div class="colh">' + esc(cat ? cat.title : "") + " · " + methods.length + "</div>" + mHtml + "</div>" +
  '<div class="dprev">' + prev + "</div></div>";
 scrollFocus();
}
function detailPreview(m) {
 var params = m.p && Object.keys(m.p).length;
 var pt = "";
 if (params) { pt = '<table class="ptable"><tr><th>Param</th><th>Type / notes</th></tr>';
  Object.keys(m.p).slice(0, 6).forEach(function (k) { pt += '<tr><td><span class="mono">' + esc(k) + '</span></td><td>' + esc(m.p[k]) + "</td></tr>"; });
  pt += "</table>"; }
 return '<div class="svc">' + esc(m.svc) + '</div><h2>' + esc(m.m) + '</h2>' +
  '<div class="uri">' + esc(m.u) + '</div>' +
  '<div class="metarow">' + badge(m.a) + confBadge(m.dc) + (m.d ? '<span class="badge b-danger">⚠ dangerous</span>' : "") + "</div>" +
  '<p>' + esc(m.desc || "No description.") + "</p>" + pt +
  '<div class="openhint">Press <span class="key" style="display:inline-flex">OK</span> to open and run</div>';
}

/* ----- DETAIL ----- */
function renderDetail() {
 var m = S.detail.m; if (!m) { S.view = "browse"; return renderBrowse(); }
 var pt = "";
 if (m.p && Object.keys(m.p).length) { pt = '<table class="ptable"><tr><th>Param</th><th>Type / notes</th></tr>';
  Object.keys(m.p).forEach(function (k) { pt += '<tr><td><span class="mono">' + esc(k) + '</span></td><td>' + esc(m.p[k]) + "</td></tr>"; });
  pt += "</table>"; }
 var ret = (m.returns && Object.keys(m.returns).length) ? '<div class="ret">Returns ' + Object.keys(m.returns).map(function (f) { return "<b>" + esc(f) + "</b>"; }).join(", ") + "</div>" : "";
 var cmd = '<span class="p">$</span> luna-send -n 1 -f \\<br>&nbsp;&nbsp;<span class="s">' + esc(m.u) + "</span> '{}'";
 var isFav = S.favs.indexOf(m.u) >= 0;
 var runCls = m.d ? "btn danger" : "btn pri";
 var btns = [
  {lbl:(m.d ? "⚠ Run (dangerous)" : "▶ Run on TV"), cls:runCls},
  {lbl:"⧉ Copy command", cls:"btn"},
  {lbl:(isFav ? "★ Favorited" : "☆ Add to favorites"), cls:"btn"}
 ];
 var btnHtml = btns.map(function (b, i) { return '<div class="' + b.cls + (S.detail.bi === i ? " focus" : "") + '">' + b.lbl + "</div>"; }).join("");
 var resHtml = S.detail.result ? resultBox(S.detail.result) : "";
 $("view").innerHTML = '<div class="dwrap"><div class="dmain">' +
  '<div class="crumb">' + esc((CATTITLES[m.c] || m.c) + " ▸ " + m.svc) + "</div>" +
  '<h2>' + esc(m.m) + '</h2><div class="uri">' + esc(m.u) + "</div>" +
  '<div class="metarow">' + badge(m.a) + confBadge(m.dc) + '<span class="badge b-unknown">subscribe: ' + (m.s ? "yes" : "no") + "</span>" + (m.d ? '<span class="badge b-danger">⚠ dangerous</span>' : "") + "</div>" +
  '<p>' + esc(m.desc || "No description.") + "</p>" + pt + ret +
  '</div><div class="side"><div class="cmd">' + cmd + "</div><div class=\"btns\">" + btnHtml + "</div>" + resHtml + "</div></div>";
}
function resultBox(r) {
 var ok = r && r.returnValue !== false;
 var body = esc(JSON.stringify(r, null, 2)).replace(/&quot;returnValue&quot;: true/, '<span class="k">&quot;returnValue&quot;: true</span>').replace(/&quot;errorText&quot;/, '<span class="e">&quot;errorText&quot;</span>');
 return '<div class="result ' + (ok ? "ok" : "err") + '">' + body + "</div>";
}

/* ----- WEB EDITOR ----- */
function renderWeb() {
 var w = S.web;
 if (w.loading) { $("view").innerHTML = '<div class="webwrap"><div class="webloading">' + logo(60) + '<div style="margin-top:20px">Starting the web editor…</div></div></div>'; return; }
 var st = w.status;
 if (!st || !st.running) {
  $("view").innerHTML = '<div class="webwrap"><div class="webcard" style="grid-template-columns:1fr;text-align:center"><div><h2>Web Editor</h2><div class="lead">Start a small server on the TV so you can browse and run commands from your phone or computer on the same Wi-Fi.</div><div class="webbtn focus" style="margin:0 auto;display:inline-block">Start web editor</div></div></div></div>';
  return;
 }
 var ip = (st.ips && st.ips[0]) || "your-tv-ip";
 var url = "http://" + ip + ":" + st.port;
 var qr = "";
 try { if (typeof qrcode === "function") { var q = qrcode(0, "M"); q.addData(url); q.make(); qr = q.createSvgTag({cellSize:6, margin:1}); } } catch (e) {}
 $("view").innerHTML = '<div class="webwrap"><div class="webcard">' +
  '<div class="qr">' + (qr || "QR") + "</div><div>" +
  '<h2>Web Editor is running</h2><div class="lead">Open the full searchable catalog on your phone or computer, on the same Wi-Fi.</div>' +
  '<div class="urlbox">\u{1F310} ' + esc(url) + "</div>" +
  '<div class="codebox"><span class="lbl">Access code</span><span class="codev">' + esc(st.code || "----") + "</span></div>" +
  '<div class="steps"><div><b>1</b>Scan the QR code, or type the address.</div><div><b>2</b>Enter the code shown here.</div><div><b>3</b>Browse, search and send commands from the big screen.</div></div>' +
  '<div class="wstat"><span class="running"><span class="dot"></span>Serving on port ' + st.port + "</span><div class=\"webbtn focus\">Stop server</div></div>" +
  "</div></div></div>";
}

/* ----- SEARCH ----- */
function renderSearch() {
 var s = S.search;
 var inFocus = S.rail === null && s.zone === "input";
 var res = s.results.slice(0, 60).map(function (m, i) {
  var f = (S.rail === null && s.zone === "results" && s.si === i) ? " focus" : "";
  return '<div class="sitem' + f + '"><span class="badge b-' + esc(m.a) + '">' + esc(m.a) + '</span><span class="mono">' + esc(m.m) + '</span><span class="svc">' + esc(m.svc) + "</span>" + (m.d ? '<span class="badge b-danger">⚠</span>' : "") + "</div>";
 }).join("");
 var body = s.q ? (s.results.length ? '<div class="sresults" id="sres">' + res + "</div>" : '<div class="empty" style="padding:30px">No matches for “' + esc(s.q) + "”.</div>")
  : '<div class="empty" style="padding:30px">Type to search ' + totalMethods.toLocaleString() + " methods by name, service or description.</div>";
 $("view").innerHTML = '<div class="h1">Search</div>' +
  '<div class="searchbar' + (inFocus ? " focus" : "") + '">' + svg("search").replace("<svg", '<svg style="width:28px;height:28px;color:var(--fg3);margin-left:12px"') +
  '<input id="searchinput" type="text" placeholder="e.g. toast, getVolume, tvpower" value="' + esc(s.q) + '"></div>' + body;
 var inp = $("searchinput");
 if (inp) { inp.oninput = function () { s.q = inp.value; s.results = runSearch(s.q); s.si = 0; renderSearch(); if ($("searchinput")) { $("searchinput").focus(); } };
  if (inFocus) { inp.focus(); } }
 scrollFocus();
}
function runSearch(q) {
 q = q.toLowerCase().trim(); if (!q) return [];
 var out = [], all = Object.keys(byUri);
 for (var i = 0; i < all.length && out.length < 200; i++) {
  var m = byUri[all[i]];
  if (m.m.toLowerCase().indexOf(q) >= 0 || m.svc.toLowerCase().indexOf(q) >= 0 || (m.desc || "").toLowerCase().indexOf(q) >= 0 || m.u.toLowerCase().indexOf(q) >= 0) out.push(m);
 }
 out.sort(function (a, b) { var am = a.m.toLowerCase().indexOf(q) === 0, bm = b.m.toLowerCase().indexOf(q) === 0; return am === bm ? 0 : (am ? -1 : 1); });
 return out;
}

/* ----- FAVORITES ----- */
function renderFav() {
 var items = S.favs.map(function (u) { return byUri[u]; }).filter(Boolean);
 if (!items.length) { $("view").innerHTML = '<div class="h1">Favorites</div><div class="empty" style="padding:40px">No favorites yet.  Open any method and choose <b>Add to favorites</b>.</div>'; return; }
 var res = items.map(function (m, i) {
  var f = (S.rail === null && S.fav.si === i) ? " focus" : "";
  return '<div class="sitem' + f + '"><span class="badge b-' + esc(m.a) + '">' + esc(m.a) + '</span><span class="mono">' + esc(m.m) + '</span><span class="svc">' + esc(m.svc) + "</span></div>";
 }).join("");
 $("view").innerHTML = '<div class="h1">Favorites</div><div class="sresults" id="sres">' + res + "</div>";
 scrollFocus();
}

/* ----- SETTINGS ----- */
function renderSettings() {
 var acc = S.rootAccess === null ? "checking…" : (S.rootAccess ? "root (full access to private methods)" : "public methods only — elevate in the Homebrew Channel for private");
 $("view").innerHTML = '<div class="h1">Settings</div><div style="margin-top:20px">' +
  srow("Catalog", totalMethods.toLocaleString() + " methods · " + totalServices + " services") +
  srow("Access level", acc) +
  srow("Web editor port", "28472") +
  srow("Version", "1.0.0 · OhMyBahGosh") +
  srow("Source", "github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS") +
  "</div>";
}
function srow(l, v) { return '<div class="srow"><span class="lbl">' + esc(l) + '</span><span class="val">' + esc(v) + "</span></div>"; }

/* ---------- scrolling focused item into view ---------- */
function scrollFocus() {
 ["colA", "colB", "sres"].forEach(function (id) {
  var c = $(id); if (!c) return; var f = c.querySelector(".focus"); if (!f) return;
  var ct = c.scrollTop, cb = ct + c.clientHeight, et = f.offsetTop, eb = et + f.offsetHeight;
  if (et < ct + 60) c.scrollTop = Math.max(0, et - 60); else if (eb > cb - 20) c.scrollTop = eb - c.clientHeight + 20;
 });
}

/* ---------- navigation ---------- */
function onKey(ev) {
 var code = ev.keyCode, key = ev.key;
 var BACK = code === 461 || code === 27 || code === 8 || key === "Back" || key === "GoBack" || key === "BrowserBack";
 var OK = code === 13 || key === "Enter";
 var L = code === 37, U = code === 38, R = code === 39, D = code === 40;

 // danger gate intercepts everything
 if (!$("gate").classList.contains("hidden")) { gateKey(ev, BACK, OK); return; }

 if (BACK) { ev.preventDefault(); goBack(); return; }

 // rail focus
 if (S.rail !== null) {
  if (U) { ev.preventDefault(); S.rail = Math.max(0, S.rail - 1); renderRail(); }
  else if (D) { ev.preventDefault(); S.rail = Math.min(RAIL.length - 1, S.rail + 1); renderRail(); }
  else if (R || OK) { ev.preventDefault(); activateRail(RAIL[S.rail].id); }
  return;
 }

 var v = S.view;
 if (v === "home") homeKey(ev, L, U, R, D, OK);
 else if (v === "browse") browseKey(ev, L, U, R, D, OK);
 else if (v === "detail") detailKey(ev, U, D, OK);
 else if (v === "webeditor") webKey(ev, L, OK);
 else if (v === "search") searchKey(ev, L, U, R, D, OK);
 else if (v === "favorites") favKey(ev, L, U, D, OK);
 else if (v === "settings") { if (L) { ev.preventDefault(); enterRail(); } }
}
function enterRail() { S.rail = RAIL.map(function (r) { return r.id; }).indexOf(S.view === "detail" ? "browse" : S.view); if (S.rail < 0) S.rail = 0; renderRail(); }
function activateRail(id) {
 S.rail = null;
 if (id === "home") { S.view = "home"; S.home = {zone:"cards", i:0}; }
 else if (id === "browse") { S.view = "browse"; S.browse.col = 0; }
 else if (id === "search") { S.view = "search"; S.search.zone = "input"; }
 else if (id === "favorites") { S.view = "favorites"; S.fav.si = 0; }
 else if (id === "webeditor") { openWeb(); return; }
 else if (id === "settings") { S.view = "settings"; }
 render();
}
function goBack() {
 if (S.rail !== null) { S.rail = null; render(); return; }
 if (S.view === "detail") { S.view = "browse"; S.detail.result = null; render(); return; }
 if (S.view !== "home") { S.view = "home"; render(); return; }
 try { if (window.webOSSystem && window.webOSSystem.platformBack) return window.webOSSystem.platformBack(); } catch (e) {}
 try { window.close(); } catch (e) {}
}

function homeKey(ev, L, U, R, D, OK) {
 ev.preventDefault(); var hm = S.home;
 if (hm.zone === "cards") {
  var row = Math.floor(hm.i / 2), col = hm.i % 2;
  if (L) { if (col === 0) return enterRail(); hm.i -= 1; }
  else if (R) { if (col === 1) return; hm.i += 1; }
  else if (U) { if (row === 0) return; hm.i -= 2; }
  else if (D) { if (row === 1) { if (S.recent.length) { hm.zone = "recent"; hm.i = 0; } } else hm.i += 2; }
  else if (OK) return activateCard(hm.i);
 } else { // recent
  if (L) { if (hm.i === 0) return enterRail(); hm.i -= 1; }
  else if (R) { hm.i = Math.min(S.recent.length - 1, hm.i + 1); }
  else if (U) { hm.zone = "cards"; hm.i = 2; }
  else if (OK) { var u = S.recent[hm.i]; if (byUri[u]) openDetail(byUri[u], "home"); return; }
 }
 renderHome();
}
function activateCard(i) {
 if (i === 0) { S.view = "browse"; S.browse.col = 0; render(); }
 else if (i === 1) { S.view = "search"; S.search.zone = "input"; render(); }
 else if (i === 2) { openWeb(); }
 else if (i === 3) { S.view = "favorites"; S.fav.si = 0; render(); }
}

function browseKey(ev, L, U, R, D, OK) {
 ev.preventDefault(); var b = S.browse;
 if (b.col === 0) {
  if (U) { b.mi = Math.max(0, b.mi - 1); b.cat = b.mi; }
  else if (D) { b.mi = Math.min(CATEGORIES.length - 1, b.mi + 1); b.cat = b.mi; }
  else if (L) return enterRail();
  else if (R || OK) { b.cat = b.mi; b.col = 1; b.mi = 0; }
 } else {
  var methods = CATEGORIES[b.cat].methods;
  if (U) b.mi = Math.max(0, b.mi - 1);
  else if (D) b.mi = Math.min(methods.length - 1, b.mi + 1);
  else if (L) { b.col = 0; b.mi = b.cat; }
  else if (R || OK) { return openDetail(methods[b.mi], "browse"); }
 }
 renderBrowse();
}

function detailKey(ev, U, D, OK) {
 ev.preventDefault(); var d = S.detail;
 if (U) { d.bi = Math.max(0, d.bi - 1); renderDetail(); }
 else if (D) { d.bi = Math.min(2, d.bi + 1); renderDetail(); }
 else if (OK) {
  if (d.bi === 0) { if (d.m.d) openGate(); else runMethod(); }
  else if (d.bi === 1) copyCmd();
  else if (d.bi === 2) toggleFav();
 }
}

function webKey(ev, L, OK) {
 ev.preventDefault();
 if (L) return enterRail();
 if (OK) { if (S.web.status && S.web.status.running) stopWeb(); else openWeb(); }
}

function searchKey(ev, L, U, R, D, OK) {
 var s = S.search;
 if (s.zone === "input") {
  if (D && s.results.length) { ev.preventDefault(); s.zone = "results"; s.si = 0; var inp = $("searchinput"); if (inp) inp.blur(); renderSearch(); }
  else if (L && (!$("searchinput") || !s.q)) { ev.preventDefault(); enterRail(); }
  // let typing & OK pass to the input / virtual keyboard
 } else {
  ev.preventDefault();
  if (U) { if (s.si === 0) { s.zone = "input"; var i2 = $("searchinput"); if (i2) i2.focus(); } else s.si--; renderSearch(); }
  else if (D) { s.si = Math.min(s.results.length - 1, s.si + 1); renderSearch(); }
  else if (L) enterRail();
  else if (OK) openDetail(s.results[s.si], "search");
 }
}

function favKey(ev, L, U, D, OK) {
 ev.preventDefault(); var items = S.favs.map(function (u) { return byUri[u]; }).filter(Boolean);
 if (!items.length) { if (L) enterRail(); return; }
 if (U) { if (S.fav.si === 0) return enterRail(); S.fav.si--; }
 else if (D) S.fav.si = Math.min(items.length - 1, S.fav.si + 1);
 else if (L) return enterRail();
 else if (OK) return openDetail(items[S.fav.si], "favorites");
 renderFav();
}

/* ---------- actions ---------- */
function openDetail(m, from) {
 if (!m) return;
 S.detail = {m:m, bi:0, from:from, result:null, running:false};
 S.recent = [m.u].concat(S.recent.filter(function (u) { return u !== m.u; })).slice(0, 12);
 store("la_recent", S.recent);
 S.view = "detail"; render();
}
function toggleFav() {
 var u = S.detail.m.u, i = S.favs.indexOf(u);
 if (i >= 0) S.favs.splice(i, 1); else S.favs.unshift(u);
 store("la_favs", S.favs); renderDetail();
}
function copyCmd() {
 var cmd = "luna-send -n 1 -f " + S.detail.m.u + " '{}'";
 try { if (navigator.clipboard) navigator.clipboard.writeText(cmd).catch(function () {}); } catch (e) {}
 S.detail.result = {returnValue:true, copied:cmd}; renderDetail();
}
function runMethod() {
 var m = S.detail.m; S.detail.result = {returnValue:true, status:"running…"}; renderDetail();
 if (!window.Luna) { S.detail.result = {returnValue:false, errorText:"bridge service unavailable"}; return renderDetail(); }
 Luna.run({uri:m.u, params:{}, subscribe:false}, function (r) { S.detail.result = r || {returnValue:false, errorText:"no reply"}; if (S.view === "detail") renderDetail(); });
}

/* danger gate */
var holdTimer = null, holdStart = 0, holdRAF = null;
function openGate() {
 var m = S.detail.m;
 $("gate").innerHTML = '<div class="gatebox"><div class="dic">⚠️</div><h3>This can change or damage the TV</h3>' +
  '<p>' + esc(m.u) + ' is flagged dangerous.  It may change settings, inputs, power, or wipe data.</p>' +
  '<div class="hold">Hold <span class="key" style="border-color:rgba(255,93,93,.6)">OK</span> to confirm</div>' +
  '<div class="holdbar"><i id="holdi"></i></div><div class="gatehint">Release to cancel · Back to go back</div></div>';
 $("gate").classList.remove("hidden");
}
function closeGate() { $("gate").classList.add("hidden"); $("gate").innerHTML = ""; cancelHold(); }
function cancelHold() { if (holdTimer) clearTimeout(holdTimer); holdTimer = null; if (holdRAF) cancelAnimationFrame(holdRAF); holdRAF = null; var i = $("holdi"); if (i) i.style.width = "0"; }
function gateKey(ev, BACK, OK) {
 ev.preventDefault();
 if (BACK) return closeGate();
 if (OK) {
  if (!holdStart) { holdStart = Date.now(); tickHold(); }
  // each repeat keydown refreshes the release watchdog
  if (holdTimer) clearTimeout(holdTimer);
  holdTimer = setTimeout(function () { holdStart = 0; cancelHold(); }, 260);
 }
}
function tickHold() {
 holdRAF = requestAnimationFrame(function () {
  if (!holdStart) return;
  var p = Math.min(1, (Date.now() - holdStart) / 1200);
  var i = $("holdi"); if (i) i.style.width = (p * 100) + "%";
  if (p >= 1) { holdStart = 0; cancelHold(); closeGate(); runMethod(); }
  else tickHold();
 });
}

/* web editor */
function openWeb() {
 S.view = "webeditor"; S.web.loading = true; render();
 svcCall("webStatus", {}, function (r) {
  if (r && r.running) { S.web.status = r; S.web.loading = false; return render(); }
  svcCall("webStart", {port:28472}, function (r2) {
   S.web.loading = false;
   S.web.status = (r2 && r2.returnValue !== false) ? r2 : null;
   if (!S.web.status) S.web.err = (r2 && r2.errorText) || "could not start";
   render();
  });
 });
}
function stopWeb() { svcCall("webStop", {}, function () { S.web.status = null; render(); }); }
function svcCall(method, params, cb) {
 if (!window.Luna) return cb({returnValue:false, errorText:"no bridge"});
 Luna.raw(Luna.SERVICE + "/" + method, params || {}, function (r) { cb(r || {}); });
}

})();
