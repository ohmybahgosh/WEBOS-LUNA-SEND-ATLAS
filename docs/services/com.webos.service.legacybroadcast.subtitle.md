# `com.webos.service.legacybroadcast.subtitle`

Legacy broadcast subtitle/caption service: enables and disables subtitles and closed captions, manages caption position, size, and resolution, and reports rating and subtitle lists. _(inferred from the service's methods)_

29 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`closeSharedMemory`](#closesharedmemory) | private |  | tv-broadcast | inferred | Closes the shared memory. |
| [`disableAdccPes`](#disableadccpes) | private |  | tv-broadcast | inferred | Disables the adcc pes. |
| [`disablePreview`](#disablepreview) | private |  | tv-broadcast | inferred | Disables the preview. |
| [`disableSubtitle`](#disablesubtitle) | private |  | tv-broadcast | inferred | Disables the subtitle. |
| [`disableSubtPes`](#disablesubtpes) | private |  | tv-broadcast | inferred | Disables the subt pes. |
| [`disableTextDetection`](#disabletextdetection) | private |  | tv-broadcast | inferred | Disables the text detection. |
| [`enableAdccPes`](#enableadccpes) | private |  | tv-broadcast | inferred | Enables the adcc pes. |
| [`enablePreview`](#enablepreview) | private |  | tv-broadcast | inferred | Enables the preview. |
| [`enableSubtitle`](#enablesubtitle) | private |  | tv-broadcast | inferred | Enables the subtitle. |
| [`enableSubtPes`](#enablesubtpes) | private |  | tv-broadcast | inferred | Enables the subt pes. |
| [`enableTextDetection`](#enabletextdetection) | private |  | tv-broadcast | inferred | Enables the text detection. |
| [`getCaptionPosition`](#getcaptionposition) | private |  | tv-broadcast | inferred | Returns the caption position. |
| [`getCaptionResolution`](#getcaptionresolution) | private |  | tv-broadcast | inferred | Returns the caption resolution. |
| [`getCaptionSize`](#getcaptionsize) | private |  | tv-broadcast | inferred | Returns the caption size. |
| [`getCurrentSubtitle`](#getcurrentsubtitle) | private |  | tv-broadcast | inferred | Returns the current subtitle. |
| [`getRatingInfo`](#getratinginfo) | private |  | tv-broadcast | inferred | Returns the rating info. |
| [`getSubtitleList`](#getsubtitlelist) | private |  | tv-broadcast | inferred | Returns the subtitle list. |
| [`getSubtitleState`](#getsubtitlestate) | private |  | tv-broadcast | inferred | Returns the subtitle state. |
| [`offSubtitleDisplay`](#offsubtitledisplay) | private |  | tv-broadcast | inferred | Handles the off subtitle display. |
| [`onSubtitleDisplay`](#onsubtitledisplay) | private |  | tv-broadcast | inferred | Event handler: fires on the subtitle display. |
| [`openSharedMemory`](#opensharedmemory) | private |  | tv-broadcast | inferred | Opens the shared memory. |
| [`pipelineShared`](#pipelineshared) | private |  | tv-broadcast | inferred | Handles the pipeline shared. |
| [`sendPesDvbSubtitle`](#sendpesdvbsubtitle) | private |  | tv-broadcast | inferred | Sends the pes DVB subtitle. |
| [`setCaptionGenerator`](#setcaptiongenerator) | private |  | tv-broadcast | inferred | Sets the caption generator. |
| [`setCaptionPosition`](#setcaptionposition) | private |  | tv-broadcast | inferred | Sets the caption position. |
| [`setCaptionResolution`](#setcaptionresolution) | private |  | tv-broadcast | inferred | Sets the caption resolution. |
| [`setMediaSubtitle`](#setmediasubtitle) | private |  | tv-broadcast | inferred | Sets the media subtitle. |
| [`setSubtitle`](#setsubtitle) | private |  | tv-broadcast | inferred | Sets the subtitle. |
| [`setTextDetectionTest`](#settextdetectiontest) | private |  | tv-broadcast | inferred | Sets the text detection test. |

<a id="closesharedmemory"></a>
## `closeSharedMemory`

`luna://com.webos.service.legacybroadcast.subtitle/closeSharedMemory`

Closes the shared memory.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/closeSharedMemory '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disableadccpes"></a>
## `disableAdccPes`

`luna://com.webos.service.legacybroadcast.subtitle/disableAdccPes`

Disables the adcc pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/disableAdccPes '{}'
```

> ACG groups: all, private, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disablepreview"></a>
## `disablePreview`

`luna://com.webos.service.legacybroadcast.subtitle/disablePreview`

Disables the preview.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/disablePreview '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disablesubtitle"></a>
## `disableSubtitle`

`luna://com.webos.service.legacybroadcast.subtitle/disableSubtitle`

Disables the subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/disableSubtitle '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disablesubtpes"></a>
## `disableSubtPes`

`luna://com.webos.service.legacybroadcast.subtitle/disableSubtPes`

Disables the subt pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/disableSubtPes '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disabletextdetection"></a>
## `disableTextDetection`

`luna://com.webos.service.legacybroadcast.subtitle/disableTextDetection`

Disables the text detection.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/disableTextDetection '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enableadccpes"></a>
## `enableAdccPes`

`luna://com.webos.service.legacybroadcast.subtitle/enableAdccPes`

Enables the adcc pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/enableAdccPes '{}'
```

> ACG groups: all, private, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablepreview"></a>
## `enablePreview`

`luna://com.webos.service.legacybroadcast.subtitle/enablePreview`

Enables the preview.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/enablePreview '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablesubtitle"></a>
## `enableSubtitle`

`luna://com.webos.service.legacybroadcast.subtitle/enableSubtitle`

Enables the subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/enableSubtitle '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablesubtpes"></a>
## `enableSubtPes`

`luna://com.webos.service.legacybroadcast.subtitle/enableSubtPes`

Enables the subt pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/enableSubtPes '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enabletextdetection"></a>
## `enableTextDetection`

`luna://com.webos.service.legacybroadcast.subtitle/enableTextDetection`

Enables the text detection.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/enableTextDetection '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcaptionposition"></a>
## `getCaptionPosition`

`luna://com.webos.service.legacybroadcast.subtitle/getCaptionPosition`

Returns the caption position.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `ccSpec` |  |
| `displayOffsetX` |  |
| `displaySizeHeight` |  |
| `displaySizeWidth` |  |
| `posX` |  |
| `posXByProgram` |  |
| `posY` |  |
| `posYByProgram` |  |
| `resolutionHeight` |  |
| `resolutionWidth` |  |
| `subscribe` |  |
| `windowSizeHeight` |  |
| `windowSizeWidth` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/getCaptionPosition '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcaptionresolution"></a>
## `getCaptionResolution`

`luna://com.webos.service.legacybroadcast.subtitle/getCaptionResolution`

Returns the caption resolution.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `captionResolution` |  |
| `ccSpec` |  |
| `subscribe` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/getCaptionResolution '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcaptionsize"></a>
## `getCaptionSize`

`luna://com.webos.service.legacybroadcast.subtitle/getCaptionSize`

Returns the caption size.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `ccSpec` |  |
| `displayOffsetX` |  |
| `displaySizeHeight` |  |
| `displaySizeWidth` |  |
| `subscribe` |  |
| `windowSizeHeight` |  |
| `windowSizeWidth` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/getCaptionSize '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentsubtitle"></a>
## `getCurrentSubtitle`

`luna://com.webos.service.legacybroadcast.subtitle/getCurrentSubtitle`

Returns the current subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/getCurrentSubtitle '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getratinginfo"></a>
## `getRatingInfo`

`luna://com.webos.service.legacybroadcast.subtitle/getRatingInfo`

Returns the rating info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/getRatingInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsubtitlelist"></a>
## `getSubtitleList`

`luna://com.webos.service.legacybroadcast.subtitle/getSubtitleList`

Returns the subtitle list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/getSubtitleList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsubtitlestate"></a>
## `getSubtitleState`

`luna://com.webos.service.legacybroadcast.subtitle/getSubtitleState`

Returns the subtitle state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/getSubtitleState '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="offsubtitledisplay"></a>
## `offSubtitleDisplay`

`luna://com.webos.service.legacybroadcast.subtitle/offSubtitleDisplay`

Handles the off subtitle display.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/offSubtitleDisplay '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="onsubtitledisplay"></a>
## `onSubtitleDisplay`

`luna://com.webos.service.legacybroadcast.subtitle/onSubtitleDisplay`

Event handler: fires on the subtitle display.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/onSubtitleDisplay '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="opensharedmemory"></a>
## `openSharedMemory`

`luna://com.webos.service.legacybroadcast.subtitle/openSharedMemory`

Opens the shared memory.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/openSharedMemory '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pipelineshared"></a>
## `pipelineShared`

`luna://com.webos.service.legacybroadcast.subtitle/pipelineShared`

Handles the pipeline shared.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/pipelineShared '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendpesdvbsubtitle"></a>
## `sendPesDvbSubtitle`

`luna://com.webos.service.legacybroadcast.subtitle/sendPesDvbSubtitle`

Sends the pes DVB subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/sendPesDvbSubtitle '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcaptiongenerator"></a>
## `setCaptionGenerator`

`luna://com.webos.service.legacybroadcast.subtitle/setCaptionGenerator`

Sets the caption generator.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/setCaptionGenerator '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcaptionposition"></a>
## `setCaptionPosition`

`luna://com.webos.service.legacybroadcast.subtitle/setCaptionPosition`

Sets the caption position.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/setCaptionPosition '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcaptionresolution"></a>
## `setCaptionResolution`

`luna://com.webos.service.legacybroadcast.subtitle/setCaptionResolution`

Sets the caption resolution.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/setCaptionResolution '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmediasubtitle"></a>
## `setMediaSubtitle`

`luna://com.webos.service.legacybroadcast.subtitle/setMediaSubtitle`

Sets the media subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/setMediaSubtitle '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitle"></a>
## `setSubtitle`

`luna://com.webos.service.legacybroadcast.subtitle/setSubtitle`

Sets the subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/setSubtitle '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settextdetectiontest"></a>
## `setTextDetectionTest`

`luna://com.webos.service.legacybroadcast.subtitle/setTextDetectionTest`

Sets the text detection test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.subtitle/setTextDetectionTest '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
