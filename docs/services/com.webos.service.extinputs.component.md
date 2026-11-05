# `com.webos.service.extinputs.component`

External component-input service: opens/closes and connects component (and similar) inputs, reports signal state and video info, controls audio mute and output type, and switches external input. _(inferred from the service's methods)_

13 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`close`](#close) | private |  | input | inferred | Closes the extinputs component. |
| [`connect`](#connect) | private |  | input | inferred | Connects the extinputs component. |
| [`getMultiAudioOutType`](#getmultiaudioouttype) | private |  | audio | inferred | Returns the multi audio out type. |
| [`getSignalState`](#getsignalstate) | private |  | input | inferred | Returns the signal state. |
| [`getVideoInfo`](#getvideoinfo) | private |  | input | inferred | Returns the video info. |
| [`open`](#open) | private |  | input | inferred | Opens the extinputs component. |
| [`pause`](#pause) | private |  | input | inferred | Pauses the extinputs component. |
| [`pin`](#pin) | private |  | input | inferred | Handles the pin. |
| [`setAudioMute`](#setaudiomute) | private |  | audio | inferred | Sets the audio mute. |
| [`setMultiAudioOutType`](#setmultiaudioouttype) | private |  | audio | inferred | Sets the multi audio out type. |
| [`setPipelineWindowId`](#setpipelinewindowid) | private |  | input | inferred | Sets the pipeline window ID. |
| [`status`](#status) | private |  | input | inferred | Handles the status. |
| [`switchExternalInput`](#switchexternalinput) | private |  | input | inferred | Switches the external input. |

<a id="close"></a>
## `close`

`luna://com.webos.service.extinputs.component/close`

Closes the extinputs component.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/close '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.extinputs.component/connect`

Connects the extinputs component.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/connect '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmultiaudioouttype"></a>
## `getMultiAudioOutType`

`luna://com.webos.service.extinputs.component/getMultiAudioOutType`

Returns the multi audio out type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/getMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstate"></a>
## `getSignalState`

`luna://com.webos.service.extinputs.component/getSignalState`

Returns the signal state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/getSignalState '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.extinputs.component/getVideoInfo`

Returns the video info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/getVideoInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.extinputs.component/open`

Opens the extinputs component.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/open '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.extinputs.component/pause`

Pauses the extinputs component.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/pause '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pin"></a>
## `pin`

`luna://com.webos.service.extinputs.component/pin`

Handles the pin.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/pin '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.service.extinputs.component/setAudioMute`

Sets the audio mute.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/setAudioMute '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmultiaudioouttype"></a>
## `setMultiAudioOutType`

`luna://com.webos.service.extinputs.component/setMultiAudioOutType`

Sets the multi audio out type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/setMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinewindowid"></a>
## `setPipelineWindowId`

`luna://com.webos.service.extinputs.component/setPipelineWindowId`

Sets the pipeline window ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/setPipelineWindowId '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.service.extinputs.component/status`

Handles the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/status '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="switchexternalinput"></a>
## `switchExternalInput`

`luna://com.webos.service.extinputs.component/switchExternalInput`

Switches the external input.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.component/switchExternalInput '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
