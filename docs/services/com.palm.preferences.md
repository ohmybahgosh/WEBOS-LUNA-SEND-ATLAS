# `com.palm.preferences`

Key-value preferences store: gets and sets per-application properties and system properties, individually or in bulk.

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`appProperties/getAllAppProperties`](#appproperties_getallappproperties) | private |  | settings | inferred | Returns the all app properties (app properties) |
| [`appProperties/getAllAppPropertiesObj`](#appproperties_getallapppropertiesobj) | private |  | settings | inferred | Returns the all app properties obj (app properties) |
| [`appProperties/getAppKeys`](#appproperties_getappkeys) | private |  | settings | inferred | Returns the app keys (app properties) |
| [`appProperties/getAppKeysObj`](#appproperties_getappkeysobj) | private |  | settings | inferred | Returns the app keys obj (app properties) |
| [`appProperties/getAppProperty`](#appproperties_getappproperty) | private |  | settings | inferred | Returns the app property (app properties) |
| [`appProperties/removeAppProperty`](#appproperties_removeappproperty) | private |  | settings | inferred | Removes the app property (app properties) ⚠️ |
| [`appProperties/setAppProperty`](#appproperties_setappproperty) | private |  | settings | inferred | Sets the app property (app properties) |
| [`systemProperties/Get`](#systemproperties_get) | public |  | settings | inferred | Returns the preferences (system properties) |
| [`systemProperties/GetAll`](#systemproperties_getall) | public |  | settings | inferred | Returns the all (system properties) |
| [`systemProperties/getAllSysProperties`](#systemproperties_getallsysproperties) | public |  | settings | inferred | Returns the all sys properties (system properties) |
| [`systemProperties/getAllSysPropertiesObj`](#systemproperties_getallsyspropertiesobj) | public |  | settings | inferred | Returns the all sys properties obj (system properties) |
| [`systemProperties/GetKeys`](#systemproperties_getkeys) | public |  | settings | inferred | Returns the keys (system properties) |
| [`systemProperties/GetSome`](#systemproperties_getsome) | public |  | settings | inferred | Returns the some (system properties) |
| [`systemProperties/getSomeSysProperties`](#systemproperties_getsomesysproperties) | public |  | settings | inferred | Returns the some sys properties (system properties) |
| [`systemProperties/getSomeSysPropertiesObj`](#systemproperties_getsomesyspropertiesobj) | public |  | settings | inferred | Returns the some sys properties obj (system properties) |
| [`systemProperties/getSysKeys`](#systemproperties_getsyskeys) | public |  | settings | inferred | Returns the sys keys (system properties) |
| [`systemProperties/getSysKeysObj`](#systemproperties_getsyskeysobj) | public |  | settings | inferred | Returns the sys keys obj (system properties) |
| [`systemProperties/getSysProperty`](#systemproperties_getsysproperty) | public |  | settings | inferred | Returns the sys property (system properties) |

<a id="appproperties_getallappproperties"></a>
## `appProperties/getAllAppProperties`

`luna://com.palm.preferences/appProperties/getAllAppProperties`

Returns the all app properties (app properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/appProperties/getAllAppProperties '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="appproperties_getallapppropertiesobj"></a>
## `appProperties/getAllAppPropertiesObj`

`luna://com.palm.preferences/appProperties/getAllAppPropertiesObj`

Returns the all app properties obj (app properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/appProperties/getAllAppPropertiesObj '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="appproperties_getappkeys"></a>
## `appProperties/getAppKeys`

`luna://com.palm.preferences/appProperties/getAppKeys`

Returns the app keys (app properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/appProperties/getAppKeys '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="appproperties_getappkeysobj"></a>
## `appProperties/getAppKeysObj`

`luna://com.palm.preferences/appProperties/getAppKeysObj`

Returns the app keys obj (app properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/appProperties/getAppKeysObj '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="appproperties_getappproperty"></a>
## `appProperties/getAppProperty`

`luna://com.palm.preferences/appProperties/getAppProperty`

Returns the app property (app properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/appProperties/getAppProperty '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="appproperties_removeappproperty"></a>
## `appProperties/removeAppProperty` ⚠️ DANGEROUS

`luna://com.palm.preferences/appProperties/removeAppProperty`

Removes the app property (app properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/appProperties/removeAppProperty '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="appproperties_setappproperty"></a>
## `appProperties/setAppProperty`

`luna://com.palm.preferences/appProperties/setAppProperty`

Sets the app property (app properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/appProperties/setAppProperty '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemproperties_get"></a>
## `systemProperties/Get`

`luna://com.palm.preferences/systemProperties/Get`

Returns the preferences (system properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/systemProperties/Get '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemproperties_getall"></a>
## `systemProperties/GetAll`

`luna://com.palm.preferences/systemProperties/GetAll`

Returns the all (system properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/systemProperties/GetAll '{}'
```

> ACG groups: public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemproperties_getallsysproperties"></a>
## `systemProperties/getAllSysProperties`

`luna://com.palm.preferences/systemProperties/getAllSysProperties`

Returns the all sys properties (system properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/systemProperties/getAllSysProperties '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemproperties_getallsyspropertiesobj"></a>
## `systemProperties/getAllSysPropertiesObj`

`luna://com.palm.preferences/systemProperties/getAllSysPropertiesObj`

Returns the all sys properties obj (system properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/systemProperties/getAllSysPropertiesObj '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemproperties_getkeys"></a>
## `systemProperties/GetKeys`

`luna://com.palm.preferences/systemProperties/GetKeys`

Returns the keys (system properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/systemProperties/GetKeys '{}'
```

> ACG groups: public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemproperties_getsome"></a>
## `systemProperties/GetSome`

`luna://com.palm.preferences/systemProperties/GetSome`

Returns the some (system properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/systemProperties/GetSome '{}'
```

> ACG groups: public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemproperties_getsomesysproperties"></a>
## `systemProperties/getSomeSysProperties`

`luna://com.palm.preferences/systemProperties/getSomeSysProperties`

Returns the some sys properties (system properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/systemProperties/getSomeSysProperties '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemproperties_getsomesyspropertiesobj"></a>
## `systemProperties/getSomeSysPropertiesObj`

`luna://com.palm.preferences/systemProperties/getSomeSysPropertiesObj`

Returns the some sys properties obj (system properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/systemProperties/getSomeSysPropertiesObj '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemproperties_getsyskeys"></a>
## `systemProperties/getSysKeys`

`luna://com.palm.preferences/systemProperties/getSysKeys`

Returns the sys keys (system properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/systemProperties/getSysKeys '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemproperties_getsyskeysobj"></a>
## `systemProperties/getSysKeysObj`

`luna://com.palm.preferences/systemProperties/getSysKeysObj`

Returns the sys keys obj (system properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/systemProperties/getSysKeysObj '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemproperties_getsysproperty"></a>
## `systemProperties/getSysProperty`

`luna://com.palm.preferences/systemProperties/getSysProperty`

Returns the sys property (system properties)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.preferences/systemProperties/getSysProperty '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
