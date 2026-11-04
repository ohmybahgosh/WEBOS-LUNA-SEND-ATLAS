# WEBOS-LUNA-SEND-ATLAS

**The most complete public reference of LG webOS TV `luna-send` (Luna Service Bus) commands.**  2,213 methods across 146 Luna services, each with its URI, parameters, example command, access level, platform and sources.

There are lots of scattered gists, forum posts and library source files that each document a handful of luna calls.  This repo pulls all of them together, plus the official webOS TV and webOS OSE references, plus method lists introspected from a retail TV, into one searchable, machine-readable catalog.

> ⚠️ Some of these calls can factory reset, wipe, or semi-permanently change your TV.  They're flagged ⚠️ and listed in [docs/dangerous.md](docs/dangerous.md).  Read [docs/luna-send-basics.md](docs/luna-send-basics.md) first.

## Quick start

```sh
# Rooted TV, over SSH
luna-send -n 1 -f luna://com.webos.notification/createToast '{"message":"Hello from luna-send"}'
luna-send -n 1 -f luna://com.webos.service.tv.systemproperty/getSystemInfo '{"keys":["modelName","firmwareVersion","sdkVersion"]}'
luna-send -n 1 -f luna://com.webos.applicationManager/listApps '{}'
luna-send -n 1 -f luna://com.webos.settingsservice/getSystemSettings '{"category":"picture","keys":["pictureMode","backlight"]}'
luna-send -n 1 -f luna://com.webos.service.tvpower/power/turnOffScreen '{}'
```

No root?  Developer Mode gives you `luna-send-pub` (public methods only), and a lot more is reachable over the SSAP websocket, including private calls via the [createAlert trick](docs/ssap-and-createalert.md).

## What's inside

| Path | What |
|---|---|
| [`catalog/luna-catalog.json`](catalog/luna-catalog.json) / [`.jsonl`](catalog/luna-catalog.jsonl) | The full machine-readable catalog (schema below) |
| [`docs/services/`](docs/services/) | One page per service: every method, params, example, sources |
| [`docs/categories/`](docs/categories/) | Same methods grouped by what they do |
| [`docs/luna-send-basics.md`](docs/luna-send-basics.md) | Flags, root vs pub, ACG permissions, how to discover methods yourself |
| [`docs/ssap-and-createalert.md`](docs/ssap-and-createalert.md) | SSAP websocket protocol, SSAP to luna mapping, the createAlert trick |
| [`docs/settings-keys.md`](docs/settings-keys.md) | Every `getSystemSettings` / `setSystemSettings` category, key and allowed value |
| [`docs/hidden-menus.md`](docs/hidden-menus.md) | Service menus and special app launches |
| [`docs/calibration.md`](docs/calibration.md) | The `externalpq` calibration API (1D/3D LUTs, gamut, patterns) |
| [`docs/dangerous.md`](docs/dangerous.md) | Calls that can hurt your TV |
| [`scripts/luna-dump.sh`](scripts/luna-dump.sh) | Read-only on-TV enumerator: dumps every service + method on *your* firmware |
| [`scripts/parse_dump.py`](scripts/parse_dump.py) | Diffs a dump against the catalog so new methods can be contributed |

## Coverage

| Access | Methods |
|---|---|
| `public` | 944 |
| `private` | 713 |
| `unknown` | 413 |
| `ssap` | 96 |
| `root` | 47 |

`public` = callable by apps with the right permission.  `private` = needs root or system rights.  `ssap` = reachable over the SSAP websocket.  `unknown` = the source didn't say (mostly webOS OSE pages).

Confidence levels: `documented` (official LG / webOS OSE docs), `code` (seen in source code, firmware metadata or on-device introspection), `community` (forums, wikis, gists).

<a id="categories"></a>
## Categories

| Category | Methods |
|---|---|
| [Audio](docs/categories/audio.md) | 358 |
| [Bluetooth](docs/categories/bluetooth.md) | 247 |
| [Media Playback](docs/categories/media.md) | 196 |
| [Database (db8)](docs/categories/db.md) | 191 |
| [Input & Keys](docs/categories/input.md) | 152 |
| [Applications](docs/categories/apps.md) | 140 |
| [System Info](docs/categories/system-info.md) | 135 |
| [Network / Wi-Fi](docs/categories/network.md) | 96 |
| [Settings](docs/categories/settings.md) | 92 |
| [Misc](docs/categories/misc.md) | 87 |
| [Power](docs/categories/power.md) | 65 |
| [Display / Panel](docs/categories/display.md) | 65 |
| [Storage & USB](docs/categories/storage.md) | 62 |
| [Camera](docs/categories/camera.md) | 49 |
| [Activity Manager](docs/categories/activity.md) | 44 |
| [Power Management (sleep/wake)](docs/categories/power-mgmt.md) | 40 |
| [Notifications & Alerts](docs/categories/notifications.md) | 38 |
| [Developer Mode & Testing](docs/categories/devmode.md) | 34 |
| [TV Broadcast / DVR](docs/categories/tv-broadcast.md) | 31 |
| [Connection Manager](docs/categories/connection.md) | 21 |
| [Location](docs/categories/location.md) | 21 |
| [Security / Keys](docs/categories/security.md) | 16 |
| [Key Management](docs/categories/keys.md) | 13 |
| [Software Update](docs/categories/update.md) | 10 |
| [Picture](docs/categories/picture.md) | 5 |
| [UI / Compositor](docs/categories/ui.md) | 4 |
| [Sound](docs/categories/sound.md) | 1 |

<a id="services"></a>
## Services

### webOS TV (72)

| Service | Methods | Platforms |
|---|---|---|
| [`com.palm.activitymanager`](docs/services/com.palm.activitymanager.md) | 7 | webOS TV |
| [`com.palm.connectionmanager`](docs/services/com.palm.connectionmanager.md) | 1 | webOS TV |
| [`com.palm.db`](docs/services/com.palm.db.md) | 36 | webOS OSE, webOS TV |
| [`com.palm.systemservice`](docs/services/com.palm.systemservice.md) | 5 | HP webOS, Palm, all, webOS TV |
| [`com.palmdts.devmode.service`](docs/services/com.palmdts.devmode.service.md) | 2 | webOS TV |
| [`com.webos.appInstallService`](docs/services/com.webos.appInstallService.md) | 7 | all, webOS OSE, webOS TV |
| [`com.webos.applicationManager`](docs/services/com.webos.applicationManager.md) | 63 | webOS OSE, webOS TV |
| [`com.webos.audio`](docs/services/com.webos.audio.md) | 137 | webOS TV |
| [`com.webos.keyfilter.magicnumber`](docs/services/com.webos.keyfilter.magicnumber.md) | 1 | webOS TV |
| [`com.webos.media`](docs/services/com.webos.media.md) | 83 | webOS OSE, webOS TV |
| [`com.webos.mediadb`](docs/services/com.webos.mediadb.md) | 35 | webOS OSE, webOS TV |
| [`com.webos.notification`](docs/services/com.webos.notification.md) | 36 | webOS OSE, webOS TV |
| [`com.webos.pmlogd`](docs/services/com.webos.pmlogd.md) | 3 | webOS TV |
| [`com.webos.service.apiadapter`](docs/services/com.webos.service.apiadapter.md) | 2 | webOS TV |
| [`com.webos.service.appcasting`](docs/services/com.webos.service.appcasting.md) | 3 | webOS TV |
| [`com.webos.service.applicationmanager`](docs/services/com.webos.service.applicationmanager.md) | 32 | webOS OSE, webOS TV |
| [`com.webos.service.applicationManager`](docs/services/com.webos.service.applicationManager.md) | 1 | webOS TV |
| [`com.webos.service.appstatus`](docs/services/com.webos.service.appstatus.md) | 1 | webOS TV |
| [`com.webos.service.attachedstoragemanager`](docs/services/com.webos.service.attachedstoragemanager.md) | 2 | webOS TV |
| [`com.webos.service.audio`](docs/services/com.webos.service.audio.md) | 181 | webOS OSE, webOS TV |
| [`com.webos.service.blegatt`](docs/services/com.webos.service.blegatt.md) | 15 | webOS TV |
| [`com.webos.service.bluetooth`](docs/services/com.webos.service.bluetooth.md) | 8 | webOS TV |
| [`com.webos.service.btaudiosrc`](docs/services/com.webos.service.btaudiosrc.md) | 1 | webOS TV |
| [`com.webos.service.camera`](docs/services/com.webos.service.camera.md) | 9 | webOS TV |
| [`com.webos.service.camera.gesture`](docs/services/com.webos.service.camera.gesture.md) | 2 | webOS TV |
| [`com.webos.service.capture`](docs/services/com.webos.service.capture.md) | 1 | webOS TV |
| [`com.webos.service.config`](docs/services/com.webos.service.config.md) | 7 | webOS OSE, webOS TV |
| [`com.webos.service.connectionmanager`](docs/services/com.webos.service.connectionmanager.md) | 26 | webOS OSE, webOS TV |
| [`com.webos.service.devicereset`](docs/services/com.webos.service.devicereset.md) | 1 | webOS TV |
| [`com.webos.service.drm`](docs/services/com.webos.service.drm.md) | 5 | webOS TV |
| [`com.webos.service.eim`](docs/services/com.webos.service.eim.md) | 19 | webOS TV |
| [`com.webos.service.faultmanager`](docs/services/com.webos.service.faultmanager.md) | 1 | webOS TV |
| [`com.webos.service.ime`](docs/services/com.webos.service.ime.md) | 4 | webOS OSE, webOS TV |
| [`com.webos.service.irdbmanager`](docs/services/com.webos.service.irdbmanager.md) | 10 | webOS TV |
| [`com.webos.service.keymanager3`](docs/services/com.webos.service.keymanager3.md) | 8 | webOS TV |
| [`com.webos.service.lowlevelstorage`](docs/services/com.webos.service.lowlevelstorage.md) | 1 | webOS TV |
| [`com.webos.service.miracast`](docs/services/com.webos.service.miracast.md) | 5 | webOS TV |
| [`com.webos.service.mrcu`](docs/services/com.webos.service.mrcu.md) | 63 | webOS TV |
| [`com.webos.service.networkinput`](docs/services/com.webos.service.networkinput.md) | 4 | webOS TV |
| [`com.webos.service.oledepl`](docs/services/com.webos.service.oledepl.md) | 7 | webOS TV |
| [`com.webos.service.panelcontroller`](docs/services/com.webos.service.panelcontroller.md) | 1 | webOS TV |
| [`com.webos.service.pqcontroller`](docs/services/com.webos.service.pqcontroller.md) | 3 | webOS TV |
| [`com.webos.service.preloadmanager`](docs/services/com.webos.service.preloadmanager.md) | 3 | webOS TV |
| [`com.webos.service.recent`](docs/services/com.webos.service.recent.md) | 2 | webOS TV |
| [`com.webos.service.rollingscreen`](docs/services/com.webos.service.rollingscreen.md) | 2 | webOS TV |
| [`com.webos.service.sdx`](docs/services/com.webos.service.sdx.md) | 2 | webOS TV |
| [`com.webos.service.secondscreen.gateway`](docs/services/com.webos.service.secondscreen.gateway.md) | 1 | webOS TV |
| [`com.webos.service.settings`](docs/services/com.webos.service.settings.md) | 26 | webOS OSE, webOS TV |
| [`com.webos.service.sleep`](docs/services/com.webos.service.sleep.md) | 27 | webOS OSE, webOS TV |
| [`com.webos.service.sm`](docs/services/com.webos.service.sm.md) | 1 | webOS TV |
| [`com.webos.service.systemprofile`](docs/services/com.webos.service.systemprofile.md) | 2 | webOS TV |
| [`com.webos.service.tts`](docs/services/com.webos.service.tts.md) | 5 | webOS OSE, webOS TV |
| [`com.webos.service.tv.audiorecorder`](docs/services/com.webos.service.tv.audiorecorder.md) | 4 | webOS TV |
| [`com.webos.service.tv.broadcast`](docs/services/com.webos.service.tv.broadcast.md) | 24 | webOS TV |
| [`com.webos.service.tv.capture`](docs/services/com.webos.service.tv.capture.md) | 14 | webOS TV |
| [`com.webos.service.tv.display`](docs/services/com.webos.service.tv.display.md) | 5 | webOS TV |
| [`com.webos.service.tv.dvr`](docs/services/com.webos.service.tv.dvr.md) | 18 | webOS TV |
| [`com.webos.service.tv.keymanager`](docs/services/com.webos.service.tv.keymanager.md) | 4 | webOS TV |
| [`com.webos.service.tv.legacyinput`](docs/services/com.webos.service.tv.legacyinput.md) | 1 | webOS TV |
| [`com.webos.service.tv.power`](docs/services/com.webos.service.tv.power.md) | 5 | webOS TV |
| [`com.webos.service.tv.systemproperty`](docs/services/com.webos.service.tv.systemproperty.md) | 73 | webOS TV |
| [`com.webos.service.tv.time`](docs/services/com.webos.service.tv.time.md) | 1 | webOS TV |
| [`com.webos.service.tvpower`](docs/services/com.webos.service.tvpower.md) | 40 | webOS TV |
| [`com.webos.service.tvReservationAgent`](docs/services/com.webos.service.tvReservationAgent.md) | 2 | webOS TV |
| [`com.webos.service.update`](docs/services/com.webos.service.update.md) | 7 | webOS TV |
| [`com.webos.service.videooutput`](docs/services/com.webos.service.videooutput.md) | 16 | webOS OSE, webOS TV |
| [`com.webos.service.voiceinput`](docs/services/com.webos.service.voiceinput.md) | 5 | webOS TV |
| [`com.webos.service.webappmanager`](docs/services/com.webos.service.webappmanager.md) | 10 | webOS OSE, webOS TV |
| [`com.webos.settingsservice`](docs/services/com.webos.settingsservice.md) | 18 | all, webOS TV |
| [`com.webos.surfacemanager`](docs/services/com.webos.surfacemanager.md) | 9 | webOS OSE, webOS TV |
| [`org.webosbrew.hbchannel.service`](docs/services/org.webosbrew.hbchannel.service.md) | 12 | webOS TV |
| [`org.webosbrew.piccap.service`](docs/services/org.webosbrew.piccap.service.md) | 1 | webOS TV |

### SSAP namespaces (14)

SSAP aliases whose underlying luna target isn't confirmed yet.

| Service | Methods | Platforms |
|---|---|---|
| [`ssap:api`](docs/services/ssap_api.md) | 1 | webOS TV |
| [`ssap:audio`](docs/services/ssap_audio.md) | 9 | webOS TV |
| [`ssap:externalpq`](docs/services/ssap_externalpq.md) | 2 | webOS TV |
| [`ssap:media.controls`](docs/services/ssap_media.controls.md) | 5 | webOS TV |
| [`ssap:media.viewer`](docs/services/ssap_media.viewer.md) | 2 | webOS TV |
| [`ssap:pairing`](docs/services/ssap_pairing.md) | 1 | webOS TV |
| [`ssap:settings`](docs/services/ssap_settings.md) | 1 | webOS TV |
| [`ssap:system`](docs/services/ssap_system.md) | 4 | webOS TV |
| [`ssap:system.launcher`](docs/services/ssap_system.launcher.md) | 4 | webOS TV |
| [`ssap:system.notifications`](docs/services/ssap_system.notifications.md) | 2 | webOS TV |
| [`ssap:timer`](docs/services/ssap_timer.md) | 2 | webOS TV |
| [`ssap:tv`](docs/services/ssap_tv.md) | 10 | webOS TV |
| [`ssap:user`](docs/services/ssap_user.md) | 4 | webOS TV |
| [`ssap:webapp`](docs/services/ssap_webapp.md) | 6 | webOS TV |

### webOS OSE only (44)

Present in the open source edition.  Many of these also exist on TVs under the same or a different name, but that isn't verified yet.

| Service | Methods | Platforms |
|---|---|---|
| [`com.lge.settingsservice`](docs/services/com.lge.settingsservice.md) | 16 | webOS OSE |
| [`com.palm.service.tellurium`](docs/services/com.palm.service.tellurium.md) | 17 | webOS OSE |
| [`com.palm.sleep`](docs/services/com.palm.sleep.md) | 25 | webOS OSE |
| [`com.palm.tempdb`](docs/services/com.palm.tempdb.md) | 33 | webOS OSE |
| [`com.webos.bootManager`](docs/services/com.webos.bootManager.md) | 3 | webOS OSE |
| [`com.webos.epgdb`](docs/services/com.webos.epgdb.md) | 35 | webOS OSE |
| [`com.webos.pipeline.camera`](docs/services/com.webos.pipeline.camera.md) | 5 | webOS OSE |
| [`com.webos.pipeline.record`](docs/services/com.webos.pipeline.record.md) | 8 | webOS OSE |
| [`com.webos.service.activitymanager`](docs/services/com.webos.service.activitymanager.md) | 36 | webOS OSE |
| [`com.webos.service.ai.voice`](docs/services/com.webos.service.ai.voice.md) | 4 | webOS OSE |
| [`com.webos.service.alarm`](docs/services/com.webos.service.alarm.md) | 3 | webOS OSE |
| [`com.webos.service.audiofocusmanager`](docs/services/com.webos.service.audiofocusmanager.md) | 6 | webOS OSE |
| [`com.webos.service.audiooutput`](docs/services/com.webos.service.audiooutput.md) | 12 | webOS OSE |
| [`com.webos.service.avoutput`](docs/services/com.webos.service.avoutput.md) | 17 | webOS OSE |
| [`com.webos.service.bluetooth2`](docs/services/com.webos.service.bluetooth2.md) | 210 | webOS OSE |
| [`com.webos.service.bugreport`](docs/services/com.webos.service.bugreport.md) | 4 | webOS OSE |
| [`com.webos.service.bus`](docs/services/com.webos.service.bus.md) | 11 | webOS OSE |
| [`com.webos.service.camera2`](docs/services/com.webos.service.camera2.md) | 33 | webOS OSE |
| [`com.webos.service.cec`](docs/services/com.webos.service.cec.md) | 8 | webOS OSE |
| [`com.webos.service.configurator`](docs/services/com.webos.service.configurator.md) | 4 | webOS OSE |
| [`com.webos.service.contextintentmgr`](docs/services/com.webos.service.contextintentmgr.md) | 3 | webOS OSE |
| [`com.webos.service.db`](docs/services/com.webos.service.db.md) | 52 | webOS OSE |
| [`com.webos.service.devmode`](docs/services/com.webos.service.devmode.md) | 3 | webOS OSE |
| [`com.webos.service.downloadmanager`](docs/services/com.webos.service.downloadmanager.md) | 17 | webOS OSE |
| [`com.webos.service.filecache`](docs/services/com.webos.service.filecache.md) | 16 | webOS OSE |
| [`com.webos.service.hfp`](docs/services/com.webos.service.hfp.md) | 11 | webOS OSE |
| [`com.webos.service.intent`](docs/services/com.webos.service.intent.md) | 7 | webOS OSE |
| [`com.webos.service.location`](docs/services/com.webos.service.location.md) | 18 | webOS OSE |
| [`com.webos.service.mediacontroller`](docs/services/com.webos.service.mediacontroller.md) | 23 | webOS OSE |
| [`com.webos.service.mediaindexer`](docs/services/com.webos.service.mediaindexer.md) | 23 | webOS OSE |
| [`com.webos.service.mediarecorder`](docs/services/com.webos.service.mediarecorder.md) | 11 | webOS OSE |
| [`com.webos.service.memorymanager`](docs/services/com.webos.service.memorymanager.md) | 11 | webOS OSE |
| [`com.webos.service.nettools`](docs/services/com.webos.service.nettools.md) | 10 | webOS OSE |
| [`com.webos.service.pdm`](docs/services/com.webos.service.pdm.md) | 26 | webOS OSE |
| [`com.webos.service.peripheralmanager`](docs/services/com.webos.service.peripheralmanager.md) | 43 | webOS OSE |
| [`com.webos.service.power2`](docs/services/com.webos.service.power2.md) | 11 | webOS OSE |
| [`com.webos.service.preferences`](docs/services/com.webos.service.preferences.md) | 17 | webOS OSE |
| [`com.webos.service.rosbridge`](docs/services/com.webos.service.rosbridge.md) | 5 | webOS OSE |
| [`com.webos.service.sdkagent`](docs/services/com.webos.service.sdkagent.md) | 12 | webOS OSE |
| [`com.webos.service.storageaccess`](docs/services/com.webos.service.storageaccess.md) | 13 | webOS OSE |
| [`com.webos.service.systemservice`](docs/services/com.webos.service.systemservice.md) | 42 | webOS OSE |
| [`com.webos.service.unifiedsearch`](docs/services/com.webos.service.unifiedsearch.md) | 8 | webOS OSE |
| [`com.webos.service.uwb`](docs/services/com.webos.service.uwb.md) | 16 | webOS OSE |
| [`com.webos.service.wifi`](docs/services/com.webos.service.wifi.md) | 60 | webOS OSE |

### Palm / HP webOS and other (16)

| Service | Methods | Platforms |
|---|---|---|
| [`com.palm.applicationManager`](docs/services/com.palm.applicationManager.md) | 5 | HP webOS, Palm |
| [`com.palm.audio`](docs/services/com.palm.audio.md) | 3 | HP webOS, Palm |
| [`com.palm.backup`](docs/services/com.palm.backup.md) | 1 | HP webOS, Palm |
| [`com.palm.btmonitor`](docs/services/com.palm.btmonitor.md) | 2 | HP webOS, Palm |
| [`com.palm.downloadmanager`](docs/services/com.palm.downloadmanager.md) | 1 | HP webOS, Palm |
| [`com.palm.keys`](docs/services/com.palm.keys.md) | 1 | HP webOS, Palm |
| [`com.palm.location`](docs/services/com.palm.location.md) | 3 | HP webOS, Palm |
| [`com.palm.mediadb`](docs/services/com.palm.mediadb.md) | 2 | HP webOS, Palm |
| [`com.palm.messaging`](docs/services/com.palm.messaging.md) | 1 | HP webOS, Palm |
| [`com.palm.notes`](docs/services/com.palm.notes.md) | 1 | HP webOS, Palm |
| [`com.palm.service.backup`](docs/services/com.palm.service.backup.md) | 2 | HP webOS, Palm |
| [`com.palm.storage`](docs/services/com.palm.storage.md) | 2 | HP webOS, Palm |
| [`com.palm.systemmanager`](docs/services/com.palm.systemmanager.md) | 1 | HP webOS, Palm |
| [`com.palm.telephony`](docs/services/com.palm.telephony.md) | 5 | HP webOS, Palm |
| [`com.palm.vibrate`](docs/services/com.palm.vibrate.md) | 1 | HP webOS, Palm |
| [`com.palm.wifi`](docs/services/com.palm.wifi.md) | 2 | HP webOS, Palm |

## Record schema

```json
{
  "service": "com.webos.notification",
  "method": "createToast",
  "uri": "luna://com.webos.notification/createToast",
  "category": "notifications",
  "description": "Creates a toast notification.",
  "params": {"message": "String (required) ..."},
  "example": "luna-send -n 1 -f luna://com.webos.notification/createToast '{\"message\":\"Hello\"}'",
  "subscribe": false,
  "access": "public | private | root | ssap | unknown",
  "platform": "webOS TV, webOS OSE",
  "versions": "webOS 3+",
  "dangerous": false,
  "notes": "...",
  "sources": ["https://..."],
  "confidence": "documented",
  "confidence_all": ["documented", "code"]
}
```

## Contributing

The best contribution is a dump from your TV:

1. Copy `scripts/luna-dump.sh` to a rooted TV and run `sh luna-dump.sh /tmp` (read-only; it never calls a service method).
2. Run `python3 scripts/parse_dump.py /tmp/luna-dump-*.tar.gz` on your PC.
3. Open a PR or issue with `new-methods.jsonl` and your model + webOS version.

Payloads you've worked out with `ls-monitor` tracing are just as welcome.  Please include where you saw it.

## Roadmap

- [x] Catalog from official docs, community sources, remote-control libraries and on-device introspection
- [x] Read-only on-device dumper + diff tool
- [ ] Dumps from more firmware (webOS 6 through 25) to fill in per-version availability
- [ ] Params for the ~450 introspection-only TV methods (via `ls-monitor` tracing)
- [ ] Companion webOS app (IPK) to browse the catalog and run commands on the TV through a homebrew service
- [ ] SSH/CLI helper with search, autocomplete and saved favorites

## Scope

Out of scope on purpose: DRM, LG account/store authentication, region or country lock bypass, and anything else that circumvents licensing or security protections.

## Credits

Built by [OhMyBahGosh](https://github.com/ohmybahgosh).  This catalog stands on the work of the webOS OSE docs team, LG's webOS TV developer docs, [webosbrew](https://github.com/webosbrew), [openlgtv](https://github.com/openlgtv), [bscpylgtv](https://github.com/chros73/bscpylgtv), [LGTV Companion](https://github.com/JPersson77/LGTVCompanion), and many other projects listed in [SOURCES.md](SOURCES.md).

Not affiliated with LG Electronics.  webOS is a trademark of LG Electronics.
