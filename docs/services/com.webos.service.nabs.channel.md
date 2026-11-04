# `com.webos.service.nabs.channel`

22 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`callSqliteMethod`](#callsqlitemethod) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`getChannelTypeList`](#getchanneltypelist) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`getCurrentAudioCodecType`](#getcurrentaudiocodectype) | private |  | audio | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`getCurrentAudioLanguage`](#getcurrentaudiolanguage) | private |  | audio | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`getDirectTuneChannel`](#getdirecttunechannel) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`getSignalLevel`](#getsignallevel) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/bindToBroadcast`](#scan_bindtobroadcast) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/deleteAtscManualTuning`](#scan_deleteatscmanualtuning) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). ⚠️ |
| [`scan/getAtscScanInfo`](#scan_getatscscaninfo) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAtscTuningStatus`](#scan_getatsctuningstatus) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAutoScanChannelType`](#scan_getautoscanchanneltype) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAutoScanChannelTypeOrder`](#scan_getautoscanchanneltypeorder) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAutoScanProgress`](#scan_getautoscanprogress) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAutoScanSourceOrderStatus`](#scan_getautoscansourceorderstatus) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAutoScanStatus`](#scan_getautoscanstatus) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/releaseBroadcast`](#scan_releasebroadcast) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/saveAtscManualTuning`](#scan_saveatscmanualtuning) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/setAtscManualTuning`](#scan_setatscmanualtuning) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/setAutoScanChannelType`](#scan_setautoscanchanneltype) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/skipAutoScan`](#scan_skipautoscan) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/startAutoScan`](#scan_startautoscan) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/stopAutoScan`](#scan_stopautoscan) | private |  | tv-broadcast | Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented). |

<a id="callsqlitemethod"></a>
## `callSqliteMethod`

`luna://com.webos.service.nabs.channel/callSqliteMethod`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/callSqliteMethod '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchanneltypelist"></a>
## `getChannelTypeList`

`luna://com.webos.service.nabs.channel/getChannelTypeList`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/getChannelTypeList '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiocodectype"></a>
## `getCurrentAudioCodecType`

`luna://com.webos.service.nabs.channel/getCurrentAudioCodecType`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/getCurrentAudioCodecType '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiolanguage"></a>
## `getCurrentAudioLanguage`

`luna://com.webos.service.nabs.channel/getCurrentAudioLanguage`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/getCurrentAudioLanguage '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdirecttunechannel"></a>
## `getDirectTuneChannel`

`luna://com.webos.service.nabs.channel/getDirectTuneChannel`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/getDirectTuneChannel '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignallevel"></a>
## `getSignalLevel`

`luna://com.webos.service.nabs.channel/getSignalLevel`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/getSignalLevel '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_bindtobroadcast"></a>
## `scan/bindToBroadcast`

`luna://com.webos.service.nabs.channel/scan/bindToBroadcast`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/bindToBroadcast '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_deleteatscmanualtuning"></a>
## `scan/deleteAtscManualTuning` ⚠️ DANGEROUS

`luna://com.webos.service.nabs.channel/scan/deleteAtscManualTuning`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/deleteAtscManualTuning '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getatscscaninfo"></a>
## `scan/getAtscScanInfo`

`luna://com.webos.service.nabs.channel/scan/getAtscScanInfo`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAtscScanInfo '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getatsctuningstatus"></a>
## `scan/getAtscTuningStatus`

`luna://com.webos.service.nabs.channel/scan/getAtscTuningStatus`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAtscTuningStatus '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltype"></a>
## `scan/getAutoScanChannelType`

`luna://com.webos.service.nabs.channel/scan/getAutoScanChannelType`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAutoScanChannelType '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltypeorder"></a>
## `scan/getAutoScanChannelTypeOrder`

`luna://com.webos.service.nabs.channel/scan/getAutoScanChannelTypeOrder`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAutoScanChannelTypeOrder '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanprogress"></a>
## `scan/getAutoScanProgress`

`luna://com.webos.service.nabs.channel/scan/getAutoScanProgress`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAutoScanProgress '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscansourceorderstatus"></a>
## `scan/getAutoScanSourceOrderStatus`

`luna://com.webos.service.nabs.channel/scan/getAutoScanSourceOrderStatus`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAutoScanSourceOrderStatus '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanstatus"></a>
## `scan/getAutoScanStatus`

`luna://com.webos.service.nabs.channel/scan/getAutoScanStatus`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAutoScanStatus '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_releasebroadcast"></a>
## `scan/releaseBroadcast`

`luna://com.webos.service.nabs.channel/scan/releaseBroadcast`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/releaseBroadcast '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_saveatscmanualtuning"></a>
## `scan/saveAtscManualTuning`

`luna://com.webos.service.nabs.channel/scan/saveAtscManualTuning`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/saveAtscManualTuning '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setatscmanualtuning"></a>
## `scan/setAtscManualTuning`

`luna://com.webos.service.nabs.channel/scan/setAtscManualTuning`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/setAtscManualTuning '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setautoscanchanneltype"></a>
## `scan/setAutoScanChannelType`

`luna://com.webos.service.nabs.channel/scan/setAutoScanChannelType`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/setAutoScanChannelType '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_skipautoscan"></a>
## `scan/skipAutoScan`

`luna://com.webos.service.nabs.channel/scan/skipAutoScan`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/skipAutoScan '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startautoscan"></a>
## `scan/startAutoScan`

`luna://com.webos.service.nabs.channel/scan/startAutoScan`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/startAutoScan '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopautoscan"></a>
## `scan/stopAutoScan`

`luna://com.webos.service.nabs.channel/scan/stopAutoScan`

Method on com.webos.service.nabs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/stopAutoScan '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
