# `com.webos.service.audiofocusmanager`

6 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`activeRequests`](#activerequests) | unknown |  | audio | Provides information of all active requests. |
| [`audioFocusStatus`](#audiofocusstatus) | unknown |  | audio | Provides information of all granted request types per session in their request types (paused and active). |
| [`getStatus`](#getstatus) | public | yes | audio | Queries the current status of the audiofocusmanager. |
| [`pausedRequests`](#pausedrequests) | unknown |  | audio | Provides information of all paused requests. |
| [`releaseFocus`](#releasefocus) | public |  | audio | Releases the audio resource. |
| [`requestFocus`](#requestfocus) | public | yes | audio | Requests audio focus to access the audio resource On subscription, applications get the following suggestions: gain the resources (start aud |

<a id="activerequests"></a>
## `activeRequests`

`luna://com.webos.service.audiofocusmanager/activeRequests`

Provides information of all active requests.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.audiofocusmanager/activeRequests '{}'
```

> Service: Provides an interface that allows the user to access and gain audio controls through a specific application to use audio resources. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiofocusmanager/)

<a id="audiofocusstatus"></a>
## `audioFocusStatus`

`luna://com.webos.service.audiofocusmanager/audioFocusStatus`

Provides information of all granted request types per session in their request types (paused and active).

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.audiofocusmanager/audioFocusStatus '{}'
```

> Service: Provides an interface that allows the user to access and gain audio controls through a specific application to use audio resources. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiofocusmanager/)

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.audiofocusmanager/getStatus`

Queries the current status of the audiofocusmanager.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true : Subscribe for notifications. false : Not subscribed. |
| `displayId` | Number (required) Indicates the audio focus information of mentioned display ID. |

```sh
luna-send -i luna://com.webos.service.audiofocusmanager/getStatus '{"displayId":0, "subscribe":true}
```

> ACG: audiofocus.query \| Returns: returnValue:Boolean; subscribed:Boolean; errorCode:Number; errorText:String; audioFocusStatus:Object array: audioFocusStatus \| Service: Provides an interface that allows the user to access and gain audio controls through a specific application to use audio resources.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiofocusmanager/)

<a id="pausedrequests"></a>
## `pausedRequests`

`luna://com.webos.service.audiofocusmanager/pausedRequests`

Provides information of all paused requests.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.audiofocusmanager/pausedRequests '{}'
```

> Service: Provides an interface that allows the user to access and gain audio controls through a specific application to use audio resources. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiofocusmanager/)

<a id="releasefocus"></a>
## `releaseFocus`

`luna://com.webos.service.audiofocusmanager/releaseFocus`

Releases the audio resource.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `displayId` | Number (required) Indicates the display ID from which the application is releasing the focus. |
| `streamType` | String (required) Indicates what is the stream played by application once it gets the focus. Possible values are: palerts pfeedback pringtones pmedia pdefaultapp peffects pvoicerecognition ptts default1 default2 tts1 tts2 |

```sh
luna-send -a "com.webos.app.notification" -n 1 -f luna://com.webos.service.audiofocusmanager/releaseFocus '{ "displayId":0, "streamType":"pmedia" }
```

> ACG: audiofocus.operation \| Returns: returnValue:Boolean; result:String; errorCode:Number; errorText:String \| Service: Provides an interface that allows the user to access and gain audio controls through a specific application to use audio resources.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiofocusmanager/)

<a id="requestfocus"></a>
## `requestFocus`

`luna://com.webos.service.audiofocusmanager/requestFocus`

Requests audio focus to access the audio resource On subscription, applications get the following suggestions: gain the resources (start audio playback) lost the resources permanently (stop audio playback) lost the resources temporarily (pause audio playback)

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `requestType` | String (required) Indicates the priority of application and acts accordingly. Audio Focus Manager expects the applications to come with any one of the following request types based on applications behavior: AFREQUEST_TRANSIENT: alarm, system AFREQUEST_GAIN: music, radio AFREQUEST_RECORD: recording AFREQUEST_MIX: tts, Notifications, SMS, Calendar AFREQUEST_CALL: call (Only call application should u |
| `subscribe` | Boolean (required) Indicates if subscribed to get the notifications. Possible values are: true : Subscribed for notifications false : Not subscribed Note : It will get the suggestion from the audiofocusmanager service to pause/stop/resume the audio playback. |
| `displayId` | Number (required) Indicates the display ID from which the application is requesting for focus. |
| `streamType` | String (required) Indicates what is the stream played by application once it gets the focus |

```sh
luna-send -a "com.webos.app.ml4" -i luna://com.webos.service.audiofocusmanager/requestFocus '{ "requestType":"AFREQUEST_GAIN", "subscribe":true, "streamType":"pmedia", "displayId":0 }
```

> ACG: audiofocus.operation \| Returns: returnValue:Boolean; subscribed:Boolean; errorCode:Number; result:String; errorText:String \| Service: Provides an interface that allows the user to access and gain audio controls through a specific application to use audio resources.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-audiofocusmanager/)
