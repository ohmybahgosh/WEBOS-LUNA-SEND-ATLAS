# `com.webos.service.extinputs.spdif`

External S/PDIF digital-audio input service: opens, connects and switches the S/PDIF input and reports its current audio codec.

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`close`](#close) | private |  | input | inferred | Closes the extinputs SPDIF. |
| [`connect`](#connect) | private |  | input | inferred | Connects the extinputs SPDIF. |
| [`getCurrentAudioCodecType`](#getcurrentaudiocodectype) | private |  | audio | inferred | Returns the current audio codec type. |
| [`open`](#open) | private |  | input | inferred | Opens the extinputs SPDIF. |
| [`pause`](#pause) | private |  | input | inferred | Pauses the extinputs SPDIF. |
| [`stop`](#stop) | private |  | input | inferred | Stops the extinputs SPDIF. |
| [`switchExternalInput`](#switchexternalinput) | private |  | input | inferred | Switches the external input. |

<a id="close"></a>
## `close`

`luna://com.webos.service.extinputs.spdif/close`

Closes the extinputs SPDIF.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.spdif/close '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.extinputs.spdif/connect`

Connects the extinputs SPDIF.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.spdif/connect '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiocodectype"></a>
## `getCurrentAudioCodecType`

`luna://com.webos.service.extinputs.spdif/getCurrentAudioCodecType`

Returns the current audio codec type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.spdif/getCurrentAudioCodecType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.extinputs.spdif/open`

Opens the extinputs SPDIF.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.spdif/open '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.extinputs.spdif/pause`

Pauses the extinputs SPDIF.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.spdif/pause '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.extinputs.spdif/stop`

Stops the extinputs SPDIF.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.spdif/stop '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="switchexternalinput"></a>
## `switchExternalInput`

`luna://com.webos.service.extinputs.spdif/switchExternalInput`

Switches the external input.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.spdif/switchExternalInput '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
