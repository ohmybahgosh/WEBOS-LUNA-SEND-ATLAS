# `com.webos.service.admanager`

Advertising manager: issues banner/asset ad requests, manages the advertising ID, tracking contexts and cookies, EULA/consent (CMP) checks and SDK ad contexts. _(inferred from the service's methods)_

33 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkForegroundEula`](#checkforegroundeula) | private |  | apps | inferred | Checks the foreground eula. |
| [`checkForegroundSettings`](#checkforegroundsettings) | private |  | settings | inferred | Checks the foreground settings. |
| [`checkIntantBootComplete`](#checkintantbootcomplete) | private |  | apps | inferred | Checks the intant boot complete. |
| [`checkSuspendState`](#checksuspendstate) | private |  | apps | inferred | Checks the suspend state. |
| [`cookieStatus`](#cookiestatus) | private |  | apps | inferred | Handles the cookie status. |
| [`createContextWithTrackingList`](#createcontextwithtrackinglist) | public |  | apps | inferred | Creates the context with tracking list. |
| [`createSDKContext`](#createsdkcontext) | public |  | apps | inferred | Creates the SDK context. |
| [`deleteCookies`](#deletecookies) | private |  | apps | inferred | Deletes the cookies. ⚠️ |
| [`displayAllContextList`](#displayallcontextlist) | private |  | apps | inferred | Handles the display all context list. |
| [`eulaStatus`](#eulastatus) | private |  | apps | inferred | Handles the eula status. |
| [`getAdid`](#getadid) | public |  | apps | inferred | Returns the adid. |
| [`getAdRequestInfo`](#getadrequestinfo) | public |  | apps | inferred | Returns the ad request info. |
| [`inactivateCookies`](#inactivatecookies) | private |  | apps | inferred | Handles the inactivate cookies. |
| [`launchCMPApp`](#launchcmpapp) | private |  | apps | inferred | Launches the CMP app. |
| [`reqNormalLog`](#reqnormallog) | public |  | apps | inferred | Handles the req normal log. |
| [`requestAssetClickInfo`](#requestassetclickinfo) | public |  | apps | inferred | Requests the asset click info. |
| [`requestBannerInfo`](#requestbannerinfo) | public |  | apps | inferred | Requests the banner info. |
| [`requestBannerInfoWithoutContextIndex`](#requestbannerinfowithoutcontextindex) | public |  | apps | inferred | Requests the banner info without context index. |
| [`requestCampaignInfo`](#requestcampaigninfo) | public |  | apps | inferred | Requests the campaign info. |
| [`requestContextIndex`](#requestcontextindex) | public |  | apps | inferred | Requests the context index. |
| [`requestPostRollInfo`](#requestpostrollinfo) | public |  | apps | inferred | Requests the post roll info. |
| [`requestPreAppRollInfo`](#requestpreapprollinfo) | public |  | apps | inferred | Requests the pre app roll info. |
| [`requestPreRollInfo`](#requestprerollinfo) | public |  | apps | inferred | Requests the pre roll info. |
| [`requestRollAndBannerInfo`](#requestrollandbannerinfo) | public |  | db | inferred | Requests the roll and banner info. |
| [`resetIFA`](#resetifa) | private |  | apps | inferred | Resets the IFA. ⚠️ |
| [`sendClickImpressionTracker`](#sendclickimpressiontracker) | public |  | apps | inferred | Sends the click impression tracker. |
| [`sendImpressionTracker`](#sendimpressiontracker) | public |  | apps | inferred | Sends the impression tracker. |
| [`setDebugOption`](#setdebugoption) | private |  | apps | inferred | Sets the debug option. |
| [`setParentalControlForAd`](#setparentalcontrolforad) | private |  | apps | inferred | Sets the parental control for ad. |
| [`setTCF`](#settcf) | private |  | apps | inferred | Sets the TCF. |
| [`start`](#start) | private |  | apps | inferred | Starts the admanager. |
| [`startDownloadUrl`](#startdownloadurl) | public |  | apps | inferred | Starts the download URL. |
| [`updateDNS`](#updatedns) | private |  | update | inferred | Updates the DNS. |

<a id="checkforegroundeula"></a>
## `checkForegroundEula`

`luna://com.webos.service.admanager/checkForegroundEula`

Checks the foreground eula.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/checkForegroundEula '{}'
```

> ACG groups: admanager.requestInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkforegroundsettings"></a>
## `checkForegroundSettings`

`luna://com.webos.service.admanager/checkForegroundSettings`

Checks the foreground settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/checkForegroundSettings '{}'
```

> ACG groups: admanager.requestInfo, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkintantbootcomplete"></a>
## `checkIntantBootComplete`

`luna://com.webos.service.admanager/checkIntantBootComplete`

Checks the intant boot complete.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/checkIntantBootComplete '{}'
```

> ACG groups: private, all, admanager.requestInfo.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checksuspendstate"></a>
## `checkSuspendState`

`luna://com.webos.service.admanager/checkSuspendState`

Checks the suspend state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/checkSuspendState '{}'
```

> ACG groups: private, all, admanager.requestInfo.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cookiestatus"></a>
## `cookieStatus`

`luna://com.webos.service.admanager/cookieStatus`

Handles the cookie status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/cookieStatus '{}'
```

> ACG groups: activities.callbacks, admanager.requestInfo, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="createcontextwithtrackinglist"></a>
## `createContextWithTrackingList`

`luna://com.webos.service.admanager/createContextWithTrackingList`

Creates the context with tracking list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/createContextWithTrackingList '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createsdkcontext"></a>
## `createSDKContext`

`luna://com.webos.service.admanager/createSDKContext`

Creates the SDK context.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/createSDKContext '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deletecookies"></a>
## `deleteCookies` ⚠️ DANGEROUS

`luna://com.webos.service.admanager/deleteCookies`

Deletes the cookies.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/deleteCookies '{}'
```

> ACG groups: admanager.manage, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="displayallcontextlist"></a>
## `displayAllContextList`

`luna://com.webos.service.admanager/displayAllContextList`

Handles the display all context list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/displayAllContextList '{}'
```

> ACG groups: private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="eulastatus"></a>
## `eulaStatus`

`luna://com.webos.service.admanager/eulaStatus`

Handles the eula status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/eulaStatus '{}'
```

> ACG groups: admanager.requestInfo, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getadid"></a>
## `getAdid`

`luna://com.webos.service.admanager/getAdid`

Returns the adid.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `DNS` |  |
| `IFA` |  |
| `IFAType` |  |
| `LMT` |  |
| `parentalControl` |  |
| `promotion` |  |
| `recommend` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/getAdid '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getadrequestinfo"></a>
## `getAdRequestInfo`

`luna://com.webos.service.admanager/getAdRequestInfo`

Returns the ad request info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/getAdRequestInfo '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="inactivatecookies"></a>
## `inactivateCookies`

`luna://com.webos.service.admanager/inactivateCookies`

Handles the inactivate cookies.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/inactivateCookies '{}'
```

> ACG groups: private, all, admanager.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchcmpapp"></a>
## `launchCMPApp`

`luna://com.webos.service.admanager/launchCMPApp`

Launches the CMP app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/launchCMPApp '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reqnormallog"></a>
## `reqNormalLog`

`luna://com.webos.service.admanager/reqNormalLog`

Handles the req normal log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/reqNormalLog '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestassetclickinfo"></a>
## `requestAssetClickInfo`

`luna://com.webos.service.admanager/requestAssetClickInfo`

Requests the asset click info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestAssetClickInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbannerinfo"></a>
## `requestBannerInfo`

`luna://com.webos.service.admanager/requestBannerInfo`

Requests the banner info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestBannerInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestbannerinfowithoutcontextindex"></a>
## `requestBannerInfoWithoutContextIndex`

`luna://com.webos.service.admanager/requestBannerInfoWithoutContextIndex`

Requests the banner info without context index.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestBannerInfoWithoutContextIndex '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestcampaigninfo"></a>
## `requestCampaignInfo`

`luna://com.webos.service.admanager/requestCampaignInfo`

Requests the campaign info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestCampaignInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestcontextindex"></a>
## `requestContextIndex`

`luna://com.webos.service.admanager/requestContextIndex`

Requests the context index.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestContextIndex '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpostrollinfo"></a>
## `requestPostRollInfo`

`luna://com.webos.service.admanager/requestPostRollInfo`

Requests the post roll info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestPostRollInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestpreapprollinfo"></a>
## `requestPreAppRollInfo`

`luna://com.webos.service.admanager/requestPreAppRollInfo`

Requests the pre app roll info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestPreAppRollInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestprerollinfo"></a>
## `requestPreRollInfo`

`luna://com.webos.service.admanager/requestPreRollInfo`

Requests the pre roll info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestPreRollInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestrollandbannerinfo"></a>
## `requestRollAndBannerInfo`

`luna://com.webos.service.admanager/requestRollAndBannerInfo`

Requests the roll and banner info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/requestRollAndBannerInfo '{}'
```

> ACG groups: public, private, all, admanager.requestInfo, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetifa"></a>
## `resetIFA` ⚠️ DANGEROUS

`luna://com.webos.service.admanager/resetIFA`

Resets the IFA.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/resetIFA '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendclickimpressiontracker"></a>
## `sendClickImpressionTracker`

`luna://com.webos.service.admanager/sendClickImpressionTracker`

Sends the click impression tracker.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/sendClickImpressionTracker '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendimpressiontracker"></a>
## `sendImpressionTracker`

`luna://com.webos.service.admanager/sendImpressionTracker`

Sends the impression tracker.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/sendImpressionTracker '{}'
```

> ACG groups: public, private, all, services, admanager.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdebugoption"></a>
## `setDebugOption`

`luna://com.webos.service.admanager/setDebugOption`

Sets the debug option.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/setDebugOption '{}'
```

> ACG groups: private, all, services, admanager.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setparentalcontrolforad"></a>
## `setParentalControlForAd`

`luna://com.webos.service.admanager/setParentalControlForAd`

Sets the parental control for ad.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/setParentalControlForAd '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settcf"></a>
## `setTCF`

`luna://com.webos.service.admanager/setTCF`

Sets the TCF.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/setTCF '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.admanager/start`

Starts the admanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/start '{}'
```

> ACG groups: private, configurator.callbacks, all, services, activities.callbacks, admanager.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startdownloadurl"></a>
## `startDownloadUrl`

`luna://com.webos.service.admanager/startDownloadUrl`

Starts the download URL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/startDownloadUrl '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatedns"></a>
## `updateDNS`

`luna://com.webos.service.admanager/updateDNS`

Updates the DNS.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.admanager/updateDNS '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
