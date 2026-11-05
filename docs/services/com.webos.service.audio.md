# `com.webos.service.audio`

webOS audio policy service: implements audio routing and volume control across scenarios (alarm, alert, media), manages mute, capture, and DTMF tones. Primary audio control bus on modern firmware.

236 methods.  Platforms seen: webOS OSE, webOS TV.

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
| [`audio`](#audio) | unknown |  | audio | documented | Object returned by the UMI/getStatus. |
| [`broadcastEvent`](#broadcastevent) | private |  | audio | inferred | Handles the broadcast event. |
| [`capture/getStatus`](#capture_getstatus) | private |  | audio | inferred | Returns the status (capture) |
| [`capture/resetParams`](#capture_resetparams) | private |  | audio | inferred | Resets the params (capture) ⚠️ |
| [`capture/setParams`](#capture_setparams) | private |  | audio | inferred | Sets the params (capture) |
| [`capture/start`](#capture_start) | private |  | audio | inferred | Starts the audio (capture) |
| [`capture/stop`](#capture_stop) | private |  | audio | inferred | Stops the audio (capture) |
| [`checkAudioEffectStatus`](#checkaudioeffectstatus) | public |  | audio | documented | Check the status of an audio effect. |
| [`connectSoundInput`](#connectsoundinput) | private |  | audio | inferred | Connects the sound input. |
| [`controlPlayback`](#controlplayback) | public |  | audio | documented | Controls playback operations like stop, pause/resume for audio samples that are played using the playSound method. |
| [`deviceList`](#devicelist) | unknown |  | audio | documented | Provides information about all supported input and output devices and their type and connection status. |
| [`disableScenario`](#disablescenario) | private |  | audio | inferred | Disables the scenario. |
| [`dtmf/busyTone`](#dtmf_busytone) | private |  | audio | inferred | Handles the busy tone (dtmf) |
| [`dtmf/emergencyCall`](#dtmf_emergencycall) | private |  | audio | inferred | Handles the emergency call (dtmf) |
| [`dtmf/playAlert`](#dtmf_playalert) | private |  | audio | inferred | Plays the alert (dtmf) |
| [`dtmf/playDTMF`](#dtmf_playdtmf) | private |  | audio | inferred | Plays the DTMF (dtmf) |
| [`dtmf/stopDTMF`](#dtmf_stopdtmf) | private |  | audio | inferred | Stops the DTMF (dtmf) |
| [`effectStatus`](#effectstatus) | unknown |  | audio | documented | Provides the name of the audio effects and their status. |
| [`enableScenario`](#enablescenario) | private |  | audio | inferred | Enables the scenario. |
| [`getAudioEffectList`](#getaudioeffectlist) | public |  | audio | documented | Lists all the supported audio effects. |
| [`getAudioEffectsStatus`](#getaudioeffectsstatus) | public | yes | audio | documented | Gets the status of all the audio effects. |
| [`getCurrentScenario`](#getcurrentscenario) | private |  | audio | inferred | Returns the current scenario. |
| [`getInputVolume`](#getinputvolume) | public | yes | audio | documented | Gets the input volume for audio streams. |
| [`getPlaybackStatus`](#getplaybackstatus) | public | yes | audio | documented | Checks the status of playback which is played using playSound method. |
| [`getSoundInput`](#getsoundinput) | public | yes | audio | documented | Gets the current active sound input device. |
| [`getSoundInputList`](#getsoundinputlist) | private |  | audio | inferred | Returns the sound input list. |
| [`getSoundOut`](#getsoundout) | private |  | audio | inferred | Returns the sound out. |
| [`getSoundOutput`](#getsoundoutput) | public | yes | audio | documented | Gets the current active sound output device. |
| [`getSourceInputVolume`](#getsourceinputvolume) | public | yes | audio | documented | Gets input volume of the source. |
| [`getSourceStatus`](#getsourcestatus) | public | yes | audio | documented | Gets the status of the source. |
| [`getStreamStatus`](#getstreamstatus) | public | yes | audio | documented | Gets the status and information of the active stream. |
| [`getVolume`](#getvolume) | private |  | audio | inferred | Returns the volume. |
| [`listScenarios`](#listscenarios) | private |  | audio | inferred | Lists the scenarios. |
| [`listSupportedDevices`](#listsupporteddevices) | public | yes | audio | documented | Gets the list of supported audio input and output devices and their connection status. |
| [`master/getMicVolume`](#master_getmicvolume) | public | yes | audio | documented | Gets volume of currently active microphone input. |
| [`master/getVolume`](#master_getvolume) | public | yes | audio | documented | Gives the current master volume of the audio output device. |
| [`master/muteMic`](#master_mutemic) | public |  | audio | documented | Mutes/unmutes the currently active microphone input device. |
| [`master/muteVolume`](#master_mutevolume) | public |  | audio | documented | Mutes or unmutes the master volume of the audio output device. |
| [`master/setMicVolume`](#master_setmicvolume) | public |  | audio | documented | Sets the volume of the currently active microphone input device. |
| [`master/setVolume`](#master_setvolume) | public |  | audio | documented | Sets the master volume of the audio output device. |
| [`master/volumeDown`](#master_volumedown) | public |  | audio | documented | Reduces the master volume of the device. |
| [`master/volumeUp`](#master_volumeup) | public |  | audio | documented | Increases the master volume of the device. |
| [`media/broadcastEvent`](#media_broadcastevent) | private |  | audio | inferred | Handles the broadcast event (media) |
| [`media/disableScenario`](#media_disablescenario) | private |  | audio | inferred | Disables the scenario (media) |
| [`media/enableScenario`](#media_enablescenario) | private |  | audio | inferred | Enables the scenario (media) |
| [`media/getCurrentScenario`](#media_getcurrentscenario) | private |  | audio | inferred | Returns the current scenario (media) |
| [`media/getLatency`](#media_getlatency) | private |  | audio | inferred | Returns the latency (media) |
| [`media/getMicGain`](#media_getmicgain) | private |  | audio | inferred | Returns the mic gain (media) |
| [`media/getVolume`](#media_getvolume) | private |  | audio | inferred | Returns the volume (media) |
| [`media/listScenarios`](#media_listscenarios) | private |  | audio | inferred | Lists the scenarios (media) |
| [`media/lockVolumeKeys`](#media_lockvolumekeys) | private |  | audio | inferred | Locks the volume keys (media) |
| [`media/offsetMicGain`](#media_offsetmicgain) | private |  | audio | inferred | Handles the offset mic gain (media) |
| [`media/offsetVolume`](#media_offsetvolume) | private |  | audio | inferred | Handles the offset volume (media) |
| [`media/setCurrentScenario`](#media_setcurrentscenario) | private |  | audio | inferred | Sets the current scenario (media) |
| [`media/setLatency`](#media_setlatency) | private |  | audio | inferred | Sets the latency (media) |
| [`media/setMicGain`](#media_setmicgain) | private |  | audio | inferred | Sets the mic gain (media) |
| [`media/setVolume`](#media_setvolume) | public |  | audio | documented | Sets the volume level of the current or the specified scenario. |
| [`media/status`](#media_status) | private |  | audio | inferred | Handles the status (media) |
| [`muteSink`](#mutesink) | public |  | audio | documented | Mutes the sink volume. |
| [`muteSource`](#mutesource) | public |  | audio | documented | Mutes the source volume. |
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
| [`playSound`](#playsound) | public |  | audio | documented | Plays PCM audio files through PulseAudio sound server. |
| [`quality/setQualityAttribute`](#quality_setqualityattribute) | public |  | audio | inferred | Sets the quality attribute (quality) |
| [`quality/setSoundOutputMode`](#quality_setsoundoutputmode) | public |  | audio | inferred | Sets the sound output mode (quality) |
| [`registerTrack`](#registertrack) | public |  | audio | documented | Registers a playback by an application/service and returns a track ID. The track ID must be used to control the volume of that particular pl |
| [`ringtone/getVolume`](#ringtone_getvolume) | private |  | audio | inferred | Returns the volume (ringtone) |
| [`ringtone/lockVolumeKeys`](#ringtone_lockvolumekeys) | private |  | audio | inferred | Locks the volume keys (ringtone) |
| [`ringtone/offsetVolume`](#ringtone_offsetvolume) | private |  | audio | inferred | Handles the offset volume (ringtone) |
| [`ringtone/setMuted`](#ringtone_setmuted) | private |  | audio | inferred | Sets the muted (ringtone) |
| [`ringtone/setVolume`](#ringtone_setvolume) | private |  | audio | inferred | Sets the volume (ringtone) |
| [`ringtone/status`](#ringtone_status) | private |  | audio | inferred | Handles the status (ringtone) |
| [`setAudioEffect`](#setaudioeffect) | public |  | audio | documented | Sets the status of an audio effect. |
| [`setAudioEqualizerBandLevel`](#setaudioequalizerbandlevel) | public |  | audio | documented | Sets the equalizer band level. |
| [`setAudioEqualizerPreset`](#setaudioequalizerpreset) | public |  | audio | documented | Sets the equalizer preset value. |
| [`setCurrentScenario`](#setcurrentscenario) | private |  | audio | inferred | Sets the current scenario. |
| [`setInputVolume`](#setinputvolume) | public |  | audio | documented | Sets the input volume for audio streams. |
| [`setMuted`](#setmuted) | private |  | audio | inferred | Sets the muted. |
| [`setSoundInput`](#setsoundinput) | public |  | audio | documented | Sets the sound input device for recording. |
| [`setSoundOutput`](#setsoundoutput) | public |  | audio | documented | Sets the sound output device. |
| [`setSourceInputVolume`](#setsourceinputvolume) | public |  | audio | documented | Sets input volume of the source. |
| [`setTrackVolume`](#settrackvolume) | public |  | audio | documented | Sets the volume for a specific playback that is identified by the track ID (obtained by using registerTrack() ). The effective playback volu |
| [`setVolume`](#setvolume) | private |  | audio | inferred | Sets the volume. |
| [`setVolume2`](#setvolume2) | private |  | audio | inferred | Sets the volume 2. |
| [`soundSettings/setSoundOut`](#soundsettings_setsoundout) | public |  | audio | documented | Sets the audio output device. |
| [`sourceObject`](#sourceobject) | unknown |  | audio | documented | Indicates the list of active source connection |
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
| [`status`](#status) | private |  | audio | inferred | Handles the status. |
| [`streamObject`](#streamobject) | unknown |  | audio | documented | Contains the list of active connections. |
| [`system/getVolume`](#system_getvolume) | private |  | audio | inferred | Returns the volume (system) |
| [`system/offsetVolume`](#system_offsetvolume) | private |  | audio | inferred | Handles the offset volume (system) |
| [`system/setMuted`](#system_setmuted) | private |  | audio | inferred | Sets the muted (system) |
| [`system/setVolume`](#system_setvolume) | private |  | audio | inferred | Sets the volume (system) |
| [`system/status`](#system_status) | private |  | audio | inferred | Handles the status (system) |
| [`systemsounds/playFeedback`](#systemsounds_playfeedback) | public |  | audio | documented | Plays the various system alert sounds based on the name passed to it. |
| [`telephony/answered`](#telephony_answered) | private |  | audio | inferred | Handles the answered (telephony) |
| [`telephony/callAudio`](#telephony_callaudio) | private |  | audio | inferred | Calls the audio (telephony) |
| [`telephony/startCall`](#telephony_startcall) | private |  | audio | inferred | Starts the call (telephony) |
| [`timer/getTimerOn`](#timer_gettimeron) | private |  | audio | inferred | Returns the timer on (timer) |
| [`timer/getVolume`](#timer_getvolume) | private |  | audio | inferred | Returns the volume (timer) |
| [`timer/offsetVolume`](#timer_offsetvolume) | private |  | audio | inferred | Handles the offset volume (timer) |
| [`timer/setMuted`](#timer_setmuted) | private |  | audio | inferred | Sets the muted (timer) |
| [`timer/setTimerOn`](#timer_settimeron) | private |  | audio | inferred | Sets the timer on (timer) |
| [`timer/setVolume`](#timer_setvolume) | private |  | audio | inferred | Sets the volume (timer) |
| [`timer/status`](#timer_status) | private |  | audio | inferred | Handles the status (timer) |
| [`timer/tonegenerator`](#timer_tonegenerator) | public |  | audio | inferred | Handles the tonegenerator (timer) |
| [`tonegenerator/playCallertone`](#tonegenerator_playcallertone) | private |  | audio | inferred | Plays the callertone (tonegenerator) |
| [`tv/activateWisaSpeaker`](#tv_activatewisaspeaker) | private |  | audio | inferred | Activates the wisa speaker (TV) |
| [`tv/ctrMicSwitch`](#tv_ctrmicswitch) | private |  | audio | inferred | Handles the ctr mic switch (TV) |
| [`tv/getAmplifierState`](#tv_getamplifierstate) | public |  | audio | inferred | Returns the amplifier state (TV) |
| [`tv/getArcAvSyncTime`](#tv_getarcavsynctime) | private |  | audio | inferred | Returns the ARC A/V sync time (TV) |
| [`tv/getAudioEffectData`](#tv_getaudioeffectdata) | private |  | audio | inferred | Returns the audio effect data (TV) |
| [`tv/getAudioInputProperty`](#tv_getaudioinputproperty) | private |  | audio | inferred | Returns the audio input property (TV) |
| [`tv/getExtDeviceFwVersion`](#tv_getextdevicefwversion) | private |  | audio | inferred | Returns the ext device firmware version (TV) |
| [`tv/getGainAsInput`](#tv_getgainasinput) | private |  | audio | inferred | Returns the gain as input (TV) |
| [`tv/getHeadphoneStatus`](#tv_getheadphonestatus) | public |  | audio | inferred | Returns the headphone status (TV) |
| [`tv/getSoundCardsState`](#tv_getsoundcardsstate) | private |  | audio | inferred | Returns the sound cards state (TV) |
| [`tv/mixDigitalSoundOutput`](#tv_mixdigitalsoundoutput) | public |  | audio | inferred | Handles the mix digital sound output (TV) |
| [`tv/playOnPowerState`](#tv_playonpowerstate) | public |  | audio | inferred | Plays the on power state (TV) |
| [`tv/readI2cDataFromAmplifier`](#tv_readi2cdatafromamplifier) | private |  | audio | inferred | Reads the i 2 c data from amplifier (TV) |
| [`tv/resetSoundSettings`](#tv_resetsoundsettings) | public |  | audio | inferred | Resets the sound settings (TV) ⚠️ |
| [`tv/setAmplifierState`](#tv_setamplifierstate) | public |  | audio | inferred | Sets the amplifier state (TV) |
| [`tv/setARCDeviceInfo`](#tv_setarcdeviceinfo) | private |  | audio | inferred | Sets the ARC device info (TV) |
| [`tv/setAudioEffectState`](#tv_setaudioeffectstate) | private |  | audio | inferred | Sets the audio effect state (TV) |
| [`tv/setAudioVideoSync`](#tv_setaudiovideosync) | public |  | audio | inferred | Sets the audio video sync (TV) |
| [`tv/setDolbyOTTMode`](#tv_setdolbyottmode) | public |  | audio | inferred | Sets the dolby OTT mode (TV) |
| [`tv/setDolbyVisionPopup`](#tv_setdolbyvisionpopup) | private |  | audio | inferred | Sets the dolby vision popup (TV) |
| [`tv/setEqualizerStatus`](#tv_setequalizerstatus) | public |  | audio | inferred | Sets the equalizer status (TV) |
| [`tv/setInputVolume`](#tv_setinputvolume) | private |  | audio | inferred | Sets the input volume (TV) |
| [`tv/setMSSProperties`](#tv_setmssproperties) | public |  | audio | inferred | Sets the MSS properties (TV) |
| [`tv/setNpuProperties`](#tv_setnpuproperties) | private |  | audio | inferred | Sets the npu properties (TV) |
| [`tv/setOffsetDelay`](#tv_setoffsetdelay) | public |  | audio | inferred | Sets the offset delay (TV) |
| [`tv/setOutputMute`](#tv_setoutputmute) | private |  | audio | inferred | Sets the output mute (TV) |
| [`tv/setPopupDisplayStatus`](#tv_setpopupdisplaystatus) | private |  | audio | inferred | Sets the popup display status (TV) |
| [`tv/setPSWProperties`](#tv_setpswproperties) | private |  | audio | inferred | Sets the PSW properties (TV) |
| [`tv/setQualityAttribute`](#tv_setqualityattribute) | public |  | audio | inferred | Sets the quality attribute (TV) |
| [`tv/setSCMS`](#tv_setscms) | public |  | audio | inferred | Sets the SCMS (TV) |
| [`tv/setSoundEngineStatus`](#tv_setsoundenginestatus) | public |  | audio | inferred | Sets the sound engine status (TV) |
| [`tv/setSoundOutputMode`](#tv_setsoundoutputmode) | public |  | audio | inferred | Sets the sound output mode (TV) |
| [`tv/setVideoLatencyTime`](#tv_setvideolatencytime) | private |  | audio | inferred | Sets the video latency time (TV) |
| [`tv/switchMicrophone`](#tv_switchmicrophone) | private |  | audio | inferred | Switches the microphone (TV) |
| [`tv/updateExtFw`](#tv_updateextfw) | private |  | audio | inferred | Updates the ext firmware (TV) |
| [`tv/writeI2cDataToAmplifier`](#tv_writei2cdatatoamplifier) | private |  | audio | inferred | Writes the i 2 c data to amplifier (TV) |
| [`udev/event`](#udev_event) | public |  | audio | documented | Gives the audiod information regarding the USB Mic/Headset Connected/Disconnected events based on the udev rules. It also provides the sound |
| [`UMI/activateConnection`](#umi_activateconnection) | public |  | audio | inferred | Activates the connection (UMI) |
| [`UMI/connect`](#umi_connect) | public |  | audio | documented | Establishes connection for the audio resource. |
| [`UMI/disconnect`](#umi_disconnect) | public |  | audio | documented | Disconnects the connection. |
| [`UMI/getInputVolume`](#umi_getinputvolume) | public |  | audio | inferred | Returns the input volume (UMI) |
| [`UMI/getStatus`](#umi_getstatus) | public |  | audio | documented | Shows the connection status of audio resources. |
| [`UMI/mute`](#umi_mute) | public |  | audio | documented | Mutes or unmutes the input volume of the requested connection. Note: This method is added for future-use. It does not have any impact on the |
| [`UMI/register`](#umi_register) | public |  | audio | inferred | Registers the audio (UMI) |
| [`UMI/setInputDownMix`](#umi_setinputdownmix) | private |  | audio | inferred | Sets the input down mix (UMI) |
| [`UMI/setInputVolume`](#umi_setinputvolume) | public |  | audio | inferred | Sets the input volume (UMI) |
| [`UMI/unregister`](#umi_unregister) | public |  | audio | inferred | Unregisters the audio (UMI) |
| [`unregisterTrack`](#unregistertrack) | public |  | audio | documented | Unregisters a playback by an application/service. |
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
| [`volumeDown`](#volumedown) | private |  | audio | inferred | Handles the volume down. |
| [`volumeKeeping`](#volumekeeping) | private |  | audio | inferred | Handles the volume keeping. |
| [`VolumeStatus`](#volumestatus) | unknown |  | audio | documented | Provides the volume details of the target sound output device. |
| [`volumeUp`](#volumeup) | private |  | audio | inferred | Handles the volume up. |
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

`luna://com.webos.service.audio/alarm/getAlarmOn`

Returns the alarm on (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/getAlarmOn '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_getvolume"></a>
## `alarm/getVolume`

`luna://com.webos.service.audio/alarm/getVolume`

Returns the volume (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_offsetvolume"></a>
## `alarm/offsetVolume`

`luna://com.webos.service.audio/alarm/offsetVolume`

Handles the offset volume (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setalarmon"></a>
## `alarm/setAlarmOn`

`luna://com.webos.service.audio/alarm/setAlarmOn`

Sets the alarm on (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/setAlarmOn '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setmuted"></a>
## `alarm/setMuted`

`luna://com.webos.service.audio/alarm/setMuted`

Sets the muted (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_setvolume"></a>
## `alarm/setVolume`

`luna://com.webos.service.audio/alarm/setVolume`

Sets the volume (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alarm_status"></a>
## `alarm/status`

`luna://com.webos.service.audio/alarm/status`

Handles the status (alarm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alarm/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_getvolume"></a>
## `alert/getVolume`

`luna://com.webos.service.audio/alert/getVolume`

Returns the volume (alert)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alert/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_offsetvolume"></a>
## `alert/offsetVolume`

`luna://com.webos.service.audio/alert/offsetVolume`

Handles the offset volume (alert)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alert/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_setmuted"></a>
## `alert/setMuted`

`luna://com.webos.service.audio/alert/setMuted`

Sets the muted (alert)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alert/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_setvolume"></a>
## `alert/setVolume`

`luna://com.webos.service.audio/alert/setVolume`

Sets the volume (alert)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/alert/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="alert_status"></a>
## `alert/status`

`luna://com.webos.service.audio/alert/status`

Handles the status (alert)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

Handles the broadcast event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="capture_getstatus"></a>
## `capture/getStatus`

`luna://com.webos.service.audio/capture/getStatus`

Returns the status (capture)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/capture/getStatus '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="capture_resetparams"></a>
## `capture/resetParams` ⚠️ DANGEROUS

`luna://com.webos.service.audio/capture/resetParams`

Resets the params (capture)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/capture/resetParams '{}'
```

> ACG groups: all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="capture_setparams"></a>
## `capture/setParams`

`luna://com.webos.service.audio/capture/setParams`

Sets the params (capture)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/capture/setParams '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="capture_start"></a>
## `capture/start`

`luna://com.webos.service.audio/capture/start`

Starts the audio (capture)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/capture/start '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="capture_stop"></a>
## `capture/stop`

`luna://com.webos.service.audio/capture/stop`

Stops the audio (capture)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/capture/stop '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `enabled` | Boolean (optional) Indicates the current state of the audio effect. Possible values are: - true: Audio effect is enabled. - false: Audio effect is not enabled. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'Error Codes' section of this method for details. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/checkAudioEffectStatus '{"effectName":"speech enhancement"}
```

> ACG: audio.query \| Returns: enabled:Boolean; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="connectsoundinput"></a>
## `connectSoundInput`

`luna://com.webos.service.audio/connectSoundInput`

Connects the sound input.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/connectSoundInput '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. |

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

Disables the scenario.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_busytone"></a>
## `dtmf/busyTone`

`luna://com.webos.service.audio/dtmf/busyTone`

Handles the busy tone (dtmf)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/dtmf/busyTone '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_emergencycall"></a>
## `dtmf/emergencyCall`

`luna://com.webos.service.audio/dtmf/emergencyCall`

Handles the emergency call (dtmf)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/dtmf/emergencyCall '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_playalert"></a>
## `dtmf/playAlert`

`luna://com.webos.service.audio/dtmf/playAlert`

Plays the alert (dtmf)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/dtmf/playAlert '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_playdtmf"></a>
## `dtmf/playDTMF`

`luna://com.webos.service.audio/dtmf/playDTMF`

Plays the DTMF (dtmf)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/dtmf/playDTMF '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="dtmf_stopdtmf"></a>
## `dtmf/stopDTMF`

`luna://com.webos.service.audio/dtmf/stopDTMF`

Stops the DTMF (dtmf)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

Enables the scenario.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

**Returns:**

| Field | Type / notes |
|---|---|
| `audioEffectList` | String array (optional) List of the available audio effects. Possible values are: - speech enhancement - gain control - beamforming (not listed if none of the array microphones support beamforming) - dynamic compressor - equalizer - bass boost |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'Error Codes' section of this method for details. |
| `status` | Object array: effectStatus (optional) Indicates status of audio effects. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/getAudioEffectsStatus '{"subscribe":false }
```

> ACG: audio.query \| Returns: subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String; status:Object array: effectStatus \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getcurrentscenario"></a>
## `getCurrentScenario`

`luna://com.webos.service.audio/getCurrentScenario`

Returns the current scenario.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

**Returns:**

| Field | Type / notes |
|---|---|
| `streamType` | String (optional) Indicates the stream name of the input volume to be applied. Check "Parameters" section for list of possible values. |
| `volume` | Number (optional) Returns the value of applied volume in case of success. Possible range: 0-100 |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `playbackStatus` | String (optional) Playback status. Possible values are - playing - paused - stopped |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `soundInput` | String (optional) The active sound input device. |
| `displayId` | Number (optional) The display ID with which the sound input device is associated. |

```sh
luna-send -n 1 luna://com.webos.service.audio/getSoundInput '{}
```

> ACG: audio.query \| Returns: soundInput:String; returnValue:Boolean; subscribed:Boolean; displayId:Number \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getsoundinputlist"></a>
## `getSoundInputList`

`luna://com.webos.service.audio/getSoundInputList`

Returns the sound input list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/getSoundInputList '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsoundout"></a>
## `getSoundOut`

`luna://com.webos.service.audio/getSoundOut`

Returns the sound out.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

**Returns:**

| Field | Type / notes |
|---|---|
| `soundOutput` | String (optional) Current sound output. Possible values are: - tv\_speaker - external\_optical - external\_arc - lineout - headphone - tv\_external\_speaker - tv\_speaker\_headphone - alsa - wisa\_speaker - lgSoundSync |
| `displayId` | Number (optional) The display ID with which the sound output device is associated. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `sourceType` | String (required) The source for the volume. |
| `volume` | Number (required) The source volume. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `sourceObject` | Object array: sourceObject (required) The list of active source connections. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `streamObject` | Object array: streamObject (required) Indicates the list of active connections. |

```sh
luna-send -i -f luna://com.webos.service.audio/getStreamStatus '{ "streamType":"default1", "subscribe":true }
```

> ACG: audio.query \| Returns: returnValue:Boolean; subscribed:Boolean; streamObject:Object array: streamObject \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="getvolume"></a>
## `getVolume`

`luna://com.webos.service.audio/getVolume`

Returns the volume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="listscenarios"></a>
## `listScenarios`

`luna://com.webos.service.audio/listScenarios`

Lists the scenarios.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'Error Codes' section of the method for details. |
| `deviceList` | Object array: deviceList (optional) List of input and output devices. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'Error Codes' section of the method for details. |
| `soundInput` | String (optional) Input device name. Possible values are: - usb\_mic0 - usb\_mic1 - pcm\_input (Applicable only for OSE Emulator) |
| `volume` | Number (int8\_t) (optional) Device volume. Possible values 0 - 100. |
| `muteStatus` | Boolean (optional) Mute status of input device. Possible values are: - true: Device is muted. - false: Device is not muted. |

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
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed. false: Not subscribed. |
| `soundOutput` | String (optional) Indicates the audio output device. Possible values are: alsa pcm_output pcm_output1 pcm_headphone usb_speaker0 usb_speaker1 bluetooth_speaker0 |

**Returns:**

| Field | Type / notes |
|---|---|
| `volumeStatus` | Object: VolumeStatus (required) Indicates the status of volume for different audio output devices. |
| `callerId` | String (required) Indicates the luna service name of the calling application. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'Error Codes' section of the method for details. |
| `soundInput` | String (optional) Input device name. Possible values are: - usb\_mic0 - usb\_mic1 - pcm\_input (Applicable only for OSE Emulator) |
| `mute` | Boolean (optional) Device mute status. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `mute` | Boolean (required) Indicates if the master volume is on mute or not. Possible values are: - true: Master volume is on mute. - false: Master volume is not on mute. |
| `soundOutput` | String (required) Indicates the audio output device. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'Error Codes' section of the method for details. |
| `soundInput` | String (optional) Input device name. Possible values are: - usb\_mic0 - usb\_mic1 - pcm\_input (Applicable only for OSE Emulator) |
| `volume` | Number (int8\_t) (optional) Device volume. |

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
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sessionId` | Number (optional) Indicates the display/session applicable to the operation. Possible values are: 0 (Default) 1 |
| `soundOutput` | String (required) Indicates the target sound output device. Possible values are: pcm_output pcm_output1 pcm_headphone usb_speaker0 usb_speaker1 bluetooth_speaker0 alsa |
| `volume` | Number (required) Indicates the volume level to be set. The value can range from 0 to 100. |

**Returns:**

| Field | Type / notes |
|---|---|
| `volume` | Number (required) Indicates the current volume level. The value can range from 0 to 100. |
| `soundOutput` | String (required) Indicates the target sound output device. |

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
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `soundOutput` | String (required) Indicates the audio output device. Possible values are: alsa pcm_output pcm_output1 pcm_headphone usb_speaker0 usb_speaker1 bluetooth_speaker0 |
| `sessionId` | Number (optional) Indicates the display/session applicable to the operation. Possible values are: 0 (Default) 1 |

**Returns:**

| Field | Type / notes |
|---|---|
| `volume` | Number (required) Indicates the current level of volume. The value can range from 0 to 100. |
| `soundOutput` | String (required) Indicates the audio sound output device. |

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
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sessionId` | Number (optional) Indicates the display/session applicable to the operation. Possible values are: 0 (Default) 0 |
| `soundOutput` | String (optional) Indicates the audio output device Possible values are: alsa pcm_output pcm_output1 pcm_headphone usb_speaker0 usb_speaker1 bluetooth_speaker0 |

**Returns:**

| Field | Type / notes |
|---|---|
| `volume` | Number (required) Indicates the current level of volume. The value can range from 0 to 100. |
| `soundOutput` | String (required) Indicates the audio output device. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/master/volumeUp '{ "soundOutput":"pcm_output", "sessionId":0 }
```

> ACG: audio.operation \| Returns: volume:Number; returnValue:Boolean; soundOutput:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in \|\| Addressed over SSAP as 'com.webos.service.audio/master/volumeUp' in LGTV Companion example scripts (works as an alternative to ssap://audio/*). The audio/* aliases (audio/setVolume etc.) most probably map to these but that mapping is not stated in the sources.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/), [2](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Powershell%20functions.md)

<a id="media_broadcastevent"></a>
## `media/broadcastEvent`

`luna://com.webos.service.audio/media/broadcastEvent`

Handles the broadcast event (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_disablescenario"></a>
## `media/disableScenario`

`luna://com.webos.service.audio/media/disableScenario`

Disables the scenario (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_enablescenario"></a>
## `media/enableScenario`

`luna://com.webos.service.audio/media/enableScenario`

Enables the scenario (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getcurrentscenario"></a>
## `media/getCurrentScenario`

`luna://com.webos.service.audio/media/getCurrentScenario`

Returns the current scenario (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getlatency"></a>
## `media/getLatency`

`luna://com.webos.service.audio/media/getLatency`

Returns the latency (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/getLatency '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getmicgain"></a>
## `media/getMicGain`

`luna://com.webos.service.audio/media/getMicGain`

Returns the mic gain (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/getMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_getvolume"></a>
## `media/getVolume`

`luna://com.webos.service.audio/media/getVolume`

Returns the volume (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_listscenarios"></a>
## `media/listScenarios`

`luna://com.webos.service.audio/media/listScenarios`

Lists the scenarios (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_lockvolumekeys"></a>
## `media/lockVolumeKeys`

`luna://com.webos.service.audio/media/lockVolumeKeys`

Locks the volume keys (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_offsetmicgain"></a>
## `media/offsetMicGain`

`luna://com.webos.service.audio/media/offsetMicGain`

Handles the offset mic gain (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/offsetMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_offsetvolume"></a>
## `media/offsetVolume`

`luna://com.webos.service.audio/media/offsetVolume`

Handles the offset volume (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setcurrentscenario"></a>
## `media/setCurrentScenario`

`luna://com.webos.service.audio/media/setCurrentScenario`

Sets the current scenario (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setlatency"></a>
## `media/setLatency`

`luna://com.webos.service.audio/media/setLatency`

Sets the latency (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/media/setLatency '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="media_setmicgain"></a>
## `media/setMicGain`

`luna://com.webos.service.audio/media/setMicGain`

Sets the mic gain (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "Error Codes " section of this method for details. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/media/setVolume '{"volume":10}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="media_status"></a>
## `media/status`

`luna://com.webos.service.audio/media/status`

Handles the status (media)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

**Returns:**

| Field | Type / notes |
|---|---|
| `streamType` | String (optional) The sink that is muted/unmuted. |
| `mute` | Boolean (optional) Indicates the mute status of the sink. |
| `errorText` | String (optional) The reason for the failure of the operation. |
| `errorCode` | Number (optional) The error code for the failed operation. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `sourceType` | String (required) The source that is muted/unmuted. |
| `mute` | Boolean (required) Indicates the mute status of the source. |

```sh
luna-send -n 1 luna://com.webos.service.audio/muteSource '{"sourceType":"record","mute":true}
```

> ACG: audio.operation \| Returns: sourceType:String; returnValue:Boolean; mute:Boolean \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="nav_status"></a>
## `nav/status`

`luna://com.webos.service.audio/nav/status`

Handles the status (nav)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/nav/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_getvolume"></a>
## `notification/getVolume`

`luna://com.webos.service.audio/notification/getVolume`

Returns the volume (notification)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/notification/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_offsetvolume"></a>
## `notification/offsetVolume`

`luna://com.webos.service.audio/notification/offsetVolume`

Handles the offset volume (notification)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/notification/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_setvolume"></a>
## `notification/setVolume`

`luna://com.webos.service.audio/notification/setVolume`

Sets the volume (notification)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/notification/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="notification_status"></a>
## `notification/status`

`luna://com.webos.service.audio/notification/status`

Handles the status (notification)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/notification/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_bluetoothaudiopropertiesset"></a>
## `phone/bluetoothAudioPropertiesSet`

`luna://com.webos.service.audio/phone/bluetoothAudioPropertiesSet`

Handles the bluetooth audio properties set (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/bluetoothAudioPropertiesSet '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_broadcastevent"></a>
## `phone/broadcastEvent`

`luna://com.webos.service.audio/phone/broadcastEvent`

Handles the broadcast event (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_callstatusupdate"></a>
## `phone/CallStatusUpdate`

`luna://com.webos.service.audio/phone/CallStatusUpdate`

Calls the status update (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/CallStatusUpdate '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_disablescenario"></a>
## `phone/disableScenario`

`luna://com.webos.service.audio/phone/disableScenario`

Disables the scenario (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_enablescenario"></a>
## `phone/enableScenario`

`luna://com.webos.service.audio/phone/enableScenario`

Enables the scenario (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_getcurrentscenario"></a>
## `phone/getCurrentScenario`

`luna://com.webos.service.audio/phone/getCurrentScenario`

Returns the current scenario (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_getvolume"></a>
## `phone/getVolume`

`luna://com.webos.service.audio/phone/getVolume`

Returns the volume (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_hacget"></a>
## `phone/hacGet`

`luna://com.webos.service.audio/phone/hacGet`

Handles the hac get (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/hacGet '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_hacset"></a>
## `phone/hacSet`

`luna://com.webos.service.audio/phone/hacSet`

Handles the hac set (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/hacSet '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_listscenarios"></a>
## `phone/listScenarios`

`luna://com.webos.service.audio/phone/listScenarios`

Lists the scenarios (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_lockvolumekeys"></a>
## `phone/lockVolumeKeys`

`luna://com.webos.service.audio/phone/lockVolumeKeys`

Locks the volume keys (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_museset"></a>
## `phone/museSet`

`luna://com.webos.service.audio/phone/museSet`

Handles the muse set (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/museSet '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_offsetvolume"></a>
## `phone/offsetVolume`

`luna://com.webos.service.audio/phone/offsetVolume`

Handles the offset volume (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setcurrentscenario"></a>
## `phone/setCurrentScenario`

`luna://com.webos.service.audio/phone/setCurrentScenario`

Sets the current scenario (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setmuted"></a>
## `phone/setMuted`

`luna://com.webos.service.audio/phone/setMuted`

Sets the muted (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_setvolume"></a>
## `phone/setVolume`

`luna://com.webos.service.audio/phone/setVolume`

Sets the volume (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/phone/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="phone_status"></a>
## `phone/status`

`luna://com.webos.service.audio/phone/status`

Handles the status (phone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

**Returns:**

| Field | Type / notes |
|---|---|
| `playbackId` | String (required) Playback ID of the played stream. |

```sh
luna-send -n 1 luna://com.webos.service.audio/playSound '{ "fileName":"/usr/share/audiod/systemsounds/voicestart-ondemand.pcm", "sink":"default1", "sampleRate":48000, "format":"PA_SAMPLE_S16LE", "channels":2 }
```

> ACG: audio.management \| Returns: returnValue:Boolean; playbackId:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="quality_setqualityattribute"></a>
## `quality/setQualityAttribute`

`luna://com.webos.service.audio/quality/setQualityAttribute`

Sets the quality attribute (quality)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/quality/setQualityAttribute '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="quality_setsoundoutputmode"></a>
## `quality/setSoundOutputMode`

`luna://com.webos.service.audio/quality/setSoundOutputMode`

Sets the sound output mode (quality)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/quality/setSoundOutputMode '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. |
| `trackId` | String (optional) Track ID of the registered playback. |
| `streamType` | String (optional) Type of the audio stream. |

```sh
luna-send -n 1 -f luna://com.webos.service.audio/registerTrack '{"streamType":"default1"}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; trackId:String; streamType:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="ringtone_getvolume"></a>
## `ringtone/getVolume`

`luna://com.webos.service.audio/ringtone/getVolume`

Returns the volume (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/ringtone/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_lockvolumekeys"></a>
## `ringtone/lockVolumeKeys`

`luna://com.webos.service.audio/ringtone/lockVolumeKeys`

Locks the volume keys (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/ringtone/lockVolumeKeys '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_offsetvolume"></a>
## `ringtone/offsetVolume`

`luna://com.webos.service.audio/ringtone/offsetVolume`

Handles the offset volume (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/ringtone/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_setmuted"></a>
## `ringtone/setMuted`

`luna://com.webos.service.audio/ringtone/setMuted`

Sets the muted (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/ringtone/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_setvolume"></a>
## `ringtone/setVolume`

`luna://com.webos.service.audio/ringtone/setVolume`

Sets the volume (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/ringtone/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ringtone_status"></a>
## `ringtone/status`

`luna://com.webos.service.audio/ringtone/status`

Handles the status (ringtone)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'Error Codes' section of this method for details. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/setAudioEqualizerPreset '{"preset":1}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="setcurrentscenario"></a>
## `setCurrentScenario`

`luna://com.webos.service.audio/setCurrentScenario`

Sets the current scenario.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

**Returns:**

| Field | Type / notes |
|---|---|
| `volume` | Number (required) Returns the value of applied volume in case of success. The value can range from 0 to 100. |
| `streamType` | String (required) Returns the stream name of the volume applied. |

```sh
luna-send -n 1 luna://com.webos.service.audio/setInputVolume '{ "streamType":"default1", "volume":50 }
```

> ACG: audio.operation \| Returns: returnValue:Boolean; volume:Number; streamType:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="setmuted"></a>
## `setMuted`

`luna://com.webos.service.audio/setMuted`

Sets the muted.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

**Returns:**

| Field | Type / notes |
|---|---|
| `soundInput` | String (required) The sound input device that is set. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `soundOutput` | String (required) The audio output device. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `volume` | Number (required) The updated volume level. |
| `sourceType` | String (required) The source to which the volume is set. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. |
| `trackId` | String (optional) Track ID for which the volume is set. |
| `volume` | Number (optional) Volume level that is set. |
| `streamType` | String (optional) Type of audio stream. |

```sh
luna-send -n 1 -f luna://com.webos.service.audio/setTrackVolume '{"trackId":"_rKjYAlq3r","volume":50}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; trackId:String; volume:Number; streamType:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="setvolume"></a>
## `setVolume`

`luna://com.webos.service.audio/setVolume`

Sets the volume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setvolume2"></a>
## `setVolume2`

`luna://com.webos.service.audio/setVolume2`

Sets the volume 2.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

**Returns:**

| Field | Type / notes |
|---|---|
| `soundOut` | String (required) Indicates the audio output device. Possible values are: - alsa |

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

Returns the audio (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/get '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getpreference"></a>
## `state/getPreference`

`luna://com.webos.service.audio/state/getPreference`

Returns the preference (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/getPreference '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getsoundprofile"></a>
## `state/getSoundProfile`

`luna://com.webos.service.audio/state/getSoundProfile`

Returns the sound profile (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/getSoundProfile '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_gettouchsound"></a>
## `state/getTouchSound`

`luna://com.webos.service.audio/state/getTouchSound`

Returns the touch sound (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/getTouchSound '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_getvolumebalance"></a>
## `state/getVolumeBalance`

`luna://com.webos.service.audio/state/getVolumeBalance`

Returns the volume balance (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/getVolumeBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_loadrtpmodule"></a>
## `state/loadRTPModule`

`luna://com.webos.service.audio/state/loadRTPModule`

Loads the RTP module (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/loadRTPModule '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_loopback"></a>
## `state/loopback`

`luna://com.webos.service.audio/state/loopback`

Handles the loopback (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/loopback '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_setfilter"></a>
## `state/pulse/setFilter`

`luna://com.webos.service.audio/state/pulse/setFilter`

Sets the filter (state pulse)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/pulse/setFilter '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_sinkstatus"></a>
## `state/pulse/sinkStatus`

`luna://com.webos.service.audio/state/pulse/sinkStatus`

Handles the sink status (state pulse)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/pulse/sinkStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_pulse_suspend"></a>
## `state/pulse/suspend`

`luna://com.webos.service.audio/state/pulse/suspend`

Handles the suspend (state pulse)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/pulse/suspend '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_set"></a>
## `state/set`

`luna://com.webos.service.audio/state/set`

Sets the audio (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/set '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setnrec"></a>
## `state/setNREC`

`luna://com.webos.service.audio/state/setNREC`

Sets the NREC (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setNREC '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setpreference"></a>
## `state/setPreference`

`luna://com.webos.service.audio/state/setPreference`

Sets the preference (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setPreference '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setringerswitch"></a>
## `state/setRingerSwitch`

`luna://com.webos.service.audio/state/setRingerSwitch`

Sets the ringer switch (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setRingerSwitch '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setsoundprofile"></a>
## `state/setSoundProfile`

`luna://com.webos.service.audio/state/setSoundProfile`

Sets the sound profile (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setSoundProfile '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_settouchsound"></a>
## `state/setTouchSound`

`luna://com.webos.service.audio/state/setTouchSound`

Sets the touch sound (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setTouchSound '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_setvolumebalance"></a>
## `state/setVolumeBalance`

`luna://com.webos.service.audio/state/setVolumeBalance`

Sets the volume balance (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/setVolumeBalance '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_unloadrtpmodule"></a>
## `state/unloadRTPModule`

`luna://com.webos.service.audio/state/unloadRTPModule`

Unloads the RTP module (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/unloadRTPModule '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="state_volumeramp"></a>
## `state/volumeRamp`

`luna://com.webos.service.audio/state/volumeRamp`

Handles the volume ramp (state)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/state/volumeRamp '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="status"></a>
## `status`

`luna://com.webos.service.audio/status`

Handles the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

Returns the volume (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/system/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_offsetvolume"></a>
## `system/offsetVolume`

`luna://com.webos.service.audio/system/offsetVolume`

Handles the offset volume (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/system/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_setmuted"></a>
## `system/setMuted`

`luna://com.webos.service.audio/system/setMuted`

Sets the muted (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/system/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_setvolume"></a>
## `system/setVolume`

`luna://com.webos.service.audio/system/setVolume`

Sets the volume (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/system/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="system_status"></a>
## `system/status`

`luna://com.webos.service.audio/system/status`

Handles the status (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

<a id="telephony_answered"></a>
## `telephony/answered`

`luna://com.webos.service.audio/telephony/answered`

Handles the answered (telephony)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/telephony/answered '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="telephony_callaudio"></a>
## `telephony/callAudio`

`luna://com.webos.service.audio/telephony/callAudio`

Calls the audio (telephony)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/telephony/callAudio '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="telephony_startcall"></a>
## `telephony/startCall`

`luna://com.webos.service.audio/telephony/startCall`

Starts the call (telephony)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/telephony/startCall '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="timer_gettimeron"></a>
## `timer/getTimerOn`

`luna://com.webos.service.audio/timer/getTimerOn`

Returns the timer on (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/getTimerOn '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_getvolume"></a>
## `timer/getVolume`

`luna://com.webos.service.audio/timer/getVolume`

Returns the volume (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_offsetvolume"></a>
## `timer/offsetVolume`

`luna://com.webos.service.audio/timer/offsetVolume`

Handles the offset volume (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_setmuted"></a>
## `timer/setMuted`

`luna://com.webos.service.audio/timer/setMuted`

Sets the muted (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/setMuted '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_settimeron"></a>
## `timer/setTimerOn`

`luna://com.webos.service.audio/timer/setTimerOn`

Sets the timer on (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/setTimerOn '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_setvolume"></a>
## `timer/setVolume`

`luna://com.webos.service.audio/timer/setVolume`

Sets the volume (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_status"></a>
## `timer/status`

`luna://com.webos.service.audio/timer/status`

Handles the status (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="timer_tonegenerator"></a>
## `timer/tonegenerator`

`luna://com.webos.service.audio/timer/tonegenerator`

Handles the tonegenerator (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/timer/tonegenerator '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tonegenerator_playcallertone"></a>
## `tonegenerator/playCallertone`

`luna://com.webos.service.audio/tonegenerator/playCallertone`

Plays the callertone (tonegenerator)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tonegenerator/playCallertone '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="tv_activatewisaspeaker"></a>
## `tv/activateWisaSpeaker`

`luna://com.webos.service.audio/tv/activateWisaSpeaker`

Activates the wisa speaker (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/activateWisaSpeaker '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_ctrmicswitch"></a>
## `tv/ctrMicSwitch`

`luna://com.webos.service.audio/tv/ctrMicSwitch`

Handles the ctr mic switch (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/ctrMicSwitch '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getamplifierstate"></a>
## `tv/getAmplifierState`

`luna://com.webos.service.audio/tv/getAmplifierState`

Returns the amplifier state (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/getAmplifierState '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getarcavsynctime"></a>
## `tv/getArcAvSyncTime`

`luna://com.webos.service.audio/tv/getArcAvSyncTime`

Returns the ARC A/V sync time (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/getArcAvSyncTime '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getaudioeffectdata"></a>
## `tv/getAudioEffectData`

`luna://com.webos.service.audio/tv/getAudioEffectData`

Returns the audio effect data (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/getAudioEffectData '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tv_getaudioinputproperty"></a>
## `tv/getAudioInputProperty`

`luna://com.webos.service.audio/tv/getAudioInputProperty`

Returns the audio input property (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/getAudioInputProperty '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getextdevicefwversion"></a>
## `tv/getExtDeviceFwVersion`

`luna://com.webos.service.audio/tv/getExtDeviceFwVersion`

Returns the ext device firmware version (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/getExtDeviceFwVersion '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getgainasinput"></a>
## `tv/getGainAsInput`

`luna://com.webos.service.audio/tv/getGainAsInput`

Returns the gain as input (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/getGainAsInput '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getheadphonestatus"></a>
## `tv/getHeadphoneStatus`

`luna://com.webos.service.audio/tv/getHeadphoneStatus`

Returns the headphone status (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/getHeadphoneStatus '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getsoundcardsstate"></a>
## `tv/getSoundCardsState`

`luna://com.webos.service.audio/tv/getSoundCardsState`

Returns the sound cards state (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/getSoundCardsState '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_mixdigitalsoundoutput"></a>
## `tv/mixDigitalSoundOutput`

`luna://com.webos.service.audio/tv/mixDigitalSoundOutput`

Handles the mix digital sound output (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/mixDigitalSoundOutput '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_playonpowerstate"></a>
## `tv/playOnPowerState`

`luna://com.webos.service.audio/tv/playOnPowerState`

Plays the on power state (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/playOnPowerState '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_readi2cdatafromamplifier"></a>
## `tv/readI2cDataFromAmplifier`

`luna://com.webos.service.audio/tv/readI2cDataFromAmplifier`

Reads the i 2 c data from amplifier (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/readI2cDataFromAmplifier '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_resetsoundsettings"></a>
## `tv/resetSoundSettings` ⚠️ DANGEROUS

`luna://com.webos.service.audio/tv/resetSoundSettings`

Resets the sound settings (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/resetSoundSettings '{}'
```

> ACG groups: media, public, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setamplifierstate"></a>
## `tv/setAmplifierState`

`luna://com.webos.service.audio/tv/setAmplifierState`

Sets the amplifier state (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setAmplifierState '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setarcdeviceinfo"></a>
## `tv/setARCDeviceInfo`

`luna://com.webos.service.audio/tv/setARCDeviceInfo`

Sets the ARC device info (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setARCDeviceInfo '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setaudioeffectstate"></a>
## `tv/setAudioEffectState`

`luna://com.webos.service.audio/tv/setAudioEffectState`

Sets the audio effect state (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setAudioEffectState '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="tv_setaudiovideosync"></a>
## `tv/setAudioVideoSync`

`luna://com.webos.service.audio/tv/setAudioVideoSync`

Sets the audio video sync (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setAudioVideoSync '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setdolbyottmode"></a>
## `tv/setDolbyOTTMode`

`luna://com.webos.service.audio/tv/setDolbyOTTMode`

Sets the dolby OTT mode (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setDolbyOTTMode '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setdolbyvisionpopup"></a>
## `tv/setDolbyVisionPopup`

`luna://com.webos.service.audio/tv/setDolbyVisionPopup`

Sets the dolby vision popup (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setDolbyVisionPopup '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setequalizerstatus"></a>
## `tv/setEqualizerStatus`

`luna://com.webos.service.audio/tv/setEqualizerStatus`

Sets the equalizer status (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setEqualizerStatus '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setinputvolume"></a>
## `tv/setInputVolume`

`luna://com.webos.service.audio/tv/setInputVolume`

Sets the input volume (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setInputVolume '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setmssproperties"></a>
## `tv/setMSSProperties`

`luna://com.webos.service.audio/tv/setMSSProperties`

Sets the MSS properties (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setMSSProperties '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setnpuproperties"></a>
## `tv/setNpuProperties`

`luna://com.webos.service.audio/tv/setNpuProperties`

Sets the npu properties (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setNpuProperties '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setoffsetdelay"></a>
## `tv/setOffsetDelay`

`luna://com.webos.service.audio/tv/setOffsetDelay`

Sets the offset delay (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setOffsetDelay '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setoutputmute"></a>
## `tv/setOutputMute`

`luna://com.webos.service.audio/tv/setOutputMute`

Sets the output mute (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setOutputMute '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setpopupdisplaystatus"></a>
## `tv/setPopupDisplayStatus`

`luna://com.webos.service.audio/tv/setPopupDisplayStatus`

Sets the popup display status (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setPopupDisplayStatus '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setpswproperties"></a>
## `tv/setPSWProperties`

`luna://com.webos.service.audio/tv/setPSWProperties`

Sets the PSW properties (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setPSWProperties '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setqualityattribute"></a>
## `tv/setQualityAttribute`

`luna://com.webos.service.audio/tv/setQualityAttribute`

Sets the quality attribute (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setQualityAttribute '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setscms"></a>
## `tv/setSCMS`

`luna://com.webos.service.audio/tv/setSCMS`

Sets the SCMS (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setSCMS '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setsoundenginestatus"></a>
## `tv/setSoundEngineStatus`

`luna://com.webos.service.audio/tv/setSoundEngineStatus`

Sets the sound engine status (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setSoundEngineStatus '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setsoundoutputmode"></a>
## `tv/setSoundOutputMode`

`luna://com.webos.service.audio/tv/setSoundOutputMode`

Sets the sound output mode (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setSoundOutputMode '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_setvideolatencytime"></a>
## `tv/setVideoLatencyTime`

`luna://com.webos.service.audio/tv/setVideoLatencyTime`

Sets the video latency time (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/setVideoLatencyTime '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_switchmicrophone"></a>
## `tv/switchMicrophone`

`luna://com.webos.service.audio/tv/switchMicrophone`

Switches the microphone (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/switchMicrophone '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_updateextfw"></a>
## `tv/updateExtFw`

`luna://com.webos.service.audio/tv/updateExtFw`

Updates the ext firmware (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/updateExtFw '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_writei2cdatatoamplifier"></a>
## `tv/writeI2cDataToAmplifier`

`luna://com.webos.service.audio/tv/writeI2cDataToAmplifier`

Writes the i 2 c data to amplifier (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/tv/writeI2cDataToAmplifier '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) errorCode contains the error code if the method fails. The method will return errorCode only if it fails. |
| `errorText` | String (optional) errorText contains the error text if the method fails. The method will return errorText only if it fails. |

```sh
luna-send -n 1 luna://com.webos.service.audio/udev/event '{"event":"headset-inserted"}
```

> ACG: audio.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="umi_activateconnection"></a>
## `UMI/activateConnection`

`luna://com.webos.service.audio/UMI/activateConnection`

Activates the connection (UMI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/UMI/activateConnection '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `source` | String (optional) Indicates the audio source. |
| `sink` | String (optional) Indicates the audio sink. |

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

**Returns:**

| Field | Type / notes |
|---|---|
| `source` | String (required) Indicates the audio source. |
| `sink` | String (required) Indicates the audio sink. |

```sh
luna-send -f -n 1 luna://com.webos.service.audio/UMI/disconnect '{ "sink":"ALSA", "source":"AMIXER", "sourcePort":0, "audioType":"umimedia" }
```

> ACG: audio.operation \| Returns: returnValue:Boolean; source:String; sink:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="umi_getinputvolume"></a>
## `UMI/getInputVolume`

`luna://com.webos.service.audio/UMI/getInputVolume`

Returns the input volume (UMI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/UMI/getInputVolume '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="umi_getstatus"></a>
## `UMI/getStatus`

`luna://com.webos.service.audio/UMI/getStatus`

Shows the connection status of audio resources.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `audio` | Object array: audio (required) Audio connection details. |

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

<a id="umi_register"></a>
## `UMI/register`

`luna://com.webos.service.audio/UMI/register`

Registers the audio (UMI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/UMI/register '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="umi_setinputdownmix"></a>
## `UMI/setInputDownMix`

`luna://com.webos.service.audio/UMI/setInputDownMix`

Sets the input down mix (UMI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/UMI/setInputDownMix '{}'
```

> ACG groups: media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="umi_setinputvolume"></a>
## `UMI/setInputVolume`

`luna://com.webos.service.audio/UMI/setInputVolume`

Sets the input volume (UMI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/UMI/setInputVolume '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="umi_unregister"></a>
## `UMI/unregister`

`luna://com.webos.service.audio/UMI/unregister`

Unregisters the audio (UMI)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/UMI/unregister '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

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

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. |
| `trackId` | String (optional) Track ID that is unregistered. |

```sh
luna-send -n 1 -f luna://com.webos.service.audio/unregisterTrack '{"trackId":"_OOWR1nOw9"}
```

> ACG: audio.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; trackId:String \| Service: Controls the audio policy of a webOS system. Implements audio routing (sending audio streams to the proper destinations) and setting volumes in different scenarios. Its functionality is categorized in

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audio/)

<a id="vibrate_get"></a>
## `vibrate/get`

`luna://com.webos.service.audio/vibrate/get`

Returns the audio (vibrate)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vibrate/get '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vibrate_set"></a>
## `vibrate/set`

`luna://com.webos.service.audio/vibrate/set`

Sets the audio (vibrate)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vibrate/set '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_broadcastevent"></a>
## `voiceCommand/broadcastEvent`

`luna://com.webos.service.audio/voiceCommand/broadcastEvent`

Handles the broadcast event (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_control"></a>
## `voiceCommand/control`

`luna://com.webos.service.audio/voiceCommand/control`

Controls the audio (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/control '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_disablescenario"></a>
## `voiceCommand/disableScenario`

`luna://com.webos.service.audio/voiceCommand/disableScenario`

Disables the scenario (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_enablescenario"></a>
## `voiceCommand/enableScenario`

`luna://com.webos.service.audio/voiceCommand/enableScenario`

Enables the scenario (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_getcurrentscenario"></a>
## `voiceCommand/getCurrentScenario`

`luna://com.webos.service.audio/voiceCommand/getCurrentScenario`

Returns the current scenario (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_getmicgain"></a>
## `voiceCommand/getMicGain`

`luna://com.webos.service.audio/voiceCommand/getMicGain`

Returns the mic gain (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/getMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_getvolume"></a>
## `voiceCommand/getVolume`

`luna://com.webos.service.audio/voiceCommand/getVolume`

Returns the volume (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_listscenarios"></a>
## `voiceCommand/listScenarios`

`luna://com.webos.service.audio/voiceCommand/listScenarios`

Lists the scenarios (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_offsetmicgain"></a>
## `voiceCommand/offsetMicGain`

`luna://com.webos.service.audio/voiceCommand/offsetMicGain`

Handles the offset mic gain (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/offsetMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_offsetvolume"></a>
## `voiceCommand/offsetVolume`

`luna://com.webos.service.audio/voiceCommand/offsetVolume`

Handles the offset volume (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="voicecommand_setcurrentscenario"></a>
## `voiceCommand/setCurrentScenario`

`luna://com.webos.service.audio/voiceCommand/setCurrentScenario`

Sets the current scenario (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_setmicgain"></a>
## `voiceCommand/setMicGain`

`luna://com.webos.service.audio/voiceCommand/setMicGain`

Sets the mic gain (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/setMicGain '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_setvolume"></a>
## `voiceCommand/setVolume`

`luna://com.webos.service.audio/voiceCommand/setVolume`

Sets the volume (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods). \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="voicecommand_status"></a>
## `voiceCommand/status`

`luna://com.webos.service.audio/voiceCommand/status`

Handles the status (voice command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/voiceCommand/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="volumedown"></a>
## `volumeDown`

`luna://com.webos.service.audio/volumeDown`

Handles the volume down.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/volumeDown '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="volumekeeping"></a>
## `volumeKeeping`

`luna://com.webos.service.audio/volumeKeeping`

Handles the volume keeping.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

Handles the volume up.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/volumeUp '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_broadcastevent"></a>
## `vvm/broadcastEvent`

`luna://com.webos.service.audio/vvm/broadcastEvent`

Handles the broadcast event (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/broadcastEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_control"></a>
## `vvm/control`

`luna://com.webos.service.audio/vvm/control`

Controls the audio (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/control '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_disablescenario"></a>
## `vvm/disableScenario`

`luna://com.webos.service.audio/vvm/disableScenario`

Disables the scenario (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/disableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_enablescenario"></a>
## `vvm/enableScenario`

`luna://com.webos.service.audio/vvm/enableScenario`

Enables the scenario (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/enableScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_getcurrentscenario"></a>
## `vvm/getCurrentScenario`

`luna://com.webos.service.audio/vvm/getCurrentScenario`

Returns the current scenario (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/getCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_getvolume"></a>
## `vvm/getVolume`

`luna://com.webos.service.audio/vvm/getVolume`

Returns the volume (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/getVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_listscenarios"></a>
## `vvm/listScenarios`

`luna://com.webos.service.audio/vvm/listScenarios`

Lists the scenarios (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/listScenarios '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_offsetvolume"></a>
## `vvm/offsetVolume`

`luna://com.webos.service.audio/vvm/offsetVolume`

Handles the offset volume (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/offsetVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_setcurrentscenario"></a>
## `vvm/setCurrentScenario`

`luna://com.webos.service.audio/vvm/setCurrentScenario`

Sets the current scenario (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/setCurrentScenario '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_setvolume"></a>
## `vvm/setVolume`

`luna://com.webos.service.audio/vvm/setVolume`

Sets the volume (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/setVolume '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="vvm_status"></a>
## `vvm/status`

`luna://com.webos.service.audio/vvm/status`

Handles the status (vvm)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.audio/vvm/status '{}'
```

> Seen via `ls-monitor -i com.webos.service.audio` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, media. Only the name and ACG groups are known; parameters/return fields were not read. Same method table as com.webos.audio on this firmware (both bus names list identical methods).

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)
