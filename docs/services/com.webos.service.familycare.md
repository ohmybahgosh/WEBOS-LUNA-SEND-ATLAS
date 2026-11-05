# `com.webos.service.familycare`

Family-care/parental-controls service: checks parental settings, monitors usage, and launches usage-care flows. _(inferred from the service's methods)_

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkParentalForPine`](#checkparentalforpine) | private |  | misc | inferred | Checks the parental for pine. |
| [`getPowerActiveByActivitymanager`](#getpoweractivebyactivitymanager) | private |  | power | inferred | Returns the power active by activitymanager. |
| [`getSystemSettingsByActivitymanager`](#getsystemsettingsbyactivitymanager) | private |  | settings | inferred | Returns the system settings by activitymanager. |
| [`info`](#info) | private |  | misc | inferred | Handles the info. |
| [`invoke`](#invoke) | private |  | misc | inferred | Handles the invoke. |
| [`launchUsageCareByPCS`](#launchusagecarebypcs) | private |  | apps | inferred | Launches the usage care by PCS. |
| [`quit`](#quit) | private |  | misc | inferred | Quits the familycare. |

<a id="checkparentalforpine"></a>
## `checkParentalForPine`

`luna://com.webos.service.familycare/checkParentalForPine`

Checks the parental for pine.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.familycare/checkParentalForPine '{}'
```

> ACG groups: private, configurator.callbacks, all, service.familycare.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpoweractivebyactivitymanager"></a>
## `getPowerActiveByActivitymanager`

`luna://com.webos.service.familycare/getPowerActiveByActivitymanager`

Returns the power active by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.familycare/getPowerActiveByActivitymanager '{}'
```

> ACG groups: private, configurator.callbacks, all, service.familycare, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsystemsettingsbyactivitymanager"></a>
## `getSystemSettingsByActivitymanager`

`luna://com.webos.service.familycare/getSystemSettingsByActivitymanager`

Returns the system settings by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.familycare/getSystemSettingsByActivitymanager '{}'
```

> ACG groups: private, configurator.callbacks, all, service.familycare, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.familycare/info`

Handles the info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `arguments` |  |
| `commands` |  |
| `description` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.familycare/info '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="invoke"></a>
## `invoke`

`luna://com.webos.service.familycare/invoke`

Handles the invoke.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.familycare/invoke '{}'
```

> ACG groups: private, all, service.familycare.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchusagecarebypcs"></a>
## `launchUsageCareByPCS`

`luna://com.webos.service.familycare/launchUsageCareByPCS`

Launches the usage care by PCS.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.familycare/launchUsageCareByPCS '{}'
```

> ACG groups: private, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.familycare/quit`

Quits the familycare.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.familycare/quit '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
