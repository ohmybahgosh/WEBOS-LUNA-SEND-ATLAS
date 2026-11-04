# `com.webos.service.gibbips.config`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getBroadcastStandardsSupport`](#getbroadcaststandardssupport) | private |  | settings | Method on com.webos.service.gibbips.config (from on-device permission registry; parameters undocumented). |
| [`getCountryStandards`](#getcountrystandards) | private |  | settings | Method on com.webos.service.gibbips.config (from on-device permission registry; parameters undocumented). |

<a id="getbroadcaststandardssupport"></a>
## `getBroadcastStandardsSupport`

`luna://com.webos.service.gibbips.config/getBroadcastStandardsSupport`

Method on com.webos.service.gibbips.config (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.config/getBroadcastStandardsSupport '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcountrystandards"></a>
## `getCountryStandards`

`luna://com.webos.service.gibbips.config/getCountryStandards`

Method on com.webos.service.gibbips.config (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.config/getCountryStandards '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
