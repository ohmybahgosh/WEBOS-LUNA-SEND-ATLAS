# `com.webos.audio`

webOS audio service: controls volume, mute, and status for alarm, alert, and media streams, manages audio scenarios and routing, and plays DTMF/call tones.

137 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`alarm/getAlarmOn`](#alarm_getalarmon) | private |  | audio | inferred | Returns the alarm on (alarm) |
| [`alarm/getVolume`](#alarm_getvolume) | private |  | audio | inferred | Returns the volume (alarm) |
| [`alarm/offsetVolume`](#alarm_offsetvolume) | private |  | audio | inferred | Handles the offset volume (alarm) |
| [`alarm/setAlarmOn`](#alarm_setalarmon) | private |  | audio | inferred | Sets the alarm on (alarm) |
| [`alarm/setMuted`](#alarm_setmuted) | private |  | audio | inferred | Sets the muted (alarm) |
| [`alarm/setVolume`](#alarm_setvolume) | private |  | audio | inferred | Sets the volume (alarm) |
| [`alarm/status`](#alarm_status) | private |  | audio | inferred | Handles the status (alarm) |
| [`alert/getVolume`](#alert_getvolume) | private |  | audio | inferred | Returns the volume (alert) |
| [`alert/offsetVolume`](#alert_offsetvolume) | private |  | audio | inferred | Handles the offset volume (alert) |
| [`alert/setMuted`](#alert_setmuted) | private |  | audio | inferred | Sets the muted (alert) |
| [`alert/setVolume`](#alert_setvolume) | private |  | audio | inferred | Sets the volume (alert) |
| [`alert/status`](#alert_status) | private |  | audio | inferred | Handles the status (alert) |
| [`broadcastEvent`](#broadcastevent) | private |  | audio | inferred | Handles the broadcast event. |
| [`disableScenario`](#disablescenario) | private |  | audio | inferred | Disables the scenario. |
| [`dtmf/busyTone`](#dtmf_busytone) | private |  | audio | inferred | Handles the busy tone (dtmf) |
| [`dtmf/emergencyCall`](#dtmf_emergencycall) | private |  | audio | inferred | Handles the emergency call (dtmf) |
| [`dtmf/playAlert`](#dtmf_playalert) | private |  | audio | inferred | Plays the alert (dtmf) |
| [`dtmf/playDTMF`](#dtmf_playdtmf) | private |  | audio | inferred | Plays the DTMF (dtmf) |
| [`dtmf/stopDTMF`](#dtmf_stopdtmf) | private |  | audio | inferred | Stops the DTMF (dtmf) |
| [`enableScenario`](#enablescenario) | private |  | audio | inferred | Enables the scenario. |
| [`getCurrentScenario`](#getcurrentscenario) | private |  | audio | inferred | Returns the current scenario. |
| [`getSoundOut`](#getsoundout) | public |  | audio | inferred | Returns the sound out. |
| [`getVolume`](#getvolume) | public |  | audio | inferred | Returns the volume. |
| [`listScenarios`](#listscenarios) | private |  | audio | inferred | Lists the scenarios. |
| [`media/broadcastEvent`](#media_broadcastevent) | private |  | audio | inferred | Handles the broadcast event (media) |
| [`media/disableScenario`](#media_disablescenario) | private |  | audio | inferred | Disables the scenario (media) |
| [`media/enableScenario`](#media_enablescenario) | private |  | audio | inferred | Enables the scenario (media) |
| [`media/getCurrentScenario`](#media_getcurrentscenario) | private |  | audio | inferred | Returns the current scenario (media) |
| [`media/getLatency`](#media_getlatency) | private |  | audio | inferred | Returns the latency (media) |
| [`media/getMicGain`](#media_getmicgain) | private |  | audio | inferred | Returns the mic gain (media) |
| [`media/getVolume`](#media_getvolume) | private |  | audio | inferred | Returns the volume (media) |
| [`media/listScenarios`](#media_listscenarios) | private |  | audio | inferred | Lists the scenarios (media) |
| [`media/lockVolumeKeys`](#media_lockvolumekeys) | public |  | audio | inferred | Locks the volume keys (media) |
| [`media/offsetMicGain`](#media_offsetmicgain) | private |  | audio | inferred | Handles the offset mic gain (media) |
| [`media/offsetVolume`](#media_offsetvolume) | private |  | audio | inferred | Handles the offset volume (media) |
| [`media/setCurrentScenario`](#media_setcurrentscenario) | private |  | audio | inferred | Sets the current scenario (media) |
| [`media/setLatency`](#media_setlatency) | private |  | audio | inferred | Sets the latency (media) |
| [`media/setMicGain`](#media_setmicgain) | private |  | audio | inferred | Sets the mic gain (media) |
| [`media/setVolume`](#media_setvolume) | public |  | audio | inferred | Sets the volume (media) |
| [`media/status`](#media_status) | public |  | audio | inferred | Handles the status (media) |
| [`nav/status`](#nav_status) | private |  | audio | inferred | Handles the status (nav) |
| [`notification/getVolume`](#notification_getvolume) | private |  | audio | inferred | Returns the volume (notification) |
| [`notification/offsetVolume`](#notification_offsetvolume) | private |  | audio | inferred | Handles the offset volume (notification) |
| [`notification/setVolume`](#notification_setvolume) | private |  | audio | inferred | Sets the volume (notification) |
| [`notification/status`](#notification_status) | private |  | audio | inferred | Handles the status (notification) |
| [`phone/bluetoothAudioPropertiesSet`](#phone_bluetoothaudiopropertiesset) | private |  | audio | inferred | Handles the bluetooth audio properties set (phone) |
| [`phone/broadcastEvent`](#phone_broadcastevent) | private |  | audio | inferred | Handles the broadcast event (phone) |
| [`phone/CallStatusUpdate`](#phone_callstatusupdate) | private |  | audio | inferred | Calls the status update (phone) |
| [`phone/disableScenario`](#phone_disablescenario) | private |  | audio | inferred | Disables the scenario (phone) |
| [`phone/enableScenario`](#phone_enablescenario) | private |  | audio | inferred | Enables the scenario (phone) |
| [`phone/getCurrentScenario`](#phone_getcurrentscenario) | private |  | audio | inferred | Returns the current scenario (phone) |
| [`phone/getVolume`](#phone_getvolume) | private |  | audio | inferred | Returns the volume (phone) |
| [`phone/hacGet`](#phone_hacget) | private |  | audio | inferred | Handles the hac get (phone) |
| [`phone/hacSet`](#phone_hacset) | private |  | audio | inferred | Handles the hac set (phone) |
| [`phone/listScenarios`](#phone_listscenarios) | private |  | audio | inferred | Lists the scenarios (phone) |
| [`phone/lockVolumeKeys`](#phone_lockvolumekeys) | private |  | audio | inferred | Locks the volume keys (phone) |
| [`phone/museSet`](#phone_museset) | private |  | audio | inferred | Handles the muse set (phone) |
| [`phone/offsetVolume`](#phone_offsetvolume) | private |  | audio | inferred | Handles the offset volume (phone) |
| [`phone/setCurrentScenario`](#phone_setcurrentscenario) | private |  | audio | inferred | Sets the current scenario (phone) |
| [`phone/setMuted`](#phone_setmuted) | private |  | audio | inferred | Sets the muted (phone) |
| [`phone/setVolume`](#phone_setvolume) | private |  | audio | inferred | Sets the volume (phone) |
| [`phone/status`](#phone_status) | private |  | audio | inferred | Handles the status (phone) |
| [`ringtone/getVolume`](#ringtone_getvolume) | private |  | audio | inferred | Returns the volume (ringtone) |
| [`ringtone/lockVolumeKeys`](#ringtone_lockvolumekeys) | private |  | audio | inferred | Locks the volume keys (ringtone) |
| [`ringtone/offsetVolume`](#ringtone_offsetvolume) | private |  | audio | inferred | Handles the offset volume (ringtone) |
| [`ringtone/setMuted`](#ringtone_setmuted) | private |  | audio | inferred | Sets the muted (ringtone) |
| [`ringtone/setVolume`](#ringtone_setvolume) | private |  | audio | inferred | Sets the volume (ringtone) |
| [`ringtone/status`](#ringtone_status) | private |  | audio | inferred | Handles the status (ringtone) |
| [`setCurrentScenario`](#setcurrentscenario) | private |  | audio | inferred | Sets the current scenario. |
| [`setMuted`](#setmuted) | public |  | audio | documented | Mutes or unmutes the volume. |
| [`setVolume`](#setvolume) | private |  | sound | documented | Sets volume |
| [`setVolume2`](#setvolume2) | public |  | audio | inferred | Sets the volume 2. |
| [`state/get`](#state_get) | private |  | audio | inferred | Returns the audio (state) |
| [`state/getPreference`](#state_getpreference) | private |  | audio | inferred | Returns the preference (state) |
| [`state/getSoundProfile`](#state_getsoundprofile) | private |  | audio | inferred | Returns the sound profile (state) |
| [`state/getTouchSound`](#state_gettouchsound) | private |  | audio | inferred | Returns the touch sound (state) |
| [`state/getVolumeBalance`](#state_getvolumebalance) | private |  | audio | inferred | Returns the volume balance (state) |
| [`state/loadRTPModule`](#state_loadrtpmodule) | private |  | audio | inferred | Loads the RTP module (state) |
| [`state/loopback`](#state_loopback) | private |  | audio | inferred | Handles the loopback (state) |
| [`state/pulse/setFilter`](#state_pulse_setfilter) | private |  | audio | inferred | Sets the filter (state pulse) |
| [`state/pulse/sinkStatus`](#state_pulse_sinkstatus) | private |  | audio | inferred | Handles the sink status (state pulse) |
| [`state/pulse/suspend`](#state_pulse_suspend) | private |  | audio | inferred | Handles the suspend (state pulse) |
| [`state/set`](#state_set) | private |  | audio | inferred | Sets the audio (state) |
| [`state/setNREC`](#state_setnrec) | private |  | audio | inferred | Sets the NREC (state) |
| [`state/setPreference`](#state_setpreference) | private |  | audio | inferred | Sets the preference (state) |
| [`state/setRingerSwitch`](#state_setringerswitch) | private |  | audio | inferred | Sets the ringer switch (state) |
| [`state/setSoundProfile`](#state_setsoundprofile) | private |  | audio | inferred | Sets the sound profile (state) |
| [`state/setTouchSound`](#state_settouchsound) | private |  | audio | inferred | Sets the touch sound (state) |
| [`state/setVolumeBalance`](#state_setvolumebalance) | private |  | audio | inferred | Sets the volume balance (state) |
| [`state/unloadRTPModule`](#state_unloadrtpmodule) | private |  | audio | inferred | Unloads the RTP module (state) |
| [`state/volumeRamp`](#state_volumeramp) | private |  | audio | inferred | Handles the volume ramp (state) |
| [`status`](#status) | public |  | audio | inferred | Handles the status. |
| [`system/getVolume`](#system_getvolume) | private |  | audio | inferred | Returns the volume (system) |
| [`system/offsetVolume`](#system_offsetvolume) | private |  | audio | inferred | Handles the offset volume (system) |
| [`system/setMuted`](#system_setmuted) | private |  | audio | inferred | Sets the muted (system) |
| [`system/setVolume`](#system_setvolume) | private |  | audio | inferred | Sets the volume (system) |
| [`system/status`](#system_status) | private |  | audio | inferred | Handles the status (system) |
| [`systemsounds/playFeedback`](#systemsounds_playfeedback) | public |  | audio | inferred | Plays the feedback (systemsounds) |
| [`timer/getTimerOn`](#timer_gettimeron) | private |  | audio | inferred | Returns the timer on (timer) |
| [`timer/getVolume`](#timer_getvolume) | private |  | audio | inferred | Returns the volume (timer) |
| [`timer/offsetVolume`](#timer_offsetvolume) | private |  | audio | inferred | Handles the offset volume (timer) |
| [`timer/setMuted`](#timer_setmuted) | private |  | audio | inferred | Sets the muted (timer) |
| [`timer/setTimerOn`](#timer_settimeron) | private |  | audio | inferred | Sets the timer on (timer) |
| [`timer/setVolume`](#timer_setvolume) | private |  | audio | inferred | Sets the volume (timer) |
| [`timer/status`](#timer_status) | private |  | audio | inferred | Handles the status (timer) |
| [`tonegenerator/playCallertone`](#tonegenerator_playcallertone) | private |  | audio | inferred | Plays the callertone (tonegenerator) |
| [`udev/event`](#udev_event) | private |  | audio | inferred | Handles the event (udev) |
| [`vibrate/get`](#vibrate_get) | private |  | audio | inferred | Returns the audio (vibrate) |
| [`vibrate/set`](#vibrate_set) | private |  | audio | inferred | Sets the audio (vibrate) |
| [`voiceCommand/broadcastEvent`](#voicecommand_broadcastevent) | private |  | audio | inferred | Handles the broadcast event (voice command) |
| [`voiceCommand/control`](#voicecommand_control) | private |  | audio | inferred | Controls the audio (voice command) |
| [`voiceCommand/disableScenario`](#voicecommand_disablescenario) | private |  | audio | inferred | Disables the scenario (voice command) |
| [`voiceCommand/enableScenario`](#voicecommand_enablescenario) | private |  | audio | inferred | Enables the scenario (voice command) |
| [`voiceCommand/getCurrentScenario`](#voicecommand_getcurrentscenario) | private |  | audio | inferred | Returns the current scenario (voice command) |
| [`voiceCommand/getMicGain`](#voicecommand_getmicgain) | private |  | audio | inferred | Returns the mic gain (voice command) |
| [`voiceCommand/getVolume`](#voicecommand_getvolume) | private |  | audio | inferred | Returns the volume (voice command) |
| [`voiceCommand/listScenarios`](#voicecommand_listscenarios) | private |  | audio | inferred | Lists the scenarios (voice command) |
| [`voiceCommand/offsetMicGain`](#voicecommand_offsetmicgain) | private |  | audio | inferred | Handles the offset mic gain (voice command) |
| [`voiceCommand/offsetVolume`](#voicecommand_offsetvolume) | private |  | audio | inferred | Handles the offset volume (voice command) |
| [`voiceCommand/setCurrentScenario`](#voicecommand_setcurrentscenario) | private |  | audio | inferred | Sets the current scenario (voice command) |
| [`voiceCommand/setMicGain`](#voicecommand_setmicgain) | private |  | audio | inferred | Sets the mic gain (voice command) |
| [`voiceCommand/setVolume`](#voicecommand_setvolume) | private |  | audio | inferred | Sets the volume (voice command) |
| [`voiceCommand/status`](#voicecommand_status) | private |  | audio | inferred | Handles the status (voice command) |
| [`volumeDown`](#volumedown) | public |  | audio | documented | Decreases the volume by 1. |
| [`volumeKeeping`](#volumekeeping) | private |  | audio | documented | Registered at root of com.webos.audio (name only; may be a signal) |
| [`volumeUp`](#volumeup) | public |  | audio | documented | Increases the volume by 1. |
| [`vvm/broadcastEvent`](#vvm_broadcastevent) | private |  | audio | inferred | Handles the broadcast event (vvm) |
| [`vvm/control`](#vvm_control) | private |  | audio | inferred | Controls the audio (vvm) |
| [`vvm/disableScenario`](#vvm_disablescenario) | private |  | audio | inferred | Disables the scenario (vvm) |
| [`vvm/enableScenario`](#vvm_enablescenario) | private |  | audio | inferred | Enables the scenario (vvm) |
| [`vvm/getCurrentScenario`](#vvm_getcurrentscenario) | private |  | audio | inferred | Returns the current scenario (vvm) |
| [`vvm/getVolume`](#vvm_getvolume) | private |  | audio | inferred | Returns the volume (vvm) |
| [`vvm/listScenarios`](#vvm_listscenarios) | private |  | audio | inferred | Lists the scenarios (vvm) |
| [`vvm/offsetVolume`](#vvm_offsetvolume) | private |  | audio | inferred | Handles the offset volume (vvm) |
| [`vvm/setCurrentScenario`](#vvm_setcurrentscenario) | private |  | audio | inferred | Sets the current scenario (vvm) |
| [`vvm/setVolume`](#vvm_setvolume) | private |  | audio | inferred | Sets the volume (vvm) |
| [`vvm/status`](#vvm_status) | private |  | audio | inferred | Handles the status (vvm) |

<a id="alarm_getalarmon"></a>
## `alarm/getAlarmOn`

`luna://com.webos.audio/alarm/getAlarmOn`

Returns the alarm on (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/getAlarmOn '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_getvolume"></a>
## `alarm/getVolume`

`luna://com.webos.audio/alarm/getVolume`

Returns the volume (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_offsetvolume"></a>
## `alarm/offsetVolume`

`luna://com.webos.audio/alarm/offsetVolume`

Handles the offset volume (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setalarmon"></a>
## `alarm/setAlarmOn`

`luna://com.webos.audio/alarm/setAlarmOn`

Sets the alarm on (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/setAlarmOn '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setmuted"></a>
## `alarm/setMuted`

`luna://com.webos.audio/alarm/setMuted`

Sets the muted (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setvolume"></a>
## `alarm/setVolume`

`luna://com.webos.audio/alarm/setVolume`

Sets the volume (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_status"></a>
## `alarm/status`

`luna://com.webos.audio/alarm/status`

Handles the status (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alarm/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_getvolume"></a>
## `alert/getVolume`

`luna://com.webos.audio/alert/getVolume`

Returns the volume (alert)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alert/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_offsetvolume"></a>
## `alert/offsetVolume`

`luna://com.webos.audio/alert/offsetVolume`

Handles the offset volume (alert)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alert/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_setmuted"></a>
## `alert/setMuted`

`luna://com.webos.audio/alert/setMuted`

Sets the muted (alert)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alert/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_setvolume"></a>
## `alert/setVolume`

`luna://com.webos.audio/alert/setVolume`

Sets the volume (alert)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alert/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_status"></a>
## `alert/status`

`luna://com.webos.audio/alert/status`

Handles the status (alert)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/alert/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="broadcastevent"></a>
## `broadcastEvent`

`luna://com.webos.audio/broadcastEvent`

Handles the broadcast event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="disablescenario"></a>
## `disableScenario`

`luna://com.webos.audio/disableScenario`

Disables the scenario.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_busytone"></a>
## `dtmf/busyTone`

`luna://com.webos.audio/dtmf/busyTone`

Handles the busy tone (dtmf)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/dtmf/busyTone '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_emergencycall"></a>
## `dtmf/emergencyCall`

`luna://com.webos.audio/dtmf/emergencyCall`

Handles the emergency call (dtmf)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/dtmf/emergencyCall '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_playalert"></a>
## `dtmf/playAlert`

`luna://com.webos.audio/dtmf/playAlert`

Plays the alert (dtmf)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/dtmf/playAlert '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_playdtmf"></a>
## `dtmf/playDTMF`

`luna://com.webos.audio/dtmf/playDTMF`

Plays the DTMF (dtmf)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/dtmf/playDTMF '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_stopdtmf"></a>
## `dtmf/stopDTMF`

`luna://com.webos.audio/dtmf/stopDTMF`

Stops the DTMF (dtmf)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/dtmf/stopDTMF '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enablescenario"></a>
## `enableScenario`

`luna://com.webos.audio/enableScenario`

Enables the scenario.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getcurrentscenario"></a>
## `getCurrentScenario`

`luna://com.webos.audio/getCurrentScenario`

Returns the current scenario.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getsoundout"></a>
## `getSoundOut`

`luna://com.webos.audio/getSoundOut`

Returns the sound out.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/getSoundOut '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getvolume"></a>
## `getVolume`

`luna://com.webos.audio/getVolume`

Returns the volume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, public, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listscenarios"></a>
## `listScenarios`

`luna://com.webos.audio/listScenarios`

Lists the scenarios.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_broadcastevent"></a>
## `media/broadcastEvent`

`luna://com.webos.audio/media/broadcastEvent`

Handles the broadcast event (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_disablescenario"></a>
## `media/disableScenario`

`luna://com.webos.audio/media/disableScenario`

Disables the scenario (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_enablescenario"></a>
## `media/enableScenario`

`luna://com.webos.audio/media/enableScenario`

Enables the scenario (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getcurrentscenario"></a>
## `media/getCurrentScenario`

`luna://com.webos.audio/media/getCurrentScenario`

Returns the current scenario (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getlatency"></a>
## `media/getLatency`

`luna://com.webos.audio/media/getLatency`

Returns the latency (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/getLatency '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getmicgain"></a>
## `media/getMicGain`

`luna://com.webos.audio/media/getMicGain`

Returns the mic gain (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/getMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getvolume"></a>
## `media/getVolume`

`luna://com.webos.audio/media/getVolume`

Returns the volume (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_listscenarios"></a>
## `media/listScenarios`

`luna://com.webos.audio/media/listScenarios`

Lists the scenarios (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read. \|

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_lockvolumekeys"></a>
## `media/lockVolumeKeys`

`luna://com.webos.audio/media/lockVolumeKeys`

Locks the volume keys (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_offsetmicgain"></a>
## `media/offsetMicGain`

`luna://com.webos.audio/media/offsetMicGain`

Handles the offset mic gain (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/offsetMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_offsetvolume"></a>
## `media/offsetVolume`

`luna://com.webos.audio/media/offsetVolume`

Handles the offset volume (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setcurrentscenario"></a>
## `media/setCurrentScenario`

`luna://com.webos.audio/media/setCurrentScenario`

Sets the current scenario (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setlatency"></a>
## `media/setLatency`

`luna://com.webos.audio/media/setLatency`

Sets the latency (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/setLatency '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setmicgain"></a>
## `media/setMicGain`

`luna://com.webos.audio/media/setMicGain`

Sets the mic gain (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/setMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setvolume"></a>
## `media/setVolume`

`luna://com.webos.audio/media/setVolume`

Sets the volume (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_status"></a>
## `media/status`

`luna://com.webos.audio/media/status`

Handles the status (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/media/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, public, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="nav_status"></a>
## `nav/status`

`luna://com.webos.audio/nav/status`

Handles the status (nav)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/nav/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_getvolume"></a>
## `notification/getVolume`

`luna://com.webos.audio/notification/getVolume`

Returns the volume (notification)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/notification/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_offsetvolume"></a>
## `notification/offsetVolume`

`luna://com.webos.audio/notification/offsetVolume`

Handles the offset volume (notification)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/notification/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_setvolume"></a>
## `notification/setVolume`

`luna://com.webos.audio/notification/setVolume`

Sets the volume (notification)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/notification/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_status"></a>
## `notification/status`

`luna://com.webos.audio/notification/status`

Handles the status (notification)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/notification/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_bluetoothaudiopropertiesset"></a>
## `phone/bluetoothAudioPropertiesSet`

`luna://com.webos.audio/phone/bluetoothAudioPropertiesSet`

Handles the bluetooth audio properties set (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/bluetoothAudioPropertiesSet '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_broadcastevent"></a>
## `phone/broadcastEvent`

`luna://com.webos.audio/phone/broadcastEvent`

Handles the broadcast event (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_callstatusupdate"></a>
## `phone/CallStatusUpdate`

`luna://com.webos.audio/phone/CallStatusUpdate`

Calls the status update (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/CallStatusUpdate '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_disablescenario"></a>
## `phone/disableScenario`

`luna://com.webos.audio/phone/disableScenario`

Disables the scenario (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_enablescenario"></a>
## `phone/enableScenario`

`luna://com.webos.audio/phone/enableScenario`

Enables the scenario (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_getcurrentscenario"></a>
## `phone/getCurrentScenario`

`luna://com.webos.audio/phone/getCurrentScenario`

Returns the current scenario (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_getvolume"></a>
## `phone/getVolume`

`luna://com.webos.audio/phone/getVolume`

Returns the volume (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_hacget"></a>
## `phone/hacGet`

`luna://com.webos.audio/phone/hacGet`

Handles the hac get (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/hacGet '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_hacset"></a>
## `phone/hacSet`

`luna://com.webos.audio/phone/hacSet`

Handles the hac set (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/hacSet '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_listscenarios"></a>
## `phone/listScenarios`

`luna://com.webos.audio/phone/listScenarios`

Lists the scenarios (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_lockvolumekeys"></a>
## `phone/lockVolumeKeys`

`luna://com.webos.audio/phone/lockVolumeKeys`

Locks the volume keys (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_museset"></a>
## `phone/museSet`

`luna://com.webos.audio/phone/museSet`

Handles the muse set (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/museSet '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_offsetvolume"></a>
## `phone/offsetVolume`

`luna://com.webos.audio/phone/offsetVolume`

Handles the offset volume (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setcurrentscenario"></a>
## `phone/setCurrentScenario`

`luna://com.webos.audio/phone/setCurrentScenario`

Sets the current scenario (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setmuted"></a>
## `phone/setMuted`

`luna://com.webos.audio/phone/setMuted`

Sets the muted (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setvolume"></a>
## `phone/setVolume`

`luna://com.webos.audio/phone/setVolume`

Sets the volume (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_status"></a>
## `phone/status`

`luna://com.webos.audio/phone/status`

Handles the status (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/phone/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_getvolume"></a>
## `ringtone/getVolume`

`luna://com.webos.audio/ringtone/getVolume`

Returns the volume (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_lockvolumekeys"></a>
## `ringtone/lockVolumeKeys`

`luna://com.webos.audio/ringtone/lockVolumeKeys`

Locks the volume keys (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_offsetvolume"></a>
## `ringtone/offsetVolume`

`luna://com.webos.audio/ringtone/offsetVolume`

Handles the offset volume (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_setmuted"></a>
## `ringtone/setMuted`

`luna://com.webos.audio/ringtone/setMuted`

Sets the muted (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_setvolume"></a>
## `ringtone/setVolume`

`luna://com.webos.audio/ringtone/setVolume`

Sets the volume (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_status"></a>
## `ringtone/status`

`luna://com.webos.audio/ringtone/status`

Handles the status (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/ringtone/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setcurrentscenario"></a>
## `setCurrentScenario`

`luna://com.webos.audio/setCurrentScenario`

Sets the current scenario.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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
- **Confidence:** documented

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

Sets the volume 2.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/setVolume2 '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_get"></a>
## `state/get`

`luna://com.webos.audio/state/get`

Returns the audio (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/get '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getpreference"></a>
## `state/getPreference`

`luna://com.webos.audio/state/getPreference`

Returns the preference (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/getPreference '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getsoundprofile"></a>
## `state/getSoundProfile`

`luna://com.webos.audio/state/getSoundProfile`

Returns the sound profile (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/getSoundProfile '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_gettouchsound"></a>
## `state/getTouchSound`

`luna://com.webos.audio/state/getTouchSound`

Returns the touch sound (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/getTouchSound '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getvolumebalance"></a>
## `state/getVolumeBalance`

`luna://com.webos.audio/state/getVolumeBalance`

Returns the volume balance (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/getVolumeBalance '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_loadrtpmodule"></a>
## `state/loadRTPModule`

`luna://com.webos.audio/state/loadRTPModule`

Loads the RTP module (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/loadRTPModule '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_loopback"></a>
## `state/loopback`

`luna://com.webos.audio/state/loopback`

Handles the loopback (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/loopback '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_setfilter"></a>
## `state/pulse/setFilter`

`luna://com.webos.audio/state/pulse/setFilter`

Sets the filter (state pulse)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/pulse/setFilter '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_sinkstatus"></a>
## `state/pulse/sinkStatus`

`luna://com.webos.audio/state/pulse/sinkStatus`

Handles the sink status (state pulse)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/pulse/sinkStatus '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_suspend"></a>
## `state/pulse/suspend`

`luna://com.webos.audio/state/pulse/suspend`

Handles the suspend (state pulse)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/pulse/suspend '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_set"></a>
## `state/set`

`luna://com.webos.audio/state/set`

Sets the audio (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/set '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setnrec"></a>
## `state/setNREC`

`luna://com.webos.audio/state/setNREC`

Sets the NREC (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setNREC '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setpreference"></a>
## `state/setPreference`

`luna://com.webos.audio/state/setPreference`

Sets the preference (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setPreference '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setringerswitch"></a>
## `state/setRingerSwitch`

`luna://com.webos.audio/state/setRingerSwitch`

Sets the ringer switch (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setRingerSwitch '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setsoundprofile"></a>
## `state/setSoundProfile`

`luna://com.webos.audio/state/setSoundProfile`

Sets the sound profile (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setSoundProfile '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_settouchsound"></a>
## `state/setTouchSound`

`luna://com.webos.audio/state/setTouchSound`

Sets the touch sound (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setTouchSound '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setvolumebalance"></a>
## `state/setVolumeBalance`

`luna://com.webos.audio/state/setVolumeBalance`

Sets the volume balance (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/setVolumeBalance '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_unloadrtpmodule"></a>
## `state/unloadRTPModule`

`luna://com.webos.audio/state/unloadRTPModule`

Unloads the RTP module (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/unloadRTPModule '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_volumeramp"></a>
## `state/volumeRamp`

`luna://com.webos.audio/state/volumeRamp`

Handles the volume ramp (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/state/volumeRamp '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="status"></a>
## `status`

`luna://com.webos.audio/status`

Handles the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_getvolume"></a>
## `system/getVolume`

`luna://com.webos.audio/system/getVolume`

Returns the volume (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/system/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_offsetvolume"></a>
## `system/offsetVolume`

`luna://com.webos.audio/system/offsetVolume`

Handles the offset volume (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/system/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_setmuted"></a>
## `system/setMuted`

`luna://com.webos.audio/system/setMuted`

Sets the muted (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/system/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_setvolume"></a>
## `system/setVolume`

`luna://com.webos.audio/system/setVolume`

Sets the volume (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/system/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_status"></a>
## `system/status`

`luna://com.webos.audio/system/status`

Handles the status (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/system/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, settings.read, media, settings, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="systemsounds_playfeedback"></a>
## `systemsounds/playFeedback`

`luna://com.webos.audio/systemsounds/playFeedback`

Plays the feedback (systemsounds)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/systemsounds/playFeedback '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, media, public, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_gettimeron"></a>
## `timer/getTimerOn`

`luna://com.webos.audio/timer/getTimerOn`

Returns the timer on (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/getTimerOn '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_getvolume"></a>
## `timer/getVolume`

`luna://com.webos.audio/timer/getVolume`

Returns the volume (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_offsetvolume"></a>
## `timer/offsetVolume`

`luna://com.webos.audio/timer/offsetVolume`

Handles the offset volume (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_setmuted"></a>
## `timer/setMuted`

`luna://com.webos.audio/timer/setMuted`

Sets the muted (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_settimeron"></a>
## `timer/setTimerOn`

`luna://com.webos.audio/timer/setTimerOn`

Sets the timer on (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/setTimerOn '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_setvolume"></a>
## `timer/setVolume`

`luna://com.webos.audio/timer/setVolume`

Sets the volume (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_status"></a>
## `timer/status`

`luna://com.webos.audio/timer/status`

Handles the status (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/timer/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="tonegenerator_playcallertone"></a>
## `tonegenerator/playCallertone`

`luna://com.webos.audio/tonegenerator/playCallertone`

Plays the callertone (tonegenerator)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/tonegenerator/playCallertone '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="udev_event"></a>
## `udev/event`

`luna://com.webos.audio/udev/event`

Handles the event (udev)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/udev/event '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vibrate_get"></a>
## `vibrate/get`

`luna://com.webos.audio/vibrate/get`

Returns the audio (vibrate)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vibrate/get '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vibrate_set"></a>
## `vibrate/set`

`luna://com.webos.audio/vibrate/set`

Sets the audio (vibrate)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vibrate/set '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_broadcastevent"></a>
## `voiceCommand/broadcastEvent`

`luna://com.webos.audio/voiceCommand/broadcastEvent`

Handles the broadcast event (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_control"></a>
## `voiceCommand/control`

`luna://com.webos.audio/voiceCommand/control`

Controls the audio (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/control '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_disablescenario"></a>
## `voiceCommand/disableScenario`

`luna://com.webos.audio/voiceCommand/disableScenario`

Disables the scenario (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_enablescenario"></a>
## `voiceCommand/enableScenario`

`luna://com.webos.audio/voiceCommand/enableScenario`

Enables the scenario (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_getcurrentscenario"></a>
## `voiceCommand/getCurrentScenario`

`luna://com.webos.audio/voiceCommand/getCurrentScenario`

Returns the current scenario (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_getmicgain"></a>
## `voiceCommand/getMicGain`

`luna://com.webos.audio/voiceCommand/getMicGain`

Returns the mic gain (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/getMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_getvolume"></a>
## `voiceCommand/getVolume`

`luna://com.webos.audio/voiceCommand/getVolume`

Returns the volume (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_listscenarios"></a>
## `voiceCommand/listScenarios`

`luna://com.webos.audio/voiceCommand/listScenarios`

Lists the scenarios (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_offsetmicgain"></a>
## `voiceCommand/offsetMicGain`

`luna://com.webos.audio/voiceCommand/offsetMicGain`

Handles the offset mic gain (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/offsetMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_offsetvolume"></a>
## `voiceCommand/offsetVolume`

`luna://com.webos.audio/voiceCommand/offsetVolume`

Handles the offset volume (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_setcurrentscenario"></a>
## `voiceCommand/setCurrentScenario`

`luna://com.webos.audio/voiceCommand/setCurrentScenario`

Sets the current scenario (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_setmicgain"></a>
## `voiceCommand/setMicGain`

`luna://com.webos.audio/voiceCommand/setMicGain`

Sets the mic gain (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/setMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_setvolume"></a>
## `voiceCommand/setVolume`

`luna://com.webos.audio/voiceCommand/setVolume`

Sets the volume (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/voiceCommand/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_status"></a>
## `voiceCommand/status`

`luna://com.webos.audio/voiceCommand/status`

Handles the status (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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
- **Confidence:** documented

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

Handles the broadcast event (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_control"></a>
## `vvm/control`

`luna://com.webos.audio/vvm/control`

Controls the audio (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/control '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_disablescenario"></a>
## `vvm/disableScenario`

`luna://com.webos.audio/vvm/disableScenario`

Disables the scenario (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_enablescenario"></a>
## `vvm/enableScenario`

`luna://com.webos.audio/vvm/enableScenario`

Enables the scenario (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_getcurrentscenario"></a>
## `vvm/getCurrentScenario`

`luna://com.webos.audio/vvm/getCurrentScenario`

Returns the current scenario (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_getvolume"></a>
## `vvm/getVolume`

`luna://com.webos.audio/vvm/getVolume`

Returns the volume (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_listscenarios"></a>
## `vvm/listScenarios`

`luna://com.webos.audio/vvm/listScenarios`

Lists the scenarios (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_offsetvolume"></a>
## `vvm/offsetVolume`

`luna://com.webos.audio/vvm/offsetVolume`

Handles the offset volume (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_setcurrentscenario"></a>
## `vvm/setCurrentScenario`

`luna://com.webos.audio/vvm/setCurrentScenario`

Sets the current scenario (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_setvolume"></a>
## `vvm/setVolume`

`luna://com.webos.audio/vvm/setVolume`

Sets the volume (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_status"></a>
## `vvm/status`

`luna://com.webos.audio/vvm/status`

Handles the status (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.audio/vvm/status '{}'
```

> Seen via `ls-monitor -i com.webos.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)
