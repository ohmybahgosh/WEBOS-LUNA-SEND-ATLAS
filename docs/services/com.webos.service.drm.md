# `com.webos.service.drm`

31 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`acquireRightsAsync`](#acquirerightsasync) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`authenticateDevice`](#authenticatedevice) | public |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`checkContentDrm`](#checkcontentdrm) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`checkRightsAcquired`](#checkrightsacquired) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`deleteDrmStore`](#deletedrmstore) | public |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). ⚠️ |
| [`deregistrate`](#deregistrate) | public |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getActivationStatus`](#getactivationstatus) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getCertificateInfo`](#getcertificateinfo) | public |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getCustomData`](#getcustomdata) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getDecryptionKey`](#getdecryptionkey) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getDeregistrationInfo`](#getderegistrationinfo) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getDivXDrmStatus`](#getdivxdrmstatus) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getDrmMessage`](#getdrmmessage) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getKeyProvisionInfo`](#getkeyprovisioninfo) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getKeyProvisionInfoAsync`](#getkeyprovisioninfoasync) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getMediaStatus`](#getmediastatus) | private |  | media | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getRegistrationInfo`](#getregistrationinfo) | public |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getRentalStatus`](#getrentalstatus) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getRightsError`](#getrightserror) | public | yes | security | Returns DRM rights error info on license errors during playback. |
| [`getRightsRequestInfo`](#getrightsrequestinfo) | public |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`getVerifyUriSignature`](#getverifyurisignature) | public |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`initializeDrmMemory`](#initializedrmmemory) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`isLoaded`](#isloaded) | public |  | security | Checks whether a DRM client exists for an app ID. |
| [`load`](#load) | public |  | security | Creates a DRM client instance for the type. |
| [`notifyRightsAcquired`](#notifyrightsacquired) | public |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`notifyRightsError`](#notifyrightserror) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`parseCustomData`](#parsecustomdata) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`requestDaemonService`](#requestdaemonservice) | private |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`saveRights`](#saverights) | public |  | security | Method on com.webos.service.drm (from on-device permission registry; parameters undocumented). |
| [`sendDrmMessage`](#senddrmmessage) | public |  | security | Sends a DRM message to the DRM service. |
| [`unload`](#unload) | public |  | security | Removes a DRM client instance. |

<a id="acquirerightsasync"></a>
## `acquireRightsAsync`

`luna://com.webos.service.drm/acquireRightsAsync`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/acquireRightsAsync '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="authenticatedevice"></a>
## `authenticateDevice`

`luna://com.webos.service.drm/authenticateDevice`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/authenticateDevice '{}'
```

> ACG groups: drm.support, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkcontentdrm"></a>
## `checkContentDrm`

`luna://com.webos.service.drm/checkContentDrm`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/checkContentDrm '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkrightsacquired"></a>
## `checkRightsAcquired`

`luna://com.webos.service.drm/checkRightsAcquired`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/checkRightsAcquired '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletedrmstore"></a>
## `deleteDrmStore` ⚠️ DANGEROUS

`luna://com.webos.service.drm/deleteDrmStore`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/deleteDrmStore '{}'
```

> ACG groups: drm.support, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deregistrate"></a>
## `deregistrate`

`luna://com.webos.service.drm/deregistrate`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/deregistrate '{}'
```

> ACG groups: drm.support, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getactivationstatus"></a>
## `getActivationStatus`

`luna://com.webos.service.drm/getActivationStatus`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getActivationStatus '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcertificateinfo"></a>
## `getCertificateInfo`

`luna://com.webos.service.drm/getCertificateInfo`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getCertificateInfo '{}'
```

> ACG groups: drm.info, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcustomdata"></a>
## `getCustomData`

`luna://com.webos.service.drm/getCustomData`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getCustomData '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdecryptionkey"></a>
## `getDecryptionKey`

`luna://com.webos.service.drm/getDecryptionKey`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getDecryptionKey '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getderegistrationinfo"></a>
## `getDeregistrationInfo`

`luna://com.webos.service.drm/getDeregistrationInfo`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getDeregistrationInfo '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdivxdrmstatus"></a>
## `getDivXDrmStatus`

`luna://com.webos.service.drm/getDivXDrmStatus`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getDivXDrmStatus '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdrmmessage"></a>
## `getDrmMessage`

`luna://com.webos.service.drm/getDrmMessage`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getDrmMessage '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getkeyprovisioninfo"></a>
## `getKeyProvisionInfo`

`luna://com.webos.service.drm/getKeyProvisionInfo`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getKeyProvisionInfo '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getkeyprovisioninfoasync"></a>
## `getKeyProvisionInfoAsync`

`luna://com.webos.service.drm/getKeyProvisionInfoAsync`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getKeyProvisionInfoAsync '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmediastatus"></a>
## `getMediaStatus`

`luna://com.webos.service.drm/getMediaStatus`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getMediaStatus '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getregistrationinfo"></a>
## `getRegistrationInfo`

`luna://com.webos.service.drm/getRegistrationInfo`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getRegistrationInfo '{}'
```

> ACG groups: drm.info, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrentalstatus"></a>
## `getRentalStatus`

`luna://com.webos.service.drm/getRentalStatus`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getRentalStatus '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrightserror"></a>
## `getRightsError`

`luna://com.webos.service.drm/getRightsError`

Returns DRM rights error info on license errors during playback.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) |
| `subscribe` | Boolean (required) |

```sh
luna-send -i -f luna://com.webos.service.drm/getRightsError '{"clientId":"LE3bZyIZzY","subscribe":true}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/drm)

<a id="getrightsrequestinfo"></a>
## `getRightsRequestInfo`

`luna://com.webos.service.drm/getRightsRequestInfo`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getRightsRequestInfo '{}'
```

> ACG groups: drm.info, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getverifyurisignature"></a>
## `getVerifyUriSignature`

`luna://com.webos.service.drm/getVerifyUriSignature`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getVerifyUriSignature '{}'
```

> ACG groups: drm.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="initializedrmmemory"></a>
## `initializeDrmMemory`

`luna://com.webos.service.drm/initializeDrmMemory`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/initializeDrmMemory '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="isloaded"></a>
## `isLoaded`

`luna://com.webos.service.drm/isLoaded`

Checks whether a DRM client exists for an app ID.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (optional) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/isLoaded '{"appId":"com.yourdomain.yourapp"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/drm)

<a id="load"></a>
## `load`

`luna://com.webos.service.drm/load`

Creates a DRM client instance for the type.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `drmType` | String (required) e.g. playready |
| `appId` | String (optional) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/load '{"drmType":"playready","appId":"com.yourdomain.yourapp"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/drm)

<a id="notifyrightsacquired"></a>
## `notifyRightsAcquired`

`luna://com.webos.service.drm/notifyRightsAcquired`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/notifyRightsAcquired '{}'
```

> ACG groups: drm.support, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyrightserror"></a>
## `notifyRightsError`

`luna://com.webos.service.drm/notifyRightsError`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/notifyRightsError '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="parsecustomdata"></a>
## `parseCustomData`

`luna://com.webos.service.drm/parseCustomData`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/parseCustomData '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requestdaemonservice"></a>
## `requestDaemonService`

`luna://com.webos.service.drm/requestDaemonService`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/requestDaemonService '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="saverights"></a>
## `saveRights`

`luna://com.webos.service.drm/saveRights`

Method on com.webos.service.drm (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.drm/saveRights '{}'
```

> ACG groups: drm.support, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="senddrmmessage"></a>
## `sendDrmMessage`

`luna://com.webos.service.drm/sendDrmMessage`

Sends a DRM message to the DRM service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) |
| `msgType` | String (required) |
| `msg` | String (required) |
| `drmSystemId` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/sendDrmMessage '{"clientId":"LE3bZyIZzY","msgType":"application/vnd.ms-playready.initiator+xml","msg":"<PlayReadyInitiator/>","drmSystemId":"urn:dvb:casystemid:19219"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/drm)

<a id="unload"></a>
## `unload`

`luna://com.webos.service.drm/unload`

Removes a DRM client instance.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/unload '{"clientId":"LE3bZyIZzY"}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/drm)
