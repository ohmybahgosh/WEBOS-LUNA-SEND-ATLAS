# `com.webos.service.config`

12 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`configs`](#configs) | unknown |  | settings | It contains full name of config and value pair. For example, "configs": { "com.webos.service.applicationmanager.testKey": "added" } |
| [`dump`](#dump) | public |  | settings | It is useful for debugging. It returns the list of all configs and current values. |
| [`freeDb`](#freedb) | public |  | settings | Method on com.webos.service.config (from on-device permission registry; parameters undocumented). |
| [`fullDump`](#fulldump) | public |  | settings | It is useful for debugging. It returns the list of all configs including overridden values from all layers. |
| [`genRemoteConfig`](#genremoteconfig) | private |  | settings | Method on com.webos.service.config (introspected on-device; parameters undocumented). |
| [`getConfig`](#getconfig) | public |  | settings | Method on com.webos.service.config (from on-device permission registry; parameters undocumented). |
| [`getConfigs`](#getconfigs) | public | yes | settings | It returns the requested configs which is the pairs of key-value as a JSON object and also supports a subscription. configd provides asteris |
| [`reconfigure`](#reconfigure) | public |  | settings | Configd parses all configuration files again and regenerates the values of configs . |
| [`reloadConfigs`](#reloadconfigs) | public |  | settings | Configd load configd db files. This load previous config values including user defined configs(by calling setConfigs) |
| [`setConfig`](#setconfig) | public |  | settings | Method on com.webos.service.config (from on-device permission registry; parameters undocumented). |
| [`setConfigs`](#setconfigs) | public |  | settings | Overrides current settings of the configs . The overridden values will be kept until rebooting or returning back in any future queries for t ⚠️ |
| [`setTemporaryConfig`](#settemporaryconfig) | public |  | settings | Method on com.webos.service.config (from on-device permission registry; parameters undocumented). |

<a id="configs"></a>
## `configs`

`luna://com.webos.service.config/configs`

It contains full name of config and value pair. For example, "configs": { "com.webos.service.applicationmanager.testKey": "added" }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.config/configs '{}'
```

> Service: A static service in the system that provides product specific configurations to webOS components. This service provides simple get/set interfaces to access the configurations. [Terminology] config : I \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-config/)

<a id="dump"></a>
## `dump`

`luna://com.webos.service.config/dump`

It is useful for debugging. It returns the list of all configs and current values.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

```sh
luna-send -f -n 1 luna://com.webos.service.config/dump '{}
```

> ACG: systemconfig.devutility \| Returns: configs:Object; returnValue:Boolean; errorCode:Number (int32_t); errorText:String \| Service: A static service in the system that provides product specific configurations to webOS components. This service provides simple get/set interfaces to access the configurations. [Terminology] config : I

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-config/)

<a id="freedb"></a>
## `freeDb`

`luna://com.webos.service.config/freeDb`

Method on com.webos.service.config (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.config/freeDb '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fulldump"></a>
## `fullDump`

`luna://com.webos.service.config/fullDump`

It is useful for debugging. It returns the list of all configs including overridden values from all layers.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

```sh
luna-send -f -n 1 luna://com.webos.service.config/fullDump '{}
```

> ACG: systemconfig.devutility \| Returns: configs:Object array; returnValue:Boolean \| Service: A static service in the system that provides product specific configurations to webOS components. This service provides simple get/set interfaces to access the configurations. [Terminology] config : I

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-config/)

<a id="genremoteconfig"></a>
## `genRemoteConfig`

`luna://com.webos.service.config/genRemoteConfig`

Method on com.webos.service.config (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.config/genRemoteConfig '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconfig"></a>
## `getConfig`

`luna://com.webos.service.config/getConfig`

Method on com.webos.service.config (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.config/getConfig '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getconfigs"></a>
## `getConfigs`

`luna://com.webos.service.config/getConfigs`

It returns the requested configs which is the pairs of key-value as a JSON object and also supports a subscription. configd provides asterisk but configNames should starts feature file name. For example, to get all configs for com.webos.surfacemanager, configNames should be "com.webos.surfacemanager.*". Note that "com.webos.*" or "com.webos.surfacemanager*" is not supported. If subscribe is true and multiple configs are requested, configd only returns changed config. ( from the second return) (But missingConfigs would be returned everytime even missingConfigs is not changed) If a config is limited for defined services, only permitted services can get Configs, if the requester doesn't have rights, the configd would be in missingConfigs

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 4+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `configNames` | String array (required) Passes the requested configNames by the client. Can be a single config or multiple names. Syntax: "configNames": ["com.webos.surfacemanager.*"] Ex: 1.com.webos.surfacemanager.compositorGeometry (return the requested value) 2. "com.webos.surfacemanager.*".* (All the pairs of "key:value" in com.webos.surfacemanager component) |
| `subscribe` | Boolean (optional) Subscribe for notifications . Possible values are: true - Receives notifications when the database changes. false - Notifications are not received. |

```sh
luna-send -f -i luna://com.webos.service.config/getConfigs '{"configNames ":["com.webos.surfacemanager.compositorGeometry"]}'
```

> ACG: systemconfig.query \| Returns: returnValue:Boolean; configs:Object; missingConfigs:String array; subscribed:Boolean; errorCode:Number (int32_t); errorText:String \| Service: A static service in the system that provides product specific configurations to webOS components. This service provides simple get/set interfaces to access the configurations. [Terminology] config : I \|\| SSAP alias config/getConfigs; the same payload shape is used for luna://com.webos.service.config/getConfigs by root tools (glasshouse). Response includes 'configs'. snabb/webostv: 404 on its older TV. \|\| Response: {configs:{key:value}, missingConfigs:[...]}. webOSTV.js reads tv.model.*, tv.hw.*, tv.nyx.*, tv.config.supportDolbyHDRContents, wee.platformBizType, profile.list. (Over SSAP the same call is ssap://config/getConfigs.) \|\| Examples of names: com.webos.surfacemanager.keyFilters, com.webos.applicationManager.keepAliveApps, com.webos.service.preloadmanager.supportAppList, com.webos.service.tvpower.fullHomeBootingPowerOnReasons.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-config/), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [4](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js), [5](https://github.com/rorygallagher2024/glasshouse/blob/main/server/50-tvweb.sh), [6](https://github.com/chros73/bscpylgtv/blob/master/docs/available_settings_G6.md), [7](https://github.com/Tecnosimples-git/Hubitat_LG_TV_Trato/blob/main/Hubitat_LG_TV_Trato_v1.8.3-TRATO-1.0.groovy), [8](https://github.com/Cathwyler/MagicRemoteService/blob/master/MagicRemoteService/Resources/TV/MagicRemoteService/webOSTVjs-1.2.13/webOSTV.js)

<a id="reconfigure"></a>
## `reconfigure`

`luna://com.webos.service.config/reconfigure`

Configd parses all configuration files again and regenerates the values of configs .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.config/reconfigure '{}
```

> ACG: systemconfig.management \| Returns: returnValue:Boolean; errorCode:Number (int32_t); errorText:String \| Service: A static service in the system that provides product specific configurations to webOS components. This service provides simple get/set interfaces to access the configurations. [Terminology] config : I

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-config/)

<a id="reloadconfigs"></a>
## `reloadConfigs`

`luna://com.webos.service.config/reloadConfigs`

Configd load configd db files. This load previous config values including user defined configs(by calling setConfigs)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 27+  
- **Confidence:** documented

```sh
luna-send -f -n 10 luna://com.webos.service.config/reloadConfigs '{}
```

> ACG: systemconfig.devutility \| Returns: returnValue:String \| Service: A static service in the system that provides product specific configurations to webOS components. This service provides simple get/set interfaces to access the configurations. [Terminology] config : I

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-config/)

<a id="setconfig"></a>
## `setConfig`

`luna://com.webos.service.config/setConfig`

Method on com.webos.service.config (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.config/setConfig '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setconfigs"></a>
## `setConfigs` ⚠️ DANGEROUS

`luna://com.webos.service.config/setConfigs`

Overrides current settings of the configs . The overridden values will be kept until rebooting or returning back in any future queries for the config. It is useful for changing configuration in factory test process. User can set multiple configurations at once.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; older webOS via alert trick; works as root; webOS 4+ (bscpylgtv: not usable via alert hack on newer webOS)  
- **Confidence:** documented, code, community

| Param | Type / notes |
|---|---|
| `configs` | Object: configs (required) JSON value with configd key full name and value pair. |

```sh
luna-send -n 1 -f luna://com.webos.service.config/setConfigs '{ "configs": {"com.webos.surfacemanager.testSetConfigs": true}}'
```

> ACG: systemconfig.management \| Returns: returnValue:Boolean; errorCode:Number (int32_t); errorText:String \| Service: A static service in the system that provides product specific configurations to webOS components. This service provides simple get/set interfaces to access the configurations. [Terminology] config : I \|\| bscpylgtv: 'access disabled at some point'; does not work via createAlert on newer webOS. Config keys: tv.model.* etc.; glasshouse writes profile.blockedAppList through it as root. Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client. \|\| Examples: system.collectDevLogs, tv.model.motionProMode ("OLED Motion"/"OLED Motion Pro"), tv.conti.supportUsedTime. Wrong values to display/panel configs can misbehave; keys are not validated here.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-config/), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [4](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js), [5](https://github.com/rorygallagher2024/glasshouse/blob/main/server/50-tvweb.sh), [6](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [7](https://github.com/webosbrew/pages/blob/HEAD/content/pages/logging.md), [8](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/README.md)

<a id="settemporaryconfig"></a>
## `setTemporaryConfig`

`luna://com.webos.service.config/setTemporaryConfig`

Method on com.webos.service.config (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.config/setTemporaryConfig '{}'
```

> ACG groups: private, public, settings. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
