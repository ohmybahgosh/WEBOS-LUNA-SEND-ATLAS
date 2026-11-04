# `com.webos.service.legacybroadcast.databroadcast`

42 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`addSectionFilter`](#addsectionfilter) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`attachStreamEvent`](#attachstreamevent) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`createBmlDsmccFilter`](#createbmldsmccfilter) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`deleteBmlDsmccFilter`](#deletebmldsmccfilter) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). ⚠️ |
| [`getAncillaryData`](#getancillarydata) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getBootInfo`](#getbootinfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getBroadcastComponentInfo`](#getbroadcastcomponentinfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getBroadcastInfoByDummy`](#getbroadcastinfobydummy) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getBroadcastInfoByMajor`](#getbroadcastinfobymajor) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getCaptionState`](#getcaptionstate) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getCaptionStatus`](#getcaptionstatus) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getCarouselInfo`](#getcarouselinfo) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getCarouselInfoByCtag`](#getcarouselinfobyctag) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getChannelInfo`](#getchannelinfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getCtagByPidSvcid`](#getctagbypidsvcid) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getCurrentBroadcasterInfo`](#getcurrentbroadcasterinfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getCurrentStc`](#getcurrentstc) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getDeliverySystemDescriptor`](#getdeliverysystemdescriptor) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getDsmccFile`](#getdsmccfile) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getDvbRIByAtag`](#getdvbribyatag) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getEitDescriptor`](#geteitdescriptor) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getLcnByServiceIdentifier`](#getlcnbyserviceidentifier) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getNamedPipePath`](#getnamedpipepath) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getPmtSectionTable`](#getpmtsectiontable) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getSdtComponetDescInfo`](#getsdtcomponetdescinfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getSdtServiceInfo`](#getsdtserviceinfo) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getServiceInfo`](#getserviceinfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getServiceOperator`](#getserviceoperator) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getTableInfo`](#gettableinfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getVdecAFD`](#getvdecafd) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`getVdecVideoInfo`](#getvdecvideoinfo) | private |  | tv-broadcast | Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`notifyCurrentEit`](#notifycurrenteit) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`registerStreamEvent`](#registerstreamevent) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`removeSectionFilter`](#removesectionfilter) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). ⚠️ |
| [`requestAitSection`](#requestaitsection) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`requestDsmSection`](#requestdsmsection) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`requestTemiInfo`](#requesttemiinfo) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`startDripIFrameData`](#startdripiframedata) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`startStream`](#startstream) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented). |
| [`stopDripIFrameData`](#stopdripiframedata) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`stopDsmSection`](#stopdsmsection) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |
| [`subscribeSectionData`](#subscribesectiondata) | private |  | tv-broadcast | Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented). |

<a id="addsectionfilter"></a>
## `addSectionFilter`

`luna://com.webos.service.legacybroadcast.databroadcast/addSectionFilter`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/addSectionFilter '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="attachstreamevent"></a>
## `attachStreamEvent`

`luna://com.webos.service.legacybroadcast.databroadcast/attachStreamEvent`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/attachStreamEvent '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="createbmldsmccfilter"></a>
## `createBmlDsmccFilter`

`luna://com.webos.service.legacybroadcast.databroadcast/createBmlDsmccFilter`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/createBmlDsmccFilter '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletebmldsmccfilter"></a>
## `deleteBmlDsmccFilter` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.databroadcast/deleteBmlDsmccFilter`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/deleteBmlDsmccFilter '{}'
```

> ACG groups: private, all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getancillarydata"></a>
## `getAncillaryData`

`luna://com.webos.service.legacybroadcast.databroadcast/getAncillaryData`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getAncillaryData '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbootinfo"></a>
## `getBootInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getBootInfo`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getBootInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcastcomponentinfo"></a>
## `getBroadcastComponentInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastComponentInfo`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastComponentInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcastinfobydummy"></a>
## `getBroadcastInfoByDummy`

`luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastInfoByDummy`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastInfoByDummy '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcastinfobymajor"></a>
## `getBroadcastInfoByMajor`

`luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastInfoByMajor`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getBroadcastInfoByMajor '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcaptionstate"></a>
## `getCaptionState`

`luna://com.webos.service.legacybroadcast.databroadcast/getCaptionState`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCaptionState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcaptionstatus"></a>
## `getCaptionStatus`

`luna://com.webos.service.legacybroadcast.databroadcast/getCaptionStatus`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCaptionStatus '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcarouselinfo"></a>
## `getCarouselInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getCarouselInfo`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCarouselInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcarouselinfobyctag"></a>
## `getCarouselInfoByCtag`

`luna://com.webos.service.legacybroadcast.databroadcast/getCarouselInfoByCtag`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCarouselInfoByCtag '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelinfo"></a>
## `getChannelInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getChannelInfo`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getChannelInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getctagbypidsvcid"></a>
## `getCtagByPidSvcid`

`luna://com.webos.service.legacybroadcast.databroadcast/getCtagByPidSvcid`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCtagByPidSvcid '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentbroadcasterinfo"></a>
## `getCurrentBroadcasterInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getCurrentBroadcasterInfo`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCurrentBroadcasterInfo '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentstc"></a>
## `getCurrentStc`

`luna://com.webos.service.legacybroadcast.databroadcast/getCurrentStc`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getCurrentStc '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdeliverysystemdescriptor"></a>
## `getDeliverySystemDescriptor`

`luna://com.webos.service.legacybroadcast.databroadcast/getDeliverySystemDescriptor`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getDeliverySystemDescriptor '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdsmccfile"></a>
## `getDsmccFile`

`luna://com.webos.service.legacybroadcast.databroadcast/getDsmccFile`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getDsmccFile '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdvbribyatag"></a>
## `getDvbRIByAtag`

`luna://com.webos.service.legacybroadcast.databroadcast/getDvbRIByAtag`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getDvbRIByAtag '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteitdescriptor"></a>
## `getEitDescriptor`

`luna://com.webos.service.legacybroadcast.databroadcast/getEitDescriptor`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getEitDescriptor '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlcnbyserviceidentifier"></a>
## `getLcnByServiceIdentifier`

`luna://com.webos.service.legacybroadcast.databroadcast/getLcnByServiceIdentifier`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getLcnByServiceIdentifier '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getnamedpipepath"></a>
## `getNamedPipePath`

`luna://com.webos.service.legacybroadcast.databroadcast/getNamedPipePath`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getNamedPipePath '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpmtsectiontable"></a>
## `getPmtSectionTable`

`luna://com.webos.service.legacybroadcast.databroadcast/getPmtSectionTable`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getPmtSectionTable '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsdtcomponetdescinfo"></a>
## `getSdtComponetDescInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getSdtComponetDescInfo`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getSdtComponetDescInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsdtserviceinfo"></a>
## `getSdtServiceInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getSdtServiceInfo`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getSdtServiceInfo '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getserviceinfo"></a>
## `getServiceInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getServiceInfo`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getServiceInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getserviceoperator"></a>
## `getServiceOperator`

`luna://com.webos.service.legacybroadcast.databroadcast/getServiceOperator`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getServiceOperator '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gettableinfo"></a>
## `getTableInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getTableInfo`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getTableInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvdecafd"></a>
## `getVdecAFD`

`luna://com.webos.service.legacybroadcast.databroadcast/getVdecAFD`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getVdecAFD '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvdecvideoinfo"></a>
## `getVdecVideoInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/getVdecVideoInfo`

Getter on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/getVdecVideoInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifycurrenteit"></a>
## `notifyCurrentEit`

`luna://com.webos.service.legacybroadcast.databroadcast/notifyCurrentEit`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/notifyCurrentEit '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerstreamevent"></a>
## `registerStreamEvent`

`luna://com.webos.service.legacybroadcast.databroadcast/registerStreamEvent`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/registerStreamEvent '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removesectionfilter"></a>
## `removeSectionFilter` ⚠️ DANGEROUS

`luna://com.webos.service.legacybroadcast.databroadcast/removeSectionFilter`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/removeSectionFilter '{}'
```

> ACG groups: private, all, legacybroadcast.service. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestaitsection"></a>
## `requestAitSection`

`luna://com.webos.service.legacybroadcast.databroadcast/requestAitSection`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/requestAitSection '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestdsmsection"></a>
## `requestDsmSection`

`luna://com.webos.service.legacybroadcast.databroadcast/requestDsmSection`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/requestDsmSection '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requesttemiinfo"></a>
## `requestTemiInfo`

`luna://com.webos.service.legacybroadcast.databroadcast/requestTemiInfo`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/requestTemiInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startdripiframedata"></a>
## `startDripIFrameData`

`luna://com.webos.service.legacybroadcast.databroadcast/startDripIFrameData`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/startDripIFrameData '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startstream"></a>
## `startStream`

`luna://com.webos.service.legacybroadcast.databroadcast/startStream`

Method on com.webos.service.legacybroadcast.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/startStream '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stopdripiframedata"></a>
## `stopDripIFrameData`

`luna://com.webos.service.legacybroadcast.databroadcast/stopDripIFrameData`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/stopDripIFrameData '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopdsmsection"></a>
## `stopDsmSection`

`luna://com.webos.service.legacybroadcast.databroadcast/stopDsmSection`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/stopDsmSection '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribesectiondata"></a>
## `subscribeSectionData`

`luna://com.webos.service.legacybroadcast.databroadcast/subscribeSectionData`

Method on com.webos.service.legacybroadcast.databroadcast (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.databroadcast/subscribeSectionData '{}'
```

> ACG groups: private, all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
