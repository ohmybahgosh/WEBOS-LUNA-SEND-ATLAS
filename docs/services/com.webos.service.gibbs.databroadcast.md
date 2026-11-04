# `com.webos.service.gibbs.databroadcast`

26 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cacheRequest`](#cacherequest) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`cacheRequestDASH`](#cacherequestdash) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`cacheUsage`](#cacheusage) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`clearFilterCode`](#clearfiltercode) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`convertId`](#convertid) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getAlertInfo`](#getalertinfo) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getCurrentEPGInfo`](#getcurrentepginfo) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getCurrentServiceInfo`](#getcurrentserviceinfo) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getDrmEncrypted`](#getdrmencrypted) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getDrmOperationResult`](#getdrmoperationresult) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getEventStreamInfo`](#geteventstreaminfo) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getInteractiveData`](#getinteractivedata) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getRmpPlaybackState`](#getrmpplaybackstate) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getRMPWallClockTime`](#getrmpwallclocktime) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getSignalingInfo`](#getsignalinginfo) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getXlinkResolution`](#getxlinkresolution) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getXlinkResolutionResult`](#getxlinkresolutionresult) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`markUnused`](#markunused) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`notifySignalingDataChanged`](#notifysignalingdatachanged) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`requestNRT`](#requestnrt) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`setCurrentAppContextId`](#setcurrentappcontextid) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`setDrmOperation`](#setdrmoperation) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`setFilterCode`](#setfiltercode) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`setRMPURL`](#setrmpurl) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`setXlinkResolution`](#setxlinkresolution) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |
| [`subtitleDisplayPreference`](#subtitledisplaypreference) | private |  | tv-broadcast | Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented). |

<a id="cacherequest"></a>
## `cacheRequest`

`luna://com.webos.service.gibbs.databroadcast/cacheRequest`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/cacheRequest '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="cacherequestdash"></a>
## `cacheRequestDASH`

`luna://com.webos.service.gibbs.databroadcast/cacheRequestDASH`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/cacheRequestDASH '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="cacheusage"></a>
## `cacheUsage`

`luna://com.webos.service.gibbs.databroadcast/cacheUsage`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/cacheUsage '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="clearfiltercode"></a>
## `clearFilterCode`

`luna://com.webos.service.gibbs.databroadcast/clearFilterCode`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/clearFilterCode '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="convertid"></a>
## `convertId`

`luna://com.webos.service.gibbs.databroadcast/convertId`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/convertId '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getalertinfo"></a>
## `getAlertInfo`

`luna://com.webos.service.gibbs.databroadcast/getAlertInfo`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getAlertInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentepginfo"></a>
## `getCurrentEPGInfo`

`luna://com.webos.service.gibbs.databroadcast/getCurrentEPGInfo`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getCurrentEPGInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentserviceinfo"></a>
## `getCurrentServiceInfo`

`luna://com.webos.service.gibbs.databroadcast/getCurrentServiceInfo`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getCurrentServiceInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdrmencrypted"></a>
## `getDrmEncrypted`

`luna://com.webos.service.gibbs.databroadcast/getDrmEncrypted`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getDrmEncrypted '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdrmoperationresult"></a>
## `getDrmOperationResult`

`luna://com.webos.service.gibbs.databroadcast/getDrmOperationResult`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getDrmOperationResult '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="geteventstreaminfo"></a>
## `getEventStreamInfo`

`luna://com.webos.service.gibbs.databroadcast/getEventStreamInfo`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getEventStreamInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getinteractivedata"></a>
## `getInteractiveData`

`luna://com.webos.service.gibbs.databroadcast/getInteractiveData`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getInteractiveData '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrmpplaybackstate"></a>
## `getRmpPlaybackState`

`luna://com.webos.service.gibbs.databroadcast/getRmpPlaybackState`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getRmpPlaybackState '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrmpwallclocktime"></a>
## `getRMPWallClockTime`

`luna://com.webos.service.gibbs.databroadcast/getRMPWallClockTime`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getRMPWallClockTime '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignalinginfo"></a>
## `getSignalingInfo`

`luna://com.webos.service.gibbs.databroadcast/getSignalingInfo`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getSignalingInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getxlinkresolution"></a>
## `getXlinkResolution`

`luna://com.webos.service.gibbs.databroadcast/getXlinkResolution`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getXlinkResolution '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getxlinkresolutionresult"></a>
## `getXlinkResolutionResult`

`luna://com.webos.service.gibbs.databroadcast/getXlinkResolutionResult`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/getXlinkResolutionResult '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="markunused"></a>
## `markUnused`

`luna://com.webos.service.gibbs.databroadcast/markUnused`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/markUnused '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifysignalingdatachanged"></a>
## `notifySignalingDataChanged`

`luna://com.webos.service.gibbs.databroadcast/notifySignalingDataChanged`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/notifySignalingDataChanged '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requestnrt"></a>
## `requestNRT`

`luna://com.webos.service.gibbs.databroadcast/requestNRT`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/requestNRT '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setcurrentappcontextid"></a>
## `setCurrentAppContextId`

`luna://com.webos.service.gibbs.databroadcast/setCurrentAppContextId`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/setCurrentAppContextId '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdrmoperation"></a>
## `setDrmOperation`

`luna://com.webos.service.gibbs.databroadcast/setDrmOperation`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/setDrmOperation '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setfiltercode"></a>
## `setFilterCode`

`luna://com.webos.service.gibbs.databroadcast/setFilterCode`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/setFilterCode '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setrmpurl"></a>
## `setRMPURL`

`luna://com.webos.service.gibbs.databroadcast/setRMPURL`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/setRMPURL '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setxlinkresolution"></a>
## `setXlinkResolution`

`luna://com.webos.service.gibbs.databroadcast/setXlinkResolution`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/setXlinkResolution '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subtitledisplaypreference"></a>
## `subtitleDisplayPreference`

`luna://com.webos.service.gibbs.databroadcast/subtitleDisplayPreference`

Method on com.webos.service.gibbs.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.databroadcast/subtitleDisplayPreference '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
