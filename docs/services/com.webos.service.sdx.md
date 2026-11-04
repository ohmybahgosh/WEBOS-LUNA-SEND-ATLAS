# `com.webos.service.sdx`

36 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`callbackNotice`](#callbacknotice) | private |  | apps | SDP callback notification sink. Name only. |
| [`cancelEulaDownload`](#canceleuladownload) | private |  | update | Cancels an in-progress EULA download. |
| [`debug`](#debug) | private |  | devmode | sdx debug control. Name only. |
| [`deleteDeviceAuthentication`](#deletedeviceauthentication) | private |  | security | Clears the stored SDP device authentication. Documented as existing. ⚠️ |
| [`doServiceCountryChange`](#doservicecountrychange) | private |  | settings | Changes the service country SDP uses (which content catalogue / store region the TV talks to). Documented here as what the method is for; th ⚠️ |
| [`getACRPath`](#getacrpath) | private |  | system-info | Returns the SDP path used for ACR data. |
| [`getAppPublishFlag`](#getapppublishflag) | private |  | system-info | Returns the per-app SDP publish flag. |
| [`getCacheStatus`](#getcachestatus) | private |  | system-info | Returns the SDP cache status. |
| [`getCountryCodePath`](#getcountrycodepath) | private |  | system-info | Returns the SDP path used for country-code lookup. |
| [`getDeviceAuthenticationStatus`](#getdeviceauthenticationstatus) | private |  | security | Read-only: reports whether the device is authenticated/provisioned with SDP (isDeviceAuthenticated, provisioningCompleted). Glasshouse saw a |
| [`getDeviceUuid`](#getdeviceuuid) | private |  | system-info | Returns the device UUID SDP knows the TV by (billingId carries modelName). |
| [`getEncryptedMac`](#getencryptedmac) | private |  | system-info | Returns the TV's MAC in SDP's encrypted form. |
| [`getEulaDownloadStatus`](#geteuladownloadstatus) | private |  | system-info | Returns the status of an SDP EULA download. |
| [`getHttpHeaderForServiceRequest`](#gethttpheaderforservicerequest) | private |  | apps | Returns the HTTP headers (including the SDP HOST) to use for a named SDP service. Glasshouse reads only the HOST from it (e.g. GB.nextlgsdp. |
| [`getPublishFlag`](#getpublishflag) | private |  | system-info | Returns the SDP publish flag. |
| [`getRdxServer`](#getrdxserver) | private |  | system-info | Returns the RDX report-upload server host. |
| [`getRdxServerUrl`](#getrdxserverurl) | private |  | system-info | Returns the RDX (report/diagnostics upload) server URL, e.g. https://US.rdx2.nextlgsdp.com/rdx/9.0.0/. uploadd posts crash/telemetry reports |
| [`getServer`](#getserver) | private |  | system-info | Returns the SDP server environment the TV is pointed at (e.g. 'Production'). |
| [`getServerList`](#getserverlist) | private |  | system-info | Returns the configured SDP server list (from sdp/sdx/server_addr_version.conf). |
| [`getServerType`](#getservertype) | private |  | system-info | Returns the SDP server type (e.g. 'sdp'). |
| [`getServerUrl`](#getserverurl) | private |  | system-info | Returns the SDP base URL (e.g. http://US.tv.wiselg.com). |
| [`notifySubdivisionChanged`](#notifysubdivisionchanged) | private |  | settings | Notifies SDP that the region subdivision changed. |
| [`requestACRVersion`](#requestacrversion) | private |  | system-info | Requests the ACR configuration version from SDP. |
| [`requestDeviceAuthentication`](#requestdeviceauthentication) | private |  | security | Starts SDP device authentication/provisioning. Documented as existing; this repo does not cover forging or bypassing it. |
| [`requestEulaDownload`](#requesteuladownload) | private |  | update | Requests download of EULA/legal text from SDP. |
| [`requestProvisioningDev`](#requestprovisioningdev) | private |  | security | Developer provisioning request against SDP. Name only. |
| [`send`](#send) | private |  | apps | Generic SDP request. Glasshouse uses it with serviceName 'sdp_onnow', url 'content_discovery/item-detail' and bodyData {item_id, item_type}  |
| [`setAppPublishFlag`](#setapppublishflag) | private |  | settings | Sets the per-app SDP publish flag. |
| [`setCountrySettingByAuto`](#setcountrysettingbyauto) | private |  | settings | Sets the SDP service country automatically (from network/geo). Purpose documented; no bypass recipe. ⚠️ |
| [`setCountrySettingByManual`](#setcountrysettingbymanual) | private |  | settings | Sets the SDP service country manually. Purpose documented; no bypass recipe. ⚠️ |
| [`setPublishFlag`](#setpublishflag) | private |  | settings | Sets the SDP publish flag. |
| [`setServer`](#setserver) | private |  | settings | Points the TV at a different SDP server environment. Documented as existing; changing it can break store/search/updates. ⚠️ |
| [`setTokenRefreshInterval`](#settokenrefreshinterval) | private |  | security | Sets how often the SDP account token is refreshed. |
| [`start`](#start) | private |  | system-info | Starts the sdx service worker. Name only. |
| [`testEulaUpdate`](#testeulaupdate) | private |  | devmode | Test hook for EULA update. Name only. |
| [`updateEulaInfo`](#updateeulainfo) | private |  | update | Updates stored EULA acceptance info. |

<a id="callbacknotice"></a>
## `callbackNotice`

`luna://com.webos.service.sdx/callbackNotice`

SDP callback notification sink. Name only.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/callbackNotice '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). LG SDX / store client; name only, no auth/signing details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="canceleuladownload"></a>
## `cancelEulaDownload`

`luna://com.webos.service.sdx/cancelEulaDownload`

Cancels an in-progress EULA download.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/cancelEulaDownload '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.control, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.sdx/debug`

sdx debug control. Name only.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/debug '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: private, sdx.control, system.debug. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). LG SDX / store client; name only, no auth/signing details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletedeviceauthentication"></a>
## `deleteDeviceAuthentication` ⚠️ DANGEROUS

`luna://com.webos.service.sdx/deleteDeviceAuthentication`

Clears the stored SDP device authentication. Documented as existing.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/deleteDeviceAuthentication '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.control, public, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows. Flagged dangerous by name; verify before calling.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="doservicecountrychange"></a>
## `doServiceCountryChange` ⚠️ DANGEROUS

`luna://com.webos.service.sdx/doServiceCountryChange`

Changes the service country SDP uses (which content catalogue / store region the TV talks to). Documented here as what the method is for; this repo does not provide a region-lock bypass procedure.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/doServiceCountryChange '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.control, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getacrpath"></a>
## `getACRPath`

`luna://com.webos.service.sdx/getACRPath`

Returns the SDP path used for ACR data.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getACRPath '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getapppublishflag"></a>
## `getAppPublishFlag`

`luna://com.webos.service.sdx/getAppPublishFlag`

Returns the per-app SDP publish flag.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getAppPublishFlag '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcachestatus"></a>
## `getCacheStatus`

`luna://com.webos.service.sdx/getCacheStatus`

Returns the SDP cache status.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getCacheStatus '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.read, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcountrycodepath"></a>
## `getCountryCodePath`

`luna://com.webos.service.sdx/getCountryCodePath`

Returns the SDP path used for country-code lookup.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getCountryCodePath '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdeviceauthenticationstatus"></a>
## `getDeviceAuthenticationStatus`

`luna://com.webos.service.sdx/getDeviceAuthenticationStatus`

Read-only: reports whether the device is authenticated/provisioned with SDP (isDeviceAuthenticated, provisioningCompleted). Glasshouse saw acr stop when this returned false.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getDeviceAuthenticationStatus '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.read, system.debug, private, configurator.callbacks, all, activities.callbacks. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdeviceuuid"></a>
## `getDeviceUuid`

`luna://com.webos.service.sdx/getDeviceUuid`

Returns the device UUID SDP knows the TV by (billingId carries modelName).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); webOS 3+  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getDeviceUuid '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| dev-manager parses billingId as URL query to get modelName.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/device-manager.service.ts)

<a id="getencryptedmac"></a>
## `getEncryptedMac`

`luna://com.webos.service.sdx/getEncryptedMac`

Returns the TV's MAC in SDP's encrypted form.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getEncryptedMac '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. Device identifier; do not publish the value. \|\| ACG groups: sdx.read, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteuladownloadstatus"></a>
## `getEulaDownloadStatus`

`luna://com.webos.service.sdx/getEulaDownloadStatus`

Returns the status of an SDP EULA download.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getEulaDownloadStatus '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.read, private, configurator.callbacks, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethttpheaderforservicerequest"></a>
## `getHttpHeaderForServiceRequest`

`luna://com.webos.service.sdx/getHttpHeaderForServiceRequest`

Returns the HTTP headers (including the SDP HOST) to use for a named SDP service. Glasshouse reads only the HOST from it (e.g. GB.nextlgsdp.com for sdp_nlp/sdp_search/sdp_onnow). The response also carries device ids and LG account tokens.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11)  
- **Confidence:** code, community

| Param | Type / notes |
|---|---|
| `serviceName` | string, e.g. sdp_nlp \| sdp_search \| sdp_onnow |

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getHttpHeaderForServiceRequest '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. The returned headers contain account tokens: do not log or share them. This catalog documents the method, not any token value. \|\| Response example in snabb/webostv: {"clearedForDuty":true}

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="getpublishflag"></a>
## `getPublishFlag`

`luna://com.webos.service.sdx/getPublishFlag`

Returns the SDP publish flag.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getPublishFlag '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrdxserver"></a>
## `getRdxServer`

`luna://com.webos.service.sdx/getRdxServer`

Returns the RDX report-upload server host.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getRdxServer '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrdxserverurl"></a>
## `getRdxServerUrl`

`luna://com.webos.service.sdx/getRdxServerUrl`

Returns the RDX (report/diagnostics upload) server URL, e.g. https://US.rdx2.nextlgsdp.com/rdx/9.0.0/. uploadd posts crash/telemetry reports here.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getRdxServerUrl '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getserver"></a>
## `getServer`

`luna://com.webos.service.sdx/getServer`

Returns the SDP server environment the TV is pointed at (e.g. 'Production').

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getServer '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/PhanNgocTrieu/swpct/blob/HEAD/automation/python/santify_250313/automation.sh), [4](https://github.com/Kyusoo-Kim/memo/blob/HEAD/public/db.json)

<a id="getserverlist"></a>
## `getServerList`

`luna://com.webos.service.sdx/getServerList`

Returns the configured SDP server list (from sdp/sdx/server_addr_version.conf).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getServerList '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.read, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservertype"></a>
## `getServerType`

`luna://com.webos.service.sdx/getServerType`

Returns the SDP server type (e.g. 'sdp').

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getServerType '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse)

<a id="getserverurl"></a>
## `getServerUrl`

`luna://com.webos.service.sdx/getServerUrl`

Returns the SDP base URL (e.g. http://US.tv.wiselg.com).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getServerUrl '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.read, public, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifysubdivisionchanged"></a>
## `notifySubdivisionChanged`

`luna://com.webos.service.sdx/notifySubdivisionChanged`

Notifies SDP that the region subdivision changed.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/notifySubdivisionChanged '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.control, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestacrversion"></a>
## `requestACRVersion`

`luna://com.webos.service.sdx/requestACRVersion`

Requests the ACR configuration version from SDP.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/requestACRVersion '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.control, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestdeviceauthentication"></a>
## `requestDeviceAuthentication`

`luna://com.webos.service.sdx/requestDeviceAuthentication`

Starts SDP device authentication/provisioning. Documented as existing; this repo does not cover forging or bypassing it.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/requestDeviceAuthentication '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: private, sdx.control, system.debug. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). LG SDX / store client; name only, no auth/signing details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requesteuladownload"></a>
## `requestEulaDownload`

`luna://com.webos.service.sdx/requestEulaDownload`

Requests download of EULA/legal text from SDP.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/requestEulaDownload '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.control, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestprovisioningdev"></a>
## `requestProvisioningDev`

`luna://com.webos.service.sdx/requestProvisioningDev`

Developer provisioning request against SDP. Name only.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/requestProvisioningDev '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.control, system.debug, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="send"></a>
## `send`

`luna://com.webos.service.sdx/send`

Generic SDP request. Glasshouse uses it with serviceName 'sdp_onnow', url 'content_discovery/item-detail' and bodyData {item_id, item_type} to fetch a title's detail (exec_app_id / exec_id for deep-linking into a streaming app).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11)  
- **Confidence:** code, community

| Param | Type / notes |
|---|---|
| `serviceName` | string, e.g. sdp_onnow / sdp_secure |
| `url` | string, SDP endpoint path |
| `bodyData` | object, request body (e.g. {item_id, item_type:'CONTS'}) |

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/send '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/Kyusoo-Kim/memo/blob/HEAD/public/db.json), [4](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/docs/development/TV-RESEARCH.md)

<a id="setapppublishflag"></a>
## `setAppPublishFlag`

`luna://com.webos.service.sdx/setAppPublishFlag`

Sets the per-app SDP publish flag.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/setAppPublishFlag '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: system.debug, private, sdx.write, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcountrysettingbyauto"></a>
## `setCountrySettingByAuto` ⚠️ DANGEROUS

`luna://com.webos.service.sdx/setCountrySettingByAuto`

Sets the SDP service country automatically (from network/geo). Purpose documented; no bypass recipe.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/setCountrySettingByAuto '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: system.debug, private, sdx.write, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows. Flagged dangerous by name; verify before calling.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcountrysettingbymanual"></a>
## `setCountrySettingByManual` ⚠️ DANGEROUS

`luna://com.webos.service.sdx/setCountrySettingByManual`

Sets the SDP service country manually. Purpose documented; no bypass recipe.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/setCountrySettingByManual '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: system.debug, private, sdx.write, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows. Flagged dangerous by name; verify before calling.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpublishflag"></a>
## `setPublishFlag`

`luna://com.webos.service.sdx/setPublishFlag`

Sets the SDP publish flag.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11)  
- **Confidence:** code, community

| Param | Type / notes |
|---|---|
| `flag` | boolean |

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/setPublishFlag '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| Semantics not documented.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/hoangnxlge/athena/blob/HEAD/lib/features/apps/presentations/bloc/apps_bloc.dart)

<a id="setserver"></a>
## `setServer` ⚠️ DANGEROUS

`luna://com.webos.service.sdx/setServer`

Points the TV at a different SDP server environment. Documented as existing; changing it can break store/search/updates.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/setServer '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: system.debug, private, sdx.write, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows. Flagged dangerous by name; verify before calling.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settokenrefreshinterval"></a>
## `setTokenRefreshInterval`

`luna://com.webos.service.sdx/setTokenRefreshInterval`

Sets how often the SDP account token is refreshed.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/setTokenRefreshInterval '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.sdx/start`

Starts the sdx service worker. Name only.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/start '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.control, system.debug, private, configurator.callbacks, all, activities.callbacks. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testeulaupdate"></a>
## `testEulaUpdate`

`luna://com.webos.service.sdx/testEulaUpdate`

Test hook for EULA update. Name only.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/testEulaUpdate '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: sdx.control, public, private, all. LG SDX / store client. Documented by name only; this repo does not cover account/store auth or signing flows.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateeulainfo"></a>
## `updateEulaInfo`

`luna://com.webos.service.sdx/updateEulaInfo`

Updates stored EULA acceptance info.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code, community

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/updateEulaInfo '{}'
```

> sdx is the TV's client for LG's Smart Delivery Platform (SDP, hosts such as <country>.nextlgsdp.com / tv.wiselg.com): content-catalogue search, server/host lookup, device authentication/provisioning, EULA state and report (RDX) upload. This repo documents what the methods do and return; it does not print tokens or describe defeating device authentication, licensing or region checks. \|\| ACG groups: private, sdx.control, system.debug. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). LG SDX / store client; name only, no auth/signing details.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
