# `com.webos.service.drm`

Digital Rights Management service: authenticates the device, acquires and checks content rights, manages certificates and decryption keys, and reports rental and activation status.

31 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`acquireRightsAsync`](#acquirerightsasync) | private |  | security | inferred | Acquires the rights async. |
| [`authenticateDevice`](#authenticatedevice) | public |  | security | inferred | Authenticates the device. |
| [`checkContentDrm`](#checkcontentdrm) | private |  | security | documented | Checks whether content is DRM-protected and by which scheme. (licensed-playback CDM lifecycle.) |
| [`checkRightsAcquired`](#checkrightsacquired) | private |  | security | inferred | Checks the rights acquired. |
| [`deleteDrmStore`](#deletedrmstore) | public |  | security | inferred | Deletes the DRM store. ⚠️ |
| [`deregistrate`](#deregistrate) | public |  | security | inferred | Handles the deregistrate. |
| [`getActivationStatus`](#getactivationstatus) | private |  | security | documented | Reports DRM activation status. (licensed-playback CDM lifecycle.) |
| [`getCertificateInfo`](#getcertificateinfo) | private |  | security | documented | Returns the DRM certificate info. (licensed-playback CDM lifecycle.) |
| [`getCustomData`](#getcustomdata) | private |  | security | inferred | Returns the custom data. |
| [`getDecryptionKey`](#getdecryptionkey) | private |  | security | inferred | Returns the decryption key. |
| [`getDeregistrationInfo`](#getderegistrationinfo) | private |  | security | inferred | Returns the deregistration info. |
| [`getDivXDrmStatus`](#getdivxdrmstatus) | private |  | security | documented | Returns DivX DRM registration status/code. (licensed-playback CDM lifecycle.) |
| [`getDrmMessage`](#getdrmmessage) | private |  | security | documented | Returns a DRM challenge/message for the license server. (licensed-playback CDM lifecycle.) |
| [`getKeyProvisionInfo`](#getkeyprovisioninfo) | private |  | security | inferred | Returns the key provision info. |
| [`getKeyProvisionInfoAsync`](#getkeyprovisioninfoasync) | private |  | security | inferred | Returns the key provision info async. |
| [`getMediaStatus`](#getmediastatus) | private |  | security | documented | Returns the protected-media status. (licensed-playback CDM lifecycle.) |
| [`getRegistrationInfo`](#getregistrationinfo) | private |  | security | documented | Returns device DRM registration info. (licensed-playback CDM lifecycle.) |
| [`getRentalStatus`](#getrentalstatus) | private |  | security | documented | Returns rental/entitlement status for protected content. (licensed-playback CDM lifecycle.) |
| [`getRightsError`](#getrightserror) | public | yes | security | documented | Returns DRM rights error info on license errors during playback. |
| [`getRightsRequestInfo`](#getrightsrequestinfo) | public |  | security | inferred | Returns the rights request info. |
| [`getVerifyUriSignature`](#getverifyurisignature) | public |  | security | inferred | Returns the verify URI signature. |
| [`initializeDrmMemory`](#initializedrmmemory) | private |  | security | inferred | Initializes the DRM memory. |
| [`isLoaded`](#isloaded) | private |  | security | documented | Reports whether the DRM module is loaded. (licensed-playback CDM lifecycle.) |
| [`load`](#load) | private |  | security | documented | Loads the DRM/CDM module. (licensed-playback CDM lifecycle.) |
| [`notifyRightsAcquired`](#notifyrightsacquired) | public |  | security | inferred | Notifies of the rights acquired. |
| [`notifyRightsError`](#notifyrightserror) | private |  | security | inferred | Notifies of the rights error. |
| [`parseCustomData`](#parsecustomdata) | private |  | security | inferred | Parses the custom data. |
| [`requestDaemonService`](#requestdaemonservice) | private |  | security | inferred | Requests the daemon service. |
| [`saveRights`](#saverights) | public |  | security | inferred | Saves the rights. |
| [`sendDrmMessage`](#senddrmmessage) | private |  | security | documented | Sends a DRM message to the license server. (licensed-playback CDM lifecycle.) |
| [`unload`](#unload) | private |  | security | documented | Unloads the DRM module. (licensed-playback CDM lifecycle.) |

<a id="acquirerightsasync"></a>
## `acquireRightsAsync`

`luna://com.webos.service.drm/acquireRightsAsync`

Acquires the rights async.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/acquireRightsAsync '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="authenticatedevice"></a>
## `authenticateDevice`

`luna://com.webos.service.drm/authenticateDevice`

Authenticates the device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/authenticateDevice '{}'
```

> ACG groups: drm.support, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkcontentdrm"></a>
## `checkContentDrm`

`luna://com.webos.service.drm/checkContentDrm`

Checks whether content is DRM-protected and by which scheme. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.drm/checkContentDrm '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback. \|\| ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkrightsacquired"></a>
## `checkRightsAcquired`

`luna://com.webos.service.drm/checkRightsAcquired`

Checks the rights acquired.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/checkRightsAcquired '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletedrmstore"></a>
## `deleteDrmStore` ⚠️ DANGEROUS

`luna://com.webos.service.drm/deleteDrmStore`

Deletes the DRM store.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/deleteDrmStore '{}'
```

> ACG groups: drm.support, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deregistrate"></a>
## `deregistrate`

`luna://com.webos.service.drm/deregistrate`

Handles the deregistrate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/deregistrate '{}'
```

> ACG groups: drm.support, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getactivationstatus"></a>
## `getActivationStatus`

`luna://com.webos.service.drm/getActivationStatus`

Reports DRM activation status. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getActivationStatus '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback. \|\| ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcertificateinfo"></a>
## `getCertificateInfo`

`luna://com.webos.service.drm/getCertificateInfo`

Returns the DRM certificate info. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getCertificateInfo '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback. \|\| ACG groups: drm.info, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcustomdata"></a>
## `getCustomData`

`luna://com.webos.service.drm/getCustomData`

Returns the custom data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getCustomData '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdecryptionkey"></a>
## `getDecryptionKey`

`luna://com.webos.service.drm/getDecryptionKey`

Returns the decryption key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getDecryptionKey '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getderegistrationinfo"></a>
## `getDeregistrationInfo`

`luna://com.webos.service.drm/getDeregistrationInfo`

Returns the deregistration info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getDeregistrationInfo '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdivxdrmstatus"></a>
## `getDivXDrmStatus`

`luna://com.webos.service.drm/getDivXDrmStatus`

Returns DivX DRM registration status/code. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getDivXDrmStatus '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback. \|\| ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getdrmmessage"></a>
## `getDrmMessage`

`luna://com.webos.service.drm/getDrmMessage`

Returns a DRM challenge/message for the license server. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getDrmMessage '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback. \|\| ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getkeyprovisioninfo"></a>
## `getKeyProvisionInfo`

`luna://com.webos.service.drm/getKeyProvisionInfo`

Returns the key provision info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getKeyProvisionInfo '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getkeyprovisioninfoasync"></a>
## `getKeyProvisionInfoAsync`

`luna://com.webos.service.drm/getKeyProvisionInfoAsync`

Returns the key provision info async.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getKeyProvisionInfoAsync '{}'
```

> ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmediastatus"></a>
## `getMediaStatus`

`luna://com.webos.service.drm/getMediaStatus`

Returns the protected-media status. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getMediaStatus '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback. \|\| ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getregistrationinfo"></a>
## `getRegistrationInfo`

`luna://com.webos.service.drm/getRegistrationInfo`

Returns device DRM registration info. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getRegistrationInfo '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback. \|\| ACG groups: drm.info, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrentalstatus"></a>
## `getRentalStatus`

`luna://com.webos.service.drm/getRentalStatus`

Returns rental/entitlement status for protected content. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getRentalStatus '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback. \|\| ACG groups: drm.info, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

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

Returns the rights request info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getRightsRequestInfo '{}'
```

> ACG groups: drm.info, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getverifyurisignature"></a>
## `getVerifyUriSignature`

`luna://com.webos.service.drm/getVerifyUriSignature`

Returns the verify URI signature.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/getVerifyUriSignature '{}'
```

> ACG groups: drm.info, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="initializedrmmemory"></a>
## `initializeDrmMemory`

`luna://com.webos.service.drm/initializeDrmMemory`

Initializes the DRM memory.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/initializeDrmMemory '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="isloaded"></a>
## `isLoaded`

`luna://com.webos.service.drm/isLoaded`

Reports whether the DRM module is loaded. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (optional) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/isLoaded '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://webostv.developer.lge.com/develop/references/drm)

<a id="load"></a>
## `load`

`luna://com.webos.service.drm/load`

Loads the DRM/CDM module. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `drmType` | String (required) e.g. playready |
| `appId` | String (optional) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/load '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://webostv.developer.lge.com/develop/references/drm)

<a id="notifyrightsacquired"></a>
## `notifyRightsAcquired`

`luna://com.webos.service.drm/notifyRightsAcquired`

Notifies of the rights acquired.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/notifyRightsAcquired '{}'
```

> ACG groups: drm.support, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyrightserror"></a>
## `notifyRightsError`

`luna://com.webos.service.drm/notifyRightsError`

Notifies of the rights error.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/notifyRightsError '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="parsecustomdata"></a>
## `parseCustomData`

`luna://com.webos.service.drm/parseCustomData`

Parses the custom data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/parseCustomData '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requestdaemonservice"></a>
## `requestDaemonService`

`luna://com.webos.service.drm/requestDaemonService`

Requests the daemon service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/requestDaemonService '{}'
```

> ACG groups: drm.support, media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="saverights"></a>
## `saveRights`

`luna://com.webos.service.drm/saveRights`

Saves the rights.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.drm/saveRights '{}'
```

> ACG groups: drm.support, media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). DRM service; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="senddrmmessage"></a>
## `sendDrmMessage`

`luna://com.webos.service.drm/sendDrmMessage`

Sends a DRM message to the license server. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) |
| `msgType` | String (required) |
| `msg` | String (required) |
| `drmSystemId` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/sendDrmMessage '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://webostv.developer.lge.com/develop/references/drm)

<a id="unload"></a>
## `unload`

`luna://com.webos.service.drm/unload`

Unloads the DRM module. (licensed-playback CDM lifecycle.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientId` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.drm/unload '{}'
```

> DRM/CDM service. Listed by name and purpose only. This repo does not document how to extract keys, strip protection, or otherwise circumvent DRM. The methods are the normal content-decryption module (CDM) lifecycle used by licensed playback.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://webostv.developer.lge.com/develop/references/drm)
