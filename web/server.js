/* Luna Atlas web server (fallback when busybox httpd is absent, which it is on
 * retail webOS).  Serves the UI from this folder and runs one luna-send call on
 * POST /cgi-bin/run.  Binds 127.0.0.1 only; reach it over an SSH tunnel.
 * Node is already on the TV, so this needs nothing installed.
 * Usage: node server.js [port]
 */
"use strict";
var http = require("http"), fs = require("fs"), path = require("path");
var execFile = require("child_process").execFile;
var ROOT = __dirname;
var PORT = parseInt(process.argv[2] || "3000", 10);
var HOST = "127.0.0.1";
var MIME = { ".html": "text/html", ".css": "text/css", ".js": "application/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png" };

function run(body, res) {
  var uri = "", payload = "{}";
  body.split("&").forEach(function (kv) {
    var i = kv.indexOf("="); if (i < 0) return;
    var k = kv.slice(0, i), v = decodeURIComponent(kv.slice(i + 1).replace(/\+/g, " "));
    if (k === "uri") uri = v; else if (k === "payload") payload = v;
  });
  res.setHeader("Content-Type", "application/json");
  if (!/^luna:\/\//.test(uri)) { res.end(JSON.stringify({ returnValue: false, errorText: "bad or missing luna:// uri" })); return; }
  execFile("luna-send", ["-n", "1", uri, payload || "{}"], { timeout: 12000, maxBuffer: 1 << 20 }, function (err, so, se) {
    var out = (so || "").trim();
    try { JSON.parse(out); res.end(out); }
    catch (e) { res.end(JSON.stringify({ returnValue: false, errorText: (se || (err && err.message) || out || "luna-send failed").toString().trim() })); }
  });
}

http.createServer(function (req, res) {
  var url = req.url.replace(/\?.*$/, "");
  if (req.method === "POST" && url === "/cgi-bin/run") {
    var body = ""; req.on("data", function (d) { body += d; if (body.length > 1e6) req.destroy(); });
    req.on("end", function () { run(body, res); });
    return;
  }
  var u = decodeURIComponent(url); if (u === "/") u = "/index.html";
  var f = path.join(ROOT, path.normalize(u).replace(/^(\.\.(\/|\\|$))+/, ""));
  if (f.indexOf(ROOT) !== 0) { res.statusCode = 403; res.end("forbidden"); return; }
  fs.readFile(f, function (e, data) {
    if (e) { res.statusCode = 404; res.end("not found"); return; }
    res.setHeader("Content-Type", MIME[path.extname(f)] || "application/octet-stream");
    res.end(data);
  });
}).listen(PORT, HOST, function () { console.log("Luna Atlas web server on http://" + HOST + ":" + PORT); });
