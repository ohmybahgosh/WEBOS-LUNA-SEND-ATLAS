# `com.webos.service.iepg`

iEPG channel/program-guide service: manages the channel map and lists, channel numbers, favorites and shortcut keys, and EPG data for live TV. _(inferred from the service's methods)_

90 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`changeChannelFavoritePriority`](#changechannelfavoritepriority) | private |  | tv-broadcast | inferred | Changes the channel favorite priority. |
| [`changeChannelNumber`](#changechannelnumber) | private |  | tv-broadcast | inferred | Changes the channel number. |
| [`clearChannelMap`](#clearchannelmap) | private |  | tv-broadcast | inferred | Clears the channel map. |
| [`debug`](#debug) | private |  | tv-broadcast | inferred | Handles the debug. |
| [`debugiEPG`](#debugiepg) | private |  | tv-broadcast | inferred | Handles the debugi EPG. |
| [`debugPrint`](#debugprint) | private |  | tv-broadcast | inferred | Handles the debug print. |
| [`deleteChannel`](#deletechannel) | private |  | tv-broadcast | inferred | Deletes the channel. ⚠️ |
| [`downChannel`](#downchannel) | private |  | tv-broadcast | inferred | Handles the down channel. |
| [`dumpEPG`](#dumpepg) | private |  | tv-broadcast | inferred | Dumps the EPG. |
| [`exportChannelMap`](#exportchannelmap) | private |  | tv-broadcast | inferred | Exports the channel map. |
| [`getChannelGroupList`](#getchannelgrouplist) | private |  | tv-broadcast | inferred | Returns the channel group list. |
| [`getChannelIdInfo`](#getchannelidinfo) | private |  | tv-broadcast | inferred | Returns the channel ID info. |
| [`getChannelInfo`](#getchannelinfo) | private |  | tv-broadcast | inferred | Returns the channel info. |
| [`getChannelList`](#getchannellist) | private |  | tv-broadcast | inferred | Returns the channel list. |
| [`getChannelListbySignalChId`](#getchannellistbysignalchid) | private |  | tv-broadcast | inferred | Returns the channel listby signal channel ID. |
| [`getChannelShortcutKey`](#getchannelshortcutkey) | private |  | tv-broadcast | inferred | Returns the channel shortcut key. |
| [`getChannelShortcutKeyList`](#getchannelshortcutkeylist) | private |  | tv-broadcast | inferred | Returns the channel shortcut key list. |
| [`getChannelStatus`](#getchannelstatus) | private |  | tv-broadcast | inferred | Returns the channel status. |
| [`getCountryPolicy`](#getcountrypolicy) | private |  | tv-broadcast | inferred | Returns the country policy. |
| [`getCurrentEventList`](#getcurrenteventlist) | private |  | tv-broadcast | inferred | Returns the current event list. |
| [`getCurrentFavoriteGroup`](#getcurrentfavoritegroup) | private |  | tv-broadcast | inferred | Returns the current favorite group. |
| [`getCurrentNextEventList`](#getcurrentnexteventlist) | private |  | tv-broadcast | inferred | Returns the current next event list. |
| [`getDvbiServiceList`](#getdvbiservicelist) | private |  | tv-broadcast | inferred | Returns the dvbi service list. |
| [`getEpgStatus`](#getepgstatus) | private |  | tv-broadcast | inferred | Returns the EPG status. |
| [`getEventInfo`](#geteventinfo) | private |  | tv-broadcast | inferred | Returns the event info. |
| [`getEventList`](#geteventlist) | private |  | tv-broadcast | inferred | Returns the event list. |
| [`getFallbackInfo`](#getfallbackinfo) | private |  | tv-broadcast | inferred | Returns the fallback info. |
| [`getFavoriteGroupList`](#getfavoritegrouplist) | private |  | tv-broadcast | inferred | Returns the favorite group list. |
| [`getGenreMapTable`](#getgenremaptable) | private |  | tv-broadcast | inferred | Returns the genre map table. |
| [`getHbbtvPfInfo`](#gethbbtvpfinfo) | private |  | tv-broadcast | inferred | Returns the hbbtv pf info. |
| [`getMoreEpisodes`](#getmoreepisodes) | private |  | tv-broadcast | inferred | Returns the more episodes. |
| [`getMultiImg`](#getmultiimg) | private |  | tv-broadcast | inferred | Returns the multi img. |
| [`getNetworkIdList`](#getnetworkidlist) | private |  | tv-broadcast | inferred | Returns the network ID list. |
| [`getNextEvent`](#getnextevent) | private |  | tv-broadcast | inferred | Returns the next event. |
| [`getNextEventList`](#getnexteventlist) | private |  | tv-broadcast | inferred | Returns the next event list. |
| [`getOfflineChannelList`](#getofflinechannellist) | public |  | tv-broadcast | inferred | Returns the offline channel list. |
| [`getPrimaryChannelList`](#getprimarychannellist) | private |  | tv-broadcast | inferred | Returns the primary channel list. |
| [`getProgramImg`](#getprogramimg) | private |  | tv-broadcast | inferred | Returns the program img. |
| [`getRecommendedList`](#getrecommendedlist) | private |  | tv-broadcast | inferred | Returns the recommended list. |
| [`getRelatedProgram`](#getrelatedprogram) | private |  | tv-broadcast | inferred | Returns the related program. |
| [`getReservationEventList`](#getreservationeventlist) | private |  | tv-broadcast | inferred | Returns the reservation event list. |
| [`getSearchEventList`](#getsearcheventlist) | private |  | tv-broadcast | inferred | Returns the search event list. |
| [`getSeriesEventList`](#getserieseventlist) | private |  | tv-broadcast | inferred | Returns the series event list. |
| [`getServiceStatus`](#getservicestatus) | private |  | tv-broadcast | inferred | Returns the service status. |
| [`getSimilarChannelList`](#getsimilarchannellist) | private |  | tv-broadcast | inferred | Returns the similar channel list. |
| [`getSimilarEvent`](#getsimilarevent) | private |  | tv-broadcast | inferred | Returns the similar event. |
| [`getValueList`](#getvaluelist) | private |  | tv-broadcast | inferred | Returns the value list. |
| [`importChannelMap`](#importchannelmap) | private |  | tv-broadcast | inferred | Imports the channel map. |
| [`isAvailableTemplateAit`](#isavailabletemplateait) | private |  | tv-broadcast | inferred | Reports whether the available template ait is set. |
| [`loadDefaultChannelList`](#loaddefaultchannellist) | private |  | tv-broadcast | inferred | Loads the default channel list. |
| [`moveChannel`](#movechannel) | private |  | tv-broadcast | inferred | Moves the channel. |
| [`moveChannelFavoritePriority`](#movechannelfavoritepriority) | private |  | tv-broadcast | inferred | Moves the channel favorite priority. |
| [`notifyChannelEditedListChanged`](#notifychanneleditedlistchanged) | private |  | tv-broadcast | inferred | Notifies of the channel edited list changed. |
| [`notifyChannelListChanged`](#notifychannellistchanged) | private |  | tv-broadcast | inferred | Notifies of the channel list changed. |
| [`notifyEventChanged`](#notifyeventchanged) | private |  | tv-broadcast | inferred | Notifies of the event changed. |
| [`notifyEventListReady`](#notifyeventlistready) | private |  | tv-broadcast | inferred | Notifies of the event list ready. |
| [`notifyFvpEventChanged`](#notifyfvpeventchanged) | private |  | tv-broadcast | inferred | Notifies of the fvp event changed. |
| [`notifyGenreMapUpdate`](#notifygenremapupdate) | private |  | tv-broadcast | inferred | Notifies of the genre map update. |
| [`notifyHbbtvEventChanged`](#notifyhbbtveventchanged) | private |  | tv-broadcast | inferred | Notifies of the hbbtv event changed. |
| [`notifyOfflineChannelListChanged`](#notifyofflinechannellistchanged) | private |  | tv-broadcast | inferred | Notifies of the offline channel list changed. |
| [`notifyOfflineEventChanged`](#notifyofflineeventchanged) | private |  | tv-broadcast | inferred | Notifies of the offline event changed. |
| [`notifyOnlineEventChanged`](#notifyonlineeventchanged) | private |  | tv-broadcast | inferred | Notifies of the online event changed. |
| [`passAitUrl`](#passaiturl) | private |  | tv-broadcast | inferred | Handles the pass ait URL. |
| [`ping`](#ping) | private |  | tv-broadcast | inferred | Pings the IEPG. |
| [`pingSub`](#pingsub) | private |  | tv-broadcast | inferred | Pings the sub. |
| [`releaseChannelBlock`](#releasechannelblock) | private |  | tv-broadcast | inferred | Releases the channel block. |
| [`releaseChannelFavoriteGroup`](#releasechannelfavoritegroup) | private |  | tv-broadcast | inferred | Releases the channel favorite group. |
| [`releaseChannelShortcutKey`](#releasechannelshortcutkey) | private |  | tv-broadcast | inferred | Releases the channel shortcut key. |
| [`releaseChannelSkip`](#releasechannelskip) | private |  | tv-broadcast | inferred | Releases the channel skip. |
| [`releaseConfiguredChannel`](#releaseconfiguredchannel) | private |  | settings | inferred | Releases the configured channel. |
| [`releaseMyChannel`](#releasemychannel) | private |  | tv-broadcast | inferred | Releases the my channel. |
| [`resetChannelFavoritePriority`](#resetchannelfavoritepriority) | private |  | tv-broadcast | inferred | Resets the channel favorite priority. ⚠️ |
| [`resetChannelShortcutKeyList`](#resetchannelshortcutkeylist) | private |  | tv-broadcast | inferred | Resets the channel shortcut key list. ⚠️ |
| [`runTimeDebug`](#runtimedebug) | private |  | tv-broadcast | inferred | Runs the time debug. |
| [`runTypeDebug`](#runtypedebug) | private |  | tv-broadcast | inferred | Runs the type debug. |
| [`saveChannelList`](#savechannellist) | private |  | tv-broadcast | inferred | Saves the channel list. |
| [`setChannel`](#setchannel) | private |  | tv-broadcast | inferred | Sets the channel. |
| [`setChannelBlock`](#setchannelblock) | private |  | tv-broadcast | inferred | Sets the channel block. |
| [`setChannelFavoriteGroup`](#setchannelfavoritegroup) | public |  | tv-broadcast | inferred | Sets the channel favorite group. |
| [`setChannelShortcutKey`](#setchannelshortcutkey) | private |  | tv-broadcast | inferred | Sets the channel shortcut key. |
| [`setChannelSkip`](#setchannelskip) | private |  | tv-broadcast | inferred | Sets the channel skip. |
| [`setConfiguredChannel`](#setconfiguredchannel) | private |  | settings | inferred | Sets the configured channel. |
| [`setCurrentFavoriteGroup`](#setcurrentfavoritegroup) | private |  | tv-broadcast | inferred | Sets the current favorite group. |
| [`setGroupName`](#setgroupname) | private |  | tv-broadcast | inferred | Sets the group name. |
| [`setHbbtvPfInfo`](#sethbbtvpfinfo) | private |  | tv-broadcast | inferred | Sets the hbbtv pf info. |
| [`setMyChannel`](#setmychannel) | private |  | tv-broadcast | inferred | Sets the my channel. |
| [`setReservationEventInfo`](#setreservationeventinfo) | private |  | tv-broadcast | inferred | Sets the reservation event info. |
| [`test`](#test) | private |  | tv-broadcast | inferred | Tests the IEPG. |
| [`upChannel`](#upchannel) | private |  | tv-broadcast | inferred | Handles the up channel. |
| [`updateChannelList`](#updatechannellist) | private |  | tv-broadcast | inferred | Updates the channel list. |

<a id="changechannelfavoritepriority"></a>
## `changeChannelFavoritePriority`

`luna://com.webos.service.iepg/changeChannelFavoritePriority`

Changes the channel favorite priority.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/changeChannelFavoritePriority '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changechannelnumber"></a>
## `changeChannelNumber`

`luna://com.webos.service.iepg/changeChannelNumber`

Changes the channel number.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/changeChannelNumber '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clearchannelmap"></a>
## `clearChannelMap`

`luna://com.webos.service.iepg/clearChannelMap`

Clears the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/clearChannelMap '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.iepg/debug`

Handles the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/debug '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debugiepg"></a>
## `debugiEPG`

`luna://com.webos.service.iepg/debugiEPG`

Handles the debugi EPG.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/debugiEPG '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debugprint"></a>
## `debugPrint`

`luna://com.webos.service.iepg/debugPrint`

Handles the debug print.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/debugPrint '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletechannel"></a>
## `deleteChannel` ⚠️ DANGEROUS

`luna://com.webos.service.iepg/deleteChannel`

Deletes the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/deleteChannel '{}'
```

> ACG groups: tv.services, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="downchannel"></a>
## `downChannel`

`luna://com.webos.service.iepg/downChannel`

Handles the down channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/downChannel '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dumpepg"></a>
## `dumpEPG`

`luna://com.webos.service.iepg/dumpEPG`

Dumps the EPG.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/dumpEPG '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="exportchannelmap"></a>
## `exportChannelMap`

`luna://com.webos.service.iepg/exportChannelMap`

Exports the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/exportChannelMap '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelgrouplist"></a>
## `getChannelGroupList`

`luna://com.webos.service.iepg/getChannelGroupList`

Returns the channel group list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelGroupList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelidinfo"></a>
## `getChannelIdInfo`

`luna://com.webos.service.iepg/getChannelIdInfo`

Returns the channel ID info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelIdInfo '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelinfo"></a>
## `getChannelInfo`

`luna://com.webos.service.iepg/getChannelInfo`

Returns the channel info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelInfo '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannellist"></a>
## `getChannelList`

`luna://com.webos.service.iepg/getChannelList`

Returns the channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelList '{}'
```

> ACG groups: tv.services, private, all, partner.api.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannellistbysignalchid"></a>
## `getChannelListbySignalChId`

`luna://com.webos.service.iepg/getChannelListbySignalChId`

Returns the channel listby signal channel ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelListbySignalChId '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelshortcutkey"></a>
## `getChannelShortcutKey`

`luna://com.webos.service.iepg/getChannelShortcutKey`

Returns the channel shortcut key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelShortcutKey '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelshortcutkeylist"></a>
## `getChannelShortcutKeyList`

`luna://com.webos.service.iepg/getChannelShortcutKeyList`

Returns the channel shortcut key list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelShortcutKeyList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelstatus"></a>
## `getChannelStatus`

`luna://com.webos.service.iepg/getChannelStatus`

Returns the channel status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelStatus '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcountrypolicy"></a>
## `getCountryPolicy`

`luna://com.webos.service.iepg/getCountryPolicy`

Returns the country policy.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getCountryPolicy '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrenteventlist"></a>
## `getCurrentEventList`

`luna://com.webos.service.iepg/getCurrentEventList`

Returns the current event list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getCurrentEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentfavoritegroup"></a>
## `getCurrentFavoriteGroup`

`luna://com.webos.service.iepg/getCurrentFavoriteGroup`

Returns the current favorite group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getCurrentFavoriteGroup '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentnexteventlist"></a>
## `getCurrentNextEventList`

`luna://com.webos.service.iepg/getCurrentNextEventList`

Returns the current next event list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getCurrentNextEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdvbiservicelist"></a>
## `getDvbiServiceList`

`luna://com.webos.service.iepg/getDvbiServiceList`

Returns the dvbi service list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getDvbiServiceList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getepgstatus"></a>
## `getEpgStatus`

`luna://com.webos.service.iepg/getEpgStatus`

Returns the EPG status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getEpgStatus '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteventinfo"></a>
## `getEventInfo`

`luna://com.webos.service.iepg/getEventInfo`

Returns the event info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getEventInfo '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteventlist"></a>
## `getEventList`

`luna://com.webos.service.iepg/getEventList`

Returns the event list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfallbackinfo"></a>
## `getFallbackInfo`

`luna://com.webos.service.iepg/getFallbackInfo`

Returns the fallback info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getFallbackInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfavoritegrouplist"></a>
## `getFavoriteGroupList`

`luna://com.webos.service.iepg/getFavoriteGroupList`

Returns the favorite group list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getFavoriteGroupList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getgenremaptable"></a>
## `getGenreMapTable`

`luna://com.webos.service.iepg/getGenreMapTable`

Returns the genre map table.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getGenreMapTable '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethbbtvpfinfo"></a>
## `getHbbtvPfInfo`

`luna://com.webos.service.iepg/getHbbtvPfInfo`

Returns the hbbtv pf info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getHbbtvPfInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmoreepisodes"></a>
## `getMoreEpisodes`

`luna://com.webos.service.iepg/getMoreEpisodes`

Returns the more episodes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getMoreEpisodes '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiimg"></a>
## `getMultiImg`

`luna://com.webos.service.iepg/getMultiImg`

Returns the multi img.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getMultiImg '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnetworkidlist"></a>
## `getNetworkIdList`

`luna://com.webos.service.iepg/getNetworkIdList`

Returns the network ID list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getNetworkIdList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnextevent"></a>
## `getNextEvent`

`luna://com.webos.service.iepg/getNextEvent`

Returns the next event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getNextEvent '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnexteventlist"></a>
## `getNextEventList`

`luna://com.webos.service.iepg/getNextEventList`

Returns the next event list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getNextEventList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getofflinechannellist"></a>
## `getOfflineChannelList`

`luna://com.webos.service.iepg/getOfflineChannelList`

Returns the offline channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getOfflineChannelList '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getprimarychannellist"></a>
## `getPrimaryChannelList`

`luna://com.webos.service.iepg/getPrimaryChannelList`

Returns the primary channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getPrimaryChannelList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getprogramimg"></a>
## `getProgramImg`

`luna://com.webos.service.iepg/getProgramImg`

Returns the program img.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getProgramImg '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrecommendedlist"></a>
## `getRecommendedList`

`luna://com.webos.service.iepg/getRecommendedList`

Returns the recommended list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getRecommendedList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrelatedprogram"></a>
## `getRelatedProgram`

`luna://com.webos.service.iepg/getRelatedProgram`

Returns the related program.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getRelatedProgram '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getreservationeventlist"></a>
## `getReservationEventList`

`luna://com.webos.service.iepg/getReservationEventList`

Returns the reservation event list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getReservationEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsearcheventlist"></a>
## `getSearchEventList`

`luna://com.webos.service.iepg/getSearchEventList`

Returns the search event list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getSearchEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getserieseventlist"></a>
## `getSeriesEventList`

`luna://com.webos.service.iepg/getSeriesEventList`

Returns the series event list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getSeriesEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservicestatus"></a>
## `getServiceStatus`

`luna://com.webos.service.iepg/getServiceStatus`

Returns the service status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getServiceStatus '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsimilarchannellist"></a>
## `getSimilarChannelList`

`luna://com.webos.service.iepg/getSimilarChannelList`

Returns the similar channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getSimilarChannelList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsimilarevent"></a>
## `getSimilarEvent`

`luna://com.webos.service.iepg/getSimilarEvent`

Returns the similar event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getSimilarEvent '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvaluelist"></a>
## `getValueList`

`luna://com.webos.service.iepg/getValueList`

Returns the value list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getValueList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="importchannelmap"></a>
## `importChannelMap`

`luna://com.webos.service.iepg/importChannelMap`

Imports the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/importChannelMap '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isavailabletemplateait"></a>
## `isAvailableTemplateAit`

`luna://com.webos.service.iepg/isAvailableTemplateAit`

Reports whether the available template ait is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/isAvailableTemplateAit '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="loaddefaultchannellist"></a>
## `loadDefaultChannelList`

`luna://com.webos.service.iepg/loadDefaultChannelList`

Loads the default channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/loadDefaultChannelList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="movechannel"></a>
## `moveChannel`

`luna://com.webos.service.iepg/moveChannel`

Moves the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/moveChannel '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="movechannelfavoritepriority"></a>
## `moveChannelFavoritePriority`

`luna://com.webos.service.iepg/moveChannelFavoritePriority`

Moves the channel favorite priority.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/moveChannelFavoritePriority '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifychanneleditedlistchanged"></a>
## `notifyChannelEditedListChanged`

`luna://com.webos.service.iepg/notifyChannelEditedListChanged`

Notifies of the channel edited list changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyChannelEditedListChanged '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifychannellistchanged"></a>
## `notifyChannelListChanged`

`luna://com.webos.service.iepg/notifyChannelListChanged`

Notifies of the channel list changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyChannelListChanged '{}'
```

> ACG groups: tv.services, private, configurator.callbacks, all, partner.api, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyeventchanged"></a>
## `notifyEventChanged`

`luna://com.webos.service.iepg/notifyEventChanged`

Notifies of the event changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyEventChanged '{}'
```

> ACG groups: tv.services, private, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyeventlistready"></a>
## `notifyEventListReady`

`luna://com.webos.service.iepg/notifyEventListReady`

Notifies of the event list ready.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyEventListReady '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyfvpeventchanged"></a>
## `notifyFvpEventChanged`

`luna://com.webos.service.iepg/notifyFvpEventChanged`

Notifies of the fvp event changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyFvpEventChanged '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifygenremapupdate"></a>
## `notifyGenreMapUpdate`

`luna://com.webos.service.iepg/notifyGenreMapUpdate`

Notifies of the genre map update.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyGenreMapUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyhbbtveventchanged"></a>
## `notifyHbbtvEventChanged`

`luna://com.webos.service.iepg/notifyHbbtvEventChanged`

Notifies of the hbbtv event changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyHbbtvEventChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyofflinechannellistchanged"></a>
## `notifyOfflineChannelListChanged`

`luna://com.webos.service.iepg/notifyOfflineChannelListChanged`

Notifies of the offline channel list changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyOfflineChannelListChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyofflineeventchanged"></a>
## `notifyOfflineEventChanged`

`luna://com.webos.service.iepg/notifyOfflineEventChanged`

Notifies of the offline event changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyOfflineEventChanged '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyonlineeventchanged"></a>
## `notifyOnlineEventChanged`

`luna://com.webos.service.iepg/notifyOnlineEventChanged`

Notifies of the online event changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyOnlineEventChanged '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="passaiturl"></a>
## `passAitUrl`

`luna://com.webos.service.iepg/passAitUrl`

Handles the pass ait URL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/passAitUrl '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ping"></a>
## `ping`

`luna://com.webos.service.iepg/ping`

Pings the IEPG.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/ping '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pingsub"></a>
## `pingSub`

`luna://com.webos.service.iepg/pingSub`

Pings the sub.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/pingSub '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelblock"></a>
## `releaseChannelBlock`

`luna://com.webos.service.iepg/releaseChannelBlock`

Releases the channel block.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseChannelBlock '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelfavoritegroup"></a>
## `releaseChannelFavoriteGroup`

`luna://com.webos.service.iepg/releaseChannelFavoriteGroup`

Releases the channel favorite group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseChannelFavoriteGroup '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelshortcutkey"></a>
## `releaseChannelShortcutKey`

`luna://com.webos.service.iepg/releaseChannelShortcutKey`

Releases the channel shortcut key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseChannelShortcutKey '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelskip"></a>
## `releaseChannelSkip`

`luna://com.webos.service.iepg/releaseChannelSkip`

Releases the channel skip.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseChannelSkip '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releaseconfiguredchannel"></a>
## `releaseConfiguredChannel`

`luna://com.webos.service.iepg/releaseConfiguredChannel`

Releases the configured channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseConfiguredChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasemychannel"></a>
## `releaseMyChannel`

`luna://com.webos.service.iepg/releaseMyChannel`

Releases the my channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseMyChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetchannelfavoritepriority"></a>
## `resetChannelFavoritePriority` ⚠️ DANGEROUS

`luna://com.webos.service.iepg/resetChannelFavoritePriority`

Resets the channel favorite priority.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/resetChannelFavoritePriority '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetchannelshortcutkeylist"></a>
## `resetChannelShortcutKeyList` ⚠️ DANGEROUS

`luna://com.webos.service.iepg/resetChannelShortcutKeyList`

Resets the channel shortcut key list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/resetChannelShortcutKeyList '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="runtimedebug"></a>
## `runTimeDebug`

`luna://com.webos.service.iepg/runTimeDebug`

Runs the time debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/runTimeDebug '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="runtypedebug"></a>
## `runTypeDebug`

`luna://com.webos.service.iepg/runTypeDebug`

Runs the type debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/runTypeDebug '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="savechannellist"></a>
## `saveChannelList`

`luna://com.webos.service.iepg/saveChannelList`

Saves the channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/saveChannelList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannel"></a>
## `setChannel`

`luna://com.webos.service.iepg/setChannel`

Sets the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setChannel '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelblock"></a>
## `setChannelBlock`

`luna://com.webos.service.iepg/setChannelBlock`

Sets the channel block.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setChannelBlock '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelfavoritegroup"></a>
## `setChannelFavoriteGroup`

`luna://com.webos.service.iepg/setChannelFavoriteGroup`

Sets the channel favorite group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setChannelFavoriteGroup '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelshortcutkey"></a>
## `setChannelShortcutKey`

`luna://com.webos.service.iepg/setChannelShortcutKey`

Sets the channel shortcut key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setChannelShortcutKey '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelskip"></a>
## `setChannelSkip`

`luna://com.webos.service.iepg/setChannelSkip`

Sets the channel skip.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setChannelSkip '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setconfiguredchannel"></a>
## `setConfiguredChannel`

`luna://com.webos.service.iepg/setConfiguredChannel`

Sets the configured channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setConfiguredChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcurrentfavoritegroup"></a>
## `setCurrentFavoriteGroup`

`luna://com.webos.service.iepg/setCurrentFavoriteGroup`

Sets the current favorite group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setCurrentFavoriteGroup '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setgroupname"></a>
## `setGroupName`

`luna://com.webos.service.iepg/setGroupName`

Sets the group name.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setGroupName '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sethbbtvpfinfo"></a>
## `setHbbtvPfInfo`

`luna://com.webos.service.iepg/setHbbtvPfInfo`

Sets the hbbtv pf info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setHbbtvPfInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmychannel"></a>
## `setMyChannel`

`luna://com.webos.service.iepg/setMyChannel`

Sets the my channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setMyChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setreservationeventinfo"></a>
## `setReservationEventInfo`

`luna://com.webos.service.iepg/setReservationEventInfo`

Sets the reservation event info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setReservationEventInfo '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.iepg/test`

Tests the IEPG.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/test '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="upchannel"></a>
## `upChannel`

`luna://com.webos.service.iepg/upChannel`

Handles the up channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/upChannel '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatechannellist"></a>
## `updateChannelList`

`luna://com.webos.service.iepg/updateChannelList`

Updates the channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/updateChannelList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
