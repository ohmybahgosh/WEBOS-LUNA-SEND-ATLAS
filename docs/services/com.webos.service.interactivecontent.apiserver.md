# `com.webos.service.interactivecontent.apiserver`

Interactive-content API server; starts and provides a server URL. Opaque beyond that. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getServerUrl`](#getserverurl) | public |  | misc | inferred | Returns the server URL. |
| [`start`](#start) | public |  | misc | inferred | Starts the interactivecontent apiserver. |

<a id="getserverurl"></a>
## `getServerUrl`

`luna://com.webos.service.interactivecontent.apiserver/getServerUrl`

Returns the server URL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.interactivecontent.apiserver/getServerUrl '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.interactivecontent.apiserver/start`

Starts the interactivecontent apiserver.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.interactivecontent.apiserver/start '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
