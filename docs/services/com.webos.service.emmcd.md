# `com.webos.service.emmcd`

eMMC storage daemon: reports flash lifetime, memory usage and profile info, and configures the eMMC profile and power-on settings. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkLifetime`](#checklifetime) | public |  | input | inferred | Checks the lifetime. |
| [`getMemoryUsage`](#getmemoryusage) | public |  | misc | inferred | Returns the memory usage. |
| [`getProfileInfo`](#getprofileinfo) | public |  | misc | inferred | Returns the profile info. |
| [`setEmmcPON`](#setemmcpon) | public |  | misc | inferred | Sets the emmc PON. |
| [`setProfileConfig`](#setprofileconfig) | public |  | settings | inferred | Sets the profile config. |

<a id="checklifetime"></a>
## `checkLifetime`

`luna://com.webos.service.emmcd/checkLifetime`

Checks the lifetime.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.emmcd/checkLifetime '{}'
```

> ACG groups: all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmemoryusage"></a>
## `getMemoryUsage`

`luna://com.webos.service.emmcd/getMemoryUsage`

Returns the memory usage.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.emmcd/getMemoryUsage '{}'
```

> ACG groups: all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getprofileinfo"></a>
## `getProfileInfo`

`luna://com.webos.service.emmcd/getProfileInfo`

Returns the profile info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.emmcd/getProfileInfo '{}'
```

> ACG groups: all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setemmcpon"></a>
## `setEmmcPON`

`luna://com.webos.service.emmcd/setEmmcPON`

Sets the emmc PON.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.emmcd/setEmmcPON '{}'
```

> ACG groups: all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setprofileconfig"></a>
## `setProfileConfig`

`luna://com.webos.service.emmcd/setProfileConfig`

Sets the profile config.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.emmcd/setProfileConfig '{}'
```

> ACG groups: all, public, system.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
