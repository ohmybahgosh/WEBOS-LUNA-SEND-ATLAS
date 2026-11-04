# `com.webos.pmlogd`

12 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`backuplogs`](#backuplogs) | private |  | misc | Method on com.webos.pmlogd (introspected on-device; parameters undocumented). |
| [`collectAllLog`](#collectalllog) | private |  | misc | Method on com.webos.pmlogd (introspected on-device; parameters undocumented). |
| [`enableNewWhitelist`](#enablenewwhitelist) | private |  | misc | Reloads the pmlogd dev-log whitelist (also reloaded on reboot) |
| [`forcerotate`](#forcerotate) | private |  | misc | Method on com.webos.pmlogd (introspected on-device; parameters undocumented). |
| [`getAllowDevLog`](#getallowdevlog) | private |  | misc | Getter on com.webos.pmlogd (introspected on-device; parameters undocumented). |
| [`getBackupLogs`](#getbackuplogs) | private |  | misc | Getter on com.webos.pmlogd (introspected on-device; parameters undocumented). |
| [`getdevlogstatus`](#getdevlogstatus) | private |  | misc | Reads whether dev logs are being recorded |
| [`removeNormalLog`](#removenormallog) | private |  | misc | Method on com.webos.pmlogd (introspected on-device; parameters undocumented). ⚠️ |
| [`setAllowDevLog`](#setallowdevlog) | private |  | misc | Setter on com.webos.pmlogd (introspected on-device; parameters undocumented). |
| [`setBackupLogs`](#setbackuplogs) | private |  | misc | Setter on com.webos.pmlogd (introspected on-device; parameters undocumented). |
| [`setdevlogstatus`](#setdevlogstatus) | private |  | activity | Enables dev logging on webOS 3.x (no whitelist) |
| [`subscribeOnRotations`](#subscribeonrotations) | private |  | misc | Method on com.webos.pmlogd (introspected on-device; parameters undocumented). |

<a id="backuplogs"></a>
## `backuplogs`

`luna://com.webos.pmlogd/backuplogs`

Method on com.webos.pmlogd (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/backuplogs '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="collectalllog"></a>
## `collectAllLog`

`luna://com.webos.pmlogd/collectAllLog`

Method on com.webos.pmlogd (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/collectAllLog '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablenewwhitelist"></a>
## `enableNewWhitelist`

`luna://com.webos.pmlogd/enableNewWhitelist`

Reloads the pmlogd dev-log whitelist (also reloaded on reboot)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 luna://com.webos.pmlogd/enableNewWhitelist '{}'
```

> Documented in community pmlogd logging note.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/ops/pmlogd-logging.md)

<a id="forcerotate"></a>
## `forcerotate`

`luna://com.webos.pmlogd/forcerotate`

Method on com.webos.pmlogd (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/forcerotate '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getallowdevlog"></a>
## `getAllowDevLog`

`luna://com.webos.pmlogd/getAllowDevLog`

Getter on com.webos.pmlogd (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/getAllowDevLog '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbackuplogs"></a>
## `getBackupLogs`

`luna://com.webos.pmlogd/getBackupLogs`

Getter on com.webos.pmlogd (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/getBackupLogs '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevlogstatus"></a>
## `getdevlogstatus`

`luna://com.webos.pmlogd/getdevlogstatus`

Reads whether dev logs are being recorded

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 -f 'luna://com.webos.pmlogd/getdevlogstatus' '{}'
```

> Companion of setdevlogstatus {"recordDevLogs":bool}.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/ops/pmlogd-logging.md)

<a id="removenormallog"></a>
## `removeNormalLog` ⚠️ DANGEROUS

`luna://com.webos.pmlogd/removeNormalLog`

Method on com.webos.pmlogd (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/removeNormalLog '{}'
```

> ACG groups: all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setallowdevlog"></a>
## `setAllowDevLog`

`luna://com.webos.pmlogd/setAllowDevLog`

Setter on com.webos.pmlogd (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/setAllowDevLog '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setbackuplogs"></a>
## `setBackupLogs`

`luna://com.webos.pmlogd/setBackupLogs`

Setter on com.webos.pmlogd (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/setBackupLogs '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdevlogstatus"></a>
## `setdevlogstatus`

`luna://com.webos.pmlogd/setdevlogstatus`

Enables dev logging on webOS 3.x (no whitelist)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3.x and older (4.x+ uses config system.collectDevLogs)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `recordDevLogs` | boolean |

```sh
luna-send -n 1 -f 'luna://com.webos.pmlogd/setdevlogstatus' '{"recordDevLogs":true}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/logging.md), [2](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/debug/pmlog/pmlog.component.ts), [3](https://github.com/webosbrew/piccap/blob/HEAD/servicefiles/setuplegacylogging.sh)

<a id="subscribeonrotations"></a>
## `subscribeOnRotations`

`luna://com.webos.pmlogd/subscribeOnRotations`

Method on com.webos.pmlogd (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/subscribeOnRotations '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
