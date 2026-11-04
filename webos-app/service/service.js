/*
 * Luna Atlas bridge service.
 *
 * The web app can only call public bus methods on its own. This service sits on
 * the bus as org.ohmybahgosh.lunaatlas.service and relays a chosen luna URI and
 * JSON payload to the bus via webos-service's own call() (palmbus; no exec), so
 * it works inside the dev sandbox. Elevated to root via the Homebrew Channel
 * ("elevate service") it reaches private methods too; otherwise public only.
 *
 * It does not interpret, whitelist, or hide any method: the app is the catalog,
 * this is just the transport. Dangerous calls are gated in the UI.
 *
 * webos-service and palmbus are provided by the TV runtime (/usr/lib/node_modules).
 */
var Service = require("webos-service");
var service = new Service("org.ohmybahgosh.lunaatlas.service");

function isRoot() {
  try { return typeof process.getuid === "function" && process.getuid() === 0; }
  catch (e) { return false; }
}

service.register("status", function (message) {
  message.respond({
    returnValue: true,
    service: "org.ohmybahgosh.lunaatlas.service",
    version: "1.0.0",
    root: isRoot(),
    note: isRoot() ? "full access" : "public access only; elevate in Homebrew Channel for private methods"
  });
});

service.register("run", function (message) {
  var p = message.payload || {};
  var uri = p.uri;
  if (!uri || typeof uri !== "string" || uri.indexOf("luna://") !== 0) {
    message.respond({ returnValue: false, errorText: "run requires a luna:// uri" });
    return;
  }
  var params = (p.params && typeof p.params === "object") ? p.params : {};
  var done = false;
  function finish(obj) {
    if (done) return; done = true;
    obj.__bridge = { root: isRoot(), subscribed: !!p.subscribe };
    message.respond(obj);
  }

  try {
    if (p.subscribe === true) {
      // take the first subscription event, then stop
      var sub = service.subscribe(uri, params);
      var timer = setTimeout(function () { try { sub.cancel(); } catch (e) {} finish({ returnValue: false, errorText: "no response within 12s" }); }, 12000);
      sub.on("response", function (m) { clearTimeout(timer); try { sub.cancel(); } catch (e) {} finish(m.payload); });
      sub.on("cancel", function (m) { clearTimeout(timer); finish((m && m.payload) || { returnValue: false, errorText: "cancelled" }); });
    } else {
      var t = setTimeout(function () { finish({ returnValue: false, errorText: "no response within 12s" }); }, 12000);
      service.call(uri, params, function (m) {
        clearTimeout(t);
        finish(m && m.payload ? m.payload : { returnValue: false, errorText: "empty reply" });
      });
    }
  } catch (e) {
    finish({ returnValue: false, errorText: "bridge error: " + (e && e.message ? e.message : e) });
  }
});
