# `ssap:webapp`

SSAP (remote control protocol) web-app endpoint: launches, connects to, and closes web apps and pins or unpins them, over the TV's external control socket.

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`closeWebApp`](#closewebapp) | ssap |  | apps | documented | Close web app |
| [`connectToApp`](#connecttoapp) | ssap |  | apps | documented | Connect to a web app session (ConnectSDK) |
| [`isWebAppPinned`](#iswebapppinned) | ssap |  | apps | documented | Check whether web app is pinned |
| [`launchWebApp`](#launchwebapp) | ssap |  | apps | documented | Launch a web app (ConnectSDK) |
| [`pinWebApp`](#pinwebapp) | ssap |  | apps | documented | Pin web app |
| [`removePinnedWebApp`](#removepinnedwebapp) | ssap |  | apps | documented | Unpin web app |

<a id="closewebapp"></a>
## `closeWebApp`

`ssap://webapp/closeWebApp`

Close web app

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | string |
| `sessionId` | string |

```sh
{"type":"request","id":"1","uri":"ssap://webapp/closeWebApp","payload":{}}
```

> The SSAP namespace 'webapp' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java), [2](https://github.com/snabb/webostv/blob/master/mmisc.go), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py)

<a id="connecttoapp"></a>
## `connectToApp`

`ssap://webapp/connectToApp`

Connect to a web app session (ConnectSDK)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | string (key name chosen by SDK: idKey) |

```sh
{"type":"request","id":"1","uri":"ssap://webapp/connectToApp","payload":{}}
```

> The SSAP namespace 'webapp' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java), [2](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="iswebapppinned"></a>
## `isWebAppPinned`

`ssap://webapp/isWebAppPinned`

Check whether web app is pinned

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | string |

```sh
{"type":"request","id":"1","uri":"ssap://webapp/isWebAppPinned","payload":{}}
```

> The SSAP namespace 'webapp' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java), [2](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="launchwebapp"></a>
## `launchWebApp`

`ssap://webapp/launchWebApp`

Launch a web app (ConnectSDK)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | string |
| `urlParams` | object |

```sh
{"type":"request","id":"1","uri":"ssap://webapp/launchWebApp","payload":{"webAppId":"..."}}
```

> The SSAP namespace 'webapp' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java), [2](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="pinwebapp"></a>
## `pinWebApp`

`ssap://webapp/pinWebApp`

Pin web app

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | string |

```sh
{"type":"request","id":"1","uri":"ssap://webapp/pinWebApp","payload":{}}
```

> The SSAP namespace 'webapp' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java), [2](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="removepinnedwebapp"></a>
## `removePinnedWebApp`

`ssap://webapp/removePinnedWebApp`

Unpin web app

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `webAppId` | string |

```sh
{"type":"request","id":"1","uri":"ssap://webapp/removePinnedWebApp","payload":{}}
```

> The SSAP namespace 'webapp' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java), [2](https://github.com/snabb/webostv/blob/master/mmisc.go)
