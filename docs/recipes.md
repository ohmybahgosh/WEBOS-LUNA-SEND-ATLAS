# Recipes

Ready-to-run `luna-send` lines for common things people actually want to do on a rooted LG webOS TV.  Every command here is in the [catalog](../catalog/index.tsv); the service link on each takes you to its full method page.  Access and danger flags come straight from the catalog.

> [!WARNING]
> A few of these change real state on the set.  Lines marked ⚠️ are flagged dangerous in the catalog; read [dangerous.md](dangerous.md) before running them.  Everything here runs exactly as if you typed the same `luna-send` yourself.

Most lines use `-n 1` (one reply, then exit).  A few use `-i` to stay subscribed and stream updates until you press Ctrl-C.

## Power and screen

Turn the panel off or back on (the backlight only, the TV stays on and keeps playing audio).  Reachable over SSAP too.

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/turnOffScreen '{}'
luna-send -n 1 -f luna://com.webos.service.tvpower/power/turnOnScreen '{}'
```

Same effect through a setting (useful if you want "screen off" to persist like the remote's own option):

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/setSystemSettings '{"category":"picture","settings":{"energySaving":"screen_off"}}'
```

Watch the power state live (stays subscribed):

```sh
luna-send -i -f luna://com.webos.service.tvpower/power/getPowerState '{"subscribe":true}'
```

Reboot the TV ⚠️ ([tvpower](services/com.webos.service.tvpower.md)):

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/reboot '{}'
```

Service: [`com.webos.service.tvpower`](services/com.webos.service.tvpower.md) &middot; [`com.webos.settingsservice`](services/com.webos.settingsservice.md)

## Apps

What is on screen right now (stays subscribed, prints the foreground app each time it changes):

```sh
luna-send -i -f luna://com.webos.applicationManager/getForegroundAppInfo '{"subscribe":true}'
```

Launch an app by its ID ⚠️ (this one is flagged dangerous because it can pull you out of whatever is running):

```sh
luna-send -n 1 -f luna://com.webos.applicationManager/launch '{"id":"com.webos.app.screensaver"}'
```

Service: [`com.webos.applicationManager`](services/com.webos.applicationManager.md)

## Volume and mute

```sh
luna-send -n 1 -f luna://com.webos.audio/volumeUp '{}'
luna-send -n 1 -f luna://com.webos.audio/volumeDown '{}'
luna-send -n 1 -f luna://com.webos.audio/setMuted '{"muted":true}'
luna-send -n 1 -f luna://com.webos.audio/getVolume '{}'
```

Service: [`com.webos.audio`](services/com.webos.audio.md)

## Notifications

A toast (the small banner in the corner):

```sh
luna-send -n 1 -f luna://com.webos.notification/createToast '{"message":"Hello from luna-send"}'
```

An alert box with buttons (each button can fire its own luna call via `onclick`):

```sh
luna-send -n 1 -f luna://com.webos.notification/createAlert '{"message":"Pick one","buttons":[{"label":"OK","focus":true},{"label":"Cancel"}]}'
```

Service: [`com.webos.notification`](services/com.webos.notification.md)

## Screenshot

Capture the current frame to a file.  The service was renamed on newer sets, so there are two names for the same call:

```sh
# most sets:
luna-send -n 1 -f luna://com.webos.service.tv.capture/executeOneShot '{"path":"/tmp/capture.png","method":"DISPLAY","format":"PNG"}'
# newer sets (renamed):
luna-send -n 1 -f luna://com.webos.service.capture/executeOneShot '{"path":"/tmp/capture.png","method":"DISPLAY","format":"PNG"}'
```

Formats: `BMP`, `JPG`, `PNG`, `RGB`, `RGBA`, `YUV422`.  Methods: `DISPLAY` (the UI), `SCREEN_WITH_SOURCE_VIDEO`, `VIDEO`, `GRAPHIC`.  Also available over SSAP as `ssap://tv/executeOneShot`, which returns an `imageUri` you can fetch over HTTP.

Service: [`com.webos.service.capture`](services/com.webos.service.capture.md)

## System info

Model, webOS version and build date:

```sh
luna-send -n 1 -f luna://com.webos.service.systemservice/osInfo/query '{"parameters":["webos_manufacturing_version","webos_release","webos_build_datetime"]}'
```

Service: [`com.webos.service.systemservice`](services/com.webos.service.systemservice.md)

## Settings

Read any system setting (subscribe to watch it change):

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/getSystemSettings '{"category":"picture","keys":["energySaving"]}'
```

Write one.  A harmless example: stop the 15-minute no-signal auto power-off.

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/setSystemSettings '{"category":"time","settings":{"autoOff15Min":"off"}}'
```

See [settings-keys.md](settings-keys.md) for the full key list.  Service: [`com.webos.settingsservice`](services/com.webos.settingsservice.md)

## Developer

Install an IPK that is already on the TV (Developer Mode / Homebrew Channel) ([appInstallService](services/com.webos.appInstallService.md)):

```sh
luna-send -i -f luna://com.webos.appInstallService/dev/install '{"id":"com.example.app","ipkUrl":"/media/internal/downloads/app.ipk","subscribe":true}'
```

Turn developer logging on or off ([pmlogd](services/com.webos.pmlogd.md)):

```sh
luna-send -n 1 -f luna://com.webos.service.config/setConfigs '{"configs":{"system.collectDevLogs":true}}'
```

Note: `setConfigs` is flagged ⚠️ because the config tree reaches far beyond logging.

## Magic Remote IR blaster

The Magic Remote can blast IR at other gear through [`com.webos.service.mrcu`](services/com.webos.service.mrcu.md) (`ir/pushIrCodes`, `ir/sendUeiIrCmd`).  The codes are device-specific raw timing, so there is no universal one-liner; see the service page for the method shapes.

---

Have a recipe that belongs here?  See [discovery.md](discovery.md) for how to find and verify calls on your own TV, then open a PR.
