# `com.webos.service.sm`

Security manager: handles app security permissions, USB-access authentication, device IDs, licensing, and cryptographic operations (file decryption, digital signing, key handling). _(inferred from the service's methods)_

34 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`accessusb/getStatus`](#accessusb_getstatus) | private |  | system-info | inferred | Returns the status (accessusb) |
| [`accessusb/requestAuthentication`](#accessusb_requestauthentication) | private |  | system-info | inferred | Requests the authentication (accessusb) |
| [`appsec/configAppPermissions`](#appsec_configapppermissions) | private |  | settings | inferred | Handles the config app permissions (appsec) |
| [`crypto/checkSeStore`](#crypto_checksestore) | private |  | system-info | inferred | Checks the se store (crypto) |
| [`crypto/commerDecryptFileWithPrvKey`](#crypto_commerdecryptfilewithprvkey) | private |  | system-info | inferred | Handles the commer decrypt file with prv key (crypto) |
| [`crypto/commerGetCertDataFromSDPFile`](#crypto_commergetcertdatafromsdpfile) | private |  | system-info | inferred | Handles the commer get cert data from SDP file (crypto) |
| [`crypto/commerGetKeyFile`](#crypto_commergetkeyfile) | private |  | system-info | inferred | Handles the commer get key file (crypto) |
| [`crypto/commerGetSecretFromSDPFile`](#crypto_commergetsecretfromsdpfile) | private |  | system-info | inferred | Handles the commer get secret from SDP file (crypto) |
| [`crypto/decryptFile`](#crypto_decryptfile) | private |  | system-info | inferred | Decrypts the file (crypto) |
| [`crypto/decryptPkeyFile`](#crypto_decryptpkeyfile) | private |  | system-info | inferred | Decrypts the pkey file (crypto) |
| [`crypto/decryptSdpFile`](#crypto_decryptsdpfile) | private |  | system-info | inferred | Decrypts the sdp file (crypto) |
| [`crypto/doDigitalSign`](#crypto_dodigitalsign) | public |  | system-info | inferred | Handles the do digital sign (crypto) |
| [`crypto/getKbsCipher`](#crypto_getkbscipher) | public |  | system-info | inferred | Returns the kbs cipher (crypto) |
| [`crypto/getSSGSSL`](#crypto_getssgssl) | private |  | system-info | inferred | Returns the SSGSSL (crypto) |
| [`deviceid/getIDList`](#deviceid_getidlist) | public |  | system-info | inferred | Returns the ID list (deviceid) |
| [`deviceid/getIDs`](#deviceid_getids) | public |  | security | documented | Returns device IDs provided by webOS TV (LGUDID). |
| [`getStatusVerifyPartitionByDFT`](#getstatusverifypartitionbydft) | private |  | system-info | inferred | Returns the status verify partition by DFT. |
| [`license/apps/getDbPath`](#license_apps_getdbpath) | private |  | db | inferred | Returns the db path (license apps) |
| [`license/apps/getDrmStatus`](#license_apps_getdrmstatus) | private |  | security | inferred | Returns the DRM status (license apps) |
| [`license/apps/getSdpTime`](#license_apps_getsdptime) | private |  | input | inferred | Returns the sdp time (license apps) |
| [`license/apps/installRights`](#license_apps_installrights) | private |  | system-info | inferred | Installs the rights (license apps) |
| [`license/apps/uninstallRights`](#license_apps_uninstallrights) | private |  | system-info | inferred | Uninstalls the rights (license apps) |
| [`pin/change`](#pin_change) | private |  | system-info | inferred | Changes the sm (pin) |
| [`pin/store`](#pin_store) | private |  | system-info | inferred | Stores the sm (pin) |
| [`pin/verify`](#pin_verify) | private |  | system-info | inferred | Verifies the sm (pin) |
| [`sa/getPaypalMsg`](#sa_getpaypalmsg) | public |  | system-info | inferred | Returns the paypal msg (sa) |
| [`sdi/getAuthToken`](#sdi_getauthtoken) | public |  | system-info | inferred | Returns the auth token (sdi) |
| [`signApp`](#signapp) | private |  | system-info | inferred | Signs the app. |
| [`tauth/getAuthToken`](#tauth_getauthtoken) | public |  | system-info | inferred | Returns the auth token (tauth) |
| [`verifyAppSigning`](#verifyappsigning) | private |  | system-info | inferred | Verifies the app signing. |
| [`verifyPartitionByDFT`](#verifypartitionbydft) | private |  | system-info | inferred | Verifies the partition by DFT. |
| [`verifyPartitionByFragment`](#verifypartitionbyfragment) | private |  | system-info | inferred | Verifies the partition by fragment. |
| [`verifyPartitionByOffset`](#verifypartitionbyoffset) | private |  | system-info | inferred | Verifies the partition by offset. |
| [`verifyPartitions`](#verifypartitions) | private |  | system-info | inferred | Verifies the partitions. |

<a id="accessusb_getstatus"></a>
## `accessusb/getStatus`

`luna://com.webos.service.sm/accessusb/getStatus`

Returns the status (accessusb)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/accessusb/getStatus '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="accessusb_requestauthentication"></a>
## `accessusb/requestAuthentication`

`luna://com.webos.service.sm/accessusb/requestAuthentication`

Requests the authentication (accessusb)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/accessusb/requestAuthentication '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="appsec_configapppermissions"></a>
## `appsec/configAppPermissions`

`luna://com.webos.service.sm/appsec/configAppPermissions`

Handles the config app permissions (appsec)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/appsec/configAppPermissions '{}'
```

> ACG groups: private, security, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_checksestore"></a>
## `crypto/checkSeStore`

`luna://com.webos.service.sm/crypto/checkSeStore`

Checks the se store (crypto)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/checkSeStore '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="crypto_commerdecryptfilewithprvkey"></a>
## `crypto/commerDecryptFileWithPrvKey`

`luna://com.webos.service.sm/crypto/commerDecryptFileWithPrvKey`

Handles the commer decrypt file with prv key (crypto)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/commerDecryptFileWithPrvKey '{}'
```

> ACG groups: private, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_commergetcertdatafromsdpfile"></a>
## `crypto/commerGetCertDataFromSDPFile`

`luna://com.webos.service.sm/crypto/commerGetCertDataFromSDPFile`

Handles the commer get cert data from SDP file (crypto)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/commerGetCertDataFromSDPFile '{}'
```

> ACG groups: private, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_commergetkeyfile"></a>
## `crypto/commerGetKeyFile`

`luna://com.webos.service.sm/crypto/commerGetKeyFile`

Handles the commer get key file (crypto)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/commerGetKeyFile '{}'
```

> ACG groups: private, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_commergetsecretfromsdpfile"></a>
## `crypto/commerGetSecretFromSDPFile`

`luna://com.webos.service.sm/crypto/commerGetSecretFromSDPFile`

Handles the commer get secret from SDP file (crypto)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/commerGetSecretFromSDPFile '{}'
```

> ACG groups: private, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_decryptfile"></a>
## `crypto/decryptFile`

`luna://com.webos.service.sm/crypto/decryptFile`

Decrypts the file (crypto)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/decryptFile '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="crypto_decryptpkeyfile"></a>
## `crypto/decryptPkeyFile`

`luna://com.webos.service.sm/crypto/decryptPkeyFile`

Decrypts the pkey file (crypto)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/decryptPkeyFile '{}'
```

> ACG groups: private, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_decryptsdpfile"></a>
## `crypto/decryptSdpFile`

`luna://com.webos.service.sm/crypto/decryptSdpFile`

Decrypts the sdp file (crypto)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/decryptSdpFile '{}'
```

> ACG groups: private, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="crypto_dodigitalsign"></a>
## `crypto/doDigitalSign`

`luna://com.webos.service.sm/crypto/doDigitalSign`

Handles the do digital sign (crypto)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/doDigitalSign '{}'
```

> ACG groups: private, sm.security, security, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="crypto_getkbscipher"></a>
## `crypto/getKbsCipher`

`luna://com.webos.service.sm/crypto/getKbsCipher`

Returns the kbs cipher (crypto)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/getKbsCipher '{}'
```

> ACG groups: private, sm.security, security, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="crypto_getssgssl"></a>
## `crypto/getSSGSSL`

`luna://com.webos.service.sm/crypto/getSSGSSL`

Returns the SSGSSL (crypto)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/getSSGSSL '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deviceid_getidlist"></a>
## `deviceid/getIDList`

`luna://com.webos.service.sm/deviceid/getIDList`

Returns the ID list (deviceid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/deviceid/getIDList '{}'
```

> ACG groups: private, sm.security, security, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deviceid_getids"></a>
## `deviceid/getIDs`

`luna://com.webos.service.sm/deviceid/getIDs`

Returns device IDs provided by webOS TV (LGUDID).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.0+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `idType` | Array (required) only "LGUDID" allowed |

```sh
luna-send -n 1 -f luna://com.webos.service.sm/deviceid/getIDs '{"idType":["LGUDID"]}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/device-unique-id)

<a id="getstatusverifypartitionbydft"></a>
## `getStatusVerifyPartitionByDFT`

`luna://com.webos.service.sm/getStatusVerifyPartitionByDFT`

Returns the status verify partition by DFT.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `verifyStatus` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.sm/getStatusVerifyPartitionByDFT '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="license_apps_getdbpath"></a>
## `license/apps/getDbPath`

`luna://com.webos.service.sm/license/apps/getDbPath`

Returns the db path (license apps)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/license/apps/getDbPath '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="license_apps_getdrmstatus"></a>
## `license/apps/getDrmStatus`

`luna://com.webos.service.sm/license/apps/getDrmStatus`

Returns the DRM status (license apps)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/license/apps/getDrmStatus '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="license_apps_getsdptime"></a>
## `license/apps/getSdpTime`

`luna://com.webos.service.sm/license/apps/getSdpTime`

Returns the sdp time (license apps)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/license/apps/getSdpTime '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="license_apps_installrights"></a>
## `license/apps/installRights`

`luna://com.webos.service.sm/license/apps/installRights`

Installs the rights (license apps)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/license/apps/installRights '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="license_apps_uninstallrights"></a>
## `license/apps/uninstallRights`

`luna://com.webos.service.sm/license/apps/uninstallRights`

Uninstalls the rights (license apps)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/license/apps/uninstallRights '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pin_change"></a>
## `pin/change`

`luna://com.webos.service.sm/pin/change`

Changes the sm (pin)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/pin/change '{}'
```

> ACG groups: private, security, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pin_store"></a>
## `pin/store`

`luna://com.webos.service.sm/pin/store`

Stores the sm (pin)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/pin/store '{}'
```

> ACG groups: private, security, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pin_verify"></a>
## `pin/verify`

`luna://com.webos.service.sm/pin/verify`

Verifies the sm (pin)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/pin/verify '{}'
```

> ACG groups: private, security, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sa_getpaypalmsg"></a>
## `sa/getPaypalMsg`

`luna://com.webos.service.sm/sa/getPaypalMsg`

Returns the paypal msg (sa)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/sa/getPaypalMsg '{}'
```

> ACG groups: private, sm.security, security, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sdi_getauthtoken"></a>
## `sdi/getAuthToken`

`luna://com.webos.service.sm/sdi/getAuthToken`

Returns the auth token (sdi)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/sdi/getAuthToken '{}'
```

> ACG groups: private, sm.security, security, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="signapp"></a>
## `signApp`

`luna://com.webos.service.sm/signApp`

Signs the app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/signApp '{}'
```

> ACG groups: private, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tauth_getauthtoken"></a>
## `tauth/getAuthToken`

`luna://com.webos.service.sm/tauth/getAuthToken`

Returns the auth token (tauth)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/tauth/getAuthToken '{}'
```

> ACG groups: private, sm.security, security, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="verifyappsigning"></a>
## `verifyAppSigning`

`luna://com.webos.service.sm/verifyAppSigning`

Verifies the app signing.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/verifyAppSigning '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="verifypartitionbydft"></a>
## `verifyPartitionByDFT`

`luna://com.webos.service.sm/verifyPartitionByDFT`

Verifies the partition by DFT.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/verifyPartitionByDFT '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="verifypartitionbyfragment"></a>
## `verifyPartitionByFragment`

`luna://com.webos.service.sm/verifyPartitionByFragment`

Verifies the partition by fragment.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/verifyPartitionByFragment '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="verifypartitionbyoffset"></a>
## `verifyPartitionByOffset`

`luna://com.webos.service.sm/verifyPartitionByOffset`

Verifies the partition by offset.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/verifyPartitionByOffset '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="verifypartitions"></a>
## `verifyPartitions`

`luna://com.webos.service.sm/verifyPartitions`

Verifies the partitions.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sm/verifyPartitions '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
