# `com.palm.audio`

93 methods.  Platforms seen: HP webOS, Palm, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`dtmf/busyTone`](#dtmf_busytone) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`dtmf/emergencyCall`](#dtmf_emergencycall) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`dtmf/playAlert`](#dtmf_playalert) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`dtmf/playDTMF`](#dtmf_playdtmf) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`dtmf/stopDTMF`](#dtmf_stopdtmf) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/broadcastEvent`](#media_broadcastevent) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/disableScenario`](#media_disablescenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/enableScenario`](#media_enablescenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/getCurrentScenario`](#media_getcurrentscenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/getLatency`](#media_getlatency) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/getMicGain`](#media_getmicgain) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/getVolume`](#media_getvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/listScenarios`](#media_listscenarios) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/lockVolumeKeys`](#media_lockvolumekeys) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/offsetMicGain`](#media_offsetmicgain) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/offsetVolume`](#media_offsetvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/setCurrentScenario`](#media_setcurrentscenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/setLatency`](#media_setlatency) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/setMicGain`](#media_setmicgain) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`media/setVolume`](#media_setvolume) | root |  | audio | Sets media volume (0-100) |
| [`media/status`](#media_status) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`nav/status`](#nav_status) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`notification/getVolume`](#notification_getvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`notification/offsetVolume`](#notification_offsetvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`notification/setVolume`](#notification_setvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/bluetoothAudioPropertiesSet`](#phone_bluetoothaudiopropertiesset) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/broadcastEvent`](#phone_broadcastevent) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/CallStatusUpdate`](#phone_callstatusupdate) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/disableScenario`](#phone_disablescenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/enableScenario`](#phone_enablescenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/getCurrentScenario`](#phone_getcurrentscenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/getVolume`](#phone_getvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/hacGet`](#phone_hacget) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/hacSet`](#phone_hacset) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/listScenarios`](#phone_listscenarios) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/lockVolumeKeys`](#phone_lockvolumekeys) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/museSet`](#phone_museset) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/offsetVolume`](#phone_offsetvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/setCurrentScenario`](#phone_setcurrentscenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/setMuted`](#phone_setmuted) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/setVolume`](#phone_setvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`phone/status`](#phone_status) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`ringtone/getVolume`](#ringtone_getvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`ringtone/lockVolumeKeys`](#ringtone_lockvolumekeys) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`ringtone/offsetVolume`](#ringtone_offsetvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`ringtone/setMuted`](#ringtone_setmuted) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`ringtone/setVolume`](#ringtone_setvolume) | root |  | audio | Sets ringtone volume (0-100) |
| [`ringtone/status`](#ringtone_status) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`state/get`](#state_get) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`state/getPreference`](#state_getpreference) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`state/pulse/setFilter`](#state_pulse_setfilter) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`state/pulse/sinkStatus`](#state_pulse_sinkstatus) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`state/pulse/suspend`](#state_pulse_suspend) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`state/set`](#state_set) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`state/setPreference`](#state_setpreference) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`state/setSoundProfile`](#state_setsoundprofile) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`system/getVolume`](#system_getvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`system/offsetVolume`](#system_offsetvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`system/setMuted`](#system_setmuted) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`system/setVolume`](#system_setvolume) | root |  | audio | Sets system volume (0-100) |
| [`system/status`](#system_status) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`systemsounds/playFeedback`](#systemsounds_playfeedback) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`telephony/answered`](#telephony_answered) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`telephony/callAudio`](#telephony_callaudio) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`telephony/startCall`](#telephony_startcall) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`udev/event`](#udev_event) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vibrate/get`](#vibrate_get) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vibrate/set`](#vibrate_set) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/broadcastEvent`](#voicecommand_broadcastevent) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/control`](#voicecommand_control) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/disableScenario`](#voicecommand_disablescenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/enableScenario`](#voicecommand_enablescenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/getCurrentScenario`](#voicecommand_getcurrentscenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/getMicGain`](#voicecommand_getmicgain) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/getVolume`](#voicecommand_getvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/listScenarios`](#voicecommand_listscenarios) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/offsetMicGain`](#voicecommand_offsetmicgain) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/offsetVolume`](#voicecommand_offsetvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/setCurrentScenario`](#voicecommand_setcurrentscenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/setMicGain`](#voicecommand_setmicgain) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/setVolume`](#voicecommand_setvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`voiceCommand/status`](#voicecommand_status) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vvm/broadcastEvent`](#vvm_broadcastevent) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vvm/control`](#vvm_control) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vvm/disableScenario`](#vvm_disablescenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vvm/enableScenario`](#vvm_enablescenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vvm/getCurrentScenario`](#vvm_getcurrentscenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vvm/getVolume`](#vvm_getvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vvm/listScenarios`](#vvm_listscenarios) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vvm/offsetVolume`](#vvm_offsetvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vvm/setCurrentScenario`](#vvm_setcurrentscenario) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vvm/setVolume`](#vvm_setvolume) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |
| [`vvm/status`](#vvm_status) | public |  | audio | Method on com.palm.audio (from on-device permission registry; parameters undocumented). |

<a id="dtmf_busytone"></a>
## `dtmf/busyTone`

`luna://com.palm.audio/dtmf/busyTone`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/dtmf/busyTone '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dtmf_emergencycall"></a>
## `dtmf/emergencyCall`

`luna://com.palm.audio/dtmf/emergencyCall`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/dtmf/emergencyCall '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dtmf_playalert"></a>
## `dtmf/playAlert`

`luna://com.palm.audio/dtmf/playAlert`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/dtmf/playAlert '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dtmf_playdtmf"></a>
## `dtmf/playDTMF`

`luna://com.palm.audio/dtmf/playDTMF`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/dtmf/playDTMF '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dtmf_stopdtmf"></a>
## `dtmf/stopDTMF`

`luna://com.palm.audio/dtmf/stopDTMF`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/dtmf/stopDTMF '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_broadcastevent"></a>
## `media/broadcastEvent`

`luna://com.palm.audio/media/broadcastEvent`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/broadcastEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_disablescenario"></a>
## `media/disableScenario`

`luna://com.palm.audio/media/disableScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/disableScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_enablescenario"></a>
## `media/enableScenario`

`luna://com.palm.audio/media/enableScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/enableScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_getcurrentscenario"></a>
## `media/getCurrentScenario`

`luna://com.palm.audio/media/getCurrentScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/getCurrentScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_getlatency"></a>
## `media/getLatency`

`luna://com.palm.audio/media/getLatency`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/getLatency '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_getmicgain"></a>
## `media/getMicGain`

`luna://com.palm.audio/media/getMicGain`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/getMicGain '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_getvolume"></a>
## `media/getVolume`

`luna://com.palm.audio/media/getVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/getVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_listscenarios"></a>
## `media/listScenarios`

`luna://com.palm.audio/media/listScenarios`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/listScenarios '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_lockvolumekeys"></a>
## `media/lockVolumeKeys`

`luna://com.palm.audio/media/lockVolumeKeys`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/lockVolumeKeys '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_offsetmicgain"></a>
## `media/offsetMicGain`

`luna://com.palm.audio/media/offsetMicGain`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/offsetMicGain '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_offsetvolume"></a>
## `media/offsetVolume`

`luna://com.palm.audio/media/offsetVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/offsetVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_setcurrentscenario"></a>
## `media/setCurrentScenario`

`luna://com.palm.audio/media/setCurrentScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/setCurrentScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_setlatency"></a>
## `media/setLatency`

`luna://com.palm.audio/media/setLatency`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/setLatency '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_setmicgain"></a>
## `media/setMicGain`

`luna://com.palm.audio/media/setMicGain`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/setMicGain '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_setvolume"></a>
## `media/setVolume`

`luna://com.palm.audio/media/setVolume`

Sets media volume (0-100)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `volume` | integer 0-100 |

```sh
luna-send -n 1 palm://com.palm.audio/media/setVolume '{"volume":80}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="media_status"></a>
## `media/status`

`luna://com.palm.audio/media/status`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/media/status '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="nav_status"></a>
## `nav/status`

`luna://com.palm.audio/nav/status`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/nav/status '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notification_getvolume"></a>
## `notification/getVolume`

`luna://com.palm.audio/notification/getVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/notification/getVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notification_offsetvolume"></a>
## `notification/offsetVolume`

`luna://com.palm.audio/notification/offsetVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/notification/offsetVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notification_setvolume"></a>
## `notification/setVolume`

`luna://com.palm.audio/notification/setVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/notification/setVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_bluetoothaudiopropertiesset"></a>
## `phone/bluetoothAudioPropertiesSet`

`luna://com.palm.audio/phone/bluetoothAudioPropertiesSet`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/bluetoothAudioPropertiesSet '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_broadcastevent"></a>
## `phone/broadcastEvent`

`luna://com.palm.audio/phone/broadcastEvent`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/broadcastEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_callstatusupdate"></a>
## `phone/CallStatusUpdate`

`luna://com.palm.audio/phone/CallStatusUpdate`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/CallStatusUpdate '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_disablescenario"></a>
## `phone/disableScenario`

`luna://com.palm.audio/phone/disableScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/disableScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_enablescenario"></a>
## `phone/enableScenario`

`luna://com.palm.audio/phone/enableScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/enableScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_getcurrentscenario"></a>
## `phone/getCurrentScenario`

`luna://com.palm.audio/phone/getCurrentScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/getCurrentScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_getvolume"></a>
## `phone/getVolume`

`luna://com.palm.audio/phone/getVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/getVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_hacget"></a>
## `phone/hacGet`

`luna://com.palm.audio/phone/hacGet`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/hacGet '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_hacset"></a>
## `phone/hacSet`

`luna://com.palm.audio/phone/hacSet`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/hacSet '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_listscenarios"></a>
## `phone/listScenarios`

`luna://com.palm.audio/phone/listScenarios`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/listScenarios '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_lockvolumekeys"></a>
## `phone/lockVolumeKeys`

`luna://com.palm.audio/phone/lockVolumeKeys`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/lockVolumeKeys '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_museset"></a>
## `phone/museSet`

`luna://com.palm.audio/phone/museSet`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/museSet '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_offsetvolume"></a>
## `phone/offsetVolume`

`luna://com.palm.audio/phone/offsetVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/offsetVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_setcurrentscenario"></a>
## `phone/setCurrentScenario`

`luna://com.palm.audio/phone/setCurrentScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/setCurrentScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_setmuted"></a>
## `phone/setMuted`

`luna://com.palm.audio/phone/setMuted`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/setMuted '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_setvolume"></a>
## `phone/setVolume`

`luna://com.palm.audio/phone/setVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/setVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="phone_status"></a>
## `phone/status`

`luna://com.palm.audio/phone/status`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/phone/status '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ringtone_getvolume"></a>
## `ringtone/getVolume`

`luna://com.palm.audio/ringtone/getVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/ringtone/getVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ringtone_lockvolumekeys"></a>
## `ringtone/lockVolumeKeys`

`luna://com.palm.audio/ringtone/lockVolumeKeys`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/ringtone/lockVolumeKeys '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ringtone_offsetvolume"></a>
## `ringtone/offsetVolume`

`luna://com.palm.audio/ringtone/offsetVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/ringtone/offsetVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ringtone_setmuted"></a>
## `ringtone/setMuted`

`luna://com.palm.audio/ringtone/setMuted`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/ringtone/setMuted '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ringtone_setvolume"></a>
## `ringtone/setVolume`

`luna://com.palm.audio/ringtone/setVolume`

Sets ringtone volume (0-100)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `volume` | integer 0-100 |

```sh
luna-send -n 1 palm://com.palm.audio/ringtone/setVolume '{"volume":100}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="ringtone_status"></a>
## `ringtone/status`

`luna://com.palm.audio/ringtone/status`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/ringtone/status '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_get"></a>
## `state/get`

`luna://com.palm.audio/state/get`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/state/get '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_getpreference"></a>
## `state/getPreference`

`luna://com.palm.audio/state/getPreference`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/state/getPreference '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_pulse_setfilter"></a>
## `state/pulse/setFilter`

`luna://com.palm.audio/state/pulse/setFilter`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/state/pulse/setFilter '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_pulse_sinkstatus"></a>
## `state/pulse/sinkStatus`

`luna://com.palm.audio/state/pulse/sinkStatus`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/state/pulse/sinkStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_pulse_suspend"></a>
## `state/pulse/suspend`

`luna://com.palm.audio/state/pulse/suspend`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/state/pulse/suspend '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_set"></a>
## `state/set`

`luna://com.palm.audio/state/set`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/state/set '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_setpreference"></a>
## `state/setPreference`

`luna://com.palm.audio/state/setPreference`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/state/setPreference '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="state_setsoundprofile"></a>
## `state/setSoundProfile`

`luna://com.palm.audio/state/setSoundProfile`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/state/setSoundProfile '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_getvolume"></a>
## `system/getVolume`

`luna://com.palm.audio/system/getVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/system/getVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_offsetvolume"></a>
## `system/offsetVolume`

`luna://com.palm.audio/system/offsetVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/system/offsetVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_setmuted"></a>
## `system/setMuted`

`luna://com.palm.audio/system/setMuted`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/system/setMuted '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_setvolume"></a>
## `system/setVolume`

`luna://com.palm.audio/system/setVolume`

Sets system volume (0-100)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `volume` | integer 0-100 |

```sh
luna-send -n 1 palm://com.palm.audio/system/setVolume '{"volume":80}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="system_status"></a>
## `system/status`

`luna://com.palm.audio/system/status`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/system/status '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="systemsounds_playfeedback"></a>
## `systemsounds/playFeedback`

`luna://com.palm.audio/systemsounds/playFeedback`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/systemsounds/playFeedback '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="telephony_answered"></a>
## `telephony/answered`

`luna://com.palm.audio/telephony/answered`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/telephony/answered '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="telephony_callaudio"></a>
## `telephony/callAudio`

`luna://com.palm.audio/telephony/callAudio`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/telephony/callAudio '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="telephony_startcall"></a>
## `telephony/startCall`

`luna://com.palm.audio/telephony/startCall`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/telephony/startCall '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="udev_event"></a>
## `udev/event`

`luna://com.palm.audio/udev/event`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/udev/event '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vibrate_get"></a>
## `vibrate/get`

`luna://com.palm.audio/vibrate/get`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vibrate/get '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vibrate_set"></a>
## `vibrate/set`

`luna://com.palm.audio/vibrate/set`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vibrate/set '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_broadcastevent"></a>
## `voiceCommand/broadcastEvent`

`luna://com.palm.audio/voiceCommand/broadcastEvent`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/broadcastEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_control"></a>
## `voiceCommand/control`

`luna://com.palm.audio/voiceCommand/control`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/control '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_disablescenario"></a>
## `voiceCommand/disableScenario`

`luna://com.palm.audio/voiceCommand/disableScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/disableScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_enablescenario"></a>
## `voiceCommand/enableScenario`

`luna://com.palm.audio/voiceCommand/enableScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/enableScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_getcurrentscenario"></a>
## `voiceCommand/getCurrentScenario`

`luna://com.palm.audio/voiceCommand/getCurrentScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/getCurrentScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_getmicgain"></a>
## `voiceCommand/getMicGain`

`luna://com.palm.audio/voiceCommand/getMicGain`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/getMicGain '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_getvolume"></a>
## `voiceCommand/getVolume`

`luna://com.palm.audio/voiceCommand/getVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/getVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_listscenarios"></a>
## `voiceCommand/listScenarios`

`luna://com.palm.audio/voiceCommand/listScenarios`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/listScenarios '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_offsetmicgain"></a>
## `voiceCommand/offsetMicGain`

`luna://com.palm.audio/voiceCommand/offsetMicGain`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/offsetMicGain '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_offsetvolume"></a>
## `voiceCommand/offsetVolume`

`luna://com.palm.audio/voiceCommand/offsetVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/offsetVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_setcurrentscenario"></a>
## `voiceCommand/setCurrentScenario`

`luna://com.palm.audio/voiceCommand/setCurrentScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/setCurrentScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_setmicgain"></a>
## `voiceCommand/setMicGain`

`luna://com.palm.audio/voiceCommand/setMicGain`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/setMicGain '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_setvolume"></a>
## `voiceCommand/setVolume`

`luna://com.palm.audio/voiceCommand/setVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/setVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="voicecommand_status"></a>
## `voiceCommand/status`

`luna://com.palm.audio/voiceCommand/status`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/voiceCommand/status '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vvm_broadcastevent"></a>
## `vvm/broadcastEvent`

`luna://com.palm.audio/vvm/broadcastEvent`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vvm/broadcastEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vvm_control"></a>
## `vvm/control`

`luna://com.palm.audio/vvm/control`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vvm/control '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vvm_disablescenario"></a>
## `vvm/disableScenario`

`luna://com.palm.audio/vvm/disableScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vvm/disableScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vvm_enablescenario"></a>
## `vvm/enableScenario`

`luna://com.palm.audio/vvm/enableScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vvm/enableScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vvm_getcurrentscenario"></a>
## `vvm/getCurrentScenario`

`luna://com.palm.audio/vvm/getCurrentScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vvm/getCurrentScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vvm_getvolume"></a>
## `vvm/getVolume`

`luna://com.palm.audio/vvm/getVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vvm/getVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vvm_listscenarios"></a>
## `vvm/listScenarios`

`luna://com.palm.audio/vvm/listScenarios`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vvm/listScenarios '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vvm_offsetvolume"></a>
## `vvm/offsetVolume`

`luna://com.palm.audio/vvm/offsetVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vvm/offsetVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vvm_setcurrentscenario"></a>
## `vvm/setCurrentScenario`

`luna://com.palm.audio/vvm/setCurrentScenario`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vvm/setCurrentScenario '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vvm_setvolume"></a>
## `vvm/setVolume`

`luna://com.palm.audio/vvm/setVolume`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vvm/setVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="vvm_status"></a>
## `vvm/status`

`luna://com.palm.audio/vvm/status`

Method on com.palm.audio (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.audio/vvm/status '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
