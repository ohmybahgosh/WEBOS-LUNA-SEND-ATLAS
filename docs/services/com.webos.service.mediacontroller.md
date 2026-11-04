# `com.webos.service.mediacontroller`

23 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`activateMediaSession`](#activatemediasession) | public |  | media | Activates the media session. Recommended usage : The API is recommended to be used by the application . Note: Only an active media session c |
| [`coverArtInfo`](#coverartinfo) | unknown |  | media | Details of media cover art. |
| [`coverArtPathInfo`](#coverartpathinfo) | unknown |  | media | Provides cover art source URI and downloaded path. |
| [`deactivateMediaSession`](#deactivatemediasession) | public |  | media | Deactivates the media session. Recommended usage : The API is recommended to be used by the application . Note: After the media session is d |
| [`getActiveMediaSessions`](#getactivemediasessions) | public |  | media | Gets the list of all the active media sessions. Recommended usage : The API is recommended to be used by the service . |
| [`getMediaCoverArtPath`](#getmediacoverartpath) | public | yes | media | Downloads requested cover art URI and provides downloaded path. |
| [`getMediaMetaData`](#getmediametadata) | public |  | media | Requests metadata of the media session related to the given mediaId. Recommended usage : The API is recommended to be used by the service . |
| [`getMediaPlayStatus`](#getmediaplaystatus) | public |  | media | Gets the current playback status of the given mediaId, status such as stopped, paused, playing, buffering. Recommended usage : The API is re |
| [`getMediaSessionId`](#getmediasessionid) | public |  | media | Provides the list of mediaId of all the media sessions for a given app. Recommended usage : The API is recommended to be used by the service |
| [`getMediaSessionInfo`](#getmediasessioninfo) | public |  | media | Gets the details of a media session like app id, metadata, volume info. Recommended usage : The API is recommended to be used by the service |
| [`injectMediaKeyEvent`](#injectmediakeyevent) | public |  | media | Sets the keyEvent of the given displayId. Recommended usage : The API is recommended to be used by the service . |
| [`mediaMetaData`](#mediametadata) | unknown |  | media | Contains the mediaMetaData information. |
| [`mediaSession`](#mediasession) | unknown |  | media | Contains the details about mediaId, appId, and metaData. |
| [`receiveMediaPlaybackInfo`](#receivemediaplaybackinfo) | public | yes | media | Subscribes to receive the play status, mute status, play position, mediaMetaData information. Recommended usage : The API is recommended to  |
| [`registerMediaSession`](#registermediasession) | public | yes | media | Registers media sessions, subscribes to receive AVRCP key events. Recommended usage : The API is recommended to be used by the application . |
| [`setMediaCoverArt`](#setmediacoverart) | public |  | media | Sets the cover art data for media session. |
| [`setMediaMetaData`](#setmediametadata) | public |  | media | Sets the metadata information for the session. Example: title, artist. Recommended usage : The API is recommended to be used by the applicat |
| [`setMediaMuteStatus`](#setmediamutestatus) | public |  | media | Sets the status of the media session. Recommended usage : The API is recommended to be used by the application . |
| [`setMediaPlayPosition`](#setmediaplayposition) | public |  | media | Sets the play position for the media session. Recommended usage : The API is recommended to be used by the application . |
| [`setMediaPlayStatus`](#setmediaplaystatus) | public |  | media | Sets the playStatus for the session. Example: play, pause, stopped and so on. Recommended usage : The API is recommended to be used by the a |
| [`setSupportedActions`](#setsupportedactions) | public |  | media | Sets the list of supported media actions. |
| [`sizes`](#sizes) | unknown |  | media | Provides possible sizes for each cover art |
| [`unregisterMediaSession`](#unregistermediasession) | public |  | media | Unsubscribes and unregisters the media session. Recommended usage : The API is recommended to be used by the application . |

<a id="activatemediasession"></a>
## `activateMediaSession`

`luna://com.webos.service.mediacontroller/activateMediaSession`

Activates the media session. Recommended usage : The API is recommended to be used by the application . Note: Only an active media session can receive the AVRCP key events and forward them to the application. To activate a media session, the client must subscribe to the mediaId using registerMediaSession() API.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the mediaId of the session to be activated. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/activateMediaSession '{ "mediaId":"xDFNUI" }
```

> ACG: mediacontroller.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="coverartinfo"></a>
## `coverArtInfo`

`luna://com.webos.service.mediacontroller/coverArtInfo`

Details of media cover art.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 30+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/coverArtInfo '{}'
```

> Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="coverartpathinfo"></a>
## `coverArtPathInfo`

`luna://com.webos.service.mediacontroller/coverArtPathInfo`

Provides cover art source URI and downloaded path.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 30+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/coverArtPathInfo '{}'
```

> Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="deactivatemediasession"></a>
## `deactivateMediaSession`

`luna://com.webos.service.mediacontroller/deactivateMediaSession`

Deactivates the media session. Recommended usage : The API is recommended to be used by the application . Note: After the media session is deactivated, the corresponding media client cannot receive AVRCP key events.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the mediaId of the session to be deactivated. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/deactivateMediaSession '{ "mediaId":"xDFNUI" }
```

> ACG: mediacontroller.query \| Returns: returnValue:String; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="getactivemediasessions"></a>
## `getActiveMediaSessions`

`luna://com.webos.service.mediacontroller/getActiveMediaSessions`

Gets the list of all the active media sessions. Recommended usage : The API is recommended to be used by the service .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/getActiveMediaSessions '{}
```

> ACG: mediacontroller.operation \| Returns: returnValue:Boolean; sessionList:String array; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="getmediacoverartpath"></a>
## `getMediaCoverArtPath`

`luna://com.webos.service.mediacontroller/getMediaCoverArtPath`

Downloads requested cover art URI and provides downloaded path.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 30+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `displayId` | Number (required) Display ID. |
| `src` | String array (required) Source URIs of cover art images. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send -n 3 -f luna://com.webos.service.mediacontroller/getMediaCoverArtPath '{ "displayId":0, "src":["https://storage.googleapis.com/media-session/sintel/artwork-128.png"], "subscribe":true }
```

> ACG: None \| Returns: returnValue:Boolean; coverArtPathInfo:Object array: coverArtPathInfo; subscribed:Boolean \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="getmediametadata"></a>
## `getMediaMetaData`

`luna://com.webos.service.mediacontroller/getMediaMetaData`

Requests metadata of the media session related to the given mediaId. Recommended usage : The API is recommended to be used by the service .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the mediaId for meta data information. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/getMediaMetaData '{ "mediaId":"xDFNUI" }
```

> ACG: mediacontroller.operation \| Returns: returnValue:Boolean; metaData:Object: mediaMetaData; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="getmediaplaystatus"></a>
## `getMediaPlayStatus`

`luna://com.webos.service.mediacontroller/getMediaPlayStatus`

Gets the current playback status of the given mediaId, status such as stopped, paused, playing, buffering. Recommended usage : The API is recommended to be used by the service .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the mediaId of the session registered. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/getMediaPlayStatus '{ "mediaId":"xDFNUI" }
```

> ACG: mediacontroller.operation \| Returns: returnValue:Boolean; playStatus:String; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="getmediasessionid"></a>
## `getMediaSessionId`

`luna://com.webos.service.mediacontroller/getMediaSessionId`

Provides the list of mediaId of all the media sessions for a given app. Recommended usage : The API is recommended to be used by the service .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (required) Indicates the appId for the given media session. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/getMediaSessionId '{ "appId":"com.webos.test,youtube" }
```

> ACG: mediacontroller.operation \| Returns: returnValue:Boolean; mediaId:String array; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="getmediasessioninfo"></a>
## `getMediaSessionInfo`

`luna://com.webos.service.mediacontroller/getMediaSessionInfo`

Gets the details of a media session like app id, metadata, volume info. Recommended usage : The API is recommended to be used by the service .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the mediaId for the session registered. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/getMediaSessionInfo '{ "mediaId":"xDFNUI" }
```

> ACG: mediacontroller.operation \| Returns: returnValue:Boolean; sessionInfo:Object: mediaSession; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="injectmediakeyevent"></a>
## `injectMediaKeyEvent`

`luna://com.webos.service.mediacontroller/injectMediaKeyEvent`

Sets the keyEvent of the given displayId. Recommended usage : The API is recommended to be used by the service .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `displayId` | Number (required) Indicates the displayId for which the key event is sent Possible values are: 0 1 |
| `keyEvent` | String (required) Indicates the keyEvent for the display. Possible values are: play pause mute unmute next previous |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/injectMediaKeyEvent '{ "displayId":1, "keyEvent":"play" }
```

> ACG: mediacontroller.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="mediametadata"></a>
## `mediaMetaData`

`luna://com.webos.service.mediacontroller/mediaMetaData`

Contains the mediaMetaData information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/mediaMetaData '{}'
```

> Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="mediasession"></a>
## `mediaSession`

`luna://com.webos.service.mediacontroller/mediaSession`

Contains the details about mediaId, appId, and metaData.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/mediaSession '{}'
```

> Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="receivemediaplaybackinfo"></a>
## `receiveMediaPlaybackInfo`

`luna://com.webos.service.mediacontroller/receiveMediaPlaybackInfo`

Subscribes to receive the play status, mute status, play position, mediaMetaData information. Recommended usage : The API is recommended to be used by the service .

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `displayId` | Number (required) Display for which the media play status is required. Possible values are: 0 1 |
| `eventType` | String (optional) Indicates the status for the required event type. Note: If not set, eventType will send all the possible values as the response. Possible values are: playStatus muteStatus playPosition mediaMetaData coverArt supportedActions |
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed. false: Not subscribed. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/receiveMediaPlaybackInfo '{ "displayId":0, "eventType":"supportedActions", "subscribe":true }
```

> ACG: mediacontroller.management \| Returns: returnValue:Boolean; subscribed:Boolean; displayId:Number; eventType:String; playStatus:String; muteStatus:String; playPosition:String; mediaMetaData:Object: mediaMetaData; coverArt:Object array: coverArtInfo; supportedActions:String array; appId:String; mediaId:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="registermediasession"></a>
## `registerMediaSession`

`luna://com.webos.service.mediacontroller/registerMediaSession`

Registers media sessions, subscribes to receive AVRCP key events. Recommended usage : The API is recommended to be used by the application .

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the mediaId of the session to be registered. |
| `appId` | String (required) Indicates the appId of the session to be registered. |
| `subscribe` | Boolean (required) Indicates if subscribe to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/registerMediaSession '{ "mediaId":"xDFNUI", "appId":"com.webos.app.test.youtube", "subscribe":true }
```

> ACG: mediacontroller.query \| Returns: returnValue:Boolean; subscribed:Boolean; keyEvent:String; mediaId:String; errorCode:Boolean; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="setmediacoverart"></a>
## `setMediaCoverArt`

`luna://com.webos.service.mediacontroller/setMediaCoverArt`

Sets the cover art data for media session.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 30+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Media ID of the registered session. |
| `coverArt` | Object array: coverArtInfo (required) Cover art information of the media session. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/setMediaCoverArt '{ "mediaId":"xDFNUI", "coverArt":[ { "src":"https://storage.googleapis.com/media-session/sintel/artwork-96.png", "type":"image/png", "sizes":[ { "height":96, "width":96 } ] }, { "src":"https://storage.googleapis.com/media-session/sintel/artwork-128.png", "type":"image/png", "sizes":[ { "height":128, "width":128 } ] } ] }
```

> ACG: None \| Returns: returnValue:Boolean \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="setmediametadata"></a>
## `setMediaMetaData`

`luna://com.webos.service.mediacontroller/setMediaMetaData`

Sets the metadata information for the session. Example: title, artist. Recommended usage : The API is recommended to be used by the application .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the mediaId of the session to set metadata. |
| `mediaMetaData` | Object: mediaMetaData (required) Indicates the meta data details for the session. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/setMediaMetaData '{ "mediaId":"xDFNUI", "mediaMetaData":{ "title":"BigBangTheory", "artist":"BigBang", "totalDuration":"10.10", "album":"BBT", "genre":"drama", "trackNumber":2, "volume":100 } }
```

> ACG: mediacontroller.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="setmediamutestatus"></a>
## `setMediaMuteStatus`

`luna://com.webos.service.mediacontroller/setMediaMuteStatus`

Sets the status of the media session. Recommended usage : The API is recommended to be used by the application .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the mediaId of the session required to set the muteStatus. |
| `muteStatus` | String (required) Indicates the status of the media session. Possible values are: mute unmute |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/setMediaMuteStatus '{ "mediaId":"xDFNUI", "muteStatus":"mute" }
```

> ACG: mediacontroller.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="setmediaplayposition"></a>
## `setMediaPlayPosition`

`luna://com.webos.service.mediacontroller/setMediaPlayPosition`

Sets the play position for the media session. Recommended usage : The API is recommended to be used by the application .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the mediaId of the session. |
| `playPosition` | String (required) Indicates the current play position of the media session. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/setMediaPlayPosition '{ "mediaId":"xDFNUI", "playPosition":"10.10" }
```

> ACG: mediacontroller.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="setmediaplaystatus"></a>
## `setMediaPlayStatus`

`luna://com.webos.service.mediacontroller/setMediaPlayStatus`

Sets the playStatus for the session. Example: play, pause, stopped and so on. Recommended usage : The API is recommended to be used by the application .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the mediaId of the session to set playStatus. |
| `playStatus` | String (required) Indicates the current playStatus of the media. Possible values are: PLAYSTATE_NONE PLAYSTATE_STOPPED PLAYSTATE_PAUSED PLAYSTATE_PLAYING PLAYSTATE_FAST_FORWARDING PLAYSTATE_REWINDING PLAYSTATE_BUFFERING PLAYSTATE_ERROR |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/setMediaPlayStatus '{ "mediaId":"xQWERTY_0", "playStatus":"PLAYSTATE_PLAYING" }
```

> ACG: mediacontroller.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="setsupportedactions"></a>
## `setSupportedActions`

`luna://com.webos.service.mediacontroller/setSupportedActions`

Sets the list of supported media actions.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 31+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Media ID of the registered session. |
| `supportedActions` | String array (required) List of actions to be supported. It can include values such as: play pause next previous mute unmute |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/setSupportedActions '{"mediaId":"xDFNUI", "supportedActions":["play", "pause", "next"]}
```

> ACG: None \| Returns: returnValue:Boolean \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="sizes"></a>
## `sizes`

`luna://com.webos.service.mediacontroller/sizes`

Provides possible sizes for each cover art

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 30+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/sizes '{}'
```

> Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)

<a id="unregistermediasession"></a>
## `unregisterMediaSession`

`luna://com.webos.service.mediacontroller/unregisterMediaSession`

Unsubscribes and unregisters the media session. Recommended usage : The API is recommended to be used by the application .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the mediaId of the session to be unregistered. |

```sh
luna-send -n 1 -f luna://com.webos.service.mediacontroller/unregisterMediaSession '{ "mediaId":"xDFNUI" }
```

> ACG: mediacontroller.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides features to handle the AVRCP events regardless of application type (web app/native app) in order to remotely control the playback and handles key events such as play, pause, next, previous, m

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-mediacontroller/)
