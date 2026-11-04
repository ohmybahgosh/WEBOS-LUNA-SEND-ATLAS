# `com.webos.service.extinputs.hdmi`

26 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`close`](#close) | private |  | input | Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`connect`](#connect) | private |  | input | Method on com.webos.service.extinputs.hdmi (from on-device permission registry; parameters undocumented). |
| [`getCurrentAudioCodecType`](#getcurrentaudiocodectype) | private |  | audio | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getDolbyConflictStatus`](#getdolbyconflictstatus) | private |  | input | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getHDMIDiagnosticsInfo`](#gethdmidiagnosticsinfo) | private |  | input | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getHDMIErrorHistory`](#gethdmierrorhistory) | private |  | input | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getHDMIErrorHistoryCount`](#gethdmierrorhistorycount) | private |  | input | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getHDMIInfo`](#gethdmiinfo) | private |  | input | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getHDMISelfDiagnostics`](#gethdmiselfdiagnostics) | private |  | input | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getHDMIServiceDiagnosticsHistory`](#gethdmiservicediagnosticshistory) | private |  | input | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getMultiAudioOutType`](#getmultiaudioouttype) | private |  | audio | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getProperties`](#getproperties) | private |  | input | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getSignalState`](#getsignalstate) | private |  | input | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getVideoInfo`](#getvideoinfo) | private |  | input | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`getVRRInfo`](#getvrrinfo) | private |  | input | Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`open`](#open) | private |  | input | Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`pause`](#pause) | private |  | input | Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`pin`](#pin) | private |  | input | Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`resetHDMIErrorHistory`](#resethdmierrorhistory) | private |  | input | Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). ⚠️ |
| [`setAudioMute`](#setaudiomute) | private |  | audio | Setter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`setMultiAudioOutType`](#setmultiaudioouttype) | private |  | audio | Setter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`setPipelineWindowId`](#setpipelinewindowid) | private |  | input | Setter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`setProperties`](#setproperties) | private |  | input | Setter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`status`](#status) | private |  | input | Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`stop`](#stop) | private |  | input | Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |
| [`switchExternalInput`](#switchexternalinput) | private |  | input | Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented). |

<a id="close"></a>
## `close`

`luna://com.webos.service.extinputs.hdmi/close`

Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/close '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.extinputs.hdmi/connect`

Method on com.webos.service.extinputs.hdmi (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/connect '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiocodectype"></a>
## `getCurrentAudioCodecType`

`luna://com.webos.service.extinputs.hdmi/getCurrentAudioCodecType`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getCurrentAudioCodecType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdolbyconflictstatus"></a>
## `getDolbyConflictStatus`

`luna://com.webos.service.extinputs.hdmi/getDolbyConflictStatus`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getDolbyConflictStatus '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethdmidiagnosticsinfo"></a>
## `getHDMIDiagnosticsInfo`

`luna://com.webos.service.extinputs.hdmi/getHDMIDiagnosticsInfo`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getHDMIDiagnosticsInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethdmierrorhistory"></a>
## `getHDMIErrorHistory`

`luna://com.webos.service.extinputs.hdmi/getHDMIErrorHistory`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getHDMIErrorHistory '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethdmierrorhistorycount"></a>
## `getHDMIErrorHistoryCount`

`luna://com.webos.service.extinputs.hdmi/getHDMIErrorHistoryCount`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getHDMIErrorHistoryCount '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethdmiinfo"></a>
## `getHDMIInfo`

`luna://com.webos.service.extinputs.hdmi/getHDMIInfo`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getHDMIInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethdmiselfdiagnostics"></a>
## `getHDMISelfDiagnostics`

`luna://com.webos.service.extinputs.hdmi/getHDMISelfDiagnostics`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getHDMISelfDiagnostics '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethdmiservicediagnosticshistory"></a>
## `getHDMIServiceDiagnosticsHistory`

`luna://com.webos.service.extinputs.hdmi/getHDMIServiceDiagnosticsHistory`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getHDMIServiceDiagnosticsHistory '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiaudioouttype"></a>
## `getMultiAudioOutType`

`luna://com.webos.service.extinputs.hdmi/getMultiAudioOutType`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.extinputs.hdmi/getProperties`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getProperties '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstate"></a>
## `getSignalState`

`luna://com.webos.service.extinputs.hdmi/getSignalState`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getSignalState '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.extinputs.hdmi/getVideoInfo`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getVideoInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvrrinfo"></a>
## `getVRRInfo`

`luna://com.webos.service.extinputs.hdmi/getVRRInfo`

Getter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/getVRRInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.extinputs.hdmi/open`

Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/open '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.extinputs.hdmi/pause`

Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/pause '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pin"></a>
## `pin`

`luna://com.webos.service.extinputs.hdmi/pin`

Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/pin '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resethdmierrorhistory"></a>
## `resetHDMIErrorHistory` ⚠️ DANGEROUS

`luna://com.webos.service.extinputs.hdmi/resetHDMIErrorHistory`

Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/resetHDMIErrorHistory '{}'
```

> ACG groups: all, extinputs.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.service.extinputs.hdmi/setAudioMute`

Setter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/setAudioMute '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmultiaudioouttype"></a>
## `setMultiAudioOutType`

`luna://com.webos.service.extinputs.hdmi/setMultiAudioOutType`

Setter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/setMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinewindowid"></a>
## `setPipelineWindowId`

`luna://com.webos.service.extinputs.hdmi/setPipelineWindowId`

Setter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/setPipelineWindowId '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setproperties"></a>
## `setProperties`

`luna://com.webos.service.extinputs.hdmi/setProperties`

Setter on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/setProperties '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.service.extinputs.hdmi/status`

Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/status '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.extinputs.hdmi/stop`

Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/stop '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="switchexternalinput"></a>
## `switchExternalInput`

`luna://com.webos.service.extinputs.hdmi/switchExternalInput`

Method on com.webos.service.extinputs.hdmi (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.hdmi/switchExternalInput '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
