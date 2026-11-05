# `com.webos.service.multiviewcontroller`

Multiview controller: creates and arranges app views for split/multi-view, changes mode, position and size of sub-apps, and mixes per-view audio. _(inferred from the service's methods)_

54 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`ackProcess`](#ackprocess) | public |  | display | inferred | Handles the ack process. |
| [`addPreset`](#addpreset) | public |  | display | inferred | Adds the preset. ⚠️ |
| [`changeAppView`](#changeappview) | public |  | display | inferred | Changes the app view. |
| [`changeControlMode`](#changecontrolmode) | public |  | display | inferred | Changes the control mode. |
| [`changeMode`](#changemode) | public |  | display | inferred | Changes the mode. |
| [`changeSubAppPosition`](#changesubappposition) | public |  | display | inferred | Changes the sub app position. |
| [`changeSubAppSize`](#changesubappsize) | public |  | display | inferred | Changes the sub app size. |
| [`closeApp`](#closeapp) | public |  | display | inferred | Closes the app. |
| [`closeMultiview`](#closemultiview) | public |  | display | inferred | Closes the multiview. |
| [`createAppView`](#createappview) | public |  | display | inferred | Creates the app view. |
| [`decreaseMixAudioVolume`](#decreasemixaudiovolume) | public |  | audio | inferred | Decreases the mix audio volume. |
| [`destroyAppView`](#destroyappview) | public |  | display | inferred | Handles the destroy app view. |
| [`getAppList`](#getapplist) | public |  | display | inferred | Returns the app list. |
| [`getAppListChanged`](#getapplistchanged) | public |  | display | inferred | Returns the app list changed. |
| [`getAppViewStatus`](#getappviewstatus) | public |  | display | inferred | Returns the app view status. |
| [`getChangeableAppList`](#getchangeableapplist) | public |  | display | inferred | Returns the changeable app list. |
| [`getConfigInfo`](#getconfiginfo) | public |  | settings | inferred | Returns the config info. |
| [`getMainAppList`](#getmainapplist) | public |  | display | inferred | Returns the main app list. |
| [`getMediaControlStatus`](#getmediacontrolstatus) | public |  | media | inferred | Returns the media control status. |
| [`getMultiviewAppList`](#getmultiviewapplist) | public |  | display | inferred | Returns the multiview app list. |
| [`getMultiviewStatus`](#getmultiviewstatus) | public |  | display | inferred | Returns the multiview status. |
| [`getMultiviewSupportOption`](#getmultiviewsupportoption) | public |  | display | inferred | Returns the multiview support option. |
| [`getPresetList`](#getpresetlist) | public |  | display | inferred | Returns the preset list. |
| [`getRecentsList`](#getrecentslist) | public |  | display | inferred | Returns the recents list. |
| [`getRestrictionStatus`](#getrestrictionstatus) | public |  | display | inferred | Returns the restriction status. |
| [`getStatus`](#getstatus) | public |  | display | inferred | Returns the status. |
| [`getSubAppList`](#getsubapplist) | public |  | display | inferred | Returns the sub app list. |
| [`increaseMixAudioVolume`](#increasemixaudiovolume) | public |  | audio | inferred | Increases the mix audio volume. |
| [`launchApps`](#launchapps) | public |  | apps | inferred | Launches the apps. |
| [`launchMode`](#launchmode) | public |  | apps | inferred | Launches the mode. |
| [`removeClient`](#removeclient) | public |  | display | inferred | Removes the client. ⚠️ |
| [`removePreset`](#removepreset) | public |  | display | inferred | Removes the preset. ⚠️ |
| [`selectAudioOut`](#selectaudioout) | public |  | audio | inferred | Selects the audio out. |
| [`setAppCloseInfo`](#setappcloseinfo) | public |  | display | inferred | Sets the app close info. |
| [`setAppCoordinate`](#setappcoordinate) | public |  | display | inferred | Sets the app coordinate. |
| [`setAppPipelineStatus`](#setapppipelinestatus) | public |  | display | inferred | Sets the app pipeline status. |
| [`setAppViewStatus`](#setappviewstatus) | public |  | display | inferred | Sets the app view status. |
| [`setInputMode`](#setinputmode) | public |  | display | inferred | Sets the input mode. |
| [`setInputVolume`](#setinputvolume) | public |  | display | inferred | Sets the input volume. |
| [`setMediaContentInfo`](#setmediacontentinfo) | public |  | media | inferred | Sets the media content info. |
| [`setMixAudio`](#setmixaudio) | public |  | audio | inferred | Sets the mix audio. |
| [`setMobileInfo`](#setmobileinfo) | public |  | display | inferred | Sets the mobile info. |
| [`switchAudio`](#switchaudio) | public |  | audio | inferred | Switches the audio. |
| [`switchSyncType`](#switchsynctype) | public |  | display | inferred | Switches the sync type. |
| [`test`](#test) | public |  | display | inferred | Tests the multiviewcontroller. |
| [`testPopup`](#testpopup) | public |  | display | inferred | Tests the popup. |
| [`voice/tv_multiview_change_view_type`](#voice_tv_multiview_change_view_type) | public |  | input | inferred | Handles the TV multiview change view type (voice) |
| [`voice/tv_multiview_enter_control_mode`](#voice_tv_multiview_enter_control_mode) | public |  | input | inferred | Handles the TV multiview enter control mode (voice) |
| [`voice/tv_multiview_exit`](#voice_tv_multiview_exit) | public |  | input | inferred | Handles the TV multiview exit (voice) |
| [`voice/tv_multiview_exit_control_mode`](#voice_tv_multiview_exit_control_mode) | public |  | input | inferred | Handles the TV multiview exit control mode (voice) |
| [`voice/tv_multiview_exit_negative`](#voice_tv_multiview_exit_negative) | public |  | input | inferred | Handles the TV multiview exit negative (voice) |
| [`voice/tv_multiview_launch`](#voice_tv_multiview_launch) | public |  | apps | inferred | Handles the TV multiview launch (voice) |
| [`voice/tv_multiview_move_sub_app_position`](#voice_tv_multiview_move_sub_app_position) | public |  | input | inferred | Handles the TV multiview move sub app position (voice) |
| [`voice/tv_multiview_switch_sound`](#voice_tv_multiview_switch_sound) | public |  | input | inferred | Handles the TV multiview switch sound (voice) |

<a id="ackprocess"></a>
## `ackProcess`

`luna://com.webos.service.multiviewcontroller/ackProcess`

Handles the ack process.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/ackProcess '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="addpreset"></a>
## `addPreset` ⚠️ DANGEROUS

`luna://com.webos.service.multiviewcontroller/addPreset`

Adds the preset.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/addPreset '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changeappview"></a>
## `changeAppView`

`luna://com.webos.service.multiviewcontroller/changeAppView`

Changes the app view.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/changeAppView '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changecontrolmode"></a>
## `changeControlMode`

`luna://com.webos.service.multiviewcontroller/changeControlMode`

Changes the control mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/changeControlMode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changemode"></a>
## `changeMode`

`luna://com.webos.service.multiviewcontroller/changeMode`

Changes the mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/changeMode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changesubappposition"></a>
## `changeSubAppPosition`

`luna://com.webos.service.multiviewcontroller/changeSubAppPosition`

Changes the sub app position.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/changeSubAppPosition '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changesubappsize"></a>
## `changeSubAppSize`

`luna://com.webos.service.multiviewcontroller/changeSubAppSize`

Changes the sub app size.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/changeSubAppSize '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closeapp"></a>
## `closeApp`

`luna://com.webos.service.multiviewcontroller/closeApp`

Closes the app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/closeApp '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closemultiview"></a>
## `closeMultiview`

`luna://com.webos.service.multiviewcontroller/closeMultiview`

Closes the multiview.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/closeMultiview '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createappview"></a>
## `createAppView`

`luna://com.webos.service.multiviewcontroller/createAppView`

Creates the app view.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/createAppView '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="decreasemixaudiovolume"></a>
## `decreaseMixAudioVolume`

`luna://com.webos.service.multiviewcontroller/decreaseMixAudioVolume`

Decreases the mix audio volume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/decreaseMixAudioVolume '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="destroyappview"></a>
## `destroyAppView`

`luna://com.webos.service.multiviewcontroller/destroyAppView`

Handles the destroy app view.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/destroyAppView '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getapplist"></a>
## `getAppList`

`luna://com.webos.service.multiviewcontroller/getAppList`

Returns the app list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getAppList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getapplistchanged"></a>
## `getAppListChanged`

`luna://com.webos.service.multiviewcontroller/getAppListChanged`

Returns the app list changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getAppListChanged '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getappviewstatus"></a>
## `getAppViewStatus`

`luna://com.webos.service.multiviewcontroller/getAppViewStatus`

Returns the app view status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getAppViewStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchangeableapplist"></a>
## `getChangeableAppList`

`luna://com.webos.service.multiviewcontroller/getChangeableAppList`

Returns the changeable app list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getChangeableAppList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconfiginfo"></a>
## `getConfigInfo`

`luna://com.webos.service.multiviewcontroller/getConfigInfo`

Returns the config info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getConfigInfo '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmainapplist"></a>
## `getMainAppList`

`luna://com.webos.service.multiviewcontroller/getMainAppList`

Returns the main app list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getMainAppList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmediacontrolstatus"></a>
## `getMediaControlStatus`

`luna://com.webos.service.multiviewcontroller/getMediaControlStatus`

Returns the media control status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getMediaControlStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiviewapplist"></a>
## `getMultiviewAppList`

`luna://com.webos.service.multiviewcontroller/getMultiviewAppList`

Returns the multiview app list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getMultiviewAppList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiviewstatus"></a>
## `getMultiviewStatus`

`luna://com.webos.service.multiviewcontroller/getMultiviewStatus`

Returns the multiview status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getMultiviewStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiviewsupportoption"></a>
## `getMultiviewSupportOption`

`luna://com.webos.service.multiviewcontroller/getMultiviewSupportOption`

Returns the multiview support option.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getMultiviewSupportOption '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpresetlist"></a>
## `getPresetList`

`luna://com.webos.service.multiviewcontroller/getPresetList`

Returns the preset list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getPresetList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrecentslist"></a>
## `getRecentsList`

`luna://com.webos.service.multiviewcontroller/getRecentsList`

Returns the recents list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getRecentsList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrestrictionstatus"></a>
## `getRestrictionStatus`

`luna://com.webos.service.multiviewcontroller/getRestrictionStatus`

Returns the restriction status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getRestrictionStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.multiviewcontroller/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsubapplist"></a>
## `getSubAppList`

`luna://com.webos.service.multiviewcontroller/getSubAppList`

Returns the sub app list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getSubAppList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="increasemixaudiovolume"></a>
## `increaseMixAudioVolume`

`luna://com.webos.service.multiviewcontroller/increaseMixAudioVolume`

Increases the mix audio volume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/increaseMixAudioVolume '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchapps"></a>
## `launchApps`

`luna://com.webos.service.multiviewcontroller/launchApps`

Launches the apps.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/launchApps '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchmode"></a>
## `launchMode`

`luna://com.webos.service.multiviewcontroller/launchMode`

Launches the mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/launchMode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removeclient"></a>
## `removeClient` ⚠️ DANGEROUS

`luna://com.webos.service.multiviewcontroller/removeClient`

Removes the client.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/removeClient '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removepreset"></a>
## `removePreset` ⚠️ DANGEROUS

`luna://com.webos.service.multiviewcontroller/removePreset`

Removes the preset.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/removePreset '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="selectaudioout"></a>
## `selectAudioOut`

`luna://com.webos.service.multiviewcontroller/selectAudioOut`

Selects the audio out.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/selectAudioOut '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setappcloseinfo"></a>
## `setAppCloseInfo`

`luna://com.webos.service.multiviewcontroller/setAppCloseInfo`

Sets the app close info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setAppCloseInfo '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setappcoordinate"></a>
## `setAppCoordinate`

`luna://com.webos.service.multiviewcontroller/setAppCoordinate`

Sets the app coordinate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setAppCoordinate '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setapppipelinestatus"></a>
## `setAppPipelineStatus`

`luna://com.webos.service.multiviewcontroller/setAppPipelineStatus`

Sets the app pipeline status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setAppPipelineStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setappviewstatus"></a>
## `setAppViewStatus`

`luna://com.webos.service.multiviewcontroller/setAppViewStatus`

Sets the app view status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setAppViewStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setinputmode"></a>
## `setInputMode`

`luna://com.webos.service.multiviewcontroller/setInputMode`

Sets the input mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setInputMode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setinputvolume"></a>
## `setInputVolume`

`luna://com.webos.service.multiviewcontroller/setInputVolume`

Sets the input volume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setInputVolume '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmediacontentinfo"></a>
## `setMediaContentInfo`

`luna://com.webos.service.multiviewcontroller/setMediaContentInfo`

Sets the media content info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setMediaContentInfo '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmixaudio"></a>
## `setMixAudio`

`luna://com.webos.service.multiviewcontroller/setMixAudio`

Sets the mix audio.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setMixAudio '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmobileinfo"></a>
## `setMobileInfo`

`luna://com.webos.service.multiviewcontroller/setMobileInfo`

Sets the mobile info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setMobileInfo '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="switchaudio"></a>
## `switchAudio`

`luna://com.webos.service.multiviewcontroller/switchAudio`

Switches the audio.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/switchAudio '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="switchsynctype"></a>
## `switchSyncType`

`luna://com.webos.service.multiviewcontroller/switchSyncType`

Switches the sync type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/switchSyncType '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.multiviewcontroller/test`

Tests the multiviewcontroller.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/test '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testpopup"></a>
## `testPopup`

`luna://com.webos.service.multiviewcontroller/testPopup`

Tests the popup.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/testPopup '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_change_view_type"></a>
## `voice/tv_multiview_change_view_type`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_change_view_type`

Handles the TV multiview change view type (voice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_change_view_type '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_enter_control_mode"></a>
## `voice/tv_multiview_enter_control_mode`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_enter_control_mode`

Handles the TV multiview enter control mode (voice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_enter_control_mode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_exit"></a>
## `voice/tv_multiview_exit`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit`

Handles the TV multiview exit (voice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_exit_control_mode"></a>
## `voice/tv_multiview_exit_control_mode`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit_control_mode`

Handles the TV multiview exit control mode (voice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit_control_mode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_exit_negative"></a>
## `voice/tv_multiview_exit_negative`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit_negative`

Handles the TV multiview exit negative (voice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit_negative '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_launch"></a>
## `voice/tv_multiview_launch`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_launch`

Handles the TV multiview launch (voice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_launch '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_move_sub_app_position"></a>
## `voice/tv_multiview_move_sub_app_position`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_move_sub_app_position`

Handles the TV multiview move sub app position (voice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_move_sub_app_position '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_switch_sound"></a>
## `voice/tv_multiview_switch_sound`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_switch_sound`

Handles the TV multiview switch sound (voice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_switch_sound '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
