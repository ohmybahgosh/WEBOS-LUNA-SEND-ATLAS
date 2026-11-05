# `com.webos.service.mtsp`

Exposes only a connection-status query; its broader role is opaque from the name and method. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getConnectionStatus`](#getconnectionstatus) | public |  | misc | inferred | Returns the connection status. |

<a id="getconnectionstatus"></a>
## `getConnectionStatus`

`luna://com.webos.service.mtsp/getConnectionStatus`

Returns the connection status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mtsp/getConnectionStatus '{}'
```

> ACG groups: activities.callbacks, mtsp.read, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
