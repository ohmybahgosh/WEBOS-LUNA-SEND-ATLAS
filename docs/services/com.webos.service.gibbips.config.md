# `com.webos.service.gibbips.config`

Broadcast configuration query service (gibbips stack): reports supported broadcast standards and country standards. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getBroadcastStandardsSupport`](#getbroadcaststandardssupport) | private |  | settings | inferred | Returns the broadcast standards support. |
| [`getCountryStandards`](#getcountrystandards) | private |  | settings | inferred | Returns the country standards. |

<a id="getbroadcaststandardssupport"></a>
## `getBroadcastStandardsSupport`

`luna://com.webos.service.gibbips.config/getBroadcastStandardsSupport`

Returns the broadcast standards support.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.config/getBroadcastStandardsSupport '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcountrystandards"></a>
## `getCountryStandards`

`luna://com.webos.service.gibbips.config/getCountryStandards`

Returns the country standards.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.config/getCountryStandards '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
