# `com.webos.service.apiadapter`

57 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`audio/changeSoundOutput`](#audio_changesoundoutput) | ssap |  | audio | Change sound output |
| [`audio/getMute`](#audio_getmute) | private |  | audio | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`audio/getSoundOutput`](#audio_getsoundoutput) | ssap | yes | audio | Get (or subscribe to) current sound output |
| [`audio/getStatus`](#audio_getstatus) | private |  | audio | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`audio/setMute`](#audio_setmute) | private |  | audio | Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`config/getConfigs`](#config_getconfigs) | private |  | settings | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`externalpq/getExternalPqData`](#externalpq_getexternalpqdata) | private |  | picture | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`externalpq/setExternalPqData`](#externalpq_setexternalpqdata) | private |  | picture | Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`info`](#info) | private |  | network | Method on com.webos.service.apiadapter (from on-device permission registry; parameters undocumented). |
| [`media_viewer/close`](#media_viewer_close) | private |  | media | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`media_viewer/open`](#media_viewer_open) | private |  | media | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`quit`](#quit) | private |  | network | Method on com.webos.service.apiadapter (from on-device permission registry; parameters undocumented). |
| [`settings/getSystemSettingDesc`](#settings_getsystemsettingdesc) | private |  | settings | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`settings/getSystemSettings`](#settings_getsystemsettings) | private |  | settings | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`settings/getSystemSettingsHDRInfo`](#settings_getsystemsettingshdrinfo) | private |  | settings | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`settings/getSystemSettingValues`](#settings_getsystemsettingvalues) | private |  | settings | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`settings/resetSystemSettingDesc`](#settings_resetsystemsettingdesc) | private |  | settings | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). ⚠️ |
| [`settings/resetSystemSettings`](#settings_resetsystemsettings) | private |  | settings | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). ⚠️ |
| [`settings/setSystemSettings`](#settings_setsystemsettings) | private |  | settings | Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`system/getCountryInfo`](#system_getcountryinfo) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`system/getSystemInfo`](#system_getsysteminfo) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`system/isValidPin`](#system_isvalidpin) | private |  | network | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`system_launcher/close`](#system_launcher_close) | private |  | apps | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`system_launcher/getAppState`](#system_launcher_getappstate) | private |  | apps | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`system_launcher/launch`](#system_launcher_launch) | private |  | apps | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`system_launcher/open`](#system_launcher_open) | private |  | apps | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`system_notifications/closeAlert`](#system_notifications_closealert) | private |  | notifications | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`system_notifications/closeToast`](#system_notifications_closetoast) | private |  | notifications | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`system_notifications/createAlert`](#system_notifications_createalert) | private |  | notifications | Method on com.webos.service.apiadapter (from on-device permission registry; parameters undocumented). |
| [`system_notifications/createToast`](#system_notifications_createtoast) | private |  | notifications | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`systemprofile/getProfiles`](#systemprofile_getprofiles) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`timer/getSettings`](#timer_getsettings) | private |  | settings | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`timer/setSettings`](#timer_setsettings) | private |  | settings | Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`tv/executeOneShot`](#tv_executeoneshot) | private |  | network | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`tv/getACRAuthToken`](#tv_getacrauthtoken) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`tv/getChannelCurrentProgramInfo`](#tv_getchannelcurrentprograminfo) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`tv/getChannelList`](#tv_getchannellist) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`tv/getChannelProgramInfo`](#tv_getchannelprograminfo) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`tv/getContentState`](#tv_getcontentstate) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`tv/getCurrentChannel`](#tv_getcurrentchannel) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`tv/getExternalInputList`](#tv_getexternalinputlist) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`tv/getSimilarChannelList`](#tv_getsimilarchannellist) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`tv/openChannel`](#tv_openchannel) | private |  | network | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`tv/switchInput`](#tv_switchinput) | private |  | network | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`user/getUserData`](#user_getuserdata) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`user/resetUserData`](#user_resetuserdata) | private |  | network | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). ⚠️ |
| [`user/resetUserInfo`](#user_resetuserinfo) | private |  | network | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). ⚠️ |
| [`user/resetUserSchedule`](#user_resetuserschedule) | private |  | network | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). ⚠️ |
| [`user/setUserData`](#user_setuserdata) | private |  | network | Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`user/setUserInfo`](#user_setuserinfo) | private |  | network | Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`user/setUserSchedule`](#user_setuserschedule) | private |  | network | Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`webapp/closeWebApp`](#webapp_closewebapp) | private |  | network | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`webapp/getAppIdForWebApp`](#webapp_getappidforwebapp) | private |  | network | Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`webapp/isWebAppPinned`](#webapp_iswebapppinned) | private |  | network | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`webapp/launchWebApp`](#webapp_launchwebapp) | private |  | apps | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`webapp/pinWebApp`](#webapp_pinwebapp) | private |  | network | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). |
| [`webapp/removePinnedWebApp`](#webapp_removepinnedwebapp) | private |  | network | Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented). ⚠️ |

<a id="audio_changesoundoutput"></a>
## `audio/changeSoundOutput`

`luna://com.webos.service.apiadapter/audio/changeSoundOutput`

Change sound output

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

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

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/audio/getStatus '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="audio_setmute"></a>
## `audio/setMute`

`luna://com.webos.service.apiadapter/audio/setMute`

Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/audio/setMute '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="config_getconfigs"></a>
## `config/getConfigs`

`luna://com.webos.service.apiadapter/config/getConfigs`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/config/getConfigs '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="externalpq_getexternalpqdata"></a>
## `externalpq/getExternalPqData`

`luna://com.webos.service.apiadapter/externalpq/getExternalPqData`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/externalpq/getExternalPqData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="externalpq_setexternalpqdata"></a>
## `externalpq/setExternalPqData`

`luna://com.webos.service.apiadapter/externalpq/setExternalPqData`

Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/externalpq/setExternalPqData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.apiadapter/info`

Method on com.webos.service.apiadapter (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/info '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media_viewer_close"></a>
## `media_viewer/close`

`luna://com.webos.service.apiadapter/media_viewer/close`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/media_viewer/close '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="media_viewer_open"></a>
## `media_viewer/open`

`luna://com.webos.service.apiadapter/media_viewer/open`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/media_viewer/open '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.apiadapter/quit`

Method on com.webos.service.apiadapter (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/quit '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemsettingdesc"></a>
## `settings/getSystemSettingDesc`

`luna://com.webos.service.apiadapter/settings/getSystemSettingDesc`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettingDesc '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemsettings"></a>
## `settings/getSystemSettings`

`luna://com.webos.service.apiadapter/settings/getSystemSettings`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemsettingshdrinfo"></a>
## `settings/getSystemSettingsHDRInfo`

`luna://com.webos.service.apiadapter/settings/getSystemSettingsHDRInfo`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettingsHDRInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_getsystemsettingvalues"></a>
## `settings/getSystemSettingValues`

`luna://com.webos.service.apiadapter/settings/getSystemSettingValues`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/getSystemSettingValues '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_resetsystemsettingdesc"></a>
## `settings/resetSystemSettingDesc` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/settings/resetSystemSettingDesc`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/resetSystemSettingDesc '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_resetsystemsettings"></a>
## `settings/resetSystemSettings` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/settings/resetSystemSettings`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/resetSystemSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settings_setsystemsettings"></a>
## `settings/setSystemSettings`

`luna://com.webos.service.apiadapter/settings/setSystemSettings`

Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/settings/setSystemSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_getcountryinfo"></a>
## `system/getCountryInfo`

`luna://com.webos.service.apiadapter/system/getCountryInfo`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system/getCountryInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_getsysteminfo"></a>
## `system/getSystemInfo`

`luna://com.webos.service.apiadapter/system/getSystemInfo`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system/getSystemInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_isvalidpin"></a>
## `system/isValidPin`

`luna://com.webos.service.apiadapter/system/isValidPin`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system/isValidPin '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_close"></a>
## `system_launcher/close`

`luna://com.webos.service.apiadapter/system_launcher/close`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/close '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_getappstate"></a>
## `system_launcher/getAppState`

`luna://com.webos.service.apiadapter/system_launcher/getAppState`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/getAppState '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_launch"></a>
## `system_launcher/launch`

`luna://com.webos.service.apiadapter/system_launcher/launch`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/launch '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_launcher_open"></a>
## `system_launcher/open`

`luna://com.webos.service.apiadapter/system_launcher/open`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_launcher/open '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_notifications_closealert"></a>
## `system_notifications/closeAlert`

`luna://com.webos.service.apiadapter/system_notifications/closeAlert`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_notifications/closeAlert '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_notifications_closetoast"></a>
## `system_notifications/closeToast`

`luna://com.webos.service.apiadapter/system_notifications/closeToast`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_notifications/closeToast '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_notifications_createalert"></a>
## `system_notifications/createAlert`

`luna://com.webos.service.apiadapter/system_notifications/createAlert`

Method on com.webos.service.apiadapter (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_notifications/createAlert '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="system_notifications_createtoast"></a>
## `system_notifications/createToast`

`luna://com.webos.service.apiadapter/system_notifications/createToast`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/system_notifications/createToast '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="systemprofile_getprofiles"></a>
## `systemprofile/getProfiles`

`luna://com.webos.service.apiadapter/systemprofile/getProfiles`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/systemprofile/getProfiles '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_getsettings"></a>
## `timer/getSettings`

`luna://com.webos.service.apiadapter/timer/getSettings`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/timer/getSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="timer_setsettings"></a>
## `timer/setSettings`

`luna://com.webos.service.apiadapter/timer/setSettings`

Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/timer/setSettings '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_executeoneshot"></a>
## `tv/executeOneShot`

`luna://com.webos.service.apiadapter/tv/executeOneShot`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/executeOneShot '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getacrauthtoken"></a>
## `tv/getACRAuthToken`

`luna://com.webos.service.apiadapter/tv/getACRAuthToken`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getACRAuthToken '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getchannelcurrentprograminfo"></a>
## `tv/getChannelCurrentProgramInfo`

`luna://com.webos.service.apiadapter/tv/getChannelCurrentProgramInfo`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getChannelCurrentProgramInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getchannellist"></a>
## `tv/getChannelList`

`luna://com.webos.service.apiadapter/tv/getChannelList`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getChannelList '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getchannelprograminfo"></a>
## `tv/getChannelProgramInfo`

`luna://com.webos.service.apiadapter/tv/getChannelProgramInfo`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getChannelProgramInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getcontentstate"></a>
## `tv/getContentState`

`luna://com.webos.service.apiadapter/tv/getContentState`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getContentState '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getcurrentchannel"></a>
## `tv/getCurrentChannel`

`luna://com.webos.service.apiadapter/tv/getCurrentChannel`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getCurrentChannel '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getexternalinputlist"></a>
## `tv/getExternalInputList`

`luna://com.webos.service.apiadapter/tv/getExternalInputList`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getExternalInputList '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_getsimilarchannellist"></a>
## `tv/getSimilarChannelList`

`luna://com.webos.service.apiadapter/tv/getSimilarChannelList`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/getSimilarChannelList '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_openchannel"></a>
## `tv/openChannel`

`luna://com.webos.service.apiadapter/tv/openChannel`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/openChannel '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tv_switchinput"></a>
## `tv/switchInput`

`luna://com.webos.service.apiadapter/tv/switchInput`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/tv/switchInput '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_getuserdata"></a>
## `user/getUserData`

`luna://com.webos.service.apiadapter/user/getUserData`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/getUserData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_resetuserdata"></a>
## `user/resetUserData` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/user/resetUserData`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/resetUserData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_resetuserinfo"></a>
## `user/resetUserInfo` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/user/resetUserInfo`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/resetUserInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_resetuserschedule"></a>
## `user/resetUserSchedule` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/user/resetUserSchedule`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/resetUserSchedule '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_setuserdata"></a>
## `user/setUserData`

`luna://com.webos.service.apiadapter/user/setUserData`

Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/setUserData '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote, secondscreen.uac.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_setuserinfo"></a>
## `user/setUserInfo`

`luna://com.webos.service.apiadapter/user/setUserInfo`

Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/setUserInfo '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote, secondscreen.uac.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="user_setuserschedule"></a>
## `user/setUserSchedule`

`luna://com.webos.service.apiadapter/user/setUserSchedule`

Setter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/user/setUserSchedule '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_closewebapp"></a>
## `webapp/closeWebApp`

`luna://com.webos.service.apiadapter/webapp/closeWebApp`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/closeWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_getappidforwebapp"></a>
## `webapp/getAppIdForWebApp`

`luna://com.webos.service.apiadapter/webapp/getAppIdForWebApp`

Getter on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/getAppIdForWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_iswebapppinned"></a>
## `webapp/isWebAppPinned`

`luna://com.webos.service.apiadapter/webapp/isWebAppPinned`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/isWebAppPinned '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_launchwebapp"></a>
## `webapp/launchWebApp`

`luna://com.webos.service.apiadapter/webapp/launchWebApp`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/launchWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_pinwebapp"></a>
## `webapp/pinWebApp`

`luna://com.webos.service.apiadapter/webapp/pinWebApp`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/pinWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="webapp_removepinnedwebapp"></a>
## `webapp/removePinnedWebApp` ⚠️ DANGEROUS

`luna://com.webos.service.apiadapter/webapp/removePinnedWebApp`

Method on com.webos.service.apiadapter (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apiadapter/webapp/removePinnedWebApp '{}'
```

> ACG groups: secondscreen.all, private, all, system.remote. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
