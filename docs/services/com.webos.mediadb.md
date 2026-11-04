# `com.webos.mediadb`

39 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`backupEpg`](#backupepg) | private |  | tv-broadcast | Method on com.webos.mediadb (introspected on-device; parameters undocumented). |
| [`batch`](#batch) | public |  | db | Executes multiple database operations in one request. |
| [`cancelSearch`](#cancelsearch) | private |  | media | Method on com.webos.mediadb (introspected on-device; parameters undocumented). |
| [`compact`](#compact) | private |  | db | The compact method invokes the low level garbage collector. When DB8 executes a del operation without Purge:True param, it only marks the ob |
| [`del`](#del) | public |  | db | Deletes JSON data objects. |
| [`delKind`](#delkind) | public |  | db | Deletes a kind and ALL objects of that kind. |
| [`dump`](#dump) | private |  | db | Backs up a database. The file created by the dump method typically contains JSON statements to recreate all of the Kinds and data of the dat |
| [`find`](#find) | public | yes | db | Returns objects matching the query. |
| [`get`](#get) | public |  | db | Retrieves objects by IDs (fastest retrieval). |
| [`getProfile`](#getprofile) | unknown |  | db | Get profiling data for applications. Profile data includes the queries made and related information such as request time and response time. |
| [`internal/postBackup`](#internal_postbackup) | private |  | db | An internal DB8 method that is called when a backup operation has been completed. |
| [`internal/postRestore`](#internal_postrestore) | private |  | db | An internal DB8 method that is called when the database finishes a restore process. |
| [`internal/preBackup`](#internal_prebackup) | private |  | db | Invoked when an internal webOS service wants to restore a database from a backup file. |
| [`internal/preRestore`](#internal_prerestore) | private |  | db | Used by the webOS service to correctly respond to a database restore command. This method must be called before restoring a database. |
| [`internal/releaseAdminProfile`](#internal_releaseadminprofile) | private |  | db | For applications whose profiling is controlled by admin-privileged applications, this method relinquishes the profiling control from admin-p |
| [`internal/scheduledBackup`](#internal_scheduledbackup) | private |  | media | Method on com.webos.mediadb (introspected on-device; parameters undocumented). |
| [`internal/scheduledPurge`](#internal_scheduledpurge) | private |  | db | An internal DB8 private method, used by activityManager . Activity manager periodically calls the DB8 garbage collector to remove data that  |
| [`internal/scheduledSpaceCheck`](#internal_scheduledspacecheck) | private |  | db | An internal DB8 callback method, that is called by the Activity Manager for checking available disk space. |
| [`internal/spaceCheck`](#internal_spacecheck) | private |  | db | An internal DB8 private method, used by webOS private services. Services can subscribe for the spaceCheck method and get notifications when  |
| [`listActiveMedia`](#listactivemedia) | unknown |  | db | Returns a list of active attached media, and shards. |
| [`load`](#load) | private |  | db | Restores a database from a dumped JSON file. ⚠️ |
| [`merge`](#merge) | public |  | db | Updates properties of existing objects. |
| [`mergePut`](#mergeput) | unknown |  | db | The mergePut method updates the properties of existing objects. If an object doesn't exist, a new one will be created in the database. The o |
| [`profile`](#profile) | unknown |  | db | Enables or disables DB8 profiling for an application. When enabled, profiling data is stored for the application. You can enable DB8 profili |
| [`purge`](#purge) | unknown |  | db | The purge method invokes the garbage collector. The purge method will: Remove all objects that were marked for deletion Perform a space chec ⚠️ |
| [`purgeStatus`](#purgestatus) | unknown |  | db | The purgeStatus method returns the status of the last run purge command. If the last run purge command was successful, the objects were perm |
| [`put`](#put) | public |  | db | Stores JSON objects of a kind. |
| [`putKind`](#putkind) | public |  | db | Registers a kind with the database. |
| [`putPermissions`](#putpermissions) | public |  | db | Grants other apps/services access to the app DB8 data. |
| [`putQuotas`](#putquotas) | private |  | db | The putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS servi ⚠️ |
| [`quotaStats`](#quotastats) | private |  | db | The quotaStats method returns information about a service's used limits. |
| [`removeAppData`](#removeappdata) | unknown |  | db | The removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified  ⚠️ |
| [`reserveIds`](#reserveids) | public |  | db | Reserves a block of object IDs. |
| [`search`](#search) | public | yes | db | Like find but supports the ? full-text operator. |
| [`setShardMode`](#setshardmode) | unknown |  | db | Marks an external media as transient for the specified DB8 shard Id. This means that all data, relative to the shard, are not required by an |
| [`shardInfo`](#shardinfo) | unknown |  | db | Retrieves the state of a shard, like shard activity, associated media devices, mount point. |
| [`shardKind`](#shardkind) | public |  | media | Method on com.webos.mediadb (introspected on-device; parameters undocumented). |
| [`stats`](#stats) | unknown |  | db | The stats method returns detailed information about the storage space used by every service. |
| [`watch`](#watch) | public | yes | db | Watches for updates that would change a query result. |

<a id="backupepg"></a>
## `backupEpg`

`luna://com.webos.mediadb/backupEpg`

Method on com.webos.mediadb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.mediadb/backupEpg '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="batch"></a>
## `batch`

`luna://com.webos.mediadb/batch`

Executes multiple database operations in one request.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `operations` | Array (required) of {method, params} |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/batch '{"operations":[{"method":"put","params":{"objects":[{"_kind":"com.yourdomain.test:1","sample":"sample1"}]}}]}'
```

> Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)

<a id="cancelsearch"></a>
## `cancelSearch`

`luna://com.webos.mediadb/cancelSearch`

Method on com.webos.mediadb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.mediadb/cancelSearch '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="compact"></a>
## `compact`

`luna://com.webos.mediadb/compact`

The compact method invokes the low level garbage collector. When DB8 executes a del operation without Purge:True param, it only marks the object as to be deleted. The object will be removed by DB8, when the garbage collector is called. To call the garbage collector manually, the client can call the compact method. This command is implemented only for the LevelDB and Sandwich engine.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.mediadb/compact '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/compact (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="del"></a>
## `del`

`luna://com.webos.mediadb/del`

Deletes JSON data objects.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ids` | String array (optional) |
| `query` | Object (optional) |
| `purge` | Boolean (optional) |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/del '{"ids":["JHd3Dg427oB"]}'
```

> Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)

<a id="delkind"></a>
## `delKind`

`luna://com.webos.mediadb/delKind`

Deletes a kind and ALL objects of that kind.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/delKind '{"id":"com.yourdomain.test:1"}'
```

> Destructive for the app data. Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)

<a id="dump"></a>
## `dump`

`luna://com.webos.mediadb/dump`

Backs up a database. The file created by the dump method typically contains JSON statements to recreate all of the Kinds and data of the database from which they have been dumped.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `path` | String (required) Path to the dump file |
| `incDel` | Boolean (optional) If true , also include deleted objects. |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/dump '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/dump (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="find"></a>
## `find`

`luna://com.webos.mediadb/find`

Returns objects matching the query.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `query` | Object (required) DB8 query |
| `count` | Boolean (optional) |
| `watch` | Boolean (optional) |

```sh
luna-send -i -f luna://com.webos.mediadb/find '{"query":{"from":"com.yourdomain.test:1","where":[{"prop":"sample","op":"=","val":"sample1"}]}}'
```

> Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)

<a id="get"></a>
## `get`

`luna://com.webos.mediadb/get`

Retrieves objects by IDs (fastest retrieval).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ids` | String array (required) |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/get '{"ids":["J8rKTaBClIo"]}'
```

> Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)

<a id="getprofile"></a>
## `getProfile`

`luna://com.webos.mediadb/getProfile`

Get profiling data for applications. Profile data includes the queries made and related information such as request time and response time.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `application` | String (optional) Name of application for which to get profile data. If no name is specified, returns the profile data for the current application. If name is given as *, returns profile data for all applications. The caller application must have admin permissions. |
| `query` | Object: Query (optional) Additional filters for retrieving profile data. |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/getProfile '{}'
```

> Listed under ACG group "mediadatabase.profiling" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/getProfile (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_postbackup"></a>
## `internal/postBackup`

`luna://com.webos.mediadb/internal/postBackup`

An internal DB8 method that is called when a backup operation has been completed.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.mediadb/internal/postBackup '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/postBackup (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_postrestore"></a>
## `internal/postRestore`

`luna://com.webos.mediadb/internal/postRestore`

An internal DB8 method that is called when the database finishes a restore process.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `tempDir` | String (required) Directory where the JSON dump file is stored. |
| `files` | String array (required) List of files to load from tempDir |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/internal/postRestore '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/postRestore (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_prebackup"></a>
## `internal/preBackup`

`luna://com.webos.mediadb/internal/preBackup`

Invoked when an internal webOS service wants to restore a database from a backup file.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `tempDir` | String (required) Directory where the JSON dump files are stored. |
| `maxTempBytes` | Number (required) Maximum size allowed for the dump file. |
| `incrementalKey` | Object (optional) Provides list of revisions to be dumped |
| `deletedRev` | Number (int32_t) (optional) Deleted revision value that increase after operation |
| `rev` | Number (int32_t) (optional) revision value that increase after operation |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/internal/preBackup '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/preBackup (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_prerestore"></a>
## `internal/preRestore`

`luna://com.webos.mediadb/internal/preRestore`

Used by the webOS service to correctly respond to a database restore command. This method must be called before restoring a database.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `version` | String (required) version is the database version that is to be restored. |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/internal/preRestore '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/preRestore (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_releaseadminprofile"></a>
## `internal/releaseAdminProfile`

`luna://com.webos.mediadb/internal/releaseAdminProfile`

For applications whose profiling is controlled by admin-privileged applications, this method relinquishes the profiling control from admin-privilged applications. The 3rd-party application can then control its own its own profiling. Background: Once an admin-privileged application has enabled/disabled profiling for a 3rd-party application, then only admin-privileged applications can control the profiling for that application.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `application` | String (optional) Name of application for which admin permission must be relinquished. If no name is specified, admin permission for the caller application is released. If name is given as *, admin permission for all applications is released. |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/internal/releaseAdminProfile '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/releaseAdminProfile (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_scheduledbackup"></a>
## `internal/scheduledBackup`

`luna://com.webos.mediadb/internal/scheduledBackup`

Method on com.webos.mediadb (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.mediadb/internal/scheduledBackup '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_scheduledpurge"></a>
## `internal/scheduledPurge`

`luna://com.webos.mediadb/internal/scheduledPurge`

An internal DB8 private method, used by activityManager . Activity manager periodically calls the DB8 garbage collector to remove data that has been marked for deletion.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `$activity` | Object: activity (required) $activity contain information about active ActivityManager job |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/internal/scheduledPurge '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/scheduledPurge (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_scheduledspacecheck"></a>
## `internal/scheduledSpaceCheck`

`luna://com.webos.mediadb/internal/scheduledSpaceCheck`

An internal DB8 callback method, that is called by the Activity Manager for checking available disk space.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `$activity` | Object (required) Id of created activity by activity manager. |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/internal/scheduledSpaceCheck '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/scheduledSpaceCheck (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_spacecheck"></a>
## `internal/spaceCheck`

`luna://com.webos.mediadb/internal/spaceCheck`

An internal DB8 private method, used by webOS private services. Services can subscribe for the spaceCheck method and get notifications when DB8 reaches soft and hard disk space limits.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.mediadb/internal/spaceCheck '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/spaceCheck (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="listactivemedia"></a>
## `listActiveMedia`

`luna://com.webos.mediadb/listActiveMedia`

Returns a list of active attached media, and shards.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.mediadb/listActiveMedia '{}'
```

> Listed under ACG group "mediadatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/listActiveMedia (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="load"></a>
## `load` ⚠️ DANGEROUS

`luna://com.webos.mediadb/load`

Restores a database from a dumped JSON file.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `path` | String (required) The complete path of the JSON dump file. For example: /tmp/dump.json |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/load '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/load (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="merge"></a>
## `merge`

`luna://com.webos.mediadb/merge`

Updates properties of existing objects.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `objects` | Array (optional) |
| `query` | Object (optional) |
| `props` | Object (optional) |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/merge '{"objects":[{"_id":"J8rKTaBClIo","test":"test1"}]}'
```

> Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)

<a id="mergeput"></a>
## `mergePut`

`luna://com.webos.mediadb/mergePut`

The mergePut method updates the properties of existing objects. If an object doesn't exist, a new one will be created in the database. The object to be updated can be specified in one of the following ways: A query An array of IDs

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `objects` | Object array (optional) The object parameter is an array of objects, each object will have an id and key/value pairs that represent the object properties the app needs to merge. This is required if the query parameter is not specified. |
| `query` | Object: Query (optional) The query parameter is a Query object specifying the set of objects whose properties the app wants to update. The query parameter is required if the object parameter is not specified. |
| `props` | Object (optional) The props parameter is an object with key/value pairs that specify the set of properties to be merged into the existing object(s) specified in the query parameter. If the app specifies the properties in the prop parameter, the query is required. |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/mergePut '{}'
```

> Listed under ACG group "mediadatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/mergePut (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="profile"></a>
## `profile`

`luna://com.webos.mediadb/profile`

Enables or disables DB8 profiling for an application. When enabled, profiling data is stored for the application. You can enable DB8 profiling using one of the following approaches: - Self enabling: In this approach, the 3rd-party application enables profiling on itself (see example 1). - Enable profiling using admin-privileged applications: In the approach, an admin-privileged application controls DB8 profiling for 3rd-party applications. Use this approach when you want the admin to control the profiling of 3rd-party applications. You can choose to enable profiling for a single application or for all 3rd-party applications. See example 2 and 3.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `enable` | Boolean (optional) Status of DB8 profiling. Possible values: TRUE, FALSE Default value: TRUE |
| `application` | String (optional) Name of application to be profiled. If no name is specified, the current/caller application is profiled. If name is given as *, all applications are profiled. The caller application must have admin permissions. |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/profile '{}'
```

> Listed under ACG group "mediadatabase.profiling" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/profile (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="purge"></a>
## `purge` ⚠️ DANGEROUS

`luna://com.webos.mediadb/purge`

The purge method invokes the garbage collector. The purge method will: Remove all objects that were marked for deletion Perform a space check, and remove all temporary data

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `window` | Number (int32_t) (optional) purge window size |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/purge '{}'
```

> Listed under ACG group "mediadatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/purge (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="purgestatus"></a>
## `purgeStatus`

`luna://com.webos.mediadb/purgeStatus`

The purgeStatus method returns the status of the last run purge command. If the last run purge command was successful, the objects were permanently deleted, and the purgeStatus method will return the updated database revision number.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.mediadb/purgeStatus '{}'
```

> Listed under ACG group "mediadatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/purgeStatus (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="put"></a>
## `put`

`luna://com.webos.mediadb/put`

Stores JSON objects of a kind.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `objects` | Array (required) |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/put '{"objects":[{"_kind":"com.yourdomain.test:1","sample":"sample1","test":"test1"}]}'
```

> Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)

<a id="putkind"></a>
## `putKind`

`luna://com.webos.mediadb/putKind`

Registers a kind with the database.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) |
| `owner` | String (required) |
| `schema` | Object (optional) |
| `sync` | Boolean (optional) |
| `extends` | String array (optional) |
| `indexes` | Array (optional) |
| `revsets` | Array (optional) |
| `private` | Boolean (optional) |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/putKind '{"id":"com.yourdomain.test:1","owner":"com.yourdomain.test","indexes":[{"name":"sample","props":[{"name":"sample"}]}]}'
```

> Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)

<a id="putpermissions"></a>
## `putPermissions`

`luna://com.webos.mediadb/putPermissions`

Grants other apps/services access to the app DB8 data.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `permissions` | Array (required) |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/putPermissions '{"permissions":[{"operations":{"read":"allow","create":"allow","update":"allow","delete":"allow"},"object":"com.yourdomain.test:1","type":"db.kind","caller":"com.yourdomain.testapp"}]}'
```

> Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)

<a id="putquotas"></a>
## `putQuotas` ⚠️ DANGEROUS

`luna://com.webos.mediadb/putQuotas`

The putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS services to increase/decrease quotas for critical webOS services.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `quotas` | Object array: putQuotas (required) List of quotas |
| `owner` | String (optional) Name of service |
| `size` | Number (int32_t) (optional) quota size in bytes |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/putQuotas '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/putQuotas (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="quotastats"></a>
## `quotaStats`

`luna://com.webos.mediadb/quotaStats`

The quotaStats method returns information about a service's used limits.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.mediadb/quotaStats '{}'
```

> Listed under ACG group "mediadatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/quotaStats (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="removeappdata"></a>
## `removeAppData` ⚠️ DANGEROUS

`luna://com.webos.mediadb/removeAppData`

The removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified owner .

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `owners` | String array (required) Owner(s) of kinds to delete. Kinds having given owners will be removed from the database. |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/removeAppData '{}'
```

> Listed under ACG group "mediadatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/removeAppData (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="reserveids"></a>
## `reserveIds`

`luna://com.webos.mediadb/reserveIds`

Reserves a block of object IDs.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `count` | Number (required) |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/reserveIds '{"count":3}'
```

> Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)

<a id="search"></a>
## `search`

`luna://com.webos.mediadb/search`

Like find but supports the ? full-text operator.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `query` | Object (required) |
| `watch` | Boolean (optional) |

```sh
luna-send -i -f luna://com.webos.mediadb/search '{"query":{"from":"com.yourdomain.test:1","where":[{"prop":"sample","op":"?","val":"sample"}]}}'
```

> Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)

<a id="setshardmode"></a>
## `setShardMode`

`luna://com.webos.mediadb/setShardMode`

Marks an external media as transient for the specified DB8 shard Id. This means that all data, relative to the shard, are not required by any application and will be removed by garbage collector. In other words, marking shard as transient will wipe all data from the shard on the nearest garbage collector call.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `shardId` | String (required) Base64 encoded id of shard |
| `transient` | Boolean (required) Mark shard as transient. Service can mark shard as not transient. If garbage collector didn't run, all data relative to shard, will not be removed. |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/setShardMode '{}'
```

> Listed under ACG group "mediadatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/setShardMode (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="shardinfo"></a>
## `shardInfo`

`luna://com.webos.mediadb/shardInfo`

Retrieves the state of a shard, like shard activity, associated media devices, mount point.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `shardId` | String (required) Base64 encoded shard Id for which information is to be retrieved. |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/shardInfo '{}'
```

> Listed under ACG group "mediadatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/shardInfo (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="shardkind"></a>
## `shardKind`

`luna://com.webos.mediadb/shardKind`

Method on com.webos.mediadb (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.mediadb/shardKind '{}'
```

> ACG groups: database.internal, public, private, all, database.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stats"></a>
## `stats`

`luna://com.webos.mediadb/stats`

The stats method returns detailed information about the storage space used by every service.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `kind` | String (optional) Identifier of kind |
| `verify` | Boolean (optional) Verify kindkey if it is true |

```sh
luna-send -n 1 -f luna://com.webos.mediadb/stats '{}'
```

> Listed under ACG group "mediadatabase.profiling" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/stats (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="watch"></a>
## `watch`

`luna://com.webos.mediadb/watch`

Watches for updates that would change a query result.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `query` | Object (required) |

```sh
luna-send -i -f luna://com.webos.mediadb/watch '{"query":{"from":"com.yourdomain.test:1","where":[{"prop":"sample","op":"=","val":"sample1"}]}}'
```

> Same DB8 API surface as com.palm.db but for large media datasets; kinds use com.webos.mediadb permissions.

Sources: [1](https://webostv.developer.lge.com/develop/references/media-database)
