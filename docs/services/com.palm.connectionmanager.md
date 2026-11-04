# `com.palm.connectionmanager`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getStatus`](#getstatus) | public | yes | connection | Gets the current status of network connections (Wi-Fi and wired). |

<a id="getstatus"></a>
## `getStatus`

`luna://com.palm.connectionmanager/getStatus`

Gets the current status of network connections (Wi-Fi and wired).

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (all versions unless noted)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) |

```sh
luna-send -i -f luna://com.palm.connectionmanager/getStatus '{}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/connection-manager)
