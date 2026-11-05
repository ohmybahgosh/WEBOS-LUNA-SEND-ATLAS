# `com.webos.service.extinputs.av`

External AV-input service: opens, closes and connects AV inputs, reports signal and video info, and manages subtitles and teletext for the external source.

23 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`close`](#close) | private |  | input | inferred | Closes the extinputs A/V. |
| [`connect`](#connect) | private |  | input | inferred | Connects the extinputs A/V. |
| [`disableSubtitle`](#disablesubtitle) | private |  | input | inferred | Disables the subtitle. |
| [`disableTeletextPes`](#disableteletextpes) | private |  | input | inferred | Disables the teletext pes. |
| [`enableSubtitle`](#enablesubtitle) | private |  | input | inferred | Enables the subtitle. |
| [`enableTeletextPes`](#enableteletextpes) | private |  | input | inferred | Enables the teletext pes. |
| [`getMultiAudioOutType`](#getmultiaudioouttype) | private |  | audio | inferred | Returns the multi audio out type. |
| [`getRatingInfo`](#getratinginfo) | private |  | input | inferred | Returns the rating info. |
| [`getSignalState`](#getsignalstate) | private |  | input | inferred | Returns the signal state. |
| [`getSubtitleState`](#getsubtitlestate) | private |  | input | inferred | Returns the subtitle state. |
| [`getTeletextData`](#getteletextdata) | private |  | input | inferred | Returns the teletext data. |
| [`getTeletextInfo`](#getteletextinfo) | private |  | input | inferred | Returns the teletext info. |
| [`getTeletextList`](#getteletextlist) | private |  | input | inferred | Returns the teletext list. |
| [`getTeletextState`](#getteletextstate) | private |  | input | inferred | Returns the teletext state. |
| [`getVideoInfo`](#getvideoinfo) | private |  | input | inferred | Returns the video info. |
| [`open`](#open) | private |  | input | inferred | Opens the extinputs A/V. |
| [`pause`](#pause) | private |  | input | inferred | Pauses the extinputs A/V. |
| [`pin`](#pin) | private |  | input | inferred | Handles the pin. |
| [`setAudioMute`](#setaudiomute) | private |  | audio | inferred | Sets the audio mute. |
| [`setMultiAudioOutType`](#setmultiaudioouttype) | private |  | audio | inferred | Sets the multi audio out type. |
| [`setPipelineWindowId`](#setpipelinewindowid) | private |  | input | inferred | Sets the pipeline window ID. |
| [`status`](#status) | private |  | input | inferred | Handles the status. |
| [`switchExternalInput`](#switchexternalinput) | private |  | input | inferred | Switches the external input. |

<a id="close"></a>
## `close`

`luna://com.webos.service.extinputs.av/close`

Closes the extinputs A/V.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/close '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.extinputs.av/connect`

Connects the extinputs A/V.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/connect '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="disablesubtitle"></a>
## `disableSubtitle`

`luna://com.webos.service.extinputs.av/disableSubtitle`

Disables the subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/disableSubtitle '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disableteletextpes"></a>
## `disableTeletextPes`

`luna://com.webos.service.extinputs.av/disableTeletextPes`

Disables the teletext pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/disableTeletextPes '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablesubtitle"></a>
## `enableSubtitle`

`luna://com.webos.service.extinputs.av/enableSubtitle`

Enables the subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/enableSubtitle '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enableteletextpes"></a>
## `enableTeletextPes`

`luna://com.webos.service.extinputs.av/enableTeletextPes`

Enables the teletext pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/enableTeletextPes '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiaudioouttype"></a>
## `getMultiAudioOutType`

`luna://com.webos.service.extinputs.av/getMultiAudioOutType`

Returns the multi audio out type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getratinginfo"></a>
## `getRatingInfo`

`luna://com.webos.service.extinputs.av/getRatingInfo`

Returns the rating info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getRatingInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstate"></a>
## `getSignalState`

`luna://com.webos.service.extinputs.av/getSignalState`

Returns the signal state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getSignalState '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsubtitlestate"></a>
## `getSubtitleState`

`luna://com.webos.service.extinputs.av/getSubtitleState`

Returns the subtitle state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getSubtitleState '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextdata"></a>
## `getTeletextData`

`luna://com.webos.service.extinputs.av/getTeletextData`

Returns the teletext data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getTeletextData '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextinfo"></a>
## `getTeletextInfo`

`luna://com.webos.service.extinputs.av/getTeletextInfo`

Returns the teletext info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getTeletextInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextlist"></a>
## `getTeletextList`

`luna://com.webos.service.extinputs.av/getTeletextList`

Returns the teletext list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getTeletextList '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextstate"></a>
## `getTeletextState`

`luna://com.webos.service.extinputs.av/getTeletextState`

Returns the teletext state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getTeletextState '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.extinputs.av/getVideoInfo`

Returns the video info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getVideoInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.extinputs.av/open`

Opens the extinputs A/V.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/open '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.extinputs.av/pause`

Pauses the extinputs A/V.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/pause '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pin"></a>
## `pin`

`luna://com.webos.service.extinputs.av/pin`

Handles the pin.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/pin '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.service.extinputs.av/setAudioMute`

Sets the audio mute.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/setAudioMute '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmultiaudioouttype"></a>
## `setMultiAudioOutType`

`luna://com.webos.service.extinputs.av/setMultiAudioOutType`

Sets the multi audio out type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/setMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinewindowid"></a>
## `setPipelineWindowId`

`luna://com.webos.service.extinputs.av/setPipelineWindowId`

Sets the pipeline window ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/setPipelineWindowId '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.service.extinputs.av/status`

Handles the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/status '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="switchexternalinput"></a>
## `switchExternalInput`

`luna://com.webos.service.extinputs.av/switchExternalInput`

Switches the external input.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/switchExternalInput '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
