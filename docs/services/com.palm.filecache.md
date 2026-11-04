# `com.palm.filecache`

16 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`ChangeType`](#changetype) | private |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`CopyCacheObject`](#copycacheobject) | private |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`DefineType`](#definetype) | private |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`DeleteType`](#deletetype) | private |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). ⚠️ |
| [`DescribeType`](#describetype) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`ExpireCacheObject`](#expirecacheobject) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`GetCacheObjectFilename`](#getcacheobjectfilename) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`GetCacheObjectSize`](#getcacheobjectsize) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`GetCacheStatus`](#getcachestatus) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`GetCacheTypes`](#getcachetypes) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`GetCacheTypeStatus`](#getcachetypestatus) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`GetVersion`](#getversion) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`InsertCacheObject`](#insertcacheobject) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`ResizeCacheObject`](#resizecacheobject) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`SubscribeCacheObject`](#subscribecacheobject) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |
| [`TouchCacheObject`](#touchcacheobject) | public |  | storage | Method on com.palm.filecache (from on-device permission registry; parameters undocumented). |

<a id="changetype"></a>
## `ChangeType`

`luna://com.palm.filecache/ChangeType`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/ChangeType '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="copycacheobject"></a>
## `CopyCacheObject`

`luna://com.palm.filecache/CopyCacheObject`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/CopyCacheObject '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="definetype"></a>
## `DefineType`

`luna://com.palm.filecache/DefineType`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/DefineType '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletetype"></a>
## `DeleteType` ⚠️ DANGEROUS

`luna://com.palm.filecache/DeleteType`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/DeleteType '{}'
```

> ACG groups: private, system. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="describetype"></a>
## `DescribeType`

`luna://com.palm.filecache/DescribeType`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/DescribeType '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="expirecacheobject"></a>
## `ExpireCacheObject`

`luna://com.palm.filecache/ExpireCacheObject`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/ExpireCacheObject '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcacheobjectfilename"></a>
## `GetCacheObjectFilename`

`luna://com.palm.filecache/GetCacheObjectFilename`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/GetCacheObjectFilename '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcacheobjectsize"></a>
## `GetCacheObjectSize`

`luna://com.palm.filecache/GetCacheObjectSize`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/GetCacheObjectSize '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcachestatus"></a>
## `GetCacheStatus`

`luna://com.palm.filecache/GetCacheStatus`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/GetCacheStatus '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcachetypes"></a>
## `GetCacheTypes`

`luna://com.palm.filecache/GetCacheTypes`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/GetCacheTypes '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcachetypestatus"></a>
## `GetCacheTypeStatus`

`luna://com.palm.filecache/GetCacheTypeStatus`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/GetCacheTypeStatus '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getversion"></a>
## `GetVersion`

`luna://com.palm.filecache/GetVersion`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/GetVersion '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="insertcacheobject"></a>
## `InsertCacheObject`

`luna://com.palm.filecache/InsertCacheObject`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/InsertCacheObject '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="resizecacheobject"></a>
## `ResizeCacheObject`

`luna://com.palm.filecache/ResizeCacheObject`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/ResizeCacheObject '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscribecacheobject"></a>
## `SubscribeCacheObject`

`luna://com.palm.filecache/SubscribeCacheObject`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/SubscribeCacheObject '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="touchcacheobject"></a>
## `TouchCacheObject`

`luna://com.palm.filecache/TouchCacheObject`

Method on com.palm.filecache (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.filecache/TouchCacheObject '{}'
```

> ACG groups: filecache, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
