# `com.webos.service.utp.databroadcast`

UTP data-broadcast service: section filtering, EPG/service/event info, DVB descriptors and DRM handling for interactive/data broadcast content. _(inferred from the service's methods)_

47 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addSectionFilter`](#addsectionfilter) | private |  | tv-broadcast | inferred | Adds the section filter. |
| [`cacheRequest`](#cacherequest) | private |  | tv-broadcast | inferred | Handles the cache request. |
| [`cacheRequestDASH`](#cacherequestdash) | private |  | tv-broadcast | inferred | Handles the cache request DASH. |
| [`cacheUsage`](#cacheusage) | private |  | tv-broadcast | inferred | Handles the cache usage. |
| [`clearFilterCode`](#clearfiltercode) | private |  | tv-broadcast | inferred | Clears the filter code. |
| [`convertId`](#convertid) | private |  | tv-broadcast | inferred | Handles the convert ID. |
| [`getAlertInfo`](#getalertinfo) | private |  | tv-broadcast | inferred | Returns the alert info. |
| [`getBootInfo`](#getbootinfo) | private |  | tv-broadcast | inferred | Returns the boot info. |
| [`getBroadcastComponentInfo`](#getbroadcastcomponentinfo) | private |  | tv-broadcast | inferred | Returns the broadcast component info. |
| [`getChannelInfo`](#getchannelinfo) | private |  | tv-broadcast | inferred | Returns the channel info. |
| [`getCurrentEPGInfo`](#getcurrentepginfo) | private |  | tv-broadcast | inferred | Returns the current EPG info. |
| [`getCurrentServiceInfo`](#getcurrentserviceinfo) | private |  | tv-broadcast | inferred | Returns the current service info. |
| [`getDeliverySystemDescriptor`](#getdeliverysystemdescriptor) | private |  | tv-broadcast | inferred | Returns the delivery system descriptor. |
| [`getDrmEncrypted`](#getdrmencrypted) | private |  | tv-broadcast | inferred | Returns the DRM encrypted. |
| [`getDrmOperation`](#getdrmoperation) | private |  | tv-broadcast | inferred | Returns the DRM operation. |
| [`getDvbRIByAtag`](#getdvbribyatag) | private |  | tv-broadcast | inferred | Returns the DVB RI by atag. |
| [`getEitDescriptor`](#geteitdescriptor) | private |  | tv-broadcast | inferred | Returns the EIT descriptor. |
| [`getEventStreamInfo`](#geteventstreaminfo) | private |  | tv-broadcast | inferred | Returns the event stream info. |
| [`getInteractiveData`](#getinteractivedata) | private |  | tv-broadcast | inferred | Returns the interactive data. |
| [`getNamedPipePath`](#getnamedpipepath) | private |  | tv-broadcast | inferred | Returns the named pipe path. |
| [`getRmpPlaybackState`](#getrmpplaybackstate) | private |  | tv-broadcast | inferred | Returns the rmp playback state. |
| [`getRMPWallClockTime`](#getrmpwallclocktime) | private |  | tv-broadcast | inferred | Returns the RMP wall clock time. |
| [`getSdtComponetDescInfo`](#getsdtcomponetdescinfo) | private |  | tv-broadcast | inferred | Returns the SDT componet desc info. |
| [`getServiceInfo`](#getserviceinfo) | private |  | tv-broadcast | inferred | Returns the service info. |
| [`getSignalingInfo`](#getsignalinginfo) | private |  | tv-broadcast | inferred | Returns the signaling info. |
| [`getTableInfo`](#gettableinfo) | private |  | tv-broadcast | inferred | Returns the table info. |
| [`getVdecAFD`](#getvdecafd) | private |  | tv-broadcast | inferred | Returns the vdec AFD. |
| [`getVdecVideoInfo`](#getvdecvideoinfo) | private |  | tv-broadcast | inferred | Returns the vdec video info. |
| [`getXlinkResolution`](#getxlinkresolution) | private |  | tv-broadcast | inferred | Returns the xlink resolution. |
| [`launchFvx`](#launchfvx) | private |  | tv-broadcast | inferred | Launches the fvx. |
| [`markUnused`](#markunused) | private |  | tv-broadcast | inferred | Handles the mark unused. |
| [`notifySignalingDataChanged`](#notifysignalingdatachanged) | private |  | tv-broadcast | inferred | Notifies of the signaling data changed. |
| [`removeSectionFilter`](#removesectionfilter) | private |  | tv-broadcast | inferred | Removes the section filter. ⚠️ |
| [`requestAitSection`](#requestaitsection) | private |  | tv-broadcast | inferred | Requests the ait section. |
| [`requestDsmSection`](#requestdsmsection) | private |  | tv-broadcast | inferred | Requests the dsm section. |
| [`requestNRT`](#requestnrt) | private |  | tv-broadcast | inferred | Requests the NRT. |
| [`requestTemiInfo`](#requesttemiinfo) | private |  | tv-broadcast | inferred | Requests the temi info. |
| [`setCurrentAppContextId`](#setcurrentappcontextid) | private |  | tv-broadcast | inferred | Sets the current app context ID. |
| [`setDrmOperation`](#setdrmoperation) | private |  | tv-broadcast | inferred | Sets the DRM operation. |
| [`setFilterCode`](#setfiltercode) | private |  | tv-broadcast | inferred | Sets the filter code. |
| [`setRMPURL`](#setrmpurl) | private |  | tv-broadcast | inferred | Sets the RMPURL. |
| [`setXlinkResolution`](#setxlinkresolution) | private |  | tv-broadcast | inferred | Sets the xlink resolution. |
| [`startDripIFrameData`](#startdripiframedata) | private |  | tv-broadcast | inferred | Starts the drip i frame data. |
| [`stopDripIFrameData`](#stopdripiframedata) | private |  | tv-broadcast | inferred | Stops the drip i frame data. |
| [`stopDsmSection`](#stopdsmsection) | private |  | tv-broadcast | inferred | Stops the dsm section. |
| [`subscribeSectionData`](#subscribesectiondata) | private |  | tv-broadcast | inferred | Subscribes to the section data. |
| [`subtitleDisplayPreference`](#subtitledisplaypreference) | private |  | tv-broadcast | inferred | Handles the subtitle display preference. |

<a id="addsectionfilter"></a>
## `addSectionFilter`

`luna://com.webos.service.utp.databroadcast/addSectionFilter`

Adds the section filter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/addSectionFilter '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cacherequest"></a>
## `cacheRequest`

`luna://com.webos.service.utp.databroadcast/cacheRequest`

Handles the cache request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/cacheRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cacherequestdash"></a>
## `cacheRequestDASH`

`luna://com.webos.service.utp.databroadcast/cacheRequestDASH`

Handles the cache request DASH.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/cacheRequestDASH '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cacheusage"></a>
## `cacheUsage`

`luna://com.webos.service.utp.databroadcast/cacheUsage`

Handles the cache usage.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/cacheUsage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clearfiltercode"></a>
## `clearFilterCode`

`luna://com.webos.service.utp.databroadcast/clearFilterCode`

Clears the filter code.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/clearFilterCode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="convertid"></a>
## `convertId`

`luna://com.webos.service.utp.databroadcast/convertId`

Handles the convert ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/convertId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getalertinfo"></a>
## `getAlertInfo`

`luna://com.webos.service.utp.databroadcast/getAlertInfo`

Returns the alert info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getAlertInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbootinfo"></a>
## `getBootInfo`

`luna://com.webos.service.utp.databroadcast/getBootInfo`

Returns the boot info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getBootInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcastcomponentinfo"></a>
## `getBroadcastComponentInfo`

`luna://com.webos.service.utp.databroadcast/getBroadcastComponentInfo`

Returns the broadcast component info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getBroadcastComponentInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelinfo"></a>
## `getChannelInfo`

`luna://com.webos.service.utp.databroadcast/getChannelInfo`

Returns the channel info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getChannelInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentepginfo"></a>
## `getCurrentEPGInfo`

`luna://com.webos.service.utp.databroadcast/getCurrentEPGInfo`

Returns the current EPG info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getCurrentEPGInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentserviceinfo"></a>
## `getCurrentServiceInfo`

`luna://com.webos.service.utp.databroadcast/getCurrentServiceInfo`

Returns the current service info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getCurrentServiceInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdeliverysystemdescriptor"></a>
## `getDeliverySystemDescriptor`

`luna://com.webos.service.utp.databroadcast/getDeliverySystemDescriptor`

Returns the delivery system descriptor.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getDeliverySystemDescriptor '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdrmencrypted"></a>
## `getDrmEncrypted`

`luna://com.webos.service.utp.databroadcast/getDrmEncrypted`

Returns the DRM encrypted.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getDrmEncrypted '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdrmoperation"></a>
## `getDrmOperation`

`luna://com.webos.service.utp.databroadcast/getDrmOperation`

Returns the DRM operation.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getDrmOperation '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdvbribyatag"></a>
## `getDvbRIByAtag`

`luna://com.webos.service.utp.databroadcast/getDvbRIByAtag`

Returns the DVB RI by atag.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getDvbRIByAtag '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteitdescriptor"></a>
## `getEitDescriptor`

`luna://com.webos.service.utp.databroadcast/getEitDescriptor`

Returns the EIT descriptor.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getEitDescriptor '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteventstreaminfo"></a>
## `getEventStreamInfo`

`luna://com.webos.service.utp.databroadcast/getEventStreamInfo`

Returns the event stream info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getEventStreamInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinteractivedata"></a>
## `getInteractiveData`

`luna://com.webos.service.utp.databroadcast/getInteractiveData`

Returns the interactive data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getInteractiveData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnamedpipepath"></a>
## `getNamedPipePath`

`luna://com.webos.service.utp.databroadcast/getNamedPipePath`

Returns the named pipe path.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `pathName` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getNamedPipePath '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrmpplaybackstate"></a>
## `getRmpPlaybackState`

`luna://com.webos.service.utp.databroadcast/getRmpPlaybackState`

Returns the rmp playback state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getRmpPlaybackState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrmpwallclocktime"></a>
## `getRMPWallClockTime`

`luna://com.webos.service.utp.databroadcast/getRMPWallClockTime`

Returns the RMP wall clock time.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getRMPWallClockTime '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsdtcomponetdescinfo"></a>
## `getSdtComponetDescInfo`

`luna://com.webos.service.utp.databroadcast/getSdtComponetDescInfo`

Returns the SDT componet desc info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getSdtComponetDescInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getserviceinfo"></a>
## `getServiceInfo`

`luna://com.webos.service.utp.databroadcast/getServiceInfo`

Returns the service info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getServiceInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsignalinginfo"></a>
## `getSignalingInfo`

`luna://com.webos.service.utp.databroadcast/getSignalingInfo`

Returns the signaling info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getSignalingInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettableinfo"></a>
## `getTableInfo`

`luna://com.webos.service.utp.databroadcast/getTableInfo`

Returns the table info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getTableInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvdecafd"></a>
## `getVdecAFD`

`luna://com.webos.service.utp.databroadcast/getVdecAFD`

Returns the vdec AFD.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getVdecAFD '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvdecvideoinfo"></a>
## `getVdecVideoInfo`

`luna://com.webos.service.utp.databroadcast/getVdecVideoInfo`

Returns the vdec video info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getVdecVideoInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getxlinkresolution"></a>
## `getXlinkResolution`

`luna://com.webos.service.utp.databroadcast/getXlinkResolution`

Returns the xlink resolution.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/getXlinkResolution '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchfvx"></a>
## `launchFvx`

`luna://com.webos.service.utp.databroadcast/launchFvx`

Launches the fvx.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/launchFvx '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="markunused"></a>
## `markUnused`

`luna://com.webos.service.utp.databroadcast/markUnused`

Handles the mark unused.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/markUnused '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifysignalingdatachanged"></a>
## `notifySignalingDataChanged`

`luna://com.webos.service.utp.databroadcast/notifySignalingDataChanged`

Notifies of the signaling data changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/notifySignalingDataChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removesectionfilter"></a>
## `removeSectionFilter` ⚠️ DANGEROUS

`luna://com.webos.service.utp.databroadcast/removeSectionFilter`

Removes the section filter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/removeSectionFilter '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestaitsection"></a>
## `requestAitSection`

`luna://com.webos.service.utp.databroadcast/requestAitSection`

Requests the ait section.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/requestAitSection '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestdsmsection"></a>
## `requestDsmSection`

`luna://com.webos.service.utp.databroadcast/requestDsmSection`

Requests the dsm section.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/requestDsmSection '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestnrt"></a>
## `requestNRT`

`luna://com.webos.service.utp.databroadcast/requestNRT`

Requests the NRT.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/requestNRT '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requesttemiinfo"></a>
## `requestTemiInfo`

`luna://com.webos.service.utp.databroadcast/requestTemiInfo`

Requests the temi info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/requestTemiInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcurrentappcontextid"></a>
## `setCurrentAppContextId`

`luna://com.webos.service.utp.databroadcast/setCurrentAppContextId`

Sets the current app context ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/setCurrentAppContextId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdrmoperation"></a>
## `setDrmOperation`

`luna://com.webos.service.utp.databroadcast/setDrmOperation`

Sets the DRM operation.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/setDrmOperation '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setfiltercode"></a>
## `setFilterCode`

`luna://com.webos.service.utp.databroadcast/setFilterCode`

Sets the filter code.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/setFilterCode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setrmpurl"></a>
## `setRMPURL`

`luna://com.webos.service.utp.databroadcast/setRMPURL`

Sets the RMPURL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/setRMPURL '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setxlinkresolution"></a>
## `setXlinkResolution`

`luna://com.webos.service.utp.databroadcast/setXlinkResolution`

Sets the xlink resolution.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/setXlinkResolution '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startdripiframedata"></a>
## `startDripIFrameData`

`luna://com.webos.service.utp.databroadcast/startDripIFrameData`

Starts the drip i frame data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/startDripIFrameData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopdripiframedata"></a>
## `stopDripIFrameData`

`luna://com.webos.service.utp.databroadcast/stopDripIFrameData`

Stops the drip i frame data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/stopDripIFrameData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopdsmsection"></a>
## `stopDsmSection`

`luna://com.webos.service.utp.databroadcast/stopDsmSection`

Stops the dsm section.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/stopDsmSection '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribesectiondata"></a>
## `subscribeSectionData`

`luna://com.webos.service.utp.databroadcast/subscribeSectionData`

Subscribes to the section data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/subscribeSectionData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subtitledisplaypreference"></a>
## `subtitleDisplayPreference`

`luna://com.webos.service.utp.databroadcast/subtitleDisplayPreference`

Handles the subtitle display preference.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.databroadcast/subtitleDisplayPreference '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
