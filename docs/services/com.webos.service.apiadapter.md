# `com.webos.service.apiadapter`

API adapter that bridges remote/second-screen clients to on-device functions: audio (sound output, mute), system settings, external picture-quality data and a media viewer. _(inferred from the service's methods)_

57 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`audio/changeSoundOutput`](#audio_changesoundoutput) | ssap |  | audio | documented | Change sound output |
| [`audio/getMute`](#audio_getmute) | private |  | audio | documented | Returns the mute (audio) |
| [`audio/getSoundOutput`](#audio_getsoundoutput) | ssap | yes | audio | documented | Get (or subscribe to) current sound output |
| [`audio/getStatus`](#audio_getstatus) | private |  | audio | documented | Returns the status (audio) |
| [`audio/setMute`](#audio_setmute) | private |  | audio | documented | Sets the mute (audio) |
| [`config/getConfigs`](#config_getconfigs) | private |  | settings | documented | Returns the configs (config) |
| [`externalpq/getExternalPqData`](#externalpq_getexternalpqdata) | private |  | picture | documented | Returns the external PQ data (externalpq) |
| [`externalpq/setExternalPqData`](#externalpq_setexternalpqdata) | private |  | picture | documented | Sets the external PQ data (externalpq) |
| [`info`](#info) | private |  | network | inferred | Handles the info. |
| [`media_viewer/close`](#media_viewer_close) | private |  | media | documented | Closes the apiadapter (media viewer) |
| [`media_viewer/open`](#media_viewer_open) | private |  | media | documented | Opens the apiadapter (media viewer) |
| [`quit`](#quit) | private |  | network | inferred | Quits the apiadapter. |
| [`settings/getSystemSettingDesc`](#settings_getsystemsettingdesc) | private |  | settings | documented | Returns the system setting desc (settings) |
| [`settings/getSystemSettings`](#settings_getsystemsettings) | private |  | settings | documented | Returns the system settings (settings) |
| [`settings/getSystemSettingsHDRInfo`](#settings_getsystemsettingshdrinfo) | private |  | settings | documented | Returns the system settings HDR info (settings) |
| [`settings/getSystemSettingValues`](#settings_getsystemsettingvalues) | private |  | settings | documented | Returns the system setting values (settings) |
| [`settings/resetSystemSettingDesc`](#settings_resetsystemsettingdesc) | private |  | settings | documented | Resets the system setting desc (settings) ⚠️ |
| [`settings/resetSystemSettings`](#settings_resetsystemsettings) | private |  | settings | documented | Resets the system settings (settings) ⚠️ |
| [`settings/setSystemSettings`](#settings_setsystemsettings) | private |  | settings | documented | Sets the system settings (settings) |
| [`system/getCountryInfo`](#system_getcountryinfo) | private |  | network | documented | Returns the country info (system) |
| [`system/getSystemInfo`](#system_getsysteminfo) | private |  | network | documented | Returns the system info (system) |
| [`system/isValidPin`](#system_isvalidpin) | private |  | network | documented | Reports whether the valid pin is set (system) |
| [`system_launcher/close`](#system_launcher_close) | private |  | apps | documented | Closes the apiadapter (system launcher) |
| [`system_launcher/getAppState`](#system_launcher_getappstate) | private |  | apps | documented | Returns the app state (system launcher) |
| [`system_launcher/launch`](#system_launcher_launch) | private |  | apps | documented | Launches the apiadapter (system launcher) |
| [`system_launcher/open`](#system_launcher_open) | private |  | apps | documented | Opens the apiadapter (system launcher) |
| [`system_notifications/closeAlert`](#system_notifications_closealert) | private |  | notifications | documented | Closes the alert (system notifications) |
| [`system_notifications/closeToast`](#system_notifications_closetoast) | private |  | notifications | documented | Closes the toast (system notifications) |
| [`system_notifications/createAlert`](#system_notifications_createalert) | private |  | notifications | inferred | Creates the alert (system notifications) |
| [`system_notifications/createToast`](#system_notifications_createtoast) | private |  | notifications | documented | Creates the toast (system notifications) |
| [`systemprofile/getProfiles`](#systemprofile_getprofiles) | private |  | network | documented | Returns the profiles (systemprofile) |
| [`timer/getSettings`](#timer_getsettings) | private |  | settings | documented | Returns the settings (timer) |
| [`timer/setSettings`](#timer_setsettings) | private |  | settings | documented | Sets the settings (timer) |
| [`tv/executeOneShot`](#tv_executeoneshot) | private |  | network | documented | Runs the one shot (TV) |
| [`tv/getACRAuthToken`](#tv_getacrauthtoken) | private |  | network | documented | Returns the ACR auth token (TV) |
| [`tv/getChannelCurrentProgramInfo`](#tv_getchannelcurrentprograminfo) | private |  | network | documented | Returns the channel current program info (TV) |
| [`tv/getChannelList`](#tv_getchannellist) | private |  | network | documented | Returns the channel list (TV) |
| [`tv/getChannelProgramInfo`](#tv_getchannelprograminfo) | private |  | network | documented | Returns the channel program info (TV) |
| [`tv/getContentState`](#tv_getcontentstate) | private |  | network | documented | Returns the content state (TV) |
| [`tv/getCurrentChannel`](#tv_getcurrentchannel) | private |  | network | documented | Returns the current channel (TV) |
| [`tv/getExternalInputList`](#tv_getexternalinputlist) | private |  | network | documented | Returns the external input list (TV) |
| [`tv/getSimilarChannelList`](#tv_getsimilarchannellist) | private |  | network | documented | Returns the similar channel list (TV) |
| [`tv/openChannel`](#tv_openchannel) | private |  | network | documented | Opens the channel (TV) |
| [`tv/switchInput`](#tv_switchinput) | private |  | network | documented | Switches the input (TV) |
| [`user/getUserData`](#user_getuserdata) | private |  | network | documented | Returns the user data (user) |
| [`user/resetUserData`](#user_resetuserdata) | private |  | network | documented | Resets the user data (user) ⚠️ |
| [`user/resetUserInfo`](#user_resetuserinfo) | private |  | network | documented | Resets the user info (user) ⚠️ |
| [`user/resetUserSchedule`](#user_resetuserschedule) | private |  | network | documented | Resets the user schedule (user) ⚠️ |
| [`user/setUserData`](#user_setuserdata) | private |  | network | documented | Sets the user data (user) |
| [`user/setUserInfo`](#user_setuserinfo) | private |  | network | documented | Sets the user info (user) |
| [`user/setUserSchedule`](#user_setuserschedule) | private |  | network | documented | Sets the user schedule (user) |
| [`webapp/closeWebApp`](#webapp_closewebapp) | private |  | network | documented | Closes the web app (webapp) |
| [`webapp/getAppIdForWebApp`](#webapp_getappidforwebapp) | private |  | network | documented | Returns the app ID for web app (webapp) |
| [`webapp/isWebAppPinned`](#webapp_iswebapppinned) | private |  | network | documented | Reports whether the web app pinned is set (webapp) |
| [`webapp/launchWebApp`](#webapp_launchwebapp) | private |  | apps | documented | Launches the web app (webapp) |
| [`webapp/pinWebApp`](#webapp_pinwebapp) | private |  | network | documented | Handles the pin web app (webapp) |
| [`webapp/removePinnedWebApp`](#webapp_removepinnedwebapp) | private |  | network | documented | Removes the pinned web app (webapp) ⚠️ |

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

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/audio/getMute '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Takes no request parameters.  Subscribable.  Returns mute state (forwarded from com.webos.service.audio/master/getVolume).  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

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

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/audio/getStatus '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Takes no request parameters.  Subscribable.  Returns returnValue, callerId and volumeStatus (activeStatus, adjustVolume, maxVolume, muteStatus, volume, soundOutput).  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="audio_setmute"></a>
## `audio/setMute`

`luna://com.webos.service.apiadapter/audio/setMute`

Sets the mute (audio)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mute` | Boolean (optional) Mute state; true to mute, false to unmute.  Forwarded to com.webos.service.audio/master/muteVolume. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/audio/setMute '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="config_getconfigs"></a>
## `config/getConfigs`

`luna://com.webos.service.apiadapter/config/getConfigs`

Returns the configs (config)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `configNames` | Array (required) Config key names to fetch.  Must be non-empty.  Forwarded to com.webos.service.config/getConfigs. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/config/getConfigs '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="externalpq_getexternalpqdata"></a>
## `externalpq/getExternalPqData`

`luna://com.webos.service.apiadapter/externalpq/getExternalPqData`

Returns the external PQ data (externalpq)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/externalpq/getExternalPqData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Forwards the request payload to com.webos.service.pqcontroller/getExternalPqData and returns the PQ data base64-encoded in `data`.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="externalpq_setexternalpqdata"></a>
## `externalpq/setExternalPqData`

`luna://com.webos.service.apiadapter/externalpq/setExternalPqData`

Sets the external PQ data (externalpq)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `data` | String (optional) External PQ data, base64-encoded; written to a temp file whose path is forwarded to com.webos.service.pqcontroller/setExternalPqData. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/externalpq/setExternalPqData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

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

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/media_viewer/close '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Closes the media viewer; delegates to the system launcher close.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="media_viewer_open"></a>
## `media_viewer/open`

`luna://com.webos.service.apiadapter/media_viewer/open`

Opens the apiadapter (media viewer)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `target` | String (optional) URI of the media to open.  Required unless `mimeType` is given. |
| `mimeType` | String (optional) MIME type of the media; selects the player.  Required unless `target` is given. |
| `iconSrc` | String (optional) Icon for the image viewer (image media only). |
| `title` | String (optional) Title for the image viewer (image media only). |
| `description` | String (optional) Description for the image viewer (image media only). |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/media_viewer/open '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Requires either `target` or `mimeType`.  Opens the default player for the media type: photo/video, music, or the image viewer.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

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

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `keys` | Array (required) Setting keys whose description metadata to read.  Must be non-empty. |
| `category` | String (optional) Settings category. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettingDesc '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Forwarded to com.webos.settingsservice/getSystemSettingDesc.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemsettings"></a>
## `settings/getSystemSettings`

`luna://com.webos.service.apiadapter/settings/getSystemSettings`

Returns the system settings (settings)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `keys` | Array (required) Setting keys to read.  Must be non-empty. |
| `category` | String (optional) Settings category (e.g. picture, sound, option). |
| `current_app` | Boolean (optional) Read the current app's scoped value. |
| `app_id` | String (optional) App ID to scope the read to. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Forwarded to com.webos.settingsservice/getSystemSettings.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemsettingshdrinfo"></a>
## `settings/getSystemSettingsHDRInfo`

`luna://com.webos.service.apiadapter/settings/getSystemSettingsHDRInfo`

Returns the system settings HDR info (settings)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `keys` | Array (required) Setting keys to read.  Must be non-empty. |
| `category` | String (optional) Settings category. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettingsHDRInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Forwarded to com.webos.settingsservice/getSystemSettings.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemsettingvalues"></a>
## `settings/getSystemSettingValues`

`luna://com.webos.service.apiadapter/settings/getSystemSettingValues`

Returns the system setting values (settings)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `key` | String (required) Setting key whose possible values to read. |
| `category` | String (optional) Settings category. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettingValues '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Forwarded to com.webos.settingsservice/getSystemSettingValues.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_resetsystemsettingdesc"></a>
## `settings/resetSystemSettingDesc` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/settings/resetSystemSettingDesc`

Resets the system setting desc (settings)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `keys` | Array (required) Setting-description keys to reset.  Must be non-empty. |
| `category` | String (optional) Settings category. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/resetSystemSettingDesc '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.  Forwarded to com.webos.settingsservice/resetSystemSettingDesc.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_resetsystemsettings"></a>
## `settings/resetSystemSettings` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/settings/resetSystemSettings`

Resets the system settings (settings)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `keys` | Array (required) Setting keys to reset to default.  Must be non-empty. |
| `category` | String (optional) Settings category. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/resetSystemSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.  Forwarded to com.webos.settingsservice/resetSystemSettings.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_setsystemsettings"></a>
## `settings/setSystemSettings`

`luna://com.webos.service.apiadapter/settings/setSystemSettings`

Sets the system settings (settings)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `settings` | Object (required) Map of setting keys to new values. |
| `category` | String (optional) Settings category. |
| `current_app` | Boolean (optional) Scope the write to the current app. |
| `app_id` | String (optional) App ID to scope the write to. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/setSystemSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Forwarded to com.webos.settingsservice/setSystemSettings.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_getcountryinfo"></a>
## `system/getCountryInfo`

`luna://com.webos.service.apiadapter/system/getCountryInfo`

Returns the country info (system)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system/getCountryInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Takes no request parameters.  Returns returnValue, country, smartCountry, shortName, fullName and groupCode.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_getsysteminfo"></a>
## `system/getSystemInfo`

`luna://com.webos.service.apiadapter/system/getSystemInfo`

Returns the system info (system)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system/getSystemInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Takes no request parameters.  Returns returnValue, features (dvr), receiverType, modelName, serialNumber and programMode (assembled from factorymanager and config).  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_isvalidpin"></a>
## `system/isValidPin`

`luna://com.webos.service.apiadapter/system/isValidPin`

Reports whether the valid pin is set (system)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pin` | String (optional) SHA-256 hash (hex) of the system PIN to check; the call returns valid:false if it does not match the stored PIN. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system/isValidPin '{}'
```

> ACG groups: private, all.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_close"></a>
## `system_launcher/close`

`luna://com.webos.service.apiadapter/system_launcher/close`

Closes the apiadapter (system launcher)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (optional) App ID of the launched app to close. |
| `sessionId` | String (optional) Session ID of the launch to close. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/close '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Closes a launched app for the caller's session.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_getappstate"></a>
## `system_launcher/getAppState`

`luna://com.webos.service.apiadapter/system_launcher/getAppState`

Returns the app state (system launcher)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (optional) App ID of the launched app to query. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/getAppState '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Subscribable.  Returns running and visible flags.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_launch"></a>
## `system_launcher/launch`

`luna://com.webos.service.apiadapter/system_launcher/launch`

Launches the apiadapter (system launcher)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (optional) App ID to launch. |
| `params` | Object (optional) Launch parameters passed to the app (the `windowType` key is stripped). |
| `contentId` | String (optional) Content ID for deep-linking; if the app declares deep-linking params it is deep-linked. |
| `sessionId` | String (optional) Session ID for the launch. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/launch '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_open"></a>
## `system_launcher/open`

`luna://com.webos.service.apiadapter/system_launcher/open`

Opens the apiadapter (system launcher)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (optional) App ID to open. |
| `params` | Object (optional) Parameters passed to the app. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/open '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_notifications_closealert"></a>
## `system_notifications/closeAlert`

`luna://com.webos.service.apiadapter/system_notifications/closeAlert`

Closes the alert (system notifications)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_notifications/closeAlert '{}'
```

> ACG groups: private, all.  Forwards the request payload to com.webos.notification/closeAlert.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_notifications_closetoast"></a>
## `system_notifications/closeToast`

`luna://com.webos.service.apiadapter/system_notifications/closeToast`

Closes the toast (system notifications)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_notifications/closeToast '{}'
```

> ACG groups: private, all.  Forwards the request payload to com.webos.notification/closeToast.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

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

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `message` | String (required) Text to display in the toast. |
| `iconData` | String (optional) Icon image, base64-encoded; requires `iconExtension`. |
| `iconExtension` | String (optional) File extension for `iconData` (e.g. png). |
| `onClick` | Object (optional) Action when the toast is tapped; must contain `appId` or `target`, with an optional `params` object. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_notifications/createToast '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Forwarded to com.webos.notification/createToast.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="systemprofile_getprofiles"></a>
## `systemprofile/getProfiles`

`luna://com.webos.service.apiadapter/systemprofile/getProfiles`

Returns the profiles (systemprofile)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `names` | Array (required) Profile names to fetch.  Must be non-empty.  Forwarded to com.webos.service.systemprofile/getProfiles. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/systemprofile/getProfiles '{}'
```

> ACG groups: private, all.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_getsettings"></a>
## `timer/getSettings`

`luna://com.webos.service.apiadapter/timer/getSettings`

Returns the settings (timer)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `keys` | Array (required) Timer setting keys to read.  Must be non-empty. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/timer/getSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Subscribable.  Forwarded to com.webos.settingsservice/batch (getSystemSettings operations).  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_setsettings"></a>
## `timer/setSettings`

`luna://com.webos.service.apiadapter/timer/setSettings`

Sets the settings (timer)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `settings` | Object (required) Map of timer setting keys to values.  Time-category keys include onTimerEnable, offTimerEnable, onTimerHour, onTimerMinute, offTimerHour, offTimerMinute, onTimerWeekday, offTimerWeekday, onTimerSource, onTimerAppId, onTimerChannel, onTimerVolume; timer-category keys include myStarterInfo and setMyStarter.  Must be non-empty. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/timer/setSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Forwarded to com.webos.settingsservice/batch (setSystemSettings operations).  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_executeoneshot"></a>
## `tv/executeOneShot`

`luna://com.webos.service.apiadapter/tv/executeOneShot`

Runs the one shot (TV)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/executeOneShot '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Takes no request parameters.  Captures the current display to /tmp/capture.jpg (960x540 JPEG) via com.webos.service.capture and returns its path in `imageUri`.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getacrauthtoken"></a>
## `tv/getACRAuthToken`

`luna://com.webos.service.apiadapter/tv/getACRAuthToken`

Returns the ACR auth token (TV)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getACRAuthToken '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Takes no request parameters.  Requires ACR (the `livePlus` option) to be enabled, otherwise returns permission denied; returns an ACR `token`.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getchannelcurrentprograminfo"></a>
## `tv/getChannelCurrentProgramInfo`

`luna://com.webos.service.apiadapter/tv/getChannelCurrentProgramInfo`

Returns the channel current program info (TV)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `channelId` | String (optional) Channel ID; defaults to the current channel if omitted. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getChannelCurrentProgramInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Subscribable.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getchannellist"></a>
## `tv/getChannelList`

`luna://com.webos.service.apiadapter/tv/getChannelList`

Returns the channel list (TV)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `channelMode` | String (optional) Channel-mode filter. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getChannelList '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Subscribable.  Forwarded to com.webos.service.iepg/getChannelList.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getchannelprograminfo"></a>
## `tv/getChannelProgramInfo`

`luna://com.webos.service.apiadapter/tv/getChannelProgramInfo`

Returns the channel program info (TV)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `channelId` | String (optional) Channel ID; defaults to the current channel if omitted. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getChannelProgramInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getcontentstate"></a>
## `tv/getContentState`

`luna://com.webos.service.apiadapter/tv/getContentState`

Returns the content state (TV)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getContentState '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Takes no request parameters.  Subscribable.  Returns contentState: 2 when tuner program data is available, 1 when ACR data is available, 0 otherwise.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getcurrentchannel"></a>
## `tv/getCurrentChannel`

`luna://com.webos.service.apiadapter/tv/getCurrentChannel`

Returns the current channel (TV)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getCurrentChannel '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Takes no request parameters.  Subscribable.  Returns the current channel record.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getexternalinputlist"></a>
## `tv/getExternalInputList`

`luna://com.webos.service.apiadapter/tv/getExternalInputList`

Returns the external input list (TV)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getExternalInputList '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Takes no request parameters.  Subscribable.  Returns the external input/device list (from com.webos.service.eim/getAllInputStatus).  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getsimilarchannellist"></a>
## `tv/getSimilarChannelList`

`luna://com.webos.service.apiadapter/tv/getSimilarChannelList`

Returns the similar channel list (TV)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `channelNumber` | String (required) Channel number to match. |
| `oldChannelId` | String (optional) Existing channel ID to disambiguate; must be a valid channel ID. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getSimilarChannelList '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Subscribable.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_openchannel"></a>
## `tv/openChannel`

`luna://com.webos.service.apiadapter/tv/openChannel`

Opens the channel (TV)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `channelNumber` | String (optional) Channel number to open.  Required unless `channelId` is given. |
| `channelId` | String (optional) Explicit channel ID (must be valid).  Required unless `channelNumber` is given. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/openChannel '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Requires either `channelNumber` or `channelId`.  Opens the Live TV app on the channel.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_switchinput"></a>
## `tv/switchInput`

`luna://com.webos.service.apiadapter/tv/switchInput`

Switches the input (TV)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `inputId` | String (required) Input ID to switch to (e.g. HDMI_1). |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/switchInput '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Launches the app for the given external input.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_getuserdata"></a>
## `user/getUserData`

`luna://com.webos.service.apiadapter/user/getUserData`

Returns the user data (user)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/getUserData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Takes no request parameters.  Reads the stored userData record.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_resetuserdata"></a>
## `user/resetUserData` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/user/resetUserData`

Resets the user data (user)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/resetUserData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.  Takes no request parameters.  Clears the stored userData record.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_resetuserinfo"></a>
## `user/resetUserInfo` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/user/resetUserInfo`

Resets the user info (user)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `_clientKey` | String (required) Client key identifying the user. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/resetUserInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_resetuserschedule"></a>
## `user/resetUserSchedule` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/user/resetUserSchedule`

Resets the user schedule (user)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `_clientKey` | String (optional) Client key; if omitted, all schedules are reset. |
| `all` | Boolean (optional) Reset all schedules. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/resetUserSchedule '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_setuserdata"></a>
## `user/setUserData`

`luna://com.webos.service.apiadapter/user/setUserData`

Sets the user data (user)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `userData` | Any (required) User data value to store. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/setUserData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote, secondscreen.uac.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_setuserinfo"></a>
## `user/setUserInfo`

`luna://com.webos.service.apiadapter/user/setUserInfo`

Sets the user info (user)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `_clientKey` | String (required) Client key identifying the user. |
| `userName` | String (required) User display name. |
| `deviceId` | String (optional) Device identity. |
| `userData` | Object (optional) Arbitrary user data to store. |
| `userIconData` | String (optional) User icon image, base64-encoded; requires `userIconExt`. |
| `userIconExt` | String (optional) File extension for `userIconData`. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/setUserInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote, secondscreen.uac.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_setuserschedule"></a>
## `user/setUserSchedule`

`luna://com.webos.service.apiadapter/user/setUserSchedule`

Sets the user schedule (user)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `_clientKey` | String (required) Client key identifying the user. |
| `schedules` | Array (required) Schedule objects to store.  Must be non-empty. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/setUserSchedule '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_closewebapp"></a>
## `webapp/closeWebApp`

`luna://com.webos.service.apiadapter/webapp/closeWebApp`

Closes the web app (webapp)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | String (required) Web app ID to close. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/closeWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Delegates to the system launcher close for the web app's host app.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_getappidforwebapp"></a>
## `webapp/getAppIdForWebApp`

`luna://com.webos.service.apiadapter/webapp/getAppIdForWebApp`

Returns the app ID for web app (webapp)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | String (required) Web app ID. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/getAppIdForWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Returns the generated platform app ID in `appId`.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_iswebapppinned"></a>
## `webapp/isWebAppPinned`

`luna://com.webos.service.apiadapter/webapp/isWebAppPinned`

Reports whether the web app pinned is set (webapp)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | String (required) Web app ID to check. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/isWebAppPinned '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Subscribable.  Returns a `pinned` flag.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_launchwebapp"></a>
## `webapp/launchWebApp`

`luna://com.webos.service.apiadapter/webapp/launchWebApp`

Launches the web app (webapp)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | String (required) Web app ID. |
| `appInfo` | Object (optional) App metadata, used when launching a pinned web app. |
| `params` | Object (optional) Launch parameters. |
| `urlParams` | Object (optional) URL parameters for the web app. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/launchWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_pinwebapp"></a>
## `webapp/pinWebApp`

`luna://com.webos.service.apiadapter/webapp/pinWebApp`

Handles the pin web app (webapp)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | String (required) Web app ID. |
| `appInfo` | Object (required) Web app metadata.  Required keys: id, title, icon, iconColor, largeIcon, bgImage, bgColor, splashBackground, vendor, handlesRelaunch; optional: appDescription. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/pinWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_removepinnedwebapp"></a>
## `webapp/removePinnedWebApp` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/webapp/removePinnedWebApp`

Removes the pinned web app (webapp)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | String (required) Web app ID to unpin. |

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/removePinnedWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.  Parameters recovered from the on-device apiadapter service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
