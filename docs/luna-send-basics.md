# luna-send basics

The Luna Service Bus (LS2) is webOS's internal IPC bus.  Every system service (power, apps, settings, audio, Wi-Fi, notifications...) registers a bus name such as `com.webos.service.tvpower` and exposes methods at paths like `/power/getPowerState`.  `luna-send` is the CLI client for that bus.

## Anatomy of a call

```sh
luna-send -n 1 -f luna://com.webos.notification/createToast '{"message":"Hello from luna-send"}'
#         |    |  |       |                     |            payload: always a JSON object, '{}' if empty
#         |    |  |       service (bus name)    method (may include a category path, e.g. power/reboot)
#         |    |  scheme
#         |    pretty-print the JSON reply
#         exit after 1 reply
```

Every reply contains `"returnValue": true|false`.  Failures add `errorCode` and `errorText`.

## Useful flags

| Flag | Meaning |
|---|---|
| `-n N` | Exit after N replies.  Use `-n 1` for one-shot calls. |
| `-i` | Interactive / stay subscribed and stream replies (pair with `"subscribe":true`). |
| `-f` | Pretty-print JSON. |
| `-w ms` | Timeout to wait for replies. |
| `-q field` | Print only one field of the reply. |
| `-a appId` | Make the call *as* another app id (root `luna-send` only, rejected by `luna-send-pub`). |
| `-t` | Seen on newer firmware (webOS 10 / 25) where `-n 1` can silently print nothing.  Read stderr. |

Over non-interactive SSH, redirect stdin or nothing prints: `ssh root@tv "luna-send -n 1 -f luna://... '{}' </dev/null"`.

## luna-send vs luna-send-pub

* `luna-send` (root) sends on the private bus and passes every ACG permission group.  This is what you get with a rooted TV (RootMyTV, DejaVuln, faultmanager autoroot, etc.).
* `luna-send-pub` sends on the public bus with only public groups.  This is what the Developer Mode `prisoner` user gets.  Many calls return `Denied method call` here.
* No shell at all?  Many methods are reachable over SSAP (the websocket API used by phone apps), and private ones can often be fired through the `createAlert` trick.  See [ssap-and-createalert.md](ssap-and-createalert.md).

## Access model (ACG)

Methods are grouped into Access Control Groups.  Apps and services declare which groups they need in role and permission files.  Group names include `public`, `private`, `all`, `devices`, `tv.services`, `application.query`, `application.launcher` and many more.  The `access` column in this catalog is:

| Value | Meaning |
|---|---|
| `public` | Callable by normal apps that request the matching permission (documented API, or `public` in the ACG list). |
| `private` | Needs internal bus rights: root shell, or a signed system app. |
| `root` | Only ever seen used from a root shell. |
| `ssap` | Exposed through the SSAP websocket (see the SSAP page). |
| `unknown` | Source did not say (common for webOS OSE pages without an ACG). |

Permission files live in:

* `/usr/share/luna-service2/` (system, read-only): `roles.d`, `api-permissions.d`, `client-permissions.d`, `services.d`, `groups.d`, `manifests.d`
* `/var/luna-service2/` (store apps) and `/var/luna-service2-dev/` (dev-mode apps)
* `ls-control scan-services` / `ls-control scan-volatile-dirs` reload them after changes.

## Discovering methods on your own TV

```sh
ls-monitor -l                       # list every connected service: pid, bus name, executable
ls-monitor -i com.webos.service.tvpower   # introspect: methods + ACG groups for one service
ls-monitor                          # live trace of every bus call (very noisy)
ls-monitor -f com.webos.settingsservice   # trace one service; great for learning payloads
```

Tracing with `ls-monitor` while you click around in LG's own Settings UI is the single best way to learn undocumented payloads.  Our [`scripts/luna-dump.sh`](../scripts/luna-dump.sh) automates the introspection side and produces a dump you can diff against this catalog.

Other files worth reading on a rooted TV:

* `/etc/palm/description.json` - settings schema (categories, keys)
* `/usr/palm/services/com.webos.service.secondscreen.gateway/interfaces/*.interface` - the real SSAP to luna routing table for your firmware
* `/usr/palm/services/com.webos.service.apiadapter/adapters/settings/valid-settings.js` - whitelist of settings keys exposed over SSAP

## Naming differences: webOS TV vs webOS OSE

The same feature often lives under different bus names:

| Feature | webOS TV | webOS OSE |
|---|---|---|
| App manager | `com.webos.applicationManager` | `com.webos.service.applicationmanager` |
| Settings | `com.webos.settingsservice` | `com.webos.service.settings` |
| System service | `com.palm.systemservice` | `com.webos.service.systemservice` |
| Database | `com.palm.db` | `com.webos.service.db` |
| Activity manager | `com.palm.activitymanager` | `com.webos.service.activitymanager` |
| Connection manager | `com.palm.connectionmanager` | `com.webos.service.connectionmanager` |
| Audio | `com.webos.audio` / `com.webos.service.audio` | `com.webos.service.audio` |
| Power | `com.webos.service.tvpower` | `com.webos.service.power2`, `com.webos.service.sleep` |

OSE entries are included because OSE is the open source base of webOS TV, but **many OSE methods are absent or restricted on retail TVs**.  Check the `platform` field.

## Safety

Some calls can brick, factory reset, wipe app data, or change panel settings permanently.  They are flagged ⚠️ and collected in [dangerous.md](dangerous.md).  Read it before experimenting.
