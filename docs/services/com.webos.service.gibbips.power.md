# `com.webos.service.gibbips.power`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`registerWarmStandByComplete`](#registerwarmstandbycomplete) | private |  | power | Method on com.webos.service.gibbips.power (from on-device permission registry; parameters undocumented). |

<a id="registerwarmstandbycomplete"></a>
## `registerWarmStandByComplete`

`luna://com.webos.service.gibbips.power/registerWarmStandByComplete`

Method on com.webos.service.gibbips.power (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.power/registerWarmStandByComplete '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
