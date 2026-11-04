# `com.webos.service.devicereset`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`requestReboot`](#requestreboot) | ssap |  | power-mgmt | Full TV reboot |

<a id="requestreboot"></a>
## `requestReboot`

`luna://com.webos.service.devicereset/requestReboot`

Full TV reboot

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `reason` | string, e.g. 'broadcastSystemChanged' |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.devicereset/requestReboot","payload":{"reason":"broadcastSystemChanged"}}
```

> bscpylgtv `reboot()` ('Reboot device fully') uses this as a public SSAP endpoint.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py)
