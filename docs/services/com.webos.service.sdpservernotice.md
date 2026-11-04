# `com.webos.service.sdpservernotice`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`responseNotice`](#responsenotice) | private |  | misc | Method on com.webos.service.sdpservernotice (from on-device permission registry; parameters undocumented). |
| [`start`](#start) | private |  | misc | Method on com.webos.service.sdpservernotice (from on-device permission registry; parameters undocumented). |

<a id="responsenotice"></a>
## `responseNotice`

`luna://com.webos.service.sdpservernotice/responseNotice`

Method on com.webos.service.sdpservernotice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdpservernotice/responseNotice '{}'
```

> ACG groups: com.webos.service.sdpservernotice, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.sdpservernotice/start`

Method on com.webos.service.sdpservernotice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdpservernotice/start '{}'
```

> ACG groups: activities.callbacks, com.webos.service.sdpservernotice, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
