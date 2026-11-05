# `com.webos.service.legacybroadcast.swupdate`

Legacy-broadcast OTA software update: starts and cancels updates, reports progress and version, and manages warm-standby (standby-time) OTA. _(inferred from the service's methods)_

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancel`](#cancel) | private |  | tv-broadcast | inferred | Cancels the legacybroadcast swupdate. |
| [`checkOTASchExistInMinutes`](#checkotaschexistinminutes) | private |  | tv-broadcast | inferred | Checks the OTA sch exist in minutes. |
| [`getProgress`](#getprogress) | private |  | tv-broadcast | inferred | Returns the progress. |
| [`getStatus`](#getstatus) | private |  | tv-broadcast | inferred | Returns the status. |
| [`getVersion`](#getversion) | private |  | tv-broadcast | inferred | Returns the version. |
| [`onOffWarmStandByOTA`](#onoffwarmstandbyota) | private |  | tv-broadcast | inferred | Event handler: fires on the off warm stand by OTA. |
| [`start`](#start) | private |  | tv-broadcast | inferred | Starts the legacybroadcast swupdate. |
| [`startWarmStandByOTA`](#startwarmstandbyota) | private |  | tv-broadcast | inferred | Starts the warm stand by OTA. |
| [`stopWarmStandByOTA`](#stopwarmstandbyota) | private |  | tv-broadcast | inferred | Stops the warm stand by OTA. |

<a id="cancel"></a>
## `cancel`

`luna://com.webos.service.legacybroadcast.swupdate/cancel`

Cancels the legacybroadcast swupdate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.swupdate/cancel '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkotaschexistinminutes"></a>
## `checkOTASchExistInMinutes`

`luna://com.webos.service.legacybroadcast.swupdate/checkOTASchExistInMinutes`

Checks the OTA sch exist in minutes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.swupdate/checkOTASchExistInMinutes '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getprogress"></a>
## `getProgress`

`luna://com.webos.service.legacybroadcast.swupdate/getProgress`

Returns the progress.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.swupdate/getProgress '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.legacybroadcast.swupdate/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.swupdate/getStatus '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getversion"></a>
## `getVersion`

`luna://com.webos.service.legacybroadcast.swupdate/getVersion`

Returns the version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.swupdate/getVersion '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="onoffwarmstandbyota"></a>
## `onOffWarmStandByOTA`

`luna://com.webos.service.legacybroadcast.swupdate/onOffWarmStandByOTA`

Event handler: fires on the off warm stand by OTA.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.swupdate/onOffWarmStandByOTA '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.legacybroadcast.swupdate/start`

Starts the legacybroadcast swupdate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.swupdate/start '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startwarmstandbyota"></a>
## `startWarmStandByOTA`

`luna://com.webos.service.legacybroadcast.swupdate/startWarmStandByOTA`

Starts the warm stand by OTA.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.swupdate/startWarmStandByOTA '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopwarmstandbyota"></a>
## `stopWarmStandByOTA`

`luna://com.webos.service.legacybroadcast.swupdate/stopWarmStandByOTA`

Stops the warm stand by OTA.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.swupdate/stopWarmStandByOTA '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
