# `com.webos.service.applicationManager`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getAppLoadStatus`](#getapploadstatus) | public |  | apps | Checks whether an app exists/is loadable |

<a id="getapploadstatus"></a>
## `getAppLoadStatus`

`luna://com.webos.service.applicationManager/getAppLoadStatus`

Checks whether an app exists/is loadable

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 5+  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `appId` | string |

```sh
luna-send-pub -n 1 luna://com.webos.service.applicationManager/getAppLoadStatus '{"appId":"com.example.app"}'
```

> Returns {exist:bool}. dev-manager treats LunaUnknownMethod as unsupported on older firmware.

Sources: [1](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/app-manager.service.ts)
