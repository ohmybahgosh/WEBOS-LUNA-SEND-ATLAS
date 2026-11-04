# `com.webos.service.sdx`

32 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`callbackNotice`](#callbacknotice) | private |  | security | Method on com.webos.service.sdx (from on-device permission registry; parameters undocumented). |
| [`cancelEulaDownload`](#canceleuladownload) | private |  | security | Method on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`debug`](#debug) | private |  | security | Method on com.webos.service.sdx (from on-device permission registry; parameters undocumented). |
| [`deleteDeviceAuthentication`](#deletedeviceauthentication) | public |  | security | Method on com.webos.service.sdx (introspected on-device; parameters undocumented). ⚠️ |
| [`doServiceCountryChange`](#doservicecountrychange) | private |  | security | Method on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getACRPath`](#getacrpath) | private |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getAppPublishFlag`](#getapppublishflag) | private |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getCacheStatus`](#getcachestatus) | private |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getCountryCodePath`](#getcountrycodepath) | private |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getDeviceAuthenticationStatus`](#getdeviceauthenticationstatus) | private |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getDeviceUuid`](#getdeviceuuid) | public |  | system-info | Returns device UUID; billingId carries modelName for otaId derivation |
| [`getEncryptedMac`](#getencryptedmac) | private |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getEulaDownloadStatus`](#geteuladownloadstatus) | private |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getPublishFlag`](#getpublishflag) | private |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getRdxServer`](#getrdxserver) | private |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getRdxServerUrl`](#getrdxserverurl) | private |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getServer`](#getserver) | private |  | update | Returns which LG server environment the TV talks to |
| [`getServerList`](#getserverlist) | private |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`getServerUrl`](#getserverurl) | public |  | security | Getter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`notifySubdivisionChanged`](#notifysubdivisionchanged) | private |  | security | Method on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`requestACRVersion`](#requestacrversion) | private |  | security | Method on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`requestDeviceAuthentication`](#requestdeviceauthentication) | private |  | security | Method on com.webos.service.sdx (from on-device permission registry; parameters undocumented). |
| [`requestEulaDownload`](#requesteuladownload) | private |  | security | Method on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`requestProvisioningDev`](#requestprovisioningdev) | private |  | security | Method on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`setAppPublishFlag`](#setapppublishflag) | private |  | security | Setter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`setCountrySettingByAuto`](#setcountrysettingbyauto) | private |  | security | Setter on com.webos.service.sdx (introspected on-device; parameters undocumented). ⚠️ |
| [`setCountrySettingByManual`](#setcountrysettingbymanual) | private |  | security | Setter on com.webos.service.sdx (introspected on-device; parameters undocumented). ⚠️ |
| [`setServer`](#setserver) | private |  | security | Setter on com.webos.service.sdx (introspected on-device; parameters undocumented). ⚠️ |
| [`setTokenRefreshInterval`](#settokenrefreshinterval) | private |  | security | Setter on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`start`](#start) | private |  | security | Method on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`testEulaUpdate`](#testeulaupdate) | public |  | update | Method on com.webos.service.sdx (introspected on-device; parameters undocumented). |
| [`updateEulaInfo`](#updateeulainfo) | private |  | update | Method on com.webos.service.sdx (from on-device permission registry; parameters undocumented). |

<a id="callbacknotice"></a>
## `callbackNotice`

`luna://com.webos.service.sdx/callbackNotice`

Method on com.webos.service.sdx (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/callbackNotice '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). LG SDX / store client; name only, no auth/signing details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="canceleuladownload"></a>
## `cancelEulaDownload`

`luna://com.webos.service.sdx/cancelEulaDownload`

Method on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/cancelEulaDownload '{}'
```

> ACG groups: sdx.control, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.sdx/debug`

Method on com.webos.service.sdx (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/debug '{}'
```

> ACG groups: private, sdx.control, system.debug. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). LG SDX / store client; name only, no auth/signing details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletedeviceauthentication"></a>
## `deleteDeviceAuthentication` ⚠️ DANGEROUS

`luna://com.webos.service.sdx/deleteDeviceAuthentication`

Method on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/deleteDeviceAuthentication '{}'
```

> ACG groups: sdx.control, public, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="doservicecountrychange"></a>
## `doServiceCountryChange`

`luna://com.webos.service.sdx/doServiceCountryChange`

Method on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/doServiceCountryChange '{}'
```

> ACG groups: sdx.control, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getacrpath"></a>
## `getACRPath`

`luna://com.webos.service.sdx/getACRPath`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getACRPath '{}'
```

> ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getapppublishflag"></a>
## `getAppPublishFlag`

`luna://com.webos.service.sdx/getAppPublishFlag`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getAppPublishFlag '{}'
```

> ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcachestatus"></a>
## `getCacheStatus`

`luna://com.webos.service.sdx/getCacheStatus`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getCacheStatus '{}'
```

> ACG groups: sdx.read, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcountrycodepath"></a>
## `getCountryCodePath`

`luna://com.webos.service.sdx/getCountryCodePath`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getCountryCodePath '{}'
```

> ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdeviceauthenticationstatus"></a>
## `getDeviceAuthenticationStatus`

`luna://com.webos.service.sdx/getDeviceAuthenticationStatus`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getDeviceAuthenticationStatus '{}'
```

> ACG groups: sdx.read, system.debug, private, configurator.callbacks, all, activities.callbacks. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdeviceuuid"></a>
## `getDeviceUuid`

`luna://com.webos.service.sdx/getDeviceUuid`

Returns device UUID; billingId carries modelName for otaId derivation

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

```sh
luna-send-pub -n 1 luna://com.webos.service.sdx/getDeviceUuid '{}'
```

> dev-manager parses billingId as URL query to get modelName.

Sources: [1](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/device-manager.service.ts)

<a id="getencryptedmac"></a>
## `getEncryptedMac`

`luna://com.webos.service.sdx/getEncryptedMac`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getEncryptedMac '{}'
```

> ACG groups: sdx.read, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteuladownloadstatus"></a>
## `getEulaDownloadStatus`

`luna://com.webos.service.sdx/getEulaDownloadStatus`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getEulaDownloadStatus '{}'
```

> ACG groups: sdx.read, private, configurator.callbacks, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpublishflag"></a>
## `getPublishFlag`

`luna://com.webos.service.sdx/getPublishFlag`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getPublishFlag '{}'
```

> ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrdxserver"></a>
## `getRdxServer`

`luna://com.webos.service.sdx/getRdxServer`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getRdxServer '{}'
```

> ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrdxserverurl"></a>
## `getRdxServerUrl`

`luna://com.webos.service.sdx/getRdxServerUrl`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getRdxServerUrl '{}'
```

> ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getserver"></a>
## `getServer`

`luna://com.webos.service.sdx/getServer`

Returns which LG server environment the TV talks to

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getServer '{}'
```

Sources: [1](https://github.com/PhanNgocTrieu/swpct/blob/HEAD/automation/python/santify_250313/automation.sh), [2](https://github.com/Kyusoo-Kim/memo/blob/HEAD/public/db.json)

<a id="getserverlist"></a>
## `getServerList`

`luna://com.webos.service.sdx/getServerList`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getServerList '{}'
```

> ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getserverurl"></a>
## `getServerUrl`

`luna://com.webos.service.sdx/getServerUrl`

Getter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getServerUrl '{}'
```

> ACG groups: sdx.read, public, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifysubdivisionchanged"></a>
## `notifySubdivisionChanged`

`luna://com.webos.service.sdx/notifySubdivisionChanged`

Method on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/notifySubdivisionChanged '{}'
```

> ACG groups: sdx.control, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestacrversion"></a>
## `requestACRVersion`

`luna://com.webos.service.sdx/requestACRVersion`

Method on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/requestACRVersion '{}'
```

> ACG groups: sdx.control, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestdeviceauthentication"></a>
## `requestDeviceAuthentication`

`luna://com.webos.service.sdx/requestDeviceAuthentication`

Method on com.webos.service.sdx (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/requestDeviceAuthentication '{}'
```

> ACG groups: private, sdx.control, system.debug. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). LG SDX / store client; name only, no auth/signing details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requesteuladownload"></a>
## `requestEulaDownload`

`luna://com.webos.service.sdx/requestEulaDownload`

Method on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/requestEulaDownload '{}'
```

> ACG groups: sdx.control, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestprovisioningdev"></a>
## `requestProvisioningDev`

`luna://com.webos.service.sdx/requestProvisioningDev`

Method on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/requestProvisioningDev '{}'
```

> ACG groups: sdx.control, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setapppublishflag"></a>
## `setAppPublishFlag`

`luna://com.webos.service.sdx/setAppPublishFlag`

Setter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/setAppPublishFlag '{}'
```

> ACG groups: system.debug, private, sdx.write, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcountrysettingbyauto"></a>
## `setCountrySettingByAuto` ⚠️ DANGEROUS

`luna://com.webos.service.sdx/setCountrySettingByAuto`

Setter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/setCountrySettingByAuto '{}'
```

> ACG groups: system.debug, private, sdx.write, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcountrysettingbymanual"></a>
## `setCountrySettingByManual` ⚠️ DANGEROUS

`luna://com.webos.service.sdx/setCountrySettingByManual`

Setter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/setCountrySettingByManual '{}'
```

> ACG groups: system.debug, private, sdx.write, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setserver"></a>
## `setServer` ⚠️ DANGEROUS

`luna://com.webos.service.sdx/setServer`

Setter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/setServer '{}'
```

> ACG groups: system.debug, private, sdx.write, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settokenrefreshinterval"></a>
## `setTokenRefreshInterval`

`luna://com.webos.service.sdx/setTokenRefreshInterval`

Setter on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/setTokenRefreshInterval '{}'
```

> ACG groups: private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.sdx/start`

Method on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/start '{}'
```

> ACG groups: sdx.control, system.debug, private, configurator.callbacks, all, activities.callbacks. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testeulaupdate"></a>
## `testEulaUpdate`

`luna://com.webos.service.sdx/testEulaUpdate`

Method on com.webos.service.sdx (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/testEulaUpdate '{}'
```

> ACG groups: sdx.control, public, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateeulainfo"></a>
## `updateEulaInfo`

`luna://com.webos.service.sdx/updateEulaInfo`

Method on com.webos.service.sdx (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/updateEulaInfo '{}'
```

> ACG groups: private, sdx.control, system.debug. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). LG SDX / store client; name only, no auth/signing details.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
