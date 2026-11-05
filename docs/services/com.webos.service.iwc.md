# `com.webos.service.iwc`

Inter-window composition (IWC) service: publishes and exports windows, sets crop regions and window properties for compositing. _(inferred from the service's methods)_

8 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`debug/debugEngineOnoff`](#debug_debugengineonoff) | private |  | misc | inferred | Handles the debug engine onoff (debug) |
| [`debug/debugGetAllStatus`](#debug_debuggetallstatus) | private |  | misc | inferred | Handles the debug get all status (debug) |
| [`listPublishedWindows`](#listpublishedwindows) | private |  | misc | inferred | Lists the published windows. |
| [`publishWindow`](#publishwindow) | private |  | misc | inferred | Handles the publish window. |
| [`setCropRegion`](#setcropregion) | private |  | misc | inferred | Sets the crop region. |
| [`setExportedWindow`](#setexportedwindow) | private |  | misc | inferred | Sets the exported window. |
| [`setProperty`](#setproperty) | private |  | misc | inferred | Sets the property. |
| [`stopPublishWindow`](#stoppublishwindow) | private |  | misc | inferred | Stops the publish window. |

<a id="debug_debugengineonoff"></a>
## `debug/debugEngineOnoff`

`luna://com.webos.service.iwc/debug/debugEngineOnoff`

Handles the debug engine onoff (debug)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iwc/debug/debugEngineOnoff '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_debuggetallstatus"></a>
## `debug/debugGetAllStatus`

`luna://com.webos.service.iwc/debug/debugGetAllStatus`

Handles the debug get all status (debug)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iwc/debug/debugGetAllStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listpublishedwindows"></a>
## `listPublishedWindows`

`luna://com.webos.service.iwc/listPublishedWindows`

Lists the published windows.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `publishedWindows` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.iwc/listPublishedWindows '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="publishwindow"></a>
## `publishWindow`

`luna://com.webos.service.iwc/publishWindow`

Handles the publish window.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iwc/publishWindow '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcropregion"></a>
## `setCropRegion`

`luna://com.webos.service.iwc/setCropRegion`

Sets the crop region.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iwc/setCropRegion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setexportedwindow"></a>
## `setExportedWindow`

`luna://com.webos.service.iwc/setExportedWindow`

Sets the exported window.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iwc/setExportedWindow '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setproperty"></a>
## `setProperty`

`luna://com.webos.service.iwc/setProperty`

Sets the property.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iwc/setProperty '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stoppublishwindow"></a>
## `stopPublishWindow`

`luna://com.webos.service.iwc/stopPublishWindow`

Stops the publish window.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iwc/stopPublishWindow '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
