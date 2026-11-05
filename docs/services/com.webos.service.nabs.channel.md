# `com.webos.service.nabs.channel`

ATSC broadcast channel and scan service: tunes channels, reports signal level and audio language, and runs ATSC automatic and manual channel scanning. _(inferred from the service's methods)_

22 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`callSqliteMethod`](#callsqlitemethod) | private |  | tv-broadcast | inferred | Calls the sqlite method. |
| [`getChannelTypeList`](#getchanneltypelist) | private |  | tv-broadcast | inferred | Returns the channel type list. |
| [`getCurrentAudioCodecType`](#getcurrentaudiocodectype) | private |  | audio | inferred | Returns the current audio codec type. |
| [`getCurrentAudioLanguage`](#getcurrentaudiolanguage) | private |  | audio | inferred | Returns the current audio language. |
| [`getDirectTuneChannel`](#getdirecttunechannel) | private |  | tv-broadcast | inferred | Returns the direct tune channel. |
| [`getSignalLevel`](#getsignallevel) | private |  | tv-broadcast | inferred | Returns the signal level. |
| [`scan/bindToBroadcast`](#scan_bindtobroadcast) | private |  | tv-broadcast | inferred | Binds the to broadcast (scan) |
| [`scan/deleteAtscManualTuning`](#scan_deleteatscmanualtuning) | private |  | tv-broadcast | inferred | Deletes the ATSC manual tuning (scan) ⚠️ |
| [`scan/getAtscScanInfo`](#scan_getatscscaninfo) | private |  | tv-broadcast | inferred | Returns the ATSC scan info (scan) |
| [`scan/getAtscTuningStatus`](#scan_getatsctuningstatus) | private |  | tv-broadcast | inferred | Returns the ATSC tuning status (scan) |
| [`scan/getAutoScanChannelType`](#scan_getautoscanchanneltype) | private |  | tv-broadcast | inferred | Returns the auto scan channel type (scan) |
| [`scan/getAutoScanChannelTypeOrder`](#scan_getautoscanchanneltypeorder) | private |  | tv-broadcast | inferred | Returns the auto scan channel type order (scan) |
| [`scan/getAutoScanProgress`](#scan_getautoscanprogress) | private |  | tv-broadcast | inferred | Returns the auto scan progress (scan) |
| [`scan/getAutoScanSourceOrderStatus`](#scan_getautoscansourceorderstatus) | private |  | tv-broadcast | inferred | Returns the auto scan source order status (scan) |
| [`scan/getAutoScanStatus`](#scan_getautoscanstatus) | private |  | tv-broadcast | inferred | Returns the auto scan status (scan) |
| [`scan/releaseBroadcast`](#scan_releasebroadcast) | private |  | tv-broadcast | inferred | Releases the broadcast (scan) |
| [`scan/saveAtscManualTuning`](#scan_saveatscmanualtuning) | private |  | tv-broadcast | inferred | Saves the ATSC manual tuning (scan) |
| [`scan/setAtscManualTuning`](#scan_setatscmanualtuning) | private |  | tv-broadcast | inferred | Sets the ATSC manual tuning (scan) |
| [`scan/setAutoScanChannelType`](#scan_setautoscanchanneltype) | private |  | tv-broadcast | inferred | Sets the auto scan channel type (scan) |
| [`scan/skipAutoScan`](#scan_skipautoscan) | private |  | tv-broadcast | inferred | Skips the auto scan (scan) |
| [`scan/startAutoScan`](#scan_startautoscan) | private |  | tv-broadcast | inferred | Starts the auto scan (scan) |
| [`scan/stopAutoScan`](#scan_stopautoscan) | private |  | tv-broadcast | inferred | Stops the auto scan (scan) |

<a id="callsqlitemethod"></a>
## `callSqliteMethod`

`luna://com.webos.service.nabs.channel/callSqliteMethod`

Calls the sqlite method.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/callSqliteMethod '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchanneltypelist"></a>
## `getChannelTypeList`

`luna://com.webos.service.nabs.channel/getChannelTypeList`

Returns the channel type list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/getChannelTypeList '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiocodectype"></a>
## `getCurrentAudioCodecType`

`luna://com.webos.service.nabs.channel/getCurrentAudioCodecType`

Returns the current audio codec type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/getCurrentAudioCodecType '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiolanguage"></a>
## `getCurrentAudioLanguage`

`luna://com.webos.service.nabs.channel/getCurrentAudioLanguage`

Returns the current audio language.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/getCurrentAudioLanguage '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdirecttunechannel"></a>
## `getDirectTuneChannel`

`luna://com.webos.service.nabs.channel/getDirectTuneChannel`

Returns the direct tune channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/getDirectTuneChannel '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignallevel"></a>
## `getSignalLevel`

`luna://com.webos.service.nabs.channel/getSignalLevel`

Returns the signal level.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/getSignalLevel '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_bindtobroadcast"></a>
## `scan/bindToBroadcast`

`luna://com.webos.service.nabs.channel/scan/bindToBroadcast`

Binds the to broadcast (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/bindToBroadcast '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_deleteatscmanualtuning"></a>
## `scan/deleteAtscManualTuning` ⚠️ DANGEROUS

`luna://com.webos.service.nabs.channel/scan/deleteAtscManualTuning`

Deletes the ATSC manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/deleteAtscManualTuning '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getatscscaninfo"></a>
## `scan/getAtscScanInfo`

`luna://com.webos.service.nabs.channel/scan/getAtscScanInfo`

Returns the ATSC scan info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAtscScanInfo '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getatsctuningstatus"></a>
## `scan/getAtscTuningStatus`

`luna://com.webos.service.nabs.channel/scan/getAtscTuningStatus`

Returns the ATSC tuning status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAtscTuningStatus '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltype"></a>
## `scan/getAutoScanChannelType`

`luna://com.webos.service.nabs.channel/scan/getAutoScanChannelType`

Returns the auto scan channel type (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAutoScanChannelType '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltypeorder"></a>
## `scan/getAutoScanChannelTypeOrder`

`luna://com.webos.service.nabs.channel/scan/getAutoScanChannelTypeOrder`

Returns the auto scan channel type order (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAutoScanChannelTypeOrder '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanprogress"></a>
## `scan/getAutoScanProgress`

`luna://com.webos.service.nabs.channel/scan/getAutoScanProgress`

Returns the auto scan progress (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAutoScanProgress '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscansourceorderstatus"></a>
## `scan/getAutoScanSourceOrderStatus`

`luna://com.webos.service.nabs.channel/scan/getAutoScanSourceOrderStatus`

Returns the auto scan source order status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAutoScanSourceOrderStatus '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanstatus"></a>
## `scan/getAutoScanStatus`

`luna://com.webos.service.nabs.channel/scan/getAutoScanStatus`

Returns the auto scan status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/getAutoScanStatus '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_releasebroadcast"></a>
## `scan/releaseBroadcast`

`luna://com.webos.service.nabs.channel/scan/releaseBroadcast`

Releases the broadcast (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/releaseBroadcast '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_saveatscmanualtuning"></a>
## `scan/saveAtscManualTuning`

`luna://com.webos.service.nabs.channel/scan/saveAtscManualTuning`

Saves the ATSC manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/saveAtscManualTuning '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setatscmanualtuning"></a>
## `scan/setAtscManualTuning`

`luna://com.webos.service.nabs.channel/scan/setAtscManualTuning`

Sets the ATSC manual tuning (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/setAtscManualTuning '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setautoscanchanneltype"></a>
## `scan/setAutoScanChannelType`

`luna://com.webos.service.nabs.channel/scan/setAutoScanChannelType`

Sets the auto scan channel type (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/setAutoScanChannelType '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_skipautoscan"></a>
## `scan/skipAutoScan`

`luna://com.webos.service.nabs.channel/scan/skipAutoScan`

Skips the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/skipAutoScan '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startautoscan"></a>
## `scan/startAutoScan`

`luna://com.webos.service.nabs.channel/scan/startAutoScan`

Starts the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/startAutoScan '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopautoscan"></a>
## `scan/stopAutoScan`

`luna://com.webos.service.nabs.channel/scan/stopAutoScan`

Stops the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.channel/scan/stopAutoScan '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
