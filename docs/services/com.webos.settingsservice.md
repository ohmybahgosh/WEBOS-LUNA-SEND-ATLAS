# `com.webos.settingsservice`

18 methods.  Platforms seen: all, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`batch`](#batch) | private |  | settings | Executes several settingsservice operations in one call |
| [`deleteSystemSettingDesc`](#deletesystemsettingdesc) | private |  | settings | Registered in webOS OSE sysbus api.json (ACG group settings.management); name only |
| [`deleteSystemSettings`](#deletesystemsettings) | private |  | settings | Deletes the specified system settings |
| [`getCurrentSettings`](#getcurrentsettings) | private |  | settings | Returns settings of foreground App |
| [`getSystemSettingDesc`](#getsystemsettingdesc) | public |  | settings | Retrieve the description for the specified key |
| [`getSystemSettingFactoryValue`](#getsystemsettingfactoryvalue) | public |  | settings | Retrieve the list of default values for the specified key. |
| [`getSystemSettings`](#getsystemsettings) | public | yes | settings | Retrieves system setting values by key (localeInfo, country, smartServiceCountryCode2, audioGuidance, caption* keys). |
| [`getSystemSettingValues`](#getsystemsettingvalues) | public |  | settings | Retrieve the list of valid values for the specified key |
| [`internal/getCurrentSubscriptions`](#internal_getcurrentsubscriptions) | private |  | settings | Method registered by com.webos.settingsservice (category '/internal') |
| [`internal/instrument`](#internal_instrument) | private |  | settings | Method registered by com.webos.settingsservice (category '/internal') |
| [`resetSystemSettingDesc`](#resetsystemsettingdesc) | private |  | settings | Resets setting descriptions to defaults |
| [`resetSystemSettings`](#resetsystemsettings) | private |  | settings | Resets system settings to their factory/default values ⚠️ |
| [`setSystemFactorySettingDesc`](#setsystemfactorysettingdesc) | private |  | settings | Registered in webOS OSE sysbus api.json (ACG group settings.management); name only |
| [`setSystemSettingDesc`](#setsystemsettingdesc) | public |  | settings | Update the description for the specified key |
| [`setSystemSettingFactoryDesc`](#setsystemsettingfactorydesc) | public |  | settings | Update the description for the specified key |
| [`setSystemSettingFactoryValue`](#setsystemsettingfactoryvalue) | private |  | settings | Save the specified settings in parameter. |
| [`setSystemSettings`](#setsystemsettings) | private |  | settings | Write TV system settings (picture, sound, option, other, aspectRatio, network, general, time ...). The main luna call used by LGTV Companion |
| [`setSystemSettingValues`](#setsystemsettingvalues) | private |  | settings | Update the list of valid values for the specified key |

<a id="batch"></a>
## `batch`

`luna://com.webos.settingsservice/batch`

Executes several settingsservice operations in one call

- **Access:** private  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `operations` | Array (required) Item is operation object |
| `method` | String (optional) method name |
| `params` | Object (required) any objects are acceptable |

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/batch '{"operations": "...", "params": "..."}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="deletesystemsettingdesc"></a>
## `deleteSystemSettingDesc`

`luna://com.webos.settingsservice/deleteSystemSettingDesc`

Registered in webOS OSE sysbus api.json (ACG group settings.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/deleteSystemSettingDesc '{}'
```

> Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in)

<a id="deletesystemsettings"></a>
## `deleteSystemSettings`

`luna://com.webos.settingsservice/deleteSystemSettings`

Deletes the specified system settings

- **Access:** private  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `dimension` | Object (optional) Dimension object. Any properties are allowed. |
| `app_id` | Array (optional) Application Id |
| `keys` | Array (optional) Key-string array |

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/deleteSystemSettings '{}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="getcurrentsettings"></a>
## `getCurrentSettings`

`luna://com.webos.settingsservice/getCurrentSettings`

Returns settings of foreground App

- **Access:** private  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `dimension` | Object (optional) Dimension object. Any properties are allowed. |
| `keys` | Array (optional) Key-string Array |
| `subscribe` | Boolean (optional) Subscription option |

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/getCurrentSettings '{}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.query" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="getsystemsettingdesc"></a>
## `getSystemSettingDesc`

`luna://com.webos.settingsservice/getSystemSettingDesc`

Retrieve the description for the specified key

- **Access:** public  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `keys` | Array (optional) Key-string array |
| `key` | String (optional) Key string (can be used instead of keys) |
| `app_id` | String (optional) specify appId for finding per-app descriptions |
| `current_app` | Boolean (optional) use current appId for finding per-app descriptions |
| `subscribe` | Boolean (optional) subscription option |

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/getSystemSettingDesc '{}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, public, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.query" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="getsystemsettingfactoryvalue"></a>
## `getSystemSettingFactoryValue`

`luna://com.webos.settingsservice/getSystemSettingFactoryValue`

Retrieve the list of default values for the specified key.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `dimension` | Object (optional) Dimension object. Any properties are allowed. |
| `keys` | Array (optional) Key-string array |
| `app_id` | Array (optional) Application Id |
| `currunt_app` | Boolean (optional) If true, refer foreground App |

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/getSystemSettingFactoryValue '{}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, public, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.query" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="getsystemsettings"></a>
## `getSystemSettings`

`luna://com.webos.settingsservice/getSystemSettings`

Retrieves system setting values by key (localeInfo, country, smartServiceCountryCode2, audioGuidance, caption* keys).

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted); webOS 3+  
- **Confidence:** documented, code, community

| Param | Type / notes |
|---|---|
| `category` | String (optional) required for categorized keys, e.g. option, caption |
| `keys` | String array (optional) |
| `key` | String (optional) |
| `subscribe` | Boolean (optional) |

```sh
luna-send -i -f luna://com.webos.settingsservice/getSystemSettings '{"category":"option","keys":["country","smartServiceCountryCode2"]}'
```

> Read-only public API; keys categories: option (country, smartServiceCountryCode2, audioGuidance), caption (captionEnable, captionAnalog, captionDigital, captionStyle, captionSize, captionFont, captionTextColor, captionTextOpacity, captionBgColor, captionBgOpacity, captionEdgeType, captionEdgeColor, captionWindowColor, captionWindowOpacity); uncategorized: localeInfo. \|\| Seen in the vendored official webOSTV.js 1.2.13 (webOSTV.js 'deviceInfo' code path), response has 'settings' object. This is the luna service behind the SSAP settings/getSystemSettings call (same {category, keys} payload); newer builds also expose com.webos.service.settings. \|\| Callable with luna-send-pub, e.g. {"keys":["eulaStatus"]}, {"keys":["localeInfo"]} (reply contains locales, keyboards, clock). Hyperion subscribes to category picture. Also exposed on the alias luna://com.webos.service.settings/getSystemSettings (used by LGTVCompanion, Glasshouse, Overglass).

Sources: [1](https://webostv.developer.lge.com/develop/references/settings-service), [2](https://github.com/Cathwyler/MagicRemoteService/blob/master/MagicRemoteService/Resources/TV/MagicRemoteService/webOSTVjs-1.2.13/webOSTV.js), [3](https://github.com/webosbrew/pages/blob/HEAD/content/pages/hacking/settings.md), [4](https://github.com/webosbrew/pages/blob/HEAD/content/pages/luna.md), [5](https://github.com/webosbrew/hyperion-webos/blob/HEAD/src/service.c), [6](https://github.com/andrewfraley/magic_mapper/blob/HEAD/magic_mapper.py), [7](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="getsystemsettingvalues"></a>
## `getSystemSettingValues`

`luna://com.webos.settingsservice/getSystemSettingValues`

Retrieve the list of valid values for the specified key

- **Access:** public  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `app_id` | string (optional) Application Id for Per-App |
| `category` | String (optional) Category name |
| `key` | String (required) Key-string |
| `subscribe` | Boolean (optional) Subscription option |

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/getSystemSettingValues '{"key": "..."}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, public, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.query" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="internal_getcurrentsubscriptions"></a>
## `internal/getCurrentSubscriptions`

`luna://com.webos.settingsservice/internal/getCurrentSubscriptions`

Method registered by com.webos.settingsservice (category '/internal')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/internal/getCurrentSubscriptions '{}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in)

<a id="internal_instrument"></a>
## `internal/instrument`

`luna://com.webos.settingsservice/internal/instrument`

Method registered by com.webos.settingsservice (category '/internal')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/internal/instrument '{}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in)

<a id="resetsystemsettingdesc"></a>
## `resetSystemSettingDesc`

`luna://com.webos.settingsservice/resetSystemSettingDesc`

Resets setting descriptions to defaults

- **Access:** private  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `app_id` | String (optional) Application Id |
| `category` | String (optional) Category name |
| `keys` | Array (optional) Key-string array |

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/resetSystemSettingDesc '{}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="resetsystemsettings"></a>
## `resetSystemSettings` ⚠️ DANGEROUS

`luna://com.webos.settingsservice/resetSystemSettings`

Resets system settings to their factory/default values

- **Access:** private  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `dimension` | Object (optional) Dimension object. Any peroperties are allowed. |
| `app_id` | String (optional) Application Id |
| `keys` | Array (optional) Key-string array |
| `resetAll` | boolean (optional) If true, reset all settings |

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/resetSystemSettings '{}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="setsystemfactorysettingdesc"></a>
## `setSystemFactorySettingDesc`

`luna://com.webos.settingsservice/setSystemFactorySettingDesc`

Registered in webOS OSE sysbus api.json (ACG group settings.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/setSystemFactorySettingDesc '{}'
```

> Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in)

<a id="setsystemsettingdesc"></a>
## `setSystemSettingDesc`

`luna://com.webos.settingsservice/setSystemSettingDesc`

Update the description for the specified key

- **Access:** public  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

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
luna-send -n 1 -f luna://com.webos.settingsservice/setSystemSettingDesc '{}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, public, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="setsystemsettingfactorydesc"></a>
## `setSystemSettingFactoryDesc`

`luna://com.webos.settingsservice/setSystemSettingFactoryDesc`

Update the description for the specified key

- **Access:** public  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

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
luna-send -n 1 -f luna://com.webos.settingsservice/setSystemSettingFactoryDesc '{}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, public, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="setsystemsettingfactoryvalue"></a>
## `setSystemSettingFactoryValue`

`luna://com.webos.settingsservice/setSystemSettingFactoryValue`

Save the specified settings in parameter.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

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
luna-send -n 1 -f luna://com.webos.settingsservice/setSystemSettingFactoryValue '{"settings": "..."}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)

<a id="setsystemsettings"></a>
## `setSystemSettings`

`luna://com.webos.settingsservice/setSystemSettings`

Write TV system settings (picture, sound, option, other, aspectRatio, network, general, time ...). The main luna call used by LGTV Companion / bscpylgtv / aiopylgtv / homebridge plugins via the createAlert trick

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** all webOS TV generations seen (webOS 3.x - 26); settings key availability differs per model; webOS 3+  
- **Confidence:** code, community

| Param | Type / notes |
|---|---|
| `category` | string settings category (see categories) or dimension-qualified category |
| `settings` | object key->value (values mostly strings, even for numbers; a few are ints/arrays/bools - see categories) |
| `current_app` | bool (needed e.g. for truMotionMode / aspectRatio settings) |
| `dimension` | object {input, pictureMode, dynamicRange} (documented by glasshouse for the get/set service API; whole-category writes without it apply to the screen currently shown) |
| `dimension_syntax` | {"category_dimension_syntax": "picture$<input>.<pictureMode>.<2d\|3d>.<dynamicRange>  ('x' = wildcard; bscpylgtv set_picture_settings uses picture$<input>.<pic_mode>.<stereo>.x ; set_picture_mode uses picture$<input>.x.<stereo>.<dynamic_range>; category may be picture or aiPicture)", "inputs": "atv, av1, av2, browser, camera, comp1, comp2, comp3, default, dp1, dp2, dtv, gallery, hdmi1, hdmi1_pc, h |
| `categories` | <27 entries, see docs/settings-keys.md> |
| `public_ssap_settable_keys_G6` | <11 entries, see docs/settings-keys.md> |
| `companion_command_table` | <74 entries, see docs/settings-keys.md> |

```sh
via SSAP createAlert trick: {"type":"request","id":"1","uri":"ssap://system.notifications/createAlert","payload":{"message":" ","buttons":[{"label":"","onClick":"luna://com.webos.settingsservice/setSystemSettings","params":{"category":"picture","settings":{"backlight":"40"}}}],"onclose":{"uri":"luna://com.webos.settingsservice/setSystemSettings","params":{"category":"picture","settings":{"backlight":"40"}}},"onfail":{"uri":"luna://com.webos.settingsservice/setSystemSettings","params":{"category":"picture","settings":{"backlight":"40"}}}}}
```

> Sent through createAlert/closeAlert (return data is not visible). Examples: category 'picture' {backlight:'40', contrast:'85', brightness:'50', pictureMode:'cinema', eyeComfortMode:'off', energySaving:'off', truMotionMode:'off' (needs current_app:true)}; category 'sound' {soundOutput:'external_arc', soundMode:'standard', eArcSupport:'on', digitalAudioPriority:'auto'}; category 'network' {wolwowlOnOff:'true'} (Wake-on-LAN / 'TV On With Mobile'); category 'other' {svcMenuFlag:false} enables the legacy full service menu; 'other' lowLevelAdjustment/blackStabilizer/whiteStabilizer are ints; category 'picture' {applyToAllInput:'picture'} copies to all inputs; category 'aiPicture' {ai_Picture:'off',ai_Brightness:'off',ai_Genre:'off'}. Per-category key lists and allowed values were extracted from bscpylgtv docs/available_settings_*.md (OLED C1,C2,C8,C9,CX,G3,G4,G5,G6 firmware dumps of valid-settings.js/defaultSettings.json) - ranges/lists are the union across those models; see libs-notes.md for the complete tables. \|\| Examples seen: {category:time, settings:{autoOff15Min:"off"}} disables 15-minute no-signal power off; {category:general, settings:{noSignalScreenSaver:"off"}}; {category:network, settings:{allowMobileDeviceAccess:false}} closes SSAP ports 3000/3001; {category:network, settings:{wolwowlOnOff:"true"}}; {category:picture, settings:{eyeComfortMode:"on"\|"off"}}; {category:picture, settings:{backlight:"80"}} (OLED light); {category:picture, settings:{energySaving:"min\|med

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/chros73/bscpylgtv/blob/master/docs/available_settings_G6.md), [4](https://github.com/chros73/bscpylgtv/blob/master/docs/available_settings_C2.md), [5](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api_commands.h), [6](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [7](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/event.cpp), [8](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js)

<a id="setsystemsettingvalues"></a>
## `setSystemSettingValues`

`luna://com.webos.settingsservice/setSystemSettingValues`

Update the list of valid values for the specified key

- **Access:** private  
- **Subscribe:** no  
- **Platform:** all  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category name |
| `key` | String (required) Key-string |
| `vtype` | String (required) Values object type |
| `op` | String (required) Add, remove, and set |
| `values` | Object (required) Values object |

```sh
luna-send -n 1 -f luna://com.webos.settingsservice/setSystemSettingValues '{"key": "...", "vtype": "...", "op": "...", "values": "..."}'
```

> Seen via `ls-monitor -i com.webos.settingsservice` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Listed under ACG group "settings.management" in the component api.json/groups.json; no parameter docs read. Parameters from the doc comments in inc/SettingsServiceApi.h (settingsservice repo; note some doc strings are copy-paste, descriptions here follow method names). Parameter name "currunt_app" appears in the doc table but the JSON schema property is current_app.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/webosose/settingsservice/blob/master/files/sysbus/com.webos.settingsservice.api.json.in), [3](https://github.com/webosose/settingsservice/blob/master/inc/SettingsServiceApi.h)
