# `com.webos.service.broadcast-conf-downloader`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`test`](#test) | public |  | tv-broadcast | Method on com.webos.service.broadcast-conf-downloader (from on-device permission registry; parameters undocumented). |

<a id="test"></a>
## `test`

`luna://com.webos.service.broadcast-conf-downloader/test`

Method on com.webos.service.broadcast-conf-downloader (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.broadcast-conf-downloader/test '{}'
```

> ACG groups: all, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
