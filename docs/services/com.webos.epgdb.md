# `com.webos.epgdb`

35 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`batch`](#batch) | unknown |  | db | The batch method enables apps to execute multiple database operations in one service request. It allows only the following database operatio |
| [`compact`](#compact) | private |  | db | The compact method invokes the low level garbage collector. When DB8 executes a del operation without Purge:True param, it only marks the ob |
| [`del`](#del) | unknown |  | db | The del method deletes JSON data objects from the database. Apps can specify the objects to be deleted by providing: a set of IDs to be dele |
| [`delKind`](#delkind) | unknown |  | db | The delKind method deletes a Kind from the database. Deleting a Kind deletes ALL data objects of that Kind. |
| [`dump`](#dump) | private |  | db | Backs up a database. The file created by the dump method typically contains JSON statements to recreate all of the Kinds and data of the dat |
| [`find`](#find) | unknown |  | db | The find method returns a set of objects that match the query specified in the query parameter. The app can specify the number of results to |
| [`get`](#get) | unknown |  | db | The get method retrieves JSON data objects by ids. This is the fastest way to retrieve data. |
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
| [`merge`](#merge) | unknown |  | db | The merge method updates the properties of existing objects. The objects can be specified in one of the following ways: A query An array of  |
| [`mergePut`](#mergeput) | unknown |  | db | The mergePut method updates the properties of existing objects. If an object doesn't exist, a new one will be created in the database. The o |
| [`profile`](#profile) | unknown |  | db | Enables or disables DB8 profiling for an application. When enabled, profiling data is stored for the application. You can enable DB8 profili |
| [`purge`](#purge) | unknown |  | db | The purge method invokes the garbage collector. The purge method will: Remove all objects that were marked for deletion Perform a space chec ⚠️ |
| [`purgeStatus`](#purgestatus) | unknown |  | db | The purgeStatus method returns the status of the last run purge command. If the last run purge command was successful, the objects were perm |
| [`put`](#put) | unknown |  | db | The put method stores JSON data objects of a particular Kind into the database. The put method will: Assign an id field to each object, if i |
| [`putKind`](#putkind) | unknown |  | db | The putKind method registers a kind with the database. Kinds define the owner, and the indexes for a JSON data object. Indexes can be compos |
| [`putPermissions`](#putpermissions) | unknown |  | db | The putPermissions method enables other apps or services to access an app's stored DB8 data. The app can give permissions to access data obj |
| [`putQuotas`](#putquotas) | private |  | db | The putQuotas method provides the ability to update a quota's current service limits at runtime. This service is used by private webOS servi ⚠️ |
| [`quotaStats`](#quotastats) | private |  | db | The quotaStats method returns information about a service's used limits. |
| [`removeAppData`](#removeappdata) | unknown |  | db | The removeAppData method removes all data associated with the given owner. In other words, the method removes all Kinds that have specified  ⚠️ |
| [`reserveIds`](#reserveids) | unknown |  | db | When a client service creates objects that have references between each other, the service can ask the database through the reserveIds metho |
| [`search`](#search) | unknown |  | db | Unlike the find method, the search method supports the "?" (question mark) operator. The ? operator can be used for full-text searching. How |
| [`setShardMode`](#setshardmode) | unknown |  | db | Marks an external media as transient for the specified DB8 shard Id. This means that all data, relative to the shard, are not required by an |
| [`shardInfo`](#shardinfo) | unknown |  | db | Retrieves the state of a shard, like shard activity, associated media devices, mount point. |
| [`stats`](#stats) | unknown |  | db | The stats method returns detailed information about the storage space used by every service. |
| [`watch`](#watch) | unknown |  | db | The watch method watches for updates to the database that would change the results of a query. |

<a id="batch"></a>
## `batch`

`luna://com.webos.epgdb/batch`

The batch method enables apps to execute multiple database operations in one service request. It allows only the following database operations: put get del find (without a watch) merge Atomicity is NOT guaranteed across batched operations.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `operations` | Object array: BatchOperation (required) The operations parameter contains the list of database operations to perform. |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/batch '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/batch (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="compact"></a>
## `compact`

`luna://com.webos.epgdb/compact`

The compact method invokes the low level garbage collector. When DB8 executes a del operation without Purge:True param, it only marks the object as to be deleted. The object will be removed by DB8, when the garbage collector is called. To call the garbage collector manually, the client can call the compact method. This command is implemented only for the LevelDB and Sandwich engine.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.epgdb/compact '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/compact (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="del"></a>
## `del`

`luna://com.webos.epgdb/del`

The del method deletes JSON data objects from the database. Apps can specify the objects to be deleted by providing: a set of IDs to be deleted a DB8 query

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `ids` | String array (optional) The ids parameter contains an array of JSON object ids that you wish to delete. If you do not wish to specify JSON object IDs, you must specify a query in the query parameter. |
| `query` | Object: Query (optional) The query parameter contains a query for a set of objects to be deleted. If you do not wish to specify a query, you must specify a list of JSON object ids in the ids parameter. |
| `purge` | Boolean (optional) The default value of the purge parameter is false . If the purge parameter is set to false , the target objects will only be marked for deletion. Objects marked for deletion can still be restored. They will be purged permanently only when an administrative purge operation is run. If the purge parameter is set to true , the target objects will be deleted permanently immediately. |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/del '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/del (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="delkind"></a>
## `delKind`

`luna://com.webos.epgdb/delKind`

The delKind method deletes a Kind from the database. Deleting a Kind deletes ALL data objects of that Kind.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `id` | String (required) The id parameter contains the id of the kind the app wants to delete. |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/delKind '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/delKind (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="dump"></a>
## `dump`

`luna://com.webos.epgdb/dump`

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
luna-send -n 1 -f luna://com.webos.epgdb/dump '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/dump (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="find"></a>
## `find`

`luna://com.webos.epgdb/find`

The find method returns a set of objects that match the query specified in the query parameter. The app can specify the number of results to return. However, if the app does not want to specify a limit, it can set the count parameter to true . This will cause the find method to return the total number of results. The app can also request to be notified if any of the returned results from the query change in the future. In order to receive change notifications, set the watch parameter to true . The find method supports distinct groups enabling the app to remove duplicate objects.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `query` | Object: Query (required) DB8 query for retrieving results. |
| `count` | Boolean (optional) The default value of the count parameter is false . If the app did not specify a limit on the number of results to return, and wants to know the total number of results returned, the app should set the count parameter to true . |
| `watch` | Boolean (optional) The default value of the watch parameter is false . If an app wants to be notified about any change in the returned results, the app should set the watch parameter to true . |
| `subscribe` | Boolean (optional) Subscription is enabled if true. |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/find '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/find (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="get"></a>
## `get`

`luna://com.webos.epgdb/get`

The get method retrieves JSON data objects by ids. This is the fastest way to retrieve data.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `ids` | String array (required) Ids of the JSON data objects to retrieve. |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/get '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/get (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="getprofile"></a>
## `getProfile`

`luna://com.webos.epgdb/getProfile`

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
luna-send -n 1 -f luna://com.webos.epgdb/getProfile '{}'
```

> Listed under ACG group "epgdatabase.profiling" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/getProfile (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_postbackup"></a>
## `internal/postBackup`

`luna://com.webos.epgdb/internal/postBackup`

An internal DB8 method that is called when a backup operation has been completed.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.epgdb/internal/postBackup '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/postBackup (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_postrestore"></a>
## `internal/postRestore`

`luna://com.webos.epgdb/internal/postRestore`

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
luna-send -n 1 -f luna://com.webos.epgdb/internal/postRestore '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/postRestore (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_prebackup"></a>
## `internal/preBackup`

`luna://com.webos.epgdb/internal/preBackup`

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
luna-send -n 1 -f luna://com.webos.epgdb/internal/preBackup '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/preBackup (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_prerestore"></a>
## `internal/preRestore`

`luna://com.webos.epgdb/internal/preRestore`

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
luna-send -n 1 -f luna://com.webos.epgdb/internal/preRestore '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/preRestore (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_releaseadminprofile"></a>
## `internal/releaseAdminProfile`

`luna://com.webos.epgdb/internal/releaseAdminProfile`

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
luna-send -n 1 -f luna://com.webos.epgdb/internal/releaseAdminProfile '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/releaseAdminProfile (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_scheduledpurge"></a>
## `internal/scheduledPurge`

`luna://com.webos.epgdb/internal/scheduledPurge`

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
luna-send -n 1 -f luna://com.webos.epgdb/internal/scheduledPurge '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/scheduledPurge (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_scheduledspacecheck"></a>
## `internal/scheduledSpaceCheck`

`luna://com.webos.epgdb/internal/scheduledSpaceCheck`

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
luna-send -n 1 -f luna://com.webos.epgdb/internal/scheduledSpaceCheck '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/scheduledSpaceCheck (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="internal_spacecheck"></a>
## `internal/spaceCheck`

`luna://com.webos.epgdb/internal/spaceCheck`

An internal DB8 private method, used by webOS private services. Services can subscribe for the spaceCheck method and get notifications when DB8 reaches soft and hard disk space limits.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.epgdb/internal/spaceCheck '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/internal/spaceCheck (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="listactivemedia"></a>
## `listActiveMedia`

`luna://com.webos.epgdb/listActiveMedia`

Returns a list of active attached media, and shards.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.epgdb/listActiveMedia '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/listActiveMedia (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="load"></a>
## `load` ⚠️ DANGEROUS

`luna://com.webos.epgdb/load`

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
luna-send -n 1 -f luna://com.webos.epgdb/load '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/load (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="merge"></a>
## `merge`

`luna://com.webos.epgdb/merge`

The merge method updates the properties of existing objects. The objects can be specified in one of the following ways: A query An array of IDs

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `objects` | Object array (optional) The object parameter is an array of objects, each object will have an id and key/value pairs that represent the object properties the app needs to merge. The objects parameter is required if the query parameter is not specified. |
| `query` | Object: Query (optional) The query parameter is a Query object specifying the set of objects whose properties the app wants to update. The query parameter is required if the object parameter is not specified. |
| `props` | Object (optional) The props parameter is an object with key/value pairs that specify the set of properties to be merged into the existing object(s) specified in the query parameter. If the app specifies the properties in the prop parameter, the query is required. |
| `ignoreMissing` | Boolean (optional) Ignore if any key is missing |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/merge '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/merge (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="mergeput"></a>
## `mergePut`

`luna://com.webos.epgdb/mergePut`

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
luna-send -n 1 -f luna://com.webos.epgdb/mergePut '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/mergePut (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="profile"></a>
## `profile`

`luna://com.webos.epgdb/profile`

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
luna-send -n 1 -f luna://com.webos.epgdb/profile '{}'
```

> Listed under ACG group "epgdatabase.profiling" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/profile (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="purge"></a>
## `purge` ⚠️ DANGEROUS

`luna://com.webos.epgdb/purge`

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
luna-send -n 1 -f luna://com.webos.epgdb/purge '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/purge (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="purgestatus"></a>
## `purgeStatus`

`luna://com.webos.epgdb/purgeStatus`

The purgeStatus method returns the status of the last run purge command. If the last run purge command was successful, the objects were permanently deleted, and the purgeStatus method will return the updated database revision number.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.epgdb/purgeStatus '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/purgeStatus (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="put"></a>
## `put`

`luna://com.webos.epgdb/put`

The put method stores JSON data objects of a particular Kind into the database. The put method will: Assign an id field to each object, if it was not set. Return the id and rev for each stored object.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `objects` | Object array (required) List of JSON data objects of a particular kind that the app wants to store in the database. |
| `shardId` | String (optional) Id of shard info |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/put '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/put (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="putkind"></a>
## `putKind`

`luna://com.webos.epgdb/putKind`

The putKind method registers a kind with the database. Kinds define the owner, and the indexes for a JSON data object. Indexes can be composed of single or multiple properties. When you create your index, be aware that queries can only return results that are indexed, and are contiguously ordered. If your app or service wants to be notified only when a subset of an object's properties are updated, then you can use revision sets. If your app or service creates objects that other apps or services need to access, then see the putPermissions method for more information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `id` | String (required) Id of the kind to be registered with the database. |
| `owner` | String (required) Owner of the kind. Only the owner has permission to modify the created kind. Use the ID of the app/service which calls the putKind method. App/service can only create kinds that they are the owner of. But it is possible to grant access to the created kind to other apps/services using the putPermission method. |
| `schema` | Object (optional) JSON Syntax for data objects of a specific kind. If set, this kind's data objects are validated before being stored. For details refer to http://json-schema.org/documentation.html |
| `sync` | Boolean (optional) The sync parameter allows apps to enable backing up and restoring specific kinds of objects. The default value for the sync parameter is false . If the user moves to another device, the saved app data can be restored. |
| `extends` | String array (optional) List of ids of parent kinds from which the kind has been derived. |
| `indexes` | Object: IndexClause (optional) The indexes parameter contains indexes for the kind. |
| `revsets` | Object array: RevSetClause (optional) List of database revision sets. |
| `private` | Boolean (optional) Enable private data for putKind |
| `assignId` | Boolean (optional) Enable assign id for putKind if true |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/putKind '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/putKind (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="putpermissions"></a>
## `putPermissions`

`luna://com.webos.epgdb/putPermissions`

The putPermissions method enables other apps or services to access an app's stored DB8 data. The app can give permissions to access data objects of a specific Kind.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `type` | String (required) Must be set to db.kind . |
| `object` | String (required) The DB8 kind of the object for which the app wants to provide access. |
| `caller` | String (required) The id of the app or service that the app is granting permission to access its data. |
| `operations` | Object: operation (required) Database operations the app is granting permissions for. |
| `create` | String (optional) To grant create permission, set the create parameter to allow . |
| `read` | String (optional) To grant read permission, set the read parameter to allow . |
| `update` | String (optional) To grant update permission, set the update parameter to allow . |
| `delete` | String (optional) To grant delete permission, set the delete parameter to allow . |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/putPermissions '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/putPermissions (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="putquotas"></a>
## `putQuotas` ⚠️ DANGEROUS

`luna://com.webos.epgdb/putQuotas`

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
luna-send -n 1 -f luna://com.webos.epgdb/putQuotas '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/putQuotas (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="quotastats"></a>
## `quotaStats`

`luna://com.webos.epgdb/quotaStats`

The quotaStats method returns information about a service's used limits.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.epgdb/quotaStats '{}'
```

> Listed under ACG group "epgdatabase.management" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/quotaStats (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="removeappdata"></a>
## `removeAppData` ⚠️ DANGEROUS

`luna://com.webos.epgdb/removeAppData`

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
luna-send -n 1 -f luna://com.webos.epgdb/removeAppData '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/removeAppData (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="reserveids"></a>
## `reserveIds`

`luna://com.webos.epgdb/reserveIds`

When a client service creates objects that have references between each other, the service can ask the database through the reserveIds method to regenerate ids of objects. The client service can use such ids as objects, and DB8 will use those ids when objects are inserted into the database. By default, DB8 configured to reserve maximum [0:1000] ids, but this limit can vary depending on the platform.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `count` | Number (required) Number of Ids to reserve. |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/reserveIds '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/reserveIds (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="search"></a>
## `search`

`luna://com.webos.epgdb/search`

Unlike the find method, the search method supports the "?" (question mark) operator. The ? operator can be used for full-text searching. However, the search method is significantly slower, and should only be used for full-text type-down search. The search method should not be used for retrieving results that are going to be scrolled in a list. The search method supports: Ordering by any property. Distinct method to remove duplicate objects. %% operator in filter to search in a sub-string. Canceling the search mid-way (using the 'cancelable' parameter). The search method has some limitations: There must be an index for the field you are searching on. The search operation looks for words beginning with the search string.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `query` | Object: Query (required) Query for search. |
| `watch` | Boolean (optional) Indicates if the app must be notified of any changes in the search results. This notification is sent only once (the first time when there is a change in the result). Possible values are: true - Notifies the changes. false - No notifications. Default value : false Note: The 'watch' and 'subscribe' parameters must not be used in the same call. |
| `subscribe` | Boolean (optional) Subscribe to get notified when there are changes in search results. Possible values are: true - Subscribe for changes. false - Not subscribed. Note : It is mandatory to set 'subscribe' to true when 'cancelable' is set to true . The 'watch' and 'subscribe' parameters must not be used in the same call. |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/search '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/search (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="setshardmode"></a>
## `setShardMode`

`luna://com.webos.epgdb/setShardMode`

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
luna-send -n 1 -f luna://com.webos.epgdb/setShardMode '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/setShardMode (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="shardinfo"></a>
## `shardInfo`

`luna://com.webos.epgdb/shardInfo`

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
luna-send -n 1 -f luna://com.webos.epgdb/shardInfo '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/shardInfo (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="stats"></a>
## `stats`

`luna://com.webos.epgdb/stats`

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
luna-send -n 1 -f luna://com.webos.epgdb/stats '{}'
```

> Listed under ACG group "epgdatabase.profiling" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/stats (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)

<a id="watch"></a>
## `watch`

`luna://com.webos.epgdb/watch`

The watch method watches for updates to the database that would change the results of a query.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `query` | Object: Query (required) Query whose results the app wants to watch. |
| `subscribe` | Boolean (optional) subscription is enabled if it true |

```sh
luna-send -n 1 -f luna://com.webos.epgdb/watch '{}'
```

> Listed under ACG group "epgdatabase.operation" in the component api.json/groups.json; no parameter docs read. Same method as com.webos.service.db/watch (params copied from that record).

Sources: [1](https://github.com/webosose/db8/blob/master/files/sysbus/dynamic/com.webos.service.db.api.json), [2](https://github.com/webosose/db8/blob/master/files/sysbus/static/com.webos.service.db.api.json)
