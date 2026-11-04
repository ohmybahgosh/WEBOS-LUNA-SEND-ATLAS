# `com.webos.service.sm`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`deviceid/getIDs`](#deviceid_getids) | public |  | security | Returns device IDs provided by webOS TV (LGUDID). |

<a id="deviceid_getids"></a>
## `deviceid/getIDs`

`luna://com.webos.service.sm/deviceid/getIDs`

Returns device IDs provided by webOS TV (LGUDID).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.0+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `idType` | Array (required) only "LGUDID" allowed |

```sh
luna-send -n 1 -f luna://com.webos.service.sm/deviceid/getIDs '{"idType":["LGUDID"]}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/device-unique-id)
