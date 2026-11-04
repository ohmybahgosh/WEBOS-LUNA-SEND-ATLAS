/*
 * Luna Atlas bridge + web server service.
 *
 * - run/status: relay a luna URI + payload to the bus via webos-service (works
 *   in the dev sandbox, where spawning luna-send is blocked).  Root via the
 *   Homebrew Channel "elevate service" reaches private methods.
 * - webStart/webStop/webStatus: turn on a LAN web server (webserver.js) so a
 *   phone or computer on the same network can browse and run commands, gated by
 *   a short code the app shows on the TV.
 *
 * webos-service and node core modules are provided by the TV runtime.
 */
"use strict";
var Service = require("webos-service");
var path = require("path");
var WebServer = require("./webserver");
var service = new Service("org.ohmybahgosh.lunaatlas.service");

function isRoot() { try { return typeof process.getuid === "function" && process.getuid() === 0; } catch (e) { return false; } }

// relay one call through the bus (no luna-send spawn; dev sandbox safe)
function lunaRun(uri, params, done) {
  var fired = false;
  function finish(o) { if (fired) return; fired = true; o.__bridge = { root: isRoot() }; done(o); }
  var t = setTimeout(function () { finish({ returnValue: false, errorText: "no response within 12s" }); }, 12000);
  try {
    service.call(uri, params || {}, function (m) { clearTimeout(t); finish(m && m.payload ? m.payload : { returnValue: false, errorText: "empty reply" }); });
  } catch (e) { clearTimeout(t); finish({ returnValue: false, errorText: "bridge error: " + (e && e.message ? e.message : e) }); }
}

var web = WebServer.create({
  webdir: path.join(__dirname, "web"),
  runner: lunaRun,
  log: function (o) { try { console.info("[lunaatlas]", JSON.stringify(o)); } catch (e) {} }
});

// Keepalive: webos-service exits an idle JS service after a few seconds (its
// ActivityManager idle timer), which would reap this process and kill the web
// server right after webStart returns.  Holding an internal activity keeps the
// idle timer stopped; completing it on webStop lets the service idle out again.
var keepActivity = null;
function keepAliveOn() {
  if (keepActivity) return;
  try { service.activityManager.create("org.ohmybahgosh.lunaatlas.web", function (a) { keepActivity = a; }); }
  catch (e) { keepActivity = null; }
}
function keepAliveOff() {
  if (!keepActivity) return;
  try { service.activityManager.complete(keepActivity, function () {}); } catch (e) {}
  keepActivity = null;
}

service.register("status", function (m) {
  m.respond({ returnValue: true, service: "org.ohmybahgosh.lunaatlas.service", version: "1.0.0", root: isRoot(),
    note: isRoot() ? "full access" : "public access only; elevate in Homebrew Channel for private methods" });
});

service.register("run", function (m) {
  var p = m.payload || {};
  if (!p.uri || typeof p.uri !== "string" || p.uri.indexOf("luna://") !== 0) { m.respond({ returnValue: false, errorText: "run requires a luna:// uri" }); return; }
  lunaRun(p.uri, (p.params && typeof p.params === "object") ? p.params : {}, function (o) { m.respond(o); });
});

service.register("webStart", function (m) {
  var port = (m.payload && +m.payload.port) || 3000;
  if (port < 1024 || port > 65535) { m.respond({ returnValue: false, errorText: "pick a port 1024-65535" }); return; }
  web.start(port, function (err, s) {
    if (err) { m.respond({ returnValue: false, errorText: err.message }); return; }
    keepAliveOn();
    m.respond(Object.assign({ returnValue: true }, s));
  });
});
service.register("webStop", function (m) { web.stop(); keepAliveOff(); m.respond(Object.assign({ returnValue: true }, web.status())); });
service.register("webStatus", function (m) { m.respond(Object.assign({ returnValue: true }, web.status())); });
