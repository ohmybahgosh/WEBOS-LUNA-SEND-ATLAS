# `com.webos.service.rollingscreen`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`changeCurve`](#changecurve) | private |  | display | Select curve preset on bendable/Flex display (e.g. LG OLED Flex) |
| [`updateCurvature`](#updatecurvature) | private |  | display | Adjust the curvature percentage of a curve preset |

<a id="changecurve"></a>
## `changeCurve`

`luna://com.webos.service.rollingscreen/changeCurve`

Select curve preset on bendable/Flex display (e.g. LG OLED Flex)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `type` | 'flat'\|'curvature1'\|'curvature2'\|'curvature3' |
| `reason` | 'com.pal.app.settings' |

```sh
via SSAP createAlert trick: {"type":"request","id":"1","uri":"ssap://system.notifications/createAlert","payload":{"message":" ","buttons":[{"label":"","onClick":"luna://com.webos.service.rollingscreen/changeCurve","params":{}}],"onclose":{"uri":"luna://com.webos.service.rollingscreen/changeCurve","params":{}},"onfail":{"uri":"luna://com.webos.service.rollingscreen/changeCurve","params":{}}}}
```

> LGTV Companion -set_curve_preset [flat\|1\|2\|3] (payload built in companion.cpp). Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client.

Sources: [1](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [2](https://github.com/JPersson77/LGTVCompanion/blob/master/LGTV%20Companion%20Service/companion.cpp)

<a id="updatecurvature"></a>
## `updateCurvature`

`luna://com.webos.service.rollingscreen/updateCurvature`

Adjust the curvature percentage of a curve preset

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `type` | 'curvature1'\|'curvature2'\|'curvature3' |
| `value` | string '0%'..'100%' |

```sh
via SSAP createAlert trick: {"type":"request","id":"1","uri":"ssap://system.notifications/createAlert","payload":{"message":" ","buttons":[{"label":"","onClick":"luna://com.webos.service.rollingscreen/updateCurvature","params":{}}],"onclose":{"uri":"luna://com.webos.service.rollingscreen/updateCurvature","params":{}},"onfail":{"uri":"luna://com.webos.service.rollingscreen/updateCurvature","params":{}}}}
```

> LGTV Companion -adjust_curve_preset [1-3] [0-100] and -set_curvature. Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client.

Sources: [1](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [2](https://github.com/JPersson77/LGTVCompanion/blob/master/LGTV%20Companion%20Service/companion.cpp)
