# `com.webos.service.widevine`

33 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`castSign`](#castsign) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`closeSession`](#closesession) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`createCdm`](#createcdm) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`createSession`](#createsession) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`destroyCdm`](#destroycdm) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`generateRequest`](#generaterequest) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`getCastProvisioningRequest`](#getcastprovisioningrequest) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`getKeyStatusesChange`](#getkeystatuseschange) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`getMessage`](#getmessage) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`getMetrics`](#getmetrics) | public |  | input | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`getOecSessionId`](#getoecsessionid) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`getProvisioningRequest`](#getprovisioningrequest) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`getResourceRatingTier`](#getresourceratingtier) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`getServiceCertificateRequest`](#getservicecertificaterequest) | public |  | input | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`getStatusForHdcpVersion`](#getstatusforhdcpversion) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`getUserAgent`](#getuseragent) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`getVersion`](#getversion) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`handleCastProvisioningResponse`](#handlecastprovisioningresponse) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`handleProvisioningResponse`](#handleprovisioningresponse) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`initDataContainsEmbeddedKeys`](#initdatacontainsembeddedkeys) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`isExistingLicense`](#isexistinglicense) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`isProvisioned`](#isprovisioned) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`loadEmbeddedKeys`](#loadembeddedkeys) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`loadSession`](#loadsession) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`parseServiceCertificateResponse`](#parseservicecertificateresponse) | public |  | input | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`removeComplete`](#removecomplete) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). ⚠️ |
| [`removeLicense`](#removelicense) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). ⚠️ |
| [`removeSession`](#removesession) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). ⚠️ |
| [`selectKey`](#selectkey) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`setAppParameter`](#setappparameter) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`setServiceCertificate`](#setservicecertificate) | public |  | input | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`setVideoResolution`](#setvideoresolution) | public |  | security | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |
| [`updateSession`](#updatesession) | public |  | update | Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented). |

<a id="castsign"></a>
## `castSign`

`luna://com.webos.service.widevine/castSign`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/castSign '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="closesession"></a>
## `closeSession`

`luna://com.webos.service.widevine/closeSession`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/closeSession '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="createcdm"></a>
## `createCdm`

`luna://com.webos.service.widevine/createCdm`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/createCdm '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="createsession"></a>
## `createSession`

`luna://com.webos.service.widevine/createSession`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/createSession '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="destroycdm"></a>
## `destroyCdm`

`luna://com.webos.service.widevine/destroyCdm`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/destroyCdm '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="generaterequest"></a>
## `generateRequest`

`luna://com.webos.service.widevine/generateRequest`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/generateRequest '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcastprovisioningrequest"></a>
## `getCastProvisioningRequest`

`luna://com.webos.service.widevine/getCastProvisioningRequest`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getCastProvisioningRequest '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getkeystatuseschange"></a>
## `getKeyStatusesChange`

`luna://com.webos.service.widevine/getKeyStatusesChange`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getKeyStatusesChange '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmessage"></a>
## `getMessage`

`luna://com.webos.service.widevine/getMessage`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getMessage '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmetrics"></a>
## `getMetrics`

`luna://com.webos.service.widevine/getMetrics`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getMetrics '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getoecsessionid"></a>
## `getOecSessionId`

`luna://com.webos.service.widevine/getOecSessionId`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getOecSessionId '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getprovisioningrequest"></a>
## `getProvisioningRequest`

`luna://com.webos.service.widevine/getProvisioningRequest`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getProvisioningRequest '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getresourceratingtier"></a>
## `getResourceRatingTier`

`luna://com.webos.service.widevine/getResourceRatingTier`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getResourceRatingTier '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getservicecertificaterequest"></a>
## `getServiceCertificateRequest`

`luna://com.webos.service.widevine/getServiceCertificateRequest`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getServiceCertificateRequest '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getstatusforhdcpversion"></a>
## `getStatusForHdcpVersion`

`luna://com.webos.service.widevine/getStatusForHdcpVersion`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getStatusForHdcpVersion '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getuseragent"></a>
## `getUserAgent`

`luna://com.webos.service.widevine/getUserAgent`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getUserAgent '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getversion"></a>
## `getVersion`

`luna://com.webos.service.widevine/getVersion`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getVersion '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="handlecastprovisioningresponse"></a>
## `handleCastProvisioningResponse`

`luna://com.webos.service.widevine/handleCastProvisioningResponse`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/handleCastProvisioningResponse '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="handleprovisioningresponse"></a>
## `handleProvisioningResponse`

`luna://com.webos.service.widevine/handleProvisioningResponse`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/handleProvisioningResponse '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="initdatacontainsembeddedkeys"></a>
## `initDataContainsEmbeddedKeys`

`luna://com.webos.service.widevine/initDataContainsEmbeddedKeys`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/initDataContainsEmbeddedKeys '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="isexistinglicense"></a>
## `isExistingLicense`

`luna://com.webos.service.widevine/isExistingLicense`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/isExistingLicense '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="isprovisioned"></a>
## `isProvisioned`

`luna://com.webos.service.widevine/isProvisioned`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/isProvisioned '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="loadembeddedkeys"></a>
## `loadEmbeddedKeys`

`luna://com.webos.service.widevine/loadEmbeddedKeys`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/loadEmbeddedKeys '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="loadsession"></a>
## `loadSession`

`luna://com.webos.service.widevine/loadSession`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/loadSession '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="parseservicecertificateresponse"></a>
## `parseServiceCertificateResponse`

`luna://com.webos.service.widevine/parseServiceCertificateResponse`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/parseServiceCertificateResponse '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removecomplete"></a>
## `removeComplete` ⚠️ DANGEROUS

`luna://com.webos.service.widevine/removeComplete`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/removeComplete '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removelicense"></a>
## `removeLicense` ⚠️ DANGEROUS

`luna://com.webos.service.widevine/removeLicense`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/removeLicense '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removesession"></a>
## `removeSession` ⚠️ DANGEROUS

`luna://com.webos.service.widevine/removeSession`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/removeSession '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="selectkey"></a>
## `selectKey`

`luna://com.webos.service.widevine/selectKey`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/selectKey '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setappparameter"></a>
## `setAppParameter`

`luna://com.webos.service.widevine/setAppParameter`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/setAppParameter '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setservicecertificate"></a>
## `setServiceCertificate`

`luna://com.webos.service.widevine/setServiceCertificate`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/setServiceCertificate '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setvideoresolution"></a>
## `setVideoResolution`

`luna://com.webos.service.widevine/setVideoResolution`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/setVideoResolution '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatesession"></a>
## `updateSession`

`luna://com.webos.service.widevine/updateSession`

Method on com.webos.service.widevine (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/updateSession '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
