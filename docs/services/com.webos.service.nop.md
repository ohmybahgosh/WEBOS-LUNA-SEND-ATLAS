# `com.webos.service.nop`

Appears to manage 'NOP' timers: adds and removes timers, reports timer info, and notifies on expiry. Specific purpose not inferable; marked. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`addNopTimer`](#addnoptimer) | private |  | input | inferred | Adds the nop timer. |
| [`getInformation`](#getinformation) | private |  | misc | inferred | Returns the information. |
| [`getTimerInfo`](#gettimerinfo) | private |  | input | inferred | Returns the timer info. |
| [`notifyExpireTimer`](#notifyexpiretimer) | private |  | input | inferred | Notifies of the expire timer. |
| [`removeNopTimer`](#removenoptimer) | private |  | input | documented | Removes the nop timer. ⚠️ |

<a id="addnoptimer"></a>
## `addNopTimer`

`luna://com.webos.service.nop/addNopTimer`

Adds the nop timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nop/addNopTimer '{}'
```

> ACG groups: private, nop.control, applications.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinformation"></a>
## `getInformation`

`luna://com.webos.service.nop/getInformation`

Returns the information.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nop/getInformation '{}'
```

> ACG groups: private, nop.control, applications.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettimerinfo"></a>
## `getTimerInfo`

`luna://com.webos.service.nop/getTimerInfo`

Returns the timer info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nop/getTimerInfo '{}'
```

> ACG groups: private, nop.control, applications.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyexpiretimer"></a>
## `notifyExpireTimer`

`luna://com.webos.service.nop/notifyExpireTimer`

Notifies of the expire timer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nop/notifyExpireTimer '{}'
```

> ACG groups: private, nop.control, applications.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removenoptimer"></a>
## `removeNopTimer` ⚠️ DANGEROUS

`luna://com.webos.service.nop/removeNopTimer`

Removes the nop timer.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `timerId` | String (observed in live traffic) |
| `option` | String (observed in live traffic) |

```sh
luna-send -n 1 -f luna://com.webos.service.nop/removeNopTimer '{}'
```

> ACG groups: private, nop.control, applications.internal, all. Flagged dangerous by name; verify before calling.  Parameters observed in live LS2 bus traffic (ls-monitor capture, LG webOS 22, W22O): the names and types are from real calls to this method, so the set may be incomplete and which parameters are required is not determined.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
