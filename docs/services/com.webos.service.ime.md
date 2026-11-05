# `com.webos.service.ime`

Input Method Editor and virtual-keyboard service: inserts and deletes text, sends the enter key, and registers a remote keyboard for on-screen text entry.

4 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`deleteCharacters`](#deletecharacters) | ssap |  | input | documented | Delete characters in the focused text field |
| [`insertText`](#inserttext) | ssap |  | input | documented | Insert (or replace) text in the focused text field |
| [`registerRemoteKeyboard`](#registerremotekeyboard) | ssap | yes | input | documented | Subscribe to remote-keyboard (text field focus) events |
| [`sendEnterKey`](#sendenterkey) | ssap |  | input | documented | Send Enter to the on-screen keyboard/text field |

<a id="deletecharacters"></a>
## `deleteCharacters`

`luna://com.webos.service.ime/deleteCharacters`

Delete characters in the focused text field

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV, webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `count` | int number of characters |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |
| `errorCode` | Number (int32\_t) (optional) Indicates the number for the failure of the operation. |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.ime/deleteCharacters","payload":{"count":1}}
```

> ACG: ime.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:Number (int32_t) \| Service: IME and Virtual Keyboard Service.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/hobbyquaker/lgtv2/blob/master/README.md), [3](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/WebOSTVKeyboardInput.java), [4](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ime/)

<a id="inserttext"></a>
## `insertText`

`luna://com.webos.service.ime/insertText`

Insert (or replace) text in the focused text field

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV, webOS OSE  
- **Versions:** webOS 3+; webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `text` | string |
| `replace` | bool\|0/1 replace existing text |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |
| `errorCode` | Number (int32\_t) (optional) Indicates the number for the failure of the operation. |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.ime/insertText","payload":{"text":"abc","replace":0}}
```

> Also deleteCharacters, sendEnterKey. \|\| ACG: ime.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:Number (int32_t) \| Service: IME and Virtual Keyboard Service.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/hobbyquaker/lgtv2/blob/master/README.md), [3](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/WebOSTVKeyboardInput.java), [4](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md), [5](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ime/)

<a id="registerremotekeyboard"></a>
## `registerRemoteKeyboard`

`luna://com.webos.service.ime/registerRemoteKeyboard`

Subscribe to remote-keyboard (text field focus) events

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV, webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | true |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. |
| `errorCode` | Number (int32\_t) (optional) Indicates the number for the failure of the operation. |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.ime/registerRemoteKeyboard","payload":{"subscribe":true}}
```

> Used by ConnectSDK KeyboardControl; snabb/webostv lists it as unimplemented TODO. \|\| ACG: ime.operation \| Returns: returnValue:Boolean; subscribed:Boolean; errorText:String; errorCode:Number (int32_t) \| Service: IME and Virtual Keyboard Service.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/WebOSTVKeyboardInput.java), [2](https://github.com/snabb/webostv/blob/master/mmisc.go), [3](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ime/)

<a id="sendenterkey"></a>
## `sendEnterKey`

`luna://com.webos.service.ime/sendEnterKey`

Send Enter to the on-screen keyboard/text field

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV, webOS OSE  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.ime/sendEnterKey","payload":{}}
```

> ACG: ime.operation \| Returns: returnValue:Boolean \| Service: IME and Virtual Keyboard Service.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/WebOSTVKeyboardInput.java), [4](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ime/)
