# `com.webos.service.voiceinput`

Voice-input service: enrolls voice triggers, streams audio for recognition (with trigger), and manages activation and sensitivity settings and mic devices. _(inferred from the service's methods)_

28 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`enroll/getEnrolledCount`](#enroll_getenrolledcount) | private |  | input | inferred | Returns the enrolled count (enroll) |
| [`enroll/nextStep`](#enroll_nextstep) | private |  | input | inferred | Handles the next step (enroll) |
| [`enroll/removeEnroll`](#enroll_removeenroll) | private |  | input | inferred | Removes the enroll (enroll) ⚠️ |
| [`enroll/startEnroll`](#enroll_startenroll) | private |  | input | inferred | Starts the enroll (enroll) |
| [`enroll/stopEnroll`](#enroll_stopenroll) | private |  | input | inferred | Stops the enroll (enroll) |
| [`factory/getDataVersion`](#factory_getdataversion) | private |  | input | inferred | Returns the data version (factory) |
| [`factory/getMicSwitchStatus`](#factory_getmicswitchstatus) | private |  | input | inferred | Returns the mic switch status (factory) |
| [`factory/testMicSignal`](#factory_testmicsignal) | private |  | input | inferred | Tests the mic signal (factory) ⚠️ |
| [`getDevices`](#getdevices) | private |  | input | inferred | Returns the devices. |
| [`respondEvent`](#respondevent) | private |  | input | inferred | Responds to the event. |
| [`restartTimer`](#restarttimer) | private |  | input | inferred | Restarts the timer. |
| [`setting/getActivation`](#setting_getactivation) | private |  | input | inferred | Returns the activation (setting) |
| [`setting/getSensitivity`](#setting_getsensitivity) | private |  | input | inferred | Returns the sensitivity (setting) |
| [`setting/setActivation`](#setting_setactivation) | private |  | input | inferred | Sets the activation (setting) |
| [`setting/setSensitivity`](#setting_setsensitivity) | private |  | input | inferred | Sets the sensitivity (setting) |
| [`startStreaming`](#startstreaming) | private |  | input | inferred | Starts the streaming. |
| [`startStreamingWithTrigger`](#startstreamingwithtrigger) | private |  | input | inferred | Starts the streaming with trigger. |
| [`stopStreaming`](#stopstreaming) | private |  | input | inferred | Stops the streaming. |
| [`tas/control`](#tas_control) | private |  | input | inferred | Controls the voiceinput (tas) |
| [`tas/endTest`](#tas_endtest) | private |  | input | inferred | Handles the end test (tas) |
| [`tas/readyTest`](#tas_readytest) | private |  | input | inferred | Handles the ready test (tas) |
| [`tas/runTest`](#tas_runtest) | private |  | input | inferred | Runs the test (tas) |
| [`tas/setAssembleMode`](#tas_setassemblemode) | private |  | input | inferred | Sets the assemble mode (tas) |
| [`tas/setStream`](#tas_setstream) | private |  | input | inferred | Sets the stream (tas) |
| [`util/runByFile`](#util_runbyfile) | private |  | input | inferred | Runs the by file (util) |
| [`util/startWebBSI`](#util_startwebbsi) | private |  | input | inferred | Starts the web BSI (util) |
| [`util/stopWebBSI`](#util_stopwebbsi) | private |  | input | inferred | Stops the web BSI (util) |
| [`util/subscribeFileOutput`](#util_subscribefileoutput) | private |  | input | inferred | Subscribes to the file output (util) |

<a id="enroll_getenrolledcount"></a>
## `enroll/getEnrolledCount`

`luna://com.webos.service.voiceinput/enroll/getEnrolledCount`

Returns the enrolled count (enroll)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/enroll/getEnrolledCount '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enroll_nextstep"></a>
## `enroll/nextStep`

`luna://com.webos.service.voiceinput/enroll/nextStep`

Handles the next step (enroll)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/enroll/nextStep '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enroll_removeenroll"></a>
## `enroll/removeEnroll` ⚠️ DANGEROUS

`luna://com.webos.service.voiceinput/enroll/removeEnroll`

Removes the enroll (enroll)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/enroll/removeEnroll '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enroll_startenroll"></a>
## `enroll/startEnroll`

`luna://com.webos.service.voiceinput/enroll/startEnroll`

Starts the enroll (enroll)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/enroll/startEnroll '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enroll_stopenroll"></a>
## `enroll/stopEnroll`

`luna://com.webos.service.voiceinput/enroll/stopEnroll`

Stops the enroll (enroll)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/enroll/stopEnroll '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="factory_getdataversion"></a>
## `factory/getDataVersion`

`luna://com.webos.service.voiceinput/factory/getDataVersion`

Returns the data version (factory)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/factory/getDataVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="factory_getmicswitchstatus"></a>
## `factory/getMicSwitchStatus`

`luna://com.webos.service.voiceinput/factory/getMicSwitchStatus`

Returns the mic switch status (factory)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/factory/getMicSwitchStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="factory_testmicsignal"></a>
## `factory/testMicSignal` ⚠️ DANGEROUS

`luna://com.webos.service.voiceinput/factory/testMicSignal`

Tests the mic signal (factory)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/factory/testMicSignal '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevices"></a>
## `getDevices`

`luna://com.webos.service.voiceinput/getDevices`

Returns the devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/getDevices '{}'
```

> Seen via `ls-monitor -i com.webos.service.voiceinput` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="respondevent"></a>
## `respondEvent`

`luna://com.webos.service.voiceinput/respondEvent`

Responds to the event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/respondEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.voiceinput` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="restarttimer"></a>
## `restartTimer`

`luna://com.webos.service.voiceinput/restartTimer`

Restarts the timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/restartTimer '{}'
```

> Seen via `ls-monitor -i com.webos.service.voiceinput` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setting_getactivation"></a>
## `setting/getActivation`

`luna://com.webos.service.voiceinput/setting/getActivation`

Returns the activation (setting)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/setting/getActivation '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setting_getsensitivity"></a>
## `setting/getSensitivity`

`luna://com.webos.service.voiceinput/setting/getSensitivity`

Returns the sensitivity (setting)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/setting/getSensitivity '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setting_setactivation"></a>
## `setting/setActivation`

`luna://com.webos.service.voiceinput/setting/setActivation`

Sets the activation (setting)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/setting/setActivation '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setting_setsensitivity"></a>
## `setting/setSensitivity`

`luna://com.webos.service.voiceinput/setting/setSensitivity`

Sets the sensitivity (setting)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/setting/setSensitivity '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startstreaming"></a>
## `startStreaming`

`luna://com.webos.service.voiceinput/startStreaming`

Starts the streaming.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/startStreaming '{}'
```

> Seen via `ls-monitor -i com.webos.service.voiceinput` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="startstreamingwithtrigger"></a>
## `startStreamingWithTrigger`

`luna://com.webos.service.voiceinput/startStreamingWithTrigger`

Starts the streaming with trigger.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/startStreamingWithTrigger '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopstreaming"></a>
## `stopStreaming`

`luna://com.webos.service.voiceinput/stopStreaming`

Stops the streaming.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/stopStreaming '{}'
```

> Seen via `ls-monitor -i com.webos.service.voiceinput` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="tas_control"></a>
## `tas/control`

`luna://com.webos.service.voiceinput/tas/control`

Controls the voiceinput (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/control '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tas_endtest"></a>
## `tas/endTest`

`luna://com.webos.service.voiceinput/tas/endTest`

Handles the end test (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/endTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_readytest"></a>
## `tas/readyTest`

`luna://com.webos.service.voiceinput/tas/readyTest`

Handles the ready test (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/readyTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_runtest"></a>
## `tas/runTest`

`luna://com.webos.service.voiceinput/tas/runTest`

Runs the test (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/runTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_setassemblemode"></a>
## `tas/setAssembleMode`

`luna://com.webos.service.voiceinput/tas/setAssembleMode`

Sets the assemble mode (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/setAssembleMode '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tas_setstream"></a>
## `tas/setStream`

`luna://com.webos.service.voiceinput/tas/setStream`

Sets the stream (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/tas/setStream '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="util_runbyfile"></a>
## `util/runByFile`

`luna://com.webos.service.voiceinput/util/runByFile`

Runs the by file (util)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/util/runByFile '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="util_startwebbsi"></a>
## `util/startWebBSI`

`luna://com.webos.service.voiceinput/util/startWebBSI`

Starts the web BSI (util)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/util/startWebBSI '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="util_stopwebbsi"></a>
## `util/stopWebBSI`

`luna://com.webos.service.voiceinput/util/stopWebBSI`

Stops the web BSI (util)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/util/stopWebBSI '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="util_subscribefileoutput"></a>
## `util/subscribeFileOutput`

`luna://com.webos.service.voiceinput/util/subscribeFileOutput`

Subscribes to the file output (util)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceinput/util/subscribeFileOutput '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
