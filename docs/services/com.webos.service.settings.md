# `com.webos.service.settings`

26 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`arrayExt`](#arrayext) | unknown |  | settings | This object describes the strings among the selectable value type. |
| [`batch`](#batch) | public | yes | settings | Runs more than one Settings Service method at once. Remarks Subscription is supported only when all the methods in operations input paramete |
| [`batchOperation`](#batchoperation) | unknown |  | settings | This object describes the methods to be executed in batch method. |
| [`deleteSystemSettings`](#deletesystemsettings) | public |  | settings | Deletes settings item(s). Factory default value is also deleted. Remarks In case there is a subscriber for the deleted item, error text will |
| [`dimension`](#dimension) | unknown |  | settings | Settings Service can set many different values under the same setting according to dimension. |
| [`ext`](#ext) | unknown |  | settings | It is defined for future expansion. Not in use now. |
| [`getCurrentSettings`](#getcurrentsettings) | public | yes | settings | Looks up the settings item, and returns the settings for the current foreground app only unlike the setSystemSettings method. Remarks Even t |
| [`getSystemSettingDesc`](#getsystemsettingdesc) | public | yes | settings | Retrieves detailed information on the settings. Exception: The request for nonexistent keys is processed as an error. |
| [`getSystemSettingFactoryValue`](#getsystemsettingfactoryvalue) | public |  | settings | Retrieves the factory default value of the setting item. Method of use is the same as getSystemSettings . Remarks Dimension is applied in th |
| [`getSystemSettings`](#getsystemsettings) | public | yes | settings | Retrieves values from system settings with keys or category which are specified in array as parameter. Following keys are available in publi |
| [`getSystemSettingValues`](#getsystemsettingvalues) | public | yes | settings | Retrives possible items to be set Remarks The return type varies depending on the keys. Use getSystemSettingDesc method for the retrieval of |
| [`internal/getCurrentSubscriptions`](#internal_getcurrentsubscriptions) | public |  | settings | Returns the information of the services which currently subscribe to the Settings Service. |
| [`internal/instrument`](#internal_instrument) | public |  | settings | Generates log for debug and changes current app. Remarks Generates logs for every luna call Changes current app id |
| [`params`](#params) | unknown |  | settings | This object has the corresponding parameters to the methods described in the batch method's operations as property. No specific format neede |
| [`range`](#range) | unknown |  | settings | It is used when describing the user-configurable data in the integer range. |
| [`resetSystemSettingDesc`](#resetsystemsettingdesc) | public |  | settings | Initializes the settings item information to the factory default value. Exception Error occurs when requesting to delete nonexistent keys. |
| [`resetSystemSettings`](#resetsystemsettings) | public |  | settings | Initializes the setting items to the factory default values. Remarks For the given category, when changing setting items, other items can be |
| [`setSystemSettingDesc`](#setsystemsettingdesc) | public |  | settings | Changes detailed information of the settings. Exception Category, key, dimension, dbtype, volatile attributes cannot be changed during runti |
| [`setSystemSettingFactoryDesc`](#setsystemsettingfactorydesc) | public |  | settings | Sets the default value when reset by resetSystemSettingDesc . It is the same type as setSystemSettingDesc method, and it can change the fact |
| [`setSystemSettingFactoryValue`](#setsystemsettingfactoryvalue) | public |  | settings | Changes the factory default of the setting item. The using method is same as setSystemSettings method. It can set the default value when res |
| [`setSystemSettings`](#setsystemsettings) | public |  | settings | Changes settings. It is available only for the keys open to public when called through Public Luna bus. The permission setting is as follow. |
| [`setSystemSettingValues`](#setsystemsettingvalues) | public |  | settings | Changes the formats of the configurable values. It can change detailed information using setSystemSettingDesc method. Exception When undefin |
| [`settings`](#settings) | unknown |  | settings | It is the Object that has the setting property. No specific format to follow. |
| [`subscription`](#subscription) | unknown |  | settings | This object describes an active subscription to the settings service. |
| [`ui`](#ui) | unknown |  | settings | UI settings when creating user UI like Settings app. |
| [`values`](#values) | unknown |  | settings | Specify the properties of the values object according to vtype . It is the information that is used for the validation of configurable value |

<a id="arrayext"></a>
## `arrayExt`

`luna://com.webos.service.settings/arrayExt`

This object describes the strings among the selectable value type.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.settings/arrayExt '{}'
```

> Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="batch"></a>
## `batch`

`luna://com.webos.service.settings/batch`

Runs more than one Settings Service method at once. Remarks Subscription is supported only when all the methods in operations input parameter support subscription. Exception Atomicity is not supported.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `operations` | Object array: batchOperation (required) A set of objects containing method name and the method's parameters as properties. |
| `subscribe` | Boolean (optional) Indicates whether to subscribe for related events. Note: Should be set to true if any of the batchOperation`s params have a 'subscribe' option set to true Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send command: # luna-send -n 1 luna://com.webos.service.settings/batch '{ "operations": [ { "method": "getSystemSettings", "params": { "category": "picture", "keys": [ "brightness" ], "subscribe":true } }, { "method": "getSystemSettingDesc", "params": { "category": "picture", "keys": [ "brightness" ], "subscribe":true } } ], "subscribe": true }
```

> ACG: settings.management \| Returns: results:array; subscribed:Boolean; returnValue:Boolean \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="batchoperation"></a>
## `batchOperation`

`luna://com.webos.service.settings/batchOperation`

This object describes the methods to be executed in batch method.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.settings/batchOperation '{}'
```

> Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="deletesystemsettings"></a>
## `deleteSystemSettings`

`luna://com.webos.service.settings/deleteSystemSettings`

Deletes settings item(s). Factory default value is also deleted. Remarks In case there is a subscriber for the deleted item, error text will be sent. Exception Errors occur when using undefined dimension.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings |
| `dimension` | Object: dimension (optional) Dimension information. It is used when setting by input, video mode, 3D mode. |
| `keys` | String array (required) Keys to be deleted |
| `app_id` | String (optional) App ID. In case of app specific setting, app ID should be specified. |

```sh
luna-send -n 1 -f luna://com.webos.service.settings/deleteSystemSettings '{ "category": "option", "keys": [ "zipcode" ] }
```

> ACG: settings.management \| Returns: method:String; returnValue:Boolean \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="dimension"></a>
## `dimension`

`luna://com.webos.service.settings/dimension`

Settings Service can set many different values under the same setting according to dimension.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.settings/dimension '{}'
```

> Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="ext"></a>
## `ext`

`luna://com.webos.service.settings/ext`

It is defined for future expansion. Not in use now.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.settings/ext '{}'
```

> Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="getcurrentsettings"></a>
## `getCurrentSettings`

`luna://com.webos.service.settings/getCurrentSettings`

Looks up the settings item, and returns the settings for the current foreground app only unlike the setSystemSettings method. Remarks Even though the foreground app is converted, the subscription message for the changed app settings will not be sent. Exception Errors occur when using undefined dimensions.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings. If omitted, it means the group that doesn't have category name. |
| `dimension` | Object: dimension (optional) Dimension information. It is used when changing settings for a specific dimension. If omitted, the currently used dimension is used. |
| `keys` | array (required) Keys to be retrieved |
| `subscribe` | Boolean (optional) Indicates whether to subscribe for related events Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send command: # luna-send -n 1 luna://com.webos.service.settings/getCurrentSettings '{ "category": "lock", "keys": [ "applockPerApp" ] }
```

> ACG: settings.query \| Returns: settings:Object: settings; category:String; dimension:Object: dimension; method:String; app_id:String; subscribed:Boolean; returnValue:Boolean \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="getsystemsettingdesc"></a>
## `getSystemSettingDesc`

`luna://com.webos.service.settings/getSystemSettingDesc`

Retrieves detailed information on the settings. Exception: The request for nonexistent keys is processed as an error.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 6+ (also on com.webos.settingsservice)  
- **Confidence:** documented, code, community

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings |
| `keys` | String array (optional) Keys for retrieving setting values. Note: Either one of keys and key must be provided. |
| `key` | String (optional) Key for retrieving setting value. Note: Either one of keys and key must be provided. |
| `app_id` | String (optional) ID of the app. Note: If target key is app specific setting, app ID must be provided. |
| `current_app` | Boolean (optional) If app ID is not specified, use the current foreground app ID. Note: If app ID is provided, this parameter is ignored. Possible values are: true: Use current foreground app ID. false (Default): Do not use current foreground app ID. |
| `subscribe` | Boolean (optional) Indicates whether to subscribe for related events Possible values are: true: Subscribed. false (Default): Not subscribed. |
| `dimension` | object (context) |

```sh
luna-send -n 1 -f luna://com.webos.service.settings/getSystemSettingDesc '{"category":"picture", "keys":["brightness"]}
```

> ACG: settings.query \| Returns: subscribed:Boolean; returnValue:Boolean; method:String; results:Object array: result; app_id:String \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \|\| Lumen: values.arrayExt entries have active/value/visible; numbers use values.range. Alias on com.webos.settingsservice/getSystemSettingDesc used by Actually-Good-WebOS. \|\| Listed in homebridge-lgwebos-tv constants as luna://com.webos.service.settings/getSystemSettingDesc. glasshouse research: describes numbers as values.range {min,max,interval} (webOS 4 used values.min/max), choices as values.arrayExt (each with visible/active), plus ui.visible / ui.active; a key list with some undescribed keys answers returnValue:false with the others in 'results'. Payload shape here is inferred from glasshouse description - exact request params not shown in the sources read.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/), [2](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/lgsettings.js), [3](https://github.com/SunnySide007/lumen-webos/blob/HEAD/docs/device/b9.md), [4](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/control/src/tv.cpp), [5](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/telemetry.js), [6](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js), [7](https://github.com/rorygallagher2024/glasshouse/blob/main/docs/development/TV-RESEARCH.md)

<a id="getsystemsettingfactoryvalue"></a>
## `getSystemSettingFactoryValue`

`luna://com.webos.service.settings/getSystemSettingFactoryValue`

Retrieves the factory default value of the setting item. Method of use is the same as getSystemSettings . Remarks Dimension is applied in the same way as getSystemSettings. Subscription is not supported. Exception If undefined dimension is used, errors will occur.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings |
| `dimension` | Object: dimension (optional) Dimension information. It is used when setting by input, video mode, 3D mode. |
| `keys` | String array (optional) Keys to be retrieved. Note: Either one of keys and key must be provided. |
| `key` | String (optional) A key to be retrieved. In case there is one key to be retrieved, directly input the strings. Note: Either one of keys and key must be provided. |
| `app_id` | String (optional) App ID. In case of app specific setting, app ID should be specified. |

```sh
luna-send command: # luna-send -n 1 luna://com.webos.service.settings/getSystemSettingFactoryValue '{"category":"picture", "key":"brightness"}
```

> ACG: settings.query \| Returns: returnValue:Boolean; method:String; dimension:Object: dimension; category:String; settings:Object: settings \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="getsystemsettings"></a>
## `getSystemSettings`

`luna://com.webos.service.settings/getSystemSettings`

Retrieves values from system settings with keys or category which are specified in array as parameter. Following keys are available in public bus. Category Key Remarks N/A localeInfo Locale info such as Menu, Audio N/A eulaStatus End-User License Agreement caption captionEnable Caption settings option country Country settings (ISO 3166-1 alpha-3) option smartServiceCountryCode2 Service country settings (ISO 3166-1 alpha-2) option smartServiceCountryCode3 Service country settings (ISO 3166-1 alpha-3) Remarks There is additional feature named 'Dimension'. We can store different settings values with a KEY using different dimension. Imagine array. Using dimension, we can keep different settings values simultaneously, and categorize settings into some groups. Dimension is index by other keys settingsservice has. For example, Brightness key has 3 dimensions, input, 3dmode, and pictureMode. You

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; all (key set per model)  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings If the specified keys (key) has a category, you must specify this property. If you only use this property without keys or key, this method will return all values which are in the specified category. |
| `dimension` | Object: dimension (optional) Specify dimension information for special key (e.g. brightness has 3 dimensions, input, _3dMode, pictureMode). Current dimensions is applied if dimension is not specified. |
| `keys` | array (optional) Keys for retrieving setting values. One of keys and key should be specified. |
| `key` | String (optional) A key for retrieving setting value. One of keys and key should be specified. |
| `app_id` | String (optional) App ID. If target key is app specific setting, app ID should be specified. |
| `current_app` | Boolean (optional) Indicates whether to use current foreground app ID instead of specific app ID. true: Use current foreground app ID false: Use specific app ID default value: false |
| `subscribe` | Boolean (optional) Indicates whether to subscribe for related events. true : Subscribe false : Do not subscribe |
| `public_ssap_gettable_keys_G6` | <13 entries, see docs/settings-keys.md> |

```sh
luna-send -f -n 1 luna://com.webos.service.settings/getSystemSettings '{ "category":"option", "keys":["country", "smartServiceCountryCode2"] }'
```

> ACG: settings.query \| Returns: settings:Object: settings; category:String; dimension:Object: dimension; method:String; app_id:String; subscribed:Boolean; returnValue:Boolean; errorText:String \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \|\| SSAP alias settings/getSystemSettings (bscpylgtv get_system_settings / get_picture_settings / subscribe_picture_settings; LGTV Companion -get_system_settings; homebridge reads picture{brightness,backlight,contrast,color}, sound{soundMode}, twinTv{status,role,systemMode}, network{deviceName}, option{audioGuidance}, time{onTimerVolume}). The luna-side service name com.webos.service.settings is taken from root-side tools (glasshouse calls luna://com.webos.service.settings/getSystemSettings with the same {category,...} payload); on webOS 3.9.3 only com.webos.settingsservice is listed (glasshouse research). Only the keys in public_ssap_gettable_keys_G6 are readable over SSAP.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [4](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [5](https://github.com/JPersson77/LGTVCompanion/blob/master/LGTV%20Companion%20Service/companion.cpp), [6](https://github.com/rorygallagher2024/glasshouse/blob/main/server/lib/audio.js), [7](https://github.com/rorygallagher2024/glasshouse/blob/main/docs/development/TV-RESEARCH.md), [8](https://github.com/chros73/bscpylgtv/blob/master/docs/available_settings_G6.md)

<a id="getsystemsettingvalues"></a>
## `getSystemSettingValues`

`luna://com.webos.service.settings/getSystemSettingValues`

Retrives possible items to be set Remarks The return type varies depending on the keys. Use getSystemSettingDesc method for the retrieval of additional info other than configurable valid conditions Exception Errors will occur when retrieving the undefined keys.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 6+  
- **Confidence:** documented, community

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings |
| `key` | String (required) A key to be retrieved |
| `app_id` | String (optional) In case of setting by app, app ID needs to be specified. |
| `subscribe` | Boolean (optional) Indicates whether to subscribe for related events. true : Subscribe false : Do not subscribe (default) |

```sh
luna-send -n 1 luna://com.webos.service.settings/getSystemSettingValues '{"category":"picture", "key":"brightness"}
```

> ACG: settings.query \| Returns: method:String; vtype:String; values:Object: values; returnValue:Boolean; errorText:String; subscribed:Boolean \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \|\| Documented in the OSE settings service reference as per magic_mapper notes.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/), [2](https://github.com/andrewfraley/magic_mapper/blob/HEAD/notes/luna_notes.md), [3](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/telemetry.js)

<a id="internal_getcurrentsubscriptions"></a>
## `internal/getCurrentSubscriptions`

`luna://com.webos.service.settings/internal/getCurrentSubscriptions`

Returns the information of the services which currently subscribe to the Settings Service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send command: (Create log) # luna-send -n 1 -f luna://com.webos.service.settings/internal/getCurrentSubscriptions '{}
```

> ACG: settings.devutility \| Returns: returnValue:Boolean; subscriptions:Object array: subscription; errorText:String \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="internal_instrument"></a>
## `internal/instrument`

`luna://com.webos.service.settings/internal/instrument`

Generates log for debug and changes current app. Remarks Generates logs for every luna call Changes current app id

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `control` | String (required) Information on internal method settings |
| `params` | Object (optional) The current app ID to be changed |

```sh
luna-send -n 1 -f luna://com.webos.service.settings/internal/instrument '{"control":"start"}
```

> ACG: settings.devutility \| Returns: returnValue:Boolean; instrumentStatus:String; errorText:String \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="params"></a>
## `params`

`luna://com.webos.service.settings/params`

This object has the corresponding parameters to the methods described in the batch method's operations as property. No specific format needed.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.settings/params '{}'
```

> Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="range"></a>
## `range`

`luna://com.webos.service.settings/range`

It is used when describing the user-configurable data in the integer range.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.settings/range '{}'
```

> Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="resetsystemsettingdesc"></a>
## `resetSystemSettingDesc`

`luna://com.webos.service.settings/resetSystemSettingDesc`

Initializes the settings item information to the factory default value. Exception Error occurs when requesting to delete nonexistent keys.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings |
| `keys` | array (required) Keys to be reset to the factory default value |
| `app_id` | String (optional) App ID. If target key is app specific setting, app ID should be specified. |

```sh
luna-send -n 1 -a com.webos.setting luna://com.webos.service.settings/resetSystemSettingDesc '{"category":"support"}'
```

> ACG: settings.management \| Returns: method:String; returnValue:Boolean; errorText:String \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="resetsystemsettings"></a>
## `resetSystemSettings`

`luna://com.webos.service.settings/resetSystemSettings`

Initializes the setting items to the factory default values. Remarks For the given category, when changing setting items, other items can be initialized according to the dimension. For the key with 'E' dbtype, the values of ExceptionApp list will be equally changed. Exception Error occurs when using undefined dimension.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings |
| `dimension` | Object: dimension (optional) Dimension information. It is used when setting by input, video mode, 3D mode. |
| `keys` | array (required) Keys to be reset to the factory default value |
| `app_id` | String (optional) App ID. If target key is app specific setting, app ID should be specified. |
| `resetAll` | Boolean (optional) Indicates whether to reset the settings for all dimensions. true: Reset false: Do not reset (default) |

```sh
luna-send -n 1 -a com.webos.setting luna://com.webos.service.settings/resetSystemSettings '{"category":"support", "keys":["automaticUpdate"]}'
```

> ACG: settings.management \| Returns: method:String; returnValue:Boolean; errorText:String \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="setsystemsettingdesc"></a>
## `setSystemSettingDesc`

`luna://com.webos.service.settings/setSystemSettingDesc`

Changes detailed information of the settings. Exception Category, key, dimension, dbtype, volatile attributes cannot be changed during runtime.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings |
| `key` | String (required) A key to be set |
| `app_id` | String (optional) App ID. In case of app specific setting, app ID should be specified. |
| `ui` | Object: ui (optional) Object for UI information containing active and visible flags as property. |
| `vtype` | String (optional) Type of values object. Possible values: array, arrayExt, range, callback, file. |
| `values` | Object: values (optional) Specify the properties of the values object according to vtype . |
| `volatile` | Boolean (optional) Indicates whether to initialize the setting when resetting the system. true: Initialized false: Not initialized |
| `valueCheck` | Boolean (optional) Indicates whether to perform the validation check on the set values. true: Do not perform false: Perform |
| `notifySelf` | Boolean (optional) Indicates whether to receive the subscription message. true: The subscribe message will be sent to self false: The subscribe message will not be sent to self |
| `ext` | Object: ext (optional) reserved property |

```sh
luna-send -f -n 1 -a com.webos.service.settings luna://com.webos.service.settings/setSystemSettingDesc '{ "key": "brightness", "ui": { "visible": false, "displayName": "brightness", "active": true, "widget": "None" } }'
```

> ACG: settings.management \| Returns: method:String; returnValue:Boolean; errorText:String \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="setsystemsettingfactorydesc"></a>
## `setSystemSettingFactoryDesc`

`luna://com.webos.service.settings/setSystemSettingFactoryDesc`

Sets the default value when reset by resetSystemSettingDesc . It is the same type as setSystemSettingDesc method, and it can change the factory default values of the settings info. Remarks Settings item info is in JSON type, and includes the following. Exception Category, key, dimension, dbtype, volatile attributes cannot be changed during runtime.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings |
| `key` | String (required) Setting key |
| `app_id` | String (optional) App ID. In case of app specific setting, app ID should be specified. |
| `ui` | Object array: ui (optional) Object for UI information containing active and visible flags as property. |
| `vtype` | String (optional) Type of values object. |
| `values` | Object: values (optional) Specify the properties of the values object according to vtype . |
| `volatile` | Boolean (optional) Indicates whether to initialize the setting when resetting the system. true: Initialized false: Not initialized |
| `valueCheck` | Boolean (optional) Indicates whether to perform the validation check on the set values. true: Do not perform false: Perform |
| `notifySelf` | Boolean (optional) Indicates whether to receive the subscription message. true: The subscribe message will be sent to self false: The subscribe message will not be sent to self |
| `ext` | Object: ext (optional) reserved property |

```sh
luna-send command: # luna-send -f -n 1 -a com.webos.service.settings luna://com.webos.service.settings/setSystemSettingFactoryDesc '{ "key": "brightness", "ui": { "visible": false, "displayName": "brightness", "active": true, "widget": "None" } }'
```

> ACG: settings.management \| Returns: method:String; returnValue:Boolean; errorText:String \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="setsystemsettingfactoryvalue"></a>
## `setSystemSettingFactoryValue`

`luna://com.webos.service.settings/setSystemSettingFactoryValue`

Changes the factory default of the setting item. The using method is same as setSystemSettings method. It can set the default value when resetSystemSettings method is called. Remarks In case of the following specific categories, when changing settings, it can store different values according to conditions such as dimension. Exception When using undefined dimension, errors will occur.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings |
| `app_id` | String (optional) App ID. In case of app specific setting, app ID should be specified. |
| `dimension` | Object: dimension (optional) Dimension information. It is used when setting by input, video mode, 3D mode. |
| `settings` | Object: settings (required) Settings to be saved |
| `setAll` | Boolean (optional) Indicates whether to set the settings for all dimensions. Either dimension or setAll can be specified. true: Set the settings for all dimensions false: Set the settings for the given dimension only default value: false |
| `country` | String (optional) Set to change settings of a specific country only |

```sh
luna-send -f -n 1 luna://com.webos.service.settings/setSystemSettingFactoryValue '{ "category":"picture", "dimension":{"input":"hdmi2", "pictureMode":"vivid", "_3dStatus":"2d"}, "settings":{"brightness":30, "contrast":44} }
```

> ACG: settings.management \| Returns: method:String; returnValue:Boolean; errorText:String \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="setsystemsettings"></a>
## `setSystemSettings`

`luna://com.webos.service.settings/setSystemSettings`

Changes settings. It is available only for the keys open to public when called through Public Luna bus. The permission setting is as follow. Category Key Remarks caption captionEnable Caption setting Remarks In case of the following specific categories, when changing settings, it can store different values according to the dimension. For the keys with 'E' dbtype, the values of ExceptionApp list will be equally changed. Exception When an undefined dimension is used, errors will occur.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 6+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings |
| `dimension` | Object: dimension (optional) It is used when setting by input, video mode, 3D mode. |
| `settings` | Object: settings (required) Settings to be saved |
| `app_id` | String (optional) App ID. In case of app specific setting, app ID should be specified. |
| `notifySelf` | Boolean (optional) Indicates whether to receive the subscription message.​ Possible values are: true: Subscribe message will be sent to self. false: Subscribe message will not be sent to self. |
| `current_app` | Boolean (optional) Indicates whether to return the settings of the current foreground app. Possible values are: true: Settings of the current foreground app gets returned false (Default): Use app ID specified in the parameter app_id. |
| `setAll` | Boolean (optional) Indicates whether to set the settings of all dimensions. Possible values are: true: Set the settings for all dimensions. false (Default): Set the settings for the dimension specified in the parameter dimension. |
| `notify` | Boolean (optional) Indicates whether to receive the subscription message. Possible values are: true: Subscribe message will be sent. false: Subscribe message will not be sent. |
| `store` | Boolean (optional) Indicates whether to store the subscription message in DB. Possible values are: true (Default): Store in DB. false: Do not store in DB. Only subscription message will be sent. |

```sh
luna-send \-n 1 luna://com.webos.service.settings/setSystemSettings '{ "category":"picture", "dimension":{"input":"hdmi2", "pictureMode":"vivid", "_3dStatus":"2d"}, "settings":{"brightness":30, "contrast":44} }
```

> ACG: settings.management \| Returns: method:String; returnValue:Boolean \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \|\| Used by Glasshouse and Overglass for aiPicture/picture/sound scopes.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/), [2](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md), [3](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/audio.js)

<a id="setsystemsettingvalues"></a>
## `setSystemSettingValues`

`luna://com.webos.service.settings/setSystemSettingValues`

Changes the formats of the configurable values. It can change detailed information using setSystemSettingDesc method. Exception When undefined keys are requested to change settings, errors will occur.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `category` | String (optional) Category of settings |
| `key` | String (required) Setting key |
| `values` | Object: values (required) Specify the properties of the values object according to vtype . |
| `vtype` | String (required) Type of values object. Possible values are: Array ArrayExt Range Callback File Date |
| `op` | String (required) Method of settings. Possible values are: set add remove update |

```sh
luna-send -n 1 -f luna://com.webos.service.settings/setSystemSettingValues '{ "category":"sampleCategory", "key":"sampleKey", "op":"set", "vtype":"ArrayExt", "values":{ "arrayExt":[ { "value":"expert1", "visible":false, "active":false } ] } }
```

> ACG: settings.management \| Returns: method:String; returnValue:Boolean \| Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="settings"></a>
## `settings`

`luna://com.webos.service.settings/settings`

It is the Object that has the setting property. No specific format to follow.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.settings/settings '{}'
```

> Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="subscription"></a>
## `subscription`

`luna://com.webos.service.settings/subscription`

This object describes an active subscription to the settings service.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.settings/subscription '{}'
```

> Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="ui"></a>
## `ui`

`luna://com.webos.service.settings/ui`

UI settings when creating user UI like Settings app.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.settings/ui '{}'
```

> Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)

<a id="values"></a>
## `values`

`luna://com.webos.service.settings/values`

Specify the properties of the values object according to vtype . It is the information that is used for the validation of configurable values. The format for the value of each vtype is: array { array: [ string, string, ...] } arrayExt { arrayExt: [ object, object, ...] } Object Syntax: { visible: boolean active: boolean value: string } range { range: { max: integer min: integer interval: integer } }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.settings/values '{}'
```

> Service: Settings Service manages the settings used in webOS and provides the setting information (descriptions) such as Set, Get functions to setting values, the valid range of data that can be set, and wheth \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-settings/)
