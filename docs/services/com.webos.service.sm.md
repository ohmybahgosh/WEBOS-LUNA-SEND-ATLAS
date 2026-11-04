# `com.webos.service.sm`

34 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`accessusb/getStatus`](#accessusb_getstatus) | private |  | system-info | Getter on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`accessusb/requestAuthentication`](#accessusb_requestauthentication) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`appsec/configAppPermissions`](#appsec_configapppermissions) | private |  | settings | Method on com.webos.service.sm (from on-device permission registry; parameters undocumented). |
| [`crypto/checkSeStore`](#crypto_checksestore) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`crypto/commerDecryptFileWithPrvKey`](#crypto_commerdecryptfilewithprvkey) | private |  | system-info | Method on com.webos.service.sm (from on-device permission registry; parameters undocumented). |
| [`crypto/commerGetCertDataFromSDPFile`](#crypto_commergetcertdatafromsdpfile) | private |  | system-info | Method on com.webos.service.sm (from on-device permission registry; parameters undocumented). |
| [`crypto/commerGetKeyFile`](#crypto_commergetkeyfile) | private |  | system-info | Method on com.webos.service.sm (from on-device permission registry; parameters undocumented). |
| [`crypto/commerGetSecretFromSDPFile`](#crypto_commergetsecretfromsdpfile) | private |  | system-info | Method on com.webos.service.sm (from on-device permission registry; parameters undocumented). |
| [`crypto/decryptFile`](#crypto_decryptfile) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`crypto/decryptPkeyFile`](#crypto_decryptpkeyfile) | private |  | system-info | Method on com.webos.service.sm (from on-device permission registry; parameters undocumented). |
| [`crypto/decryptSdpFile`](#crypto_decryptsdpfile) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`crypto/doDigitalSign`](#crypto_dodigitalsign) | public |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`crypto/getKbsCipher`](#crypto_getkbscipher) | public |  | system-info | Getter on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`crypto/getSSGSSL`](#crypto_getssgssl) | private |  | system-info | Getter on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`deviceid/getIDList`](#deviceid_getidlist) | public |  | system-info | Getter on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`deviceid/getIDs`](#deviceid_getids) | public |  | security | Returns device IDs provided by webOS TV (LGUDID). |
| [`getStatusVerifyPartitionByDFT`](#getstatusverifypartitionbydft) | private |  | system-info | Getter on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`license/apps/getDbPath`](#license_apps_getdbpath) | private |  | db | Getter on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`license/apps/getDrmStatus`](#license_apps_getdrmstatus) | private |  | security | Getter on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`license/apps/getSdpTime`](#license_apps_getsdptime) | private |  | input | Getter on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`license/apps/installRights`](#license_apps_installrights) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`license/apps/uninstallRights`](#license_apps_uninstallrights) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`pin/change`](#pin_change) | private |  | system-info | Method on com.webos.service.sm (from on-device permission registry; parameters undocumented). |
| [`pin/store`](#pin_store) | private |  | system-info | Method on com.webos.service.sm (from on-device permission registry; parameters undocumented). |
| [`pin/verify`](#pin_verify) | private |  | system-info | Method on com.webos.service.sm (from on-device permission registry; parameters undocumented). |
| [`sa/getPaypalMsg`](#sa_getpaypalmsg) | public |  | system-info | Getter on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`sdi/getAuthToken`](#sdi_getauthtoken) | public |  | system-info | Getter on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`signApp`](#signapp) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`tauth/getAuthToken`](#tauth_getauthtoken) | public |  | system-info | Getter on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`verifyAppSigning`](#verifyappsigning) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`verifyPartitionByDFT`](#verifypartitionbydft) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`verifyPartitionByFragment`](#verifypartitionbyfragment) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`verifyPartitionByOffset`](#verifypartitionbyoffset) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |
| [`verifyPartitions`](#verifypartitions) | private |  | system-info | Method on com.webos.service.sm (introspected on-device; parameters undocumented). |

<a id="accessusb_getstatus"></a>
## `accessusb/getStatus`

`luna://com.webos.service.sm/accessusb/getStatus`

Getter on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/accessusb/getStatus '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="accessusb_requestauthentication"></a>
## `accessusb/requestAuthentication`

`luna://com.webos.service.sm/accessusb/requestAuthentication`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/accessusb/requestAuthentication '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="appsec_configapppermissions"></a>
## `appsec/configAppPermissions`

`luna://com.webos.service.sm/appsec/configAppPermissions`

Method on com.webos.service.sm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/appsec/configAppPermissions '{}'
```

> ACG groups: private, security, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_checksestore"></a>
## `crypto/checkSeStore`

`luna://com.webos.service.sm/crypto/checkSeStore`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/checkSeStore '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="crypto_commerdecryptfilewithprvkey"></a>
## `crypto/commerDecryptFileWithPrvKey`

`luna://com.webos.service.sm/crypto/commerDecryptFileWithPrvKey`

Method on com.webos.service.sm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/commerDecryptFileWithPrvKey '{}'
```

> ACG groups: private, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_commergetcertdatafromsdpfile"></a>
## `crypto/commerGetCertDataFromSDPFile`

`luna://com.webos.service.sm/crypto/commerGetCertDataFromSDPFile`

Method on com.webos.service.sm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/commerGetCertDataFromSDPFile '{}'
```

> ACG groups: private, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_commergetkeyfile"></a>
## `crypto/commerGetKeyFile`

`luna://com.webos.service.sm/crypto/commerGetKeyFile`

Method on com.webos.service.sm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/commerGetKeyFile '{}'
```

> ACG groups: private, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_commergetsecretfromsdpfile"></a>
## `crypto/commerGetSecretFromSDPFile`

`luna://com.webos.service.sm/crypto/commerGetSecretFromSDPFile`

Method on com.webos.service.sm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/commerGetSecretFromSDPFile '{}'
```

> ACG groups: private, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_decryptfile"></a>
## `crypto/decryptFile`

`luna://com.webos.service.sm/crypto/decryptFile`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/decryptFile '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="crypto_decryptpkeyfile"></a>
## `crypto/decryptPkeyFile`

`luna://com.webos.service.sm/crypto/decryptPkeyFile`

Method on com.webos.service.sm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/decryptPkeyFile '{}'
```

> ACG groups: private, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypto_decryptsdpfile"></a>
## `crypto/decryptSdpFile`

`luna://com.webos.service.sm/crypto/decryptSdpFile`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/decryptSdpFile '{}'
```

> ACG groups: private, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="crypto_dodigitalsign"></a>
## `crypto/doDigitalSign`

`luna://com.webos.service.sm/crypto/doDigitalSign`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/doDigitalSign '{}'
```

> ACG groups: private, sm.security, security, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="crypto_getkbscipher"></a>
## `crypto/getKbsCipher`

`luna://com.webos.service.sm/crypto/getKbsCipher`

Getter on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/getKbsCipher '{}'
```

> ACG groups: private, sm.security, security, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="crypto_getssgssl"></a>
## `crypto/getSSGSSL`

`luna://com.webos.service.sm/crypto/getSSGSSL`

Getter on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/crypto/getSSGSSL '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deviceid_getidlist"></a>
## `deviceid/getIDList`

`luna://com.webos.service.sm/deviceid/getIDList`

Getter on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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

Getter on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/getStatusVerifyPartitionByDFT '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="license_apps_getdbpath"></a>
## `license/apps/getDbPath`

`luna://com.webos.service.sm/license/apps/getDbPath`

Getter on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/license/apps/getDbPath '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="license_apps_getdrmstatus"></a>
## `license/apps/getDrmStatus`

`luna://com.webos.service.sm/license/apps/getDrmStatus`

Getter on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/license/apps/getDrmStatus '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="license_apps_getsdptime"></a>
## `license/apps/getSdpTime`

`luna://com.webos.service.sm/license/apps/getSdpTime`

Getter on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/license/apps/getSdpTime '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="license_apps_installrights"></a>
## `license/apps/installRights`

`luna://com.webos.service.sm/license/apps/installRights`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/license/apps/installRights '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="license_apps_uninstallrights"></a>
## `license/apps/uninstallRights`

`luna://com.webos.service.sm/license/apps/uninstallRights`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/license/apps/uninstallRights '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pin_change"></a>
## `pin/change`

`luna://com.webos.service.sm/pin/change`

Method on com.webos.service.sm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/pin/change '{}'
```

> ACG groups: private, security, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pin_store"></a>
## `pin/store`

`luna://com.webos.service.sm/pin/store`

Method on com.webos.service.sm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/pin/store '{}'
```

> ACG groups: private, security, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pin_verify"></a>
## `pin/verify`

`luna://com.webos.service.sm/pin/verify`

Method on com.webos.service.sm (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/pin/verify '{}'
```

> ACG groups: private, security, sm.security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sa_getpaypalmsg"></a>
## `sa/getPaypalMsg`

`luna://com.webos.service.sm/sa/getPaypalMsg`

Getter on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/sa/getPaypalMsg '{}'
```

> ACG groups: private, sm.security, security, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sdi_getauthtoken"></a>
## `sdi/getAuthToken`

`luna://com.webos.service.sm/sdi/getAuthToken`

Getter on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/sdi/getAuthToken '{}'
```

> ACG groups: private, sm.security, security, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="signapp"></a>
## `signApp`

`luna://com.webos.service.sm/signApp`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/signApp '{}'
```

> ACG groups: private, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tauth_getauthtoken"></a>
## `tauth/getAuthToken`

`luna://com.webos.service.sm/tauth/getAuthToken`

Getter on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/tauth/getAuthToken '{}'
```

> ACG groups: private, sm.security, security, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="verifyappsigning"></a>
## `verifyAppSigning`

`luna://com.webos.service.sm/verifyAppSigning`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/verifyAppSigning '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="verifypartitionbydft"></a>
## `verifyPartitionByDFT`

`luna://com.webos.service.sm/verifyPartitionByDFT`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/verifyPartitionByDFT '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="verifypartitionbyfragment"></a>
## `verifyPartitionByFragment`

`luna://com.webos.service.sm/verifyPartitionByFragment`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/verifyPartitionByFragment '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="verifypartitionbyoffset"></a>
## `verifyPartitionByOffset`

`luna://com.webos.service.sm/verifyPartitionByOffset`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/verifyPartitionByOffset '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="verifypartitions"></a>
## `verifyPartitions`

`luna://com.webos.service.sm/verifyPartitions`

Method on com.webos.service.sm (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sm/verifyPartitions '{}'
```

> ACG groups: private, sm.security, security, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
