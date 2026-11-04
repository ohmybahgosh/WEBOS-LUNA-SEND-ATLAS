# `com.webos.service.camera.gesture`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`finger/getStatus`](#finger_getstatus) | private |  | camera | Camera gesture method: finger/getStatus |
| [`finger/setMode`](#finger_setmode) | private |  | camera | Camera gesture method: finger/setMode |

<a id="finger_getstatus"></a>
## `finger/getStatus`

`luna://com.webos.service.camera.gesture/finger/getStatus`

Camera gesture method: finger/getStatus

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera.gesture/finger/getStatus '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="finger_setmode"></a>
## `finger/setMode`

`luna://com.webos.service.camera.gesture/finger/setMode`

Camera gesture method: finger/setMode

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera.gesture/finger/setMode '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)
