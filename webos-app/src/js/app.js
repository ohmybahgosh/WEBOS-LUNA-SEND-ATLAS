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
    // Focus the service column so the D-pad works without first clicking.
    setCol("svclist");
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
    btn.onclick = openWeb;
    btn.addEventListener("keydown", function (ev) { if (ev.keyCode === 13) { ev.preventDefault(); openWeb(); } });
    var stop = $("webstop");
    if (stop) { stop.onclick = stopWeb; stop.addEventListener("keydown", function (ev) { if (ev.keyCode === 13) { ev.preventDefault(); stopWeb(); } }); }
    // Click outside the panel closes it too (pointer fallback for the Magic Remote).
    var ov = $("weboverlay");
    if (ov) ov.addEventListener("click", function (ev) { if (ev.target === ov) hideWeb(); });
    // Reflect the current state on the button only.  Never pop the panel open on
    // launch; the panel appears when the user chooses Web access.
    svcCall("webStatus", {}, function (r) { setWeb(r && r.running); });
  }
  function setWeb(on) {
    webOn = !!on;
    var btn = $("webaccess"); if (btn) btn.className = "webbtn" + (webOn ? " on" : "");
  }
  // Tapping Web access opens the panel: start the server if it's off, otherwise
  // show the current address and code again (fetched fresh).
  function openWeb() {
    if (webOn) {
      svcCall("webStatus", {}, function (r) {
        if (r && r.running && r.port) { setWeb(true); showWeb(r); }
        else startWeb();
      });
      return;
    }
    startWeb();
  }
  function startWeb() {
    var btn = $("webaccess"); if (btn) btn.textContent = "Starting...";
    svcCall("webStart", { port: 28472 }, function (r) {
      if (btn) { btn.innerHTML = 'Web access <span id="webdot" class="webdot"></span>'; }
      if (r && r.running) { setWeb(true); showWeb(r); }
      else { setWeb(false); alertWeb((r && r.errorText) || "Could not start the web server."); }
    });
  }
  function stopWeb() { svcCall("webStop", {}, function () { setWeb(false); hideWeb(); }); }
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
    var stop = $("webstop"); if (stop) { try { stop.focus(); } catch (e) {} }
  }
  function hideWeb() { var o = $("weboverlay"); if (o) o.className = "weboverlay hidden"; }
  function alertWeb(msg) { $("weburl").textContent = ""; $("webcode").textContent = ""; $("webqr").innerHTML = ""; $("webnote").textContent = msg; $("weboverlay").className = "weboverlay"; }
  function webOverlayOpen() { var o = $("weboverlay"); return o && o.className.indexOf("hidden") < 0; }

  /* ---- D-pad / remote navigation across the three columns ----
     Columns: svclist (services) -> methodlist (methods) -> detail (form).
     Up/Down moves the selection inside the focused list column; Left/Right moves
     between columns; OK steps right (into the next column); Back steps left, and
     leaves the app from the first column. The Magic Remote cursor still works via
     the click handlers on every row and control. */
  var col = "svclist";
  function colEl(id) { return $(id); }
  function selRowOf(id) { var rows = $(id).querySelectorAll(".row"); for (var i = 0; i < rows.length; i++) if (rows[i].className.indexOf("sel") >= 0) return rows[i]; return rows[0] || null; }
  function setCol(c) {
    col = c;
    ["svclist", "methodlist", "detail"].forEach(function (id) {
      var p = $(id); if (!p) return;
      p.className = p.className.replace(/\s*col-focus/g, "") + (id === c ? " col-focus" : "");
    });
    if (c === "detail") { focusDetail(0); return; }
    var sel = selRowOf(c);
    if (sel) { try { sel.focus(); } catch (e) {} sel.scrollIntoView({ block: "nearest" }); }
    else { var p = $(c); if (p) try { p.focus(); } catch (e) {} }
  }
  function moveSel(id, dir) {
    var rows = $(id).querySelectorAll(".row"); if (!rows.length) return;
    var idx = 0; for (var i = 0; i < rows.length; i++) if (rows[i].className.indexOf("sel") >= 0) idx = i;
    idx = Math.max(0, Math.min(rows.length - 1, idx + dir));
    rows[idx].click(); rows[idx].scrollIntoView({ block: "nearest" }); try { rows[idx].focus(); } catch (e) {}
  }
  function detailControls() { return $("detail").querySelectorAll("input, button"); }
  function focusDetail(idx) {
    var c = detailControls(); if (!c.length) { try { $("detail").focus(); } catch (e) {} return; }
    idx = Math.max(0, Math.min(c.length - 1, idx));
    try { c[idx].focus(); } catch (e) {} c[idx].scrollIntoView({ block: "nearest" });
  }
  function moveDetail(dir) {
    var c = detailControls(); if (!c.length) return;
    var ae = document.activeElement, idx = 0;
    for (var i = 0; i < c.length; i++) if (c[i] === ae) idx = i;
    focusDetail(idx + dir);
  }
  function wireKeys() {
    document.addEventListener("keydown", function (ev) {
      var k = ev.keyCode, key = ev.key;
      // Back / Esc: close the web overlay, else step left a column, else leave the app.
      if (k === 461 || k === 27 || k === 8 || key === "Back" || key === "GoBack" || key === "BrowserBack") {
        ev.preventDefault();
        if (webOverlayOpen()) { hideWeb(); return; }
        if (col === "detail") { setCol("methodlist"); return; }
        if (col === "methodlist") { setCol("svclist"); return; }
        try { if (window.webOSSystem && window.webOSSystem.platformBack) { window.webOSSystem.platformBack(); return; } } catch (e) {}
        try { window.close(); } catch (e) {}
        return;
      }
      if (webOverlayOpen()) return; // panel open: only Back / cursor act on it
      var ae = document.activeElement;
      // From the search box, Down or Right drops into the service list.
      if (ae && ae.id === "search" && (k === 40 || k === 39)) { ev.preventDefault(); setCol("svclist"); return; }
      var typing = ae && (ae.id === "search" || ae.id === "payload");
      if (k === 37) { if (typing) return; ev.preventDefault(); if (col === "detail") setCol("methodlist"); else if (col === "methodlist") setCol("svclist"); return; }
      if (k === 39) { if (typing) return; ev.preventDefault(); if (col === "svclist") setCol("methodlist"); else if (col === "methodlist") setCol("detail"); return; }
      if (k === 38 || k === 40) {
        if (typing) return; ev.preventDefault();
        if (col === "detail") moveDetail(k === 40 ? 1 : -1); else moveSel(col, k === 40 ? 1 : -1);
        return;
      }
      if (k === 13) { // OK: step into the next column (buttons handle their own Enter)
        if (col === "svclist") { ev.preventDefault(); setCol("methodlist"); return; }
        if (col === "methodlist") { ev.preventDefault(); setCol("detail"); return; }
      }
    });
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
