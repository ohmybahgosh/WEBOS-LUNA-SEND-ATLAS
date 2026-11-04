# Luna Atlas - webOS app

An on-TV companion to the catalog: browse every luna service and method, search, read the params, edit a JSON payload, and **run** the call on the TV, seeing the reply. Dangerous calls are gated behind a confirm.

It ships as two parts packaged into one IPK:

- `src/` - the web app (plain ES5 HTML/JS, D-pad friendly). Bundles `app-catalog.json`, a slimmed copy of the main catalog (regenerate with `tools/gen_app_catalog.py`).
- `service/` - a tiny JS service, `org.ohmybahgosh.lunaatlas.service`, that relays a chosen `luna://` URI + payload to `luna-send` and returns the reply. The web app can only call public methods directly; this service is how the app reaches private ones.

## Access model

- Installed in Developer Mode, the service runs as the dev user and can reach **public** methods. The app also falls back to a direct bus call for those.
- For **private** methods, elevate the service to root: in the **Homebrew Channel**, open Luna Atlas' service and use *Elevate service* (or the HBChannel "elevate" toggle). The app's footer shows whether the bridge is running as root.

## Build and install

Needs the webOS CLI (`ares-*`) and a configured device. From this folder:

```sh
sh build.sh            # npm-installs webos-service, runs ares-package
ares-install -d <device> org.ohmybahgosh.lunaatlas_1.0.0_all.ipk
ares-launch  -d <device> org.ohmybahgosh.lunaatlas
```

`<device>` is the name from `ares-setup-device -F` (e.g. `LGTV`).

## Safety

The service is pure transport; it does not hide or whitelist anything. The catalog's `dangerous` flag drives a confirm gate in the UI, and the sensitive services (sdx/ACR/DRM) carry the same notes as the catalog. Running a command here is exactly as safe or unsafe as typing the equivalent `luna-send` yourself.
