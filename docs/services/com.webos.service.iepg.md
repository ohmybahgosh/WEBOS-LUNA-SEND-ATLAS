# `com.webos.service.iepg`

90 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`changeChannelFavoritePriority`](#changechannelfavoritepriority) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`changeChannelNumber`](#changechannelnumber) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`clearChannelMap`](#clearchannelmap) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`debug`](#debug) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`debugiEPG`](#debugiepg) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`debugPrint`](#debugprint) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`deleteChannel`](#deletechannel) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). ⚠️ |
| [`downChannel`](#downchannel) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`dumpEPG`](#dumpepg) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`exportChannelMap`](#exportchannelmap) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getChannelGroupList`](#getchannelgrouplist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getChannelIdInfo`](#getchannelidinfo) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getChannelInfo`](#getchannelinfo) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getChannelList`](#getchannellist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getChannelListbySignalChId`](#getchannellistbysignalchid) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getChannelShortcutKey`](#getchannelshortcutkey) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getChannelShortcutKeyList`](#getchannelshortcutkeylist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getChannelStatus`](#getchannelstatus) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`getCountryPolicy`](#getcountrypolicy) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getCurrentEventList`](#getcurrenteventlist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getCurrentFavoriteGroup`](#getcurrentfavoritegroup) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getCurrentNextEventList`](#getcurrentnexteventlist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getDvbiServiceList`](#getdvbiservicelist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getEpgStatus`](#getepgstatus) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getEventInfo`](#geteventinfo) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getEventList`](#geteventlist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getFallbackInfo`](#getfallbackinfo) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getFavoriteGroupList`](#getfavoritegrouplist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getGenreMapTable`](#getgenremaptable) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getHbbtvPfInfo`](#gethbbtvpfinfo) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getMoreEpisodes`](#getmoreepisodes) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getMultiImg`](#getmultiimg) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getNetworkIdList`](#getnetworkidlist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getNextEvent`](#getnextevent) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getNextEventList`](#getnexteventlist) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`getOfflineChannelList`](#getofflinechannellist) | public |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getPrimaryChannelList`](#getprimarychannellist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getProgramImg`](#getprogramimg) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getRecommendedList`](#getrecommendedlist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getRelatedProgram`](#getrelatedprogram) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getReservationEventList`](#getreservationeventlist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getSearchEventList`](#getsearcheventlist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getSeriesEventList`](#getserieseventlist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getServiceStatus`](#getservicestatus) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`getSimilarChannelList`](#getsimilarchannellist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getSimilarEvent`](#getsimilarevent) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`getValueList`](#getvaluelist) | private |  | tv-broadcast | Getter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`importChannelMap`](#importchannelmap) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`isAvailableTemplateAit`](#isavailabletemplateait) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`loadDefaultChannelList`](#loaddefaultchannellist) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`moveChannel`](#movechannel) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`moveChannelFavoritePriority`](#movechannelfavoritepriority) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`notifyChannelEditedListChanged`](#notifychanneleditedlistchanged) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`notifyChannelListChanged`](#notifychannellistchanged) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`notifyEventChanged`](#notifyeventchanged) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`notifyEventListReady`](#notifyeventlistready) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`notifyFvpEventChanged`](#notifyfvpeventchanged) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`notifyGenreMapUpdate`](#notifygenremapupdate) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`notifyHbbtvEventChanged`](#notifyhbbtveventchanged) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`notifyOfflineChannelListChanged`](#notifyofflinechannellistchanged) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`notifyOfflineEventChanged`](#notifyofflineeventchanged) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`notifyOnlineEventChanged`](#notifyonlineeventchanged) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`passAitUrl`](#passaiturl) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`ping`](#ping) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`pingSub`](#pingsub) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`releaseChannelBlock`](#releasechannelblock) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`releaseChannelFavoriteGroup`](#releasechannelfavoritegroup) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`releaseChannelShortcutKey`](#releasechannelshortcutkey) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`releaseChannelSkip`](#releasechannelskip) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`releaseConfiguredChannel`](#releaseconfiguredchannel) | private |  | settings | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`releaseMyChannel`](#releasemychannel) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`resetChannelFavoritePriority`](#resetchannelfavoritepriority) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). ⚠️ |
| [`resetChannelShortcutKeyList`](#resetchannelshortcutkeylist) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). ⚠️ |
| [`runTimeDebug`](#runtimedebug) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`runTypeDebug`](#runtypedebug) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`saveChannelList`](#savechannellist) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`setChannel`](#setchannel) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`setChannelBlock`](#setchannelblock) | private |  | tv-broadcast | Setter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`setChannelFavoriteGroup`](#setchannelfavoritegroup) | public |  | tv-broadcast | Setter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`setChannelShortcutKey`](#setchannelshortcutkey) | private |  | tv-broadcast | Setter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`setChannelSkip`](#setchannelskip) | private |  | tv-broadcast | Setter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`setConfiguredChannel`](#setconfiguredchannel) | private |  | settings | Setter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`setCurrentFavoriteGroup`](#setcurrentfavoritegroup) | private |  | tv-broadcast | Setter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`setGroupName`](#setgroupname) | private |  | tv-broadcast | Setter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`setHbbtvPfInfo`](#sethbbtvpfinfo) | private |  | tv-broadcast | Setter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`setMyChannel`](#setmychannel) | private |  | tv-broadcast | Setter on com.webos.service.iepg (introspected on-device; parameters undocumented). |
| [`setReservationEventInfo`](#setreservationeventinfo) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`test`](#test) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`upChannel`](#upchannel) | private |  | tv-broadcast | Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented). |
| [`updateChannelList`](#updatechannellist) | private |  | tv-broadcast | Method on com.webos.service.iepg (introspected on-device; parameters undocumented). |

<a id="changechannelfavoritepriority"></a>
## `changeChannelFavoritePriority`

`luna://com.webos.service.iepg/changeChannelFavoritePriority`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/changeChannelFavoritePriority '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changechannelnumber"></a>
## `changeChannelNumber`

`luna://com.webos.service.iepg/changeChannelNumber`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/changeChannelNumber '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clearchannelmap"></a>
## `clearChannelMap`

`luna://com.webos.service.iepg/clearChannelMap`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/clearChannelMap '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.iepg/debug`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/debug '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debugiepg"></a>
## `debugiEPG`

`luna://com.webos.service.iepg/debugiEPG`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/debugiEPG '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debugprint"></a>
## `debugPrint`

`luna://com.webos.service.iepg/debugPrint`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/debugPrint '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletechannel"></a>
## `deleteChannel` ⚠️ DANGEROUS

`luna://com.webos.service.iepg/deleteChannel`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/deleteChannel '{}'
```

> ACG groups: tv.services, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="downchannel"></a>
## `downChannel`

`luna://com.webos.service.iepg/downChannel`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/downChannel '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dumpepg"></a>
## `dumpEPG`

`luna://com.webos.service.iepg/dumpEPG`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/dumpEPG '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="exportchannelmap"></a>
## `exportChannelMap`

`luna://com.webos.service.iepg/exportChannelMap`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/exportChannelMap '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelgrouplist"></a>
## `getChannelGroupList`

`luna://com.webos.service.iepg/getChannelGroupList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelGroupList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelidinfo"></a>
## `getChannelIdInfo`

`luna://com.webos.service.iepg/getChannelIdInfo`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelIdInfo '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelinfo"></a>
## `getChannelInfo`

`luna://com.webos.service.iepg/getChannelInfo`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelInfo '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannellist"></a>
## `getChannelList`

`luna://com.webos.service.iepg/getChannelList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelList '{}'
```

> ACG groups: tv.services, private, all, partner.api.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannellistbysignalchid"></a>
## `getChannelListbySignalChId`

`luna://com.webos.service.iepg/getChannelListbySignalChId`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelListbySignalChId '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelshortcutkey"></a>
## `getChannelShortcutKey`

`luna://com.webos.service.iepg/getChannelShortcutKey`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelShortcutKey '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelshortcutkeylist"></a>
## `getChannelShortcutKeyList`

`luna://com.webos.service.iepg/getChannelShortcutKeyList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelShortcutKeyList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelstatus"></a>
## `getChannelStatus`

`luna://com.webos.service.iepg/getChannelStatus`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getChannelStatus '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcountrypolicy"></a>
## `getCountryPolicy`

`luna://com.webos.service.iepg/getCountryPolicy`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getCountryPolicy '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrenteventlist"></a>
## `getCurrentEventList`

`luna://com.webos.service.iepg/getCurrentEventList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getCurrentEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentfavoritegroup"></a>
## `getCurrentFavoriteGroup`

`luna://com.webos.service.iepg/getCurrentFavoriteGroup`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getCurrentFavoriteGroup '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentnexteventlist"></a>
## `getCurrentNextEventList`

`luna://com.webos.service.iepg/getCurrentNextEventList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getCurrentNextEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdvbiservicelist"></a>
## `getDvbiServiceList`

`luna://com.webos.service.iepg/getDvbiServiceList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getDvbiServiceList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getepgstatus"></a>
## `getEpgStatus`

`luna://com.webos.service.iepg/getEpgStatus`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getEpgStatus '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteventinfo"></a>
## `getEventInfo`

`luna://com.webos.service.iepg/getEventInfo`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getEventInfo '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteventlist"></a>
## `getEventList`

`luna://com.webos.service.iepg/getEventList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfallbackinfo"></a>
## `getFallbackInfo`

`luna://com.webos.service.iepg/getFallbackInfo`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getFallbackInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfavoritegrouplist"></a>
## `getFavoriteGroupList`

`luna://com.webos.service.iepg/getFavoriteGroupList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getFavoriteGroupList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getgenremaptable"></a>
## `getGenreMapTable`

`luna://com.webos.service.iepg/getGenreMapTable`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getGenreMapTable '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethbbtvpfinfo"></a>
## `getHbbtvPfInfo`

`luna://com.webos.service.iepg/getHbbtvPfInfo`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getHbbtvPfInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmoreepisodes"></a>
## `getMoreEpisodes`

`luna://com.webos.service.iepg/getMoreEpisodes`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getMoreEpisodes '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmultiimg"></a>
## `getMultiImg`

`luna://com.webos.service.iepg/getMultiImg`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getMultiImg '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnetworkidlist"></a>
## `getNetworkIdList`

`luna://com.webos.service.iepg/getNetworkIdList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getNetworkIdList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnextevent"></a>
## `getNextEvent`

`luna://com.webos.service.iepg/getNextEvent`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getNextEvent '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnexteventlist"></a>
## `getNextEventList`

`luna://com.webos.service.iepg/getNextEventList`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getNextEventList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getofflinechannellist"></a>
## `getOfflineChannelList`

`luna://com.webos.service.iepg/getOfflineChannelList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getOfflineChannelList '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getprimarychannellist"></a>
## `getPrimaryChannelList`

`luna://com.webos.service.iepg/getPrimaryChannelList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getPrimaryChannelList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getprogramimg"></a>
## `getProgramImg`

`luna://com.webos.service.iepg/getProgramImg`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getProgramImg '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrecommendedlist"></a>
## `getRecommendedList`

`luna://com.webos.service.iepg/getRecommendedList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getRecommendedList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrelatedprogram"></a>
## `getRelatedProgram`

`luna://com.webos.service.iepg/getRelatedProgram`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getRelatedProgram '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getreservationeventlist"></a>
## `getReservationEventList`

`luna://com.webos.service.iepg/getReservationEventList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getReservationEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsearcheventlist"></a>
## `getSearchEventList`

`luna://com.webos.service.iepg/getSearchEventList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getSearchEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getserieseventlist"></a>
## `getSeriesEventList`

`luna://com.webos.service.iepg/getSeriesEventList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getSeriesEventList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservicestatus"></a>
## `getServiceStatus`

`luna://com.webos.service.iepg/getServiceStatus`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getServiceStatus '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsimilarchannellist"></a>
## `getSimilarChannelList`

`luna://com.webos.service.iepg/getSimilarChannelList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getSimilarChannelList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsimilarevent"></a>
## `getSimilarEvent`

`luna://com.webos.service.iepg/getSimilarEvent`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getSimilarEvent '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvaluelist"></a>
## `getValueList`

`luna://com.webos.service.iepg/getValueList`

Getter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/getValueList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="importchannelmap"></a>
## `importChannelMap`

`luna://com.webos.service.iepg/importChannelMap`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/importChannelMap '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isavailabletemplateait"></a>
## `isAvailableTemplateAit`

`luna://com.webos.service.iepg/isAvailableTemplateAit`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/isAvailableTemplateAit '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="loaddefaultchannellist"></a>
## `loadDefaultChannelList`

`luna://com.webos.service.iepg/loadDefaultChannelList`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/loadDefaultChannelList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="movechannel"></a>
## `moveChannel`

`luna://com.webos.service.iepg/moveChannel`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/moveChannel '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="movechannelfavoritepriority"></a>
## `moveChannelFavoritePriority`

`luna://com.webos.service.iepg/moveChannelFavoritePriority`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/moveChannelFavoritePriority '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifychanneleditedlistchanged"></a>
## `notifyChannelEditedListChanged`

`luna://com.webos.service.iepg/notifyChannelEditedListChanged`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyChannelEditedListChanged '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifychannellistchanged"></a>
## `notifyChannelListChanged`

`luna://com.webos.service.iepg/notifyChannelListChanged`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyChannelListChanged '{}'
```

> ACG groups: tv.services, private, configurator.callbacks, all, partner.api, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyeventchanged"></a>
## `notifyEventChanged`

`luna://com.webos.service.iepg/notifyEventChanged`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyEventChanged '{}'
```

> ACG groups: tv.services, private, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyeventlistready"></a>
## `notifyEventListReady`

`luna://com.webos.service.iepg/notifyEventListReady`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyEventListReady '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyfvpeventchanged"></a>
## `notifyFvpEventChanged`

`luna://com.webos.service.iepg/notifyFvpEventChanged`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyFvpEventChanged '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifygenremapupdate"></a>
## `notifyGenreMapUpdate`

`luna://com.webos.service.iepg/notifyGenreMapUpdate`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyGenreMapUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyhbbtveventchanged"></a>
## `notifyHbbtvEventChanged`

`luna://com.webos.service.iepg/notifyHbbtvEventChanged`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyHbbtvEventChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyofflinechannellistchanged"></a>
## `notifyOfflineChannelListChanged`

`luna://com.webos.service.iepg/notifyOfflineChannelListChanged`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyOfflineChannelListChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyofflineeventchanged"></a>
## `notifyOfflineEventChanged`

`luna://com.webos.service.iepg/notifyOfflineEventChanged`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyOfflineEventChanged '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyonlineeventchanged"></a>
## `notifyOnlineEventChanged`

`luna://com.webos.service.iepg/notifyOnlineEventChanged`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/notifyOnlineEventChanged '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="passaiturl"></a>
## `passAitUrl`

`luna://com.webos.service.iepg/passAitUrl`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/passAitUrl '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ping"></a>
## `ping`

`luna://com.webos.service.iepg/ping`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/ping '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pingsub"></a>
## `pingSub`

`luna://com.webos.service.iepg/pingSub`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/pingSub '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelblock"></a>
## `releaseChannelBlock`

`luna://com.webos.service.iepg/releaseChannelBlock`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseChannelBlock '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelfavoritegroup"></a>
## `releaseChannelFavoriteGroup`

`luna://com.webos.service.iepg/releaseChannelFavoriteGroup`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseChannelFavoriteGroup '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelshortcutkey"></a>
## `releaseChannelShortcutKey`

`luna://com.webos.service.iepg/releaseChannelShortcutKey`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseChannelShortcutKey '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelskip"></a>
## `releaseChannelSkip`

`luna://com.webos.service.iepg/releaseChannelSkip`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseChannelSkip '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releaseconfiguredchannel"></a>
## `releaseConfiguredChannel`

`luna://com.webos.service.iepg/releaseConfiguredChannel`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseConfiguredChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasemychannel"></a>
## `releaseMyChannel`

`luna://com.webos.service.iepg/releaseMyChannel`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/releaseMyChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetchannelfavoritepriority"></a>
## `resetChannelFavoritePriority` ⚠️ DANGEROUS

`luna://com.webos.service.iepg/resetChannelFavoritePriority`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/resetChannelFavoritePriority '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetchannelshortcutkeylist"></a>
## `resetChannelShortcutKeyList` ⚠️ DANGEROUS

`luna://com.webos.service.iepg/resetChannelShortcutKeyList`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/resetChannelShortcutKeyList '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="runtimedebug"></a>
## `runTimeDebug`

`luna://com.webos.service.iepg/runTimeDebug`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/runTimeDebug '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="runtypedebug"></a>
## `runTypeDebug`

`luna://com.webos.service.iepg/runTypeDebug`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/runTypeDebug '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="savechannellist"></a>
## `saveChannelList`

`luna://com.webos.service.iepg/saveChannelList`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/saveChannelList '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannel"></a>
## `setChannel`

`luna://com.webos.service.iepg/setChannel`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setChannel '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelblock"></a>
## `setChannelBlock`

`luna://com.webos.service.iepg/setChannelBlock`

Setter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setChannelBlock '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelfavoritegroup"></a>
## `setChannelFavoriteGroup`

`luna://com.webos.service.iepg/setChannelFavoriteGroup`

Setter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setChannelFavoriteGroup '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelshortcutkey"></a>
## `setChannelShortcutKey`

`luna://com.webos.service.iepg/setChannelShortcutKey`

Setter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setChannelShortcutKey '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelskip"></a>
## `setChannelSkip`

`luna://com.webos.service.iepg/setChannelSkip`

Setter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setChannelSkip '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setconfiguredchannel"></a>
## `setConfiguredChannel`

`luna://com.webos.service.iepg/setConfiguredChannel`

Setter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setConfiguredChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcurrentfavoritegroup"></a>
## `setCurrentFavoriteGroup`

`luna://com.webos.service.iepg/setCurrentFavoriteGroup`

Setter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setCurrentFavoriteGroup '{}'
```

> ACG groups: tv.services, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setgroupname"></a>
## `setGroupName`

`luna://com.webos.service.iepg/setGroupName`

Setter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setGroupName '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sethbbtvpfinfo"></a>
## `setHbbtvPfInfo`

`luna://com.webos.service.iepg/setHbbtvPfInfo`

Setter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setHbbtvPfInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmychannel"></a>
## `setMyChannel`

`luna://com.webos.service.iepg/setMyChannel`

Setter on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setMyChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setreservationeventinfo"></a>
## `setReservationEventInfo`

`luna://com.webos.service.iepg/setReservationEventInfo`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/setReservationEventInfo '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.iepg/test`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/test '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="upchannel"></a>
## `upChannel`

`luna://com.webos.service.iepg/upChannel`

Method on com.webos.service.iepg (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/upChannel '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatechannellist"></a>
## `updateChannelList`

`luna://com.webos.service.iepg/updateChannelList`

Method on com.webos.service.iepg (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iepg/updateChannelList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
