# `com.webos.service.apiadapter`

API adapter that bridges remote/second-screen clients to on-device functions: audio (sound output, mute), system settings, external picture-quality data and a media viewer. _(inferred from the service's methods)_

57 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`audio/changeSoundOutput`](#audio_changesoundoutput) | ssap |  | audio | documented | Change sound output |
| [`audio/getMute`](#audio_getmute) | private |  | audio | inferred | Returns the mute (audio) |
| [`audio/getSoundOutput`](#audio_getsoundoutput) | ssap | yes | audio | documented | Get (or subscribe to) current sound output |
| [`audio/getStatus`](#audio_getstatus) | private |  | audio | inferred | Returns the status (audio) |
| [`audio/setMute`](#audio_setmute) | private |  | audio | inferred | Sets the mute (audio) |
| [`config/getConfigs`](#config_getconfigs) | private |  | settings | inferred | Returns the configs (config) |
| [`externalpq/getExternalPqData`](#externalpq_getexternalpqdata) | private |  | picture | inferred | Returns the external PQ data (externalpq) |
| [`externalpq/setExternalPqData`](#externalpq_setexternalpqdata) | private |  | picture | inferred | Sets the external PQ data (externalpq) |
| [`info`](#info) | private |  | network | inferred | Handles the info. |
| [`media_viewer/close`](#media_viewer_close) | private |  | media | inferred | Closes the apiadapter (media viewer) |
| [`media_viewer/open`](#media_viewer_open) | private |  | media | inferred | Opens the apiadapter (media viewer) |
| [`quit`](#quit) | private |  | network | inferred | Quits the apiadapter. |
| [`settings/getSystemSettingDesc`](#settings_getsystemsettingdesc) | private |  | settings | inferred | Returns the system setting desc (settings) |
| [`settings/getSystemSettings`](#settings_getsystemsettings) | private |  | settings | inferred | Returns the system settings (settings) |
| [`settings/getSystemSettingsHDRInfo`](#settings_getsystemsettingshdrinfo) | private |  | settings | inferred | Returns the system settings HDR info (settings) |
| [`settings/getSystemSettingValues`](#settings_getsystemsettingvalues) | private |  | settings | inferred | Returns the system setting values (settings) |
| [`settings/resetSystemSettingDesc`](#settings_resetsystemsettingdesc) | private |  | settings | inferred | Resets the system setting desc (settings) ⚠️ |
| [`settings/resetSystemSettings`](#settings_resetsystemsettings) | private |  | settings | inferred | Resets the system settings (settings) ⚠️ |
| [`settings/setSystemSettings`](#settings_setsystemsettings) | private |  | settings | inferred | Sets the system settings (settings) |
| [`system/getCountryInfo`](#system_getcountryinfo) | private |  | network | inferred | Returns the country info (system) |
| [`system/getSystemInfo`](#system_getsysteminfo) | private |  | network | inferred | Returns the system info (system) |
| [`system/isValidPin`](#system_isvalidpin) | private |  | network | inferred | Reports whether the valid pin is set (system) |
| [`system_launcher/close`](#system_launcher_close) | private |  | apps | inferred | Closes the apiadapter (system launcher) |
| [`system_launcher/getAppState`](#system_launcher_getappstate) | private |  | apps | inferred | Returns the app state (system launcher) |
| [`system_launcher/launch`](#system_launcher_launch) | private |  | apps | inferred | Launches the apiadapter (system launcher) |
| [`system_launcher/open`](#system_launcher_open) | private |  | apps | inferred | Opens the apiadapter (system launcher) |
| [`system_notifications/closeAlert`](#system_notifications_closealert) | private |  | notifications | inferred | Closes the alert (system notifications) |
| [`system_notifications/closeToast`](#system_notifications_closetoast) | private |  | notifications | inferred | Closes the toast (system notifications) |
| [`system_notifications/createAlert`](#system_notifications_createalert) | private |  | notifications | inferred | Creates the alert (system notifications) |
| [`system_notifications/createToast`](#system_notifications_createtoast) | private |  | notifications | inferred | Creates the toast (system notifications) |
| [`systemprofile/getProfiles`](#systemprofile_getprofiles) | private |  | network | inferred | Returns the profiles (systemprofile) |
| [`timer/getSettings`](#timer_getsettings) | private |  | settings | inferred | Returns the settings (timer) |
| [`timer/setSettings`](#timer_setsettings) | private |  | settings | inferred | Sets the settings (timer) |
| [`tv/executeOneShot`](#tv_executeoneshot) | private |  | network | inferred | Runs the one shot (TV) |
| [`tv/getACRAuthToken`](#tv_getacrauthtoken) | private |  | network | inferred | Returns the ACR auth token (TV) |
| [`tv/getChannelCurrentProgramInfo`](#tv_getchannelcurrentprograminfo) | private |  | network | inferred | Returns the channel current program info (TV) |
| [`tv/getChannelList`](#tv_getchannellist) | private |  | network | inferred | Returns the channel list (TV) |
| [`tv/getChannelProgramInfo`](#tv_getchannelprograminfo) | private |  | network | inferred | Returns the channel program info (TV) |
| [`tv/getContentState`](#tv_getcontentstate) | private |  | network | inferred | Returns the content state (TV) |
| [`tv/getCurrentChannel`](#tv_getcurrentchannel) | private |  | network | inferred | Returns the current channel (TV) |
| [`tv/getExternalInputList`](#tv_getexternalinputlist) | private |  | network | inferred | Returns the external input list (TV) |
| [`tv/getSimilarChannelList`](#tv_getsimilarchannellist) | private |  | network | inferred | Returns the similar channel list (TV) |
| [`tv/openChannel`](#tv_openchannel) | private |  | network | inferred | Opens the channel (TV) |
| [`tv/switchInput`](#tv_switchinput) | private |  | network | inferred | Switches the input (TV) |
| [`user/getUserData`](#user_getuserdata) | private |  | network | inferred | Returns the user data (user) |
| [`user/resetUserData`](#user_resetuserdata) | private |  | network | inferred | Resets the user data (user) ⚠️ |
| [`user/resetUserInfo`](#user_resetuserinfo) | private |  | network | inferred | Resets the user info (user) ⚠️ |
| [`user/resetUserSchedule`](#user_resetuserschedule) | private |  | network | inferred | Resets the user schedule (user) ⚠️ |
| [`user/setUserData`](#user_setuserdata) | private |  | network | inferred | Sets the user data (user) |
| [`user/setUserInfo`](#user_setuserinfo) | private |  | network | inferred | Sets the user info (user) |
| [`user/setUserSchedule`](#user_setuserschedule) | private |  | network | inferred | Sets the user schedule (user) |
| [`webapp/closeWebApp`](#webapp_closewebapp) | private |  | network | inferred | Closes the web app (webapp) |
| [`webapp/getAppIdForWebApp`](#webapp_getappidforwebapp) | private |  | network | inferred | Returns the app ID for web app (webapp) |
| [`webapp/isWebAppPinned`](#webapp_iswebapppinned) | private |  | network | inferred | Reports whether the web app pinned is set (webapp) |
| [`webapp/launchWebApp`](#webapp_launchwebapp) | private |  | apps | inferred | Launches the web app (webapp) |
| [`webapp/pinWebApp`](#webapp_pinwebapp) | private |  | network | inferred | Handles the pin web app (webapp) |
| [`webapp/removePinnedWebApp`](#webapp_removepinnedwebapp) | private |  | network | inferred | Removes the pinned web app (webapp) ⚠️ |

<a id="audio_changesoundoutput"></a>
## `audio/changeSoundOutput`

`luna://com.webos.service.apiadapter/audio/changeSoundOutput`

Change sound output

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `output` | string: tv_speaker \| external_arc \| external_optical \| bt_soundbar \| headphone \| lineout \| ... (see notes list) |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.apiadapter/audio/changeSoundOutput","payload":{"output":"external_arc"}}
```

> Alias ssap://audio/changeSoundOutput used by LGWebOSRemote/PyWebOSTV/homebridge-webos-tv. LGTV Companion: `-request_with_param com.webos.service.apiadapter/audio/changeSoundOutput {"output":"output"}`.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md), [4](https://github.com/klattimer/LGWebOSRemote/blob/master/LGTV/remote.py)

<a id="audio_getmute"></a>
## `audio/getMute`

`luna://com.webos.service.apiadapter/audio/getMute`

Returns the mute (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/audio/getMute '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="audio_getsoundoutput"></a>
## `audio/getSoundOutput`

`luna://com.webos.service.apiadapter/audio/getSoundOutput`

Get (or subscribe to) current sound output

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.apiadapter/audio/getSoundOutput","payload":{}}
```

> Response key: soundOutput (e.g. tv_speaker, external_arc, external_optical, bt_soundbar, headphone, lineout; full list in libs-notes.md). 'apiadapter' is the SSAP-side adapter service; there is also an alias ssap://audio/getSoundOutput (PyWebOSTV, alga).

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [4](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md), [5](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)

<a id="audio_getstatus"></a>
## `audio/getStatus`

`luna://com.webos.service.apiadapter/audio/getStatus`

Returns the status (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/audio/getStatus '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="audio_setmute"></a>
## `audio/setMute`

`luna://com.webos.service.apiadapter/audio/setMute`

Sets the mute (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/audio/setMute '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="config_getconfigs"></a>
## `config/getConfigs`

`luna://com.webos.service.apiadapter/config/getConfigs`

Returns the configs (config)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/config/getConfigs '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="externalpq_getexternalpqdata"></a>
## `externalpq/getExternalPqData`

`luna://com.webos.service.apiadapter/externalpq/getExternalPqData`

Returns the external PQ data (externalpq)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/externalpq/getExternalPqData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="externalpq_setexternalpqdata"></a>
## `externalpq/setExternalPqData`

`luna://com.webos.service.apiadapter/externalpq/setExternalPqData`

Sets the external PQ data (externalpq)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/externalpq/setExternalPqData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.apiadapter/info`

Handles the info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/info '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_viewer_close"></a>
## `media_viewer/close`

`luna://com.webos.service.apiadapter/media_viewer/close`

Closes the apiadapter (media viewer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/media_viewer/close '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="media_viewer_open"></a>
## `media_viewer/open`

`luna://com.webos.service.apiadapter/media_viewer/open`

Opens the apiadapter (media viewer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/media_viewer/open '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.apiadapter/quit`

Quits the apiadapter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/quit '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemsettingdesc"></a>
## `settings/getSystemSettingDesc`

`luna://com.webos.service.apiadapter/settings/getSystemSettingDesc`

Returns the system setting desc (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettingDesc '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemsettings"></a>
## `settings/getSystemSettings`

`luna://com.webos.service.apiadapter/settings/getSystemSettings`

Returns the system settings (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemsettingshdrinfo"></a>
## `settings/getSystemSettingsHDRInfo`

`luna://com.webos.service.apiadapter/settings/getSystemSettingsHDRInfo`

Returns the system settings HDR info (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettingsHDRInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemsettingvalues"></a>
## `settings/getSystemSettingValues`

`luna://com.webos.service.apiadapter/settings/getSystemSettingValues`

Returns the system setting values (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettingValues '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_resetsystemsettingdesc"></a>
## `settings/resetSystemSettingDesc` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/settings/resetSystemSettingDesc`

Resets the system setting desc (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/resetSystemSettingDesc '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_resetsystemsettings"></a>
## `settings/resetSystemSettings` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/settings/resetSystemSettings`

Resets the system settings (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/resetSystemSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_setsystemsettings"></a>
## `settings/setSystemSettings`

`luna://com.webos.service.apiadapter/settings/setSystemSettings`

Sets the system settings (settings)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/setSystemSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_getcountryinfo"></a>
## `system/getCountryInfo`

`luna://com.webos.service.apiadapter/system/getCountryInfo`

Returns the country info (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system/getCountryInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_getsysteminfo"></a>
## `system/getSystemInfo`

`luna://com.webos.service.apiadapter/system/getSystemInfo`

Returns the system info (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system/getSystemInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_isvalidpin"></a>
## `system/isValidPin`

`luna://com.webos.service.apiadapter/system/isValidPin`

Reports whether the valid pin is set (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system/isValidPin '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_close"></a>
## `system_launcher/close`

`luna://com.webos.service.apiadapter/system_launcher/close`

Closes the apiadapter (system launcher)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/close '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_getappstate"></a>
## `system_launcher/getAppState`

`luna://com.webos.service.apiadapter/system_launcher/getAppState`

Returns the app state (system launcher)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/getAppState '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_launch"></a>
## `system_launcher/launch`

`luna://com.webos.service.apiadapter/system_launcher/launch`

Launches the apiadapter (system launcher)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/launch '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_open"></a>
## `system_launcher/open`

`luna://com.webos.service.apiadapter/system_launcher/open`

Opens the apiadapter (system launcher)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/open '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_notifications_closealert"></a>
## `system_notifications/closeAlert`

`luna://com.webos.service.apiadapter/system_notifications/closeAlert`

Closes the alert (system notifications)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_notifications/closeAlert '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_notifications_closetoast"></a>
## `system_notifications/closeToast`

`luna://com.webos.service.apiadapter/system_notifications/closeToast`

Closes the toast (system notifications)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_notifications/closeToast '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_notifications_createalert"></a>
## `system_notifications/createAlert`

`luna://com.webos.service.apiadapter/system_notifications/createAlert`

Creates the alert (system notifications)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_notifications/createAlert '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_notifications_createtoast"></a>
## `system_notifications/createToast`

`luna://com.webos.service.apiadapter/system_notifications/createToast`

Creates the toast (system notifications)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_notifications/createToast '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="systemprofile_getprofiles"></a>
## `systemprofile/getProfiles`

`luna://com.webos.service.apiadapter/systemprofile/getProfiles`

Returns the profiles (systemprofile)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/systemprofile/getProfiles '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_getsettings"></a>
## `timer/getSettings`

`luna://com.webos.service.apiadapter/timer/getSettings`

Returns the settings (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/timer/getSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_setsettings"></a>
## `timer/setSettings`

`luna://com.webos.service.apiadapter/timer/setSettings`

Sets the settings (timer)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/timer/setSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_executeoneshot"></a>
## `tv/executeOneShot`

`luna://com.webos.service.apiadapter/tv/executeOneShot`

Runs the one shot (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/executeOneShot '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getacrauthtoken"></a>
## `tv/getACRAuthToken`

`luna://com.webos.service.apiadapter/tv/getACRAuthToken`

Returns the ACR auth token (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getACRAuthToken '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getchannelcurrentprograminfo"></a>
## `tv/getChannelCurrentProgramInfo`

`luna://com.webos.service.apiadapter/tv/getChannelCurrentProgramInfo`

Returns the channel current program info (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getChannelCurrentProgramInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getchannellist"></a>
## `tv/getChannelList`

`luna://com.webos.service.apiadapter/tv/getChannelList`

Returns the channel list (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getChannelList '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getchannelprograminfo"></a>
## `tv/getChannelProgramInfo`

`luna://com.webos.service.apiadapter/tv/getChannelProgramInfo`

Returns the channel program info (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getChannelProgramInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getcontentstate"></a>
## `tv/getContentState`

`luna://com.webos.service.apiadapter/tv/getContentState`

Returns the content state (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getContentState '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getcurrentchannel"></a>
## `tv/getCurrentChannel`

`luna://com.webos.service.apiadapter/tv/getCurrentChannel`

Returns the current channel (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getCurrentChannel '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getexternalinputlist"></a>
## `tv/getExternalInputList`

`luna://com.webos.service.apiadapter/tv/getExternalInputList`

Returns the external input list (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getExternalInputList '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getsimilarchannellist"></a>
## `tv/getSimilarChannelList`

`luna://com.webos.service.apiadapter/tv/getSimilarChannelList`

Returns the similar channel list (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getSimilarChannelList '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_openchannel"></a>
## `tv/openChannel`

`luna://com.webos.service.apiadapter/tv/openChannel`

Opens the channel (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/openChannel '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_switchinput"></a>
## `tv/switchInput`

`luna://com.webos.service.apiadapter/tv/switchInput`

Switches the input (TV)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/switchInput '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_getuserdata"></a>
## `user/getUserData`

`luna://com.webos.service.apiadapter/user/getUserData`

Returns the user data (user)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/getUserData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_resetuserdata"></a>
## `user/resetUserData` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/user/resetUserData`

Resets the user data (user)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/resetUserData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_resetuserinfo"></a>
## `user/resetUserInfo` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/user/resetUserInfo`

Resets the user info (user)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/resetUserInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_resetuserschedule"></a>
## `user/resetUserSchedule` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/user/resetUserSchedule`

Resets the user schedule (user)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/resetUserSchedule '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_setuserdata"></a>
## `user/setUserData`

`luna://com.webos.service.apiadapter/user/setUserData`

Sets the user data (user)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/setUserData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote, secondscreen.uac.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_setuserinfo"></a>
## `user/setUserInfo`

`luna://com.webos.service.apiadapter/user/setUserInfo`

Sets the user info (user)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/setUserInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote, secondscreen.uac.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_setuserschedule"></a>
## `user/setUserSchedule`

`luna://com.webos.service.apiadapter/user/setUserSchedule`

Sets the user schedule (user)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/setUserSchedule '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_closewebapp"></a>
## `webapp/closeWebApp`

`luna://com.webos.service.apiadapter/webapp/closeWebApp`

Closes the web app (webapp)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/closeWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_getappidforwebapp"></a>
## `webapp/getAppIdForWebApp`

`luna://com.webos.service.apiadapter/webapp/getAppIdForWebApp`

Returns the app ID for web app (webapp)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/getAppIdForWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_iswebapppinned"></a>
## `webapp/isWebAppPinned`

`luna://com.webos.service.apiadapter/webapp/isWebAppPinned`

Reports whether the web app pinned is set (webapp)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/isWebAppPinned '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_launchwebapp"></a>
## `webapp/launchWebApp`

`luna://com.webos.service.apiadapter/webapp/launchWebApp`

Launches the web app (webapp)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/launchWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_pinwebapp"></a>
## `webapp/pinWebApp`

`luna://com.webos.service.apiadapter/webapp/pinWebApp`

Handles the pin web app (webapp)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/pinWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_removepinnedwebapp"></a>
## `webapp/removePinnedWebApp` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/webapp/removePinnedWebApp`

Removes the pinned web app (webapp)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/removePinnedWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
