# `com.webos.service.widevine`

Widevine DRM service: manages the content decryption module (CDM) and sessions, generates license and provisioning requests, reports HDCP status and metrics, and handles key-status changes.

33 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`castSign`](#castsign) | public |  | security | inferred | Handles the cast sign. |
| [`closeSession`](#closesession) | private |  | security | documented | Closes a session. (standard Widevine CDM call.) |
| [`createCdm`](#createcdm) | private |  | security | documented | Creates a Widevine CDM instance. (standard Widevine CDM call.) |
| [`createSession`](#createsession) | private |  | security | documented | Opens a Widevine license session. (standard Widevine CDM call.) |
| [`destroyCdm`](#destroycdm) | private |  | security | documented | Destroys a CDM instance. (standard Widevine CDM call.) |
| [`generateRequest`](#generaterequest) | private |  | security | documented | Generates a license request for the server. (standard Widevine CDM call.) |
| [`getCastProvisioningRequest`](#getcastprovisioningrequest) | public |  | security | inferred | Returns the cast provisioning request. |
| [`getKeyStatusesChange`](#getkeystatuseschange) | public |  | security | inferred | Returns the key statuses change. |
| [`getMessage`](#getmessage) | public |  | security | inferred | Returns the message. |
| [`getMetrics`](#getmetrics) | public |  | input | inferred | Returns the metrics. |
| [`getOecSessionId`](#getoecsessionid) | public |  | security | inferred | Returns the oec session ID. |
| [`getProvisioningRequest`](#getprovisioningrequest) | private |  | security | documented | Returns a provisioning request for the Widevine server. (standard Widevine CDM call.) |
| [`getResourceRatingTier`](#getresourceratingtier) | public |  | security | inferred | Returns the resource rating tier. |
| [`getServiceCertificateRequest`](#getservicecertificaterequest) | public |  | input | inferred | Returns the service certificate request. |
| [`getStatusForHdcpVersion`](#getstatusforhdcpversion) | private |  | security | documented | Reports allowed playback for an HDCP version. (standard Widevine CDM call.) |
| [`getUserAgent`](#getuseragent) | public |  | security | inferred | Returns the user agent. |
| [`getVersion`](#getversion) | private |  | security | documented | Returns the Widevine CDM version. (standard Widevine CDM call.) |
| [`handleCastProvisioningResponse`](#handlecastprovisioningresponse) | public |  | security | inferred | Handles the cast provisioning response. |
| [`handleProvisioningResponse`](#handleprovisioningresponse) | public |  | security | inferred | Handles the provisioning response. |
| [`initDataContainsEmbeddedKeys`](#initdatacontainsembeddedkeys) | public |  | security | inferred | Initializes the data contains embedded keys. |
| [`isExistingLicense`](#isexistinglicense) | public |  | security | inferred | Reports whether the existing license is set. |
| [`isProvisioned`](#isprovisioned) | private |  | security | documented | Reports whether the CDM is provisioned. (standard Widevine CDM call.) |
| [`loadEmbeddedKeys`](#loadembeddedkeys) | public |  | security | inferred | Loads the embedded keys. |
| [`loadSession`](#loadsession) | private |  | security | documented | Loads a persisted session. (standard Widevine CDM call.) |
| [`parseServiceCertificateResponse`](#parseservicecertificateresponse) | public |  | input | inferred | Parses the service certificate response. |
| [`removeComplete`](#removecomplete) | public |  | security | inferred | Removes the complete. ⚠️ |
| [`removeLicense`](#removelicense) | public |  | security | inferred | Removes the license. ⚠️ |
| [`removeSession`](#removesession) | private |  | security | documented | Removes a session. (standard Widevine CDM call.) ⚠️ |
| [`selectKey`](#selectkey) | public |  | security | inferred | Selects the key. |
| [`setAppParameter`](#setappparameter) | public |  | security | inferred | Sets the app parameter. |
| [`setServiceCertificate`](#setservicecertificate) | public |  | input | inferred | Sets the service certificate. |
| [`setVideoResolution`](#setvideoresolution) | private |  | security | documented | Sets the resolution the CDM enforces policy for. (standard Widevine CDM call.) |
| [`updateSession`](#updatesession) | private |  | security | documented | Applies a license response to a session. (standard Widevine CDM call.) |

<a id="castsign"></a>
## `castSign`

`luna://com.webos.service.widevine/castSign`

Handles the cast sign.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/castSign '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="closesession"></a>
## `closeSession`

`luna://com.webos.service.widevine/closeSession`

Closes a session. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/closeSession '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="createcdm"></a>
## `createCdm`

`luna://com.webos.service.widevine/createCdm`

Creates a Widevine CDM instance. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/createCdm '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="createsession"></a>
## `createSession`

`luna://com.webos.service.widevine/createSession`

Opens a Widevine license session. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/createSession '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="destroycdm"></a>
## `destroyCdm`

`luna://com.webos.service.widevine/destroyCdm`

Destroys a CDM instance. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/destroyCdm '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="generaterequest"></a>
## `generateRequest`

`luna://com.webos.service.widevine/generateRequest`

Generates a license request for the server. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/generateRequest '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcastprovisioningrequest"></a>
## `getCastProvisioningRequest`

`luna://com.webos.service.widevine/getCastProvisioningRequest`

Returns the cast provisioning request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getCastProvisioningRequest '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getkeystatuseschange"></a>
## `getKeyStatusesChange`

`luna://com.webos.service.widevine/getKeyStatusesChange`

Returns the key statuses change.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getKeyStatusesChange '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmessage"></a>
## `getMessage`

`luna://com.webos.service.widevine/getMessage`

Returns the message.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getMessage '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmetrics"></a>
## `getMetrics`

`luna://com.webos.service.widevine/getMetrics`

Returns the metrics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getMetrics '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getoecsessionid"></a>
## `getOecSessionId`

`luna://com.webos.service.widevine/getOecSessionId`

Returns the oec session ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getOecSessionId '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getprovisioningrequest"></a>
## `getProvisioningRequest`

`luna://com.webos.service.widevine/getProvisioningRequest`

Returns a provisioning request for the Widevine server. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getProvisioningRequest '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getresourceratingtier"></a>
## `getResourceRatingTier`

`luna://com.webos.service.widevine/getResourceRatingTier`

Returns the resource rating tier.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getResourceRatingTier '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getservicecertificaterequest"></a>
## `getServiceCertificateRequest`

`luna://com.webos.service.widevine/getServiceCertificateRequest`

Returns the service certificate request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getServiceCertificateRequest '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getstatusforhdcpversion"></a>
## `getStatusForHdcpVersion`

`luna://com.webos.service.widevine/getStatusForHdcpVersion`

Reports allowed playback for an HDCP version. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getStatusForHdcpVersion '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getuseragent"></a>
## `getUserAgent`

`luna://com.webos.service.widevine/getUserAgent`

Returns the user agent.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getUserAgent '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getversion"></a>
## `getVersion`

`luna://com.webos.service.widevine/getVersion`

Returns the Widevine CDM version. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/getVersion '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="handlecastprovisioningresponse"></a>
## `handleCastProvisioningResponse`

`luna://com.webos.service.widevine/handleCastProvisioningResponse`

Handles the cast provisioning response.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/handleCastProvisioningResponse '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="handleprovisioningresponse"></a>
## `handleProvisioningResponse`

`luna://com.webos.service.widevine/handleProvisioningResponse`

Handles the provisioning response.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/handleProvisioningResponse '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="initdatacontainsembeddedkeys"></a>
## `initDataContainsEmbeddedKeys`

`luna://com.webos.service.widevine/initDataContainsEmbeddedKeys`

Initializes the data contains embedded keys.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/initDataContainsEmbeddedKeys '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="isexistinglicense"></a>
## `isExistingLicense`

`luna://com.webos.service.widevine/isExistingLicense`

Reports whether the existing license is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/isExistingLicense '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="isprovisioned"></a>
## `isProvisioned`

`luna://com.webos.service.widevine/isProvisioned`

Reports whether the CDM is provisioned. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/isProvisioned '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="loadembeddedkeys"></a>
## `loadEmbeddedKeys`

`luna://com.webos.service.widevine/loadEmbeddedKeys`

Loads the embedded keys.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/loadEmbeddedKeys '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="loadsession"></a>
## `loadSession`

`luna://com.webos.service.widevine/loadSession`

Loads a persisted session. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/loadSession '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="parseservicecertificateresponse"></a>
## `parseServiceCertificateResponse`

`luna://com.webos.service.widevine/parseServiceCertificateResponse`

Parses the service certificate response.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/parseServiceCertificateResponse '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removecomplete"></a>
## `removeComplete` ⚠️ DANGEROUS

`luna://com.webos.service.widevine/removeComplete`

Removes the complete.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/removeComplete '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removelicense"></a>
## `removeLicense` ⚠️ DANGEROUS

`luna://com.webos.service.widevine/removeLicense`

Removes the license.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/removeLicense '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removesession"></a>
## `removeSession` ⚠️ DANGEROUS

`luna://com.webos.service.widevine/removeSession`

Removes a session. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/removeSession '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details. Flagged dangerous by name; verify before calling.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="selectkey"></a>
## `selectKey`

`luna://com.webos.service.widevine/selectKey`

Selects the key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/selectKey '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setappparameter"></a>
## `setAppParameter`

`luna://com.webos.service.widevine/setAppParameter`

Sets the app parameter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/setAppParameter '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setservicecertificate"></a>
## `setServiceCertificate`

`luna://com.webos.service.widevine/setServiceCertificate`

Sets the service certificate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/setServiceCertificate '{}'
```

> ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setvideoresolution"></a>
## `setVideoResolution`

`luna://com.webos.service.widevine/setVideoResolution`

Sets the resolution the CDM enforces policy for. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/setVideoResolution '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatesession"></a>
## `updateSession`

`luna://com.webos.service.widevine/updateSession`

Applies a license response to a session. (standard Widevine CDM call.)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.widevine/updateSession '{}'
```

> Widevine CDM service. Listed by name and purpose only; no key-extraction or protection-bypass details. These are the standard Widevine CDM/session calls used by licensed playback. \|\| ACG groups: com.webos.service.widevine, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Widevine DRM module; name only, no circumvention details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
