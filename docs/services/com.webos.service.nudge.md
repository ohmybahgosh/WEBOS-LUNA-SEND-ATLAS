# `com.webos.service.nudge`

Nudge/reminder service: requests and responds to on-screen nudges and alarm-based nudges, and reports nudge state, info, result and history. _(inferred from the service's methods)_

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`deleteHistory`](#deletehistory) | private |  | misc | inferred | Deletes the history. ⚠️ |
| [`getAlarmNudgeInfo`](#getalarmnudgeinfo) | private |  | misc | inferred | Returns the alarm nudge info. |
| [`getNudgeInfo`](#getnudgeinfo) | private |  | misc | inferred | Returns the nudge info. |
| [`getNudgeResult`](#getnudgeresult) | private |  | misc | inferred | Returns the nudge result. |
| [`getNudgeState`](#getnudgestate) | private |  | misc | inferred | Returns the nudge state. |
| [`globalNudgeEmitter/requestRelayNudge`](#globalnudgeemitter_requestrelaynudge) | private |  | misc | inferred | Requests the relay nudge (global nudge emitter) |
| [`requestAlarmNudge`](#requestalarmnudge) | private |  | misc | inferred | Requests the alarm nudge. |
| [`requestNudge`](#requestnudge) | private |  | misc | inferred | Requests the nudge. |
| [`respondAlarmNudge`](#respondalarmnudge) | private |  | misc | inferred | Responds to the alarm nudge. |
| [`responseNudge`](#responsenudge) | private |  | misc | inferred | Handles the response nudge. |

<a id="deletehistory"></a>
## `deleteHistory` ⚠️ DANGEROUS

`luna://com.webos.service.nudge/deleteHistory`

Deletes the history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nudge/deleteHistory '{}'
```

> ACG groups: nudge, all, private. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getalarmnudgeinfo"></a>
## `getAlarmNudgeInfo`

`luna://com.webos.service.nudge/getAlarmNudgeInfo`

Returns the alarm nudge info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nudge/getAlarmNudgeInfo '{}'
```

> ACG groups: nudge, all, private.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnudgeinfo"></a>
## `getNudgeInfo`

`luna://com.webos.service.nudge/getNudgeInfo`

Returns the nudge info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nudge/getNudgeInfo '{}'
```

> ACG groups: nudge, all, private.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnudgeresult"></a>
## `getNudgeResult`

`luna://com.webos.service.nudge/getNudgeResult`

Returns the nudge result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nudge/getNudgeResult '{}'
```

> ACG groups: all, private.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnudgestate"></a>
## `getNudgeState`

`luna://com.webos.service.nudge/getNudgeState`

Returns the nudge state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nudge/getNudgeState '{}'
```

> ACG groups: nudge, all, private.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="globalnudgeemitter_requestrelaynudge"></a>
## `globalNudgeEmitter/requestRelayNudge`

`luna://com.webos.service.nudge/globalNudgeEmitter/requestRelayNudge`

Requests the relay nudge (global nudge emitter)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nudge/globalNudgeEmitter/requestRelayNudge '{}'
```

> ACG groups: nudge, all, private.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestalarmnudge"></a>
## `requestAlarmNudge`

`luna://com.webos.service.nudge/requestAlarmNudge`

Requests the alarm nudge.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nudge/requestAlarmNudge '{}'
```

> ACG groups: nudge, all, private.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestnudge"></a>
## `requestNudge`

`luna://com.webos.service.nudge/requestNudge`

Requests the nudge.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nudge/requestNudge '{}'
```

> ACG groups: nudge, all, private.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="respondalarmnudge"></a>
## `respondAlarmNudge`

`luna://com.webos.service.nudge/respondAlarmNudge`

Responds to the alarm nudge.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nudge/respondAlarmNudge '{}'
```

> ACG groups: nudge, all, private.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="responsenudge"></a>
## `responseNudge`

`luna://com.webos.service.nudge/responseNudge`

Handles the response nudge.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nudge/responseNudge '{}'
```

> ACG groups: nudge, all, private.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
