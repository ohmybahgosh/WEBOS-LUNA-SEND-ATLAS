# `com.webos.service.extinputs.av`

23 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`close`](#close) | private |  | input | Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`connect`](#connect) | private |  | input | Method on com.webos.service.extinputs.av (from on-device permission registry; parameters undocumented). |
| [`disableSubtitle`](#disablesubtitle) | private |  | input | Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`disableTeletextPes`](#disableteletextpes) | private |  | input | Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`enableSubtitle`](#enablesubtitle) | private |  | input | Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`enableTeletextPes`](#enableteletextpes) | private |  | input | Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`getMultiAudioOutType`](#getmultiaudioouttype) | private |  | audio | Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`getRatingInfo`](#getratinginfo) | private |  | input | Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`getSignalState`](#getsignalstate) | private |  | input | Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`getSubtitleState`](#getsubtitlestate) | private |  | input | Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`getTeletextData`](#getteletextdata) | private |  | input | Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`getTeletextInfo`](#getteletextinfo) | private |  | input | Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`getTeletextList`](#getteletextlist) | private |  | input | Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`getTeletextState`](#getteletextstate) | private |  | input | Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`getVideoInfo`](#getvideoinfo) | private |  | input | Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`open`](#open) | private |  | input | Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`pause`](#pause) | private |  | input | Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`pin`](#pin) | private |  | input | Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`setAudioMute`](#setaudiomute) | private |  | audio | Setter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`setMultiAudioOutType`](#setmultiaudioouttype) | private |  | audio | Setter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`setPipelineWindowId`](#setpipelinewindowid) | private |  | input | Setter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`status`](#status) | private |  | input | Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |
| [`switchExternalInput`](#switchexternalinput) | private |  | input | Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented). |

<a id="close"></a>
## `close`

`luna://com.webos.service.extinputs.av/close`

Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/close '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.extinputs.av/connect`

Method on com.webos.service.extinputs.av (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/connect '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="disablesubtitle"></a>
## `disableSubtitle`

`luna://com.webos.service.extinputs.av/disableSubtitle`

Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/disableSubtitle '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disableteletextpes"></a>
## `disableTeletextPes`

`luna://com.webos.service.extinputs.av/disableTeletextPes`

Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/disableTeletextPes '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablesubtitle"></a>
## `enableSubtitle`

`luna://com.webos.service.extinputs.av/enableSubtitle`

Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/enableSubtitle '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enableteletextpes"></a>
## `enableTeletextPes`

`luna://com.webos.service.extinputs.av/enableTeletextPes`

Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/enableTeletextPes '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiaudioouttype"></a>
## `getMultiAudioOutType`

`luna://com.webos.service.extinputs.av/getMultiAudioOutType`

Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getratinginfo"></a>
## `getRatingInfo`

`luna://com.webos.service.extinputs.av/getRatingInfo`

Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getRatingInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstate"></a>
## `getSignalState`

`luna://com.webos.service.extinputs.av/getSignalState`

Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getSignalState '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsubtitlestate"></a>
## `getSubtitleState`

`luna://com.webos.service.extinputs.av/getSubtitleState`

Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getSubtitleState '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextdata"></a>
## `getTeletextData`

`luna://com.webos.service.extinputs.av/getTeletextData`

Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getTeletextData '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextinfo"></a>
## `getTeletextInfo`

`luna://com.webos.service.extinputs.av/getTeletextInfo`

Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getTeletextInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextlist"></a>
## `getTeletextList`

`luna://com.webos.service.extinputs.av/getTeletextList`

Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getTeletextList '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextstate"></a>
## `getTeletextState`

`luna://com.webos.service.extinputs.av/getTeletextState`

Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getTeletextState '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.extinputs.av/getVideoInfo`

Getter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/getVideoInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.extinputs.av/open`

Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/open '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.extinputs.av/pause`

Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/pause '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pin"></a>
## `pin`

`luna://com.webos.service.extinputs.av/pin`

Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/pin '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.service.extinputs.av/setAudioMute`

Setter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/setAudioMute '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmultiaudioouttype"></a>
## `setMultiAudioOutType`

`luna://com.webos.service.extinputs.av/setMultiAudioOutType`

Setter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/setMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinewindowid"></a>
## `setPipelineWindowId`

`luna://com.webos.service.extinputs.av/setPipelineWindowId`

Setter on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/setPipelineWindowId '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.service.extinputs.av/status`

Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/status '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="switchexternalinput"></a>
## `switchExternalInput`

`luna://com.webos.service.extinputs.av/switchExternalInput`

Method on com.webos.service.extinputs.av (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.av/switchExternalInput '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
