# `com.webos.service.appstatus`

Reports the status of applications via a single getAppStatus method. Narrow app-state query role. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getAppStatus`](#getappstatus) | ssap | yes | apps | documented | Get (subscribe) app status |

<a id="getappstatus"></a>
## `getAppStatus`

`luna://com.webos.service.appstatus/getAppStatus`

Get (subscribe) app status

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.appstatus/getAppStatus","payload":{}}
```

> snabb/webostv saw '404 no such service or method' on its test TV; ConnectSDK uses it (APP_STATUS) for app state.

Sources: [1](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java), [3](https://github.com/snabb/webostv/blob/master/mmisc.go)
