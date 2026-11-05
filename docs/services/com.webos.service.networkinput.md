# `com.webos.service.networkinput`

Network/virtual input service: sends key codes and special/long/repeat key events and exposes pointer, gamepad and touch input sockets, plus media transport controls (play, pause, channel). _(inferred from the service's methods)_

16 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`controls/channelDown`](#controls_channeldown) | private |  | input | inferred | Handles the channel down (controls) |
| [`controls/channelUp`](#controls_channelup) | private |  | input | inferred | Handles the channel up (controls) |
| [`controls/fastForward`](#controls_fastforward) | private |  | input | inferred | Handles the fast forward (controls) |
| [`controls/pause`](#controls_pause) | private |  | input | inferred | Pauses the networkinput (controls) |
| [`controls/play`](#controls_play) | private |  | input | inferred | Plays the networkinput (controls) |
| [`controls/power`](#controls_power) | private |  | power | inferred | Powers the networkinput (controls) |
| [`controls/rewind`](#controls_rewind) | private |  | input | inferred | Rewinds the networkinput (controls) |
| [`controls/stop`](#controls_stop) | private |  | input | inferred | Stops the networkinput (controls) |
| [`getGamepadInputSocket`](#getgamepadinputsocket) | private |  | input | inferred | Returns the gamepad input socket. |
| [`getPointerInputSocket`](#getpointerinputsocket) | ssap |  | keys | documented | Returns websocket URL for pointer/button input |
| [`sendKeyCodes`](#sendkeycodes) | private |  | input | inferred | Sends the key codes. |
| [`sendLongKeyEvent`](#sendlongkeyevent) | private |  | input | inferred | Sends the long key event. |
| [`sendRepeatKeyEvent`](#sendrepeatkeyevent) | private |  | input | inferred | Sends the repeat key event. |
| [`sendSpecialKey`](#sendspecialkey) | private |  | keys | documented | Injects a remote key by name |
| [`test/getTouchpanelInputSocket`](#test_gettouchpanelinputsocket) | private |  | keys | documented | Network input method: test/getTouchpanelInputSocket |
| [`test/sendKeyCode`](#test_sendkeycode) | private |  | keys | documented | Injects a Linux key code (IR_KEY_* value less 8) |

<a id="controls_channeldown"></a>
## `controls/channelDown`

`luna://com.webos.service.networkinput/controls/channelDown`

Handles the channel down (controls)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/channelDown '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_channelup"></a>
## `controls/channelUp`

`luna://com.webos.service.networkinput/controls/channelUp`

Handles the channel up (controls)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/channelUp '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_fastforward"></a>
## `controls/fastForward`

`luna://com.webos.service.networkinput/controls/fastForward`

Handles the fast forward (controls)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/fastForward '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_pause"></a>
## `controls/pause`

`luna://com.webos.service.networkinput/controls/pause`

Pauses the networkinput (controls)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/pause '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_play"></a>
## `controls/play`

`luna://com.webos.service.networkinput/controls/play`

Plays the networkinput (controls)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/play '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_power"></a>
## `controls/power`

`luna://com.webos.service.networkinput/controls/power`

Powers the networkinput (controls)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/power '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_rewind"></a>
## `controls/rewind`

`luna://com.webos.service.networkinput/controls/rewind`

Rewinds the networkinput (controls)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/rewind '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_stop"></a>
## `controls/stop`

`luna://com.webos.service.networkinput/controls/stop`

Stops the networkinput (controls)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/stop '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getgamepadinputsocket"></a>
## `getGamepadInputSocket`

`luna://com.webos.service.networkinput/getGamepadInputSocket`

Returns the gamepad input socket.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/getGamepadInputSocket '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpointerinputsocket"></a>
## `getPointerInputSocket`

`luna://com.webos.service.networkinput/getPointerInputSocket`

Returns websocket URL for pointer/button input

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.networkinput/getPointerInputSocket '{}'
```

> Returns {socketPath: 'ws(s)://<tv>:3000(1)/resources/.../netinput_pointer.sock'}. Over that socket send text frames like 'type:button\nname:HOME\n\n', 'type:move\ndx:10\ndy:5\ndown:0\n\n', 'type:click\n\n', 'type:scroll\ndx:0\ndy:10\n\n'. Button names listed in libs-notes.md. LGTV Companion marks the button route 'deprecated due to LG's firmware changes' on newest firmware.

Sources: [1](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [2](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [4](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [5](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/buttons.py), [6](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md), [7](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="sendkeycodes"></a>
## `sendKeyCodes`

`luna://com.webos.service.networkinput/sendKeyCodes`

Sends the key codes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/sendKeyCodes '{}'
```

> ACG groups: all, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendlongkeyevent"></a>
## `sendLongKeyEvent`

`luna://com.webos.service.networkinput/sendLongKeyEvent`

Sends the long key event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/sendLongKeyEvent '{}'
```

> ACG groups: private, all, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendrepeatkeyevent"></a>
## `sendRepeatKeyEvent`

`luna://com.webos.service.networkinput/sendRepeatKeyEvent`

Sends the repeat key event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/sendRepeatKeyEvent '{}'
```

> ACG groups: private, all, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendspecialkey"></a>
## `sendSpecialKey`

`luna://com.webos.service.networkinput/sendSpecialKey`

Injects a remote key by name

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

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
- **Confidence:** documented

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
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `keyCode` | integer |

```sh
luna-send -n 1 luna://com.webos.service.networkinput/test/sendKeyCode '{"keyCode":207}'
```

> Play 207, pause 119, stop 128, rewind 168, ff 208, vol up 115, down 114, mute 113.

Sources: [1](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/docs/development/TV-RESEARCH.md)
