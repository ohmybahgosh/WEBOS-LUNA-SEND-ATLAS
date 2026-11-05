# `com.webos.chromecast.cell`

Appears to manage the Chromecast-built-in (Cast) runtime: checks terms of service, reports cell/control/runtime-manager status, and starts and stops the service. _(inferred from the service's methods)_

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkTos`](#checktos) | private |  | security | inferred | Checks the tos. |
| [`getCellStatus`](#getcellstatus) | private |  | security | inferred | Returns the cell status. |
| [`getControlStatus`](#getcontrolstatus) | private |  | security | inferred | Returns the control status. |
| [`getRuntimeManagerStatus`](#getruntimemanagerstatus) | private |  | input | inferred | Returns the runtime manager status. |
| [`start`](#start) | private |  | security | inferred | Starts the chromecast cell. |
| [`stop`](#stop) | private |  | security | inferred | Stops the chromecast cell. |

<a id="checktos"></a>
## `checkTos`

`luna://com.webos.chromecast.cell/checkTos`

Checks the tos.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `accepted` |  |

```sh
luna-send -n 1 -f luna://com.webos.chromecast.cell/checkTos '{}'
```

> ACG groups: all, com.webos.chromecast.cell.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcellstatus"></a>
## `getCellStatus`

`luna://com.webos.chromecast.cell/getCellStatus`

Returns the cell status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `status` |  |

```sh
luna-send -n 1 -f luna://com.webos.chromecast.cell/getCellStatus '{}'
```

> ACG groups: all, com.webos.chromecast.cell.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcontrolstatus"></a>
## `getControlStatus`

`luna://com.webos.chromecast.cell/getControlStatus`

Returns the control status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `cast_build_number` |  |
| `cast_name` |  |
| `cast_state` |  |
| `locale` |  |
| `progress` |  |
| `setup` |  |
| `state` |  |
| `status` |  |
| `time_in_12_hour_format` |  |
| `timezone` |  |
| `update` |  |
| `update_build_number` |  |
| `usage_report` |  |

```sh
luna-send -n 1 -f luna://com.webos.chromecast.cell/getControlStatus '{}'
```

> ACG groups: all, com.webos.chromecast.cell.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getruntimemanagerstatus"></a>
## `getRuntimeManagerStatus`

`luna://com.webos.chromecast.cell/getRuntimeManagerStatus`

Returns the runtime manager status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.chromecast.cell/getRuntimeManagerStatus '{}'
```

> ACG groups: all, com.webos.chromecast.cell.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.chromecast.cell/start`

Starts the chromecast cell.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.chromecast.cell/start '{}'
```

> ACG groups: all, com.webos.chromecast.cell.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stop"></a>
## `stop`

`luna://com.webos.chromecast.cell/stop`

Stops the chromecast cell.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.chromecast.cell/stop '{}'
```

> ACG groups: all, com.webos.chromecast.cell.group.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
