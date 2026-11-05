# `com.webos.service.dial.ssdpmanager`

DIAL/SSDP discovery manager supporting second-screen app launch; exposes an SSDP heartbeat ping. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`heartbeat/ping`](#heartbeat_ping) | private |  | misc | inferred | Pings the dial ssdpmanager (heartbeat) |

<a id="heartbeat_ping"></a>
## `heartbeat/ping`

`luna://com.webos.service.dial.ssdpmanager/heartbeat/ping`

Pings the dial ssdpmanager (heartbeat)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dial.ssdpmanager/heartbeat/ping '{}'
```

> ACG groups: activities.callbacks, com.webos.service.dial.ssdpmanager, configurator.callbacks. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
