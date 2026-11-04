/* luna.js - minimal Luna bus caller for a webOS web app, ES5.
 * Prefers the app's own bridge service (which can relay to private methods via
 * luna-send), falling back to a direct PalmServiceBridge call for public ones.
 */
(function (global) {
  "use strict";
  var SERVICE = "luna://org.ohmybahgosh.lunaatlas.service";

  function rawCall(uri, params, onDone) {
    // Direct bus call via PalmServiceBridge (works for public methods only).
    try {
      var bridge = new global.PalmServiceBridge();
      bridge.onservicecallback = function (msg) {
        var r;
        try { r = JSON.parse(msg); } catch (e) { r = { returnValue: false, errorText: "bad JSON from bus", raw: msg }; }
        onDone(r);
      };
      bridge.call(uri, JSON.stringify(params || {}));
      return bridge;
    } catch (e) {
      onDone({ returnValue: false, errorText: "PalmServiceBridge unavailable: " + e });
      return null;
    }
  }

  // Run an arbitrary luna URI through the bridge service.
  // opts: { uri, params, subscribe }
  function run(opts, onDone) {
    rawCall(SERVICE + "/run", {
      uri: opts.uri, params: opts.params || {}, subscribe: !!opts.subscribe
    }, function (r) {
      if (r && r.returnValue === false && /unknown|no such service|1000|denied/i.test(r.errorText || "")) {
        // bridge service not reachable (not installed/elevated) - try direct for public methods
        rawCall(opts.uri, opts.params || {}, function (r2) {
          r2.__viaDirect = true; onDone(r2);
        });
      } else {
        onDone(r);
      }
    });
  }

  // Ask the bridge service whether it is running as root (full access).
  function serviceStatus(onDone) {
    rawCall(SERVICE + "/status", {}, function (r) { onDone(r || {}); });
  }

  global.Luna = { run: run, raw: rawCall, status: serviceStatus, SERVICE: SERVICE };
})(window);
