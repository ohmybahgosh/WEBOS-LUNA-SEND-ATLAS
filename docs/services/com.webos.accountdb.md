# `com.webos.accountdb`

DB8 database instance for user-account data: stores typed records (kinds) with find/get/put/del/batch queries, plus compaction, backup/restore and space checks.

28 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`batch`](#batch) | private |  | db | inferred | Handles the batch. |
| [`compact`](#compact) | private |  | db | inferred | Handles the compact. |
| [`del`](#del) | private |  | db | inferred | Handles the del. |
| [`deleteWorkSpace`](#deleteworkspace) | private |  | db | inferred | Deletes the work space. ⚠️ |
| [`delKind`](#delkind) | private |  | db | inferred | Handles the del kind. |
| [`dump`](#dump) | private |  | db | inferred | Dumps the accountdb. |
| [`fill`](#fill) | private |  | db | inferred | Handles the fill. |
| [`find`](#find) | private |  | db | inferred | Handles the find. |
| [`get`](#get) | private |  | db | inferred | Returns the accountdb. |
| [`internal/postBackup`](#internal_postbackup) | private |  | db | inferred | Posts the backup (internal) |
| [`internal/postRestore`](#internal_postrestore) | private |  | db | inferred | Posts the restore (internal) |
| [`internal/preBackup`](#internal_prebackup) | private |  | db | inferred | Handles the pre backup (internal) |
| [`internal/preRestore`](#internal_prerestore) | private |  | db | inferred | Handles the pre restore (internal) |
| [`internal/releaseAdminProfile`](#internal_releaseadminprofile) | private |  | db | inferred | Releases the admin profile (internal) |
| [`internal/scheduledBackup`](#internal_scheduledbackup) | private |  | db | inferred | Handles the scheduled backup (internal) |
| [`internal/scheduledPurge`](#internal_scheduledpurge) | private |  | db | inferred | Handles the scheduled purge (internal) |
| [`internal/scheduledSpaceCheck`](#internal_scheduledspacecheck) | private |  | db | inferred | Handles the scheduled space check (internal) |
| [`internal/spaceCheck`](#internal_spacecheck) | private |  | db | inferred | Handles the space check (internal) |
| [`merge`](#merge) | private |  | db | inferred | Merges the accountdb. |
| [`mergePut`](#mergeput) | private |  | db | inferred | Merges the put. |
| [`purge`](#purge) | private |  | db | inferred | Handles the purge. |
| [`put`](#put) | private |  | db | inferred | Writes the accountdb. |
| [`putKind`](#putkind) | private |  | db | inferred | Writes the kind. |
| [`putPermissions`](#putpermissions) | private |  | db | inferred | Writes the permissions. |
| [`resetWorkSpaceData`](#resetworkspacedata) | private |  | db | inferred | Resets the work space data. ⚠️ |
| [`search`](#search) | private |  | db | inferred | Searches for accountdb. |
| [`setCurrentWorkSpace`](#setcurrentworkspace) | private |  | db | inferred | Sets the current work space. |
| [`watch`](#watch) | private |  | db | inferred | Handles the watch. |

<a id="batch"></a>
## `batch`

`luna://com.webos.accountdb/batch`

Handles the batch.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/batch '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="compact"></a>
## `compact`

`luna://com.webos.accountdb/compact`

Handles the compact.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/compact '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="del"></a>
## `del`

`luna://com.webos.accountdb/del`

Handles the del.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/del '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deleteworkspace"></a>
## `deleteWorkSpace` ⚠️ DANGEROUS

`luna://com.webos.accountdb/deleteWorkSpace`

Deletes the work space.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/deleteWorkSpace '{}'
```

> ACG groups: all, database, database.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="delkind"></a>
## `delKind`

`luna://com.webos.accountdb/delKind`

Handles the del kind.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/delKind '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dump"></a>
## `dump`

`luna://com.webos.accountdb/dump`

Dumps the accountdb.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/dump '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="fill"></a>
## `fill`

`luna://com.webos.accountdb/fill`

Handles the fill.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/fill '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="find"></a>
## `find`

`luna://com.webos.accountdb/find`

Handles the find.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

| Param | Type / notes |
|---|---|
| `query` | (required; observed via on-device probe) |

```sh
luna-send -n 1 -f luna://com.webos.accountdb/find '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="get"></a>
## `get`

`luna://com.webos.accountdb/get`

Returns the accountdb.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

| Param | Type / notes |
|---|---|
| `ids` | (required; observed via on-device probe) |

```sh
luna-send -n 1 -f luna://com.webos.accountdb/get '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_postbackup"></a>
## `internal/postBackup`

`luna://com.webos.accountdb/internal/postBackup`

Posts the backup (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/postBackup '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_postrestore"></a>
## `internal/postRestore`

`luna://com.webos.accountdb/internal/postRestore`

Posts the restore (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/postRestore '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_prebackup"></a>
## `internal/preBackup`

`luna://com.webos.accountdb/internal/preBackup`

Handles the pre backup (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/preBackup '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_prerestore"></a>
## `internal/preRestore`

`luna://com.webos.accountdb/internal/preRestore`

Handles the pre restore (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/preRestore '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_releaseadminprofile"></a>
## `internal/releaseAdminProfile`

`luna://com.webos.accountdb/internal/releaseAdminProfile`

Releases the admin profile (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/releaseAdminProfile '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_scheduledbackup"></a>
## `internal/scheduledBackup`

`luna://com.webos.accountdb/internal/scheduledBackup`

Handles the scheduled backup (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/scheduledBackup '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_scheduledpurge"></a>
## `internal/scheduledPurge`

`luna://com.webos.accountdb/internal/scheduledPurge`

Handles the scheduled purge (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/scheduledPurge '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_scheduledspacecheck"></a>
## `internal/scheduledSpaceCheck`

`luna://com.webos.accountdb/internal/scheduledSpaceCheck`

Handles the scheduled space check (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/scheduledSpaceCheck '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_spacecheck"></a>
## `internal/spaceCheck`

`luna://com.webos.accountdb/internal/spaceCheck`

Handles the space check (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/internal/spaceCheck '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="merge"></a>
## `merge`

`luna://com.webos.accountdb/merge`

Merges the accountdb.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/merge '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="mergeput"></a>
## `mergePut`

`luna://com.webos.accountdb/mergePut`

Merges the put.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/mergePut '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="purge"></a>
## `purge`

`luna://com.webos.accountdb/purge`

Handles the purge.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/purge '{}'
```

> ACG groups: all, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="put"></a>
## `put`

`luna://com.webos.accountdb/put`

Writes the accountdb.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/put '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="putkind"></a>
## `putKind`

`luna://com.webos.accountdb/putKind`

Writes the kind.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/putKind '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="putpermissions"></a>
## `putPermissions`

`luna://com.webos.accountdb/putPermissions`

Writes the permissions.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/putPermissions '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetworkspacedata"></a>
## `resetWorkSpaceData` ⚠️ DANGEROUS

`luna://com.webos.accountdb/resetWorkSpaceData`

Resets the work space data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/resetWorkSpaceData '{}'
```

> ACG groups: all, database, database.internal. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="search"></a>
## `search`

`luna://com.webos.accountdb/search`

Searches for accountdb.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/search '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcurrentworkspace"></a>
## `setCurrentWorkSpace`

`luna://com.webos.accountdb/setCurrentWorkSpace`

Sets the current work space.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/setCurrentWorkSpace '{}'
```

> ACG groups: all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="watch"></a>
## `watch`

`luna://com.webos.accountdb/watch`

Handles the watch.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.accountdb/watch '{}'
```

> ACG groups: private, all, database, database.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
