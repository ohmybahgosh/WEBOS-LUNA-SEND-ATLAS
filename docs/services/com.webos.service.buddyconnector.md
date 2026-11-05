# `com.webos.service.buddyconnector`

Connects the TV to a paired companion ('buddy') mobile app: exchanges credentials, member and content lists, QR and EULA info, push events, SOS and video-call actions. _(inferred from the service's methods)_

31 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cmd`](#cmd) | private |  | connection | inferred | Handles the cmd. |
| [`debug/getDataSession`](#debug_getdatasession) | private |  | connection | inferred | Returns the data session (debug) |
| [`debug/setBoost`](#debug_setboost) | private |  | connection | inferred | Sets the boost (debug) |
| [`debug/setDataSession`](#debug_setdatasession) | private |  | connection | inferred | Sets the data session (debug) |
| [`deleteContentList`](#deletecontentlist) | private |  | connection | inferred | Deletes the content list. ⚠️ |
| [`executeSOS`](#executesos) | private |  | connection | inferred | Runs the SOS. |
| [`executeVideoCall`](#executevideocall) | private |  | connection | inferred | Runs the video call. |
| [`getAlarmFlag`](#getalarmflag) | private |  | connection | inferred | Returns the alarm flag. |
| [`getContentList`](#getcontentlist) | private |  | connection | inferred | Returns the content list. |
| [`getCredentials`](#getcredentials) | private |  | connection | inferred | Returns the credentials. |
| [`getCurrentInfo`](#getcurrentinfo) | private |  | connection | inferred | Returns the current info. |
| [`getEulaInfo`](#geteulainfo) | private |  | connection | inferred | Returns the eula info. |
| [`getMemberList`](#getmemberlist) | private |  | connection | inferred | Returns the member list. |
| [`getPushEvent`](#getpushevent) | private |  | connection | inferred | Returns the push event. |
| [`getQRInfo`](#getqrinfo) | private |  | connection | inferred | Returns the QR info. |
| [`getStatus`](#getstatus) | private |  | connection | inferred | Returns the status. |
| [`getVideoCallEvent`](#getvideocallevent) | private |  | connection | inferred | Returns the video call event. |
| [`launchAppOnSOS`](#launchapponsos) | private |  | apps | inferred | Launches the app on SOS. |
| [`onCloseSharingContents`](#onclosesharingcontents) | private |  | connection | inferred | Event handler: fires on the close sharing contents. |
| [`push`](#push) | private |  | connection | inferred | Pushes the buddyconnector. |
| [`releaseSOS`](#releasesos) | private |  | connection | inferred | Releases the SOS. |
| [`resetEulaStatus`](#reseteulastatus) | private |  | connection | inferred | Resets the eula status. ⚠️ |
| [`setAlarmFlag`](#setalarmflag) | private |  | connection | inferred | Sets the alarm flag. |
| [`setEulaStatus`](#seteulastatus) | private |  | connection | inferred | Sets the eula status. |
| [`setMemberStatus`](#setmemberstatus) | private |  | connection | inferred | Sets the member status. |
| [`setModeStatus`](#setmodestatus) | private |  | connection | inferred | Sets the mode status. |
| [`setRemoteControl`](#setremotecontrol) | private |  | connection | inferred | Sets the remote control. |
| [`setSystemSettings`](#setsystemsettings) | private |  | settings | inferred | Sets the system settings. |
| [`setVideoCallStatus`](#setvideocallstatus) | private |  | connection | inferred | Sets the video call status. |
| [`startVideoCall`](#startvideocall) | private |  | connection | inferred | Starts the video call. |
| [`stopVideoCall`](#stopvideocall) | private |  | connection | inferred | Stops the video call. |

<a id="cmd"></a>
## `cmd`

`luna://com.webos.service.buddyconnector/cmd`

Handles the cmd.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/cmd '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_getdatasession"></a>
## `debug/getDataSession`

`luna://com.webos.service.buddyconnector/debug/getDataSession`

Returns the data session (debug)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/debug/getDataSession '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_setboost"></a>
## `debug/setBoost`

`luna://com.webos.service.buddyconnector/debug/setBoost`

Sets the boost (debug)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/debug/setBoost '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_setdatasession"></a>
## `debug/setDataSession`

`luna://com.webos.service.buddyconnector/debug/setDataSession`

Sets the data session (debug)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/debug/setDataSession '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletecontentlist"></a>
## `deleteContentList` ⚠️ DANGEROUS

`luna://com.webos.service.buddyconnector/deleteContentList`

Deletes the content list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/deleteContentList '{}'
```

> ACG groups: private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="executesos"></a>
## `executeSOS`

`luna://com.webos.service.buddyconnector/executeSOS`

Runs the SOS.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/executeSOS '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="executevideocall"></a>
## `executeVideoCall`

`luna://com.webos.service.buddyconnector/executeVideoCall`

Runs the video call.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/executeVideoCall '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getalarmflag"></a>
## `getAlarmFlag`

`luna://com.webos.service.buddyconnector/getAlarmFlag`

Returns the alarm flag.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getAlarmFlag '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcontentlist"></a>
## `getContentList`

`luna://com.webos.service.buddyconnector/getContentList`

Returns the content list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getContentList '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcredentials"></a>
## `getCredentials`

`luna://com.webos.service.buddyconnector/getCredentials`

Returns the credentials.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getCredentials '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentinfo"></a>
## `getCurrentInfo`

`luna://com.webos.service.buddyconnector/getCurrentInfo`

Returns the current info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getCurrentInfo '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteulainfo"></a>
## `getEulaInfo`

`luna://com.webos.service.buddyconnector/getEulaInfo`

Returns the eula info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getEulaInfo '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmemberlist"></a>
## `getMemberList`

`luna://com.webos.service.buddyconnector/getMemberList`

Returns the member list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getMemberList '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpushevent"></a>
## `getPushEvent`

`luna://com.webos.service.buddyconnector/getPushEvent`

Returns the push event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getPushEvent '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getqrinfo"></a>
## `getQRInfo`

`luna://com.webos.service.buddyconnector/getQRInfo`

Returns the QR info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getQRInfo '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.buddyconnector/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getStatus '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideocallevent"></a>
## `getVideoCallEvent`

`luna://com.webos.service.buddyconnector/getVideoCallEvent`

Returns the video call event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getVideoCallEvent '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchapponsos"></a>
## `launchAppOnSOS`

`luna://com.webos.service.buddyconnector/launchAppOnSOS`

Launches the app on SOS.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/launchAppOnSOS '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="onclosesharingcontents"></a>
## `onCloseSharingContents`

`luna://com.webos.service.buddyconnector/onCloseSharingContents`

Event handler: fires on the close sharing contents.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/onCloseSharingContents '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="push"></a>
## `push`

`luna://com.webos.service.buddyconnector/push`

Pushes the buddyconnector.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/push '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasesos"></a>
## `releaseSOS`

`luna://com.webos.service.buddyconnector/releaseSOS`

Releases the SOS.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/releaseSOS '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reseteulastatus"></a>
## `resetEulaStatus` ⚠️ DANGEROUS

`luna://com.webos.service.buddyconnector/resetEulaStatus`

Resets the eula status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/resetEulaStatus '{}'
```

> ACG groups: private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setalarmflag"></a>
## `setAlarmFlag`

`luna://com.webos.service.buddyconnector/setAlarmFlag`

Sets the alarm flag.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setAlarmFlag '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="seteulastatus"></a>
## `setEulaStatus`

`luna://com.webos.service.buddyconnector/setEulaStatus`

Sets the eula status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setEulaStatus '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmemberstatus"></a>
## `setMemberStatus`

`luna://com.webos.service.buddyconnector/setMemberStatus`

Sets the member status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setMemberStatus '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmodestatus"></a>
## `setModeStatus`

`luna://com.webos.service.buddyconnector/setModeStatus`

Sets the mode status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setModeStatus '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setremotecontrol"></a>
## `setRemoteControl`

`luna://com.webos.service.buddyconnector/setRemoteControl`

Sets the remote control.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setRemoteControl '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsystemsettings"></a>
## `setSystemSettings`

`luna://com.webos.service.buddyconnector/setSystemSettings`

Sets the system settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setSystemSettings '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvideocallstatus"></a>
## `setVideoCallStatus`

`luna://com.webos.service.buddyconnector/setVideoCallStatus`

Sets the video call status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setVideoCallStatus '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startvideocall"></a>
## `startVideoCall`

`luna://com.webos.service.buddyconnector/startVideoCall`

Starts the video call.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/startVideoCall '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopvideocall"></a>
## `stopVideoCall`

`luna://com.webos.service.buddyconnector/stopVideoCall`

Stops the video call.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/stopVideoCall '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
