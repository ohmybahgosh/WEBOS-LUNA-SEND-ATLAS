# `ssap:pairing`

SSAP (remote control protocol) pairing endpoint exposing setPin, used to complete client pairing with the TV over the external control socket.

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`setPin`](#setpin) | ssap |  | security | documented | Submit PIN during PIN-type pairing |

<a id="setpin"></a>
## `setPin`

`ssap://pairing/setPin`

Submit PIN during PIN-type pairing

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pin` | string |

```sh
{"type":"request","id":"1","uri":"ssap://pairing/setPin","payload":{}}
```

> Used with pairingType PIN / LGSWITCH-PIN (bscpylgtv PAIRING_TYPES: PROMPT, PIN, COMBINED, LGSWITCH-PIN). The SSAP namespace 'pairing' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/WebOSTVServiceSocketClient.java)
