# `com.webos.service.legacybroadcast.databroadcast`

Legacy DVB/ATSC data-broadcast service: adds section filters, attaches stream events, builds DSM-CC/carousel filters, and reports broadcast component, channel, caption and broadcaster info. _(inferred from the service's methods)_

42 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addSectionFilter`](#addsectionfilter) | private |  | tv-broadcast | inferred | Adds the section filter. |
| [`attachStreamEvent`](#attachstreamevent) | private |  | tv-broadcast | inferred | Handles the attach stream event. |
| [`createBmlDsmccFilter`](#createbmldsmccfilter) | private |  | tv-broadcast | inferred | Creates the bml dsmcc filter. |
| [`deleteBmlDsmccFilter`](#deletebmldsmccfilter) | private |  | tv-broadcast | inferred | Deletes the bml dsmcc filter. ⚠️ |
| [`getAncillaryData`](#getancillarydata) | private |  | tv-broadcast | inferred | Returns the ancillary data. |
| [`getBootInfo`](#getbootinfo) | private |  | tv-broadcast | inferred | Returns the boot info. |
| [`getBroadcastComponentInfo`](#getbroadcastcomponentinfo) | private |  | tv-broadcast | inferred | Returns the broadcast component info. |
| [`getBroadcastInfoByDummy`](#getbroadcastinfobydummy) | private |  | tv-broadcast | inferred | Returns the broadcast info by dummy. |
| [`getBroadcastInfoByMajor`](#getbroadcastinfobymajor) | private |  | tv-broadcast | inferred | Returns the broadcast info by major. |
| [`getCaptionState`](#getcaptionstate) | private |  | tv-broadcast | inferred | Returns the caption state. |
| [`getCaptionStatus`](#getcaptionstatus) | private |  | tv-broadcast | inferred | Returns the caption status. |
| [`getCarouselInfo`](#getcarouselinfo) | private |  | tv-broadcast | inferred | Returns the carousel info. |
| [`getCarouselInfoByCtag`](#getcarouselinfobyctag) | private |  | tv-broadcast | inferred | Returns the carousel info by ctag. |
| [`getChannelInfo`](#getchannelinfo) | private |  | tv-broadcast | inferred | Returns the channel info. |
| [`getCtagByPidSvcid`](#getctagbypidsvcid) | private |  | tv-broadcast | inferred | Returns the ctag by pid svcid. |
| [`getCurrentBroadcasterInfo`](#getcurrentbroadcasterinfo) | private |  | tv-broadcast | inferred | Returns the current broadcaster info. |
| [`getCurrentStc`](#getcurrentstc) | private |  | tv-broadcast | inferred | Returns the current stc. |
| [`getDeliverySystemDescriptor`](#getdeliverysystemdescriptor) | private |  | tv-broadcast | inferred | Returns the delivery system descriptor. |
| [`getDsmccFile`](#getdsmccfile) | private |  | tv-broadcast | inferred | Returns the dsmcc file. |
| [`getDvbRIByAtag`](#getdvbribyatag) | private |  | tv-broadcast | inferred | Returns the DVB RI by atag. |
| [`getEitDescriptor`](#geteitdescriptor) | private |  | tv-broadcast | inferred | Returns the EIT descriptor. |
| [`getLcnByServiceIdentifier`](#getlcnbyserviceidentifier) | private |  | tv-broadcast | inferred | Returns the lcn by service identifier. |
| [`getNamedPipePath`](#getnamedpipepath) | private |  | tv-broadcast | inferred | Returns the named pipe path. |
| [`getPmtSectionTable`](#getpmtsectiontable) | private |  | tv-broadcast | inferred | Returns the PMT section table. |
| [`getSdtComponetDescInfo`](#getsdtcomponetdescinfo) | private |  | tv-broadcast | inferred | Returns the SDT componet desc info. |
| [`getSdtServiceInfo`](#getsdtserviceinfo) | private |  | tv-broadcast | inferred | Returns the SDT service info. |
| [`getServiceInfo`](#getserviceinfo) | private |  | tv-broadcast | inferred | Returns the service info. |
| [`getServiceOperator`](#getserviceoperator) | private |  | tv-broadcast | inferred | Returns the service operator. |
| [`getTableInfo`](#gettableinfo) | private |  | tv-broadcast | inferred | Returns the table info. |
| [`getVdecAFD`](#getvdecafd) | private |  | tv-broadcast | inferred | Returns the vdec AFD. |
| [`getVdecVideoInfo`](#getvdecvideoinfo) | private |  | tv-broadcast | inferred | Returns the vdec video info. |
| [`notifyCurrentEit`](#notifycurrenteit) | private |  | tv-broadcast | inferred | Notifies of the current EIT. |
| [`registerStreamEvent`](#registerstreamevent) | private |  | tv-broadcast | inferred | Registers the stream event. |
| [`removeSectionFilter`](#removesectionfilter) | private |  | tv-broadcast | inferred | Removes the section filter. ⚠️ |
| [`requestAitSection`](#requestaitsection) | private |  | tv-broadcast | inferred | Requests the ait section. |
| [`requestDsmSection`](#requestdsmsection) | private |  | tv-broadcast | inferred | Requests the dsm section. |
| [`requestTemiInfo`](#requesttemiinfo) | private |  | tv-broadcast | inferred | Requests the temi info. |
| [`startDripIFrameData`](#startdripiframedata) | private |  | tv-broadcast | inferred | Starts the drip i frame data. |
| [`startStream`](#startstream) | private |  | tv-broadcast | inferred | Starts the stream. |
| [`stopDripIFrameData`](#stopdripiframedata) | private |  | tv-broadcast | inferred | Stops the drip i frame data. |
| [`stopDsmSection`](#stopdsmsection) | private |  | tv-broadcast | inferred | Stops the dsm section. |
| [`subscribeSectionData`](#subscribesectiondata) | private |  | tv-broadcast | inferred | Subscribes to the section data. |

<a id="addsectionfilter"></a>
## `addSectionFilter`

`luna://com.webos.service.legacybroadcast.databroadcast/addSectionFilter`

Adds the section filter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/addSectionFilter '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="attachstreamevent"></a>
## `attachStreamEvent`

`luna://com.webos.service.legacybroadcast.databroadcast/attachStreamEvent`

Handles the attach stream event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/attachStreamEvent '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="createbmldsmccfilter"></a>
## `createBmlDsmccFilter`

`luna://com.webos.service.legacybroadcast.databroadcast/createBmlDsmccFilter`

Creates the bml dsmcc filter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/createBmlDsmccFilter '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletebmldsmccfilter"></a>
## `deleteBmlDsmccFilter` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.databroadcast/deleteBmlDsmccFilter`

Deletes the bml dsmcc filter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/deleteBmlDsmccFilter '{}'
```

> ACG groups: private, all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getancillarydata"></a>
## `getAncillaryData`

`luna://com.webos.service.legacybroadcast.databroadcast/getAncillaryData`

Returns the ancillary data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getAncillaryData '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbootinfo"></a>
## `getBootInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getBootInfo`

Returns the boot info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getBootInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcastcomponentinfo"></a>
## `getBroadcastComponentInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastComponentInfo`

Returns the broadcast component info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastComponentInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcastinfobydummy"></a>
## `getBroadcastInfoByDummy`

`luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastInfoByDummy`

Returns the broadcast info by dummy.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastInfoByDummy '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcastinfobymajor"></a>
## `getBroadcastInfoByMajor`

`luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastInfoByMajor`

Returns the broadcast info by major.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastInfoByMajor '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcaptionstate"></a>
## `getCaptionState`

`luna://com.webos.service.legacybroadcast.databroadcast/getCaptionState`

Returns the caption state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCaptionState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcaptionstatus"></a>
## `getCaptionStatus`

`luna://com.webos.service.legacybroadcast.databroadcast/getCaptionStatus`

Returns the caption status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCaptionStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcarouselinfo"></a>
## `getCarouselInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getCarouselInfo`

Returns the carousel info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCarouselInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcarouselinfobyctag"></a>
## `getCarouselInfoByCtag`

`luna://com.webos.service.legacybroadcast.databroadcast/getCarouselInfoByCtag`

Returns the carousel info by ctag.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCarouselInfoByCtag '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelinfo"></a>
## `getChannelInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getChannelInfo`

Returns the channel info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getChannelInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getctagbypidsvcid"></a>
## `getCtagByPidSvcid`

`luna://com.webos.service.legacybroadcast.databroadcast/getCtagByPidSvcid`

Returns the ctag by pid svcid.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCtagByPidSvcid '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentbroadcasterinfo"></a>
## `getCurrentBroadcasterInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getCurrentBroadcasterInfo`

Returns the current broadcaster info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCurrentBroadcasterInfo '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentstc"></a>
## `getCurrentStc`

`luna://com.webos.service.legacybroadcast.databroadcast/getCurrentStc`

Returns the current stc.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCurrentStc '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdeliverysystemdescriptor"></a>
## `getDeliverySystemDescriptor`

`luna://com.webos.service.legacybroadcast.databroadcast/getDeliverySystemDescriptor`

Returns the delivery system descriptor.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getDeliverySystemDescriptor '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdsmccfile"></a>
## `getDsmccFile`

`luna://com.webos.service.legacybroadcast.databroadcast/getDsmccFile`

Returns the dsmcc file.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getDsmccFile '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdvbribyatag"></a>
## `getDvbRIByAtag`

`luna://com.webos.service.legacybroadcast.databroadcast/getDvbRIByAtag`

Returns the DVB RI by atag.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getDvbRIByAtag '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteitdescriptor"></a>
## `getEitDescriptor`

`luna://com.webos.service.legacybroadcast.databroadcast/getEitDescriptor`

Returns the EIT descriptor.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getEitDescriptor '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlcnbyserviceidentifier"></a>
## `getLcnByServiceIdentifier`

`luna://com.webos.service.legacybroadcast.databroadcast/getLcnByServiceIdentifier`

Returns the lcn by service identifier.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getLcnByServiceIdentifier '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getnamedpipepath"></a>
## `getNamedPipePath`

`luna://com.webos.service.legacybroadcast.databroadcast/getNamedPipePath`

Returns the named pipe path.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getNamedPipePath '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpmtsectiontable"></a>
## `getPmtSectionTable`

`luna://com.webos.service.legacybroadcast.databroadcast/getPmtSectionTable`

Returns the PMT section table.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getPmtSectionTable '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsdtcomponetdescinfo"></a>
## `getSdtComponetDescInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getSdtComponetDescInfo`

Returns the SDT componet desc info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getSdtComponetDescInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsdtserviceinfo"></a>
## `getSdtServiceInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getSdtServiceInfo`

Returns the SDT service info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getSdtServiceInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getserviceinfo"></a>
## `getServiceInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getServiceInfo`

Returns the service info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getServiceInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getserviceoperator"></a>
## `getServiceOperator`

`luna://com.webos.service.legacybroadcast.databroadcast/getServiceOperator`

Returns the service operator.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getServiceOperator '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gettableinfo"></a>
## `getTableInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getTableInfo`

Returns the table info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getTableInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvdecafd"></a>
## `getVdecAFD`

`luna://com.webos.service.legacybroadcast.databroadcast/getVdecAFD`

Returns the vdec AFD.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getVdecAFD '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvdecvideoinfo"></a>
## `getVdecVideoInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getVdecVideoInfo`

Returns the vdec video info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getVdecVideoInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifycurrenteit"></a>
## `notifyCurrentEit`

`luna://com.webos.service.legacybroadcast.databroadcast/notifyCurrentEit`

Notifies of the current EIT.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/notifyCurrentEit '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerstreamevent"></a>
## `registerStreamEvent`

`luna://com.webos.service.legacybroadcast.databroadcast/registerStreamEvent`

Registers the stream event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/registerStreamEvent '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removesectionfilter"></a>
## `removeSectionFilter` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.databroadcast/removeSectionFilter`

Removes the section filter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/removeSectionFilter '{}'
```

> ACG groups: private, all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestaitsection"></a>
## `requestAitSection`

`luna://com.webos.service.legacybroadcast.databroadcast/requestAitSection`

Requests the ait section.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/requestAitSection '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestdsmsection"></a>
## `requestDsmSection`

`luna://com.webos.service.legacybroadcast.databroadcast/requestDsmSection`

Requests the dsm section.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/requestDsmSection '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requesttemiinfo"></a>
## `requestTemiInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/requestTemiInfo`

Requests the temi info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/requestTemiInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startdripiframedata"></a>
## `startDripIFrameData`

`luna://com.webos.service.legacybroadcast.databroadcast/startDripIFrameData`

Starts the drip i frame data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/startDripIFrameData '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startstream"></a>
## `startStream`

`luna://com.webos.service.legacybroadcast.databroadcast/startStream`

Starts the stream.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/startStream '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stopdripiframedata"></a>
## `stopDripIFrameData`

`luna://com.webos.service.legacybroadcast.databroadcast/stopDripIFrameData`

Stops the drip i frame data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/stopDripIFrameData '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopdsmsection"></a>
## `stopDsmSection`

`luna://com.webos.service.legacybroadcast.databroadcast/stopDsmSection`

Stops the dsm section.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/stopDsmSection '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribesectiondata"></a>
## `subscribeSectionData`

`luna://com.webos.service.legacybroadcast.databroadcast/subscribeSectionData`

Subscribes to the section data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/subscribeSectionData '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
