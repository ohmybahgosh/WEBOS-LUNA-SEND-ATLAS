# `ssap:system.launcher`

SSAP external-control endpoint for the system launcher: launches, opens and closes apps and reports app state. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`close`](#close) | ssap |  | apps | documented | Close app |
| [`getAppState`](#getappstate) | ssap | yes | apps | documented | Get app running/visible state |
| [`launch`](#launch) | ssap |  | apps | documented | Launch app (returns sessionId) |
| [`open`](#open) | ssap |  | apps | documented | Open URL in browser app |

<a id="close"></a>
## `close`

`ssap://system.launcher/close`

Close app

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | app id |
| `sessionId` | alternative |

```sh
{"type":"request","id":"1","uri":"ssap://system.launcher/close","payload":{"id":"netflix"}}
```

> Snabb/webostv sends sessionId; bscpylgtv sends id. The SSAP namespace 'system.launcher' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mapps.go), [4](https://github.com/hobbyquaker/lgtv2/blob/master/README.md), [5](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py)

<a id="getappstate"></a>
## `getAppState`

`ssap://system.launcher/getAppState`

Get app running/visible state

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sessionId` | string |

```sh
{"type":"request","id":"1","uri":"ssap://system.launcher/getAppState","payload":{}}
```

> 403 access denied on webOS 6.0 (lgtv2 README). Response {running, visible}. The SSAP namespace 'system.launcher' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/snabb/webostv/blob/master/mapps.go), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java), [3](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js)

<a id="launch"></a>
## `launch`

`ssap://system.launcher/launch`

Launch app (returns sessionId)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | string app id |
| `params` | object |
| `contentId` | string |

```sh
{"type":"request","id":"1","uri":"ssap://system.launcher/launch","payload":{"id":"netflix"}}
```

> Used by bscpylgtv launch_app/launch_app_with_params/launch_app_with_content_id. Special app launches seen: com.webos.app.hdmi1..4 (inputs), com.webos.app.factorywin {id:'executeFactory', irKey:'inStart'\|'ezAdjust'} (service menus; PIN 0413), com.webos.app.tvhotkey {activateType:'mute-hidden-action'\|'freesync-info'}, com.palm.app.settings {target:'picture'\|'channel'}, com.webos.app.screensaver, youtube.leanback.v4 {contentTarget: url}. The SSAP namespace 'system.launcher' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mapps.go), [4](https://github.com/hobbyquaker/lgtv2/blob/master/README.md), [5](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py)

<a id="open"></a>
## `open`

`ssap://system.launcher/open`

Open URL in browser app

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `target` | url string |

```sh
{"type":"request","id":"1","uri":"ssap://system.launcher/open","payload":{"target":"https://example.org"}}
```

> Response {id:'com.webos.app.browser', sessionId}. The SSAP namespace 'system.launcher' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mapps.go), [4](https://github.com/hobbyquaker/lgtv2/blob/master/README.md)
