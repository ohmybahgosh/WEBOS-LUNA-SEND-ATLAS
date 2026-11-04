# `com.webos.service.voiceinput`

28 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`enroll/getEnrolledCount`](#enroll_getenrolledcount) | private |  | input | Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented). |
| [`enroll/nextStep`](#enroll_nextstep) | private |  | input | Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented). |
| [`enroll/removeEnroll`](#enroll_removeenroll) | private |  | input | Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented). ⚠️ |
| [`enroll/startEnroll`](#enroll_startenroll) | private |  | input | Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented). |
| [`enroll/stopEnroll`](#enroll_stopenroll) | private |  | input | Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented). |
| [`factory/getDataVersion`](#factory_getdataversion) | private |  | input | Getter on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`factory/getMicSwitchStatus`](#factory_getmicswitchstatus) | private |  | input | Getter on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`factory/testMicSignal`](#factory_testmicsignal) | private |  | input | Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented). ⚠️ |
| [`getDevices`](#getdevices) | private |  | input | Method registered by com.webos.service.voiceinput (root category) |
| [`respondEvent`](#respondevent) | private |  | input | Method registered by com.webos.service.voiceinput (root category) |
| [`restartTimer`](#restarttimer) | private |  | input | Method registered by com.webos.service.voiceinput (root category) |
| [`setting/getActivation`](#setting_getactivation) | private |  | input | Getter on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`setting/getSensitivity`](#setting_getsensitivity) | private |  | input | Getter on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`setting/setActivation`](#setting_setactivation) | private |  | input | Setter on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`setting/setSensitivity`](#setting_setsensitivity) | private |  | input | Setter on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`startStreaming`](#startstreaming) | private |  | input | Method registered by com.webos.service.voiceinput (root category) |
| [`startStreamingWithTrigger`](#startstreamingwithtrigger) | private |  | input | Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`stopStreaming`](#stopstreaming) | private |  | input | Method registered by com.webos.service.voiceinput (root category) |
| [`tas/control`](#tas_control) | private |  | input | Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented). |
| [`tas/endTest`](#tas_endtest) | private |  | input | Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`tas/readyTest`](#tas_readytest) | private |  | input | Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`tas/runTest`](#tas_runtest) | private |  | input | Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`tas/setAssembleMode`](#tas_setassemblemode) | private |  | input | Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented). |
| [`tas/setStream`](#tas_setstream) | private |  | input | Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented). |
| [`util/runByFile`](#util_runbyfile) | private |  | input | Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`util/startWebBSI`](#util_startwebbsi) | private |  | input | Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`util/stopWebBSI`](#util_stopwebbsi) | private |  | input | Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |
| [`util/subscribeFileOutput`](#util_subscribefileoutput) | private |  | input | Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented). |

<a id="enroll_getenrolledcount"></a>
## `enroll/getEnrolledCount`

`luna://com.webos.service.voiceinput/enroll/getEnrolledCount`

Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/enroll/getEnrolledCount '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enroll_nextstep"></a>
## `enroll/nextStep`

`luna://com.webos.service.voiceinput/enroll/nextStep`

Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/enroll/nextStep '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enroll_removeenroll"></a>
## `enroll/removeEnroll` ⚠️ DANGEROUS

`luna://com.webos.service.voiceinput/enroll/removeEnroll`

Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/enroll/removeEnroll '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enroll_startenroll"></a>
## `enroll/startEnroll`

`luna://com.webos.service.voiceinput/enroll/startEnroll`

Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/enroll/startEnroll '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enroll_stopenroll"></a>
## `enroll/stopEnroll`

`luna://com.webos.service.voiceinput/enroll/stopEnroll`

Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/enroll/stopEnroll '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="factory_getdataversion"></a>
## `factory/getDataVersion`

`luna://com.webos.service.voiceinput/factory/getDataVersion`

Getter on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/factory/getDataVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="factory_getmicswitchstatus"></a>
## `factory/getMicSwitchStatus`

`luna://com.webos.service.voiceinput/factory/getMicSwitchStatus`

Getter on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/factory/getMicSwitchStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="factory_testmicsignal"></a>
## `factory/testMicSignal` ⚠️ DANGEROUS

`luna://com.webos.service.voiceinput/factory/testMicSignal`

Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/factory/testMicSignal '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevices"></a>
## `getDevices`

`luna://com.webos.service.voiceinput/getDevices`

Method registered by com.webos.service.voiceinput (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/getDevices '{}'
```

> Seen via `ls-monitor -i com.webos.service.voiceinput` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="respondevent"></a>
## `respondEvent`

`luna://com.webos.service.voiceinput/respondEvent`

Method registered by com.webos.service.voiceinput (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/respondEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.voiceinput` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="restarttimer"></a>
## `restartTimer`

`luna://com.webos.service.voiceinput/restartTimer`

Method registered by com.webos.service.voiceinput (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/restartTimer '{}'
```

> Seen via `ls-monitor -i com.webos.service.voiceinput` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setting_getactivation"></a>
## `setting/getActivation`

`luna://com.webos.service.voiceinput/setting/getActivation`

Getter on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/setting/getActivation '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setting_getsensitivity"></a>
## `setting/getSensitivity`

`luna://com.webos.service.voiceinput/setting/getSensitivity`

Getter on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/setting/getSensitivity '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setting_setactivation"></a>
## `setting/setActivation`

`luna://com.webos.service.voiceinput/setting/setActivation`

Setter on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/setting/setActivation '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setting_setsensitivity"></a>
## `setting/setSensitivity`

`luna://com.webos.service.voiceinput/setting/setSensitivity`

Setter on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/setting/setSensitivity '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startstreaming"></a>
## `startStreaming`

`luna://com.webos.service.voiceinput/startStreaming`

Method registered by com.webos.service.voiceinput (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/startStreaming '{}'
```

> Seen via `ls-monitor -i com.webos.service.voiceinput` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="startstreamingwithtrigger"></a>
## `startStreamingWithTrigger`

`luna://com.webos.service.voiceinput/startStreamingWithTrigger`

Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/startStreamingWithTrigger '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopstreaming"></a>
## `stopStreaming`

`luna://com.webos.service.voiceinput/stopStreaming`

Method registered by com.webos.service.voiceinput (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/stopStreaming '{}'
```

> Seen via `ls-monitor -i com.webos.service.voiceinput` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="tas_control"></a>
## `tas/control`

`luna://com.webos.service.voiceinput/tas/control`

Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/control '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tas_endtest"></a>
## `tas/endTest`

`luna://com.webos.service.voiceinput/tas/endTest`

Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/endTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_readytest"></a>
## `tas/readyTest`

`luna://com.webos.service.voiceinput/tas/readyTest`

Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/readyTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_runtest"></a>
## `tas/runTest`

`luna://com.webos.service.voiceinput/tas/runTest`

Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/runTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_setassemblemode"></a>
## `tas/setAssembleMode`

`luna://com.webos.service.voiceinput/tas/setAssembleMode`

Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/setAssembleMode '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tas_setstream"></a>
## `tas/setStream`

`luna://com.webos.service.voiceinput/tas/setStream`

Method on com.webos.service.voiceinput (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/setStream '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="util_runbyfile"></a>
## `util/runByFile`

`luna://com.webos.service.voiceinput/util/runByFile`

Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/util/runByFile '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="util_startwebbsi"></a>
## `util/startWebBSI`

`luna://com.webos.service.voiceinput/util/startWebBSI`

Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/util/startWebBSI '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="util_stopwebbsi"></a>
## `util/stopWebBSI`

`luna://com.webos.service.voiceinput/util/stopWebBSI`

Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/util/stopWebBSI '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="util_subscribefileoutput"></a>
## `util/subscribeFileOutput`

`luna://com.webos.service.voiceinput/util/subscribeFileOutput`

Method on com.webos.service.voiceinput (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/util/subscribeFileOutput '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
