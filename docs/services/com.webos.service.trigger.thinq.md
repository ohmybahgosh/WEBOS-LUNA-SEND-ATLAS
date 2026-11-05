# `com.webos.service.trigger.thinq`

ThinQ voice wake-word trigger service: gets and sets trigger activation and sensitivity and runs trigger acoustic tests. _(inferred from the service's methods)_

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getActivation`](#getactivation) | private |  | misc | inferred | Returns the activation. |
| [`getDataVersion`](#getdataversion) | private |  | misc | inferred | Returns the data version. |
| [`getSensitivity`](#getsensitivity) | private |  | misc | inferred | Returns the sensitivity. |
| [`setActivation`](#setactivation) | private |  | misc | inferred | Sets the activation. |
| [`setSensitivity`](#setsensitivity) | private |  | misc | inferred | Sets the sensitivity. |
| [`start`](#start) | private |  | misc | inferred | Starts the trigger thinq. |
| [`tas/endTest`](#tas_endtest) | private |  | misc | inferred | Handles the end test (tas) |
| [`tas/readyTest`](#tas_readytest) | private |  | misc | inferred | Handles the ready test (tas) |
| [`tas/runTest`](#tas_runtest) | private |  | misc | inferred | Runs the test (tas) |

<a id="getactivation"></a>
## `getActivation`

`luna://com.webos.service.trigger.thinq/getActivation`

Returns the activation.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.trigger.thinq/getActivation '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdataversion"></a>
## `getDataVersion`

`luna://com.webos.service.trigger.thinq/getDataVersion`

Returns the data version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.trigger.thinq/getDataVersion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsensitivity"></a>
## `getSensitivity`

`luna://com.webos.service.trigger.thinq/getSensitivity`

Returns the sensitivity.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.trigger.thinq/getSensitivity '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setactivation"></a>
## `setActivation`

`luna://com.webos.service.trigger.thinq/setActivation`

Sets the activation.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.trigger.thinq/setActivation '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsensitivity"></a>
## `setSensitivity`

`luna://com.webos.service.trigger.thinq/setSensitivity`

Sets the sensitivity.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.trigger.thinq/setSensitivity '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.trigger.thinq/start`

Starts the trigger thinq.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.trigger.thinq/start '{}'
```

> ACG groups: configurator.callbacks, private, activities.callbacks, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_endtest"></a>
## `tas/endTest`

`luna://com.webos.service.trigger.thinq/tas/endTest`

Handles the end test (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.trigger.thinq/tas/endTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_readytest"></a>
## `tas/readyTest`

`luna://com.webos.service.trigger.thinq/tas/readyTest`

Handles the ready test (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.trigger.thinq/tas/readyTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tas_runtest"></a>
## `tas/runTest`

`luna://com.webos.service.trigger.thinq/tas/runTest`

Runs the test (tas)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.trigger.thinq/tas/runTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
