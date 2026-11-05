# `com.webos.service.systemUIManager`

System-UI manager: launches and closes apps by ID and reports the foreground app info. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`closeByAppId`](#closebyappid) | public |  | misc | inferred | Closes the by app ID. |
| [`getForegroundAppInfo`](#getforegroundappinfo) | public |  | misc | inferred | Returns the foreground app info. |
| [`launch`](#launch) | public |  | apps | inferred | Launches the system UI manager. |

<a id="closebyappid"></a>
## `closeByAppId`

`luna://com.webos.service.systemUIManager/closeByAppId`

Closes the by app ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemUIManager/closeByAppId '{}'
```

> ACG groups: surfaces.control, public, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getforegroundappinfo"></a>
## `getForegroundAppInfo`

`luna://com.webos.service.systemUIManager/getForegroundAppInfo`

Returns the foreground app info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemUIManager/getForegroundAppInfo '{}'
```

> ACG groups: surfaces.status, public, all, launcher.status.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launch"></a>
## `launch`

`luna://com.webos.service.systemUIManager/launch`

Launches the system UI manager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemUIManager/launch '{}'
```

> ACG groups: surfaces.control, public, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
