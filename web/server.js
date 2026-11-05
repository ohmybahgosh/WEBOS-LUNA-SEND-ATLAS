/* Luna Atlas web server for `luna-atlas serve` (SSH / localhost).
 * Serves the UI and runs one luna-send call on POST /api/run.  Open (no code)
 * because it binds localhost and is reached over an SSH tunnel.
 * Node ships on webOS, so this needs nothing installed.
 * Usage: node server.js [port] [--host 127.0.0.1] [--code CODE]
 */
"use strict";
var http = require("http"), fs = require("fs"), path = require("path"), execFile = require("child_process").execFile;
var ROOT = __dirname;
var args = process.argv.slice(2);
var PORT = parseInt(args[0] || "28472", 10);
var HOST = "127.0.0.1";
for (var i = 1; i < args.length; i++) { if (args[i] === "--host") HOST = args[++i]; }
var MIME = { ".html": "text/html", ".css": "text/css", ".js": "application/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png" };

function send(res, code, obj, type) {
  var body = (typeof obj === "string" || Buffer.isBuffer(obj)) ? obj : JSON.stringify(obj);
  res.writeHead(code, { "Content-Type": type || "application/json", "Cache-Control": "no-store" }); res.end(body);
}
function runLuna(uri, params, cb) {
  execFile("luna-send", ["-n", "1", uri, JSON.stringify(params || {})], { timeout: 12000, maxBuffer: 1 << 20 }, function (err, so, se) {
    var out = (so || "").trim();
    try { cb(JSON.parse(out)); } catch (e) { cb({ returnValue: false, errorText: (se || (err && err.message) || out || "luna-send failed").toString().trim() }); }
  });
}

http.createServer(function (req, res) {
  var u = req.url.replace(/\?.*$/, "");
  if (u === "/api/info") return send(res, 200, { app: "Luna Atlas", auth: false });
  if (u === "/api/catalog") return serveFile(res, "/catalog.json");
  if (u === "/api/run" && req.method === "POST") {
    var b = ""; req.on("data", function (d) { b += d; if (b.length > 2e6) req.destroy(); });
    req.on("end", function () {
      var j; try { j = JSON.parse(b || "{}"); } catch (e) { return send(res, 400, { returnValue: false, errorText: "bad json" }); }
      if (!j.uri || j.uri.indexOf("luna://") !== 0) return send(res, 400, { returnValue: false, errorText: "bad or missing luna:// uri" });
      runLuna(j.uri, j.params || {}, function (o) { send(res, 200, o); });
    });
    return;
  }
  serveFile(res, u === "/" ? "/index.html" : u);
}).listen(PORT, HOST, function () { console.log("Luna Atlas web server on http://" + HOST + ":" + PORT); });

function serveFile(res, u) {
  var f = path.join(ROOT, path.normalize(decodeURIComponent(u)).replace(/^(\.\.(\/|\\|$))+/, ""));
  if (f.indexOf(ROOT) !== 0) { res.statusCode = 403; res.end("forbidden"); return; }
  fs.readFile(f, function (e, data) { if (e) { res.statusCode = 404; res.end("not found"); return; } send(res, 200, data, MIME[path.extname(f)] || "application/octet-stream"); });
}
