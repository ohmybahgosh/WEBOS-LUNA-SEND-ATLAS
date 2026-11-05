# `com.webos.service.sportsalert`

Sports-alert service driven by Activity Manager: fetches account, authentication, event, locale and settings data to deliver sports notifications. _(inferred from the service's methods)_

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getAccountByActivitymanager`](#getaccountbyactivitymanager) | private |  | activity | inferred | Returns the account by activitymanager. |
| [`getAuthenticationByActivitymanager`](#getauthenticationbyactivitymanager) | private |  | activity | inferred | Returns the authentication by activitymanager. |
| [`getEventByActivitymanager`](#geteventbyactivitymanager) | private |  | activity | inferred | Returns the event by activitymanager. |
| [`getLocaleInfoByActivitymanager`](#getlocaleinfobyactivitymanager) | private |  | activity | inferred | Returns the locale info by activitymanager. |
| [`getstatusByActivitymanager`](#getstatusbyactivitymanager) | private |  | activity | inferred | Handles the getstatus by activitymanager. |
| [`getSystemSettingsByActivitymanager`](#getsystemsettingsbyactivitymanager) | private |  | settings | inferred | Returns the system settings by activitymanager. |
| [`info`](#info) | private |  | misc | inferred | Handles the info. |
| [`invoke`](#invoke) | private |  | misc | inferred | Handles the invoke. |
| [`quit`](#quit) | private |  | misc | inferred | Quits the sportsalert. |

<a id="getaccountbyactivitymanager"></a>
## `getAccountByActivitymanager`

`luna://com.webos.service.sportsalert/getAccountByActivitymanager`

Returns the account by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalert/getAccountByActivitymanager '{}'
```

> ACG groups: service.sportsalert, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getauthenticationbyactivitymanager"></a>
## `getAuthenticationByActivitymanager`

`luna://com.webos.service.sportsalert/getAuthenticationByActivitymanager`

Returns the authentication by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalert/getAuthenticationByActivitymanager '{}'
```

> ACG groups: service.sportsalert, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteventbyactivitymanager"></a>
## `getEventByActivitymanager`

`luna://com.webos.service.sportsalert/getEventByActivitymanager`

Returns the event by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalert/getEventByActivitymanager '{}'
```

> ACG groups: service.sportsalert, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlocaleinfobyactivitymanager"></a>
## `getLocaleInfoByActivitymanager`

`luna://com.webos.service.sportsalert/getLocaleInfoByActivitymanager`

Returns the locale info by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalert/getLocaleInfoByActivitymanager '{}'
```

> ACG groups: service.sportsalert, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatusbyactivitymanager"></a>
## `getstatusByActivitymanager`

`luna://com.webos.service.sportsalert/getstatusByActivitymanager`

Handles the getstatus by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalert/getstatusByActivitymanager '{}'
```

> ACG groups: service.sportsalert, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsystemsettingsbyactivitymanager"></a>
## `getSystemSettingsByActivitymanager`

`luna://com.webos.service.sportsalert/getSystemSettingsByActivitymanager`

Returns the system settings by activitymanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalert/getSystemSettingsByActivitymanager '{}'
```

> ACG groups: service.sportsalert, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.sportsalert/info`

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
luna-send -n 1 -f luna://com.webos.service.sportsalert/info '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="invoke"></a>
## `invoke`

`luna://com.webos.service.sportsalert/invoke`

Handles the invoke.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalert/invoke '{}'
```

> ACG groups: service.sportsalert, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.sportsalert/quit`

Quits the sportsalert.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sportsalert/quit '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
