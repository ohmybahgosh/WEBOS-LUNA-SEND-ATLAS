# `ssap:system.notifications`

SSAP (remote control protocol) notifications endpoint: closes on-screen alerts and toasts over the TV's external control socket.

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`closeAlert`](#closealert) | ssap |  | notifications | documented | Close an alert (required after the createAlert luna trick so the alert does not stay on screen) |
| [`closeToast`](#closetoast) | ssap |  | notifications | documented | Close a toast |

<a id="closealert"></a>
## `closeAlert`

`ssap://system.notifications/closeAlert`

Close an alert (required after the createAlert luna trick so the alert does not stay on screen)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `alertId` | string from createAlert |

```sh
{"type":"request","id":"1","uri":"ssap://system.notifications/closeAlert","payload":{"alertId":"..."}}
```

> LGTV Companion builds alertId as 'com.webos.service.apiadapter-<#>' when closing. The SSAP namespace 'system.notifications' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [2](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [3](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h)

<a id="closetoast"></a>
## `closeToast`

`ssap://system.notifications/closeToast`

Close a toast

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `toastId` | string |

```sh
{"type":"request","id":"1","uri":"ssap://system.notifications/closeToast","payload":{"toastId":"..."}}
```

> The SSAP namespace 'system.notifications' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [2](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [3](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md)
