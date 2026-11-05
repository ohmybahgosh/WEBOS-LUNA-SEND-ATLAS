# `com.palm.uploadd`

Diagnostics upload daemon: uploads crash reports, logs, and analytics to a server, manages log settings, and reports EULA and USB-path status. _(inferred from the service's methods)_

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`encryptfile`](#encryptfile) | private |  | misc | inferred | Handles the encryptfile. |
| [`geteulastatus`](#geteulastatus) | private |  | misc | inferred | Handles the geteulastatus. |
| [`getLogSettings`](#getlogsettings) | private |  | settings | inferred | Returns the log settings. |
| [`getusbpath`](#getusbpath) | private |  | misc | inferred | Handles the getusbpath. |
| [`setLogSettings`](#setlogsettings) | private |  | settings | inferred | Sets the log settings. |
| [`testUploadd`](#testuploadd) | private |  | misc | inferred | Tests the uploadd. |
| [`uploadAnalyticsReport`](#uploadanalyticsreport) | private |  | input | inferred | Uploads the analytics report. |
| [`uploadCrashReport`](#uploadcrashreport) | private |  | misc | inferred | Uploads the crash report. |
| [`uploadLog`](#uploadlog) | private |  | misc | inferred | Uploads the log. |

<a id="encryptfile"></a>
## `encryptfile`

`luna://com.palm.uploadd/encryptfile`

Handles the encryptfile.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.uploadd/encryptfile '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="geteulastatus"></a>
## `geteulastatus`

`luna://com.palm.uploadd/geteulastatus`

Handles the geteulastatus.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `eulaAccepted` |  |

```sh
luna-send -n 1 -f luna://com.palm.uploadd/geteulastatus '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlogsettings"></a>
## `getLogSettings`

`luna://com.palm.uploadd/getLogSettings`

Returns the log settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.uploadd/getLogSettings '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getusbpath"></a>
## `getusbpath`

`luna://com.palm.uploadd/getusbpath`

Handles the getusbpath.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.uploadd/getusbpath '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setlogsettings"></a>
## `setLogSettings`

`luna://com.palm.uploadd/setLogSettings`

Sets the log settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.uploadd/setLogSettings '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testuploadd"></a>
## `testUploadd`

`luna://com.palm.uploadd/testUploadd`

Tests the uploadd.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.uploadd/testUploadd '{}'
```

> ACG groups: all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="uploadanalyticsreport"></a>
## `uploadAnalyticsReport`

`luna://com.palm.uploadd/uploadAnalyticsReport`

Uploads the analytics report.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.uploadd/uploadAnalyticsReport '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="uploadcrashreport"></a>
## `uploadCrashReport`

`luna://com.palm.uploadd/uploadCrashReport`

Uploads the crash report.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.uploadd/uploadCrashReport '{}'
```

> ACG groups: private, all, system.debug.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="uploadlog"></a>
## `uploadLog`

`luna://com.palm.uploadd/uploadLog`

Uploads the log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.uploadd/uploadLog '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
