# `com.webos.service.gibbs.subtitle`

Broadcast subtitle/caption service: enables and selects subtitles, reports the subtitle list and state, sets caption position, and handles HbbTV hybrid-TV caption data. _(inferred from the service's methods)_

12 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`disableSubtitle`](#disablesubtitle) | private |  | tv-broadcast | inferred | Disables the subtitle. |
| [`enableSubtitle`](#enablesubtitle) | private |  | tv-broadcast | inferred | Enables the subtitle. |
| [`getCaptionPosition`](#getcaptionposition) | private |  | tv-broadcast | inferred | Returns the caption position. |
| [`getRatingInfo`](#getratinginfo) | private |  | tv-broadcast | inferred | Returns the rating info. |
| [`getSubtitleList`](#getsubtitlelist) | private |  | tv-broadcast | inferred | Returns the subtitle list. |
| [`getSubtitleState`](#getsubtitlestate) | private |  | tv-broadcast | inferred | Returns the subtitle state. |
| [`hybridtv/getSubtitle`](#hybridtv_getsubtitle) | private |  | tv-broadcast | inferred | Returns the subtitle (hybridtv) |
| [`hybridtv/registerCaptionData`](#hybridtv_registercaptiondata) | private |  | tv-broadcast | inferred | Registers the caption data (hybridtv) |
| [`hybridtv/selectSubtitle`](#hybridtv_selectsubtitle) | private |  | tv-broadcast | inferred | Selects the subtitle (hybridtv) |
| [`hybridtv/subscribeCaptionData`](#hybridtv_subscribecaptiondata) | private |  | tv-broadcast | inferred | Subscribes to the caption data (hybridtv) |
| [`hybridtv/subtitleMute`](#hybridtv_subtitlemute) | private |  | tv-broadcast | inferred | Handles the subtitle mute (hybridtv) |
| [`setCaptionPosition`](#setcaptionposition) | private |  | tv-broadcast | inferred | Sets the caption position. |

<a id="disablesubtitle"></a>
## `disableSubtitle`

`luna://com.webos.service.gibbs.subtitle/disableSubtitle`

Disables the subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/disableSubtitle '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enablesubtitle"></a>
## `enableSubtitle`

`luna://com.webos.service.gibbs.subtitle/enableSubtitle`

Enables the subtitle.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/enableSubtitle '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcaptionposition"></a>
## `getCaptionPosition`

`luna://com.webos.service.gibbs.subtitle/getCaptionPosition`

Returns the caption position.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/getCaptionPosition '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getratinginfo"></a>
## `getRatingInfo`

`luna://com.webos.service.gibbs.subtitle/getRatingInfo`

Returns the rating info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/getRatingInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsubtitlelist"></a>
## `getSubtitleList`

`luna://com.webos.service.gibbs.subtitle/getSubtitleList`

Returns the subtitle list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/getSubtitleList '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsubtitlestate"></a>
## `getSubtitleState`

`luna://com.webos.service.gibbs.subtitle/getSubtitleState`

Returns the subtitle state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/getSubtitleState '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hybridtv_getsubtitle"></a>
## `hybridtv/getSubtitle`

`luna://com.webos.service.gibbs.subtitle/hybridtv/getSubtitle`

Returns the subtitle (hybridtv)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/hybridtv/getSubtitle '{}'
```

> ACG groups: gibbs.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hybridtv_registercaptiondata"></a>
## `hybridtv/registerCaptionData`

`luna://com.webos.service.gibbs.subtitle/hybridtv/registerCaptionData`

Registers the caption data (hybridtv)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/hybridtv/registerCaptionData '{}'
```

> ACG groups: gibbs.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hybridtv_selectsubtitle"></a>
## `hybridtv/selectSubtitle`

`luna://com.webos.service.gibbs.subtitle/hybridtv/selectSubtitle`

Selects the subtitle (hybridtv)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/hybridtv/selectSubtitle '{}'
```

> ACG groups: gibbs.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hybridtv_subscribecaptiondata"></a>
## `hybridtv/subscribeCaptionData`

`luna://com.webos.service.gibbs.subtitle/hybridtv/subscribeCaptionData`

Subscribes to the caption data (hybridtv)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/hybridtv/subscribeCaptionData '{}'
```

> ACG groups: gibbs.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hybridtv_subtitlemute"></a>
## `hybridtv/subtitleMute`

`luna://com.webos.service.gibbs.subtitle/hybridtv/subtitleMute`

Handles the subtitle mute (hybridtv)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/hybridtv/subtitleMute '{}'
```

> ACG groups: gibbs.service, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setcaptionposition"></a>
## `setCaptionPosition`

`luna://com.webos.service.gibbs.subtitle/setCaptionPosition`

Sets the caption position.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.subtitle/setCaptionPosition '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
