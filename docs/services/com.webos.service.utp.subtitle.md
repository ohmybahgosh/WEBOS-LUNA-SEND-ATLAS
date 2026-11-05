# `com.webos.service.utp.subtitle`

UTP subtitle/caption service: enables and disables subtitles and DVB subtitle PES, reports current subtitle and rating info, and controls caption position and preview. _(inferred from the service's methods)_

20 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`disableAdccPes`](#disableadccpes) | private |  | media | inferred | Disables the adcc pes. |
| [`disablePreview`](#disablepreview) | private |  | media | inferred | Disables the preview. |
| [`disableSubtitle`](#disablesubtitle) | public |  | media | inferred | Disables the subtitle. |
| [`disableSubtPes`](#disablesubtpes) | private |  | media | inferred | Disables the subt pes. |
| [`enableAdccPes`](#enableadccpes) | private |  | media | inferred | Enables the adcc pes. |
| [`enablePreview`](#enablepreview) | private |  | media | inferred | Enables the preview. |
| [`enableSubtitle`](#enablesubtitle) | public |  | media | inferred | Enables the subtitle. |
| [`enableSubtPes`](#enablesubtpes) | private |  | media | inferred | Enables the subt pes. |
| [`getCaptionPosition`](#getcaptionposition) | private |  | media | inferred | Returns the caption position. |
| [`getCurrentSubtitle`](#getcurrentsubtitle) | public |  | media | inferred | Returns the current subtitle. |
| [`getCurrentSubtitleState`](#getcurrentsubtitlestate) | private |  | media | inferred | Returns the current subtitle state. |
| [`getRatingInfo`](#getratinginfo) | public |  | media | inferred | Returns the rating info. |
| [`getSubtitleList`](#getsubtitlelist) | public |  | media | inferred | Returns the subtitle list. |
| [`getSubtitleState`](#getsubtitlestate) | public |  | media | inferred | Returns the subtitle state. |
| [`offSubtitleDisplay`](#offsubtitledisplay) | private |  | media | inferred | Handles the off subtitle display. |
| [`onSubtitleDisplay`](#onsubtitledisplay) | private |  | media | inferred | Event handler: fires on the subtitle display. |
| [`pipelineShared`](#pipelineshared) | private |  | media | inferred | Handles the pipeline shared. |
| [`sendPesDvbSubtitle`](#sendpesdvbsubtitle) | private |  | media | inferred | Sends the pes DVB subtitle. |
| [`setCaptionPosition`](#setcaptionposition) | private |  | media | inferred | Sets the caption position. |
| [`setSubtitle`](#setsubtitle) | public |  | media | inferred | Sets the subtitle. |

<a id="disableadccpes"></a>
## `disableAdccPes`

`luna://com.webos.service.utp.subtitle/disableAdccPes`

Disables the adcc pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/disableAdccPes '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disablepreview"></a>
## `disablePreview`

`luna://com.webos.service.utp.subtitle/disablePreview`

Disables the preview.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/disablePreview '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disablesubtitle"></a>
## `disableSubtitle`

`luna://com.webos.service.utp.subtitle/disableSubtitle`

Disables the subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/disableSubtitle '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disablesubtpes"></a>
## `disableSubtPes`

`luna://com.webos.service.utp.subtitle/disableSubtPes`

Disables the subt pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/disableSubtPes '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enableadccpes"></a>
## `enableAdccPes`

`luna://com.webos.service.utp.subtitle/enableAdccPes`

Enables the adcc pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/enableAdccPes '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablepreview"></a>
## `enablePreview`

`luna://com.webos.service.utp.subtitle/enablePreview`

Enables the preview.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/enablePreview '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablesubtitle"></a>
## `enableSubtitle`

`luna://com.webos.service.utp.subtitle/enableSubtitle`

Enables the subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/enableSubtitle '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablesubtpes"></a>
## `enableSubtPes`

`luna://com.webos.service.utp.subtitle/enableSubtPes`

Enables the subt pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/enableSubtPes '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcaptionposition"></a>
## `getCaptionPosition`

`luna://com.webos.service.utp.subtitle/getCaptionPosition`

Returns the caption position.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/getCaptionPosition '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentsubtitle"></a>
## `getCurrentSubtitle`

`luna://com.webos.service.utp.subtitle/getCurrentSubtitle`

Returns the current subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/getCurrentSubtitle '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentsubtitlestate"></a>
## `getCurrentSubtitleState`

`luna://com.webos.service.utp.subtitle/getCurrentSubtitleState`

Returns the current subtitle state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/getCurrentSubtitleState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getratinginfo"></a>
## `getRatingInfo`

`luna://com.webos.service.utp.subtitle/getRatingInfo`

Returns the rating info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/getRatingInfo '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsubtitlelist"></a>
## `getSubtitleList`

`luna://com.webos.service.utp.subtitle/getSubtitleList`

Returns the subtitle list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/getSubtitleList '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsubtitlestate"></a>
## `getSubtitleState`

`luna://com.webos.service.utp.subtitle/getSubtitleState`

Returns the subtitle state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/getSubtitleState '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="offsubtitledisplay"></a>
## `offSubtitleDisplay`

`luna://com.webos.service.utp.subtitle/offSubtitleDisplay`

Handles the off subtitle display.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/offSubtitleDisplay '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="onsubtitledisplay"></a>
## `onSubtitleDisplay`

`luna://com.webos.service.utp.subtitle/onSubtitleDisplay`

Event handler: fires on the subtitle display.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/onSubtitleDisplay '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pipelineshared"></a>
## `pipelineShared`

`luna://com.webos.service.utp.subtitle/pipelineShared`

Handles the pipeline shared.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/pipelineShared '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendpesdvbsubtitle"></a>
## `sendPesDvbSubtitle`

`luna://com.webos.service.utp.subtitle/sendPesDvbSubtitle`

Sends the pes DVB subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/sendPesDvbSubtitle '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcaptionposition"></a>
## `setCaptionPosition`

`luna://com.webos.service.utp.subtitle/setCaptionPosition`

Sets the caption position.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/setCaptionPosition '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitle"></a>
## `setSubtitle`

`luna://com.webos.service.utp.subtitle/setSubtitle`

Sets the subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.subtitle/setSubtitle '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
