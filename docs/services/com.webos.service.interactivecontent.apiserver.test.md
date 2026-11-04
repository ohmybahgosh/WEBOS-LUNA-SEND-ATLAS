# `com.webos.service.interactivecontent.apiserver.test`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getServerUrl`](#getserverurl) | public |  | misc | Method on com.webos.service.interactivecontent.apiserver.test (from on-device permission registry; parameters undocumented). |
| [`start`](#start) | public |  | misc | Method on com.webos.service.interactivecontent.apiserver.test (from on-device permission registry; parameters undocumented). |

<a id="getserverurl"></a>
## `getServerUrl`

`luna://com.webos.service.interactivecontent.apiserver.test/getServerUrl`

Method on com.webos.service.interactivecontent.apiserver.test (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.interactivecontent.apiserver.test/getServerUrl '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.interactivecontent.apiserver.test/start`

Method on com.webos.service.interactivecontent.apiserver.test (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.interactivecontent.apiserver.test/start '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
