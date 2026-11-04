/* Luna Atlas LAN web server (the "web access" switch in the app).
 *
 * Serves the browser UI on http://<TV address>:<port>, protected by a short
 * code shown on the TV.  Modelled on TiviBro's web editor: the code is read off
 * the TV across the room (look-alike characters count as the same), a login
 * trades it for a token, logins are rate-limited per address, and the server
 * only runs while the switch is on.
 *
 * It does not run luna-send itself (the dev-mode service can't spawn it); the
 * host passes a `runner(uri, params, cb)` that relays through webos-service.
 *
 * Plain ES5 for the old Node on webOS.  No dependencies.
 */
"use strict";
var http = require("http"), fs = require("fs"), path = require("path"), os = require("os"), crypto = require("crypto");

// code alphabet with look-alikes left out (no 0 O 1 I L); typing folds the rest
var ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
var LOOK = { O: "0", Q: "0", I: "1", L: "1", S: "5", Z: "2", B: "8", G: "6", V: "U" };
function fold(p) { return String(p || "").replace(/[\s-]/g, "").toUpperCase().replace(/[OQILSZBGV]/g, function (c) { return LOOK[c]; }); }
function makeCode() {
  var b = crypto.randomBytes(8), s = "";
  for (var i = 0; i < 8; i++) s += ALPHABET[b[i] % ALPHABET.length];
  return s.slice(0, 4) + "-" + s.slice(4);
}
function ips() {
  var out = [], ifs = os.networkInterfaces();
  Object.keys(ifs).forEach(function (n) {
    (ifs[n] || []).forEach(function (a) { if ((a.family === "IPv4" || a.family === 4) && !a.internal) out.push(a.address); });
  });
  return out;
}

var MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "application/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png" };

function create(opts) {
  var webdir = opts.webdir, runner = opts.runner, log = opts.log || function () {};
  var st = { server: null, port: 0, code: "", tokens: {}, fails: {}, seen: {} };

  function send(res, code, obj, type) {
    var body = (typeof obj === "string" || Buffer.isBuffer(obj)) ? obj : JSON.stringify(obj);
    res.writeHead(code, { "Content-Type": type || "application/json; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
    res.end(body);
  }
  function readJSON(req, cb) {
    var c = [], n = 0, done = false;
    req.on("data", function (d) { n += d.length; if (n > 2 * 1024 * 1024 && !done) { done = true; cb(new Error("too large")); req.destroy(); return; } c.push(d); });
    req.on("end", function () { if (done) return; done = true; try { cb(null, JSON.parse(Buffer.concat(c).toString("utf8") || "{}")); } catch (e) { cb(e); } });
  }
  function same(a, b) { var x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); }
  function clients() { var now = Date.now(), k = 0; Object.keys(st.seen).forEach(function (t) { if (now - st.seen[t] < 20000) k++; else delete st.seen[t]; }); return k; }
  function status() { return { running: !!st.server, port: st.port, ips: ips(), code: st.code, clients: clients() }; }

  function serveStatic(res, u) {
    if (u === "/") u = "/index.html";
    var f = path.join(webdir, path.normalize(u).replace(/^(\.\.(\/|\\|$))+/, ""));
    if (f.indexOf(webdir) !== 0) { send(res, 403, "forbidden", "text/plain"); return; }
    fs.readFile(f, function (e, data) { if (e) { send(res, 404, "not found", "text/plain"); return; } send(res, 200, data, MIME[path.extname(f)] || "application/octet-stream"); });
  }

  function handle(req, res) {
    var u = req.url.split("?")[0], who = req.socket.remoteAddress || "?";
    if (req.method === "GET" && u === "/api/info") return send(res, 200, { app: "Luna Atlas", auth: true });
    if (u === "/api/login" && req.method === "POST") {
      var fl = st.fails[who] || { n: 0, until: 0 };
      if (fl.until > Date.now()) return send(res, 429, { error: "Too many tries.  Wait " + Math.ceil((fl.until - Date.now()) / 1000) + "s." });
      return readJSON(req, function (err, j) {
        if (err || !j || typeof j.code !== "string") return send(res, 400, { error: "bad request" });
        if (!st.code || !same(fold(j.code), fold(st.code))) {
          fl.n++; if (fl.n >= 5) { fl.until = Date.now() + 60000; fl.n = 0; } st.fails[who] = fl;
          log({ lv: "warn", event: "web login failed", from: who });
          return send(res, 401, { error: "Wrong code.  It's shown on the TV." });
        }
        delete st.fails[who];
        var tok = crypto.randomBytes(24).toString("hex"); st.tokens[tok] = Date.now(); st.seen[tok] = Date.now();
        log({ lv: "info", event: "web login", from: who });
        send(res, 200, { token: tok });
      });
    }
    // static shell is open; data + actions need a token
    if (req.method === "GET" && MIME[path.extname(u)] && u.indexOf("/api/") !== 0) return serveStatic(res, u);
    if (u === "/" ) return serveStatic(res, u);
    var tok = req.headers["x-token"];
    if (!tok || !st.tokens[tok]) return send(res, 401, { error: "Please enter the code shown on the TV." });
    st.seen[tok] = Date.now();
    if (u === "/api/catalog" && req.method === "GET") return serveStatic(res, "/catalog.json");
    if (u === "/api/run" && req.method === "POST") {
      return readJSON(req, function (err, j) {
        if (err || !j || typeof j.uri !== "string" || j.uri.indexOf("luna://") !== 0) return send(res, 400, { returnValue: false, errorText: "bad or missing luna:// uri" });
        runner(j.uri, (j.params && typeof j.params === "object") ? j.params : {}, function (reply) { send(res, 200, reply || { returnValue: false, errorText: "no reply" }); });
      });
    }
    send(res, 404, { error: "not found" });
  }

  function start(port, cb) {
    port = port || 28472;
    if (st.server) stop();
    st.code = makeCode();
    var srv = http.createServer(function (req, res) { try { handle(req, res); } catch (e) { try { send(res, 500, { error: "server error" }); } catch (x) {} } });
    srv.once("error", function (e) { st.server = null; cb(new Error(e.code === "EADDRINUSE" ? "Port " + port + " is in use." : (e.code || e.message))); });
    srv.listen(port, "0.0.0.0", function () { st.server = srv; st.port = port; log({ lv: "info", event: "web server on", port: port, ips: ips() }); cb(null, status()); });
  }
  function stop() { if (st.server) { try { st.server.close(); } catch (e) {} } st.server = null; st.port = 0; st.code = ""; st.tokens = {}; st.seen = {}; st.fails = {}; }

  return { start: start, stop: stop, status: status };
}
module.exports = { create: create };
