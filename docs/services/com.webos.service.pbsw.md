# `com.webos.service.pbsw`

Broadcast channel-map service: builds and edits the channel list and favorite groups, queries channel info and EPG events, and reports country policy. _(inferred from the service's methods)_

57 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`appendFavoriteGroup`](#appendfavoritegroup) | private |  | power | inferred | Handles the append favorite group. |
| [`changeChannelFavoritePriority`](#changechannelfavoritepriority) | private |  | power | inferred | Changes the channel favorite priority. |
| [`changeChannelNumber`](#changechannelnumber) | private |  | power | inferred | Changes the channel number. |
| [`checkChannelMapVersion`](#checkchannelmapversion) | private |  | power | inferred | Checks the channel map version. |
| [`checkEpgExists`](#checkepgexists) | private |  | power | inferred | Checks the EPG exists. |
| [`debug`](#debug) | private |  | power | inferred | Handles the debug. |
| [`deleteChannel`](#deletechannel) | private |  | power | inferred | Deletes the channel. ⚠️ |
| [`downChannelMapVersion`](#downchannelmapversion) | private |  | power | inferred | Handles the down channel map version. |
| [`getAutoScanStatus4Twin`](#getautoscanstatus4twin) | private |  | power | inferred | Returns the auto scan status 4 twin. |
| [`getChannelEditNoti`](#getchanneleditnoti) | private |  | power | inferred | Returns the channel edit noti. |
| [`getChannelGroupList`](#getchannelgrouplist) | private |  | power | inferred | Returns the channel group list. |
| [`getChannelInfo`](#getchannelinfo) | private |  | power | inferred | Returns the channel info. |
| [`getChannelList`](#getchannellist) | private |  | power | inferred | Returns the channel list. |
| [`getChannelListbySignalChId`](#getchannellistbysignalchid) | private |  | power | inferred | Returns the channel listby signal channel ID. |
| [`getChannelNameList`](#getchannelnamelist) | private |  | power | inferred | Returns the channel name list. |
| [`getChannelStatus`](#getchannelstatus) | private |  | power | inferred | Returns the channel status. |
| [`getCountryPolicy`](#getcountrypolicy) | private |  | power | inferred | Returns the country policy. |
| [`getCurrentEventList`](#getcurrenteventlist) | private |  | power | inferred | Returns the current event list. |
| [`getCurrentFavoriteGroup`](#getcurrentfavoritegroup) | private |  | power | inferred | Returns the current favorite group. |
| [`getCurrentNextEventList`](#getcurrentnexteventlist) | private |  | power | inferred | Returns the current next event list. |
| [`getCurrentPopularInformation`](#getcurrentpopularinformation) | private |  | power | inferred | Returns the current popular information. |
| [`getDbFilePath`](#getdbfilepath) | private |  | db | inferred | Returns the db file path. |
| [`getEpgStatus`](#getepgstatus) | private |  | tv-broadcast | inferred | Returns the EPG status. |
| [`getEventInfo`](#geteventinfo) | private |  | power | inferred | Returns the event info. |
| [`getEventList`](#geteventlist) | private |  | power | inferred | Returns the event list. |
| [`getFavoriteGroupList`](#getfavoritegrouplist) | private |  | power | inferred | Returns the favorite group list. |
| [`getIbsHeaderData`](#getibsheaderdata) | private |  | power | inferred | Returns the ibs header data. |
| [`getMCPList`](#getmcplist) | private |  | power | inferred | Returns the MCP list. |
| [`getNextEvent`](#getnextevent) | private |  | power | inferred | Returns the next event. |
| [`getNextEventList`](#getnexteventlist) | private |  | power | inferred | Returns the next event list. |
| [`getRelatedProgram`](#getrelatedprogram) | private |  | power | inferred | Returns the related program. |
| [`getSCDPolicy`](#getscdpolicy) | private |  | power | inferred | Returns the SCD policy. |
| [`getServiceStatus`](#getservicestatus) | private |  | power | inferred | Returns the service status. |
| [`getUpcomingPopularInformation`](#getupcomingpopularinformation) | private |  | power | inferred | Returns the upcoming popular information. |
| [`getValueList`](#getvaluelist) | private |  | power | inferred | Returns the value list. |
| [`moveChannel`](#movechannel) | private |  | power | inferred | Moves the channel. |
| [`moveChannelFavoritePriority`](#movechannelfavoritepriority) | private |  | power | inferred | Moves the channel favorite priority. |
| [`notifyAutoScanDone`](#notifyautoscandone) | private |  | power | inferred | Notifies of the auto scan done. |
| [`notifyAutoScanStart`](#notifyautoscanstart) | private |  | power | inferred | Notifies of the auto scan start. |
| [`notifyChannelListChanged`](#notifychannellistchanged) | private |  | power | inferred | Notifies of the channel list changed. |
| [`notifyGenreChanged`](#notifygenrechanged) | private |  | power | inferred | Notifies of the genre changed. |
| [`notifyInternetChannelStatusUpdate`](#notifyinternetchannelstatusupdate) | private |  | update | inferred | Notifies of the internet channel status update. |
| [`notifyOnlineEPGEmpty`](#notifyonlineepgempty) | private |  | tv-broadcast | inferred | Notifies of the online EPG empty. |
| [`ping`](#ping) | private |  | power | inferred | Pings the pbsw. |
| [`releaseChannelBlock`](#releasechannelblock) | private |  | power | inferred | Releases the channel block. |
| [`releaseChannelFavoriteGroup`](#releasechannelfavoritegroup) | private |  | power | inferred | Releases the channel favorite group. |
| [`releaseChannelSkip`](#releasechannelskip) | private |  | power | inferred | Releases the channel skip. |
| [`releaseConfiguredChannel`](#releaseconfiguredchannel) | private |  | settings | inferred | Releases the configured channel. |
| [`requestAuthentication`](#requestauthentication) | private |  | power | inferred | Requests the authentication. |
| [`setAutoScanStatus4Twin`](#setautoscanstatus4twin) | private |  | power | inferred | Sets the auto scan status 4 twin. |
| [`setChannelBlock`](#setchannelblock) | private |  | power | inferred | Sets the channel block. |
| [`setChannelFavoriteGroup`](#setchannelfavoritegroup) | private |  | power | inferred | Sets the channel favorite group. |
| [`setChannelSkip`](#setchannelskip) | private |  | power | inferred | Sets the channel skip. |
| [`setConfiguredChannel`](#setconfiguredchannel) | private |  | settings | inferred | Sets the configured channel. |
| [`setCurrentFavoriteGroup`](#setcurrentfavoritegroup) | private |  | power | inferred | Sets the current favorite group. |
| [`updateChannelMap`](#updatechannelmap) | private |  | power | inferred | Updates the channel map. |
| [`updateEpgInfo`](#updateepginfo) | private |  | tv-broadcast | inferred | Updates the EPG info. |

<a id="appendfavoritegroup"></a>
## `appendFavoriteGroup`

`luna://com.webos.service.pbsw/appendFavoriteGroup`

Handles the append favorite group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/appendFavoriteGroup '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="changechannelfavoritepriority"></a>
## `changeChannelFavoritePriority`

`luna://com.webos.service.pbsw/changeChannelFavoritePriority`

Changes the channel favorite priority.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/changeChannelFavoritePriority '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changechannelnumber"></a>
## `changeChannelNumber`

`luna://com.webos.service.pbsw/changeChannelNumber`

Changes the channel number.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/changeChannelNumber '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkchannelmapversion"></a>
## `checkChannelMapVersion`

`luna://com.webos.service.pbsw/checkChannelMapVersion`

Checks the channel map version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/checkChannelMapVersion '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkepgexists"></a>
## `checkEpgExists`

`luna://com.webos.service.pbsw/checkEpgExists`

Checks the EPG exists.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/checkEpgExists '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.pbsw/debug`

Handles the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/debug '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletechannel"></a>
## `deleteChannel` ⚠️ DANGEROUS

`luna://com.webos.service.pbsw/deleteChannel`

Deletes the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/deleteChannel '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="downchannelmapversion"></a>
## `downChannelMapVersion`

`luna://com.webos.service.pbsw/downChannelMapVersion`

Handles the down channel map version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/downChannelMapVersion '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getautoscanstatus4twin"></a>
## `getAutoScanStatus4Twin`

`luna://com.webos.service.pbsw/getAutoScanStatus4Twin`

Returns the auto scan status 4 twin.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getAutoScanStatus4Twin '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchanneleditnoti"></a>
## `getChannelEditNoti`

`luna://com.webos.service.pbsw/getChannelEditNoti`

Returns the channel edit noti.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelEditNoti '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelgrouplist"></a>
## `getChannelGroupList`

`luna://com.webos.service.pbsw/getChannelGroupList`

Returns the channel group list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `channelGroupId` |  |
| `channelGroupList` |  |
| `channelGroupListCount` |  |
| `channelGroupName` |  |
| `isFavoriteGroup` |  |
| `userEdited` |  |
| `userEditedName` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelGroupList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelinfo"></a>
## `getChannelInfo`

`luna://com.webos.service.pbsw/getChannelInfo`

Returns the channel info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelInfo '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannellist"></a>
## `getChannelList`

`luna://com.webos.service.pbsw/getChannelList`

Returns the channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannellistbysignalchid"></a>
## `getChannelListbySignalChId`

`luna://com.webos.service.pbsw/getChannelListbySignalChId`

Returns the channel listby signal channel ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelListbySignalChId '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelnamelist"></a>
## `getChannelNameList`

`luna://com.webos.service.pbsw/getChannelNameList`

Returns the channel name list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelNameList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelstatus"></a>
## `getChannelStatus`

`luna://com.webos.service.pbsw/getChannelStatus`

Returns the channel status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getChannelStatus '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcountrypolicy"></a>
## `getCountryPolicy`

`luna://com.webos.service.pbsw/getCountryPolicy`

Returns the country policy.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `baseEpgOnline` |  |
| `guideDetailSupport` |  |
| `ipAntennaSupport` |  |
| `ipCableSupport` |  |
| `ipOPSupport` |  |
| `ipOnlineChannelSupport` |  |
| `ipOnlineEPGSupport` |  |
| `ipSatelliteSupport` |  |
| `mergedEPGSupport` |  |
| `ottChannelSupport` |  |
| `ottEPGSupport` |  |
| `stbOnlineChannelSupport` |  |
| `stbOnlineEPGSupport` |  |
| `tunerOnlineChannelSupport` |  |
| `tunerOnlineEPGSupport` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getCountryPolicy '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrenteventlist"></a>
## `getCurrentEventList`

`luna://com.webos.service.pbsw/getCurrentEventList`

Returns the current event list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getCurrentEventList '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentfavoritegroup"></a>
## `getCurrentFavoriteGroup`

`luna://com.webos.service.pbsw/getCurrentFavoriteGroup`

Returns the current favorite group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `channelGroup` |  |
| `channelGroupId` |  |
| `channelGroupName` |  |
| `enable` |  |
| `userEdited` |  |
| `userEditedName` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getCurrentFavoriteGroup '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentnexteventlist"></a>
## `getCurrentNextEventList`

`luna://com.webos.service.pbsw/getCurrentNextEventList`

Returns the current next event list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getCurrentNextEventList '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentpopularinformation"></a>
## `getCurrentPopularInformation`

`luna://com.webos.service.pbsw/getCurrentPopularInformation`

Returns the current popular information.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getCurrentPopularInformation '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdbfilepath"></a>
## `getDbFilePath`

`luna://com.webos.service.pbsw/getDbFilePath`

Returns the db file path.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getDbFilePath '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getepgstatus"></a>
## `getEpgStatus`

`luna://com.webos.service.pbsw/getEpgStatus`

Returns the EPG status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `baseEpgOnline` |  |
| `dataType` |  |
| `errorCodeNumber` |  |
| `guideDetailSupport` |  |
| `ipAntennaSupport` |  |
| `ipCableSupport` |  |
| `ipEpgStatus` |  |
| `ipOPSupport` |  |
| `ipOnlineChannelSupport` |  |
| `ipOnlineEPGSupport` |  |
| `ipSatelliteSupport` |  |
| `mergedEPGSupport` |  |
| `networkStatus` |  |
| `ottChannelSupport` |  |
| `ottEPGSupport` |  |
| `statusValue` |  |
| `stbEpgStatus` |  |
| `stbOnlineChannelSupport` |  |
| `stbOnlineEPGSupport` |  |
| `tunerEpgStatus` |  |
| `tunerOnlineChannelSupport` |  |
| `tunerOnlineEPGSupport` |  |
| `type` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getEpgStatus '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteventinfo"></a>
## `getEventInfo`

`luna://com.webos.service.pbsw/getEventInfo`

Returns the event info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getEventInfo '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="geteventlist"></a>
## `getEventList`

`luna://com.webos.service.pbsw/getEventList`

Returns the event list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getEventList '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfavoritegrouplist"></a>
## `getFavoriteGroupList`

`luna://com.webos.service.pbsw/getFavoriteGroupList`

Returns the favorite group list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `channelGroupId` |  |
| `channelGroupList` |  |
| `channelGroupListCount` |  |
| `channelGroupName` |  |
| `enable` |  |
| `userEdited` |  |
| `userEditedName` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getFavoriteGroupList '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getibsheaderdata"></a>
## `getIbsHeaderData`

`luna://com.webos.service.pbsw/getIbsHeaderData`

Returns the ibs header data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `deviceUniqueId` |  |
| `ipWatchFlag` |  |
| `livetvwatchEula` |  |
| `stbAcrWatchFlag` |  |
| `stbScdWatchFlag` |  |
| `stbUeiWatchFlag` |  |
| `watchFlag` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getIbsHeaderData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmcplist"></a>
## `getMCPList`

`luna://com.webos.service.pbsw/getMCPList`

Returns the MCP list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `LGP` |  |
| `PLT` |  |
| `channelMapId` |  |
| `mcpList` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getMCPList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnextevent"></a>
## `getNextEvent`

`luna://com.webos.service.pbsw/getNextEvent`

Returns the next event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getNextEvent '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnexteventlist"></a>
## `getNextEventList`

`luna://com.webos.service.pbsw/getNextEventList`

Returns the next event list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getNextEventList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrelatedprogram"></a>
## `getRelatedProgram`

`luna://com.webos.service.pbsw/getRelatedProgram`

Returns the related program.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getRelatedProgram '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getscdpolicy"></a>
## `getSCDPolicy`

`luna://com.webos.service.pbsw/getSCDPolicy`

Returns the SCD policy.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getSCDPolicy '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservicestatus"></a>
## `getServiceStatus`

`luna://com.webos.service.pbsw/getServiceStatus`

Returns the service status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getServiceStatus '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getupcomingpopularinformation"></a>
## `getUpcomingPopularInformation`

`luna://com.webos.service.pbsw/getUpcomingPopularInformation`

Returns the upcoming popular information.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getUpcomingPopularInformation '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvaluelist"></a>
## `getValueList`

`luna://com.webos.service.pbsw/getValueList`

Returns the value list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/getValueList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="movechannel"></a>
## `moveChannel`

`luna://com.webos.service.pbsw/moveChannel`

Moves the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/moveChannel '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="movechannelfavoritepriority"></a>
## `moveChannelFavoritePriority`

`luna://com.webos.service.pbsw/moveChannelFavoritePriority`

Moves the channel favorite priority.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/moveChannelFavoritePriority '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyautoscandone"></a>
## `notifyAutoScanDone`

`luna://com.webos.service.pbsw/notifyAutoScanDone`

Notifies of the auto scan done.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyAutoScanDone '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyautoscanstart"></a>
## `notifyAutoScanStart`

`luna://com.webos.service.pbsw/notifyAutoScanStart`

Notifies of the auto scan start.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyAutoScanStart '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifychannellistchanged"></a>
## `notifyChannelListChanged`

`luna://com.webos.service.pbsw/notifyChannelListChanged`

Notifies of the channel list changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyChannelListChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifygenrechanged"></a>
## `notifyGenreChanged`

`luna://com.webos.service.pbsw/notifyGenreChanged`

Notifies of the genre changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyGenreChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyinternetchannelstatusupdate"></a>
## `notifyInternetChannelStatusUpdate`

`luna://com.webos.service.pbsw/notifyInternetChannelStatusUpdate`

Notifies of the internet channel status update.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyInternetChannelStatusUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyonlineepgempty"></a>
## `notifyOnlineEPGEmpty`

`luna://com.webos.service.pbsw/notifyOnlineEPGEmpty`

Notifies of the online EPG empty.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/notifyOnlineEPGEmpty '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ping"></a>
## `ping`

`luna://com.webos.service.pbsw/ping`

Pings the pbsw.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/ping '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelblock"></a>
## `releaseChannelBlock`

`luna://com.webos.service.pbsw/releaseChannelBlock`

Releases the channel block.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/releaseChannelBlock '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelfavoritegroup"></a>
## `releaseChannelFavoriteGroup`

`luna://com.webos.service.pbsw/releaseChannelFavoriteGroup`

Releases the channel favorite group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/releaseChannelFavoriteGroup '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releasechannelskip"></a>
## `releaseChannelSkip`

`luna://com.webos.service.pbsw/releaseChannelSkip`

Releases the channel skip.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/releaseChannelSkip '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releaseconfiguredchannel"></a>
## `releaseConfiguredChannel`

`luna://com.webos.service.pbsw/releaseConfiguredChannel`

Releases the configured channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/releaseConfiguredChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestauthentication"></a>
## `requestAuthentication`

`luna://com.webos.service.pbsw/requestAuthentication`

Requests the authentication.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/requestAuthentication '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setautoscanstatus4twin"></a>
## `setAutoScanStatus4Twin`

`luna://com.webos.service.pbsw/setAutoScanStatus4Twin`

Sets the auto scan status 4 twin.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setAutoScanStatus4Twin '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setchannelblock"></a>
## `setChannelBlock`

`luna://com.webos.service.pbsw/setChannelBlock`

Sets the channel block.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setChannelBlock '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelfavoritegroup"></a>
## `setChannelFavoriteGroup`

`luna://com.webos.service.pbsw/setChannelFavoriteGroup`

Sets the channel favorite group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setChannelFavoriteGroup '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannelskip"></a>
## `setChannelSkip`

`luna://com.webos.service.pbsw/setChannelSkip`

Sets the channel skip.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setChannelSkip '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setconfiguredchannel"></a>
## `setConfiguredChannel`

`luna://com.webos.service.pbsw/setConfiguredChannel`

Sets the configured channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setConfiguredChannel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcurrentfavoritegroup"></a>
## `setCurrentFavoriteGroup`

`luna://com.webos.service.pbsw/setCurrentFavoriteGroup`

Sets the current favorite group.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/setCurrentFavoriteGroup '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatechannelmap"></a>
## `updateChannelMap`

`luna://com.webos.service.pbsw/updateChannelMap`

Updates the channel map.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/updateChannelMap '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updateepginfo"></a>
## `updateEpgInfo`

`luna://com.webos.service.pbsw/updateEpgInfo`

Updates the EPG info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pbsw/updateEpgInfo '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
