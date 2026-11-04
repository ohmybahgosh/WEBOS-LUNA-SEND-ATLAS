# `com.webos.service.audio`

181 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`alarm/getAlarmOn`](#alarm_getalarmon) | private |  | audio | Method registered by com.webos.service.audio (category '/alarm') |
| [`alarm/getVolume`](#alarm_getvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/alarm') |
| [`alarm/offsetVolume`](#alarm_offsetvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/alarm') |
| [`alarm/setAlarmOn`](#alarm_setalarmon) | private |  | audio | Method registered by com.webos.service.audio (category '/alarm') |
| [`alarm/setMuted`](#alarm_setmuted) | private |  | audio | Method registered by com.webos.service.audio (category '/alarm') |
| [`alarm/setVolume`](#alarm_setvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/alarm') |
| [`alarm/status`](#alarm_status) | private |  | audio | Method registered by com.webos.service.audio (category '/alarm') |
| [`alert/getVolume`](#alert_getvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/alert') |
| [`alert/offsetVolume`](#alert_offsetvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/alert') |
| [`alert/setMuted`](#alert_setmuted) | private |  | audio | Method registered by com.webos.service.audio (category '/alert') |
| [`alert/setVolume`](#alert_setvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/alert') |
| [`alert/status`](#alert_status) | private |  | audio | Method registered by com.webos.service.audio (category '/alert') |
| [`audio`](#audio) | unknown |  | audio | Object returned by the UMI/getStatus. |
| [`broadcastEvent`](#broadcastevent) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`checkAudioEffectStatus`](#checkaudioeffectstatus) | public |  | audio | Check the status of an audio effect. |
| [`controlPlayback`](#controlplayback) | public |  | audio | Controls playback operations like stop, pause/resume for audio samples that are played using the playSound method. |
| [`deviceList`](#devicelist) | unknown |  | audio | Provides information about all supported input and output devices and their type and connection status. |
| [`disableScenario`](#disablescenario) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`dtmf/busyTone`](#dtmf_busytone) | private |  | audio | Method registered by com.webos.service.audio (category '/dtmf') |
| [`dtmf/emergencyCall`](#dtmf_emergencycall) | private |  | audio | Method registered by com.webos.service.audio (category '/dtmf') |
| [`dtmf/playAlert`](#dtmf_playalert) | private |  | audio | Method registered by com.webos.service.audio (category '/dtmf') |
| [`dtmf/playDTMF`](#dtmf_playdtmf) | private |  | audio | Method registered by com.webos.service.audio (category '/dtmf') |
| [`dtmf/stopDTMF`](#dtmf_stopdtmf) | private |  | audio | Method registered by com.webos.service.audio (category '/dtmf') |
| [`effectStatus`](#effectstatus) | unknown |  | audio | Provides the name of the audio effects and their status. |
| [`enableScenario`](#enablescenario) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`getAudioEffectList`](#getaudioeffectlist) | public |  | audio | Lists all the supported audio effects. |
| [`getAudioEffectsStatus`](#getaudioeffectsstatus) | public | yes | audio | Gets the status of all the audio effects. |
| [`getCurrentScenario`](#getcurrentscenario) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`getInputVolume`](#getinputvolume) | public | yes | audio | Gets the input volume for audio streams. |
| [`getPlaybackStatus`](#getplaybackstatus) | public | yes | audio | Checks the status of playback which is played using playSound method. |
| [`getSoundInput`](#getsoundinput) | public | yes | audio | Gets the current active sound input device. |
| [`getSoundOut`](#getsoundout) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`getSoundOutput`](#getsoundoutput) | public | yes | audio | Gets the current active sound output device. |
| [`getSourceInputVolume`](#getsourceinputvolume) | public | yes | audio | Gets input volume of the source. |
| [`getSourceStatus`](#getsourcestatus) | public | yes | audio | Gets the status of the source. |
| [`getStreamStatus`](#getstreamstatus) | public | yes | audio | Gets the status and information of the active stream. |
| [`getVolume`](#getvolume) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`listScenarios`](#listscenarios) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`listSupportedDevices`](#listsupporteddevices) | public | yes | audio | Gets the list of supported audio input and output devices and their connection status. |
| [`master/getMicVolume`](#master_getmicvolume) | public | yes | audio | Gets volume of currently active microphone input. |
| [`master/getVolume`](#master_getvolume) | public | yes | audio | Gives the current master volume of the audio output device. |
| [`master/muteMic`](#master_mutemic) | public |  | audio | Mutes/unmutes the currently active microphone input device. |
| [`master/muteVolume`](#master_mutevolume) | public |  | audio | Mutes or unmutes the master volume of the audio output device. |
| [`master/setMicVolume`](#master_setmicvolume) | public |  | audio | Sets the volume of the currently active microphone input device. |
| [`master/setVolume`](#master_setvolume) | public |  | audio | Sets the master volume of the audio output device. |
| [`master/volumeDown`](#master_volumedown) | public |  | audio | Reduces the master volume of the device. |
| [`master/volumeUp`](#master_volumeup) | public |  | audio | Increases the master volume of the device. |
| [`media/broadcastEvent`](#media_broadcastevent) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/disableScenario`](#media_disablescenario) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/enableScenario`](#media_enablescenario) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/getCurrentScenario`](#media_getcurrentscenario) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/getLatency`](#media_getlatency) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/getMicGain`](#media_getmicgain) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/getVolume`](#media_getvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/listScenarios`](#media_listscenarios) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/lockVolumeKeys`](#media_lockvolumekeys) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/offsetMicGain`](#media_offsetmicgain) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/offsetVolume`](#media_offsetvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/setCurrentScenario`](#media_setcurrentscenario) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/setLatency`](#media_setlatency) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/setMicGain`](#media_setmicgain) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`media/setVolume`](#media_setvolume) | public |  | audio | Sets the volume level of the current or the specified scenario. |
| [`media/status`](#media_status) | private |  | audio | Method registered by com.webos.service.audio (category '/media') |
| [`muteSink`](#mutesink) | public |  | audio | Mutes the sink volume. |
| [`muteSource`](#mutesource) | public |  | audio | Mutes the source volume. |
| [`nav/status`](#nav_status) | private |  | audio | Method registered by com.webos.service.audio (category '/nav') |
| [`notification/getVolume`](#notification_getvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/notification') |
| [`notification/offsetVolume`](#notification_offsetvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/notification') |
| [`notification/setVolume`](#notification_setvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/notification') |
| [`notification/status`](#notification_status) | private |  | audio | Method registered by com.webos.service.audio (category '/notification') |
| [`phone/bluetoothAudioPropertiesSet`](#phone_bluetoothaudiopropertiesset) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/broadcastEvent`](#phone_broadcastevent) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/CallStatusUpdate`](#phone_callstatusupdate) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/disableScenario`](#phone_disablescenario) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/enableScenario`](#phone_enablescenario) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/getCurrentScenario`](#phone_getcurrentscenario) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/getVolume`](#phone_getvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/hacGet`](#phone_hacget) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/hacSet`](#phone_hacset) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/listScenarios`](#phone_listscenarios) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/lockVolumeKeys`](#phone_lockvolumekeys) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/museSet`](#phone_museset) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/offsetVolume`](#phone_offsetvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/setCurrentScenario`](#phone_setcurrentscenario) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/setMuted`](#phone_setmuted) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/setVolume`](#phone_setvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`phone/status`](#phone_status) | private |  | audio | Method registered by com.webos.service.audio (category '/phone') |
| [`playSound`](#playsound) | public |  | audio | Plays PCM audio files through PulseAudio sound server. |
| [`registerTrack`](#registertrack) | public |  | audio | Registers a playback by an application/service and returns a track ID. The track ID must be used to control the volume of that particular pl |
| [`ringtone/getVolume`](#ringtone_getvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/ringtone') |
| [`ringtone/lockVolumeKeys`](#ringtone_lockvolumekeys) | private |  | audio | Method registered by com.webos.service.audio (category '/ringtone') |
| [`ringtone/offsetVolume`](#ringtone_offsetvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/ringtone') |
| [`ringtone/setMuted`](#ringtone_setmuted) | private |  | audio | Method registered by com.webos.service.audio (category '/ringtone') |
| [`ringtone/setVolume`](#ringtone_setvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/ringtone') |
| [`ringtone/status`](#ringtone_status) | private |  | audio | Method registered by com.webos.service.audio (category '/ringtone') |
| [`setAudioEffect`](#setaudioeffect) | public |  | audio | Sets the status of an audio effect. |
| [`setAudioEqualizerBandLevel`](#setaudioequalizerbandlevel) | public |  | audio | Sets the equalizer band level. |
| [`setAudioEqualizerPreset`](#setaudioequalizerpreset) | public |  | audio | Sets the equalizer preset value. |
| [`setCurrentScenario`](#setcurrentscenario) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`setInputVolume`](#setinputvolume) | public |  | audio | Sets the input volume for audio streams. |
| [`setMuted`](#setmuted) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`setSoundInput`](#setsoundinput) | public |  | audio | Sets the sound input device for recording. |
| [`setSoundOutput`](#setsoundoutput) | public |  | audio | Sets the sound output device. |
| [`setSourceInputVolume`](#setsourceinputvolume) | public |  | audio | Sets input volume of the source. |
| [`setTrackVolume`](#settrackvolume) | public |  | audio | Sets the volume for a specific playback that is identified by the track ID (obtained by using registerTrack() ). The effective playback volu |
| [`setVolume`](#setvolume) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`setVolume2`](#setvolume2) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`soundSettings/setSoundOut`](#soundsettings_setsoundout) | public |  | audio | Sets the audio output device. |
| [`sourceObject`](#sourceobject) | unknown |  | audio | Indicates the list of active source connection |
| [`state/get`](#state_get) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/getPreference`](#state_getpreference) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/getSoundProfile`](#state_getsoundprofile) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/getTouchSound`](#state_gettouchsound) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/getVolumeBalance`](#state_getvolumebalance) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/loadRTPModule`](#state_loadrtpmodule) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/loopback`](#state_loopback) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/pulse/setFilter`](#state_pulse_setfilter) | private |  | audio | Method registered by com.webos.service.audio (category '/state/pulse') |
| [`state/pulse/sinkStatus`](#state_pulse_sinkstatus) | private |  | audio | Method registered by com.webos.service.audio (category '/state/pulse') |
| [`state/pulse/suspend`](#state_pulse_suspend) | private |  | audio | Method registered by com.webos.service.audio (category '/state/pulse') |
| [`state/set`](#state_set) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/setNREC`](#state_setnrec) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/setPreference`](#state_setpreference) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/setRingerSwitch`](#state_setringerswitch) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/setSoundProfile`](#state_setsoundprofile) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/setTouchSound`](#state_settouchsound) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/setVolumeBalance`](#state_setvolumebalance) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/unloadRTPModule`](#state_unloadrtpmodule) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`state/volumeRamp`](#state_volumeramp) | private |  | audio | Method registered by com.webos.service.audio (category '/state') |
| [`status`](#status) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`streamObject`](#streamobject) | unknown |  | audio | Contains the list of active connections. |
| [`system/getVolume`](#system_getvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/system') |
| [`system/offsetVolume`](#system_offsetvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/system') |
| [`system/setMuted`](#system_setmuted) | private |  | audio | Method registered by com.webos.service.audio (category '/system') |
| [`system/setVolume`](#system_setvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/system') |
| [`system/status`](#system_status) | private |  | audio | Method registered by com.webos.service.audio (category '/system') |
| [`systemsounds/playFeedback`](#systemsounds_playfeedback) | public |  | audio | Plays the various system alert sounds based on the name passed to it. |
| [`timer/getTimerOn`](#timer_gettimeron) | private |  | audio | Method registered by com.webos.service.audio (category '/timer') |
| [`timer/getVolume`](#timer_getvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/timer') |
| [`timer/offsetVolume`](#timer_offsetvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/timer') |
| [`timer/setMuted`](#timer_setmuted) | private |  | audio | Method registered by com.webos.service.audio (category '/timer') |
| [`timer/setTimerOn`](#timer_settimeron) | private |  | audio | Method registered by com.webos.service.audio (category '/timer') |
| [`timer/setVolume`](#timer_setvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/timer') |
| [`timer/status`](#timer_status) | private |  | audio | Method registered by com.webos.service.audio (category '/timer') |
| [`tonegenerator/playCallertone`](#tonegenerator_playcallertone) | private |  | audio | Method registered by com.webos.service.audio (category '/tonegenerator') |
| [`udev/event`](#udev_event) | public |  | audio | Gives the audiod information regarding the USB Mic/Headset Connected/Disconnected events based on the udev rules. It also provides the sound |
| [`UMI/connect`](#umi_connect) | public |  | audio | Establishes connection for the audio resource. |
| [`UMI/disconnect`](#umi_disconnect) | public |  | audio | Disconnects the connection. |
| [`UMI/getStatus`](#umi_getstatus) | public |  | audio | Shows the connection status of audio resources. |
| [`UMI/mute`](#umi_mute) | public |  | audio | Mutes or unmutes the input volume of the requested connection. Note: This method is added for future-use. It does not have any impact on the |
| [`unregisterTrack`](#unregistertrack) | public |  | audio | Unregisters a playback by an application/service. |
| [`vibrate/get`](#vibrate_get) | private |  | audio | Method registered by com.webos.service.audio (category '/vibrate') |
| [`vibrate/set`](#vibrate_set) | private |  | audio | Method registered by com.webos.service.audio (category '/vibrate') |
| [`voiceCommand/broadcastEvent`](#voicecommand_broadcastevent) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/control`](#voicecommand_control) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/disableScenario`](#voicecommand_disablescenario) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/enableScenario`](#voicecommand_enablescenario) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/getCurrentScenario`](#voicecommand_getcurrentscenario) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/getMicGain`](#voicecommand_getmicgain) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/getVolume`](#voicecommand_getvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/listScenarios`](#voicecommand_listscenarios) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/offsetMicGain`](#voicecommand_offsetmicgain) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/offsetVolume`](#voicecommand_offsetvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/setCurrentScenario`](#voicecommand_setcurrentscenario) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/setMicGain`](#voicecommand_setmicgain) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/setVolume`](#voicecommand_setvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`voiceCommand/status`](#voicecommand_status) | private |  | audio | Method registered by com.webos.service.audio (category '/voiceCommand') |
| [`volumeDown`](#volumedown) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`volumeKeeping`](#volumekeeping) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`VolumeStatus`](#volumestatus) | unknown |  | audio | Provides the volume details of the target sound output device. |
| [`volumeUp`](#volumeup) | private |  | audio | Method registered by com.webos.service.audio (root category) |
| [`vvm/broadcastEvent`](#vvm_broadcastevent) | private |  | audio | Method registered by com.webos.service.audio (category '/vvm') |
| [`vvm/control`](#vvm_control) | private |  | audio | Method registered by com.webos.service.audio (category '/vvm') |
| [`vvm/disableScenario`](#vvm_disablescenario) | private |  | audio | Method registered by com.webos.service.audio (category '/vvm') |
| [`vvm/enableScenario`](#vvm_enablescenario) | private |  | audio | Method registered by com.webos.service.audio (category '/vvm') |
| [`vvm/getCurrentScenario`](#vvm_getcurrentscenario) | private |  | audio | Method registered by com.webos.service.audio (category '/vvm') |
| [`vvm/getVolume`](#vvm_getvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/vvm') |
| [`vvm/listScenarios`](#vvm_listscenarios) | private |  | audio | Method registered by com.webos.service.audio (category '/vvm') |
| [`vvm/offsetVolume`](#vvm_offsetvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/vvm') |
| [`vvm/setCurrentScenario`](#vvm_setcurrentscenario) | private |  | audio | Method registered by com.webos.service.audio (category '/vvm') |
| [`vvm/setVolume`](#vvm_setvolume) | private |  | audio | Method registered by com.webos.service.audio (category '/vvm') |
| [`vvm/status`](#vvm_status) | private |  | audio | Method registered by com.webos.service.audio (category '/vvm') |

<a id="alarm_getalarmon"></a>
## `alarm/getAlarmOn`

`luna://com.webos.service.audio/alarm/getAlarmOn`

Method registered by com.webos.service.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/getAlarmOn '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_getvolume"></a>
## `alarm/getVolume`

`luna://com.webos.service.audio/alarm/getVolume`

Method registered by com.webos.service.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_offsetvolume"></a>
## `alarm/offsetVolume`

`luna://com.webos.service.audio/alarm/offsetVolume`

Method registered by com.webos.service.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setalarmon"></a>
## `alarm/setAlarmOn`

`luna://com.webos.service.audio/alarm/setAlarmOn`

Method registered by com.webos.service.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/setAlarmOn '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setmuted"></a>
## `alarm/setMuted`

`luna://com.webos.service.audio/alarm/setMuted`

Method registered by com.webos.service.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setvolume"></a>
## `alarm/setVolume`

`luna://com.webos.service.audio/alarm/setVolume`

Method registered by com.webos.service.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_status"></a>
## `alarm/status`

`luna://com.webos.service.audio/alarm/status`

Method registered by com.webos.service.audio (category '/alarm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_getvolume"></a>
## `alert/getVolume`

`luna://com.webos.service.audio/alert/getVolume`

Method registered by com.webos.service.audio (category '/alert')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alert/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_offsetvolume"></a>
## `alert/offsetVolume`

`luna://com.webos.service.audio/alert/offsetVolume`

Method registered by com.webos.service.audio (category '/alert')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alert/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_setmuted"></a>
## `alert/setMuted`

`luna://com.webos.service.audio/alert/setMuted`

Method registered by com.webos.service.audio (category '/alert')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alert/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_setvolume"></a>
## `alert/setVolume`

`luna://com.webos.service.audio/alert/setVolume`

Method registered by com.webos.service.audio (category '/alert')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alert/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_status"></a>
## `alert/status`

`luna://com.webos.service.audio/alert/status`

Method registered by com.webos.service.audio (category '/alert')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alert/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="audio"></a>
## `audio`

`luna://com.webos.service.audio/audio`

Object returned by the UMI/getStatus.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.audio/audio '{}'
```

> Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="broadcastevent"></a>
## `broadcastEvent`

`luna://com.webos.service.audio/broadcastEvent`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="checkaudioeffectstatus"></a>
## `checkAudioEffectStatus`

`luna://com.webos.service.audio/checkAudioEffectStatus`

Check the status of an audio effect.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `effectName` | String (required) Audio effect name. Possible values are: speech enhancement gain control beamforming dynamic compressor equalizer bass boost |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/checkAudioEffectStatus '{"effectName":"speech enhancement"}
```

> ACG: audio.query \| Returns: enabled:Boolean; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="controlplayback"></a>
## `controlPlayback`

`luna://com.webos.service.audio/controlPlayback`

Controls playback operations like stop, pause/resume for audio samples that are played using the playSound method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `playbackId` | String (required) Playback ID of the played stream. |
| `requestType` | String (required) Audio control type. Possible formats are: pause resume stop |

```sh
luna-send -n 1 luna://com.webos.service.audio/controlPlayback '{"playbackId":"_utg7654h", "requestType":"stop" }
```

> ACG: audio.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="devicelist"></a>
## `deviceList`

`luna://com.webos.service.audio/deviceList`

Provides information about all supported input and output devices and their type and connection status.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.audio/deviceList '{}'
```

> Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="disablescenario"></a>
## `disableScenario`

`luna://com.webos.service.audio/disableScenario`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_busytone"></a>
## `dtmf/busyTone`

`luna://com.webos.service.audio/dtmf/busyTone`

Method registered by com.webos.service.audio (category '/dtmf')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/dtmf/busyTone '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_emergencycall"></a>
## `dtmf/emergencyCall`

`luna://com.webos.service.audio/dtmf/emergencyCall`

Method registered by com.webos.service.audio (category '/dtmf')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/dtmf/emergencyCall '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_playalert"></a>
## `dtmf/playAlert`

`luna://com.webos.service.audio/dtmf/playAlert`

Method registered by com.webos.service.audio (category '/dtmf')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/dtmf/playAlert '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_playdtmf"></a>
## `dtmf/playDTMF`

`luna://com.webos.service.audio/dtmf/playDTMF`

Method registered by com.webos.service.audio (category '/dtmf')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/dtmf/playDTMF '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_stopdtmf"></a>
## `dtmf/stopDTMF`

`luna://com.webos.service.audio/dtmf/stopDTMF`

Method registered by com.webos.service.audio (category '/dtmf')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/dtmf/stopDTMF '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="effectstatus"></a>
## `effectStatus`

`luna://com.webos.service.audio/effectStatus`

Provides the name of the audio effects and their status.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.audio/effectStatus '{}'
```

> Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="enablescenario"></a>
## `enableScenario`

`luna://com.webos.service.audio/enableScenario`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getaudioeffectlist"></a>
## `getAudioEffectList`

`luna://com.webos.service.audio/getAudioEffectList`

Lists all the supported audio effects.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented

```sh
luna-send -f -n 1 luna://com.webos.service.audio/getAudioEffectList '{}
```

> ACG: audio.query \| Returns: audioEffectList:String array; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getaudioeffectsstatus"></a>
## `getAudioEffectsStatus`

`luna://com.webos.service.audio/getAudioEffectsStatus`

Gets the status of all the audio effects.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 24+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications on changes to the status of audio effects. Possible values are: true: Subscribed. false: (default) Not subscribed. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/getAudioEffectsStatus '{"subscribe":false }
```

> ACG: audio.query \| Returns: subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String; status:Object array: effectStatus \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getcurrentscenario"></a>
## `getCurrentScenario`

`luna://com.webos.service.audio/getCurrentScenario`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getinputvolume"></a>
## `getInputVolume`

`luna://com.webos.service.audio/getInputVolume`

Gets the input volume for audio streams.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true: Subscribed to get notifications. false: Not subscribed (default). |
| `streamType` | String (required) Indicates the stream name of the input volume to be received. Possible values are: palerts pfeedback pringtones pmedia pdefaultapp peffects pvoicerecognition ptts default1 default2 tts1 tts2 |

```sh
luna-send -i -f luna://com.webos.service.audio/getInputVolume '{ "streamType":"default1", "subscribe":true }
```

> ACG: audio.query \| Returns: returnValue:Boolean; subscribed:Boolean; streamType:String; volume:Number; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getplaybackstatus"></a>
## `getPlaybackStatus`

`luna://com.webos.service.audio/getPlaybackStatus`

Checks the status of playback which is played using playSound method.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `playbackId` | String (required) Playback ID of the played stream. |
| `subscribe` | Boolean (optional) Subscribe for notifications on changes. Possible values are: true: Subscribed. false: (default) Not subscribed. |

```sh
luna-send -n 1 luna://com.webos.service.audio/getPlaybackStatus '{ "playbackId":"_utg7654h", "subscribe":false }
```

> ACG: audio.previlagequery \| Returns: returnValue:Boolean; subscribed:Boolean; playbackStatus:String; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getsoundinput"></a>
## `getSoundInput`

`luna://com.webos.service.audio/getSoundInput`

Gets the current active sound input device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | String (optional) Subscribe for notifications on changes in the sound input device. Possible values are: true : Subscribed. false : Not subscribed. |
| `displayId` | Number (optional) Display ID with which the sound input device is associated. Possible values are: 0 1 |

```sh
luna-send -n 1 luna://com.webos.service.audio/getSoundInput '{}
```

> ACG: audio.query \| Returns: soundInput:String; returnValue:Boolean; subscribed:Boolean; displayId:Number \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getsoundout"></a>
## `getSoundOut`

`luna://com.webos.service.audio/getSoundOut`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/getSoundOut '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getsoundoutput"></a>
## `getSoundOutput`

`luna://com.webos.service.audio/getSoundOutput`

Gets the current active sound output device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications on changes in the sound output device. Possible values are: true: Subscribed. false (Default): Not subscribed. |
| `displayId` | Number (optional) The display ID with which the sound output device is associated. Possible values are: 0 1 |

```sh
luna-send -n 1 -f luna://com.webos.service.audio/getSoundOutput '{"subscribe":false}
```

> ACG: audio.query \| Returns: returnValue:Boolean; soundOutput:String; subscribed:Boolean; displayId:Number \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getsourceinputvolume"></a>
## `getSourceInputVolume`

`luna://com.webos.service.audio/getSourceInputVolume`

Gets input volume of the source.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sourceType` | String (required) The source for which volume is required. Possible values are: record btcallsource alexa webcall voiceassistance |
| `subscribe` | Boolean (optional) Subscribe for notifications on changes in the source volume. Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send -n -i luna://com.webos.service.audio/getSourceInputVolume '{"sourceType":"record"}
```

> ACG: audio.query \| Returns: subscribed:Boolean; sourceType:String; returnValue:Boolean; volume:Number \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getsourcestatus"></a>
## `getSourceStatus`

`luna://com.webos.service.audio/getSourceStatus`

Gets the status of the source.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sourceType` | String (optional) Type of source. Note: If not specified, all active source details are provided. Possible values are: record btcallsource alexa webcall voiceassistance |
| `subscribe` | Boolean (optional) Subscribe for notifications on changes in the source. Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send -n 1 luna://com.webos.service.audio/getSourceStatus '{"subscribe":true}
```

> ACG: audio.query \| Returns: subscribed:Boolean; returnValue:Boolean; sourceObject:Object array: sourceObject \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getstreamstatus"></a>
## `getStreamStatus`

`luna://com.webos.service.audio/getStreamStatus`

Gets the status and information of the active stream.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true: Subscribed. false (Default): Not subscribed. |
| `streamType` | String (optional) Indicates the type of the stream. Note: If not specified, all active stream details are provided. |

```sh
luna-send -i -f luna://com.webos.service.audio/getStreamStatus '{ "streamType":"default1", "subscribe":true }
```

> ACG: audio.query \| Returns: returnValue:Boolean; subscribed:Boolean; streamObject:Object array: streamObject \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getvolume"></a>
## `getVolume`

`luna://com.webos.service.audio/getVolume`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listscenarios"></a>
## `listScenarios`

`luna://com.webos.service.audio/listScenarios`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listsupporteddevices"></a>
## `listSupportedDevices`

`luna://com.webos.service.audio/listSupportedDevices`

Gets the list of supported audio input and output devices and their connection status.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 20+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications on changes. Possible values are: true: Subscribed. false: Not subscribed. |
| `query` | String (optional) Requested category of sound devices. Possible values are: input output all (default) |

```sh
luna-send –n –i luna://com.webos.service.audio/listSupportedDevices '{"subscribe":true,"query":"all"}
```

> ACG: audio.query \| Returns: subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String; deviceList:Object array: deviceList \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="master_getmicvolume"></a>
## `master/getMicVolume`

`luna://com.webos.service.audio/master/getMicVolume`

Gets volume of currently active microphone input.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 20+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe for notifications on changes. Possible values are: true: Subscribed. false: Not subscribed. |
| `displayId` | Number (int8_t) (optional) The display associated with the microphone. Possible values are: 0 (default value) 1 |
| `soundInput` | String (optional) Indicates the audio input device. Possible values are: usb_mic0 usb_mic1 pcm_input (available only for OSE Emulator) |

```sh
luna-send –n 1 luna://com.webos.service.audio/master/getMicVolume '{}
```

> ACG: audio.query \| Returns: subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String; soundInput:String; volume:Number (int8_t); muteStatus:Boolean \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="master_getvolume"></a>
## `master/getVolume`

`luna://com.webos.service.audio/master/getVolume`

Gives the current master volume of the audio output device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented, community

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed. false: Not subscribed. |
| `soundOutput` | String (optional) Indicates the audio output device. Possible values are: alsa pcm_output pcm_output1 pcm_headphone usb_speaker0 usb_speaker1 bluetooth_speaker0 |

```sh
luna-send -n i -f luna://com.webos.service.audio/master/getVolume '{"subscribe":true}
```

> ACG: audio.query \| Returns: returnValue:Boolean; volumeStatus:Object: VolumeStatus; callerId:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in \|\| Addressed over SSAP as 'com.webos.service.audio/master/getVolume' in LGTV Companion example scripts (works as an alternative to ssap://audio/*). The audio/* aliases (audio/setVolume etc.) most probably map to these but that mapping is not stated in the sources.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/), [2](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Powershell%20functions.md)

<a id="master_mutemic"></a>
## `master/muteMic`

`luna://com.webos.service.audio/master/muteMic`

Mutes/unmutes the currently active microphone input device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 20+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `displayId` | Number (int8_t) (optional) The display associated with the microphone. Possible values are: 0 (default value) 1 |
| `mute` | Boolean (required) Mute status of the device. Possible values are: true: Muted. false: Not muted. |
| `soundInput` | String (optional) Indicates the audio input device. Possible values are: usb_mic0 usb_mic1 pcm_input (available only for OSE Emulator) |

```sh
luna-send –n 1 luna://com.webos.service.audio/master/muteMic '{"soundInput":"usb_mic0","mute":true}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; soundInput:String; mute:Boolean \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="master_mutevolume"></a>
## `master/muteVolume`

`luna://com.webos.service.audio/master/muteVolume`

Mutes or unmutes the master volume of the audio output device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mute` | Boolean (required) Indicates if the master volume is to be muted. Possible values are: true: Master volume to be muted. false: Master volume not to be muted. |
| `sessionId` | Number (optional) Indicates the display/session applicable to the operation. Note: If not provided, the operation is applied to the audio device connected to both the displays/sessions. Possible values are: 0 1 |
| `soundOutput` | String (required) Indicates the audio output device. Possible values are: pcm_output pcm_output1 pcm_headphone usb_speaker0 usb_speaker1 bluetooth_speaker0 alsa |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/master/muteVolume '{ "soundOutput":"pcm_output", "mute":true, "sessionId":0 }
```

> ACG: audio.operation \| Returns: returnValue:Boolean; mute:Boolean; soundOutput:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="master_setmicvolume"></a>
## `master/setMicVolume`

`luna://com.webos.service.audio/master/setMicVolume`

Sets the volume of the currently active microphone input device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 20+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `displayId` | Number (int8_t) (optional) The display associated with the microphone. Possible values are: 0 (default value) 1 |
| `volume` | Number (int8_t) (required) The volume to be set. Possible values : 0 - 100. |
| `soundInput` | String (optional) Indicates the audio input device. Possible values are: usb_mic0 usb_mic1 pcm_input (available only for OSE Emulator) |

```sh
luna-send –n 1 luna://com.webos.service.audio/master/setMicVolume '{"soundInput":usb_mic0,"volume":50}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; soundInput:String; volume:Number (int8_t) \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="master_setvolume"></a>
## `master/setVolume`

`luna://com.webos.service.audio/master/setVolume`

Sets the master volume of the audio output device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 5+  
- **Confidence:** documented, community

| Param | Type / notes |
|---|---|
| `sessionId` | Number (optional) Indicates the display/session applicable to the operation. Possible values are: 0 (Default) 1 |
| `soundOutput` | String (required) Indicates the target sound output device. Possible values are: pcm_output pcm_output1 pcm_headphone usb_speaker0 usb_speaker1 bluetooth_speaker0 alsa |
| `volume` | Number (required) Indicates the volume level to be set. The value can range from 0 to 100. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/master/setVolume '{ "soundOutput":"pcm_output", "volume":57, "sessionId":0 }
```

> ACG: audio.operation \| Returns: volume:Number; soundOutput:String; returnValue:Boolean \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in \|\| Addressed over SSAP as 'com.webos.service.audio/master/setVolume' in LGTV Companion example scripts (works as an alternative to ssap://audio/*). The audio/* aliases (audio/setVolume etc.) most probably map to these but that mapping is not stated in the sources.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/), [2](https://github.com/diaahussein/WebOS_LG_TV_Scripts/blob/HEAD/README.md), [3](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md), [4](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Powershell%20functions.md)

<a id="master_volumedown"></a>
## `master/volumeDown`

`luna://com.webos.service.audio/master/volumeDown`

Reduces the master volume of the device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented, community

| Param | Type / notes |
|---|---|
| `soundOutput` | String (required) Indicates the audio output device. Possible values are: alsa pcm_output pcm_output1 pcm_headphone usb_speaker0 usb_speaker1 bluetooth_speaker0 |
| `sessionId` | Number (optional) Indicates the display/session applicable to the operation. Possible values are: 0 (Default) 1 |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/master/volumeDown '{"soundOutput":"pcm_output", "sessionId":0}
```

> ACG: audio.operation \| Returns: volume:Number; returnValue:Boolean; soundOutput:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in \|\| Addressed over SSAP as 'com.webos.service.audio/master/volumeDown' in LGTV Companion example scripts (works as an alternative to ssap://audio/*). The audio/* aliases (audio/setVolume etc.) most probably map to these but that mapping is not stated in the sources.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/), [2](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Powershell%20functions.md)

<a id="master_volumeup"></a>
## `master/volumeUp`

`luna://com.webos.service.audio/master/volumeUp`

Increases the master volume of the device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented, community

| Param | Type / notes |
|---|---|
| `sessionId` | Number (optional) Indicates the display/session applicable to the operation. Possible values are: 0 (Default) 0 |
| `soundOutput` | String (optional) Indicates the audio output device Possible values are: alsa pcm_output pcm_output1 pcm_headphone usb_speaker0 usb_speaker1 bluetooth_speaker0 |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/master/volumeUp '{ "soundOutput":"pcm_output", "sessionId":0 }
```

> ACG: audio.operation \| Returns: volume:Number; returnValue:Boolean; soundOutput:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in \|\| Addressed over SSAP as 'com.webos.service.audio/master/volumeUp' in LGTV Companion example scripts (works as an alternative to ssap://audio/*). The audio/* aliases (audio/setVolume etc.) most probably map to these but that mapping is not stated in the sources.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/), [2](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Powershell%20functions.md)

<a id="media_broadcastevent"></a>
## `media/broadcastEvent`

`luna://com.webos.service.audio/media/broadcastEvent`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_disablescenario"></a>
## `media/disableScenario`

`luna://com.webos.service.audio/media/disableScenario`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_enablescenario"></a>
## `media/enableScenario`

`luna://com.webos.service.audio/media/enableScenario`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getcurrentscenario"></a>
## `media/getCurrentScenario`

`luna://com.webos.service.audio/media/getCurrentScenario`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getlatency"></a>
## `media/getLatency`

`luna://com.webos.service.audio/media/getLatency`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/getLatency '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getmicgain"></a>
## `media/getMicGain`

`luna://com.webos.service.audio/media/getMicGain`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/getMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getvolume"></a>
## `media/getVolume`

`luna://com.webos.service.audio/media/getVolume`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_listscenarios"></a>
## `media/listScenarios`

`luna://com.webos.service.audio/media/listScenarios`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_lockvolumekeys"></a>
## `media/lockVolumeKeys`

`luna://com.webos.service.audio/media/lockVolumeKeys`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_offsetmicgain"></a>
## `media/offsetMicGain`

`luna://com.webos.service.audio/media/offsetMicGain`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/offsetMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_offsetvolume"></a>
## `media/offsetVolume`

`luna://com.webos.service.audio/media/offsetVolume`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setcurrentscenario"></a>
## `media/setCurrentScenario`

`luna://com.webos.service.audio/media/setCurrentScenario`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setlatency"></a>
## `media/setLatency`

`luna://com.webos.service.audio/media/setLatency`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/setLatency '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setmicgain"></a>
## `media/setMicGain`

`luna://com.webos.service.audio/media/setMicGain`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/setMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setvolume"></a>
## `media/setVolume`

`luna://com.webos.service.audio/media/setVolume`

Sets the volume level of the current or the specified scenario.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `volume` | Number (required) Indicates the volume level to be set. |
| `sessionId` | Number (optional) Indicates the display/session to which the operation is applicable. Possible values are: 0 1 Note: If not provided, the operation is applied to session 0. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/media/setVolume '{"volume":10}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="media_status"></a>
## `media/status`

`luna://com.webos.service.audio/media/status`

Method registered by com.webos.service.audio (category '/media')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="mutesink"></a>
## `muteSink`

`luna://com.webos.service.audio/muteSink`

Mutes the sink volume.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `streamType` | String (required) The sink to be muted. Possible values are: palerts pfeedback pringtones pmedia pdefaultapp peffects pvoicerecognition ptts default1 default2 tts1 tts2 |
| `mute` | Boolean (required) Mute or unmute the sink. Possible values are: true : Mute the sink. false : Unmute the sink. |

```sh
luna-send -n 1 luna://com.webos.service.audio/muteSink '{"streamType":"default1","mute":true}
```

> ACG: audio.operation \| Returns: streamType:String; returnValue:Boolean; mute:Boolean; errorText:String; errorCode:Number \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="mutesource"></a>
## `muteSource`

`luna://com.webos.service.audio/muteSource`

Mutes the source volume.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sourceType` | String (required) The source to be muted. Possible values are: record btcallsource alexa webcall voiceassistance |
| `mute` | Boolean (required) Mute or unmute the source. Possible values are: true: Mute the source. false: Unmute the source. |

```sh
luna-send -n 1 luna://com.webos.service.audio/muteSource '{"sourceType":"record","mute":true}
```

> ACG: audio.operation \| Returns: sourceType:String; returnValue:Boolean; mute:Boolean \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="nav_status"></a>
## `nav/status`

`luna://com.webos.service.audio/nav/status`

Method registered by com.webos.service.audio (category '/nav')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/nav/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_getvolume"></a>
## `notification/getVolume`

`luna://com.webos.service.audio/notification/getVolume`

Method registered by com.webos.service.audio (category '/notification')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/notification/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_offsetvolume"></a>
## `notification/offsetVolume`

`luna://com.webos.service.audio/notification/offsetVolume`

Method registered by com.webos.service.audio (category '/notification')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/notification/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_setvolume"></a>
## `notification/setVolume`

`luna://com.webos.service.audio/notification/setVolume`

Method registered by com.webos.service.audio (category '/notification')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/notification/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_status"></a>
## `notification/status`

`luna://com.webos.service.audio/notification/status`

Method registered by com.webos.service.audio (category '/notification')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/notification/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_bluetoothaudiopropertiesset"></a>
## `phone/bluetoothAudioPropertiesSet`

`luna://com.webos.service.audio/phone/bluetoothAudioPropertiesSet`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/bluetoothAudioPropertiesSet '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_broadcastevent"></a>
## `phone/broadcastEvent`

`luna://com.webos.service.audio/phone/broadcastEvent`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_callstatusupdate"></a>
## `phone/CallStatusUpdate`

`luna://com.webos.service.audio/phone/CallStatusUpdate`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/CallStatusUpdate '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_disablescenario"></a>
## `phone/disableScenario`

`luna://com.webos.service.audio/phone/disableScenario`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_enablescenario"></a>
## `phone/enableScenario`

`luna://com.webos.service.audio/phone/enableScenario`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_getcurrentscenario"></a>
## `phone/getCurrentScenario`

`luna://com.webos.service.audio/phone/getCurrentScenario`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_getvolume"></a>
## `phone/getVolume`

`luna://com.webos.service.audio/phone/getVolume`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_hacget"></a>
## `phone/hacGet`

`luna://com.webos.service.audio/phone/hacGet`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/hacGet '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_hacset"></a>
## `phone/hacSet`

`luna://com.webos.service.audio/phone/hacSet`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/hacSet '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_listscenarios"></a>
## `phone/listScenarios`

`luna://com.webos.service.audio/phone/listScenarios`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_lockvolumekeys"></a>
## `phone/lockVolumeKeys`

`luna://com.webos.service.audio/phone/lockVolumeKeys`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_museset"></a>
## `phone/museSet`

`luna://com.webos.service.audio/phone/museSet`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/museSet '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_offsetvolume"></a>
## `phone/offsetVolume`

`luna://com.webos.service.audio/phone/offsetVolume`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setcurrentscenario"></a>
## `phone/setCurrentScenario`

`luna://com.webos.service.audio/phone/setCurrentScenario`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setmuted"></a>
## `phone/setMuted`

`luna://com.webos.service.audio/phone/setMuted`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setvolume"></a>
## `phone/setVolume`

`luna://com.webos.service.audio/phone/setVolume`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_status"></a>
## `phone/status`

`luna://com.webos.service.audio/phone/status`

Method registered by com.webos.service.audio (category '/phone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="playsound"></a>
## `playSound`

`luna://com.webos.service.audio/playSound`

Plays PCM audio files through PulseAudio sound server.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `fileName` | String (required) Indicates the absolute path of the PCM file to be played. |
| `sink` | String (required) Indicates the virtual PulseAudio sink used by the application. Possible values are: default1 default2 tts1 tts2 palerts pringtones pdefaultapp pmedia peffects ptts pvoicerecognition |
| `format` | String (optional) Indicates the sample format to be set. Possible values are: PA_SAMPLE_S16LE PA_SAMPLE_S24LE PA_SAMPLE_S32LE (Default) |
| `sampleRate` | Number (optional) Indicates the sample rate to be set. Possible values are: 44100 48000 (Default) 32000 22050 |
| `channels` | Number (optional) Indicates the number of audio channels to be used while playing the file. Possible values are: 1: mono 2 (Default): stereo 3 4 5 6 |

```sh
luna-send -n 1 luna://com.webos.service.audio/playSound '{ "fileName":"/usr/share/audiod/systemsounds/voicestart-ondemand.pcm", "sink":"default1", "sampleRate":48000, "format":"PA_SAMPLE_S16LE", "channels":2 }
```

> ACG: audio.management \| Returns: returnValue:Boolean; playbackId:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="registertrack"></a>
## `registerTrack`

`luna://com.webos.service.audio/registerTrack`

Registers a playback by an application/service and returns a track ID. The track ID must be used to control the volume of that particular playback by using setTrackVolume() .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 16+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `streamType` | String (required) Type of the audio stream. Possible values are: palerts pfeedback pringtones pmedia pdefaultapp peffects pvoicerecognition ptts default1 default2 tts1 tts2 |

```sh
luna-send -n 1 -f luna://com.webos.service.audio/registerTrack '{"streamType":"default1"}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; trackId:String; streamType:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="ringtone_getvolume"></a>
## `ringtone/getVolume`

`luna://com.webos.service.audio/ringtone/getVolume`

Method registered by com.webos.service.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/ringtone/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_lockvolumekeys"></a>
## `ringtone/lockVolumeKeys`

`luna://com.webos.service.audio/ringtone/lockVolumeKeys`

Method registered by com.webos.service.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/ringtone/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_offsetvolume"></a>
## `ringtone/offsetVolume`

`luna://com.webos.service.audio/ringtone/offsetVolume`

Method registered by com.webos.service.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/ringtone/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_setmuted"></a>
## `ringtone/setMuted`

`luna://com.webos.service.audio/ringtone/setMuted`

Method registered by com.webos.service.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/ringtone/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_setvolume"></a>
## `ringtone/setVolume`

`luna://com.webos.service.audio/ringtone/setVolume`

Method registered by com.webos.service.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/ringtone/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_status"></a>
## `ringtone/status`

`luna://com.webos.service.audio/ringtone/status`

Method registered by com.webos.service.audio (category '/ringtone')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/ringtone/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setaudioeffect"></a>
## `setAudioEffect`

`luna://com.webos.service.audio/setAudioEffect`

Sets the status of an audio effect.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `effectName` | String (required) Audio effect name. Possible values are: speech enhancement gain control beamforming dynamic compressor equalizer bass boost |
| `enabled` | Boolean (required) Status of the audio effect. Possible values are: true: Audio effect is enabled. false: Audio effect is disabled. Note: By default, all the audio effects are disabled. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/setAudioEffect '{"effectName":"speech enhancement", "enabled":true}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="setaudioequalizerbandlevel"></a>
## `setAudioEqualizerBandLevel`

`luna://com.webos.service.audio/setAudioEqualizerBandLevel`

Sets the equalizer band level.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 25+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `band` | Number (required) Band index of the equalizer band. Value range: [0, 5] (6 bands) |
| `level` | Number (required) New gain (in decibels) for the specified band. Value range: [-10, 10] |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/setAudioEqualizerBandLevel '{"band":1, "level":-5}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="setaudioequalizerpreset"></a>
## `setAudioEqualizerPreset`

`luna://com.webos.service.audio/setAudioEqualizerPreset`

Sets the equalizer preset value.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 25+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `preset` | Number (required) ID of equalizer preset. Possible values are: 0: CLASSIC 1: JAZZ 2: POP 3: ROCK |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/setAudioEqualizerPreset '{"preset":1}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="setcurrentscenario"></a>
## `setCurrentScenario`

`luna://com.webos.service.audio/setCurrentScenario`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setinputvolume"></a>
## `setInputVolume`

`luna://com.webos.service.audio/setInputVolume`

Sets the input volume for audio streams.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `streamType` | String (required) Indicates the stream name of the input volume to be applied. Possible values are: palerts pfeedback pringtones pmedia pdefaultapp peffects pvoicerecognition ptts default1 default2 tts1 tts2 |
| `volume` | Number (required) Indicates the volume to be applied. The value can range from 0 to 100. |
| `ramp` | Boolean (optional) Indicates if the volume is to be applied in steps. Possible values are: true: Volume is applied in steps. false (Default): Volume is not applied in steps. |

```sh
luna-send -n 1 luna://com.webos.service.audio/setInputVolume '{ "streamType":"default1", "volume":50 }
```

> ACG: audio.operation \| Returns: returnValue:Boolean; volume:Number; streamType:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="setmuted"></a>
## `setMuted`

`luna://com.webos.service.audio/setMuted`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setsoundinput"></a>
## `setSoundInput`

`luna://com.webos.service.audio/setSoundInput`

Sets the sound input device for recording.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `soundInput` | String (required) Sound input device. Possible values are: pcm_input: For AVN usb_mic0 usb_mic1 usb_mic2 usb_mic3 |

```sh
luna-send -n 1 luna://com.webos.service.audio/setSoundInput '{"soundInput":"pcm_input"}
```

> ACG: audio.management \| Returns: returnValue:Boolean; soundInput:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="setsoundoutput"></a>
## `setSoundOutput`

`luna://com.webos.service.audio/setSoundOutput`

Sets the sound output device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `soundOutput` | String (required) The audio output device. Possible values are: pcm_output pcm_output1 usb_speaker0 bluetooth_speaker0 usb_speaker1 |

```sh
luna-send -n 1 luna://com.webos.service.audio/setSoundOutput '{"soundOutput":"pcm_output"}
```

> ACG: audio.management \| Returns: returnValue:Boolean; soundOutput:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="setsourceinputvolume"></a>
## `setSourceInputVolume`

`luna://com.webos.service.audio/setSourceInputVolume`

Sets input volume of the source.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sourceType` | String (required) The source to which volume must be applied. Possible values are: record btcallsource alexa webcall voiceassistance |
| `volume` | Number (required) The volume level to be applied to the source. The value can range from 0 to 100. |
| `ramp` | Boolean (optional) Indicates if the volume is to be applied in steps. Possible values are: true: Applied in steps. false (Default): Not applied in steps. |

```sh
luna-send -n 1 luna://com.webos.service.audio/setSourceInputVolume '{"sourceType":"record","volume":10}
```

> ACG: audio.operation \| Returns: volume:Number; sourceType:String; returnValue:Boolean \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="settrackvolume"></a>
## `setTrackVolume`

`luna://com.webos.service.audio/setTrackVolume`

Sets the volume for a specific playback that is identified by the track ID (obtained by using registerTrack() ). The effective playback volume is calculated as a percentage of the stream volume of the corresponding track. Example 1: Stream volume: 100 Track (playback) volume set using setTrackVolume() : 100 Effective volume of the track: 100 * 100/100 = 100 Example 2: Stream volume: 80 Track (playback) volume set using setTrackVolume() : 100 Effective volume of the track: 80 * 100/100 = 80 Example 3: Stream Volume: 40 Track (playback) volume set using setTrackVolume() : 50 Effective volume of the playback: 40 * 50/100 = 20

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 16+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `trackId` | String (required) Track ID of the registered playback. |
| `volume` | Number (required) Volume level to be set. The valid volume range is 0-100 |

```sh
luna-send -n 1 -f luna://com.webos.service.audio/setTrackVolume '{"trackId":"_rKjYAlq3r","volume":50}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; trackId:String; volume:Number; streamType:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="setvolume"></a>
## `setVolume`

`luna://com.webos.service.audio/setVolume`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setvolume2"></a>
## `setVolume2`

`luna://com.webos.service.audio/setVolume2`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/setVolume2 '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="soundsettings_setsoundout"></a>
## `soundSettings/setSoundOut`

`luna://com.webos.service.audio/soundSettings/setSoundOut`

Sets the audio output device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `soundOut` | String (required) Indicates the audio output device. Possible values are: alsa |

```sh
luna-send -n 1 -f luna://com.webos.service.audio/soundSettings/setSoundOut '{"soundOut":"alsa"}
```

> ACG: audio.management \| Returns: soundOut:String; returnValue:Boolean \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="sourceobject"></a>
## `sourceObject`

`luna://com.webos.service.audio/sourceObject`

Indicates the list of active source connection

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.audio/sourceObject '{}'
```

> Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="state_get"></a>
## `state/get`

`luna://com.webos.service.audio/state/get`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/get '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getpreference"></a>
## `state/getPreference`

`luna://com.webos.service.audio/state/getPreference`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/getPreference '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getsoundprofile"></a>
## `state/getSoundProfile`

`luna://com.webos.service.audio/state/getSoundProfile`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/getSoundProfile '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_gettouchsound"></a>
## `state/getTouchSound`

`luna://com.webos.service.audio/state/getTouchSound`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/getTouchSound '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getvolumebalance"></a>
## `state/getVolumeBalance`

`luna://com.webos.service.audio/state/getVolumeBalance`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/getVolumeBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_loadrtpmodule"></a>
## `state/loadRTPModule`

`luna://com.webos.service.audio/state/loadRTPModule`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/loadRTPModule '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_loopback"></a>
## `state/loopback`

`luna://com.webos.service.audio/state/loopback`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/loopback '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_setfilter"></a>
## `state/pulse/setFilter`

`luna://com.webos.service.audio/state/pulse/setFilter`

Method registered by com.webos.service.audio (category '/state/pulse')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/pulse/setFilter '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_sinkstatus"></a>
## `state/pulse/sinkStatus`

`luna://com.webos.service.audio/state/pulse/sinkStatus`

Method registered by com.webos.service.audio (category '/state/pulse')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/pulse/sinkStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_suspend"></a>
## `state/pulse/suspend`

`luna://com.webos.service.audio/state/pulse/suspend`

Method registered by com.webos.service.audio (category '/state/pulse')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/pulse/suspend '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_set"></a>
## `state/set`

`luna://com.webos.service.audio/state/set`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/set '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setnrec"></a>
## `state/setNREC`

`luna://com.webos.service.audio/state/setNREC`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setNREC '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setpreference"></a>
## `state/setPreference`

`luna://com.webos.service.audio/state/setPreference`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setPreference '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setringerswitch"></a>
## `state/setRingerSwitch`

`luna://com.webos.service.audio/state/setRingerSwitch`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setRingerSwitch '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setsoundprofile"></a>
## `state/setSoundProfile`

`luna://com.webos.service.audio/state/setSoundProfile`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setSoundProfile '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_settouchsound"></a>
## `state/setTouchSound`

`luna://com.webos.service.audio/state/setTouchSound`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setTouchSound '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setvolumebalance"></a>
## `state/setVolumeBalance`

`luna://com.webos.service.audio/state/setVolumeBalance`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setVolumeBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_unloadrtpmodule"></a>
## `state/unloadRTPModule`

`luna://com.webos.service.audio/state/unloadRTPModule`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/unloadRTPModule '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_volumeramp"></a>
## `state/volumeRamp`

`luna://com.webos.service.audio/state/volumeRamp`

Method registered by com.webos.service.audio (category '/state')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/volumeRamp '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="status"></a>
## `status`

`luna://com.webos.service.audio/status`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="streamobject"></a>
## `streamObject`

`luna://com.webos.service.audio/streamObject`

Contains the list of active connections.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.audio/streamObject '{}'
```

> Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="system_getvolume"></a>
## `system/getVolume`

`luna://com.webos.service.audio/system/getVolume`

Method registered by com.webos.service.audio (category '/system')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/system/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_offsetvolume"></a>
## `system/offsetVolume`

`luna://com.webos.service.audio/system/offsetVolume`

Method registered by com.webos.service.audio (category '/system')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/system/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_setmuted"></a>
## `system/setMuted`

`luna://com.webos.service.audio/system/setMuted`

Method registered by com.webos.service.audio (category '/system')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/system/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_setvolume"></a>
## `system/setVolume`

`luna://com.webos.service.audio/system/setVolume`

Method registered by com.webos.service.audio (category '/system')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/system/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_status"></a>
## `system/status`

`luna://com.webos.service.audio/system/status`

Method registered by com.webos.service.audio (category '/system')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/system/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="systemsounds_playfeedback"></a>
## `systemsounds/playFeedback`

`luna://com.webos.service.audio/systemsounds/playFeedback`

Plays the various system alert sounds based on the name passed to it.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the system sound. |
| `sink` | String (optional) Sink to use to play sound (default: pfeedback). |
| `play` | Boolean (optional) To preload and play the file, set play to true . To preload but not to play the file, set play to false . The default value of play is true . |
| `override` | Boolean (optional) Override feedback sound. Possible values are: true : override feedback sound false : (default) No override |

```sh
luna-send -n 1 -f luna://com.webos.service.audio/systemsounds/playFeedback '{ "name":"voicestart", "sink":"pfeedback", "play":true }
```

> ACG: audio.management \| Returns: returnValue:Boolean \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="timer_gettimeron"></a>
## `timer/getTimerOn`

`luna://com.webos.service.audio/timer/getTimerOn`

Method registered by com.webos.service.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/getTimerOn '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_getvolume"></a>
## `timer/getVolume`

`luna://com.webos.service.audio/timer/getVolume`

Method registered by com.webos.service.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_offsetvolume"></a>
## `timer/offsetVolume`

`luna://com.webos.service.audio/timer/offsetVolume`

Method registered by com.webos.service.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_setmuted"></a>
## `timer/setMuted`

`luna://com.webos.service.audio/timer/setMuted`

Method registered by com.webos.service.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_settimeron"></a>
## `timer/setTimerOn`

`luna://com.webos.service.audio/timer/setTimerOn`

Method registered by com.webos.service.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/setTimerOn '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_setvolume"></a>
## `timer/setVolume`

`luna://com.webos.service.audio/timer/setVolume`

Method registered by com.webos.service.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_status"></a>
## `timer/status`

`luna://com.webos.service.audio/timer/status`

Method registered by com.webos.service.audio (category '/timer')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="tonegenerator_playcallertone"></a>
## `tonegenerator/playCallertone`

`luna://com.webos.service.audio/tonegenerator/playCallertone`

Method registered by com.webos.service.audio (category '/tonegenerator')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tonegenerator/playCallertone '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="udev_event"></a>
## `udev/event`

`luna://com.webos.service.audio/udev/event`

Gives the audiod information regarding the USB Mic/Headset Connected/Disconnected events based on the udev rules. It also provides the sound card number and device number information.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `event` | String (required) The event to be passed to audiod by the udev rule when USB soundcard is detected.It is a simple string defined by audiod. For example supported events are: headset-removed headset-inserted headset-mic-inserted usb-mic-inserted usb-mic-removed usb-headset-inserted usb-headset-removed |
| `soundcard_no` | Number (optional) Sound card number. As of now it is being extracted from the device path where USB sound card is detected by udev. |
| `device_no` | Number (optional) Device number. As of now it is being extracted from the device path where USB sound card is detected by udev. |

```sh
luna-send -n 1 luna://com.webos.service.audio/udev/event '{"event":"headset-inserted"}
```

> ACG: audio.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="umi_connect"></a>
## `UMI/connect`

`luna://com.webos.service.audio/UMI/connect`

Establishes connection for the audio resource.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `outputMode` | String (required) Indicates the audio output device. Possible values are: alsa |
| `audioType` | String (required) Indicates the type of the audio stream. Possible values are: umimedia |
| `sink` | String (required) Indicates the audio sink. Possible values are: ALSA |
| `source` | String (required) Indicates the audio source. Possible values are: AMIXER |
| `sourcePort` | Number (required) Audio source port. Possible values are: 0 ~ 7: For AMIXER source. |
| `context` | String (optional) Indicates the audio pipeline ID. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/UMI/connect '{ "outputMode":"alsa", "audioType":"umimedia", "sink":"ALSA", "source":"AMIXER", "sourcePort":0 }
```

> ACG: audio.operation \| Returns: returnValue:Boolean; source:String; sink:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="umi_disconnect"></a>
## `UMI/disconnect`

`luna://com.webos.service.audio/UMI/disconnect`

Disconnects the connection.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sink` | String (required) Indicates the audio sink. Possible values are: ALSA |
| `source` | String (required) Indicates the audio source. Possible values are: AMIXER |
| `sourcePort` | Number (required) Audio source port. Possible values are: 0~ 7: For AMIXER source |
| `audioType` | String (required) Indicates the audio stream type. Possible values are: umimedia |
| `context` | String (optional) Indicates the audio pipeline ID. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/UMI/disconnect '{ "sink":"ALSA", "source":"AMIXER", "sourcePort":0, "audioType":"umimedia" }
```

> ACG: audio.operation \| Returns: returnValue:Boolean; source:String; sink:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="umi_getstatus"></a>
## `UMI/getStatus`

`luna://com.webos.service.audio/UMI/getStatus`

Shows the connection status of audio resources.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -f -n 1 luna://com.webos.service.audio/UMI/getStatus '{}
```

> ACG: audio.query \| Returns: audio:Object array: audio; returnValue:Boolean \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="umi_mute"></a>
## `UMI/mute`

`luna://com.webos.service.audio/UMI/mute`

Mutes or unmutes the input volume of the requested connection. Note: This method is added for future-use. It does not have any impact on the audio setting.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sink` | String (required) Audio sink. Possible values are: ALSA |
| `source` | String (required) Audio source. Possible values are: AMIXER |
| `sourcePort` | Number (required) Audio source port |
| `mute` | Boolean (required) Indicates if the input volume is to be muted. Possible values are: true - If the input volume is to be muted. false - If the input volume is not to be muted. |

```sh
luna-send -n 1 -f luna://com.webos.service.audio/UMI/mute '{ "sink":"ALSA", "source":"AMIXER", "sourcePort":0, "mute":true }
```

> ACG: audio.operation \| Returns: returnValue:Boolean \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="unregistertrack"></a>
## `unregisterTrack`

`luna://com.webos.service.audio/unregisterTrack`

Unregisters a playback by an application/service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 16+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `trackId` | String (required) Track ID of the registered playback. |

```sh
luna-send -n 1 -f luna://com.webos.service.audio/unregisterTrack '{"trackId":"_OOWR1nOw9"}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; trackId:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="vibrate_get"></a>
## `vibrate/get`

`luna://com.webos.service.audio/vibrate/get`

Method registered by com.webos.service.audio (category '/vibrate')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vibrate/get '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vibrate_set"></a>
## `vibrate/set`

`luna://com.webos.service.audio/vibrate/set`

Method registered by com.webos.service.audio (category '/vibrate')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vibrate/set '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_broadcastevent"></a>
## `voiceCommand/broadcastEvent`

`luna://com.webos.service.audio/voiceCommand/broadcastEvent`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_control"></a>
## `voiceCommand/control`

`luna://com.webos.service.audio/voiceCommand/control`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/control '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_disablescenario"></a>
## `voiceCommand/disableScenario`

`luna://com.webos.service.audio/voiceCommand/disableScenario`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_enablescenario"></a>
## `voiceCommand/enableScenario`

`luna://com.webos.service.audio/voiceCommand/enableScenario`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_getcurrentscenario"></a>
## `voiceCommand/getCurrentScenario`

`luna://com.webos.service.audio/voiceCommand/getCurrentScenario`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_getmicgain"></a>
## `voiceCommand/getMicGain`

`luna://com.webos.service.audio/voiceCommand/getMicGain`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/getMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_getvolume"></a>
## `voiceCommand/getVolume`

`luna://com.webos.service.audio/voiceCommand/getVolume`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_listscenarios"></a>
## `voiceCommand/listScenarios`

`luna://com.webos.service.audio/voiceCommand/listScenarios`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_offsetmicgain"></a>
## `voiceCommand/offsetMicGain`

`luna://com.webos.service.audio/voiceCommand/offsetMicGain`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/offsetMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_offsetvolume"></a>
## `voiceCommand/offsetVolume`

`luna://com.webos.service.audio/voiceCommand/offsetVolume`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_setcurrentscenario"></a>
## `voiceCommand/setCurrentScenario`

`luna://com.webos.service.audio/voiceCommand/setCurrentScenario`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_setmicgain"></a>
## `voiceCommand/setMicGain`

`luna://com.webos.service.audio/voiceCommand/setMicGain`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/setMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_setvolume"></a>
## `voiceCommand/setVolume`

`luna://com.webos.service.audio/voiceCommand/setVolume`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_status"></a>
## `voiceCommand/status`

`luna://com.webos.service.audio/voiceCommand/status`

Method registered by com.webos.service.audio (category '/voiceCommand')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="volumedown"></a>
## `volumeDown`

`luna://com.webos.service.audio/volumeDown`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/volumeDown '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="volumekeeping"></a>
## `volumeKeeping`

`luna://com.webos.service.audio/volumeKeeping`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/volumeKeeping '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="volumestatus"></a>
## `VolumeStatus`

`luna://com.webos.service.audio/VolumeStatus`

Provides the volume details of the target sound output device.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.audio/VolumeStatus '{}'
```

> Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="volumeup"></a>
## `volumeUp`

`luna://com.webos.service.audio/volumeUp`

Method registered by com.webos.service.audio (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/volumeUp '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_broadcastevent"></a>
## `vvm/broadcastEvent`

`luna://com.webos.service.audio/vvm/broadcastEvent`

Method registered by com.webos.service.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_control"></a>
## `vvm/control`

`luna://com.webos.service.audio/vvm/control`

Method registered by com.webos.service.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/control '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_disablescenario"></a>
## `vvm/disableScenario`

`luna://com.webos.service.audio/vvm/disableScenario`

Method registered by com.webos.service.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_enablescenario"></a>
## `vvm/enableScenario`

`luna://com.webos.service.audio/vvm/enableScenario`

Method registered by com.webos.service.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_getcurrentscenario"></a>
## `vvm/getCurrentScenario`

`luna://com.webos.service.audio/vvm/getCurrentScenario`

Method registered by com.webos.service.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_getvolume"></a>
## `vvm/getVolume`

`luna://com.webos.service.audio/vvm/getVolume`

Method registered by com.webos.service.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_listscenarios"></a>
## `vvm/listScenarios`

`luna://com.webos.service.audio/vvm/listScenarios`

Method registered by com.webos.service.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_offsetvolume"></a>
## `vvm/offsetVolume`

`luna://com.webos.service.audio/vvm/offsetVolume`

Method registered by com.webos.service.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_setcurrentscenario"></a>
## `vvm/setCurrentScenario`

`luna://com.webos.service.audio/vvm/setCurrentScenario`

Method registered by com.webos.service.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_setvolume"></a>
## `vvm/setVolume`

`luna://com.webos.service.audio/vvm/setVolume`

Method registered by com.webos.service.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_status"></a>
## `vvm/status`

`luna://com.webos.service.audio/vvm/status`

Method registered by com.webos.service.audio (category '/vvm')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)
