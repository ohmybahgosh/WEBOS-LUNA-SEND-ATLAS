# `com.webos.service.secondscreen.gateway`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`test/secure`](#test_secure) | ssap |  | connection | SSAP self-test: reports whether connection is secure/cleared ({clearedForDuty:true}) |

<a id="test_secure"></a>
## `test/secure`

`luna://com.webos.service.secondscreen.gateway/test/secure`

SSAP self-test: reports whether connection is secure/cleared ({clearedForDuty:true})

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.secondscreen.gateway/test/secure","payload":{}}
```

> Called by ConnectSDK WebOSTVService.secureAccessTest; response {clearedForDuty:true}.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java)
