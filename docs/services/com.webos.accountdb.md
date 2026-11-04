# `com.webos.accountdb`

28 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`batch`](#batch) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`compact`](#compact) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`del`](#del) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`deleteWorkSpace`](#deleteworkspace) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). ⚠️ |
| [`delKind`](#delkind) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`dump`](#dump) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`fill`](#fill) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`find`](#find) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`get`](#get) | private |  | db | Getter on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`internal/postBackup`](#internal_postbackup) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`internal/postRestore`](#internal_postrestore) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`internal/preBackup`](#internal_prebackup) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`internal/preRestore`](#internal_prerestore) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`internal/releaseAdminProfile`](#internal_releaseadminprofile) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`internal/scheduledBackup`](#internal_scheduledbackup) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`internal/scheduledPurge`](#internal_scheduledpurge) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`internal/scheduledSpaceCheck`](#internal_scheduledspacecheck) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`internal/spaceCheck`](#internal_spacecheck) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`merge`](#merge) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`mergePut`](#mergeput) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`purge`](#purge) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`put`](#put) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`putKind`](#putkind) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`putPermissions`](#putpermissions) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`resetWorkSpaceData`](#resetworkspacedata) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). ⚠️ |
| [`search`](#search) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`setCurrentWorkSpace`](#setcurrentworkspace) | private |  | db | Setter on com.webos.accountdb (introspected on-device; parameters undocumented). |
| [`watch`](#watch) | private |  | db | Method on com.webos.accountdb (introspected on-device; parameters undocumented). |

<a id="batch"></a>
## `batch`

`luna://com.webos.accountdb/batch`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/batch '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="compact"></a>
## `compact`

`luna://com.webos.accountdb/compact`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/compact '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="del"></a>
## `del`

`luna://com.webos.accountdb/del`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/del '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deleteworkspace"></a>
## `deleteWorkSpace` ⚠️ DANGEROUS

`luna://com.webos.accountdb/deleteWorkSpace`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/deleteWorkSpace '{}'
```

> ACG groups: all, database, database.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="delkind"></a>
## `delKind`

`luna://com.webos.accountdb/delKind`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/delKind '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dump"></a>
## `dump`

`luna://com.webos.accountdb/dump`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/dump '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="fill"></a>
## `fill`

`luna://com.webos.accountdb/fill`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/fill '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="find"></a>
## `find`

`luna://com.webos.accountdb/find`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/find '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="get"></a>
## `get`

`luna://com.webos.accountdb/get`

Getter on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/get '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_postbackup"></a>
## `internal/postBackup`

`luna://com.webos.accountdb/internal/postBackup`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/postBackup '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_postrestore"></a>
## `internal/postRestore`

`luna://com.webos.accountdb/internal/postRestore`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/postRestore '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_prebackup"></a>
## `internal/preBackup`

`luna://com.webos.accountdb/internal/preBackup`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/preBackup '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_prerestore"></a>
## `internal/preRestore`

`luna://com.webos.accountdb/internal/preRestore`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/preRestore '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_releaseadminprofile"></a>
## `internal/releaseAdminProfile`

`luna://com.webos.accountdb/internal/releaseAdminProfile`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/releaseAdminProfile '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_scheduledbackup"></a>
## `internal/scheduledBackup`

`luna://com.webos.accountdb/internal/scheduledBackup`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/scheduledBackup '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_scheduledpurge"></a>
## `internal/scheduledPurge`

`luna://com.webos.accountdb/internal/scheduledPurge`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/scheduledPurge '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_scheduledspacecheck"></a>
## `internal/scheduledSpaceCheck`

`luna://com.webos.accountdb/internal/scheduledSpaceCheck`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/scheduledSpaceCheck '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_spacecheck"></a>
## `internal/spaceCheck`

`luna://com.webos.accountdb/internal/spaceCheck`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/spaceCheck '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="merge"></a>
## `merge`

`luna://com.webos.accountdb/merge`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/merge '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="mergeput"></a>
## `mergePut`

`luna://com.webos.accountdb/mergePut`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/mergePut '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="purge"></a>
## `purge`

`luna://com.webos.accountdb/purge`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/purge '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="put"></a>
## `put`

`luna://com.webos.accountdb/put`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/put '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="putkind"></a>
## `putKind`

`luna://com.webos.accountdb/putKind`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/putKind '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="putpermissions"></a>
## `putPermissions`

`luna://com.webos.accountdb/putPermissions`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/putPermissions '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetworkspacedata"></a>
## `resetWorkSpaceData` ⚠️ DANGEROUS

`luna://com.webos.accountdb/resetWorkSpaceData`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/resetWorkSpaceData '{}'
```

> ACG groups: all, database, database.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="search"></a>
## `search`

`luna://com.webos.accountdb/search`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/search '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcurrentworkspace"></a>
## `setCurrentWorkSpace`

`luna://com.webos.accountdb/setCurrentWorkSpace`

Setter on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/setCurrentWorkSpace '{}'
```

> ACG groups: all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="watch"></a>
## `watch`

`luna://com.webos.accountdb/watch`

Method on com.webos.accountdb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.accountdb/watch '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
