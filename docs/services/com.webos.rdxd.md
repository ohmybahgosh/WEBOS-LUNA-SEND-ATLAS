# `com.webos.rdxd`

Remote Diagnostics daemon (RDX): configures logging levels and generates diagnostic log reports. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getLogSettings`](#getlogsettings) | private |  | settings | inferred | Returns the log settings. |
| [`makeLogReport`](#makelogreport) | private |  | misc | inferred | Makes the log report. |
| [`makeReport`](#makereport) | private |  | misc | inferred | Makes the report. |
| [`setLogSettings`](#setlogsettings) | private |  | settings | inferred | Sets the log settings. |

<a id="getlogsettings"></a>
## `getLogSettings`

`luna://com.webos.rdxd/getLogSettings`

Returns the log settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.rdxd/getLogSettings '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="makelogreport"></a>
## `makeLogReport`

`luna://com.webos.rdxd/makeLogReport`

Makes the log report.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.rdxd/makeLogReport '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="makereport"></a>
## `makeReport`

`luna://com.webos.rdxd/makeReport`

Makes the report.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.rdxd/makeReport '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setlogsettings"></a>
## `setLogSettings`

`luna://com.webos.rdxd/setLogSettings`

Sets the log settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.rdxd/setLogSettings '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
