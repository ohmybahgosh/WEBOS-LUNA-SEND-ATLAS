# `com.webos.service.extinputs.displayport`

25 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`close`](#close) | private |  | input | Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`connect`](#connect) | private |  | input | Method on com.webos.service.extinputs.displayport (from on-device permission registry; parameters undocumented). |
| [`getCurrentAudioCodecType`](#getcurrentaudiocodectype) | private |  | audio | Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`getDolbyConflictStatus`](#getdolbyconflictstatus) | private |  | input | Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`getHDMIDiagnosticsInfo`](#gethdmidiagnosticsinfo) | private |  | input | Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`getHDMIErrorHistory`](#gethdmierrorhistory) | private |  | input | Method on com.webos.service.extinputs.displayport (from on-device permission registry; parameters undocumented). |
| [`getHDMIErrorHistoryCount`](#gethdmierrorhistorycount) | private |  | input | Method on com.webos.service.extinputs.displayport (from on-device permission registry; parameters undocumented). |
| [`getHDMIInfo`](#gethdmiinfo) | private |  | input | Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`getHDMISelfDiagnostics`](#gethdmiselfdiagnostics) | private |  | input | Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`getMultiAudioOutType`](#getmultiaudioouttype) | private |  | audio | Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`getProperties`](#getproperties) | private |  | input | Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`getSignalState`](#getsignalstate) | private |  | input | Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`getVideoInfo`](#getvideoinfo) | private |  | input | Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`getVRRInfo`](#getvrrinfo) | private |  | input | Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`open`](#open) | private |  | input | Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`pause`](#pause) | private |  | input | Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`pin`](#pin) | private |  | input | Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`resetHDMIErrorHistory`](#resethdmierrorhistory) | private |  | input | Method on com.webos.service.extinputs.displayport (from on-device permission registry; parameters undocumented). ⚠️ |
| [`setAudioMute`](#setaudiomute) | private |  | audio | Setter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`setMultiAudioOutType`](#setmultiaudioouttype) | private |  | audio | Setter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`setPipelineWindowId`](#setpipelinewindowid) | private |  | input | Setter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`setProperties`](#setproperties) | private |  | input | Setter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`status`](#status) | private |  | input | Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`stop`](#stop) | private |  | input | Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |
| [`switchExternalInput`](#switchexternalinput) | private |  | input | Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented). |

<a id="close"></a>
## `close`

`luna://com.webos.service.extinputs.displayport/close`

Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/close '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.extinputs.displayport/connect`

Method on com.webos.service.extinputs.displayport (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/connect '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiocodectype"></a>
## `getCurrentAudioCodecType`

`luna://com.webos.service.extinputs.displayport/getCurrentAudioCodecType`

Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getCurrentAudioCodecType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdolbyconflictstatus"></a>
## `getDolbyConflictStatus`

`luna://com.webos.service.extinputs.displayport/getDolbyConflictStatus`

Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getDolbyConflictStatus '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethdmidiagnosticsinfo"></a>
## `getHDMIDiagnosticsInfo`

`luna://com.webos.service.extinputs.displayport/getHDMIDiagnosticsInfo`

Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getHDMIDiagnosticsInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethdmierrorhistory"></a>
## `getHDMIErrorHistory`

`luna://com.webos.service.extinputs.displayport/getHDMIErrorHistory`

Method on com.webos.service.extinputs.displayport (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getHDMIErrorHistory '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gethdmierrorhistorycount"></a>
## `getHDMIErrorHistoryCount`

`luna://com.webos.service.extinputs.displayport/getHDMIErrorHistoryCount`

Method on com.webos.service.extinputs.displayport (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getHDMIErrorHistoryCount '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gethdmiinfo"></a>
## `getHDMIInfo`

`luna://com.webos.service.extinputs.displayport/getHDMIInfo`

Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getHDMIInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethdmiselfdiagnostics"></a>
## `getHDMISelfDiagnostics`

`luna://com.webos.service.extinputs.displayport/getHDMISelfDiagnostics`

Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getHDMISelfDiagnostics '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiaudioouttype"></a>
## `getMultiAudioOutType`

`luna://com.webos.service.extinputs.displayport/getMultiAudioOutType`

Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.extinputs.displayport/getProperties`

Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getProperties '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalstate"></a>
## `getSignalState`

`luna://com.webos.service.extinputs.displayport/getSignalState`

Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getSignalState '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.extinputs.displayport/getVideoInfo`

Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getVideoInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvrrinfo"></a>
## `getVRRInfo`

`luna://com.webos.service.extinputs.displayport/getVRRInfo`

Getter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/getVRRInfo '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.extinputs.displayport/open`

Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/open '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.extinputs.displayport/pause`

Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/pause '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pin"></a>
## `pin`

`luna://com.webos.service.extinputs.displayport/pin`

Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/pin '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resethdmierrorhistory"></a>
## `resetHDMIErrorHistory` ⚠️ DANGEROUS

`luna://com.webos.service.extinputs.displayport/resetHDMIErrorHistory`

Method on com.webos.service.extinputs.displayport (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/resetHDMIErrorHistory '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.service.extinputs.displayport/setAudioMute`

Setter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/setAudioMute '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmultiaudioouttype"></a>
## `setMultiAudioOutType`

`luna://com.webos.service.extinputs.displayport/setMultiAudioOutType`

Setter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/setMultiAudioOutType '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinewindowid"></a>
## `setPipelineWindowId`

`luna://com.webos.service.extinputs.displayport/setPipelineWindowId`

Setter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/setPipelineWindowId '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setproperties"></a>
## `setProperties`

`luna://com.webos.service.extinputs.displayport/setProperties`

Setter on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/setProperties '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.service.extinputs.displayport/status`

Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/status '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.service.extinputs.displayport/stop`

Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/stop '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="switchexternalinput"></a>
## `switchExternalInput`

`luna://com.webos.service.extinputs.displayport/switchExternalInput`

Method on com.webos.service.extinputs.displayport (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs.displayport/switchExternalInput '{}'
```

> ACG groups: all, extinputs.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
