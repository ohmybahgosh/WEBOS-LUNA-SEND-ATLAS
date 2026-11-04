# `com.webos.service.networkinput`

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getPointerInputSocket`](#getpointerinputsocket) | ssap |  | keys | Returns websocket URL for pointer/button input |
| [`sendSpecialKey`](#sendspecialkey) | private |  | keys | Injects a remote key by name |
| [`test/getTouchpanelInputSocket`](#test_gettouchpanelinputsocket) | private |  | keys | Network input method: test/getTouchpanelInputSocket |
| [`test/sendKeyCode`](#test_sendkeycode) | private |  | keys | Injects a Linux key code (IR_KEY_* value less 8) |

<a id="getpointerinputsocket"></a>
## `getPointerInputSocket`

`luna://com.webos.service.networkinput/getPointerInputSocket`

Returns websocket URL for pointer/button input

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.networkinput/getPointerInputSocket '{}'
```

> Returns {socketPath: 'ws(s)://<tv>:3000(1)/resources/.../netinput_pointer.sock'}. Over that socket send text frames like 'type:button\nname:HOME\n\n', 'type:move\ndx:10\ndy:5\ndown:0\n\n', 'type:click\n\n', 'type:scroll\ndx:0\ndy:10\n\n'. Button names listed in libs-notes.md. LGTV Companion marks the button route 'deprecated due to LG's firmware changes' on newest firmware.

Sources: [1](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [2](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [4](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [5](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/buttons.py), [6](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md), [7](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="sendspecialkey"></a>
## `sendSpecialKey`

`luna://com.webos.service.networkinput/sendSpecialKey`

Injects a remote key by name

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `key` | HOME\|BACK\|UP\|DOWN\|LEFT\|RIGHT\|ENTER\|EXIT |

```sh
luna-send -n 1 luna://com.webos.service.networkinput/sendSpecialKey '{"key":"HOME"}' </dev/null
```

Sources: [1](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/home/tools/key.sh), [2](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md), [3](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js)

<a id="test_gettouchpanelinputsocket"></a>
## `test/getTouchpanelInputSocket`

`luna://com.webos.service.networkinput/test/getTouchpanelInputSocket`

Network input method: test/getTouchpanelInputSocket

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/test/getTouchpanelInputSocket '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="test_sendkeycode"></a>
## `test/sendKeyCode`

`luna://com.webos.service.networkinput/test/sendKeyCode`

Injects a Linux key code (IR_KEY_* value less 8)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 10.2 tested  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `keyCode` | integer |

```sh
luna-send -n 1 luna://com.webos.service.networkinput/test/sendKeyCode '{"keyCode":207}'
```

> Play 207, pause 119, stop 128, rewind 168, ff 208, vol up 115, down 114, mute 113.

Sources: [1](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/docs/development/TV-RESEARCH.md)
