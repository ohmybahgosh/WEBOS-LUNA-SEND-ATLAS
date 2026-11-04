# `com.webos.service.appcasting`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getCommand`](#getcommand) | ssap | yes | media | Subscribe to appcasting commands from the TV |
| [`receiveUIBCEvent`](#receiveuibcevent) | ssap | yes | media | Subscribe to UIBC user-input events (screen mirroring) |
| [`sendCommand`](#sendcommand) | ssap |  | media | Send appcasting (LG Cast) command: payload {cmd, service}; cmd values in ConnectSDK: CONNECT, GET_PARAMETER, SET_PARAMETER, PLAY, PAUSE, KEE |

<a id="getcommand"></a>
## `getCommand`

`luna://com.webos.service.appcasting/getCommand`

Subscribe to appcasting commands from the TV

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `subscribe` | true |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.appcasting/getCommand","payload":{}}
```

> Used by ConnectSDK LGCast screen mirroring.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/lgcast/common/connection/LGCastCommand.java)

<a id="receiveuibcevent"></a>
## `receiveUIBCEvent`

`luna://com.webos.service.appcasting/receiveUIBCEvent`

Subscribe to UIBC user-input events (screen mirroring)

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `subscribe` | true |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.appcasting/receiveUIBCEvent","payload":{}}
```

> Used by ConnectSDK LGCast screen mirroring.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/lgcast/common/connection/LGCastCommand.java)

<a id="sendcommand"></a>
## `sendCommand`

`luna://com.webos.service.appcasting/sendCommand`

Send appcasting (LG Cast) command: payload {cmd, service}; cmd values in ConnectSDK: CONNECT, GET_PARAMETER, SET_PARAMETER, PLAY, PAUSE, KEEPALIVE, TEARDOWN (also deviceInfo, clientKey keys)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `cmd` | string |
| `service` | string feature name |
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.appcasting/sendCommand","payload":{}}
```

> Used by ConnectSDK LGCast screen mirroring.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/lgcast/common/connection/LGCastCommand.java)
