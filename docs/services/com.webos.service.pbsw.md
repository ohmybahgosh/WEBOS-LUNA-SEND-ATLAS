# `com.webos.service.pbsw`

57 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`appendFavoriteGroup`](#appendfavoritegroup) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`changeChannelFavoritePriority`](#changechannelfavoritepriority) | private |  | power | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`changeChannelNumber`](#changechannelnumber) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`checkChannelMapVersion`](#checkchannelmapversion) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`checkEpgExists`](#checkepgexists) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`debug`](#debug) | private |  | power | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`deleteChannel`](#deletechannel) | private |  | power | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). ⚠️ |
| [`downChannelMapVersion`](#downchannelmapversion) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getAutoScanStatus4Twin`](#getautoscanstatus4twin) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getChannelEditNoti`](#getchanneleditnoti) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getChannelGroupList`](#getchannelgrouplist) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getChannelInfo`](#getchannelinfo) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getChannelList`](#getchannellist) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getChannelListbySignalChId`](#getchannellistbysignalchid) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getChannelNameList`](#getchannelnamelist) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getChannelStatus`](#getchannelstatus) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getCountryPolicy`](#getcountrypolicy) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getCurrentEventList`](#getcurrenteventlist) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getCurrentFavoriteGroup`](#getcurrentfavoritegroup) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getCurrentNextEventList`](#getcurrentnexteventlist) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getCurrentPopularInformation`](#getcurrentpopularinformation) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getDbFilePath`](#getdbfilepath) | private |  | db | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getEpgStatus`](#getepgstatus) | private |  | tv-broadcast | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getEventInfo`](#geteventinfo) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getEventList`](#geteventlist) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getFavoriteGroupList`](#getfavoritegrouplist) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getIbsHeaderData`](#getibsheaderdata) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getMCPList`](#getmcplist) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getNextEvent`](#getnextevent) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getNextEventList`](#getnexteventlist) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getRelatedProgram`](#getrelatedprogram) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getSCDPolicy`](#getscdpolicy) | private |  | power | Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`getServiceStatus`](#getservicestatus) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getUpcomingPopularInformation`](#getupcomingpopularinformation) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`getValueList`](#getvaluelist) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`moveChannel`](#movechannel) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`moveChannelFavoritePriority`](#movechannelfavoritepriority) | private |  | power | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`notifyAutoScanDone`](#notifyautoscandone) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`notifyAutoScanStart`](#notifyautoscanstart) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`notifyChannelListChanged`](#notifychannellistchanged) | private |  | power | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`notifyGenreChanged`](#notifygenrechanged) | private |  | power | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`notifyInternetChannelStatusUpdate`](#notifyinternetchannelstatusupdate) | private |  | update | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`notifyOnlineEPGEmpty`](#notifyonlineepgempty) | private |  | tv-broadcast | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`ping`](#ping) | private |  | power | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`releaseChannelBlock`](#releasechannelblock) | private |  | power | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`releaseChannelFavoriteGroup`](#releasechannelfavoritegroup) | private |  | power | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`releaseChannelSkip`](#releasechannelskip) | private |  | power | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`releaseConfiguredChannel`](#releaseconfiguredchannel) | private |  | settings | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`requestAuthentication`](#requestauthentication) | private |  | power | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`setAutoScanStatus4Twin`](#setautoscanstatus4twin) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`setChannelBlock`](#setchannelblock) | private |  | power | Setter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`setChannelFavoriteGroup`](#setchannelfavoritegroup) | private |  | power | Setter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`setChannelSkip`](#setchannelskip) | private |  | power | Setter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`setConfiguredChannel`](#setconfiguredchannel) | private |  | settings | Setter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`setCurrentFavoriteGroup`](#setcurrentfavoritegroup) | private |  | power | Setter on com.webos.service.pbsw (introspected on-device; parameters undocumented). |
| [`updateChannelMap`](#updatechannelmap) | private |  | power | Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented). |
| [`updateEpgInfo`](#updateepginfo) | private |  | tv-broadcast | Method on com.webos.service.pbsw (introspected on-device; parameters undocumented). |

<a id="appendfavoritegroup"></a>
## `appendFavoriteGroup`

`luna://com.webos.service.pbsw/appendFavoriteGroup`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/appendFavoriteGroup '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changechannelfavoritepriority"></a>
## `changeChannelFavoritePriority`

`luna://com.webos.service.pbsw/changeChannelFavoritePriority`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/changeChannelFavoritePriority '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changechannelnumber"></a>
## `changeChannelNumber`

`luna://com.webos.service.pbsw/changeChannelNumber`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/changeChannelNumber '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkchannelmapversion"></a>
## `checkChannelMapVersion`

`luna://com.webos.service.pbsw/checkChannelMapVersion`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/checkChannelMapVersion '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkepgexists"></a>
## `checkEpgExists`

`luna://com.webos.service.pbsw/checkEpgExists`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/checkEpgExists '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.pbsw/debug`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/debug '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletechannel"></a>
## `deleteChannel` ⚠️ DANGEROUS

`luna://com.webos.service.pbsw/deleteChannel`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/deleteChannel '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="downchannelmapversion"></a>
## `downChannelMapVersion`

`luna://com.webos.service.pbsw/downChannelMapVersion`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/downChannelMapVersion '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getautoscanstatus4twin"></a>
## `getAutoScanStatus4Twin`

`luna://com.webos.service.pbsw/getAutoScanStatus4Twin`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getAutoScanStatus4Twin '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchanneleditnoti"></a>
## `getChannelEditNoti`

`luna://com.webos.service.pbsw/getChannelEditNoti`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelEditNoti '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelgrouplist"></a>
## `getChannelGroupList`

`luna://com.webos.service.pbsw/getChannelGroupList`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelGroupList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelinfo"></a>
## `getChannelInfo`

`luna://com.webos.service.pbsw/getChannelInfo`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelInfo '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannellist"></a>
## `getChannelList`

`luna://com.webos.service.pbsw/getChannelList`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannellistbysignalchid"></a>
## `getChannelListbySignalChId`

`luna://com.webos.service.pbsw/getChannelListbySignalChId`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelListbySignalChId '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelnamelist"></a>
## `getChannelNameList`

`luna://com.webos.service.pbsw/getChannelNameList`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelNameList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelstatus"></a>
## `getChannelStatus`

`luna://com.webos.service.pbsw/getChannelStatus`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelStatus '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcountrypolicy"></a>
## `getCountryPolicy`

`luna://com.webos.service.pbsw/getCountryPolicy`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getCountryPolicy '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrenteventlist"></a>
## `getCurrentEventList`

`luna://com.webos.service.pbsw/getCurrentEventList`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getCurrentEventList '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentfavoritegroup"></a>
## `getCurrentFavoriteGroup`

`luna://com.webos.service.pbsw/getCurrentFavoriteGroup`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getCurrentFavoriteGroup '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentnexteventlist"></a>
## `getCurrentNextEventList`

`luna://com.webos.service.pbsw/getCurrentNextEventList`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getCurrentNextEventList '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentpopularinformation"></a>
## `getCurrentPopularInformation`

`luna://com.webos.service.pbsw/getCurrentPopularInformation`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getCurrentPopularInformation '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdbfilepath"></a>
## `getDbFilePath`

`luna://com.webos.service.pbsw/getDbFilePath`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getDbFilePath '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getepgstatus"></a>
## `getEpgStatus`

`luna://com.webos.service.pbsw/getEpgStatus`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getEpgStatus '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteventinfo"></a>
## `getEventInfo`

`luna://com.webos.service.pbsw/getEventInfo`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getEventInfo '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="geteventlist"></a>
## `getEventList`

`luna://com.webos.service.pbsw/getEventList`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getEventList '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfavoritegrouplist"></a>
## `getFavoriteGroupList`

`luna://com.webos.service.pbsw/getFavoriteGroupList`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getFavoriteGroupList '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getibsheaderdata"></a>
## `getIbsHeaderData`

`luna://com.webos.service.pbsw/getIbsHeaderData`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getIbsHeaderData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmcplist"></a>
## `getMCPList`

`luna://com.webos.service.pbsw/getMCPList`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getMCPList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnextevent"></a>
## `getNextEvent`

`luna://com.webos.service.pbsw/getNextEvent`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getNextEvent '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnexteventlist"></a>
## `getNextEventList`

`luna://com.webos.service.pbsw/getNextEventList`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getNextEventList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrelatedprogram"></a>
## `getRelatedProgram`

`luna://com.webos.service.pbsw/getRelatedProgram`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getRelatedProgram '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getscdpolicy"></a>
## `getSCDPolicy`

`luna://com.webos.service.pbsw/getSCDPolicy`

Getter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getSCDPolicy '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservicestatus"></a>
## `getServiceStatus`

`luna://com.webos.service.pbsw/getServiceStatus`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getServiceStatus '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getupcomingpopularinformation"></a>
## `getUpcomingPopularInformation`

`luna://com.webos.service.pbsw/getUpcomingPopularInformation`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getUpcomingPopularInformation '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvaluelist"></a>
## `getValueList`

`luna://com.webos.service.pbsw/getValueList`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getValueList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="movechannel"></a>
## `moveChannel`

`luna://com.webos.service.pbsw/moveChannel`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/moveChannel '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="movechannelfavoritepriority"></a>
## `moveChannelFavoritePriority`

`luna://com.webos.service.pbsw/moveChannelFavoritePriority`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/moveChannelFavoritePriority '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyautoscandone"></a>
## `notifyAutoScanDone`

`luna://com.webos.service.pbsw/notifyAutoScanDone`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyAutoScanDone '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyautoscanstart"></a>
## `notifyAutoScanStart`

`luna://com.webos.service.pbsw/notifyAutoScanStart`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyAutoScanStart '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifychannellistchanged"></a>
## `notifyChannelListChanged`

`luna://com.webos.service.pbsw/notifyChannelListChanged`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyChannelListChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifygenrechanged"></a>
## `notifyGenreChanged`

`luna://com.webos.service.pbsw/notifyGenreChanged`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyGenreChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyinternetchannelstatusupdate"></a>
## `notifyInternetChannelStatusUpdate`

`luna://com.webos.service.pbsw/notifyInternetChannelStatusUpdate`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyInternetChannelStatusUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyonlineepgempty"></a>
## `notifyOnlineEPGEmpty`

`luna://com.webos.service.pbsw/notifyOnlineEPGEmpty`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyOnlineEPGEmpty '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ping"></a>
## `ping`

`luna://com.webos.service.pbsw/ping`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/ping '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelblock"></a>
## `releaseChannelBlock`

`luna://com.webos.service.pbsw/releaseChannelBlock`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/releaseChannelBlock '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelfavoritegroup"></a>
## `releaseChannelFavoriteGroup`

`luna://com.webos.service.pbsw/releaseChannelFavoriteGroup`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/releaseChannelFavoriteGroup '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelskip"></a>
## `releaseChannelSkip`

`luna://com.webos.service.pbsw/releaseChannelSkip`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/releaseChannelSkip '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releaseconfiguredchannel"></a>
## `releaseConfiguredChannel`

`luna://com.webos.service.pbsw/releaseConfiguredChannel`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/releaseConfiguredChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestauthentication"></a>
## `requestAuthentication`

`luna://com.webos.service.pbsw/requestAuthentication`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/requestAuthentication '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setautoscanstatus4twin"></a>
## `setAutoScanStatus4Twin`

`luna://com.webos.service.pbsw/setAutoScanStatus4Twin`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setAutoScanStatus4Twin '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelblock"></a>
## `setChannelBlock`

`luna://com.webos.service.pbsw/setChannelBlock`

Setter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setChannelBlock '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelfavoritegroup"></a>
## `setChannelFavoriteGroup`

`luna://com.webos.service.pbsw/setChannelFavoriteGroup`

Setter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setChannelFavoriteGroup '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelskip"></a>
## `setChannelSkip`

`luna://com.webos.service.pbsw/setChannelSkip`

Setter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setChannelSkip '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setconfiguredchannel"></a>
## `setConfiguredChannel`

`luna://com.webos.service.pbsw/setConfiguredChannel`

Setter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setConfiguredChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcurrentfavoritegroup"></a>
## `setCurrentFavoriteGroup`

`luna://com.webos.service.pbsw/setCurrentFavoriteGroup`

Setter on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setCurrentFavoriteGroup '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatechannelmap"></a>
## `updateChannelMap`

`luna://com.webos.service.pbsw/updateChannelMap`

Method on com.webos.service.pbsw (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/updateChannelMap '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updateepginfo"></a>
## `updateEpgInfo`

`luna://com.webos.service.pbsw/updateEpgInfo`

Method on com.webos.service.pbsw (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/updateEpgInfo '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
