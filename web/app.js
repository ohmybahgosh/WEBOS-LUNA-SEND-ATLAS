/* Luna Atlas web UI - browse the catalog and run commands.
 * Works against both servers: the open localhost one (no code) and the app's
 * LAN server (enter the code shown on the TV). */
(function () {
  "use strict";
  var DATA = null, METHODS = [], cat = null, TOKEN = null;
  var $ = function (s) { return document.querySelector(s); };
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  function esc(s) { return String(s == null ? "" : s); }
  function hdr() { return TOKEN ? { "X-Token": TOKEN } : {}; }

  fetch("/api/info").then(function (r) { return r.json(); }).then(function (info) {
    if (info && info.auth) showLogin(); else loadCatalog();
  }).catch(function () { loadCatalog(); });

  function showLogin(msg) {
    var ov = el("div", "login");
    var box = el("div", "login-box");
    box.appendChild(el("div", "login-title", "Luna Atlas"));
    box.appendChild(el("div", "login-sub", "Enter the code shown on your TV."));
    var inp = el("input"); inp.id = "code"; inp.placeholder = "XXXX-XXXX"; inp.autocapitalize = "characters"; inp.autocomplete = "off";
    box.appendChild(inp);
    if (msg) box.appendChild(el("div", "login-err", msg));
    var btn = el("button", "act primary", "Connect");
    btn.onclick = function () { tryLogin(inp.value, ov, btn); };
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") btn.click(); });
    box.appendChild(btn);
    ov.appendChild(box); document.body.appendChild(ov); inp.focus();
  }
  function tryLogin(code, ov, btn) {
    btn.disabled = true;
    fetch("/api/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: code }) })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (x) {
        btn.disabled = false;
        if (x.ok && x.j.token) { TOKEN = x.j.token; document.body.removeChild(ov); loadCatalog(); }
        else { document.body.removeChild(ov); showLogin((x.j && x.j.error) || "Wrong code."); }
      })
      .catch(function () { btn.disabled = false; });
  }

  function loadCatalog() {
    fetch("/api/catalog", { headers: hdr() }).then(function (r) {
      if (r.status === 401) { showLogin("Session expired, enter the code again."); return null; }
      return r.json();
    }).then(function (d) {
      if (!d) return;
      DATA = d; METHODS = [];
      (d.services || []).forEach(function (s) { s.methods.forEach(function (m) { m.svc = s.service; METHODS.push(m); }); });
      var c = d.counts || {};
      $("#stats").textContent = (c.methods || 0) + " methods / " + (c.services || 0) + " services";
      buildCats(c.by_category || {}); render();
      $("#search").addEventListener("input", render);
    }).catch(function (e) { $("#list").innerHTML = '<div class="empty">Could not load the catalog<br>' + esc(e) + "</div>"; });
  }

  function buildCats(cats) {
    var box = $("#cats"); box.innerHTML = "";
    var all = el("span", "chip active", "all"); all.onclick = function () { setCat(null, all); }; box.appendChild(all);
    Object.keys(cats).sort(function (a, b) { return cats[b] - cats[a]; }).forEach(function (k) {
      var ch = el("span", "chip", k + " (" + cats[k] + ")"); ch.onclick = function () { setCat(k, ch); }; box.appendChild(ch);
    });
  }
  function setCat(k, node) { cat = k; [].forEach.call(document.querySelectorAll(".chip"), function (c) { c.classList.toggle("active", c === node); }); render(); }

  function render() {
    var q = $("#search").value.trim().toLowerCase(), box = $("#list"); box.innerHTML = "";
    var n = 0, LIM = 400;
    for (var i = 0; i < METHODS.length && n < LIM; i++) {
      var m = METHODS[i];
      if (cat && m.c !== cat) continue;
      if (q && (m.svc + " " + m.m + " " + (m.desc || "")).toLowerCase().indexOf(q) < 0) continue;
      box.appendChild(item(m)); n++;
    }
    if (!n) box.innerHTML = '<div class="empty">No matches</div>';
    else if (n >= LIM) box.appendChild(el("div", "empty", "Showing first " + LIM + " - narrow your search"));
  }
  function badge(a) { return el("span", "badge b-" + (a || "unknown"), a || "unknown"); }
  function item(m) {
    var r = el("div", "item"); var left = el("div", "mu");
    left.appendChild(el("div", "m", m.m)); left.appendChild(el("div", "svc", m.svc));
    if (m.desc) left.appendChild(el("div", "d", m.desc)); r.appendChild(left);
    var b = el("div"); b.appendChild(badge(m.a)); if (m.d) b.appendChild(el("span", "badge b-danger", "!")); r.appendChild(b);
    r.onclick = function () { [].forEach.call(document.querySelectorAll(".item"), function (x) { x.classList.remove("sel"); }); r.classList.add("sel"); openDetail(m); };
    return r;
  }
  function skeleton(m) {
    var o = {}, p = m.p || {};
    Object.keys(p).forEach(function (k) { var t = (p[k] || "").toLowerCase(); if (t.indexOf("required") >= 0) o[k] = t.indexOf("bool") >= 0 ? false : (/int|number/.test(t) ? 0 : ""); });
    if (m.s) o.subscribe = true; return o;
  }
  function openDetail(m) {
    document.body.classList.add("viewing");
    var d = $("#detail"); d.innerHTML = "";
    var back = el("button", "back", "← Back"); back.onclick = function () { document.body.classList.remove("viewing"); }; d.appendChild(back);
    d.appendChild(el("h2", null, m.m)); d.appendChild(el("div", "uri", m.u));
    var meta = el("div", "meta"); meta.appendChild(badge(m.a));
    if (m.s) meta.appendChild(el("span", "badge b-sub", "subscribe"));
    if (m.d) meta.appendChild(el("span", "badge b-danger", "dangerous"));
    meta.appendChild(el("span", "badge b-unknown", m.c)); d.appendChild(meta);
    if (m.desc) d.appendChild(el("div", "desc", m.desc));
    var pk = Object.keys(m.p || {});
    if (pk.length) { var t = el("table", "p"); pk.forEach(function (k) { var tr = el("tr"); tr.appendChild(el("td", "k", k)); tr.appendChild(el("td", null, m.p[k])); t.appendChild(tr); }); d.appendChild(t); }
    d.appendChild(el("label", "lbl", "Payload (JSON)"));
    var ta = el("textarea"); ta.id = "payload"; ta.value = JSON.stringify(skeleton(m), null, 2); d.appendChild(ta);
    var chk = null;
    if (m.d) { var db = el("div", "danger"); db.appendChild(document.createTextNode("This can change or damage the TV. ")); var lab = el("label"); chk = el("input"); chk.type = "checkbox"; lab.appendChild(chk); lab.appendChild(document.createTextNode(" I understand, allow Run")); db.appendChild(lab); d.appendChild(db); }
    var btns = el("div", "btns");
    var run = el("button", "act primary", "Run"); run.id = "runb";
    if (m.d) { run.disabled = true; chk.onchange = function () { run.disabled = !this.checked; }; }
    run.onclick = function () { doRun(m, ta, run); }; btns.appendChild(run);
    var copy = el("button", "act", "Copy luna-send"); copy.onclick = function () { copyCmd(m, ta); }; btns.appendChild(copy);
    d.appendChild(btns);
    var resp = el("div"); resp.id = "resp"; resp.textContent = "Response appears here."; d.appendChild(resp);
  }
  function cmdOf(m, ta) { var p = "{}"; try { p = JSON.stringify(JSON.parse(ta.value || "{}")); } catch (e) { p = ta.value; } return "luna-send -n 1 -f " + m.u + " '" + p + "'"; }
  function copyCmd(m, ta) {
    var cmd = cmdOf(m, ta);
    if (navigator.clipboard) navigator.clipboard.writeText(cmd).then(function () { toast("Copied"); }, function () { fb(cmd); });
    else fb(cmd);
    $("#resp").className = ""; $("#resp").textContent = cmd;
    function fb(t) { var a = el("textarea"); a.value = t; document.body.appendChild(a); a.select(); try { document.execCommand("copy"); toast("Copied"); } catch (e) {} document.body.removeChild(a); }
  }
  function doRun(m, ta, btn) {
    var resp = $("#resp"), params;
    try { params = JSON.parse(ta.value || "{}"); } catch (e) { resp.className = "err"; resp.textContent = "Invalid JSON payload: " + e; return; }
    resp.className = ""; resp.textContent = "Running " + m.u + " ..."; btn.disabled = true;
    fetch("/api/run", { method: "POST", headers: Object.assign({ "Content-Type": "application/json" }, hdr()), body: JSON.stringify({ uri: m.u, params: params }) })
      .then(function (r) { if (r.status === 401) { showLogin("Session expired, enter the code again."); return null; } return r.json(); })
      .then(function (obj) {
        btn.disabled = !!m.d; if (!obj) return;
        resp.className = (obj.returnValue !== false && !obj.errorText) ? "ok" : "err";
        resp.textContent = JSON.stringify(obj, null, 2);
      })
      .catch(function (e) { btn.disabled = !!m.d; resp.className = "err"; resp.textContent = "Request failed: " + e; });
  }
  var toastT = null;
  function toast(msg) { var t = $("#toast"); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(function () { t.hidden = true; }, 1800); }
})();
