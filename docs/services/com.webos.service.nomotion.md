# `com.webos.service.nomotion`

No-motion/no-operation power-saving timers: adds, queries and removes timers that fire when no remote motion or operation is detected. _(inferred from the service's methods)_

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addNoMotionAndNoOperationTimer`](#addnomotionandnooperationtimer) | private |  | input | inferred | Adds the no motion and no operation timer. |
| [`addNoMotionTimer`](#addnomotiontimer) | private |  | input | inferred | Adds the no motion timer. |
| [`getNoMotionAndNoOperationTimerInfo`](#getnomotionandnooperationtimerinfo) | private |  | input | inferred | Returns the no motion and no operation timer info. |
| [`getNoMotionTimerInfo`](#getnomotiontimerinfo) | private |  | input | inferred | Returns the no motion timer info. |
| [`removeNoMotionAndNoOperationTimer`](#removenomotionandnooperationtimer) | private |  | input | inferred | Removes the no motion and no operation timer. ⚠️ |
| [`removeNoMotionTimer`](#removenomotiontimer) | private |  | input | inferred | Removes the no motion timer. ⚠️ |
| [`test`](#test) | private |  | misc | inferred | Tests the nomotion. |

<a id="addnomotionandnooperationtimer"></a>
## `addNoMotionAndNoOperationTimer`

`luna://com.webos.service.nomotion/addNoMotionAndNoOperationTimer`

Adds the no motion and no operation timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nomotion/addNoMotionAndNoOperationTimer '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="addnomotiontimer"></a>
## `addNoMotionTimer`

`luna://com.webos.service.nomotion/addNoMotionTimer`

Adds the no motion timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nomotion/addNoMotionTimer '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnomotionandnooperationtimerinfo"></a>
## `getNoMotionAndNoOperationTimerInfo`

`luna://com.webos.service.nomotion/getNoMotionAndNoOperationTimerInfo`

Returns the no motion and no operation timer info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `noMotionAndNoOperationTimers` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.nomotion/getNoMotionAndNoOperationTimerInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getnomotiontimerinfo"></a>
## `getNoMotionTimerInfo`

`luna://com.webos.service.nomotion/getNoMotionTimerInfo`

Returns the no motion timer info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `noMotionTimers` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.nomotion/getNoMotionTimerInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removenomotionandnooperationtimer"></a>
## `removeNoMotionAndNoOperationTimer` ⚠️ DANGEROUS

`luna://com.webos.service.nomotion/removeNoMotionAndNoOperationTimer`

Removes the no motion and no operation timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nomotion/removeNoMotionAndNoOperationTimer '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removenomotiontimer"></a>
## `removeNoMotionTimer` ⚠️ DANGEROUS

`luna://com.webos.service.nomotion/removeNoMotionTimer`

Removes the no motion timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nomotion/removeNoMotionTimer '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.nomotion/test`

Tests the nomotion.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nomotion/test '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
