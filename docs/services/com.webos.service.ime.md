# `com.webos.service.ime`

4 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`deleteCharacters`](#deletecharacters) | public |  | input | Delete characters in the focused text field |
| [`insertText`](#inserttext) | public |  | input | Insert (or replace) text in the focused text field |
| [`registerRemoteKeyboard`](#registerremotekeyboard) | public | yes | input | Subscribe to remote-keyboard (text field focus) events |
| [`sendEnterKey`](#sendenterkey) | public |  | input | Send Enter to the on-screen keyboard/text field |

<a id="deletecharacters"></a>
## `deleteCharacters`

`luna://com.webos.service.ime/deleteCharacters`

Delete characters in the focused text field

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `count` | number (required) Number of Unicode characters to delete. |

```sh
luna-send -n 1 luna://com.webos.service.ime/deleteCharacters '{"count": 1}
```

> ACG: ime.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:Number (int32_t) \| Service: IME and Virtual Keyboard Service.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ime/), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [3](https://github.com/hobbyquaker/lgtv2/blob/master/README.md), [4](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/WebOSTVKeyboardInput.java)

<a id="inserttext"></a>
## `insertText`

`luna://com.webos.service.ime/insertText`

Insert (or replace) text in the focused text field

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 23+; webOS 3+  
- **Confidence:** documented, code, community

| Param | Type / notes |
|---|---|
| `text` | String (required) Text to insert. |
| `replace` | Boolean (optional) if true, replace any existing text in field. |

```sh
luna-send -n 1 luna://com.webos.service.ime/insertText '{"text": "hello world", "replace": true}
```

> ACG: ime.operation \| Returns: returnValue:Boolean; errorText:String; errorCode:Number (int32_t) \| Service: IME and Virtual Keyboard Service. \|\| Also deleteCharacters, sendEnterKey.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ime/), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [3](https://github.com/hobbyquaker/lgtv2/blob/master/README.md), [4](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/WebOSTVKeyboardInput.java), [5](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md)

<a id="registerremotekeyboard"></a>
## `registerRemoteKeyboard`

`luna://com.webos.service.ime/registerRemoteKeyboard`

Subscribe to remote-keyboard (text field focus) events

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Must be true. |

```sh
luna-send -n 1 luna://com.webos.service.ime/registerRemoteKeyboard '{"subscribe": true}
```

> ACG: ime.operation \| Returns: returnValue:Boolean; subscribed:Boolean; errorText:String; errorCode:Number (int32_t) \| Service: IME and Virtual Keyboard Service. \|\| Used by ConnectSDK KeyboardControl; snabb/webostv lists it as unimplemented TODO.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ime/), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/WebOSTVKeyboardInput.java), [3](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="sendenterkey"></a>
## `sendEnterKey`

`luna://com.webos.service.ime/sendEnterKey`

Send Enter to the on-screen keyboard/text field

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 23+  
- **Confidence:** documented, code

```sh
luna-send -n 1 luna://com.webos.service.ime/sendEnterKey '{}
```

> ACG: ime.operation \| Returns: returnValue:Boolean \| Service: IME and Virtual Keyboard Service.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-ime/), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [3](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [4](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/WebOSTVKeyboardInput.java)
