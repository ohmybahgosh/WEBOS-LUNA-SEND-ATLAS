# `com.webos.service.utp.ssu`

System software update over-the-air helper (utp stack): starts/cancels OTA updates, reports progress, version, and status, and manages warm-standby OTA. _(inferred from the service's methods)_

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancel`](#cancel) | private |  | misc | inferred | Cancels the UTP ssu. |
| [`checkOTASchExistInMinutes`](#checkotaschexistinminutes) | private |  | misc | inferred | Checks the OTA sch exist in minutes. |
| [`getProgress`](#getprogress) | private |  | misc | inferred | Returns the progress. |
| [`getStatus`](#getstatus) | private |  | misc | inferred | Returns the status. |
| [`getVersion`](#getversion) | private |  | misc | inferred | Returns the version. |
| [`onOffWarmStandByOTA`](#onoffwarmstandbyota) | private |  | db | inferred | Event handler: fires on the off warm stand by OTA. |
| [`start`](#start) | private |  | misc | inferred | Starts the UTP ssu. |
| [`startWarmStandByOTA`](#startwarmstandbyota) | private |  | db | inferred | Starts the warm stand by OTA. |
| [`stopWarmStandByOTA`](#stopwarmstandbyota) | private |  | db | inferred | Stops the warm stand by OTA. |

<a id="cancel"></a>
## `cancel`

`luna://com.webos.service.utp.ssu/cancel`

Cancels the UTP ssu.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.ssu/cancel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkotaschexistinminutes"></a>
## `checkOTASchExistInMinutes`

`luna://com.webos.service.utp.ssu/checkOTASchExistInMinutes`

Checks the OTA sch exist in minutes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.ssu/checkOTASchExistInMinutes '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getprogress"></a>
## `getProgress`

`luna://com.webos.service.utp.ssu/getProgress`

Returns the progress.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.ssu/getProgress '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.utp.ssu/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.ssu/getStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getversion"></a>
## `getVersion`

`luna://com.webos.service.utp.ssu/getVersion`

Returns the version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.ssu/getVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="onoffwarmstandbyota"></a>
## `onOffWarmStandByOTA`

`luna://com.webos.service.utp.ssu/onOffWarmStandByOTA`

Event handler: fires on the off warm stand by OTA.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.ssu/onOffWarmStandByOTA '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.utp.ssu/start`

Starts the UTP ssu.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.ssu/start '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startwarmstandbyota"></a>
## `startWarmStandByOTA`

`luna://com.webos.service.utp.ssu/startWarmStandByOTA`

Starts the warm stand by OTA.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.ssu/startWarmStandByOTA '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopwarmstandbyota"></a>
## `stopWarmStandByOTA`

`luna://com.webos.service.utp.ssu/stopWarmStandByOTA`

Stops the warm stand by OTA.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.ssu/stopWarmStandByOTA '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
