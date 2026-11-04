# `com.webos.service.filecache`

16 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`ChangeType`](#changetype) | public |  | storage | Allows apps to modify the parameters of a cache type other than its name. You must specify the name of the cache type, and those cache type  |
| [`CopyCacheObject`](#copycacheobject) | public |  | storage | Enables copying of an object from the file cache to a non-cached location. On successful completion, newPathName will be returned as it may  |
| [`DefineType`](#definetype) | public |  | storage | Defines a new cache type. This is intended for use by the backup service. Optionally you may specify the default values for the size, cost,  |
| [`DeleteType`](#deletetype) | public |  | storage | Allows you to delete a previously defined cache type and frees up its space. All objects in the cache must be expired in order to delete a c |
| [`DescribeType`](#describetype) | public |  | storage | Returns cache type details. The DescribeType will return the currently assigned values for all cache type parameters. Note: Filesize as it r |
| [`ExpireCacheObject`](#expirecacheobject) | public |  | storage | Objects will normally be automatically expired form the cache as space is needed. If you want to force an item to be removed or if you want  |
| [`GetCacheObjectFilename`](#getcacheobjectfilename) | public |  | storage | Allows you to query the original filename of a particular object in a cache type. In order to get the cache object file name the app must sp |
| [`GetCacheObjectSize`](#getcacheobjectsize) | public |  | storage | Allows you to query a particular object size in a cache type. In order to get the cache object size, the app must specify the pathname of th |
| [`GetCacheStatus`](#getcachestatus) | public |  | storage | Give status of the cache as a whole. The GetCacheStatus will return: the number of cache types defined the total space used by the objects i |
| [`GetCacheTypes`](#getcachetypes) | public |  | storage | Returns an array of all defined cache types. |
| [`GetCacheTypeStatus`](#getcachetypestatus) | public |  | storage | Allows you to query the status of a particular cache type to obtain: the total space used by the objects in the specified cache type the num |
| [`GetVersion`](#getversion) | public |  | storage | Returns the version of the File Cache API. |
| [`InsertCacheObject`](#insertcacheobject) | public | yes | storage | Inserts a new object of the specified type into the cache. The fileName parameter is required. It is stored with the object to ensure that t |
| [`ResizeCacheObject`](#resizecacheobject) | public |  | storage | By calling the ResizeCacheObject you can specify the size of the cached object after it is inserted into the cache. Call this method if the  |
| [`SubscribeCacheObject`](#subscribecacheobject) | public |  | storage | Enables you to subscribe an object in the cache and hold a subscription to the object for the duration of your usage. An object cannot be ex |
| [`TouchCacheObject`](#touchcacheobject) | public |  | storage | Allows you to mark an object as recently used. This decreases the chances of the object from getting expired from the cache when the space i |

<a id="changetype"></a>
## `ChangeType`

`luna://com.webos.service.filecache/ChangeType`

Allows apps to modify the parameters of a cache type other than its name. You must specify the name of the cache type, and those cache type parameters that have to be modified. The cache type values are all as defined in DefineType .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `typeName` | String (required) Name of cache type to be modified. |
| `loWatermark` | Number (optional) The minimum space in bytes guaranteed to be available for this cache type. |
| `hiWatermark` | Number (optional) The maximum space in bytes allowed to be used by this cache type. |
| `size` | Number (optional) Default value in bytes for any object inserted into this cache type that does not specify a value for size. Size must not be negative. |
| `cost` | Number (optional) Default value between 0 and 100 for any object inserted into this cache type that does not specify a value for cost. |
| `lifetime` | Number (optional) Default value in seconds for any object inserted into this cache type that does not specify a value for lifetime. lifetime must not be negative. |

```sh
luna-send -f -n 1 luna://com.webos.service.filecache/DefineType '{"typeName":"test", "size":1024, "loWatermark":102400, "hiWatermark":409600, "cost":5}'
```

> ACG: filecache.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="copycacheobject"></a>
## `CopyCacheObject`

`luna://com.webos.service.filecache/CopyCacheObject`

Enables copying of an object from the file cache to a non-cached location. On successful completion, newPathName will be returned as it may be different than expected due to filename collisions. If there is a name collision, the name will be made unique by adding a number to the file basename (i.e. foo.bar may become foo-(1).bar).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pathName` | String (required) The pathName is the path of the cache object to be copied |
| `destination` | String (optional) The destination is the path to a target directory, this path will be validated to ensure you have write permissions to that directory. |
| `fileName` | String (optional) The fileName is the name for the target file. If not passed, the fileName will be the value passed when calling InsertCacheObject . |

```sh
luna-send -n 1 -f luna://com.webos.service.filecache/CopyCacheObject '{"pathName":"/var/file-cache/test/M/OnRpQABl.bar", "destination":"", "fileName":"foo.bar"}
```

> ACG: filecache.management \| Returns: returnValue:Boolean; newPathName:String; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="definetype"></a>
## `DefineType`

`luna://com.webos.service.filecache/DefineType`

Defines a new cache type. This is intended for use by the backup service. Optionally you may specify the default values for the size, cost, and lifetime. These defaults will be applied to all objects inserted into this cache type that do not specify their own values for these arguments. The size is in bytes, the cost is an integer between 0 and 100, and the lifetime is in seconds. The errorCode and errorText are only be returned if the returnValue is false. Note: You can not define type with the same typeName . Use changeType to change an existing type.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `typeName` | String (required) A typeName is a string up to 64 characters that uniquely identifies the new cache type. A typeName cannot start with a . ( the period character). |
| `loWatermark` | Number (required) The minimum space in bytes guaranteed to be available for the cache type. |
| `hiWatermark` | Number (required) The maximum space in bytes allowed to be used by the cache type. |
| `size` | Number (optional) Default value in bytes for any object inserted into the cache type that does not specify a value for size . |
| `cost` | Number (optional) Default value between 0 and 100 for any object inserted into this cache type that does not specify a value for cost . |
| `lifetime` | Number (optional) Default value in seconds for any object inserted into this cache type that does not specify a value for lifetime . |
| `dirType` | Boolean (optional) Specifies whether the cache type should create directory entries. This is intended for use by the backup service. |

```sh
luna-send -f -n 1 luna://com.webos.service.filecache/DefineType '{"typeName":"test","size":1024,"loWatermark":102400,"hiWatermark":409600,"cost":5}
```

> ACG: filecache.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="deletetype"></a>
## `DeleteType`

`luna://com.webos.service.filecache/DeleteType`

Allows you to delete a previously defined cache type and frees up its space. All objects in the cache must be expired in order to delete a cache type. The app can call the ExpireCacheObject to force the objects to expire in the cache type.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `typeName` | String (required) The typeName is the name of the cache type to be deleted |

```sh
luna-send -f -n 1 luna://com.webos.service.filecache/DefineType '{"typeName":"test", "size":1024, "loWatermark":102400, "hiWatermark":409600, "cost":5}'
```

> ACG: filecache.management \| Returns: returnValue:Boolean; freedSpace:Number; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="describetype"></a>
## `DescribeType`

`luna://com.webos.service.filecache/DescribeType`

Returns cache type details. The DescribeType will return the currently assigned values for all cache type parameters. Note: Filesize as it resides on disk after accounting for the filesystem blocksize of 4096 loWatermark/hiWatermark will be padded with filesystem block size of 4096.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `typeName` | String (required) The typeName is the name of the cache type for which more information about the cache type is needed. |

```sh
luna-send -f -n 1 luna://com.webos.service.filecache/DefineType '{"typeName":"test", "size":1024, "loWatermark":102400, "hiWatermark":409600, "cost":5}'
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; loWatermark:Number; hiWatermark:Number; size:Number; cost:Number; lifetime:Number; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="expirecacheobject"></a>
## `ExpireCacheObject`

`luna://com.webos.service.filecache/ExpireCacheObject`

Objects will normally be automatically expired form the cache as space is needed. If you want to force an item to be removed or if you want to remove items prior to calling DeleteType , you can expire an object manually. The ExpireCacheObject method will not actually remove a subscribed object from the cache, but will mark the object for removal. The object is physically removed, when it has no active subscriptions. NOTE : By default, objects in a cache type will be automatically expired from the cache as space is needed.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pathName` | String (required) Path of the object to be manually expired. |

```sh
luna-send -n 1 -f luna://com.webos.service.filecache/ExpireCacheObject '{"pathName":"/var/file-cache/test/M/OnRpQABl.bar"}
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="getcacheobjectfilename"></a>
## `GetCacheObjectFilename`

`luna://com.webos.service.filecache/GetCacheObjectFilename`

Allows you to query the original filename of a particular object in a cache type. In order to get the cache object file name the app must specify the path name of the object.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pathName` | String (required) Path of the object for which the filename is to be queried. |

```sh
luna-send -n 1 -f luna://com.webos.service.filecache/GetCacheObjectFilename '{"pathName":"/var/file-cache/test/L/cvrKwABm.bar"}
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; fileName:String; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="getcacheobjectsize"></a>
## `GetCacheObjectSize`

`luna://com.webos.service.filecache/GetCacheObjectSize`

Allows you to query a particular object size in a cache type. In order to get the cache object size, the app must specify the pathname of the object.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pathName` | String (required) Path for the cache object to be queried for its size. |

```sh
luna-send -n 1 -f luna://com.webos.service.filecache/GetCacheObjectSize '{"pathName":"/var/file-cache/test/L/cvrKwABm.bar"}
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; size:Number; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="getcachestatus"></a>
## `GetCacheStatus`

`luna://com.webos.service.filecache/GetCacheStatus`

Give status of the cache as a whole. The GetCacheStatus will return: the number of cache types defined the total space used by the objects in all cache types the number of objects in all cache types the available space in the cache

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.filecache/GetCacheStatus '{}
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; numTypes:Number; size:Number; numObjs:Number; availSpace:Number \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="getcachetypes"></a>
## `GetCacheTypes`

`luna://com.webos.service.filecache/GetCacheTypes`

Returns an array of all defined cache types.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -f -n 1 luna://com.webos.service.filecache/DefineType '{"typeName":"test", "size":1024, "loWatermark":102400, "hiWatermark":409600, "cost":5}'
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; types:String array \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="getcachetypestatus"></a>
## `GetCacheTypeStatus`

`luna://com.webos.service.filecache/GetCacheTypeStatus`

Allows you to query the status of a particular cache type to obtain: the total space used by the objects in the specified cache type the number of objects in the specified cache type

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `typeName` | String (required) The name of the cache type for which the status information is to be retrieved. |

```sh
luna-send -f -n 1 luna://com.webos.service.filecache/DefineType '{"typeName":"test", "size":1024, "loWatermark":102400, "hiWatermark":409600, "cost":5}'
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; size:Number; numObjs:Number; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="getversion"></a>
## `GetVersion`

`luna://com.webos.service.filecache/GetVersion`

Returns the version of the File Cache API.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.filecache/GetVersion '{}
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; version:String; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="insertcacheobject"></a>
## `InsertCacheObject`

`luna://com.webos.service.filecache/InsertCacheObject`

Inserts a new object of the specified type into the cache. The fileName parameter is required. It is stored with the object to ensure that the correct extension is provided, so that other module can choose a strategy to process this file (for example, choose the file viewer matching the extension). Other parameters are optional. If not provided, the cache type default values defined are be used. Returned is the path to the object in the cache. The subscribe setting should be set to true so that after the object is inserted you can write the file.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `typeName` | String (required) The cache type of the object being inserted. |
| `fileName` | String (required) The fileName is stored with the object and is used to ensure the correct extension is provided on the cache object. The fileName will help any code, for example, one that determines a file viewer, to operate correctly on a cached object file. |
| `size` | Number (optional) The size is a value in bytes, should be greater than zero. Note that, size parameter is required, if type has no default size. |
| `cost` | Number (optional) The cost is a number between 1 and 100. |
| `lifetime` | Number (optional) The lifetime is value in seconds. |
| `subscribe` | Boolean (optional) Subscribe should be set to true so that after the object is inserted one can continues to make updates to the file. |

```sh
luna-send -f -n 1 luna://com.webos.service.filecache/DefineType '{"typeName":"test", "size":1024, "loWatermark":102400, "hiWatermark":409600, "cost":5}'
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; pathName:String; subscribed:Boolean; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="resizecacheobject"></a>
## `ResizeCacheObject`

`luna://com.webos.service.filecache/ResizeCacheObject`

By calling the ResizeCacheObject you can specify the size of the cached object after it is inserted into the cache. Call this method if the final size of the object, which is being inserted into the cache, is not known by the moment, when you call the InsertCacheObject method. In this case: Call the InsertCacheObject method specifying the best approximate object size you can guess. Then call the ResizeCacheObject method on a subscribed object, if the the object size grows out of the previously specified size. If the object is larger than the specified size when the write operation is complete, the object will be automatically removed from the cache. If the object is smaller than the specified size, the recorded object size will be adjusted to the correct size. Remark: it is not a good practice to just specify a larger than expected size though as this could cause other objects to be expi

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pathName` | String (required) The path of the object to be resized. |
| `newSize` | Number (required) The new size of the object in bytes. |

```sh
luna-send -f -n 1 luna://com.webos.service.filecache/ResizeCacheObject '{"newSize": 1024, "pathName": "/var/file-cache/test/H/LCWlwAJb.cat"}
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; newSize:Number; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="subscribecacheobject"></a>
## `SubscribeCacheObject`

`luna://com.webos.service.filecache/SubscribeCacheObject`

Enables you to subscribe an object in the cache and hold a subscription to the object for the duration of your usage. An object cannot be expired from the cache while at least one subscription is active.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pathName` | String (required) The path for the object to be subscribed. |

```sh
luna-send -n 1 -f luna://com.webos.service.filecache/SubscribeCacheObject '{"pathName": "/var/file-cache/test/H/LCWlwAJb.cat"}
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; subscribed:Boolean; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)

<a id="touchcacheobject"></a>
## `TouchCacheObject`

`luna://com.webos.service.filecache/TouchCacheObject`

Allows you to mark an object as recently used. This decreases the chances of the object from getting expired from the cache when the space is being reclaimed.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pathName` | String (required) path of the object to be marked as touched. |

```sh
luna-send -n 1 -f luna://com.webos.service.filecache/TouchCacheObject '{"pathName":"/var/file-cache/test/D2_/aJQCH9.bar"}
```

> ACG: filecache.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: This service enables you to manage caching of files. It implements the global shared cache space, which webOS applications (such as Email ) can use to temporary store cache files or send files to othe

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-filecache/)
