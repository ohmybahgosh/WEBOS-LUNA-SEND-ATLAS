# `com.webos.service.admanager`

33 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`checkForegroundEula`](#checkforegroundeula) | private |  | apps | Method on com.webos.service.admanager (from on-device permission registry; parameters undocumented). |
| [`checkForegroundSettings`](#checkforegroundsettings) | private |  | settings | Method on com.webos.service.admanager (from on-device permission registry; parameters undocumented). |
| [`checkIntantBootComplete`](#checkintantbootcomplete) | private |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`checkSuspendState`](#checksuspendstate) | private |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`cookieStatus`](#cookiestatus) | private |  | apps | Method on com.webos.service.admanager (from on-device permission registry; parameters undocumented). |
| [`createContextWithTrackingList`](#createcontextwithtrackinglist) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`createSDKContext`](#createsdkcontext) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`deleteCookies`](#deletecookies) | private |  | apps | Method on com.webos.service.admanager (from on-device permission registry; parameters undocumented). ⚠️ |
| [`displayAllContextList`](#displayallcontextlist) | private |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`eulaStatus`](#eulastatus) | private |  | apps | Method on com.webos.service.admanager (from on-device permission registry; parameters undocumented). |
| [`getAdid`](#getadid) | public |  | apps | Getter on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`getAdRequestInfo`](#getadrequestinfo) | public |  | apps | Getter on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`inactivateCookies`](#inactivatecookies) | private |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`launchCMPApp`](#launchcmpapp) | private |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`reqNormalLog`](#reqnormallog) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`requestAssetClickInfo`](#requestassetclickinfo) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`requestBannerInfo`](#requestbannerinfo) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`requestBannerInfoWithoutContextIndex`](#requestbannerinfowithoutcontextindex) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`requestCampaignInfo`](#requestcampaigninfo) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`requestContextIndex`](#requestcontextindex) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`requestPostRollInfo`](#requestpostrollinfo) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`requestPreAppRollInfo`](#requestpreapprollinfo) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`requestPreRollInfo`](#requestprerollinfo) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`requestRollAndBannerInfo`](#requestrollandbannerinfo) | public |  | db | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`resetIFA`](#resetifa) | private |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). ⚠️ |
| [`sendClickImpressionTracker`](#sendclickimpressiontracker) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`sendImpressionTracker`](#sendimpressiontracker) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`setDebugOption`](#setdebugoption) | private |  | apps | Setter on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`setParentalControlForAd`](#setparentalcontrolforad) | private |  | apps | Setter on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`setTCF`](#settcf) | private |  | apps | Setter on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`start`](#start) | private |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`startDownloadUrl`](#startdownloadurl) | public |  | apps | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |
| [`updateDNS`](#updatedns) | private |  | update | Method on com.webos.service.admanager (introspected on-device; parameters undocumented). |

<a id="checkforegroundeula"></a>
## `checkForegroundEula`

`luna://com.webos.service.admanager/checkForegroundEula`

Method on com.webos.service.admanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/checkForegroundEula '{}'
```

> ACG groups: admanager.requestInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkforegroundsettings"></a>
## `checkForegroundSettings`

`luna://com.webos.service.admanager/checkForegroundSettings`

Method on com.webos.service.admanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/checkForegroundSettings '{}'
```

> ACG groups: admanager.requestInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkintantbootcomplete"></a>
## `checkIntantBootComplete`

`luna://com.webos.service.admanager/checkIntantBootComplete`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/checkIntantBootComplete '{}'
```

> ACG groups: private, all, admanager.requestInfo.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checksuspendstate"></a>
## `checkSuspendState`

`luna://com.webos.service.admanager/checkSuspendState`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/checkSuspendState '{}'
```

> ACG groups: private, all, admanager.requestInfo.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cookiestatus"></a>
## `cookieStatus`

`luna://com.webos.service.admanager/cookieStatus`

Method on com.webos.service.admanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/cookieStatus '{}'
```

> ACG groups: activities.callbacks, admanager.requestInfo, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="createcontextwithtrackinglist"></a>
## `createContextWithTrackingList`

`luna://com.webos.service.admanager/createContextWithTrackingList`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/createContextWithTrackingList '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createsdkcontext"></a>
## `createSDKContext`

`luna://com.webos.service.admanager/createSDKContext`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/createSDKContext '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletecookies"></a>
## `deleteCookies` ⚠️ DANGEROUS

`luna://com.webos.service.admanager/deleteCookies`

Method on com.webos.service.admanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/deleteCookies '{}'
```

> ACG groups: admanager.manage, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="displayallcontextlist"></a>
## `displayAllContextList`

`luna://com.webos.service.admanager/displayAllContextList`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/displayAllContextList '{}'
```

> ACG groups: private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="eulastatus"></a>
## `eulaStatus`

`luna://com.webos.service.admanager/eulaStatus`

Method on com.webos.service.admanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/eulaStatus '{}'
```

> ACG groups: admanager.requestInfo, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getadid"></a>
## `getAdid`

`luna://com.webos.service.admanager/getAdid`

Getter on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/getAdid '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getadrequestinfo"></a>
## `getAdRequestInfo`

`luna://com.webos.service.admanager/getAdRequestInfo`

Getter on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/getAdRequestInfo '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="inactivatecookies"></a>
## `inactivateCookies`

`luna://com.webos.service.admanager/inactivateCookies`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/inactivateCookies '{}'
```

> ACG groups: private, all, admanager.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchcmpapp"></a>
## `launchCMPApp`

`luna://com.webos.service.admanager/launchCMPApp`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/launchCMPApp '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reqnormallog"></a>
## `reqNormalLog`

`luna://com.webos.service.admanager/reqNormalLog`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/reqNormalLog '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestassetclickinfo"></a>
## `requestAssetClickInfo`

`luna://com.webos.service.admanager/requestAssetClickInfo`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestAssetClickInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbannerinfo"></a>
## `requestBannerInfo`

`luna://com.webos.service.admanager/requestBannerInfo`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestBannerInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbannerinfowithoutcontextindex"></a>
## `requestBannerInfoWithoutContextIndex`

`luna://com.webos.service.admanager/requestBannerInfoWithoutContextIndex`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestBannerInfoWithoutContextIndex '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestcampaigninfo"></a>
## `requestCampaignInfo`

`luna://com.webos.service.admanager/requestCampaignInfo`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestCampaignInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestcontextindex"></a>
## `requestContextIndex`

`luna://com.webos.service.admanager/requestContextIndex`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestContextIndex '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpostrollinfo"></a>
## `requestPostRollInfo`

`luna://com.webos.service.admanager/requestPostRollInfo`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestPostRollInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpreapprollinfo"></a>
## `requestPreAppRollInfo`

`luna://com.webos.service.admanager/requestPreAppRollInfo`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestPreAppRollInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestprerollinfo"></a>
## `requestPreRollInfo`

`luna://com.webos.service.admanager/requestPreRollInfo`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestPreRollInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestrollandbannerinfo"></a>
## `requestRollAndBannerInfo`

`luna://com.webos.service.admanager/requestRollAndBannerInfo`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestRollAndBannerInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetifa"></a>
## `resetIFA` ⚠️ DANGEROUS

`luna://com.webos.service.admanager/resetIFA`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/resetIFA '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendclickimpressiontracker"></a>
## `sendClickImpressionTracker`

`luna://com.webos.service.admanager/sendClickImpressionTracker`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/sendClickImpressionTracker '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendimpressiontracker"></a>
## `sendImpressionTracker`

`luna://com.webos.service.admanager/sendImpressionTracker`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/sendImpressionTracker '{}'
```

> ACG groups: public, private, all, services, admanager.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdebugoption"></a>
## `setDebugOption`

`luna://com.webos.service.admanager/setDebugOption`

Setter on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/setDebugOption '{}'
```

> ACG groups: private, all, services, admanager.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setparentalcontrolforad"></a>
## `setParentalControlForAd`

`luna://com.webos.service.admanager/setParentalControlForAd`

Setter on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/setParentalControlForAd '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settcf"></a>
## `setTCF`

`luna://com.webos.service.admanager/setTCF`

Setter on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/setTCF '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.admanager/start`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/start '{}'
```

> ACG groups: private, configurator.callbacks, all, services, activities.callbacks, admanager.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startdownloadurl"></a>
## `startDownloadUrl`

`luna://com.webos.service.admanager/startDownloadUrl`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/startDownloadUrl '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatedns"></a>
## `updateDNS`

`luna://com.webos.service.admanager/updateDNS`

Method on com.webos.service.admanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/updateDNS '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
