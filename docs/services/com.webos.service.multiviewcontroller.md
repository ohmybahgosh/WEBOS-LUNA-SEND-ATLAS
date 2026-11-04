# `com.webos.service.multiviewcontroller`

54 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`ackProcess`](#ackprocess) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`addPreset`](#addpreset) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). ⚠️ |
| [`changeAppView`](#changeappview) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`changeControlMode`](#changecontrolmode) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`changeMode`](#changemode) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`changeSubAppPosition`](#changesubappposition) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`changeSubAppSize`](#changesubappsize) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`closeApp`](#closeapp) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`closeMultiview`](#closemultiview) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`createAppView`](#createappview) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`decreaseMixAudioVolume`](#decreasemixaudiovolume) | public |  | audio | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`destroyAppView`](#destroyappview) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getAppList`](#getapplist) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getAppListChanged`](#getapplistchanged) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getAppViewStatus`](#getappviewstatus) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getChangeableAppList`](#getchangeableapplist) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getConfigInfo`](#getconfiginfo) | public |  | settings | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getMainAppList`](#getmainapplist) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getMediaControlStatus`](#getmediacontrolstatus) | public |  | media | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getMultiviewAppList`](#getmultiviewapplist) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getMultiviewStatus`](#getmultiviewstatus) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getMultiviewSupportOption`](#getmultiviewsupportoption) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getPresetList`](#getpresetlist) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getRecentsList`](#getrecentslist) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getRestrictionStatus`](#getrestrictionstatus) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getStatus`](#getstatus) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`getSubAppList`](#getsubapplist) | public |  | display | Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`increaseMixAudioVolume`](#increasemixaudiovolume) | public |  | audio | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`launchApps`](#launchapps) | public |  | apps | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`launchMode`](#launchmode) | public |  | apps | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`removeClient`](#removeclient) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). ⚠️ |
| [`removePreset`](#removepreset) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). ⚠️ |
| [`selectAudioOut`](#selectaudioout) | public |  | audio | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`setAppCloseInfo`](#setappcloseinfo) | public |  | display | Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`setAppCoordinate`](#setappcoordinate) | public |  | display | Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`setAppPipelineStatus`](#setapppipelinestatus) | public |  | display | Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`setAppViewStatus`](#setappviewstatus) | public |  | display | Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`setInputMode`](#setinputmode) | public |  | display | Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`setInputVolume`](#setinputvolume) | public |  | display | Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`setMediaContentInfo`](#setmediacontentinfo) | public |  | media | Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`setMixAudio`](#setmixaudio) | public |  | audio | Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`setMobileInfo`](#setmobileinfo) | public |  | display | Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`switchAudio`](#switchaudio) | public |  | audio | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`switchSyncType`](#switchsynctype) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`test`](#test) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`testPopup`](#testpopup) | public |  | display | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`voice/tv_multiview_change_view_type`](#voice_tv_multiview_change_view_type) | public |  | input | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`voice/tv_multiview_enter_control_mode`](#voice_tv_multiview_enter_control_mode) | public |  | input | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`voice/tv_multiview_exit`](#voice_tv_multiview_exit) | public |  | input | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`voice/tv_multiview_exit_control_mode`](#voice_tv_multiview_exit_control_mode) | public |  | input | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`voice/tv_multiview_exit_negative`](#voice_tv_multiview_exit_negative) | public |  | input | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`voice/tv_multiview_launch`](#voice_tv_multiview_launch) | public |  | apps | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`voice/tv_multiview_move_sub_app_position`](#voice_tv_multiview_move_sub_app_position) | public |  | input | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |
| [`voice/tv_multiview_switch_sound`](#voice_tv_multiview_switch_sound) | public |  | input | Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented). |

<a id="ackprocess"></a>
## `ackProcess`

`luna://com.webos.service.multiviewcontroller/ackProcess`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/ackProcess '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="addpreset"></a>
## `addPreset` ⚠️ DANGEROUS

`luna://com.webos.service.multiviewcontroller/addPreset`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/addPreset '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changeappview"></a>
## `changeAppView`

`luna://com.webos.service.multiviewcontroller/changeAppView`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/changeAppView '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changecontrolmode"></a>
## `changeControlMode`

`luna://com.webos.service.multiviewcontroller/changeControlMode`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/changeControlMode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changemode"></a>
## `changeMode`

`luna://com.webos.service.multiviewcontroller/changeMode`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/changeMode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changesubappposition"></a>
## `changeSubAppPosition`

`luna://com.webos.service.multiviewcontroller/changeSubAppPosition`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/changeSubAppPosition '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changesubappsize"></a>
## `changeSubAppSize`

`luna://com.webos.service.multiviewcontroller/changeSubAppSize`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/changeSubAppSize '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closeapp"></a>
## `closeApp`

`luna://com.webos.service.multiviewcontroller/closeApp`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/closeApp '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closemultiview"></a>
## `closeMultiview`

`luna://com.webos.service.multiviewcontroller/closeMultiview`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/closeMultiview '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createappview"></a>
## `createAppView`

`luna://com.webos.service.multiviewcontroller/createAppView`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/createAppView '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="decreasemixaudiovolume"></a>
## `decreaseMixAudioVolume`

`luna://com.webos.service.multiviewcontroller/decreaseMixAudioVolume`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/decreaseMixAudioVolume '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="destroyappview"></a>
## `destroyAppView`

`luna://com.webos.service.multiviewcontroller/destroyAppView`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/destroyAppView '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getapplist"></a>
## `getAppList`

`luna://com.webos.service.multiviewcontroller/getAppList`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getAppList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getapplistchanged"></a>
## `getAppListChanged`

`luna://com.webos.service.multiviewcontroller/getAppListChanged`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getAppListChanged '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getappviewstatus"></a>
## `getAppViewStatus`

`luna://com.webos.service.multiviewcontroller/getAppViewStatus`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getAppViewStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchangeableapplist"></a>
## `getChangeableAppList`

`luna://com.webos.service.multiviewcontroller/getChangeableAppList`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getChangeableAppList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconfiginfo"></a>
## `getConfigInfo`

`luna://com.webos.service.multiviewcontroller/getConfigInfo`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getConfigInfo '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmainapplist"></a>
## `getMainAppList`

`luna://com.webos.service.multiviewcontroller/getMainAppList`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getMainAppList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmediacontrolstatus"></a>
## `getMediaControlStatus`

`luna://com.webos.service.multiviewcontroller/getMediaControlStatus`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getMediaControlStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiviewapplist"></a>
## `getMultiviewAppList`

`luna://com.webos.service.multiviewcontroller/getMultiviewAppList`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getMultiviewAppList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiviewstatus"></a>
## `getMultiviewStatus`

`luna://com.webos.service.multiviewcontroller/getMultiviewStatus`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getMultiviewStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiviewsupportoption"></a>
## `getMultiviewSupportOption`

`luna://com.webos.service.multiviewcontroller/getMultiviewSupportOption`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getMultiviewSupportOption '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpresetlist"></a>
## `getPresetList`

`luna://com.webos.service.multiviewcontroller/getPresetList`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getPresetList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrecentslist"></a>
## `getRecentsList`

`luna://com.webos.service.multiviewcontroller/getRecentsList`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getRecentsList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrestrictionstatus"></a>
## `getRestrictionStatus`

`luna://com.webos.service.multiviewcontroller/getRestrictionStatus`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getRestrictionStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.multiviewcontroller/getStatus`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsubapplist"></a>
## `getSubAppList`

`luna://com.webos.service.multiviewcontroller/getSubAppList`

Getter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/getSubAppList '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="increasemixaudiovolume"></a>
## `increaseMixAudioVolume`

`luna://com.webos.service.multiviewcontroller/increaseMixAudioVolume`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/increaseMixAudioVolume '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchapps"></a>
## `launchApps`

`luna://com.webos.service.multiviewcontroller/launchApps`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/launchApps '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchmode"></a>
## `launchMode`

`luna://com.webos.service.multiviewcontroller/launchMode`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/launchMode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removeclient"></a>
## `removeClient` ⚠️ DANGEROUS

`luna://com.webos.service.multiviewcontroller/removeClient`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/removeClient '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removepreset"></a>
## `removePreset` ⚠️ DANGEROUS

`luna://com.webos.service.multiviewcontroller/removePreset`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/removePreset '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="selectaudioout"></a>
## `selectAudioOut`

`luna://com.webos.service.multiviewcontroller/selectAudioOut`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/selectAudioOut '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setappcloseinfo"></a>
## `setAppCloseInfo`

`luna://com.webos.service.multiviewcontroller/setAppCloseInfo`

Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setAppCloseInfo '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setappcoordinate"></a>
## `setAppCoordinate`

`luna://com.webos.service.multiviewcontroller/setAppCoordinate`

Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setAppCoordinate '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setapppipelinestatus"></a>
## `setAppPipelineStatus`

`luna://com.webos.service.multiviewcontroller/setAppPipelineStatus`

Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setAppPipelineStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setappviewstatus"></a>
## `setAppViewStatus`

`luna://com.webos.service.multiviewcontroller/setAppViewStatus`

Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setAppViewStatus '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setinputmode"></a>
## `setInputMode`

`luna://com.webos.service.multiviewcontroller/setInputMode`

Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setInputMode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setinputvolume"></a>
## `setInputVolume`

`luna://com.webos.service.multiviewcontroller/setInputVolume`

Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setInputVolume '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmediacontentinfo"></a>
## `setMediaContentInfo`

`luna://com.webos.service.multiviewcontroller/setMediaContentInfo`

Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setMediaContentInfo '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmixaudio"></a>
## `setMixAudio`

`luna://com.webos.service.multiviewcontroller/setMixAudio`

Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setMixAudio '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmobileinfo"></a>
## `setMobileInfo`

`luna://com.webos.service.multiviewcontroller/setMobileInfo`

Setter on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/setMobileInfo '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="switchaudio"></a>
## `switchAudio`

`luna://com.webos.service.multiviewcontroller/switchAudio`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/switchAudio '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="switchsynctype"></a>
## `switchSyncType`

`luna://com.webos.service.multiviewcontroller/switchSyncType`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/switchSyncType '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.multiviewcontroller/test`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/test '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testpopup"></a>
## `testPopup`

`luna://com.webos.service.multiviewcontroller/testPopup`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/testPopup '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_change_view_type"></a>
## `voice/tv_multiview_change_view_type`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_change_view_type`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_change_view_type '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_enter_control_mode"></a>
## `voice/tv_multiview_enter_control_mode`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_enter_control_mode`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_enter_control_mode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_exit"></a>
## `voice/tv_multiview_exit`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_exit_control_mode"></a>
## `voice/tv_multiview_exit_control_mode`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit_control_mode`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit_control_mode '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_exit_negative"></a>
## `voice/tv_multiview_exit_negative`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit_negative`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_exit_negative '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_launch"></a>
## `voice/tv_multiview_launch`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_launch`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_launch '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_move_sub_app_position"></a>
## `voice/tv_multiview_move_sub_app_position`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_move_sub_app_position`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_move_sub_app_position '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_tv_multiview_switch_sound"></a>
## `voice/tv_multiview_switch_sound`

`luna://com.webos.service.multiviewcontroller/voice/tv_multiview_switch_sound`

Method on com.webos.service.multiviewcontroller (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.multiviewcontroller/voice/tv_multiview_switch_sound '{}'
```

> ACG groups: com.webos.service.multiviewcontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
