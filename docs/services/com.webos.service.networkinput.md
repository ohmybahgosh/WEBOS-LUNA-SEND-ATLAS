# `com.webos.service.networkinput`

16 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`controls/channelDown`](#controls_channeldown) | private |  | input | Method on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`controls/channelUp`](#controls_channelup) | private |  | input | Method on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`controls/fastForward`](#controls_fastforward) | private |  | input | Method on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`controls/pause`](#controls_pause) | private |  | input | Method on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`controls/play`](#controls_play) | private |  | input | Method on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`controls/power`](#controls_power) | private |  | power | Method on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`controls/rewind`](#controls_rewind) | private |  | input | Method on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`controls/stop`](#controls_stop) | private |  | input | Method on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`getGamepadInputSocket`](#getgamepadinputsocket) | private |  | input | Getter on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`getPointerInputSocket`](#getpointerinputsocket) | ssap |  | keys | Returns websocket URL for pointer/button input |
| [`sendKeyCodes`](#sendkeycodes) | private |  | input | Method on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`sendLongKeyEvent`](#sendlongkeyevent) | private |  | input | Method on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`sendRepeatKeyEvent`](#sendrepeatkeyevent) | private |  | input | Method on com.webos.service.networkinput (introspected on-device; parameters undocumented). |
| [`sendSpecialKey`](#sendspecialkey) | private |  | keys | Injects a remote key by name |
| [`test/getTouchpanelInputSocket`](#test_gettouchpanelinputsocket) | private |  | keys | Network input method: test/getTouchpanelInputSocket |
| [`test/sendKeyCode`](#test_sendkeycode) | private |  | keys | Injects a Linux key code (IR_KEY_* value less 8) |

<a id="controls_channeldown"></a>
## `controls/channelDown`

`luna://com.webos.service.networkinput/controls/channelDown`

Method on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/channelDown '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_channelup"></a>
## `controls/channelUp`

`luna://com.webos.service.networkinput/controls/channelUp`

Method on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/channelUp '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_fastforward"></a>
## `controls/fastForward`

`luna://com.webos.service.networkinput/controls/fastForward`

Method on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/fastForward '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_pause"></a>
## `controls/pause`

`luna://com.webos.service.networkinput/controls/pause`

Method on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/pause '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_play"></a>
## `controls/play`

`luna://com.webos.service.networkinput/controls/play`

Method on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/play '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_power"></a>
## `controls/power`

`luna://com.webos.service.networkinput/controls/power`

Method on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/power '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_rewind"></a>
## `controls/rewind`

`luna://com.webos.service.networkinput/controls/rewind`

Method on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/rewind '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controls_stop"></a>
## `controls/stop`

`luna://com.webos.service.networkinput/controls/stop`

Method on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/controls/stop '{}'
```

> ACG groups: private, all, system.remote, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getgamepadinputsocket"></a>
## `getGamepadInputSocket`

`luna://com.webos.service.networkinput/getGamepadInputSocket`

Getter on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.networkinput/getPointerInputSocket '{}'
```

> Returns {socketPath: 'ws(s)://<tv>:3000(1)/resources/.../netinput_pointer.sock'}. Over that socket send text frames like 'type:button\nname:HOME\n\n', 'type:move\ndx:10\ndy:5\ndown:0\n\n', 'type:click\n\n', 'type:scroll\ndx:0\ndy:10\n\n'. Button names listed in libs-notes.md. LGTV Companion marks the button route 'deprecated due to LG's firmware changes' on newest firmware.

Sources: [1](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [2](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [4](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [5](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/buttons.py), [6](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md), [7](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="sendkeycodes"></a>
## `sendKeyCodes`

`luna://com.webos.service.networkinput/sendKeyCodes`

Method on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/sendKeyCodes '{}'
```

> ACG groups: all, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendlongkeyevent"></a>
## `sendLongKeyEvent`

`luna://com.webos.service.networkinput/sendLongKeyEvent`

Method on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.networkinput/sendLongKeyEvent '{}'
```

> ACG groups: private, all, networkinput.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendrepeatkeyevent"></a>
## `sendRepeatKeyEvent`

`luna://com.webos.service.networkinput/sendRepeatKeyEvent`

Method on com.webos.service.networkinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
