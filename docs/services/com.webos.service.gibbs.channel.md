# `com.webos.service.gibbs.channel`

41 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`acas/getAutomaticDisplay`](#acas_getautomaticdisplay) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`acas/getModuleId`](#acas_getmoduleid) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`acas/getModuleInfo`](#acas_getmoduleinfo) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`acas/setEmmTimerChannel`](#acas_setemmtimerchannel) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`callSqliteMethod`](#callsqlitemethod) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`changeChannelNumber`](#changechannelnumber) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`clearChannelMap`](#clearchannelmap) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`exportChannelMap`](#exportchannelmap) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`getChannel`](#getchannel) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`getChannelGroupList`](#getchannelgrouplist) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`getChannelModeList`](#getchannelmodelist) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`getChannelTypeList`](#getchanneltypelist) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`getCurrentAudioLanguage`](#getcurrentaudiolanguage) | private |  | audio | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`getSignalLevel`](#getsignallevel) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`getSimilarChannelList`](#getsimilarchannellist) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`getSpecialServiceInfo`](#getspecialserviceinfo) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`importChannelMap`](#importchannelmap) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`notifyChannelListChanged`](#notifychannellistchanged) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`notifyRecommendedChannel`](#notifyrecommendedchannel) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`releaseChannelBlock`](#releasechannelblock) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`releaseChannelFavoriteGroup`](#releasechannelfavoritegroup) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`releaseChannelSkip`](#releasechannelskip) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`saveChannelList`](#savechannellist) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/deleteAtscManualTuning`](#scan_deleteatscmanualtuning) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). ⚠️ |
| [`scan/getAtscScanInfo`](#scan_getatscscaninfo) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAtscTuningStatus`](#scan_getatsctuningstatus) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAutoScanChannelType`](#scan_getautoscanchanneltype) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAutoScanChannelTypeOrder`](#scan_getautoscanchanneltypeorder) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAutoScanProgress`](#scan_getautoscanprogress) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAutoScanSourceOrderStatus`](#scan_getautoscansourceorderstatus) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAutoScanSourceSearchResult`](#scan_getautoscansourcesearchresult) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/getAutoScanStatus`](#scan_getautoscanstatus) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/saveAtscManualTuning`](#scan_saveatscmanualtuning) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/setAtscManualTuning`](#scan_setatscmanualtuning) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/setAutoScanChannelType`](#scan_setautoscanchanneltype) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/skipAutoScan`](#scan_skipautoscan) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/startAutoScan`](#scan_startautoscan) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`scan/stopAutoScan`](#scan_stopautoscan) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`setChannelBlock`](#setchannelblock) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`setChannelFavoriteGroup`](#setchannelfavoritegroup) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |
| [`setChannelSkip`](#setchannelskip) | private |  | tv-broadcast | Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented). |

<a id="acas_getautomaticdisplay"></a>
## `acas/getAutomaticDisplay`

`luna://com.webos.service.gibbs.channel/acas/getAutomaticDisplay`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/acas/getAutomaticDisplay '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="acas_getmoduleid"></a>
## `acas/getModuleId`

`luna://com.webos.service.gibbs.channel/acas/getModuleId`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/acas/getModuleId '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="acas_getmoduleinfo"></a>
## `acas/getModuleInfo`

`luna://com.webos.service.gibbs.channel/acas/getModuleInfo`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/acas/getModuleInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="acas_setemmtimerchannel"></a>
## `acas/setEmmTimerChannel`

`luna://com.webos.service.gibbs.channel/acas/setEmmTimerChannel`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/acas/setEmmTimerChannel '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="callsqlitemethod"></a>
## `callSqliteMethod`

`luna://com.webos.service.gibbs.channel/callSqliteMethod`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/callSqliteMethod '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changechannelnumber"></a>
## `changeChannelNumber`

`luna://com.webos.service.gibbs.channel/changeChannelNumber`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/changeChannelNumber '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="clearchannelmap"></a>
## `clearChannelMap`

`luna://com.webos.service.gibbs.channel/clearChannelMap`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/clearChannelMap '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="exportchannelmap"></a>
## `exportChannelMap`

`luna://com.webos.service.gibbs.channel/exportChannelMap`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/exportChannelMap '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannel"></a>
## `getChannel`

`luna://com.webos.service.gibbs.channel/getChannel`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/getChannel '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelgrouplist"></a>
## `getChannelGroupList`

`luna://com.webos.service.gibbs.channel/getChannelGroupList`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/getChannelGroupList '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelmodelist"></a>
## `getChannelModeList`

`luna://com.webos.service.gibbs.channel/getChannelModeList`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/getChannelModeList '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchanneltypelist"></a>
## `getChannelTypeList`

`luna://com.webos.service.gibbs.channel/getChannelTypeList`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/getChannelTypeList '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiolanguage"></a>
## `getCurrentAudioLanguage`

`luna://com.webos.service.gibbs.channel/getCurrentAudioLanguage`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/getCurrentAudioLanguage '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignallevel"></a>
## `getSignalLevel`

`luna://com.webos.service.gibbs.channel/getSignalLevel`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/getSignalLevel '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsimilarchannellist"></a>
## `getSimilarChannelList`

`luna://com.webos.service.gibbs.channel/getSimilarChannelList`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/getSimilarChannelList '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getspecialserviceinfo"></a>
## `getSpecialServiceInfo`

`luna://com.webos.service.gibbs.channel/getSpecialServiceInfo`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/getSpecialServiceInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="importchannelmap"></a>
## `importChannelMap`

`luna://com.webos.service.gibbs.channel/importChannelMap`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/importChannelMap '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifychannellistchanged"></a>
## `notifyChannelListChanged`

`luna://com.webos.service.gibbs.channel/notifyChannelListChanged`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/notifyChannelListChanged '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyrecommendedchannel"></a>
## `notifyRecommendedChannel`

`luna://com.webos.service.gibbs.channel/notifyRecommendedChannel`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/notifyRecommendedChannel '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelblock"></a>
## `releaseChannelBlock`

`luna://com.webos.service.gibbs.channel/releaseChannelBlock`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/releaseChannelBlock '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelfavoritegroup"></a>
## `releaseChannelFavoriteGroup`

`luna://com.webos.service.gibbs.channel/releaseChannelFavoriteGroup`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/releaseChannelFavoriteGroup '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelskip"></a>
## `releaseChannelSkip`

`luna://com.webos.service.gibbs.channel/releaseChannelSkip`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/releaseChannelSkip '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="savechannellist"></a>
## `saveChannelList`

`luna://com.webos.service.gibbs.channel/saveChannelList`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/saveChannelList '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_deleteatscmanualtuning"></a>
## `scan/deleteAtscManualTuning` ⚠️ DANGEROUS

`luna://com.webos.service.gibbs.channel/scan/deleteAtscManualTuning`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/deleteAtscManualTuning '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getatscscaninfo"></a>
## `scan/getAtscScanInfo`

`luna://com.webos.service.gibbs.channel/scan/getAtscScanInfo`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/getAtscScanInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getatsctuningstatus"></a>
## `scan/getAtscTuningStatus`

`luna://com.webos.service.gibbs.channel/scan/getAtscTuningStatus`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/getAtscTuningStatus '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltype"></a>
## `scan/getAutoScanChannelType`

`luna://com.webos.service.gibbs.channel/scan/getAutoScanChannelType`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/getAutoScanChannelType '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltypeorder"></a>
## `scan/getAutoScanChannelTypeOrder`

`luna://com.webos.service.gibbs.channel/scan/getAutoScanChannelTypeOrder`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/getAutoScanChannelTypeOrder '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanprogress"></a>
## `scan/getAutoScanProgress`

`luna://com.webos.service.gibbs.channel/scan/getAutoScanProgress`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/getAutoScanProgress '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscansourceorderstatus"></a>
## `scan/getAutoScanSourceOrderStatus`

`luna://com.webos.service.gibbs.channel/scan/getAutoScanSourceOrderStatus`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/getAutoScanSourceOrderStatus '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscansourcesearchresult"></a>
## `scan/getAutoScanSourceSearchResult`

`luna://com.webos.service.gibbs.channel/scan/getAutoScanSourceSearchResult`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/getAutoScanSourceSearchResult '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanstatus"></a>
## `scan/getAutoScanStatus`

`luna://com.webos.service.gibbs.channel/scan/getAutoScanStatus`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/getAutoScanStatus '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_saveatscmanualtuning"></a>
## `scan/saveAtscManualTuning`

`luna://com.webos.service.gibbs.channel/scan/saveAtscManualTuning`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/saveAtscManualTuning '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setatscmanualtuning"></a>
## `scan/setAtscManualTuning`

`luna://com.webos.service.gibbs.channel/scan/setAtscManualTuning`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/setAtscManualTuning '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setautoscanchanneltype"></a>
## `scan/setAutoScanChannelType`

`luna://com.webos.service.gibbs.channel/scan/setAutoScanChannelType`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/setAutoScanChannelType '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_skipautoscan"></a>
## `scan/skipAutoScan`

`luna://com.webos.service.gibbs.channel/scan/skipAutoScan`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/skipAutoScan '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startautoscan"></a>
## `scan/startAutoScan`

`luna://com.webos.service.gibbs.channel/scan/startAutoScan`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/startAutoScan '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopautoscan"></a>
## `scan/stopAutoScan`

`luna://com.webos.service.gibbs.channel/scan/stopAutoScan`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/scan/stopAutoScan '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelblock"></a>
## `setChannelBlock`

`luna://com.webos.service.gibbs.channel/setChannelBlock`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/setChannelBlock '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelfavoritegroup"></a>
## `setChannelFavoriteGroup`

`luna://com.webos.service.gibbs.channel/setChannelFavoriteGroup`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/setChannelFavoriteGroup '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelskip"></a>
## `setChannelSkip`

`luna://com.webos.service.gibbs.channel/setChannelSkip`

Method on com.webos.service.gibbs.channel (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.channel/setChannelSkip '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
