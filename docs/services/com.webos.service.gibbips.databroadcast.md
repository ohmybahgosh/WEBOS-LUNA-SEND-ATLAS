# `com.webos.service.gibbips.databroadcast`

27 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cacheRequest`](#cacherequest) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`cacheRequestDASH`](#cacherequestdash) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`cacheUsage`](#cacheusage) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`clearFilterCode`](#clearfiltercode) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`convertId`](#convertid) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getAlertInfo`](#getalertinfo) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getCurrentEPGInfo`](#getcurrentepginfo) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getCurrentServiceInfo`](#getcurrentserviceinfo) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getDrmEncrypted`](#getdrmencrypted) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getDrmOperationResult`](#getdrmoperationresult) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getEventStreamInfo`](#geteventstreaminfo) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getInteractiveData`](#getinteractivedata) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getRmpPlaybackState`](#getrmpplaybackstate) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getRMPWallClockTime`](#getrmpwallclocktime) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getSignalingInfo`](#getsignalinginfo) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getXlinkResolution`](#getxlinkresolution) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`getXlinkResolutionResult`](#getxlinkresolutionresult) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`launchFvx`](#launchfvx) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`markUnused`](#markunused) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`notifySignalingDataChanged`](#notifysignalingdatachanged) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`requestNRT`](#requestnrt) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`setCurrentAppContextId`](#setcurrentappcontextid) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`setDrmOperation`](#setdrmoperation) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`setFilterCode`](#setfiltercode) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`setRMPURL`](#setrmpurl) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`setXlinkResolution`](#setxlinkresolution) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |
| [`subtitleDisplayPreference`](#subtitledisplaypreference) | private |  | tv-broadcast | Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented). |

<a id="cacherequest"></a>
## `cacheRequest`

`luna://com.webos.service.gibbips.databroadcast/cacheRequest`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/cacheRequest '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="cacherequestdash"></a>
## `cacheRequestDASH`

`luna://com.webos.service.gibbips.databroadcast/cacheRequestDASH`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/cacheRequestDASH '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="cacheusage"></a>
## `cacheUsage`

`luna://com.webos.service.gibbips.databroadcast/cacheUsage`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/cacheUsage '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="clearfiltercode"></a>
## `clearFilterCode`

`luna://com.webos.service.gibbips.databroadcast/clearFilterCode`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/clearFilterCode '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="convertid"></a>
## `convertId`

`luna://com.webos.service.gibbips.databroadcast/convertId`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/convertId '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getalertinfo"></a>
## `getAlertInfo`

`luna://com.webos.service.gibbips.databroadcast/getAlertInfo`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getAlertInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentepginfo"></a>
## `getCurrentEPGInfo`

`luna://com.webos.service.gibbips.databroadcast/getCurrentEPGInfo`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getCurrentEPGInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentserviceinfo"></a>
## `getCurrentServiceInfo`

`luna://com.webos.service.gibbips.databroadcast/getCurrentServiceInfo`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getCurrentServiceInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdrmencrypted"></a>
## `getDrmEncrypted`

`luna://com.webos.service.gibbips.databroadcast/getDrmEncrypted`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getDrmEncrypted '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdrmoperationresult"></a>
## `getDrmOperationResult`

`luna://com.webos.service.gibbips.databroadcast/getDrmOperationResult`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getDrmOperationResult '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="geteventstreaminfo"></a>
## `getEventStreamInfo`

`luna://com.webos.service.gibbips.databroadcast/getEventStreamInfo`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getEventStreamInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getinteractivedata"></a>
## `getInteractiveData`

`luna://com.webos.service.gibbips.databroadcast/getInteractiveData`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getInteractiveData '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrmpplaybackstate"></a>
## `getRmpPlaybackState`

`luna://com.webos.service.gibbips.databroadcast/getRmpPlaybackState`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getRmpPlaybackState '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrmpwallclocktime"></a>
## `getRMPWallClockTime`

`luna://com.webos.service.gibbips.databroadcast/getRMPWallClockTime`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getRMPWallClockTime '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsignalinginfo"></a>
## `getSignalingInfo`

`luna://com.webos.service.gibbips.databroadcast/getSignalingInfo`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getSignalingInfo '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getxlinkresolution"></a>
## `getXlinkResolution`

`luna://com.webos.service.gibbips.databroadcast/getXlinkResolution`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getXlinkResolution '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getxlinkresolutionresult"></a>
## `getXlinkResolutionResult`

`luna://com.webos.service.gibbips.databroadcast/getXlinkResolutionResult`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/getXlinkResolutionResult '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchfvx"></a>
## `launchFvx`

`luna://com.webos.service.gibbips.databroadcast/launchFvx`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/launchFvx '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="markunused"></a>
## `markUnused`

`luna://com.webos.service.gibbips.databroadcast/markUnused`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/markUnused '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifysignalingdatachanged"></a>
## `notifySignalingDataChanged`

`luna://com.webos.service.gibbips.databroadcast/notifySignalingDataChanged`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/notifySignalingDataChanged '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requestnrt"></a>
## `requestNRT`

`luna://com.webos.service.gibbips.databroadcast/requestNRT`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/requestNRT '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setcurrentappcontextid"></a>
## `setCurrentAppContextId`

`luna://com.webos.service.gibbips.databroadcast/setCurrentAppContextId`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/setCurrentAppContextId '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdrmoperation"></a>
## `setDrmOperation`

`luna://com.webos.service.gibbips.databroadcast/setDrmOperation`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/setDrmOperation '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setfiltercode"></a>
## `setFilterCode`

`luna://com.webos.service.gibbips.databroadcast/setFilterCode`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/setFilterCode '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setrmpurl"></a>
## `setRMPURL`

`luna://com.webos.service.gibbips.databroadcast/setRMPURL`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/setRMPURL '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setxlinkresolution"></a>
## `setXlinkResolution`

`luna://com.webos.service.gibbips.databroadcast/setXlinkResolution`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/setXlinkResolution '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subtitledisplaypreference"></a>
## `subtitleDisplayPreference`

`luna://com.webos.service.gibbips.databroadcast/subtitleDisplayPreference`

Method on com.webos.service.gibbips.databroadcast (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbips.databroadcast/subtitleDisplayPreference '{}'
```

> ACG groups: gibbips.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
