# `com.webos.service.eulaservice`

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cancelEulaDownload`](#canceleuladownload) | private |  | misc | Method on com.webos.service.eulaservice (introspected on-device; parameters undocumented). |
| [`getEulaDownloadStatus`](#geteuladownloadstatus) | private |  | misc | Getter on com.webos.service.eulaservice (introspected on-device; parameters undocumented). |
| [`marketingAllowedCallback`](#marketingallowedcallback) | private |  | misc | Method on com.webos.service.eulaservice (introspected on-device; parameters undocumented). |
| [`requestEulaDownload`](#requesteuladownload) | private |  | misc | Method on com.webos.service.eulaservice (introspected on-device; parameters undocumented). |
| [`resetEula`](#reseteula) | private |  | misc | Method on com.webos.service.eulaservice (introspected on-device; parameters undocumented). ⚠️ |
| [`start`](#start) | private |  | misc | Method on com.webos.service.eulaservice (introspected on-device; parameters undocumented). |

<a id="canceleuladownload"></a>
## `cancelEulaDownload`

`luna://com.webos.service.eulaservice/cancelEulaDownload`

Method on com.webos.service.eulaservice (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/cancelEulaDownload '{}'
```

> ACG groups: private, com.webos.service.eulaservice, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteuladownloadstatus"></a>
## `getEulaDownloadStatus`

`luna://com.webos.service.eulaservice/getEulaDownloadStatus`

Getter on com.webos.service.eulaservice (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/getEulaDownloadStatus '{}'
```

> ACG groups: private, com.webos.service.eulaservice, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="marketingallowedcallback"></a>
## `marketingAllowedCallback`

`luna://com.webos.service.eulaservice/marketingAllowedCallback`

Method on com.webos.service.eulaservice (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/marketingAllowedCallback '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requesteuladownload"></a>
## `requestEulaDownload`

`luna://com.webos.service.eulaservice/requestEulaDownload`

Method on com.webos.service.eulaservice (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/requestEulaDownload '{}'
```

> ACG groups: private, com.webos.service.eulaservice, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reseteula"></a>
## `resetEula` ⚠️ DANGEROUS

`luna://com.webos.service.eulaservice/resetEula`

Method on com.webos.service.eulaservice (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/resetEula '{}'
```

> ACG groups: private, com.webos.service.eulaservice, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.eulaservice/start`

Method on com.webos.service.eulaservice (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.eulaservice/start '{}'
```

> ACG groups: private, configurator.callbacks, com.webos.service.eulaservice, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
