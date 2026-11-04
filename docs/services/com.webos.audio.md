# `com.webos.audio`

137 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`alarm/getAlarmOn`](#alarm_getalarmon) | private |  | audio | Method registered by com.webos.audio (category '/alarm') |
| [`alarm/getVolume`](#alarm_getvolume) | private |  | audio | Method registered by com.webos.audio (category '/alarm') |
| [`alarm/offsetVolume`](#alarm_offsetvolume) | private |  | audio | Method registered by com.webos.audio (category '/alarm') |
| [`alarm/setAlarmOn`](#alarm_setalarmon) | private |  | audio | Method registered by com.webos.audio (category '/alarm') |
| [`alarm/setMuted`](#alarm_setmuted) | private |  | audio | Method registered by com.webos.audio (category '/alarm') |
| [`alarm/setVolume`](#alarm_setvolume) | private |  | audio | Method registered by com.webos.audio (category '/alarm') |
| [`alarm/status`](#alarm_status) | private |  | audio | Method registered by com.webos.audio (category '/alarm') |
| [`alert/getVolume`](#alert_getvolume) | private |  | audio | Method registered by com.webos.audio (category '/alert') |
| [`alert/offsetVolume`](#alert_offsetvolume) | private |  | audio | Method registered by com.webos.audio (category '/alert') |
| [`alert/setMuted`](#alert_setmuted) | private |  | audio | Method registered by com.webos.audio (category '/alert') |
| [`alert/setVolume`](#alert_setvolume) | private |  | audio | Method registered by com.webos.audio (category '/alert') |
| [`alert/status`](#alert_status) | private |  | audio | Method registered by com.webos.audio (category '/alert') |
| [`broadcastEvent`](#broadcastevent) | private |  | audio | Method registered by com.webos.audio (root category) |
| [`disableScenario`](#disablescenario) | private |  | audio | Method registered by com.webos.audio (root category) |
| [`dtmf/busyTone`](#dtmf_busytone) | private |  | audio | Method registered by com.webos.audio (category '/dtmf') |
| [`dtmf/emergencyCall`](#dtmf_emergencycall) | private |  | audio | Method registered by com.webos.audio (category '/dtmf') |
| [`dtmf/playAlert`](#dtmf_playalert) | private |  | audio | Method registered by com.webos.audio (category '/dtmf') |
| [`dtmf/playDTMF`](#dtmf_playdtmf) | private |  | audio | Method registered by com.webos.audio (category '/dtmf') |
| [`dtmf/stopDTMF`](#dtmf_stopdtmf) | private |  | audio | Method registered by com.webos.audio (category '/dtmf') |
| [`enableScenario`](#enablescenario) | private |  | audio | Method registered by com.webos.audio (root category) |
| [`getCurrentScenario`](#getcurrentscenario) | private |  | audio | Method registered by com.webos.audio (root category) |
| [`getSoundOut`](#getsoundout) | public |  | audio | Method registered by com.webos.audio (root category) |
| [`getVolume`](#getvolume) | public |  | audio | Method registered by com.webos.audio (root category) |
| [`listScenarios`](#listscenarios) | private |  | audio | Method registered by com.webos.audio (root category) |
| [`media/broadcastEvent`](#media_broadcastevent) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/disableScenario`](#media_disablescenario) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/enableScenario`](#media_enablescenario) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/getCurrentScenario`](#media_getcurrentscenario) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/getLatency`](#media_getlatency) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/getMicGain`](#media_getmicgain) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/getVolume`](#media_getvolume) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/listScenarios`](#media_listscenarios) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/lockVolumeKeys`](#media_lockvolumekeys) | public |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/offsetMicGain`](#media_offsetmicgain) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/offsetVolume`](#media_offsetvolume) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/setCurrentScenario`](#media_setcurrentscenario) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/setLatency`](#media_setlatency) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/setMicGain`](#media_setmicgain) | private |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/setVolume`](#media_setvolume) | public |  | audio | Method registered by com.webos.audio (category '/media') |
| [`media/status`](#media_status) | public |  | audio | Method registered by com.webos.audio (category '/media') |
| [`nav/status`](#nav_status) | private |  | audio | Method registered by com.webos.audio (category '/nav') |
| [`notification/getVolume`](#notification_getvolume) | private |  | audio | Method registered by com.webos.audio (category '/notification') |
| [`notification/offsetVolume`](#notification_offsetvolume) | private |  | audio | Method registered by com.webos.audio (category '/notification') |
| [`notification/setVolume`](#notification_setvolume) | private |  | audio | Method registered by com.webos.audio (category '/notification') |
| [`notification/status`](#notification_status) | private |  | audio | Method registered by com.webos.audio (category '/notification') |
| [`phone/bluetoothAudioPropertiesSet`](#phone_bluetoothaudiopropertiesset) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/broadcastEvent`](#phone_broadcastevent) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/CallStatusUpdate`](#phone_callstatusupdate) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/disableScenario`](#phone_disablescenario) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/enableScenario`](#phone_enablescenario) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/getCurrentScenario`](#phone_getcurrentscenario) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/getVolume`](#phone_getvolume) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/hacGet`](#phone_hacget) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/hacSet`](#phone_hacset) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/listScenarios`](#phone_listscenarios) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/lockVolumeKeys`](#phone_lockvolumekeys) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/museSet`](#phone_museset) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/offsetVolume`](#phone_offsetvolume) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/setCurrentScenario`](#phone_setcurrentscenario) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/setMuted`](#phone_setmuted) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/setVolume`](#phone_setvolume) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`phone/status`](#phone_status) | private |  | audio | Method registered by com.webos.audio (category '/phone') |
| [`ringtone/getVolume`](#ringtone_getvolume) | private |  | audio | Method registered by com.webos.audio (category '/ringtone') |
| [`ringtone/lockVolumeKeys`](#ringtone_lockvolumekeys) | private |  | audio | Method registered by com.webos.audio (category '/ringtone') |
| [`ringtone/offsetVolume`](#ringtone_offsetvolume) | private |  | audio | Method registered by com.webos.audio (category '/ringtone') |
| [`ringtone/setMuted`](#ringtone_setmuted) | private |  | audio | Method registered by com.webos.audio (category '/ringtone') |
| [`ringtone/setVolume`](#ringtone_setvolume) | private |  | audio | Method registered by com.webos.audio (category '/ringtone') |
| [`ringtone/status`](#ringtone_status) | private |  | audio | Method registered by com.webos.audio (category '/ringtone') |
| [`setCurrentScenario`](#setcurrentscenario) | private |  | audio | Method registered by com.webos.audio (root category) |
| [`setMuted`](#setmuted) | public |  | audio | Mutes or unmutes the volume. |
| [`setVolume`](#setvolume) | private |  | sound | Sets volume |
| [`setVolume2`](#setvolume2) | public |  | audio | Method registered by com.webos.audio (root category) |
| [`state/get`](#state_get) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/getPreference`](#state_getpreference) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/getSoundProfile`](#state_getsoundprofile) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/getTouchSound`](#state_gettouchsound) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/getVolumeBalance`](#state_getvolumebalance) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/loadRTPModule`](#state_loadrtpmodule) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/loopback`](#state_loopback) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/pulse/setFilter`](#state_pulse_setfilter) | private |  | audio | Method registered by com.webos.audio (category '/state/pulse') |
| [`state/pulse/sinkStatus`](#state_pulse_sinkstatus) | private |  | audio | Method registered by com.webos.audio (category '/state/pulse') |
| [`state/pulse/suspend`](#state_pulse_suspend) | private |  | audio | Method registered by com.webos.audio (category '/state/pulse') |
| [`state/set`](#state_set) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/setNREC`](#state_setnrec) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/setPreference`](#state_setpreference) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/setRingerSwitch`](#state_setringerswitch) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/setSoundProfile`](#state_setsoundprofile) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/setTouchSound`](#state_settouchsound) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/setVolumeBalance`](#state_setvolumebalance) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/unloadRTPModule`](#state_unloadrtpmodule) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`state/volumeRamp`](#state_volumeramp) | private |  | audio | Method registered by com.webos.audio (category '/state') |
| [`status`](#status) | public |  | audio | Method registered by com.webos.audio (root category) |
| [`system/getVolume`](#system_getvolume) | private |  | audio | Method registered by com.webos.audio (category '/system') |
| [`system/offsetVolume`](#system_offsetvolume) | private |  | audio | Method registered by com.webos.audio (category '/system') |
| [`system/setMuted`](#system_setmuted) | private |  | audio | Method registered by com.webos.audio (category '/system') |
| [`system/setVolume`](#system_setvolume) | private |  | audio | Method registered by com.webos.audio (category '/system') |
| [`system/status`](#system_status) | private |  | audio | Method registered by com.webos.audio (category '/system') |
| [`systemsounds/playFeedback`](#systemsounds_playfeedback) | public |  | audio | Method registered by com.webos.audio (category '/systemsounds') |
| [`timer/getTimerOn`](#timer_gettimeron) | private |  | audio | Method registered by com.webos.audio (category '/timer') |
| [`timer/getVolume`](#timer_getvolume) | private |  | audio | Method registered by com.webos.audio (category '/timer') |
| [`timer/offsetVolume`](#timer_offsetvolume) | private |  | audio | Method registered by com.webos.audio (category '/timer') |
| [`timer/setMuted`](#timer_setmuted) | private |  | audio | Method registered by com.webos.audio (category '/timer') |
| [`timer/setTimerOn`](#timer_settimeron) | private |  | audio | Method registered by com.webos.audio (category '/timer') |
| [`timer/setVolume`](#timer_setvolume) | private |  | audio | Method registered by com.webos.audio (category '/timer') |
| [`timer/status`](#timer_status) | private |  | audio | Method registered by com.webos.audio (category '/timer') |
| [`tonegenerator/playCallertone`](#tonegenerator_playcallertone) | private |  | audio | Method registered by com.webos.audio (category '/tonegenerator') |
| [`udev/event`](#udev_event) | private |  | audio | Method registered by com.webos.audio (category '/udev') |
| [`vibrate/get`](#vibrate_get) | private |  | audio | Method registered by com.webos.audio (category '/vibrate') |
| [`vibrate/set`](#vibrate_set) | private |  | audio | Method registered by com.webos.audio (category '/vibrate') |
| [`voiceCommand/broadcastEvent`](#voicecommand_broadcastevent) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/control`](#voicecommand_control) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/disableScenario`](#voicecommand_disablescenario) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/enableScenario`](#voicecommand_enablescenario) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/getCurrentScenario`](#voicecommand_getcurrentscenario) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/getMicGain`](#voicecommand_getmicgain) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/getVolume`](#voicecommand_getvolume) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/listScenarios`](#voicecommand_listscenarios) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/offsetMicGain`](#voicecommand_offsetmicgain) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/offsetVolume`](#voicecommand_offsetvolume) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/setCurrentScenario`](#voicecommand_setcurrentscenario) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/setMicGain`](#voicecommand_setmicgain) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/setVolume`](#voicecommand_setvolume) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`voiceCommand/status`](#voicecommand_status) | private |  | audio | Method registered by com.webos.audio (category '/voiceCommand') |
| [`volumeDown`](#volumedown) | public |  | audio | Decreases the volume by 1. |
| [`volumeKeeping`](#volumekeeping) | private |  | audio | Registered at root of com.webos.audio (name only; may be a signal) |
| [`volumeUp`](#volumeup) | public |  | audio | Increases the volume by 1. |
| [`vvm/broadcastEvent`](#vvm_broadcastevent) | private |  | audio | Method registered by com.webos.audio (category '/vvm') |
| [`vvm/control`](#vvm_control) | private |  | audio | Method registered by com.webos.audio (category '/vvm') |
| [`vvm/disableScenario`](#vvm_disablescenario) | private |  | audio | Method registered by com.webos.audio (category '/vvm') |
| [`vvm/enableScenario`](#vvm_enablescenario) | private |  | audio | Method registered by com.webos.audio (category '/vvm') |
| [`vvm/getCurrentScenario`](#vvm_getcurrentscenario) | private |  | audio | Method registered by com.webos.audio (category '/vvm') |
| [`vvm/getVolume`](#vvm_getvolume) | private |  | audio | Method registered by com.webos.audio (category '/vvm') |
| [`vvm/listScenarios`](#vvm_listscenarios) | private |  | audio | Method registered by com.webos.audio (category '/vvm') |
| [`vvm/offsetVolume`](#vvm_offsetvolume) | private |  | audio | Method registered by com.webos.audio (category '/vvm') |
| [`vvm/setCurrentScenario`](#vvm_setcurrentscenario) | private |  | audio | Method registered by com.webos.audio (category '/vvm') |
| [`vvm/setVolume`](#vvm_setvolume) | private |  | audio | Method registered by com.webos.audio (category '/vvm') |
| [`vvm/status`](#vvm_status) | private |  | audio | Method registered by com.webos.audio (category '/vvm') |

<a id="alarm_getalarmon"></a>
## `alarm/getAlarmOn`

`luna://com.webos.audio/alarm/getAlarmOn`

Method registered by com.webos.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/getAlarmOn '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_getvolume"></a>
## `alarm/getVolume`

`luna://com.webos.audio/alarm/getVolume`

Method registered by com.webos.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_offsetvolume"></a>
## `alarm/offsetVolume`

`luna://com.webos.audio/alarm/offsetVolume`

Method registered by com.webos.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setalarmon"></a>
## `alarm/setAlarmOn`

`luna://com.webos.audio/alarm/setAlarmOn`

Method registered by com.webos.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/setAlarmOn '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setmuted"></a>
## `alarm/setMuted`

`luna://com.webos.audio/alarm/setMuted`

Method registered by com.webos.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setvolume"></a>
## `alarm/setVolume`

`luna://com.webos.audio/alarm/setVolume`

Method registered by com.webos.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_status"></a>
## `alarm/status`

`luna://com.webos.audio/alarm/status`

Method registered by com.webos.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_getvolume"></a>
## `alert/getVolume`

`luna://com.webos.audio/alert/getVolume`

Method registered by com.webos.audio (category '/alert')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alert/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_offsetvolume"></a>
## `alert/offsetVolume`

`luna://com.webos.audio/alert/offsetVolume`

Method registered by com.webos.audio (category '/alert')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alert/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_setmuted"></a>
## `alert/setMuted`

`luna://com.webos.audio/alert/setMuted`

Method registered by com.webos.audio (category '/alert')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alert/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_setvolume"></a>
## `alert/setVolume`

`luna://com.webos.audio/alert/setVolume`

Method registered by com.webos.audio (category '/alert')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alert/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_status"></a>
## `alert/status`

`luna://com.webos.audio/alert/status`

Method registered by com.webos.audio (category '/alert')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/alert/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="broadcastevent"></a>
## `broadcastEvent`

`luna://com.webos.audio/broadcastEvent`

Method registered by com.webos.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="disablescenario"></a>
## `disableScenario`

`luna://com.webos.audio/disableScenario`

Method registered by com.webos.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_busytone"></a>
## `dtmf/busyTone`

`luna://com.webos.audio/dtmf/busyTone`

Method registered by com.webos.audio (category '/dtmf')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/dtmf/busyTone '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_emergencycall"></a>
## `dtmf/emergencyCall`

`luna://com.webos.audio/dtmf/emergencyCall`

Method registered by com.webos.audio (category '/dtmf')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/dtmf/emergencyCall '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_playalert"></a>
## `dtmf/playAlert`

`luna://com.webos.audio/dtmf/playAlert`

Method registered by com.webos.audio (category '/dtmf')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/dtmf/playAlert '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_playdtmf"></a>
## `dtmf/playDTMF`

`luna://com.webos.audio/dtmf/playDTMF`

Method registered by com.webos.audio (category '/dtmf')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/dtmf/playDTMF '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_stopdtmf"></a>
## `dtmf/stopDTMF`

`luna://com.webos.audio/dtmf/stopDTMF`

Method registered by com.webos.audio (category '/dtmf')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/dtmf/stopDTMF '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enablescenario"></a>
## `enableScenario`

`luna://com.webos.audio/enableScenario`

Method registered by com.webos.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getcurrentscenario"></a>
## `getCurrentScenario`

`luna://com.webos.audio/getCurrentScenario`

Method registered by com.webos.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getsoundout"></a>
## `getSoundOut`

`luna://com.webos.audio/getSoundOut`

Method registered by com.webos.audio (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/getSoundOut '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getvolume"></a>
## `getVolume`

`luna://com.webos.audio/getVolume`

Method registered by com.webos.audio (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, public, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listscenarios"></a>
## `listScenarios`

`luna://com.webos.audio/listScenarios`

Method registered by com.webos.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_broadcastevent"></a>
## `media/broadcastEvent`

`luna://com.webos.audio/media/broadcastEvent`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_disablescenario"></a>
## `media/disableScenario`

`luna://com.webos.audio/media/disableScenario`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_enablescenario"></a>
## `media/enableScenario`

`luna://com.webos.audio/media/enableScenario`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getcurrentscenario"></a>
## `media/getCurrentScenario`

`luna://com.webos.audio/media/getCurrentScenario`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getlatency"></a>
## `media/getLatency`

`luna://com.webos.audio/media/getLatency`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/getLatency '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getmicgain"></a>
## `media/getMicGain`

`luna://com.webos.audio/media/getMicGain`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/getMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getvolume"></a>
## `media/getVolume`

`luna://com.webos.audio/media/getVolume`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_listscenarios"></a>
## `media/listScenarios`

`luna://com.webos.audio/media/listScenarios`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read. \|

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_lockvolumekeys"></a>
## `media/lockVolumeKeys`

`luna://com.webos.audio/media/lockVolumeKeys`

Method registered by com.webos.audio (category '/media')

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_offsetmicgain"></a>
## `media/offsetMicGain`

`luna://com.webos.audio/media/offsetMicGain`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/offsetMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_offsetvolume"></a>
## `media/offsetVolume`

`luna://com.webos.audio/media/offsetVolume`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setcurrentscenario"></a>
## `media/setCurrentScenario`

`luna://com.webos.audio/media/setCurrentScenario`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setlatency"></a>
## `media/setLatency`

`luna://com.webos.audio/media/setLatency`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/setLatency '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setmicgain"></a>
## `media/setMicGain`

`luna://com.webos.audio/media/setMicGain`

Method registered by com.webos.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/setMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setvolume"></a>
## `media/setVolume`

`luna://com.webos.audio/media/setVolume`

Method registered by com.webos.audio (category '/media')

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_status"></a>
## `media/status`

`luna://com.webos.audio/media/status`

Method registered by com.webos.audio (category '/media')

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/media/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, public, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="nav_status"></a>
## `nav/status`

`luna://com.webos.audio/nav/status`

Method registered by com.webos.audio (category '/nav')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/nav/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_getvolume"></a>
## `notification/getVolume`

`luna://com.webos.audio/notification/getVolume`

Method registered by com.webos.audio (category '/notification')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/notification/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_offsetvolume"></a>
## `notification/offsetVolume`

`luna://com.webos.audio/notification/offsetVolume`

Method registered by com.webos.audio (category '/notification')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/notification/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_setvolume"></a>
## `notification/setVolume`

`luna://com.webos.audio/notification/setVolume`

Method registered by com.webos.audio (category '/notification')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/notification/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_status"></a>
## `notification/status`

`luna://com.webos.audio/notification/status`

Method registered by com.webos.audio (category '/notification')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/notification/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_bluetoothaudiopropertiesset"></a>
## `phone/bluetoothAudioPropertiesSet`

`luna://com.webos.audio/phone/bluetoothAudioPropertiesSet`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/bluetoothAudioPropertiesSet '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_broadcastevent"></a>
## `phone/broadcastEvent`

`luna://com.webos.audio/phone/broadcastEvent`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_callstatusupdate"></a>
## `phone/CallStatusUpdate`

`luna://com.webos.audio/phone/CallStatusUpdate`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/CallStatusUpdate '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_disablescenario"></a>
## `phone/disableScenario`

`luna://com.webos.audio/phone/disableScenario`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_enablescenario"></a>
## `phone/enableScenario`

`luna://com.webos.audio/phone/enableScenario`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_getcurrentscenario"></a>
## `phone/getCurrentScenario`

`luna://com.webos.audio/phone/getCurrentScenario`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_getvolume"></a>
## `phone/getVolume`

`luna://com.webos.audio/phone/getVolume`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_hacget"></a>
## `phone/hacGet`

`luna://com.webos.audio/phone/hacGet`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/hacGet '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_hacset"></a>
## `phone/hacSet`

`luna://com.webos.audio/phone/hacSet`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/hacSet '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_listscenarios"></a>
## `phone/listScenarios`

`luna://com.webos.audio/phone/listScenarios`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_lockvolumekeys"></a>
## `phone/lockVolumeKeys`

`luna://com.webos.audio/phone/lockVolumeKeys`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_museset"></a>
## `phone/museSet`

`luna://com.webos.audio/phone/museSet`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/museSet '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_offsetvolume"></a>
## `phone/offsetVolume`

`luna://com.webos.audio/phone/offsetVolume`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setcurrentscenario"></a>
## `phone/setCurrentScenario`

`luna://com.webos.audio/phone/setCurrentScenario`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setmuted"></a>
## `phone/setMuted`

`luna://com.webos.audio/phone/setMuted`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setvolume"></a>
## `phone/setVolume`

`luna://com.webos.audio/phone/setVolume`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_status"></a>
## `phone/status`

`luna://com.webos.audio/phone/status`

Method registered by com.webos.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_getvolume"></a>
## `ringtone/getVolume`

`luna://com.webos.audio/ringtone/getVolume`

Method registered by com.webos.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_lockvolumekeys"></a>
## `ringtone/lockVolumeKeys`

`luna://com.webos.audio/ringtone/lockVolumeKeys`

Method registered by com.webos.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_offsetvolume"></a>
## `ringtone/offsetVolume`

`luna://com.webos.audio/ringtone/offsetVolume`

Method registered by com.webos.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_setmuted"></a>
## `ringtone/setMuted`

`luna://com.webos.audio/ringtone/setMuted`

Method registered by com.webos.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_setvolume"></a>
## `ringtone/setVolume`

`luna://com.webos.audio/ringtone/setVolume`

Method registered by com.webos.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_status"></a>
## `ringtone/status`

`luna://com.webos.audio/ringtone/status`

Method registered by com.webos.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setcurrentscenario"></a>
## `setCurrentScenario`

`luna://com.webos.audio/setCurrentScenario`

Method registered by com.webos.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setmuted"></a>
## `setMuted`

`luna://com.webos.audio/setMuted`

Mutes or unmutes the volume.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `muted` | Boolean (required) |

```sh
luna-send -n 1 -f luna://com.webos.audio/setMuted '{"muted":true}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/audio)

<a id="setvolume"></a>
## `setVolume`

`luna://com.webos.audio/setVolume`

Sets volume

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `volume` | int |

```sh
luna-send -n 1 -f luna://com.webos.audio/setVolume '{"volume":30}'
```

> Also getVolume, volumeUp, volumeDown, setMuted.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/HEAD/shell/crates/lumen-ctl/src/lg.rs), [2](https://github.com/gprot42/webos-launch-home/blob/HEAD/src/js/luna.js)

<a id="setvolume2"></a>
## `setVolume2`

`luna://com.webos.audio/setVolume2`

Method registered by com.webos.audio (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/setVolume2 '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_get"></a>
## `state/get`

`luna://com.webos.audio/state/get`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/get '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getpreference"></a>
## `state/getPreference`

`luna://com.webos.audio/state/getPreference`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/getPreference '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getsoundprofile"></a>
## `state/getSoundProfile`

`luna://com.webos.audio/state/getSoundProfile`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/getSoundProfile '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_gettouchsound"></a>
## `state/getTouchSound`

`luna://com.webos.audio/state/getTouchSound`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/getTouchSound '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getvolumebalance"></a>
## `state/getVolumeBalance`

`luna://com.webos.audio/state/getVolumeBalance`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/getVolumeBalance '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_loadrtpmodule"></a>
## `state/loadRTPModule`

`luna://com.webos.audio/state/loadRTPModule`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/loadRTPModule '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_loopback"></a>
## `state/loopback`

`luna://com.webos.audio/state/loopback`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/loopback '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_setfilter"></a>
## `state/pulse/setFilter`

`luna://com.webos.audio/state/pulse/setFilter`

Method registered by com.webos.audio (category '/state/pulse')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/pulse/setFilter '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_sinkstatus"></a>
## `state/pulse/sinkStatus`

`luna://com.webos.audio/state/pulse/sinkStatus`

Method registered by com.webos.audio (category '/state/pulse')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/pulse/sinkStatus '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_suspend"></a>
## `state/pulse/suspend`

`luna://com.webos.audio/state/pulse/suspend`

Method registered by com.webos.audio (category '/state/pulse')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/pulse/suspend '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_set"></a>
## `state/set`

`luna://com.webos.audio/state/set`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/set '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setnrec"></a>
## `state/setNREC`

`luna://com.webos.audio/state/setNREC`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setNREC '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setpreference"></a>
## `state/setPreference`

`luna://com.webos.audio/state/setPreference`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setPreference '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setringerswitch"></a>
## `state/setRingerSwitch`

`luna://com.webos.audio/state/setRingerSwitch`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setRingerSwitch '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setsoundprofile"></a>
## `state/setSoundProfile`

`luna://com.webos.audio/state/setSoundProfile`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setSoundProfile '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_settouchsound"></a>
## `state/setTouchSound`

`luna://com.webos.audio/state/setTouchSound`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setTouchSound '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setvolumebalance"></a>
## `state/setVolumeBalance`

`luna://com.webos.audio/state/setVolumeBalance`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setVolumeBalance '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_unloadrtpmodule"></a>
## `state/unloadRTPModule`

`luna://com.webos.audio/state/unloadRTPModule`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/unloadRTPModule '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_volumeramp"></a>
## `state/volumeRamp`

`luna://com.webos.audio/state/volumeRamp`

Method registered by com.webos.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/state/volumeRamp '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="status"></a>
## `status`

`luna://com.webos.audio/status`

Method registered by com.webos.audio (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_getvolume"></a>
## `system/getVolume`

`luna://com.webos.audio/system/getVolume`

Method registered by com.webos.audio (category '/system')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/system/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_offsetvolume"></a>
## `system/offsetVolume`

`luna://com.webos.audio/system/offsetVolume`

Method registered by com.webos.audio (category '/system')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/system/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_setmuted"></a>
## `system/setMuted`

`luna://com.webos.audio/system/setMuted`

Method registered by com.webos.audio (category '/system')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/system/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_setvolume"></a>
## `system/setVolume`

`luna://com.webos.audio/system/setVolume`

Method registered by com.webos.audio (category '/system')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/system/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_status"></a>
## `system/status`

`luna://com.webos.audio/system/status`

Method registered by com.webos.audio (category '/system')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/system/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="systemsounds_playfeedback"></a>
## `systemsounds/playFeedback`

`luna://com.webos.audio/systemsounds/playFeedback`

Method registered by com.webos.audio (category '/systemsounds')

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/systemsounds/playFeedback '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_gettimeron"></a>
## `timer/getTimerOn`

`luna://com.webos.audio/timer/getTimerOn`

Method registered by com.webos.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/getTimerOn '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_getvolume"></a>
## `timer/getVolume`

`luna://com.webos.audio/timer/getVolume`

Method registered by com.webos.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_offsetvolume"></a>
## `timer/offsetVolume`

`luna://com.webos.audio/timer/offsetVolume`

Method registered by com.webos.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_setmuted"></a>
## `timer/setMuted`

`luna://com.webos.audio/timer/setMuted`

Method registered by com.webos.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_settimeron"></a>
## `timer/setTimerOn`

`luna://com.webos.audio/timer/setTimerOn`

Method registered by com.webos.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/setTimerOn '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_setvolume"></a>
## `timer/setVolume`

`luna://com.webos.audio/timer/setVolume`

Method registered by com.webos.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_status"></a>
## `timer/status`

`luna://com.webos.audio/timer/status`

Method registered by com.webos.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="tonegenerator_playcallertone"></a>
## `tonegenerator/playCallertone`

`luna://com.webos.audio/tonegenerator/playCallertone`

Method registered by com.webos.audio (category '/tonegenerator')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/tonegenerator/playCallertone '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="udev_event"></a>
## `udev/event`

`luna://com.webos.audio/udev/event`

Method registered by com.webos.audio (category '/udev')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/udev/event '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vibrate_get"></a>
## `vibrate/get`

`luna://com.webos.audio/vibrate/get`

Method registered by com.webos.audio (category '/vibrate')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vibrate/get '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vibrate_set"></a>
## `vibrate/set`

`luna://com.webos.audio/vibrate/set`

Method registered by com.webos.audio (category '/vibrate')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vibrate/set '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_broadcastevent"></a>
## `voiceCommand/broadcastEvent`

`luna://com.webos.audio/voiceCommand/broadcastEvent`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_control"></a>
## `voiceCommand/control`

`luna://com.webos.audio/voiceCommand/control`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/control '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_disablescenario"></a>
## `voiceCommand/disableScenario`

`luna://com.webos.audio/voiceCommand/disableScenario`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_enablescenario"></a>
## `voiceCommand/enableScenario`

`luna://com.webos.audio/voiceCommand/enableScenario`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_getcurrentscenario"></a>
## `voiceCommand/getCurrentScenario`

`luna://com.webos.audio/voiceCommand/getCurrentScenario`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_getmicgain"></a>
## `voiceCommand/getMicGain`

`luna://com.webos.audio/voiceCommand/getMicGain`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/getMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_getvolume"></a>
## `voiceCommand/getVolume`

`luna://com.webos.audio/voiceCommand/getVolume`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_listscenarios"></a>
## `voiceCommand/listScenarios`

`luna://com.webos.audio/voiceCommand/listScenarios`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_offsetmicgain"></a>
## `voiceCommand/offsetMicGain`

`luna://com.webos.audio/voiceCommand/offsetMicGain`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/offsetMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_offsetvolume"></a>
## `voiceCommand/offsetVolume`

`luna://com.webos.audio/voiceCommand/offsetVolume`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_setcurrentscenario"></a>
## `voiceCommand/setCurrentScenario`

`luna://com.webos.audio/voiceCommand/setCurrentScenario`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_setmicgain"></a>
## `voiceCommand/setMicGain`

`luna://com.webos.audio/voiceCommand/setMicGain`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/setMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_setvolume"></a>
## `voiceCommand/setVolume`

`luna://com.webos.audio/voiceCommand/setVolume`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_status"></a>
## `voiceCommand/status`

`luna://com.webos.audio/voiceCommand/status`

Method registered by com.webos.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="volumedown"></a>
## `volumeDown`

`luna://com.webos.audio/volumeDown`

Decreases the volume by 1.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.audio/volumeDown '{}'
```

> Parameters must be empty (ERROR_3).

Sources: [1](https://webostv.developer.lge.com/develop/references/audio)

<a id="volumekeeping"></a>
## `volumeKeeping`

`luna://com.webos.audio/volumeKeeping`

Registered at root of com.webos.audio (name only; may be a signal)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/volumeKeeping '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="volumeup"></a>
## `volumeUp`

`luna://com.webos.audio/volumeUp`

Increases the volume by 1.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.audio/volumeUp '{}'
```

> Parameters must be empty (ERROR_3).

Sources: [1](https://webostv.developer.lge.com/develop/references/audio)

<a id="vvm_broadcastevent"></a>
## `vvm/broadcastEvent`

`luna://com.webos.audio/vvm/broadcastEvent`

Method registered by com.webos.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_control"></a>
## `vvm/control`

`luna://com.webos.audio/vvm/control`

Method registered by com.webos.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/control '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_disablescenario"></a>
## `vvm/disableScenario`

`luna://com.webos.audio/vvm/disableScenario`

Method registered by com.webos.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_enablescenario"></a>
## `vvm/enableScenario`

`luna://com.webos.audio/vvm/enableScenario`

Method registered by com.webos.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_getcurrentscenario"></a>
## `vvm/getCurrentScenario`

`luna://com.webos.audio/vvm/getCurrentScenario`

Method registered by com.webos.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_getvolume"></a>
## `vvm/getVolume`

`luna://com.webos.audio/vvm/getVolume`

Method registered by com.webos.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_listscenarios"></a>
## `vvm/listScenarios`

`luna://com.webos.audio/vvm/listScenarios`

Method registered by com.webos.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_offsetvolume"></a>
## `vvm/offsetVolume`

`luna://com.webos.audio/vvm/offsetVolume`

Method registered by com.webos.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_setcurrentscenario"></a>
## `vvm/setCurrentScenario`

`luna://com.webos.audio/vvm/setCurrentScenario`

Method registered by com.webos.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_setvolume"></a>
## `vvm/setVolume`

`luna://com.webos.audio/vvm/setVolume`

Method registered by com.webos.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_status"></a>
## `vvm/status`

`luna://com.webos.audio/vvm/status`

Method registered by com.webos.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)
