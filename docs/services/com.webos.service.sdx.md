# `com.webos.service.sdx`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getDeviceUuid`](#getdeviceuuid) | public |  | system-info | Returns device UUID; billingId carries modelName for otaId derivation |
| [`getServer`](#getserver) | private |  | update | Returns which LG server environment the TV talks to |

<a id="getdeviceuuid"></a>
## `getDeviceUuid`

`luna://com.webos.service.sdx/getDeviceUuid`

Returns device UUID; billingId carries modelName for otaId derivation

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** code

```sh
luna-send-pub -n 1 luna://com.webos.service.sdx/getDeviceUuid '{}'
```

> dev-manager parses billingId as URL query to get modelName.

Sources: [1](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/device-manager.service.ts)

<a id="getserver"></a>
## `getServer`

`luna://com.webos.service.sdx/getServer`

Returns which LG server environment the TV talks to

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdx/getServer '{}'
```

Sources: [1](https://github.com/PhanNgocTrieu/swpct/blob/HEAD/automation/python/santify_250313/automation.sh), [2](https://github.com/Kyusoo-Kim/memo/blob/HEAD/public/db.json)
