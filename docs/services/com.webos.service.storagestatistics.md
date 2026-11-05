# `com.webos.service.storagestatistics`

Storage statistics: reports per-app storage usage, lists large apps and files, clears app data and removes files.

8 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`check`](#check) | private |  | storage | inferred | Checks the storagestatistics. |
| [`clearAppData`](#clearappdata) | private |  | storage | inferred | Clears the app data. |
| [`getAllAppStats`](#getallappstats) | private |  | storage | inferred | Returns the all app stats. |
| [`getAppStats`](#getappstats) | private |  | storage | inferred | Returns the app stats. |
| [`listInternalLargeFiles`](#listinternallargefiles) | private |  | storage | inferred | Lists the internal large files. |
| [`listLargeApps`](#listlargeapps) | private |  | storage | inferred | Lists the large apps. |
| [`listLargeFiles`](#listlargefiles) | private |  | storage | inferred | Lists the large files. |
| [`removeFile`](#removefile) | private |  | storage | inferred | Removes the file. ⚠️ |

<a id="check"></a>
## `check`

`luna://com.webos.service.storagestatistics/check`

Checks the storagestatistics.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `appStats` |  |
| `fileStats` |  |
| `freeSpace` |  |
| `logicalFreeSpace` |  |
| `spaceStats` |  |
| `totalSpace` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.storagestatistics/check '{}'
```

> ACG groups: configurator.callbacks, service.storagestatistics, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clearappdata"></a>
## `clearAppData`

`luna://com.webos.service.storagestatistics/clearAppData`

Clears the app data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.storagestatistics/clearAppData '{}'
```

> ACG groups: service.storagestatistics, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getallappstats"></a>
## `getAllAppStats`

`luna://com.webos.service.storagestatistics/getAllAppStats`

Returns the all app stats.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.storagestatistics/getAllAppStats '{}'
```

> ACG groups: service.storagestatistics, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getappstats"></a>
## `getAppStats`

`luna://com.webos.service.storagestatistics/getAppStats`

Returns the app stats.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.storagestatistics/getAppStats '{}'
```

> ACG groups: service.storagestatistics, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listinternallargefiles"></a>
## `listInternalLargeFiles`

`luna://com.webos.service.storagestatistics/listInternalLargeFiles`

Lists the internal large files.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.storagestatistics/listInternalLargeFiles '{}'
```

> ACG groups: service.storagestatistics, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listlargeapps"></a>
## `listLargeApps`

`luna://com.webos.service.storagestatistics/listLargeApps`

Lists the large apps.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.storagestatistics/listLargeApps '{}'
```

> ACG groups: service.storagestatistics, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listlargefiles"></a>
## `listLargeFiles`

`luna://com.webos.service.storagestatistics/listLargeFiles`

Lists the large files.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.storagestatistics/listLargeFiles '{}'
```

> ACG groups: service.storagestatistics, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removefile"></a>
## `removeFile` ⚠️ DANGEROUS

`luna://com.webos.service.storagestatistics/removeFile`

Removes the file.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.storagestatistics/removeFile '{}'
```

> ACG groups: service.storagestatistics, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
