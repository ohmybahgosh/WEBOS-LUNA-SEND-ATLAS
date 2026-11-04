# `com.webos.service.extinputs.component`

13 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`close`](#close) | private |  | input | Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |
| [`connect`](#connect) | private |  | input | Method on com.webos.service.extinputs.component (from on-device permission registry; parameters undocumented). |
| [`getMultiAudioOutType`](#getmultiaudioouttype) | private |  | audio | Getter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |
| [`getSignalState`](#getsignalstate) | private |  | input | Getter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |
| [`getVideoInfo`](#getvideoinfo) | private |  | input | Getter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |
| [`open`](#open) | private |  | input | Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |
| [`pause`](#pause) | private |  | input | Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |
| [`pin`](#pin) | private |  | input | Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |
| [`setAudioMute`](#setaudiomute) | private |  | audio | Setter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |
| [`setMultiAudioOutType`](#setmultiaudioouttype) | private |  | audio | Setter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |
| [`setPipelineWindowId`](#setpipelinewindowid) | private |  | input | Setter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |
| [`status`](#status) | private |  | input | Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |
| [`switchExternalInput`](#switchexternalinput) | private |  | input | Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented). |

<a id="close"></a>
## `close`

`luna://com.webos.service.extinputs.component/close`

Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/close '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.extinputs.component/connect`

Method on com.webos.service.extinputs.component (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/connect '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmultiaudioouttype"></a>
## `getMultiAudioOutType`

`luna://com.webos.service.extinputs.component/getMultiAudioOutType`

Getter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/getMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstate"></a>
## `getSignalState`

`luna://com.webos.service.extinputs.component/getSignalState`

Getter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/getSignalState '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.extinputs.component/getVideoInfo`

Getter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/getVideoInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.extinputs.component/open`

Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/open '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.extinputs.component/pause`

Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/pause '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pin"></a>
## `pin`

`luna://com.webos.service.extinputs.component/pin`

Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/pin '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.service.extinputs.component/setAudioMute`

Setter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/setAudioMute '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmultiaudioouttype"></a>
## `setMultiAudioOutType`

`luna://com.webos.service.extinputs.component/setMultiAudioOutType`

Setter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/setMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinewindowid"></a>
## `setPipelineWindowId`

`luna://com.webos.service.extinputs.component/setPipelineWindowId`

Setter on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/setPipelineWindowId '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.service.extinputs.component/status`

Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/status '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="switchexternalinput"></a>
## `switchExternalInput`

`luna://com.webos.service.extinputs.component/switchExternalInput`

Method on com.webos.service.extinputs.component (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/switchExternalInput '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
