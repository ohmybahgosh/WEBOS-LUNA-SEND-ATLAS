# `com.webos.service.eulaservice`

EULA service: downloads and manages end-user license agreements, reports download status, resets EULAs, and handles marketing-consent callbacks. _(inferred from the service's methods)_

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancelEulaDownload`](#canceleuladownload) | private |  | misc | inferred | Cancels the eula download. |
| [`getEulaDownloadStatus`](#geteuladownloadstatus) | private |  | misc | inferred | Returns the eula download status. |
| [`marketingAllowedCallback`](#marketingallowedcallback) | private |  | misc | inferred | Handles the marketing allowed callback. |
| [`requestEulaDownload`](#requesteuladownload) | private |  | misc | inferred | Requests the eula download. |
| [`resetEula`](#reseteula) | private |  | misc | inferred | Resets the eula. ⚠️ |
| [`start`](#start) | private |  | misc | inferred | Starts the eulaservice. |

<a id="canceleuladownload"></a>
## `cancelEulaDownload`

`luna://com.webos.service.eulaservice/cancelEulaDownload`

Cancels the eula download.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/cancelEulaDownload '{}'
```

> ACG groups: private, com.webos.service.eulaservice, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteuladownloadstatus"></a>
## `getEulaDownloadStatus`

`luna://com.webos.service.eulaservice/getEulaDownloadStatus`

Returns the eula download status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/getEulaDownloadStatus '{}'
```

> ACG groups: private, com.webos.service.eulaservice, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="marketingallowedcallback"></a>
## `marketingAllowedCallback`

`luna://com.webos.service.eulaservice/marketingAllowedCallback`

Handles the marketing allowed callback.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/marketingAllowedCallback '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requesteuladownload"></a>
## `requestEulaDownload`

`luna://com.webos.service.eulaservice/requestEulaDownload`

Requests the eula download.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/requestEulaDownload '{}'
```

> ACG groups: private, com.webos.service.eulaservice, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reseteula"></a>
## `resetEula` ⚠️ DANGEROUS

`luna://com.webos.service.eulaservice/resetEula`

Resets the eula.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/resetEula '{}'
```

> ACG groups: private, com.webos.service.eulaservice, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.eulaservice/start`

Starts the eulaservice.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/start '{}'
```

> ACG groups: private, configurator.callbacks, com.webos.service.eulaservice, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
