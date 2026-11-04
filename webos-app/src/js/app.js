/* app.js - Luna Atlas UI, ES5. Browse/search the catalog and run commands. */
(function () {
  "use strict";
  var DATA = null, SERVICES = [], curSvc = null, curMethod = null, catFilter = null;

  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function esc(s) { return String(s == null ? "" : s); }

  function accBadge(a) { var e = el("span", "badge b-" + (a || "unknown"), a || "unknown"); return e; }

  function load() {
    var x = new XMLHttpRequest();
    x.open("GET", "app-catalog.json", true);
    x.onreadystatechange = function () {
      if (x.readyState === 4) {
        if (x.status === 200 || x.status === 0) {
          try { DATA = JSON.parse(x.responseText); } catch (e) { fatal("Catalog parse error: " + e); return; }
          SERVICES = DATA.services || [];
          boot();
        } else { fatal("Could not load app-catalog.json (" + x.status + ")"); }
      }
    };
    x.send();
  }
  function fatal(m) { $("methodlist").innerHTML = '<div class="empty">' + esc(m) + "</div>"; }

  function boot() {
    var c = DATA.counts || {};
    $("stats").textContent = (c.methods || 0) + " methods / " + (c.services || 0) + " services";
    buildCats(c.by_category || {});
    renderServices("");
    // report bridge/root status
    if (window.Luna) Luna.status(function (r) {
      if (r && r.root === true) $("hint").textContent = "Bridge service: root (full access). Red = can change/damage the TV.";
      else if (r && r.returnValue) $("hint").textContent = "Bridge service running (public access; elevate in Homebrew Channel for private methods).";
    });
    wireKeys();
    initWeb();
    $("search").addEventListener("input", function () { curSvc = null; renderServices(this.value); });
  }

  function buildCats(cats) {
    var box = $("cats"); box.innerHTML = "";
    var all = el("span", "chip active", "all"); all.tabIndex = 0;
    all.onclick = function () { setCat(null, all); };
    box.appendChild(all);
    Object.keys(cats).sort(function (a, b) { return cats[b] - cats[a]; }).forEach(function (k) {
      var ch = el("span", "chip", k + " (" + cats[k] + ")"); ch.tabIndex = 0;
      ch.setAttribute("data-cat", k);
      ch.onclick = function () { setCat(k, ch); };
      box.appendChild(ch);
    });
  }
  function setCat(k, node) {
    catFilter = k;
    var chips = document.querySelectorAll("#cats .chip");
    for (var i = 0; i < chips.length; i++) chips[i].className = "chip" + (chips[i] === node ? " active" : "");
    curSvc = null; renderServices($("search").value);
  }

  function matchMethod(m, svc, q) {
    if (catFilter && m.c !== catFilter) return false;
    if (!q) return true;
    q = q.toLowerCase();
    return (m.m.toLowerCase().indexOf(q) >= 0) || (svc.toLowerCase().indexOf(q) >= 0) ||
           (m.u.toLowerCase().indexOf(q) >= 0) || ((m.desc || "").toLowerCase().indexOf(q) >= 0);
  }

  // Left pane: services (filtered to those with matching methods), or when searching, shows matches directly.
  function renderServices(q) {
    var nav = $("svclist"); nav.innerHTML = "";
    var hits = [];
    SERVICES.forEach(function (s) {
      var n = 0;
      for (var i = 0; i < s.methods.length; i++) if (matchMethod(s.methods[i], s.service, q)) n++;
      if (n > 0) hits.push({ s: s, n: n });
    });
    if (!hits.length) { nav.innerHTML = '<div class="empty">No matches</div>'; $("methodlist").innerHTML = ""; $("detail").innerHTML = ""; return; }
    hits.forEach(function (h) {
      var r = el("div", "row"); r.tabIndex = -1;
      var nm = el("span", "name", h.s.service); r.appendChild(nm);
      r.appendChild(el("span", "count", String(h.n)));
      r.onclick = function () { selectService(h.s, q, r); };
      r._svc = h.s;
      nav.appendChild(r);
    });
    // auto-open first
    selectService(hits[0].s, q, nav.firstChild);
  }

  function selectService(s, q, node) {
    curSvc = s;
    var rows = $("svclist").children;
    for (var i = 0; i < rows.length; i++) rows[i].className = "row" + (rows[i] === node ? " sel" : "");
    renderMethods(s, q);
  }

  function renderMethods(s, q) {
    var box = $("methodlist"); box.innerHTML = "";
    var shown = [];
    s.methods.forEach(function (m) { if (matchMethod(m, s.service, q)) shown.push(m); });
    shown.forEach(function (m) {
      var r = el("div", "row"); r.tabIndex = -1;
      var left = el("div");
      var nm = el("span", "name", m.m); left.appendChild(nm);
      if (m.desc) { var sm = el("small", null, m.desc.slice(0, 90)); left.appendChild(sm); }
      r.appendChild(left);
      var bad = el("div");
      bad.appendChild(accBadge(m.a));
      if (m.s) bad.appendChild(el("span", "badge b-sub", "sub"));
      if (m.d) bad.appendChild(el("span", "badge b-danger", "!"));
      r.appendChild(bad);
      r.onclick = function () { selectMethod(m, r); };
      box.appendChild(r);
    });
    if (shown.length) selectMethod(shown[0], box.firstChild);
  }

  function skeleton(m) {
    var o = {}; var p = m.p || {};
    Object.keys(p).forEach(function (k) {
      var t = (p[k] || "").toLowerCase();
      if (t.indexOf("required") >= 0) {
        o[k] = t.indexOf("bool") >= 0 ? false : (t.indexOf("int") >= 0 || t.indexOf("number") >= 0) ? 0 : "";
      }
    });
    if (m.s) o.subscribe = true;
    return o;
  }

  function selectMethod(m, node) {
    curMethod = m;
    var rows = $("methodlist").children;
    for (var i = 0; i < rows.length; i++) rows[i].className = "row" + (rows[i] === node ? " sel" : "");
    renderDetail(m);
  }

  function renderDetail(m) {
    var d = $("detail"); d.innerHTML = "";
    d.appendChild(el("h2", null, m.m));
    d.appendChild(el("div", "uri", m.u));
    var meta = el("div", "meta");
    meta.appendChild(accBadge(m.a));
    if (m.s) meta.appendChild(el("span", "badge b-sub", "subscribe"));
    if (m.d) meta.appendChild(el("span", "badge b-danger", "dangerous"));
    meta.appendChild(el("span", "badge b-unknown", m.c));
    d.appendChild(meta);
    if (m.desc) d.appendChild(el("div", "desc", m.desc));

    var pk = Object.keys(m.p || {});
    if (pk.length) {
      var t = el("table", "ptable");
      pk.forEach(function (k) {
        var tr = el("tr");
        tr.appendChild(el("td", "k", k));
        tr.appendChild(el("td", null, m.p[k]));
        t.appendChild(tr);
      });
      d.appendChild(t);
    }

    d.appendChild(el("label", "lbl", "Payload (JSON)"));
    var ta = el("textarea"); ta.id = "payload";
    ta.value = JSON.stringify(skeleton(m), null, 2);
    d.appendChild(ta);

    var confirmChk = null;
    if (m.d) {
      var db = el("div", "danger-box");
      db.appendChild(document.createTextNode("This call can change or damage the TV. "));
      var lab = el("label"); confirmChk = el("input"); confirmChk.type = "checkbox";
      lab.appendChild(confirmChk); lab.appendChild(document.createTextNode(" I understand, allow Run"));
      db.appendChild(lab); d.appendChild(db);
    }

    var row = el("div", "btnrow");
    var runBtn = el("button", "btn primary", "Run"); runBtn.id = "runbtn";
    if (m.d) { runBtn.disabled = true; confirmChk.onchange = function () { runBtn.disabled = !this.checked; }; }
    runBtn.onclick = function () { doRun(m, ta, runBtn); };
    row.appendChild(runBtn);
    var show = el("button", "btn", "Show command");
    show.onclick = function () { showCmd(m, ta); };
    row.appendChild(show);
    d.appendChild(row);

    var resp = el("div", "empty", "Response will appear here."); resp.id = "response";
    d.appendChild(resp);
  }

  function parsePayload(ta) {
    var txt = (ta.value || "").trim(); if (!txt) return {};
    return JSON.parse(txt); // throws -> caught by caller
  }

  function doRun(m, ta, btn) {
    var resp = $("response"); var params;
    try { params = parsePayload(ta); } catch (e) { resp.className = "err"; resp.textContent = "Invalid JSON payload: " + e; return; }
    resp.className = ""; resp.textContent = "Running " + m.u + " ...";
    btn.disabled = true;
    Luna.run({ uri: m.u, params: params, subscribe: !!m.s && params.subscribe === true }, function (r) {
      btn.disabled = false;
      var ok = r && r.returnValue !== false && !r.errorText;
      resp.className = ok ? "ok" : "err";
      var head = (r && r.__viaDirect ? "(direct bus call)\n" : "");
      resp.textContent = head + JSON.stringify(r, null, 2);
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Show the full luna-send command to read/type over SSH, plus a QR code so it
  // can be scanned to a phone. (On a TV there is no clipboard to paste into, so
  // "copy" is pointless; this is the useful form.)
  function showCmd(m, ta) {
    var params = "{}"; try { params = JSON.stringify(parsePayload(ta)); } catch (e) {}
    var cmd = "luna-send -n 1 -f " + m.u + " '" + params + "'";
    var resp = $("response"); resp.className = "cmdview";
    var html = '<div class="cmd">' + escapeHtml(cmd) + "</div>";
    try {
      if (typeof qrcode === "function") {
        var qr = qrcode(0, "L"); qr.addData(cmd); qr.make();
        html += '<div class="qr">' + qr.createSvgTag({ cellSize: 4, margin: 2 }) +
                "<span>Run it with root over SSH, or scan to send the command to your phone.</span></div>";
      }
    } catch (e) { html += '<div class="qrhint">Command too long for a QR code; read it above.</div>'; }
    resp.innerHTML = html;
    // best-effort clipboard (only does anything in a desktop browser)
    try {
      var t = document.createElement("textarea"); t.value = cmd; document.body.appendChild(t);
      t.select(); document.execCommand("copy"); document.body.removeChild(t);
    } catch (e) {}
  }

  /* ---- web access: toggle the service's LAN web server, show QR + URL + code ---- */
  var webOn = false;
  function svcCall(method, params, cb) {
    if (!window.Luna) { cb({}); return; }
    Luna.raw(Luna.SERVICE + "/" + method, params || {}, function (r) { cb(r || {}); });
  }
  function initWeb() {
    var btn = $("webaccess"); if (!btn) return;
    btn.onclick = toggleWeb;
    btn.addEventListener("keydown", function (ev) { if (ev.keyCode === 13) { ev.preventDefault(); toggleWeb(); } });
    svcCall("webStatus", {}, function (r) { setWeb(r && r.running, r); });
  }
  function setWeb(on, s) {
    webOn = !!on;
    var btn = $("webaccess"); if (btn) btn.className = "webbtn" + (webOn ? " on" : "");
    if (webOn && s && s.port) showWeb(s);
  }
  function toggleWeb() {
    var btn = $("webaccess");
    if (webOn) { svcCall("webStop", {}, function () { setWeb(false); hideWeb(); }); return; }
    if (btn) btn.textContent = "Starting...";
    svcCall("webStart", { port: 3000 }, function (r) {
      if (btn) { btn.innerHTML = 'Web access <span id="webdot" class="webdot"></span>'; }
      if (r && r.running) setWeb(true, r);
      else alertWeb((r && r.errorText) || "Could not start the web server.");
    });
  }
  function urlOf(s, ip) { return "http://" + (ip || (s.ips && s.ips[0]) || "<tv-ip>") + ":" + s.port; }
  function showWeb(s) {
    var url = urlOf(s);
    $("weburl").textContent = url;
    $("webcode").textContent = s.code || "----";
    var qr = $("webqr"); qr.innerHTML = "";
    try { if (typeof qrcode === "function") { var q = qrcode(0, "M"); q.addData(url); q.make(); qr.innerHTML = q.createSvgTag({ cellSize: 6, margin: 1 }); } } catch (e) {}
    var note = "Scan the QR with your phone's camera, or type the address on a computer on the same network.";
    if (s.ips && s.ips.length > 1) note += "  Other addresses: " + s.ips.slice(1).map(function (i) { return urlOf(s, i); }).join("  ");
    if (!s.ips || !s.ips.length) note = "This TV reports no network address; check it's on Wi-Fi or Ethernet.";
    $("webnote").textContent = note;
    $("weboverlay").className = "weboverlay";
  }
  function hideWeb() { var o = $("weboverlay"); if (o) o.className = "weboverlay hidden"; }
  function alertWeb(msg) { $("weburl").textContent = ""; $("webcode").textContent = ""; $("webqr").innerHTML = ""; $("webnote").textContent = msg; $("weboverlay").className = "weboverlay"; }
  function webOverlayOpen() { var o = $("weboverlay"); return o && o.className.indexOf("hidden") < 0; }

  /* ---- basic remote/keyboard navigation between the three panes ---- */
  function wireKeys() {
    var panes = ["svclist", "methodlist"];
    document.addEventListener("keydown", function (ev) {
      var k = ev.keyCode;
      // Back / Esc: close the web overlay first (server keeps running), else move focus left
      if (k === 461 || k === 27) {
        if (webOverlayOpen()) { hideWeb(); ev.preventDefault(); return; }
        focusPane("svclist"); ev.preventDefault(); return;
      }
      var active = document.activeElement;
      if (k === 38 || k === 40) { // up / down within a pane
        var pane = active && active.closest ? active.closest(".pane") : null;
        if (pane && (pane.id === "svclist" || pane.id === "methodlist")) {
          moveRow(pane, k === 40 ? 1 : -1); ev.preventDefault();
        }
      }
    });
  }
  function focusPane(id) { var p = $(id); if (p) p.focus(); }
  function moveRow(pane, dir) {
    var rows = pane.querySelectorAll(".row");
    if (!rows.length) return;
    var idx = -1;
    for (var i = 0; i < rows.length; i++) if (rows[i].className.indexOf("sel") >= 0) idx = i;
    idx = Math.max(0, Math.min(rows.length - 1, idx + dir));
    rows[idx].click();
    rows[idx].scrollIntoView({ block: "nearest" });
  }

  // polyfill closest for old webkit
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (sel) {
      var e = this;
      while (e) { if ((e.matches || e.webkitMatchesSelector).call(e, sel)) return e; e = e.parentElement; }
      return null;
    };
  }

  load();
})();
