# `com.palm.service.bugreport`

21 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`disableCrashPopup`](#disablecrashpopup) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`disableCrashReporting`](#disablecrashreporting) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`doHeadlessBugReport`](#doheadlessbugreport) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`enableCrashPopup`](#enablecrashpopup) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`enableCrashReporting`](#enablecrashreporting) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`fileBugReport`](#filebugreport) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`fileCrashReport`](#filecrashreport) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`getBugReportingConfig`](#getbugreportingconfig) | public |  | settings | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`getCrashReportingJira`](#getcrashreportingjira) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`info`](#info) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`isCrashPopupEnabled`](#iscrashpopupenabled) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`isCrashReportingEnabled`](#iscrashreportingenabled) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`prepareBugReport`](#preparebugreport) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`quit`](#quit) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`removeCredential`](#removecredential) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). ⚠️ |
| [`resetScreenshots`](#resetscreenshots) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). ⚠️ |
| [`setCrashReportingJira`](#setcrashreportingjira) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`signInToJira`](#signintojira) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`signOutFromJira`](#signoutfromjira) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`storeCredential`](#storecredential) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |
| [`takeScreenshot`](#takescreenshot) | public |  | system-info | Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented). |

<a id="disablecrashpopup"></a>
## `disableCrashPopup`

`luna://com.palm.service.bugreport/disableCrashPopup`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/disableCrashPopup '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="disablecrashreporting"></a>
## `disableCrashReporting`

`luna://com.palm.service.bugreport/disableCrashReporting`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/disableCrashReporting '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="doheadlessbugreport"></a>
## `doHeadlessBugReport`

`luna://com.palm.service.bugreport/doHeadlessBugReport`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/doHeadlessBugReport '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enablecrashpopup"></a>
## `enableCrashPopup`

`luna://com.palm.service.bugreport/enableCrashPopup`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/enableCrashPopup '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enablecrashreporting"></a>
## `enableCrashReporting`

`luna://com.palm.service.bugreport/enableCrashReporting`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/enableCrashReporting '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="filebugreport"></a>
## `fileBugReport`

`luna://com.palm.service.bugreport/fileBugReport`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/fileBugReport '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="filecrashreport"></a>
## `fileCrashReport`

`luna://com.palm.service.bugreport/fileCrashReport`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/fileCrashReport '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbugreportingconfig"></a>
## `getBugReportingConfig`

`luna://com.palm.service.bugreport/getBugReportingConfig`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/getBugReportingConfig '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcrashreportingjira"></a>
## `getCrashReportingJira`

`luna://com.palm.service.bugreport/getCrashReportingJira`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/getCrashReportingJira '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.palm.service.bugreport/info`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/info '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iscrashpopupenabled"></a>
## `isCrashPopupEnabled`

`luna://com.palm.service.bugreport/isCrashPopupEnabled`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/isCrashPopupEnabled '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="iscrashreportingenabled"></a>
## `isCrashReportingEnabled`

`luna://com.palm.service.bugreport/isCrashReportingEnabled`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/isCrashReportingEnabled '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="preparebugreport"></a>
## `prepareBugReport`

`luna://com.palm.service.bugreport/prepareBugReport`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/prepareBugReport '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.palm.service.bugreport/quit`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/quit '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removecredential"></a>
## `removeCredential` ⚠️ DANGEROUS

`luna://com.palm.service.bugreport/removeCredential`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/removeCredential '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="resetscreenshots"></a>
## `resetScreenshots` ⚠️ DANGEROUS

`luna://com.palm.service.bugreport/resetScreenshots`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/resetScreenshots '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setcrashreportingjira"></a>
## `setCrashReportingJira`

`luna://com.palm.service.bugreport/setCrashReportingJira`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/setCrashReportingJira '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="signintojira"></a>
## `signInToJira`

`luna://com.palm.service.bugreport/signInToJira`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/signInToJira '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="signoutfromjira"></a>
## `signOutFromJira`

`luna://com.palm.service.bugreport/signOutFromJira`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/signOutFromJira '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="storecredential"></a>
## `storeCredential`

`luna://com.palm.service.bugreport/storeCredential`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/storeCredential '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="takescreenshot"></a>
## `takeScreenshot`

`luna://com.palm.service.bugreport/takeScreenshot`

Method on com.palm.service.bugreport (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.service.bugreport/takeScreenshot '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
