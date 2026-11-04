# `com.webos.service.preloadmanager`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getPreloadPolicy`](#getpreloadpolicy) | private |  | apps | Reads preload policy |
| [`setPreloadPolicy`](#setpreloadpolicy) | private |  | apps | Enables/disables preloading of an app so LG does not keep it resident in memory |
| [`setPreloadStatus`](#setpreloadstatus) | private |  | apps | Preload manager status setter (name listed among ACG-permitted methods in scheduled-task research note) |

<a id="getpreloadpolicy"></a>
## `getPreloadPolicy`

`luna://com.webos.service.preloadmanager/getPreloadPolicy`

Reads preload policy

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 6+  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.preloadmanager/getPreloadPolicy '{}'
```

Sources: [1](https://github.com/lasharor/cleanyourtv-WebOS/blob/HEAD/helper/preload.js)

<a id="setpreloadpolicy"></a>
## `setPreloadPolicy`

`luna://com.webos.service.preloadmanager/setPreloadPolicy`

Enables/disables preloading of an app so LG does not keep it resident in memory

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 6+  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `application` | {"id": "string", "isEnabled": "boolean"} |

```sh
luna-send -n 1 luna://com.webos.service.preloadmanager/setPreloadPolicy '{"application":{"id":"com.webos.app.home","isEnabled":false}}'
```

> getPreloadPolicy also exists. Used by trim-preloads and display-only.

Sources: [1](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/tv/default-home), [2](https://github.com/SmixNZL/webos-display-only/blob/HEAD/tv/runtime.sh)

<a id="setpreloadstatus"></a>
## `setPreloadStatus`

`luna://com.webos.service.preloadmanager/setPreloadStatus`

Preload manager status setter (name listed among ACG-permitted methods in scheduled-task research note)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.preloadmanager/setPreloadStatus '{}'
```

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/development/scheduled-tasks-triggers.md)
