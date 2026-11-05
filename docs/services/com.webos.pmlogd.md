# `com.webos.pmlogd`

PmLog logging daemon: collects and backs up system logs, forces log rotation, manages the log whitelist, and toggles developer logging.

12 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`backuplogs`](#backuplogs) | private |  | misc | inferred | Handles the backuplogs. |
| [`collectAllLog`](#collectalllog) | private |  | misc | inferred | Handles the collect all log. |
| [`enableNewWhitelist`](#enablenewwhitelist) | private |  | misc | documented | Reloads the pmlogd dev-log whitelist (also reloaded on reboot) |
| [`forcerotate`](#forcerotate) | private |  | misc | inferred | Handles the forcerotate. |
| [`getAllowDevLog`](#getallowdevlog) | private |  | misc | inferred | Returns the allow dev log. |
| [`getBackupLogs`](#getbackuplogs) | private |  | misc | inferred | Returns the backup logs. |
| [`getdevlogstatus`](#getdevlogstatus) | private |  | misc | documented | Reads whether dev logs are being recorded |
| [`removeNormalLog`](#removenormallog) | private |  | misc | inferred | Removes the normal log. ⚠️ |
| [`setAllowDevLog`](#setallowdevlog) | private |  | misc | inferred | Sets the allow dev log. |
| [`setBackupLogs`](#setbackuplogs) | private |  | misc | inferred | Sets the backup logs. |
| [`setdevlogstatus`](#setdevlogstatus) | private |  | activity | documented | Enables dev logging on webOS 3.x (no whitelist) |
| [`subscribeOnRotations`](#subscribeonrotations) | private |  | misc | inferred | Subscribes to the on rotations. |

<a id="backuplogs"></a>
## `backuplogs`

`luna://com.webos.pmlogd/backuplogs`

Handles the backuplogs.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/backuplogs '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="collectalllog"></a>
## `collectAllLog`

`luna://com.webos.pmlogd/collectAllLog`

Handles the collect all log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.pmlogd/enableNewWhitelist '{}'
```

> Documented in community pmlogd logging note.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/ops/pmlogd-logging.md)

<a id="forcerotate"></a>
## `forcerotate`

`luna://com.webos.pmlogd/forcerotate`

Handles the forcerotate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/forcerotate '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getallowdevlog"></a>
## `getAllowDevLog`

`luna://com.webos.pmlogd/getAllowDevLog`

Returns the allow dev log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `IsAllowed` |  |

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/getAllowDevLog '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbackuplogs"></a>
## `getBackupLogs`

`luna://com.webos.pmlogd/getBackupLogs`

Returns the backup logs.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
luna-send -n 1 -f 'luna://com.webos.pmlogd/getdevlogstatus' '{}'
```

> Companion of setdevlogstatus {"recordDevLogs":bool}.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/ops/pmlogd-logging.md)

<a id="removenormallog"></a>
## `removeNormalLog` ⚠️ DANGEROUS

`luna://com.webos.pmlogd/removeNormalLog`

Removes the normal log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/removeNormalLog '{}'
```

> ACG groups: all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setallowdevlog"></a>
## `setAllowDevLog`

`luna://com.webos.pmlogd/setAllowDevLog`

Sets the allow dev log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/setAllowDevLog '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setbackuplogs"></a>
## `setBackupLogs`

`luna://com.webos.pmlogd/setBackupLogs`

Sets the backup logs.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

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

Subscribes to the on rotations.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.pmlogd/subscribeOnRotations '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
