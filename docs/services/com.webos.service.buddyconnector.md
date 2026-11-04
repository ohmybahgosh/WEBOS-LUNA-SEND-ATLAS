# `com.webos.service.buddyconnector`

31 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cmd`](#cmd) | private |  | connection | Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`debug/getDataSession`](#debug_getdatasession) | private |  | connection | Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`debug/setBoost`](#debug_setboost) | private |  | connection | Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`debug/setDataSession`](#debug_setdatasession) | private |  | connection | Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`deleteContentList`](#deletecontentlist) | private |  | connection | Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). ⚠️ |
| [`executeSOS`](#executesos) | private |  | connection | Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`executeVideoCall`](#executevideocall) | private |  | connection | Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`getAlarmFlag`](#getalarmflag) | private |  | connection | Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`getContentList`](#getcontentlist) | private |  | connection | Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`getCredentials`](#getcredentials) | private |  | connection | Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`getCurrentInfo`](#getcurrentinfo) | private |  | connection | Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`getEulaInfo`](#geteulainfo) | private |  | connection | Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`getMemberList`](#getmemberlist) | private |  | connection | Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`getPushEvent`](#getpushevent) | private |  | connection | Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`getQRInfo`](#getqrinfo) | private |  | connection | Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`getStatus`](#getstatus) | private |  | connection | Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`getVideoCallEvent`](#getvideocallevent) | private |  | connection | Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`launchAppOnSOS`](#launchapponsos) | private |  | apps | Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`onCloseSharingContents`](#onclosesharingcontents) | private |  | connection | Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`push`](#push) | private |  | connection | Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`releaseSOS`](#releasesos) | private |  | connection | Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`resetEulaStatus`](#reseteulastatus) | private |  | connection | Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). ⚠️ |
| [`setAlarmFlag`](#setalarmflag) | private |  | connection | Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`setEulaStatus`](#seteulastatus) | private |  | connection | Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`setMemberStatus`](#setmemberstatus) | private |  | connection | Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`setModeStatus`](#setmodestatus) | private |  | connection | Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`setRemoteControl`](#setremotecontrol) | private |  | connection | Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`setSystemSettings`](#setsystemsettings) | private |  | settings | Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`setVideoCallStatus`](#setvideocallstatus) | private |  | connection | Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`startVideoCall`](#startvideocall) | private |  | connection | Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |
| [`stopVideoCall`](#stopvideocall) | private |  | connection | Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented). |

<a id="cmd"></a>
## `cmd`

`luna://com.webos.service.buddyconnector/cmd`

Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/cmd '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_getdatasession"></a>
## `debug/getDataSession`

`luna://com.webos.service.buddyconnector/debug/getDataSession`

Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/debug/getDataSession '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_setboost"></a>
## `debug/setBoost`

`luna://com.webos.service.buddyconnector/debug/setBoost`

Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/debug/setBoost '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_setdatasession"></a>
## `debug/setDataSession`

`luna://com.webos.service.buddyconnector/debug/setDataSession`

Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/debug/setDataSession '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletecontentlist"></a>
## `deleteContentList` ⚠️ DANGEROUS

`luna://com.webos.service.buddyconnector/deleteContentList`

Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/deleteContentList '{}'
```

> ACG groups: private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="executesos"></a>
## `executeSOS`

`luna://com.webos.service.buddyconnector/executeSOS`

Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/executeSOS '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="executevideocall"></a>
## `executeVideoCall`

`luna://com.webos.service.buddyconnector/executeVideoCall`

Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/executeVideoCall '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getalarmflag"></a>
## `getAlarmFlag`

`luna://com.webos.service.buddyconnector/getAlarmFlag`

Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getAlarmFlag '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcontentlist"></a>
## `getContentList`

`luna://com.webos.service.buddyconnector/getContentList`

Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getContentList '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcredentials"></a>
## `getCredentials`

`luna://com.webos.service.buddyconnector/getCredentials`

Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getCredentials '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentinfo"></a>
## `getCurrentInfo`

`luna://com.webos.service.buddyconnector/getCurrentInfo`

Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getCurrentInfo '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteulainfo"></a>
## `getEulaInfo`

`luna://com.webos.service.buddyconnector/getEulaInfo`

Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getEulaInfo '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmemberlist"></a>
## `getMemberList`

`luna://com.webos.service.buddyconnector/getMemberList`

Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getMemberList '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpushevent"></a>
## `getPushEvent`

`luna://com.webos.service.buddyconnector/getPushEvent`

Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getPushEvent '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getqrinfo"></a>
## `getQRInfo`

`luna://com.webos.service.buddyconnector/getQRInfo`

Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getQRInfo '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.buddyconnector/getStatus`

Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getStatus '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideocallevent"></a>
## `getVideoCallEvent`

`luna://com.webos.service.buddyconnector/getVideoCallEvent`

Getter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/getVideoCallEvent '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchapponsos"></a>
## `launchAppOnSOS`

`luna://com.webos.service.buddyconnector/launchAppOnSOS`

Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/launchAppOnSOS '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="onclosesharingcontents"></a>
## `onCloseSharingContents`

`luna://com.webos.service.buddyconnector/onCloseSharingContents`

Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/onCloseSharingContents '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="push"></a>
## `push`

`luna://com.webos.service.buddyconnector/push`

Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/push '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasesos"></a>
## `releaseSOS`

`luna://com.webos.service.buddyconnector/releaseSOS`

Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/releaseSOS '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reseteulastatus"></a>
## `resetEulaStatus` ⚠️ DANGEROUS

`luna://com.webos.service.buddyconnector/resetEulaStatus`

Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/resetEulaStatus '{}'
```

> ACG groups: private, all, applications.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setalarmflag"></a>
## `setAlarmFlag`

`luna://com.webos.service.buddyconnector/setAlarmFlag`

Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setAlarmFlag '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="seteulastatus"></a>
## `setEulaStatus`

`luna://com.webos.service.buddyconnector/setEulaStatus`

Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setEulaStatus '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmemberstatus"></a>
## `setMemberStatus`

`luna://com.webos.service.buddyconnector/setMemberStatus`

Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setMemberStatus '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmodestatus"></a>
## `setModeStatus`

`luna://com.webos.service.buddyconnector/setModeStatus`

Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setModeStatus '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setremotecontrol"></a>
## `setRemoteControl`

`luna://com.webos.service.buddyconnector/setRemoteControl`

Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setRemoteControl '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsystemsettings"></a>
## `setSystemSettings`

`luna://com.webos.service.buddyconnector/setSystemSettings`

Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setSystemSettings '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvideocallstatus"></a>
## `setVideoCallStatus`

`luna://com.webos.service.buddyconnector/setVideoCallStatus`

Setter on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/setVideoCallStatus '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startvideocall"></a>
## `startVideoCall`

`luna://com.webos.service.buddyconnector/startVideoCall`

Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/startVideoCall '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopvideocall"></a>
## `stopVideoCall`

`luna://com.webos.service.buddyconnector/stopVideoCall`

Method on com.webos.service.buddyconnector (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.buddyconnector/stopVideoCall '{}'
```

> ACG groups: private, all, applications.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
