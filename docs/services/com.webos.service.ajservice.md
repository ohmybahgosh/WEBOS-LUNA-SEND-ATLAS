# `com.webos.service.ajservice`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`start`](#start) | private |  | misc | Method on com.webos.service.ajservice (from on-device permission registry; parameters undocumented). |

<a id="start"></a>
## `start`

`luna://com.webos.service.ajservice/start`

Method on com.webos.service.ajservice (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ajservice/start '{}'
```

> ACG groups: activities.callbacks, ajservice.action, configurator.callbacks, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
