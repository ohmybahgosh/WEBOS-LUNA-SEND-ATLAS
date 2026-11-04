# `com.webos.service.update`

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getCurrentSWInformation`](#getcurrentswinformation) | private |  | update | Returns current software/firmware info |
| [`getCurStatus`](#getcurstatus) | private |  | update | Returns updater state (idle when not busy) |
| [`getExpertMode`](#getexpertmode) | private |  | update | Update-service expert mode method: getExpertMode |
| [`getProgress`](#getprogress) | ssap |  | update | Get firmware update progress |
| [`getStatus`](#getstatus) | private |  | update | Updater status (name seen only) |
| [`setExpertMode`](#setexpertmode) | private |  | update | Enables update "expert mode" so the firmware-update UI accepts downgrades/USB images ⚠️ |
| [`startUpdateByRemoteApp`](#startupdatebyremoteapp) | ssap |  | update | Start a firmware update initiated from a remote app ⚠️ |

<a id="getcurrentswinformation"></a>
## `getCurrentSWInformation`

`luna://com.webos.service.update/getCurrentSWInformation`

Returns current software/firmware info

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

```sh
luna-send -q 'model_name' -n 1 'luna://com.webos.service.update/getCurrentSWInformation' '{}'
```

> -q extracts one field from the JSON reply. Used by downgr8 and LGTVCompanion. \|\| Fields seen: product_name (e.g. 'webOS'), model_name (e.g. HE_DTV_WT1M_AFAAABAA; bscpylgtv derives 3D-LUT size / Dolby Vision config version from chars 7-11 of model_name: W18H..W26H, W18O..W26O, W24G, W25G, W26G), sw_type ('FIRMWARE').

Sources: [1](https://github.com/throwaway96/downgr8/blob/HEAD/README.md), [2](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [4](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [5](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getcurstatus"></a>
## `getCurStatus`

`luna://com.webos.service.update/getCurStatus`

Returns updater state (idle when not busy)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.update/getCurStatus '{}'
```

> Reply status "idle" is used as a precondition before touching the update state.

Sources: [1](https://github.com/SmixNZL/webos-display-only/blob/HEAD/tv/engine.js), [2](https://github.com/SmixNZL/webos-display-only/blob/HEAD/tv/probe.js)

<a id="getexpertmode"></a>
## `getExpertMode`

`luna://com.webos.service.update/getExpertMode`

Update-service expert mode method: getExpertMode

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.update/getExpertMode '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getprogress"></a>
## `getProgress`

`luna://com.webos.service.update/getProgress`

Get firmware update progress

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.update/getProgress","payload":{}}
```

> Listed in snabb/webostv as an unimplemented TODO taken from the TV's service list; payload unknown. LGTV Companion manifest includes permission UPDATE_FROM_REMOTE_APP / READ_UPDATE_INFO.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.update/getStatus`

Updater status (name seen only)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.update/getStatus '{}'
```

> Listed in snabb/webostv as an unimplemented TODO taken from the TV's service list; payload unknown. LGTV Companion manifest includes permission UPDATE_FROM_REMOTE_APP / READ_UPDATE_INFO.

Sources: [1](https://github.com/SmixNZL/webos-display-only/blob/HEAD/tv/probe.js), [2](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="setexpertmode"></a>
## `setExpertMode` ⚠️ DANGEROUS

`luna://com.webos.service.update/setExpertMode`

Enables update "expert mode" so the firmware-update UI accepts downgrades/USB images

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** removed/patched on newer firmware (see downgr8)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `mode` | boolean |

```sh
luna-send -n 1 luna://com.webos.service.update/setExpertMode '{"mode":true}'
```

> Followed by launching com.webos.app.softwareupdate with params {"mode":"expert","flagUpdate":true}. Firmware downgrades can brick a TV; webOS 4+ recovery may be impossible.

Sources: [1](https://github.com/throwaway96/downgr8/blob/HEAD/service.js), [2](https://github.com/throwaway96/downgr8/blob/HEAD/README.md)

<a id="startupdatebyremoteapp"></a>
## `startUpdateByRemoteApp` ⚠️ DANGEROUS

`luna://com.webos.service.update/startUpdateByRemoteApp`

Start a firmware update initiated from a remote app

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.update/startUpdateByRemoteApp","payload":{}}
```

> Listed in snabb/webostv as an unimplemented TODO taken from the TV's service list; payload unknown. LGTV Companion manifest includes permission UPDATE_FROM_REMOTE_APP / READ_UPDATE_INFO.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)
