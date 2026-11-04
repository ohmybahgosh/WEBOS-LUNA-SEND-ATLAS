# `com.webos.service.panelcontroller`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`setScreenOnOff`](#setscreenonoff) | ssap |  | display | Toggle panel on/off (can behave differently from tvpower turnOn/OffScreen) |

<a id="setscreenonoff"></a>
## `setScreenOnOff`

`luna://com.webos.service.panelcontroller/setScreenOnOff`

Toggle panel on/off (can behave differently from tvpower turnOn/OffScreen)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `OnOff` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.panelcontroller/setScreenOnOff","payload":{"OnOff":false}}
```

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py)
