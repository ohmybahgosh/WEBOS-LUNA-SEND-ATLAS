# `com.webos.service.gibbips.channel`

IP-broadcast channel management: builds and edits the channel map, queries channel and service lists and info, and handles ACAS conditional-access modules. _(inferred from the service's methods)_

53 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`acas/getAutomaticDisplay`](#acas_getautomaticdisplay) | private |  | tv-broadcast | inferred | Returns the automatic display (acas) |
| [`acas/getModuleId`](#acas_getmoduleid) | private |  | tv-broadcast | inferred | Returns the module ID (acas) |
| [`acas/getModuleInfo`](#acas_getmoduleinfo) | private |  | tv-broadcast | inferred | Returns the module info (acas) |
| [`acas/setEmmTimerChannel`](#acas_setemmtimerchannel) | private |  | tv-broadcast | inferred | Sets the emm timer channel (acas) |
| [`callSqliteMethod`](#callsqlitemethod) | private |  | tv-broadcast | inferred | Calls the sqlite method. |
| [`changeChannelNumber`](#changechannelnumber) | private |  | tv-broadcast | inferred | Changes the channel number. |
| [`changeChannelNumberList`](#changechannelnumberlist) | private |  | tv-broadcast | inferred | Changes the channel number list. |
| [`clearChannelMap`](#clearchannelmap) | private |  | tv-broadcast | inferred | Clears the channel map. |
| [`exportChannelMap`](#exportchannelmap) | private |  | tv-broadcast | inferred | Exports the channel map. |
| [`getChannel`](#getchannel) | private |  | tv-broadcast | inferred | Returns the channel. |
| [`getChannelGroupList`](#getchannelgrouplist) | private |  | tv-broadcast | inferred | Returns the channel group list. |
| [`getChannelListUpdateInfo`](#getchannellistupdateinfo) | private |  | tv-broadcast | inferred | Returns the channel list update info. |
| [`getChannelModeList`](#getchannelmodelist) | private |  | tv-broadcast | inferred | Returns the channel mode list. |
| [`getChannelPlayType`](#getchannelplaytype) | private |  | tv-broadcast | inferred | Returns the channel play type. |
| [`getChannelTypeList`](#getchanneltypelist) | private |  | tv-broadcast | inferred | Returns the channel type list. |
| [`getCurrentAudioLanguage`](#getcurrentaudiolanguage) | private |  | audio | inferred | Returns the current audio language. |
| [`getDvbiServiceList`](#getdvbiservicelist) | private |  | tv-broadcast | inferred | Returns the dvbi service list. |
| [`getServerServiceList`](#getserverservicelist) | private |  | tv-broadcast | inferred | Returns the server service list. |
| [`getSignalLevel`](#getsignallevel) | private |  | tv-broadcast | inferred | Returns the signal level. |
| [`getSimilarChannelList`](#getsimilarchannellist) | private |  | tv-broadcast | inferred | Returns the similar channel list. |
| [`getSpecialServiceInfo`](#getspecialserviceinfo) | private |  | tv-broadcast | inferred | Returns the special service info. |
| [`importChannelMap`](#importchannelmap) | private |  | tv-broadcast | inferred | Imports the channel map. |
| [`mdsOverriding`](#mdsoverriding) | private |  | tv-broadcast | inferred | Handles the mds overriding. |
| [`notifyChannelListChanged`](#notifychannellistchanged) | private |  | tv-broadcast | inferred | Notifies of the channel list changed. |
| [`notifyRecommendedChannel`](#notifyrecommendedchannel) | private |  | tv-broadcast | inferred | Notifies of the recommended channel. |
| [`notifyRevertRequested`](#notifyrevertrequested) | private |  | tv-broadcast | inferred | Notifies of the revert requested. |
| [`notifyRfInfoRequested`](#notifyrfinforequested) | private |  | tv-broadcast | inferred | Notifies of the RF info requested. |
| [`releaseChannelBlock`](#releasechannelblock) | private |  | tv-broadcast | inferred | Releases the channel block. |
| [`releaseChannelFavoriteGroup`](#releasechannelfavoritegroup) | private |  | tv-broadcast | inferred | Releases the channel favorite group. |
| [`releaseChannelSkip`](#releasechannelskip) | private |  | tv-broadcast | inferred | Releases the channel skip. |
| [`saveChannelList`](#savechannellist) | private |  | tv-broadcast | inferred | Saves the channel list. |
| [`scan/checkServerStatus`](#scan_checkserverstatus) | private |  | tv-broadcast | inferred | Checks the server status (scan) |
| [`scan/getAutoScanChannelType`](#scan_getautoscanchanneltype) | private |  | tv-broadcast | inferred | Returns the auto scan channel type (scan) |
| [`scan/getAutoScanChannelTypeOrder`](#scan_getautoscanchanneltypeorder) | private |  | tv-broadcast | inferred | Returns the auto scan channel type order (scan) |
| [`scan/getAutoScanProgress`](#scan_getautoscanprogress) | private |  | tv-broadcast | inferred | Returns the auto scan progress (scan) |
| [`scan/getAutoScanSourceOrderStatus`](#scan_getautoscansourceorderstatus) | private |  | tv-broadcast | inferred | Returns the auto scan source order status (scan) |
| [`scan/getAutoScanSourceSearchResult`](#scan_getautoscansourcesearchresult) | private |  | tv-broadcast | inferred | Returns the auto scan source search result (scan) |
| [`scan/getAutoScanStatus`](#scan_getautoscanstatus) | private |  | tv-broadcast | inferred | Returns the auto scan status (scan) |
| [`scan/getScanSelectionInfo`](#scan_getscanselectioninfo) | private |  | tv-broadcast | inferred | Returns the scan selection info (scan) |
| [`scan/prepareAutoScan`](#scan_prepareautoscan) | private |  | tv-broadcast | inferred | Prepares the auto scan (scan) |
| [`scan/scanSelectionInfoDone`](#scan_scanselectioninfodone) | private |  | tv-broadcast | inferred | Scans for selection info done (scan) |
| [`scan/setAutoScanChannelType`](#scan_setautoscanchanneltype) | private |  | tv-broadcast | inferred | Sets the auto scan channel type (scan) |
| [`scan/skipAutoScan`](#scan_skipautoscan) | private |  | tv-broadcast | inferred | Skips the auto scan (scan) |
| [`scan/startAutoScan`](#scan_startautoscan) | private |  | tv-broadcast | inferred | Starts the auto scan (scan) |
| [`scan/startServiceListUpdate`](#scan_startservicelistupdate) | private |  | tv-broadcast | inferred | Starts the service list update (scan) |
| [`scan/stopAutoScan`](#scan_stopautoscan) | private |  | tv-broadcast | inferred | Stops the auto scan (scan) |
| [`scan/stopServiceListUpdate`](#scan_stopservicelistupdate) | private |  | tv-broadcast | inferred | Stops the service list update (scan) |
| [`setChannelBlock`](#setchannelblock) | private |  | tv-broadcast | inferred | Sets the channel block. |
| [`setChannelFavoriteGroup`](#setchannelfavoritegroup) | private |  | tv-broadcast | inferred | Sets the channel favorite group. |
| [`setChannelMode`](#setchannelmode) | private |  | tv-broadcast | inferred | Sets the channel mode. |
| [`setChannelSkip`](#setchannelskip) | private |  | tv-broadcast | inferred | Sets the channel skip. |
| [`setRfInfo`](#setrfinfo) | private |  | tv-broadcast | inferred | Sets the RF info. |
| [`updateChannelMap`](#updatechannelmap) | private |  | tv-broadcast | inferred | Updates the channel map. |

<a id="acas_getautomaticdisplay"></a>
## `acas/getAutomaticDisplay`

`luna://com.webos.service.gibbips.channel/acas/getAutomaticDisplay`

Returns the automatic display (acas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/acas/getAutomaticDisplay '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="acas_getmoduleid"></a>
## `acas/getModuleId`

`luna://com.webos.service.gibbips.channel/acas/getModuleId`

Returns the module ID (acas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/acas/getModuleId '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="acas_getmoduleinfo"></a>
## `acas/getModuleInfo`

`luna://com.webos.service.gibbips.channel/acas/getModuleInfo`

Returns the module info (acas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/acas/getModuleInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="acas_setemmtimerchannel"></a>
## `acas/setEmmTimerChannel`

`luna://com.webos.service.gibbips.channel/acas/setEmmTimerChannel`

Sets the emm timer channel (acas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/acas/setEmmTimerChannel '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="callsqlitemethod"></a>
## `callSqliteMethod`

`luna://com.webos.service.gibbips.channel/callSqliteMethod`

Calls the sqlite method.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/callSqliteMethod '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changechannelnumber"></a>
## `changeChannelNumber`

`luna://com.webos.service.gibbips.channel/changeChannelNumber`

Changes the channel number.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/changeChannelNumber '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changechannelnumberlist"></a>
## `changeChannelNumberList`

`luna://com.webos.service.gibbips.channel/changeChannelNumberList`

Changes the channel number list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/changeChannelNumberList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="clearchannelmap"></a>
## `clearChannelMap`

`luna://com.webos.service.gibbips.channel/clearChannelMap`

Clears the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/clearChannelMap '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="exportchannelmap"></a>
## `exportChannelMap`

`luna://com.webos.service.gibbips.channel/exportChannelMap`

Exports the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/exportChannelMap '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannel"></a>
## `getChannel`

`luna://com.webos.service.gibbips.channel/getChannel`

Returns the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getChannel '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelgrouplist"></a>
## `getChannelGroupList`

`luna://com.webos.service.gibbips.channel/getChannelGroupList`

Returns the channel group list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getChannelGroupList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannellistupdateinfo"></a>
## `getChannelListUpdateInfo`

`luna://com.webos.service.gibbips.channel/getChannelListUpdateInfo`

Returns the channel list update info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getChannelListUpdateInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelmodelist"></a>
## `getChannelModeList`

`luna://com.webos.service.gibbips.channel/getChannelModeList`

Returns the channel mode list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getChannelModeList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelplaytype"></a>
## `getChannelPlayType`

`luna://com.webos.service.gibbips.channel/getChannelPlayType`

Returns the channel play type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getChannelPlayType '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchanneltypelist"></a>
## `getChannelTypeList`

`luna://com.webos.service.gibbips.channel/getChannelTypeList`

Returns the channel type list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getChannelTypeList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentaudiolanguage"></a>
## `getCurrentAudioLanguage`

`luna://com.webos.service.gibbips.channel/getCurrentAudioLanguage`

Returns the current audio language.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getCurrentAudioLanguage '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdvbiservicelist"></a>
## `getDvbiServiceList`

`luna://com.webos.service.gibbips.channel/getDvbiServiceList`

Returns the dvbi service list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getDvbiServiceList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getserverservicelist"></a>
## `getServerServiceList`

`luna://com.webos.service.gibbips.channel/getServerServiceList`

Returns the server service list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getServerServiceList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignallevel"></a>
## `getSignalLevel`

`luna://com.webos.service.gibbips.channel/getSignalLevel`

Returns the signal level.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getSignalLevel '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsimilarchannellist"></a>
## `getSimilarChannelList`

`luna://com.webos.service.gibbips.channel/getSimilarChannelList`

Returns the similar channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getSimilarChannelList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getspecialserviceinfo"></a>
## `getSpecialServiceInfo`

`luna://com.webos.service.gibbips.channel/getSpecialServiceInfo`

Returns the special service info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/getSpecialServiceInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="importchannelmap"></a>
## `importChannelMap`

`luna://com.webos.service.gibbips.channel/importChannelMap`

Imports the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/importChannelMap '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="mdsoverriding"></a>
## `mdsOverriding`

`luna://com.webos.service.gibbips.channel/mdsOverriding`

Handles the mds overriding.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/mdsOverriding '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifychannellistchanged"></a>
## `notifyChannelListChanged`

`luna://com.webos.service.gibbips.channel/notifyChannelListChanged`

Notifies of the channel list changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/notifyChannelListChanged '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyrecommendedchannel"></a>
## `notifyRecommendedChannel`

`luna://com.webos.service.gibbips.channel/notifyRecommendedChannel`

Notifies of the recommended channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/notifyRecommendedChannel '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyrevertrequested"></a>
## `notifyRevertRequested`

`luna://com.webos.service.gibbips.channel/notifyRevertRequested`

Notifies of the revert requested.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/notifyRevertRequested '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyrfinforequested"></a>
## `notifyRfInfoRequested`

`luna://com.webos.service.gibbips.channel/notifyRfInfoRequested`

Notifies of the RF info requested.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/notifyRfInfoRequested '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelblock"></a>
## `releaseChannelBlock`

`luna://com.webos.service.gibbips.channel/releaseChannelBlock`

Releases the channel block.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/releaseChannelBlock '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelfavoritegroup"></a>
## `releaseChannelFavoriteGroup`

`luna://com.webos.service.gibbips.channel/releaseChannelFavoriteGroup`

Releases the channel favorite group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/releaseChannelFavoriteGroup '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelskip"></a>
## `releaseChannelSkip`

`luna://com.webos.service.gibbips.channel/releaseChannelSkip`

Releases the channel skip.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/releaseChannelSkip '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="savechannellist"></a>
## `saveChannelList`

`luna://com.webos.service.gibbips.channel/saveChannelList`

Saves the channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/saveChannelList '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_checkserverstatus"></a>
## `scan/checkServerStatus`

`luna://com.webos.service.gibbips.channel/scan/checkServerStatus`

Checks the server status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/checkServerStatus '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltype"></a>
## `scan/getAutoScanChannelType`

`luna://com.webos.service.gibbips.channel/scan/getAutoScanChannelType`

Returns the auto scan channel type (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/getAutoScanChannelType '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanchanneltypeorder"></a>
## `scan/getAutoScanChannelTypeOrder`

`luna://com.webos.service.gibbips.channel/scan/getAutoScanChannelTypeOrder`

Returns the auto scan channel type order (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/getAutoScanChannelTypeOrder '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanprogress"></a>
## `scan/getAutoScanProgress`

`luna://com.webos.service.gibbips.channel/scan/getAutoScanProgress`

Returns the auto scan progress (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/getAutoScanProgress '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscansourceorderstatus"></a>
## `scan/getAutoScanSourceOrderStatus`

`luna://com.webos.service.gibbips.channel/scan/getAutoScanSourceOrderStatus`

Returns the auto scan source order status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/getAutoScanSourceOrderStatus '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscansourcesearchresult"></a>
## `scan/getAutoScanSourceSearchResult`

`luna://com.webos.service.gibbips.channel/scan/getAutoScanSourceSearchResult`

Returns the auto scan source search result (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/getAutoScanSourceSearchResult '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getautoscanstatus"></a>
## `scan/getAutoScanStatus`

`luna://com.webos.service.gibbips.channel/scan/getAutoScanStatus`

Returns the auto scan status (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/getAutoScanStatus '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_getscanselectioninfo"></a>
## `scan/getScanSelectionInfo`

`luna://com.webos.service.gibbips.channel/scan/getScanSelectionInfo`

Returns the scan selection info (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/getScanSelectionInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_prepareautoscan"></a>
## `scan/prepareAutoScan`

`luna://com.webos.service.gibbips.channel/scan/prepareAutoScan`

Prepares the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/prepareAutoScan '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_scanselectioninfodone"></a>
## `scan/scanSelectionInfoDone`

`luna://com.webos.service.gibbips.channel/scan/scanSelectionInfoDone`

Scans for selection info done (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/scanSelectionInfoDone '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_setautoscanchanneltype"></a>
## `scan/setAutoScanChannelType`

`luna://com.webos.service.gibbips.channel/scan/setAutoScanChannelType`

Sets the auto scan channel type (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/setAutoScanChannelType '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_skipautoscan"></a>
## `scan/skipAutoScan`

`luna://com.webos.service.gibbips.channel/scan/skipAutoScan`

Skips the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/skipAutoScan '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startautoscan"></a>
## `scan/startAutoScan`

`luna://com.webos.service.gibbips.channel/scan/startAutoScan`

Starts the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/startAutoScan '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_startservicelistupdate"></a>
## `scan/startServiceListUpdate`

`luna://com.webos.service.gibbips.channel/scan/startServiceListUpdate`

Starts the service list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/startServiceListUpdate '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopautoscan"></a>
## `scan/stopAutoScan`

`luna://com.webos.service.gibbips.channel/scan/stopAutoScan`

Stops the auto scan (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/stopAutoScan '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scan_stopservicelistupdate"></a>
## `scan/stopServiceListUpdate`

`luna://com.webos.service.gibbips.channel/scan/stopServiceListUpdate`

Stops the service list update (scan)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/scan/stopServiceListUpdate '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelblock"></a>
## `setChannelBlock`

`luna://com.webos.service.gibbips.channel/setChannelBlock`

Sets the channel block.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/setChannelBlock '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelfavoritegroup"></a>
## `setChannelFavoriteGroup`

`luna://com.webos.service.gibbips.channel/setChannelFavoriteGroup`

Sets the channel favorite group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/setChannelFavoriteGroup '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelmode"></a>
## `setChannelMode`

`luna://com.webos.service.gibbips.channel/setChannelMode`

Sets the channel mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/setChannelMode '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelskip"></a>
## `setChannelSkip`

`luna://com.webos.service.gibbips.channel/setChannelSkip`

Sets the channel skip.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/setChannelSkip '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setrfinfo"></a>
## `setRfInfo`

`luna://com.webos.service.gibbips.channel/setRfInfo`

Sets the RF info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/setRfInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatechannelmap"></a>
## `updateChannelMap`

`luna://com.webos.service.gibbips.channel/updateChannelMap`

Updates the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.channel/updateChannelMap '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
