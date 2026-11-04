# `com.webos.service.configurator`

4 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`rescan`](#rescan) | public |  | settings | Force rescan of resource file for application. Useful when application's resource file has been modified and it wants to update the resource |
| [`run`](#run) | public |  | settings | This method will scan all folders and process all configuration files. |
| [`scan`](#scan) | public |  | settings | Within the API call, application can notify Configurator about new resource files and ask Configurator to process those resource files. Exam |
| [`unconfigure`](#unconfigure) | public |  | settings | Rollback all actions that were made by the scan / rescan API calls. In other words, release used resources. |

<a id="rescan"></a>
## `rescan`

`luna://com.webos.service.configurator/rescan`

Force rescan of resource file for application. Useful when application's resource file has been modified and it wants to update the resources. For example, updated Kind or Kind permissions

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Application Id |
| `type` | String (required) Either 'app' or 'service' |
| `location` | String (required) Indicates if it is a system app or a third party app. |

```sh
luna-send -f -n 1 luna://com.webos.service.configurator/rescan '[{"id":"com.webos.app.settings","type":"app","location" :"system"}]
```

> ACG: configurator.management \| Returns: returnValue:Boolean; configured:Number \| Service: Creates the database schema, filecache configuration, and activities for webOS applications.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-configurator/)

<a id="run"></a>
## `run`

`luna://com.webos.service.configurator/run`

This method will scan all folders and process all configuration files.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `types` | array (required) List of different configuration types. Types are dbkinds, filecache, activities. Note: For Auto , "activities" type parameter should be used only inside session or with sessionId. |

```sh
luna-send -n 1 luna://com.webos.service.configurator/run '{"types":["activities"]}'
```

> ACG: configurator.management \| Returns: returnValue:Boolean; configured:Number \| Service: Creates the database schema, filecache configuration, and activities for webOS applications.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-configurator/)

<a id="scan"></a>
## `scan`

`luna://com.webos.service.configurator/scan`

Within the API call, application can notify Configurator about new resource files and ask Configurator to process those resource files. Example of use case: application installed and runs at first. Application at first startup can ask configurator to register kind for itself. For Path of resource files, see Runtime Configurator Directory in Overview section of this doc

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Application Id |
| `type` | String (required) Either 'app' or 'service' |
| `location` | String (required) Indicates if it is a system app or a third party app. |

```sh
luna-send -f -n 1 luna://com.webos.service.configurator/scan '[{"id":"com.webos.app.settings","type":"app","location" :"system"}]
```

> ACG: configurator.management \| Returns: returnValue:Boolean; configured:Number \| Service: Creates the database schema, filecache configuration, and activities for webOS applications.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-configurator/)

<a id="unconfigure"></a>
## `unconfigure`

`luna://com.webos.service.configurator/unconfigure`

Rollback all actions that were made by the scan / rescan API calls. In other words, release used resources.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) Application or Service Id |
| `type` | String (required) Either 'app' or 'service' |
| `location` | String (required) Indicates if it is a system or a third party app. |

```sh
luna-send -f -n 1 luna://com.webos.service.configurator/unconfigure '[{"id":"com.webos.app.settings","type":"app","location" :"system"}]
```

> ACG: configurator.management \| Returns: returnValue:Boolean; configured:Number \| Service: Creates the database schema, filecache configuration, and activities for webOS applications.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-configurator/)
