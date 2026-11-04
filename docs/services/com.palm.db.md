# `com.palm.db`

36 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`batch`](#batch) | public |  | db | Executes multiple database operations in one request. |
| [`cancelSearch`](#cancelsearch) | unknown |  | db | Stops the search operation mid-way. This method can be used when the search operation takes a long time to return results or required to sea |
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
| [`stats`](#stats) | unknown |  | db | The stats method returns detailed information about the storage space used by every service. |
| [`watch`](#watch) | public | yes | db | Watches for updates that would change a query result. |

<a id="batch"></a>
## `batch`

`luna://com.palm.db/batch`

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
luna-send -n 1 -f luna://com.palm.db/batch '{"operations":[{"method":"put","params":{"objects":[{"_kind":"com.yourdomain.test:1","sample":"sample1"}]}}]}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/database)

<a id="cancelsearch"></a>
## `cancelSearch`

`luna://com.palm.db/cancelSearch`

Stops the search operation mid-way. This method can be used when the search operation takes a long time to return results or required to search with another keyword without waiting for previous search results. It is not applicable to situations where the search method returns results immediately. Note: For this method to work, the search() API must be configured with the 'cancelable' parameter set to 'true'.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `taskId` | String (required) Unique identifier of the search operation. Obtained using the search() API. |

```sh
luna-send -n 1 -f luna://com.palm.db/cancelSearch '{}'
```

> Listed under ACG group "database.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/cancelSearch (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="compact"></a>
## `compact`

`luna://com.palm.db/compact`

The compact method invokes the low level garbage collector. When DB8 executes a del operation without Purge:True param, it only marks the object as to be deleted. The object will be removed by DB8, when the garbage collector is called. To call the garbage collector manually, the client can call the compact method. This command is implemented only for the LevelDB and Sandwich engine.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.db/compact '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/compact (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="del"></a>
## `del`

`luna://com.palm.db/del`

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
luna-send -n 1 -f luna://com.palm.db/del '{"ids":["JHd3Dg427oB"]}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/database)

<a id="delkind"></a>
## `delKind`

`luna://com.palm.db/delKind`

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
luna-send -n 1 -f luna://com.palm.db/delKind '{"id":"com.yourdomain.test:1"}'
```

> Destructive for the app data.

Sources: [1](https://webostv.developer.lge.com/develop/references/database)

<a id="dump"></a>
## `dump`

`luna://com.palm.db/dump`

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
luna-send -n 1 -f luna://com.palm.db/dump '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/dump (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="find"></a>
## `find`

`luna://com.palm.db/find`

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
luna-send -i -f luna://com.palm.db/find '{"query":{"from":"com.yourdomain.test:1","where":[{"prop":"sample","op":"=","val":"sample1"}]}}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/database)

<a id="get"></a>
## `get`

`luna://com.palm.db/get`

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
luna-send -n 1 -f luna://com.palm.db/get '{"ids":["J8rKTaBClIo"]}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/database)

<a id="getprofile"></a>
## `getProfile`

`luna://com.palm.db/getProfile`

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
luna-send -n 1 -f luna://com.palm.db/getProfile '{}'
```

> Listed under ACG group "database.profiling" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/getProfile (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_postbackup"></a>
## `internal/postBackup`

`luna://com.palm.db/internal/postBackup`

An internal DB8 method that is called when a backup operation has been completed.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.db/internal/postBackup '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/postBackup (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_postrestore"></a>
## `internal/postRestore`

`luna://com.palm.db/internal/postRestore`

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
luna-send -n 1 -f luna://com.palm.db/internal/postRestore '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/postRestore (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_prebackup"></a>
## `internal/preBackup`

`luna://com.palm.db/internal/preBackup`

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
luna-send -n 1 -f luna://com.palm.db/internal/preBackup '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/preBackup (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_prerestore"></a>
## `internal/preRestore`

`luna://com.palm.db/internal/preRestore`

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
luna-send -n 1 -f luna://com.palm.db/internal/preRestore '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/preRestore (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_releaseadminprofile"></a>
## `internal/releaseAdminProfile`

`luna://com.palm.db/internal/releaseAdminProfile`

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
luna-send -n 1 -f luna://com.palm.db/internal/releaseAdminProfile '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/releaseAdminProfile (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_scheduledpurge"></a>
## `internal/scheduledPurge`

`luna://com.palm.db/internal/scheduledPurge`

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
luna-send -n 1 -f luna://com.palm.db/internal/scheduledPurge '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/scheduledPurge (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_scheduledspacecheck"></a>
## `internal/scheduledSpaceCheck`

`luna://com.palm.db/internal/scheduledSpaceCheck`

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
luna-send -n 1 -f luna://com.palm.db/internal/scheduledSpaceCheck '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/scheduledSpaceCheck (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_spacecheck"></a>
## `internal/spaceCheck`

`luna://com.palm.db/internal/spaceCheck`

An internal DB8 private method, used by webOS private services. Services can subscribe for the spaceCheck method and get notifications when DB8 reaches soft and hard disk space limits.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.db/internal/spaceCheck '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/spaceCheck (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="listactivemedia"></a>
## `listActiveMedia`

`luna://com.palm.db/listActiveMedia`

Returns a list of active attached media, and shards.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.db/listActiveMedia '{}'
```

> Listed under ACG group "database.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/listActiveMedia (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="load"></a>
## `load` ⚠️ DANGEROUS

`luna://com.palm.db/load`

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
luna-send -n 1 -f luna://com.palm.db/load '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/load (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="merge"></a>
## `merge`

`luna://com.palm.db/merge`

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
luna-send -n 1 -f luna://com.palm.db/merge '{"objects":[{"_id":"J8rKTaBClIo","test":"test1"}]}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/database)

<a id="mergeput"></a>
## `mergePut`

`luna://com.palm.db/mergePut`

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
luna-send -n 1 -f luna://com.palm.db/mergePut '{}'
```

> Listed under ACG group "database.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/mergePut (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="profile"></a>
## `profile`

`luna://com.palm.db/profile`

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
luna-send -n 1 -f luna://com.palm.db/profile '{}'
```

> Listed under ACG group "database.profiling" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/profile (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="purge"></a>
## `purge` ⚠️ DANGEROUS

`luna://com.palm.db/purge`

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
luna-send -n 1 -f luna://com.palm.db/purge '{}'
```

> Listed under ACG group "database.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/purge (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="purgestatus"></a>
## `purgeStatus`

`luna://com.palm.db/purgeStatus`

The purgeStatus method returns the status of the last run purge command. If the last run purge command was successful, the objects were permanently deleted, and the purgeStatus method will return the updated database revision number.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.db/purgeStatus '{}'
```

> Listed under ACG group "database.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/purgeStatus (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="put"></a>
## `put`

`luna://com.palm.db/put`

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
luna-send -n 1 -f luna://com.palm.db/put '{"objects":[{"_kind":"com.yourdomain.test:1","sample":"sample1","test":"test1"}]}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/database)

<a id="putkind"></a>
## `putKind`

`luna://com.palm.db/putKind`

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
luna-send -n 1 -f luna://com.palm.db/putKind '{"id":"com.yourdomain.test:1","owner":"com.yourdomain.test","indexes":[{"name":"sample","props":[{"name":"sample"}]}]}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/database)

<a id="putpermissions"></a>
## `putPermissions`

`luna://com.palm.db/putPermissions`

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
luna-send -n 1 -f luna://com.palm.db/putPermissions '{"permissions":[{"operations":{"read":"allow","create":"allow","update":"allow","delete":"allow"},"object":"com.yourdomain.test:1","type":"db.kind","caller":"com.yourdomain.testapp"}]}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/database)

<a id="putquotas"></a>
## `putQuotas` ⚠️ DANGEROUS

`luna://com.palm.db/putQuotas`

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
luna-send -n 1 -f luna://com.palm.db/putQuotas '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/putQuotas (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="quotastats"></a>
## `quotaStats`

`luna://com.palm.db/quotaStats`

The quotaStats method returns information about a service's used limits.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.db/quotaStats '{}'
```

> Listed under ACG group "database.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/quotaStats (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="removeappdata"></a>
## `removeAppData` ⚠️ DANGEROUS

`luna://com.palm.db/removeAppData`

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
luna-send -n 1 -f luna://com.palm.db/removeAppData '{}'
```

> Listed under ACG group "database.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/removeAppData (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="reserveids"></a>
## `reserveIds`

`luna://com.palm.db/reserveIds`

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
luna-send -n 1 -f luna://com.palm.db/reserveIds '{"count":3}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/database)

<a id="search"></a>
## `search`

`luna://com.palm.db/search`

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
luna-send -i -f luna://com.palm.db/search '{"query":{"from":"com.yourdomain.test:1","where":[{"prop":"sample","op":"?","val":"sample"}]}}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/database)

<a id="setshardmode"></a>
## `setShardMode`

`luna://com.palm.db/setShardMode`

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
luna-send -n 1 -f luna://com.palm.db/setShardMode '{}'
```

> Listed under ACG group "database.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/setShardMode (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="shardinfo"></a>
## `shardInfo`

`luna://com.palm.db/shardInfo`

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
luna-send -n 1 -f luna://com.palm.db/shardInfo '{}'
```

> Listed under ACG group "database.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/shardInfo (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="stats"></a>
## `stats`

`luna://com.palm.db/stats`

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
luna-send -n 1 -f luna://com.palm.db/stats '{}'
```

> Listed under ACG group "database.profiling" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/stats (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="watch"></a>
## `watch`

`luna://com.palm.db/watch`

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
luna-send -i -f luna://com.palm.db/watch '{"query":{"from":"com.yourdomain.test:1","where":[{"prop":"sample","op":"=","val":"sample1"}]}}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/database)
