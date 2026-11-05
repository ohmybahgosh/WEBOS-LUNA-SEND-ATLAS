# `ssap:media.viewer`

SSAP external-control endpoint for the media viewer: opens and closes it. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`close`](#close) | ssap |  | media | documented | Close media viewer |
| [`open`](#open) | ssap |  | media | documented | Open media viewer with a URL |

<a id="close"></a>
## `close`

`ssap://media.viewer/close`

Close media viewer

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sessionId` | string |

```sh
{"type":"request","id":"1","uri":"ssap://media.viewer/close","payload":{}}
```

> The SSAP namespace 'media.viewer' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/snabb/webostv/blob/master/mmediaviewer.go)

<a id="open"></a>
## `open`

`ssap://media.viewer/open`

Open media viewer with a URL

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `target` | url |
| `title` | string |
| `description` | string |
| `mimeType` | string |
| `iconSrc` | url |
| `loop` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://media.viewer/open","payload":{"target":"https://..."}}
```

> Response {id:'com.webos.app.tvsimpleviewer', sessionId}. The SSAP namespace 'media.viewer' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmediaviewer.go), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java), [3](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)
