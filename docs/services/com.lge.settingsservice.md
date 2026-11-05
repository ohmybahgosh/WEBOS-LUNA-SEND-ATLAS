# `com.lge.settingsservice`

LG system settings service: reads, writes, resets and describes system settings along with their current, factory and value-range data, and supports batched settings operations.

25 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`batch`](#batch) | private |  | settings | documented | Executes several settingsservice operations in one call |
| [`deleteSystemSettings`](#deletesystemsettings) | private |  | settings | documented | Deletes the specified system settings |
| [`getCurrentSettings`](#getcurrentsettings) | private |  | settings | documented | Returns settings of foreground App |
| [`getSystemSettingDesc`](#getsystemsettingdesc) | public |  | settings | documented | Retrieve the description for the specified key |
| [`getSystemSettingDescPriv`](#getsystemsettingdescpriv) | private |  | settings | inferred | Returns the system setting desc priv. |
| [`getSystemSettingFactoryValue`](#getsystemsettingfactoryvalue) | public |  | settings | documented | Retrieve the list of default values for the specified key. |
| [`getSystemSettings`](#getsystemsettings) | public |  | settings | documented | Retrieves the values for keys specified in a passed array on system settings. |
| [`getSystemSettingsPriv`](#getsystemsettingspriv) | private |  | settings | inferred | Returns the system settings priv. |
| [`getSystemSettingValues`](#getsystemsettingvalues) | public |  | settings | documented | Retrieve the list of valid values for the specified key |
| [`getSystemSettingValuesPriv`](#getsystemsettingvaluespriv) | private |  | settings | inferred | Returns the system setting values priv. |
| [`internal/getCurrentSubscriptions`](#internal_getcurrentsubscriptions) | private |  | settings | documented | Registered in webOS OSE sysbus api.json (ACG group settings.devutility); name only |
| [`internal/instrument`](#internal_instrument) | private |  | settings | documented | Registered in webOS OSE sysbus api.json (ACG group settings.devutility); name only |
| [`resetSystemSettingDesc`](#resetsystemsettingdesc) | private |  | settings | documented | Resets setting descriptions to defaults |
| [`resetSystemSettingDescPriv`](#resetsystemsettingdescpriv) | private |  | settings | inferred | Resets the system setting desc priv. ⚠️ |
| [`resetSystemSettings`](#resetsystemsettings) | private |  | settings | documented | Resets system settings to their factory/default values ⚠️ |
| [`resetSystemSettingsPriv`](#resetsystemsettingspriv) | private |  | settings | inferred | Resets the system settings priv. ⚠️ |
| [`setSystemSettingDesc`](#setsystemsettingdesc) | private |  | settings | documented | Update the description for the specified key |
| [`setSystemSettingDescPriv`](#setsystemsettingdescpriv) | private |  | settings | inferred | Sets the system setting desc priv. |
| [`setSystemSettingFactoryDesc`](#setsystemsettingfactorydesc) | private |  | settings | documented | Update the description for the specified key |
| [`setSystemSettingFactoryDescPriv`](#setsystemsettingfactorydescpriv) | private |  | settings | inferred | Sets the system setting factory desc priv. ⚠️ |
| [`setSystemSettingFactoryValue`](#setsystemsettingfactoryvalue) | private |  | settings | documented | Save the specified settings in parameter. |
| [`setSystemSettings`](#setsystemsettings) | private |  | settings | documented | Save the specified settings in parameter. |
| [`setSystemSettingsPriv`](#setsystemsettingspriv) | private |  | settings | inferred | Sets the system settings priv. |
| [`setSystemSettingValues`](#setsystemsettingvalues) | private |  | settings | documented | Update the list of valid values for the specified key |
| [`update`](#update) | private |  | settings | inferred | Updates the settingsservice. |

<a id="batch"></a>
## `batch`

`luna://com.lge.settingsservice/batch`

Executes several settingsservice operations in one call

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `operations` | Array (required) Item is operation object |
| `method` | String (optional) method name |
| `params` | Object (required) any objects are acceptable |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/batch '{"operations": "...", "params": "..."}'
```

> Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="deletesystemsettings"></a>
## `deleteSystemSettings`

`luna://com.lge.settingsservice/deleteSystemSettings`

Deletes the specified system settings

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `dimension` | Object (optional) Dimension object. Any properties are allowed. |
| `app_id` | Array (optional) Application Id |
| `keys` | Array (optional) Key-string array |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/deleteSystemSettings '{}'
```

> Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="getcurrentsettings"></a>
## `getCurrentSettings`

`luna://com.lge.settingsservice/getCurrentSettings`

Returns settings of foreground App

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `dimension` | Object (optional) Dimension object. Any properties are allowed. |
| `keys` | Array (optional) Key-string Array |
| `subscribe` | Boolean (optional) Subscription option |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/getCurrentSettings '{}'
```

> Listed under ACG group "settings.query" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="getsystemsettingdesc"></a>
## `getSystemSettingDesc`

`luna://com.lge.settingsservice/getSystemSettingDesc`

Retrieve the description for the specified key

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `keys` | Array (optional) Key-string array |
| `key` | String (optional) Key string (can be used instead of keys) |
| `app_id` | String (optional) specify appId for finding per-app descriptions |
| `current_app` | Boolean (optional) use current appId for finding per-app descriptions |
| `subscribe` | Boolean (optional) subscription option |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/getSystemSettingDesc '{}'
```

> Listed under ACG group "settings.query" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="getsystemsettingdescpriv"></a>
## `getSystemSettingDescPriv`

`luna://com.lge.settingsservice/getSystemSettingDescPriv`

Returns the system setting desc priv.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/getSystemSettingDescPriv '{}'
```

> ACG groups: private, settings, settings.read. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsystemsettingfactoryvalue"></a>
## `getSystemSettingFactoryValue`

`luna://com.lge.settingsservice/getSystemSettingFactoryValue`

Retrieve the list of default values for the specified key.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `dimension` | Object (optional) Dimension object. Any properties are allowed. |
| `keys` | Array (optional) Key-string array |
| `app_id` | Array (optional) Application Id |
| `currunt_app` | Boolean (optional) If true, refer foreground App |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/getSystemSettingFactoryValue '{}'
```

> Listed under ACG group "settings.query" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="getsystemsettings"></a>
## `getSystemSettings`

`luna://com.lge.settingsservice/getSystemSettings`

Retrieves the values for keys specified in a passed array on system settings.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `dimension` | Object (optional) Dimension object. Any properties are allowed. |
| `keys` | Array (optional) Key-string array |
| `app_id` | Array (optional) Application Id |
| `currunt_app` | Boolean (optional) If true, refer foreground App |
| `subscribe` | Boolean (optional) subscription option |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/getSystemSettings '{}'
```

> Listed under ACG group "settings.query" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="getsystemsettingspriv"></a>
## `getSystemSettingsPriv`

`luna://com.lge.settingsservice/getSystemSettingsPriv`

Returns the system settings priv.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/getSystemSettingsPriv '{}'
```

> ACG groups: private, settings, settings.read. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsystemsettingvalues"></a>
## `getSystemSettingValues`

`luna://com.lge.settingsservice/getSystemSettingValues`

Retrieve the list of valid values for the specified key

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `app_id` | string (optional) Application Id for Per-App |
| `category` | String (optional) Category name |
| `key` | String (required) Key-string |
| `subscribe` | Boolean (optional) Subscription option |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/getSystemSettingValues '{"key": "..."}'
```

> Listed under ACG group "settings.query" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="getsystemsettingvaluespriv"></a>
## `getSystemSettingValuesPriv`

`luna://com.lge.settingsservice/getSystemSettingValuesPriv`

Returns the system setting values priv.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/getSystemSettingValuesPriv '{}'
```

> ACG groups: private, settings, settings.read. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="internal_getcurrentsubscriptions"></a>
## `internal/getCurrentSubscriptions`

`luna://com.lge.settingsservice/internal/getCurrentSubscriptions`

Registered in webOS OSE sysbus api.json (ACG group settings.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/internal/getCurrentSubscriptions '{}'
```

> Listed under ACG group "settings.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in)

<a id="internal_instrument"></a>
## `internal/instrument`

`luna://com.lge.settingsservice/internal/instrument`

Registered in webOS OSE sysbus api.json (ACG group settings.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/internal/instrument '{}'
```

> Listed under ACG group "settings.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in)

<a id="resetsystemsettingdesc"></a>
## `resetSystemSettingDesc`

`luna://com.lge.settingsservice/resetSystemSettingDesc`

Resets setting descriptions to defaults

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `app_id` | String (optional) Application Id |
| `category` | String (optional) Category name |
| `keys` | Array (optional) Key-string array |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/resetSystemSettingDesc '{}'
```

> Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="resetsystemsettingdescpriv"></a>
## `resetSystemSettingDescPriv` ⚠️ DANGEROUS

`luna://com.lge.settingsservice/resetSystemSettingDescPriv`

Resets the system setting desc priv.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/resetSystemSettingDescPriv '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="resetsystemsettings"></a>
## `resetSystemSettings` ⚠️ DANGEROUS

`luna://com.lge.settingsservice/resetSystemSettings`

Resets system settings to their factory/default values

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `dimension` | Object (optional) Dimension object. Any peroperties are allowed. |
| `app_id` | String (optional) Application Id |
| `keys` | Array (optional) Key-string array |
| `resetAll` | boolean (optional) If true, reset all settings |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/resetSystemSettings '{}'
```

> Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="resetsystemsettingspriv"></a>
## `resetSystemSettingsPriv` ⚠️ DANGEROUS

`luna://com.lge.settingsservice/resetSystemSettingsPriv`

Resets the system settings priv.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/resetSystemSettingsPriv '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsystemsettingdesc"></a>
## `setSystemSettingDesc`

`luna://com.lge.settingsservice/setSystemSettingDesc`

Update the description for the specified key

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | string (optional) category name |
| `key` | string (optional) key string (key can be used instead of keys) |
| `ui` | Object (optional) widget, displayname, visable, and active |
| `vtype` | String (optional) Array, ArrayExt, Range, Date, File, and Callback |
| `values` | Object (optional) Values object |
| `volatile` | Boolean (optional) If true, data is stored in volatile kind |
| `valueCheck` | Boolean (optional) If false, any data can be set |
| `ext` | Object (optional) Any extension object can be specified. |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/setSystemSettingDesc '{}'
```

> Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="setsystemsettingdescpriv"></a>
## `setSystemSettingDescPriv`

`luna://com.lge.settingsservice/setSystemSettingDescPriv`

Sets the system setting desc priv.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/setSystemSettingDescPriv '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsystemsettingfactorydesc"></a>
## `setSystemSettingFactoryDesc`

`luna://com.lge.settingsservice/setSystemSettingFactoryDesc`

Update the description for the specified key

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `app_id` | string (optional) Application Id for Per-App Description |
| `category` | string (optional) category name |
| `key` | string (optional) key string (key can be used instead of keys) |
| `ui` | Object (optional) widget, displayname, visable, and active |
| `vtype` | String (optional) Array, ArrayExt, Range, Date, File, and Callback |
| `values` | Object (optional) Values object |
| `volatile` | Boolean (optional) If true, data is stored in volatile kind |
| `valueCheck` | Boolean (optional) If false, any data can be set |
| `ext` | Object (optional) Any extension object can be specified. |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/setSystemSettingFactoryDesc '{}'
```

> Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="setsystemsettingfactorydescpriv"></a>
## `setSystemSettingFactoryDescPriv` ⚠️ DANGEROUS

`luna://com.lge.settingsservice/setSystemSettingFactoryDescPriv`

Sets the system setting factory desc priv.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/setSystemSettingFactoryDescPriv '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsystemsettingfactoryvalue"></a>
## `setSystemSettingFactoryValue`

`luna://com.lge.settingsservice/setSystemSettingFactoryValue`

Save the specified settings in parameter.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `app_id` | string (optional) Application Id for Per-App |
| `category` | String (optional) Category name |
| `dimension` | Object (optional) Dimension object. Any properties are allowed. |
| `settings` | Object (required) Settings |
| `setAll` | boolean (optional) update all values regardless dimension if true. |
| `country` | String (optional) Country variation |
| `valueCheck` | Boolean (optional) If false, any data can be set |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/setSystemSettingFactoryValue '{"settings": "..."}'
```

> Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="setsystemsettings"></a>
## `setSystemSettings`

`luna://com.lge.settingsservice/setSystemSettings`

Save the specified settings in parameter.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `dimension` | Object (optional) Dimension object. Any properties are allowed. |
| `settings` | Object (required) Settings |
| `app_id` | Array (optional) Application Id |
| `currunt_app` | Boolean (optional) If true, refer foreground App |
| `notify` | Boolean (optional) If false, disable notification |
| `store` | Boolean (optional) If false, no db8 operation |
| `valueCheck` | Boolean (optional) If false, any data can be set |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/setSystemSettings '{"settings": "..."}'
```

> Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="setsystemsettingspriv"></a>
## `setSystemSettingsPriv`

`luna://com.lge.settingsservice/setSystemSettingsPriv`

Sets the system settings priv.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/setSystemSettingsPriv '{}'
```

> ACG groups: private, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsystemsettingvalues"></a>
## `setSystemSettingValues`

`luna://com.lge.settingsservice/setSystemSettingValues`

Update the list of valid values for the specified key

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `key` | String (required) Key-string |
| `vtype` | String (required) Values object type |
| `op` | String (required) Add, remove, and set |
| `values` | Object (required) Values object |

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/setSystemSettingValues '{"key": "...", "vtype": "...", "op": "...", "values": "..."}'
```

> Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [2](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="update"></a>
## `update`

`luna://com.lge.settingsservice/update`

Updates the settingsservice.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.lge.settingsservice/update '{}'
```

> ACG groups: settings, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
