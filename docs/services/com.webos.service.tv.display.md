# `com.webos.service.tv.display`

TV display service: reports 3D and light-sensor status, toggles 3D mode, and clears panel noise. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`get3DStatus`](#get3dstatus) | ssap |  | display | documented | Get 3D status |
| [`getLightSensorData`](#getlightsensordata) | private |  | display | documented | Reads the ambient light sensor data |
| [`requestClearPanelNoise`](#requestclearpanelnoise) | private |  | display | documented | OLED pixel refresh scheduling ⚠️ |
| [`set3DOff`](#set3doff) | ssap |  | display | documented | Turn 3D mode off |
| [`set3DOn`](#set3don) | ssap |  | display | documented | Turn 3D mode on |

<a id="get3dstatus"></a>
## `get3DStatus`

`luna://com.webos.service.tv.display/get3DStatus`

Get 3D status

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** older webOS (3D removed on newer TVs)  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.tv.display/get3DStatus","payload":{}}
```

> Response: {status3D:{status:bool, pattern:'2dto3d'...}} (snabb/webostv).

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [4](https://github.com/snabb/webostv/blob/master/mmisc.go), [5](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java)

<a id="getlightsensordata"></a>
## `getLightSensorData`

`luna://com.webos.service.tv.display/getLightSensorData`

Reads the ambient light sensor data

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.display/getLightSensorData '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="requestclearpanelnoise"></a>
## `requestClearPanelNoise` ⚠️ DANGEROUS

`luna://com.webos.service.tv.display/requestClearPanelNoise`

OLED pixel refresh scheduling

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** OLED models  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mode` | schedule\|cancel_schedule |

```sh
luna-send -n 1 luna://com.webos.service.tv.display/requestClearPanelNoise '{"mode":"schedule"}'
```

> Runs a long panel compensation cycle.

Sources: [1](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/oled.js), [2](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/controls.js)

<a id="set3doff"></a>
## `set3DOff`

`luna://com.webos.service.tv.display/set3DOff`

Turn 3D mode off

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** older webOS (3D removed on newer TVs)  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.tv.display/set3DOff","payload":{}}
```

> bscpylgtv: 'removed at some point'; does not work on newer webOS.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [4](https://github.com/snabb/webostv/blob/master/mmisc.go), [5](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java)

<a id="set3don"></a>
## `set3DOn`

`luna://com.webos.service.tv.display/set3DOn`

Turn 3D mode on

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** older webOS (3D removed on newer TVs)  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.tv.display/set3DOn","payload":{}}
```

> bscpylgtv: 'removed at some point'; does not work on newer webOS.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [4](https://github.com/snabb/webostv/blob/master/mmisc.go), [5](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java)
