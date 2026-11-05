# `com.webos.service.gibbs.bcConfigAdapter`

GIBBS broadcast config-cache adapter: dumps cached configuration and settings values. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`configdcache_showAllValues`](#configdcache_showallvalues) | private |  | settings | inferred | Handles the configdcache show all values. |
| [`settingscache_showAllValues`](#settingscache_showallvalues) | private |  | settings | inferred | Handles the settingscache show all values. |
| [`showAllValues`](#showallvalues) | private |  | settings | inferred | Shows the all values. |

<a id="configdcache_showallvalues"></a>
## `configdcache_showAllValues`

`luna://com.webos.service.gibbs.bcConfigAdapter/configdcache_showAllValues`

Handles the configdcache show all values.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.bcConfigAdapter/configdcache_showAllValues '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingscache_showallvalues"></a>
## `settingscache_showAllValues`

`luna://com.webos.service.gibbs.bcConfigAdapter/settingscache_showAllValues`

Handles the settingscache show all values.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.bcConfigAdapter/settingscache_showAllValues '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="showallvalues"></a>
## `showAllValues`

`luna://com.webos.service.gibbs.bcConfigAdapter/showAllValues`

Shows the all values.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.bcConfigAdapter/showAllValues '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
