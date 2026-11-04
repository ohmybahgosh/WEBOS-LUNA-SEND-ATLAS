# `com.webos.flutter.embedder`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getConfigs`](#getconfigs) | private |  | settings | Method on com.webos.flutter.embedder (from on-device permission registry; parameters undocumented). |
| [`timerMethod`](#timermethod) | public |  | input | Method on com.webos.flutter.embedder (from on-device permission registry; parameters undocumented). |

<a id="getconfigs"></a>
## `getConfigs`

`luna://com.webos.flutter.embedder/getConfigs`

Method on com.webos.flutter.embedder (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.flutter.embedder/getConfigs '{}'
```

> ACG groups: config. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="timermethod"></a>
## `timerMethod`

`luna://com.webos.flutter.embedder/timerMethod`

Method on com.webos.flutter.embedder (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.flutter.embedder/timerMethod '{}'
```

> ACG groups: all, public, timerMethod. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
