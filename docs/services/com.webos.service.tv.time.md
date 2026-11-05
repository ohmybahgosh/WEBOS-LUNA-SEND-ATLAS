# `com.webos.service.tv.time`

TV time service that returns the current time.

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getCurrentTime`](#getcurrenttime) | ssap |  | misc | documented | Get current TV time |

<a id="getcurrenttime"></a>
## `getCurrentTime`

`luna://com.webos.service.tv.time/getCurrentTime`

Get current TV time

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.tv.time/getCurrentTime","payload":{}}
```

> Response: year, month, day, hour, minute, second (snabb/webostv).

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)
