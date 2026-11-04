# `com.webos.media`

165 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`acbs`](#acbs) | unknown |  | media | Array of objects that gives details of media for foreground application (such as pipeline Id, playstate, position, etc.) |
| [`acquire`](#acquire) | public |  | media | Requests resources from the mediaserver. Typical usage is to request the number of audio and video decoders or other hardware components use |
| [`acquireComplete`](#acquirecomplete) | unknown |  | media | This event is invoked when the acquire request is performed and the result comes out. |
| [`addResource`](#addresource) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`attach`](#attach) | public |  | media | Allows to transfer the control of a pipeline to be handed over to a different client. When this occurs, the original client gets notified th |
| [`audio`](#audio) | unknown |  | media | Set a audio information for either video and audio or audio only recording. |
| [`audioInfo`](#audioinfo) | unknown |  | media | Provides information related to audio. |
| [`bufferingEnd`](#bufferingend) | unknown |  | media | Indicates the pipeline is resuming playback after filling buffers. |
| [`bufferingStart`](#bufferingstart) | unknown |  | media | Indicates the pipeline is temporarily pausing playback internally in order to buffer more data. |
| [`bufferRange`](#bufferrange) | unknown |  | media | Indicates the buffering range of the particular media content. It is raised multiple times when specific media is loaded. |
| [`changeResolution`](#changeresolution) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`closeAllConnections`](#closeallconnections) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`closeMediaPipeline`](#closemediapipeline) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`contentReady`](#contentready) | unknown |  | media | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`currentTime`](#currenttime) | unknown |  | media | The currentTime event is raised multiple times when a specific media is playing. It indicates the progress of the media being played and pro |
| [`detached`](#detached) | unknown |  | media | The detached event is raised when a specific media has been detached from the client by another client attaching to the corresponding pipeli |
| [`display_attr`](#display_attr) | unknown |  | media | Provides detailed information for display resource. |
| [`downSubLevel`](#downsublevel) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`enableDebug`](#enabledebug) | private |  | media | Method on com.webos.media (from on-device permission registry; parameters undocumented). |
| [`endOfStream`](#endofstream) | unknown |  | media | The endOfStream event is raised when a specific media has received all of its data. |
| [`error`](#error) | unknown |  | media | The error event reports errors thrown by pipelines. |
| [`exit`](#exit) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`focus`](#focus) | unknown |  | media | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`frameRate`](#framerate) | unknown |  | media | Provides information about the number of frames per second at which the video is being played. It is represented as a combination of numerat |
| [`getActivePipelines`](#getactivepipelines) | public |  | media | Gets JSON formatted output of currently active media pipelines. Note: Typically, a luna methods returns a JSON object as response. However,  |
| [`getDisplayId`](#getdisplayid) | public |  | media | Gets information about the display on which the specified application instance is launched. Note: This method supports multi-screen playback |
| [`getForegroundAppInfo`](#getforegroundappinfo) | public | yes | media | Provides the application's foreground information. |
| [`getPipelineState`](#getpipelinestate) | public |  | media | Requests the media server to retrieve pipeline state information. |
| [`getProidiomDiag`](#getproidiomdiag) | private |  | media | Method on com.webos.media (from on-device permission registry; parameters undocumented). |
| [`getResourceList`](#getresourcelist) | public |  | media | Getter on com.webos.media (introspected on-device; parameters undocumented). |
| [`image`](#image) | unknown |  | media | Set a image information for snapshot a image. |
| [`keepAlive`](#keepalive) | public |  | media | Method on com.webos.media (from on-device permission registry; parameters undocumented). |
| [`kill`](#kill) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`load`](#load) | public |  | media | Loads a new pipeline for the specified URI. The media server returns a unique id to the client which is used for subsequent operations on th |
| [`loadCompleted`](#loadcompleted) | unknown |  | media | The loadCompleted event is raised when a specific media pipeline has been successfully loaded. |
| [`logPipelineState`](#logpipelinestate) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`mediaId`](#mediaid) | unknown |  | media | Unique identifier of the loaded media/camera pipeline. |
| [`mediaPipelines`](#mediapipelines) | unknown |  | media | Contains the AppID-PID mapping of the currently running pipelines. Returns an empty array if no pipelines associated with any applications.  |
| [`notifyActivity`](#notifyactivity) | public |  | media | Notifies the media server that the specific pipeline is currently in use. This command raises the timestamp record of the corresponding pipe |
| [`notifyAppLifeStatus`](#notifyapplifestatus) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`notifyBackground`](#notifybackground) | public |  | media | Marks a pipeline as background. This API is called when the media object in question is carded, deleted, or otherwise removed from view. Not |
| [`notifyDelay`](#notifydelay) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`notifyFocus`](#notifyfocus) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`notifyForeground`](#notifyforeground) | public |  | media | Marks a pipeline as foreground. This API is called when the media object in question is un-carded and made visible. Note: Foreground pipelin |
| [`notifyMultiviewControlMode`](#notifymultiviewcontrolmode) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`notifyPipelineStatus`](#notifypipelinestatus) | public |  | media | Notifies the playback status of media pipelines. |
| [`option`](#option) | unknown |  | media | Provides parameters for pipeline's Information. |
| [`pause`](#pause) | public |  | media | Requests the media server to pause the media object. |
| [`paused`](#paused) | unknown |  | media | The paused event is raised when a specific media has been successfully paused. |
| [`pauseRecord`](#pauserecord) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`payload`](#payload) | unknown |  | media | Payload format used in load API. It represents the JSON payload object for a specific type of pipeline. |
| [`play`](#play) | public |  | media | Requests the media server to play the media object. |
| [`playing`](#playing) | unknown |  | media | The playing event is raised once, in response to the play method, when a specified media pipeline has transitioned into the playing state. |
| [`policyAction`](#policyaction) | unknown |  | media | The policyAction event is invoked when the resources are short of quantity to playing new media content and request pipeline to release rega |
| [`preload`](#preload) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`procUpdate`](#procupdate) | unknown |  | media | The procUpdate object value is an object of type: {"appId" : string, "exec" : bool, "pid" : number} where exec is true when a pipeline appid |
| [`programs`](#programs) | unknown |  | media | Provides audio/video stream information. |
| [`reacquire`](#reacquire) | public |  | media | Dynamically adds more resources to the pipeline. |
| [`registerMedia`](#registermedia) | public |  | media | Media Content Provider (unmanaged) must register with Media Display Controller to allow proper management of video content and displays or a |
| [`registerPipeline`](#registerpipeline) | public |  | media | Registers with the Resource Manager. Session is persistent across all start/end transaction and acquire/release cycles. Registered clients a |
| [`release`](#release) | public |  | media | Informs media server the resources are released correctly and are not being used anymore. Note: This method is applicable for unmanaged pipe |
| [`removeResource`](#removeresource) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). ⚠️ |
| [`resetOwnerPipeline`](#resetownerpipeline) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). ⚠️ |
| [`resetSubLevel`](#resetsublevel) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). ⚠️ |
| [`ResourceDetails`](#resourcedetails) | unknown |  | media | Details of the resource. |
| [`resources`](#resources) | unknown |  | media | Object of resource name, quantity, and index. Resources can hold more than one set of resource, quantity, and index. Example { "resources":  |
| [`resources_new`](#resources_new) | unknown |  | media | Object indicating the new and old resource. |
| [`ResponseObject`](#responseobject) | unknown |  | media | Provides a detailed description of the object. Limit to 2-3 paragraphs. |
| [`resumeRecord`](#resumerecord) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`seek`](#seek) | public |  | media | Seeks the media object to a specified time position. |
| [`seekDone`](#seekdone) | unknown |  | media | The seekDone event is raised when a seek operation for a media has been successfully completed. |
| [`selectTrack`](#selecttrack) | unknown |  | media | Selects an audio or subtitle track of an open pipeline |
| [`selectTrackByPreference`](#selecttrackbypreference) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`selectTrackByPreferencePayload`](#selecttrackbypreferencepayload) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`setAppId`](#setappid) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setAppWindowType`](#setappwindowtype) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setAudioDualMono`](#setaudiodualmono) | public |  | audio | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setAudioMute`](#setaudiomute) | public |  | audio | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setAudioStreamPitch`](#setaudiostreampitch) | public |  | audio | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setClearKey`](#setclearkey) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setDebugLevel`](#setdebuglevel) | private |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setDebugLevelPipeline`](#setdebuglevelpipeline) | private |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setDefaultPrl`](#setdefaultprl) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setDescriptiveVideoService`](#setdescriptivevideoservice) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setDialogEnhancement`](#setdialogenhancement) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setDisplayWindow`](#setdisplaywindow) | unknown |  | media | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`setDrmOperation`](#setdrmoperation) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setMaster`](#setmaster) | public |  | media | Method on com.webos.media (from on-device permission registry; parameters undocumented). |
| [`setMasterClock`](#setmasterclock) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setMediaStartTime`](#setmediastarttime) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setMediaStopTime`](#setmediastoptime) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setMediaSynchronizerControlTimestamp`](#setmediasynchronizercontroltimestamp) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setMediaSynchronizerOptions`](#setmediasynchronizeroptions) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setMpeghAudioConfig`](#setmpeghaudioconfig) | public |  | audio | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setOwnerPipeline`](#setownerpipeline) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setPipelineDebugState`](#setpipelinedebugstate) | private |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setPlayRate`](#setplayrate) | public |  | media | Sets the pipeline media play rate. |
| [`setPriorityLevel`](#setprioritylevel) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setProperty`](#setproperty) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setPurpose`](#setpurpose) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setResourcePolicyExtraInfo`](#setresourcepolicyextrainfo) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSink`](#setsink) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSlave`](#setslave) | public |  | media | Method on com.webos.media (from on-device permission registry; parameters undocumented). |
| [`setSlaveClock`](#setslaveclock) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setStreamQuality`](#setstreamquality) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSubtitleBackgroundBlinking`](#setsubtitlebackgroundblinking) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSubtitleBackgroundColor`](#setsubtitlebackgroundcolor) | unknown |  | media | Sets subtitle background color for an open media pipeline |
| [`setSubtitleBackgroundOpacity`](#setsubtitlebackgroundopacity) | unknown |  | media | Sets subtitle background opacity for an open media pipeline |
| [`setSubtitleCharacterBlinking`](#setsubtitlecharacterblinking) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSubtitleCharacterColor`](#setsubtitlecharactercolor) | unknown |  | media | Sets subtitle character color (similar to setSubtitleColor, different values) for an open media pipeline |
| [`setSubtitleCharacterEdge`](#setsubtitlecharacteredge) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSubtitleCharacterEdgeColor`](#setsubtitlecharacteredgecolor) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSubtitleCharacterFont`](#setsubtitlecharacterfont) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSubtitleCharacterFontSize`](#setsubtitlecharacterfontsize) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSubtitleCharacterOpacity`](#setsubtitlecharacteropacity) | unknown |  | media | Sets subtitle character opacity for an open media pipeline |
| [`setSubtitleColor`](#setsubtitlecolor) | unknown |  | media | Sets subtitle color for an open media pipeline |
| [`setSubtitleCustomStyleEnable`](#setsubtitlecustomstyleenable) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSubtitleEnable`](#setsubtitleenable) | unknown |  | media | Shows or hides subtitles for an open media pipeline |
| [`setSubtitleEncoding`](#setsubtitleencoding) | unknown |  | media | Sets subtitle text encoding for an open media pipeline |
| [`setSubtitleFontSize`](#setsubtitlefontsize) | unknown |  | media | Sets subtitle font size for an open media pipeline |
| [`setSubtitlePosition`](#setsubtitleposition) | unknown |  | media | Sets subtitle vertical position for an open media pipeline |
| [`setSubtitlePositionByPayload`](#setsubtitlepositionbypayload) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSubtitlePresentationMode`](#setsubtitlepresentationmode) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setSubtitleSource`](#setsubtitlesource) | unknown |  | media | Loads an external subtitle file for an open pipeline |
| [`setSubtitleSync`](#setsubtitlesync) | unknown |  | media | Sets subtitle sync offset in milliseconds for an open media pipeline |
| [`setSubtitleWindowColor`](#setsubtitlewindowcolor) | unknown |  | media | Sets subtitle window color for an open media pipeline |
| [`setSubtitleWindowOpacity`](#setsubtitlewindowopacity) | unknown |  | media | Sets subtitle window opacity for an open media pipeline |
| [`setUpdateInterval`](#setupdateinterval) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setUpdateIntervalKV`](#setupdateintervalkv) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setUri`](#seturi) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setVideoInfo`](#setvideoinfo) | unknown |  | media | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`setVisibility`](#setvisibility) | unknown |  | media | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`setVolume`](#setvolume) | public |  | media | Sets the volume for the specified media object. Additionally, it specifies the ease (fade-in and fade-out) properties for the media object. |
| [`setWindowId`](#setwindowid) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`setXlinkResolution`](#setxlinkresolution) | public |  | media | Setter on com.webos.media (introspected on-device; parameters undocumented). |
| [`sourceInfo`](#sourceinfo) | unknown |  | media | Provides information of the media that has just been loaded. Example { "sourceInfo": { "programs": [{ "audio_stream": 1, "video_stream": 1 } |
| [`startCameraRecord`](#startcamerarecord) | public |  | media | Starts camera recording. Camera pipeline stores streamed data from the camera and microphone (if required) at the specified location. |
| [`startRecord`](#startrecord) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`stopCameraRecord`](#stopcamerarecord) | public |  | media | Requests media server to stop camera recording and change to the preview state. |
| [`stopRecord`](#stoprecord) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`subscribe`](#subscribe) | public | yes | media | Subscribes the media client to receive events from a media pipeline. These events, described in the tables above, allow the media client (ge |
| [`switchToAutoLayout`](#switchtoautolayout) | public |  | media | Method on com.webos.media (from on-device permission registry; parameters undocumented). |
| [`switchToFullScreen`](#switchtofullscreen) | unknown |  | media | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`takeCameraSnapshot`](#takecamerasnapshot) | public |  | media | Captures a frame from the camera preview. |
| [`takeSnapshot`](#takesnapshot) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`testPipelineEvent`](#testpipelineevent) | private |  | media | Method on com.webos.media (from on-device permission registry; parameters undocumented). |
| [`trackAcquireResultInfo`](#trackacquireresultinfo) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`trackAppProcesses`](#trackappprocesses) | public | yes | media | Subscribes to messages containing the mapping of application ID (appID) and pipeline process ID (PID), i.e. it returns information about whi |
| [`trackAppStatus`](#trackappstatus) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`trackPipelineInfo`](#trackpipelineinfo) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`trackPolicyActionInfo`](#trackpolicyactioninfo) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`trackResourcesStatus`](#trackresourcesstatus) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`tryAcquire`](#tryacquire) | public |  | media | Tries to acquire resources from mediaserver. Note: This API will not issue policyAction to other pipelines in order to force them to release |
| [`unload`](#unload) | public |  | media | Unloads the pipeline and releases all AV resources. |
| [`unloadCompleted`](#unloadcompleted) | unknown |  | media | The unloadCompleted event is raised when a specific media pipeline has been successfully unloaded. |
| [`unregisterMedia`](#unregistermedia) | unknown |  | media | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`unregisterPipeline`](#unregisterpipeline) | public |  | media | Unregisters pipeline with Resource Manager. Note: This method is applicable to unmanaged pipelines only. |
| [`unsubscribe`](#unsubscribe) | public |  | media | Unsubscribes from media pipeline related events. |
| [`updateMetadata`](#updatemetadata) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`updatePeriodStart`](#updateperiodstart) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`updatePipelineStateEvent`](#updatepipelinestateevent) | public |  | media | Method on com.webos.media (from on-device permission registry; parameters undocumented). |
| [`updateResource`](#updateresource) | private |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`upSubLevel`](#upsublevel) | public |  | media | Method on com.webos.media (introspected on-device; parameters undocumented). |
| [`video`](#video) | unknown |  | media | Set a video information for either video and audio or video only recording. |
| [`videoInfo`](#videoinfo) | unknown |  | media | Provides information related to video. |

<a id="acbs"></a>
## `acbs`

`luna://com.webos.media/acbs`

Array of objects that gives details of media for foreground application (such as pipeline Id, playstate, position, etc.)

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/acbs '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="acquire"></a>
## `acquire`

`luna://com.webos.media/acquire`

Requests resources from the mediaserver. Typical usage is to request the number of audio and video decoders or other hardware components used by the pipeline. Acquire calls can be used to dynamically add more resources to the pipeline. This allows the pipeline to dynamically grow or shrink without monopolizing the resources from startup. Each time a resource is acquired, the indexes of the newly acquired resources are included in the acquireComplete event. Note: The types and quantities of resources available to be managed are specified in the file umediaserver_resource_config.txt.in file. This file is customized for each hardware platform. If required to satisfy the acquisition of requested resources, a policyAction may be issued to other pipelines, forcing them to release their resources. For format and list of acquired resources see acquireComplete event.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `resources` | String (required) Resource information. Note: Resources information must be provided as a stringified form of the "resources" object array. |
| `connectionId` | String (required) Indicates the unique identifier of the pipeline to acquire resources. |

```sh
luna-send -n 1 -f luna://com.webos.media/acquire '{ "resources": "[{\"resource\":\"DISP0\",\"qty\":1}, {\"resource\":\"VDEC\",\"qty\":1},{\"resource\":\"ADEC\",\"qty\":1}]", "connectionId": "_UZRkgE3EJgXvwl" }
```

> ACG: media.operation \| Returns: returnValue:String; errorCode:Number; errorText:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="acquirecomplete"></a>
## `acquireComplete`

`luna://com.webos.media/acquireComplete`

This event is invoked when the acquire request is performed and the result comes out.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/acquireComplete '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="addresource"></a>
## `addResource`

`luna://com.webos.media/addResource`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/addResource '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="attach"></a>
## `attach`

`luna://com.webos.media/attach`

Allows to transfer the control of a pipeline to be handed over to a different client. When this occurs, the original client gets notified that it got detached from the pipeline and can no longer control the pipeline. Note: This method was added to address a specific early boot situation where the pipeline was initially created by one client process and then another client process takes over control of the pipeline.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the unique identifier of the loaded media/camera pipeline. |

```sh
luna-send -n 1 -f luna://com.webos.media/attach '{ "mediaId":"_IsGbw614gu7xRB" }
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="audio"></a>
## `audio`

`luna://com.webos.media/audio`

Set a audio information for either video and audio or audio only recording.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/audio '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="audioinfo"></a>
## `audioInfo`

`luna://com.webos.media/audioInfo`

Provides information related to audio.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/audioInfo '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="bufferingend"></a>
## `bufferingEnd`

`luna://com.webos.media/bufferingEnd`

Indicates the pipeline is resuming playback after filling buffers.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/bufferingEnd '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="bufferingstart"></a>
## `bufferingStart`

`luna://com.webos.media/bufferingStart`

Indicates the pipeline is temporarily pausing playback internally in order to buffer more data.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/bufferingStart '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="bufferrange"></a>
## `bufferRange`

`luna://com.webos.media/bufferRange`

Indicates the buffering range of the particular media content. It is raised multiple times when specific media is loaded.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/bufferRange '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="changeresolution"></a>
## `changeResolution`

`luna://com.webos.media/changeResolution`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/changeResolution '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closeallconnections"></a>
## `closeAllConnections`

`luna://com.webos.media/closeAllConnections`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/closeAllConnections '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="closemediapipeline"></a>
## `closeMediaPipeline`

`luna://com.webos.media/closeMediaPipeline`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/closeMediaPipeline '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="contentready"></a>
## `contentReady`

`luna://com.webos.media/contentReady`

Registered in webOS OSE sysbus api.json (ACG group media); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/contentReady '{}'
```

> Listed under ACG group "media" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/umediaserver/blob/master/files/sysbus/com.webos.media.api.json)

<a id="currenttime"></a>
## `currentTime`

`luna://com.webos.media/currentTime`

The currentTime event is raised multiple times when a specific media is playing. It indicates the progress of the media being played and provides the current time at which the media is being played.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/currentTime '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="detached"></a>
## `detached`

`luna://com.webos.media/detached`

The detached event is raised when a specific media has been detached from the client by another client attaching to the corresponding pipeline. The detached event is related to the attach command. Attach allows to transfer the control of a pipeline to be handed over to a different client. When that happens the original client gets notified that it got detached from the pipeline and is hence no longer able to control the pipeline. This feature is related to fast boot scenarios where we have a mini-app controlling media upon initial launch and the control is handed over to the real/full application once the system has started in full.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/detached '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="display_attr"></a>
## `display_attr`

`luna://com.webos.media/display_attr`

Provides detailed information for display resource.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/display_attr '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="downsublevel"></a>
## `downSubLevel`

`luna://com.webos.media/downSubLevel`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/downSubLevel '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enabledebug"></a>
## `enableDebug`

`luna://com.webos.media/enableDebug`

Method on com.webos.media (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/enableDebug '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="endofstream"></a>
## `endOfStream`

`luna://com.webos.media/endOfStream`

The endOfStream event is raised when a specific media has received all of its data.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/endOfStream '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="error"></a>
## `error`

`luna://com.webos.media/error`

The error event reports errors thrown by pipelines.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/error '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="exit"></a>
## `exit`

`luna://com.webos.media/exit`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/exit '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="focus"></a>
## `focus`

`luna://com.webos.media/focus`

Registered in webOS OSE sysbus api.json (ACG group media); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/focus '{}'
```

> Listed under ACG group "media" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/umediaserver/blob/master/files/sysbus/com.webos.media.api.json)

<a id="framerate"></a>
## `frameRate`

`luna://com.webos.media/frameRate`

Provides information about the number of frames per second at which the video is being played. It is represented as a combination of numerator and denominator.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/frameRate '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="getactivepipelines"></a>
## `getActivePipelines`

`luna://com.webos.media/getActivePipelines`

Gets JSON formatted output of currently active media pipelines. Note: Typically, a luna methods returns a JSON object as response. However, in this case, an array of object will be returned.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (optional) Indicates unique identifier of the media object. |

```sh
luna-send -n 1 -f luna://com.webos.media/getActivePipelines '{}
```

> ACG: media.query \| Returns: Id:String; type:String; pid:Number (int16_t); is_managed:Boolean; is_foreground:Boolean; mediaState:String; policy_state:Boolean; uri:String; appId:String; processState:String; is_focus:String; timestamp:String; resources:Object array: resources; mediaId:String; errorCode:Number; errorText:String; returnValue:Boolean \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="getdisplayid"></a>
## `getDisplayId`

`luna://com.webos.media/getDisplayId`

Gets information about the display on which the specified application instance is launched. Note: This method supports multi-screen playback.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `instanceId` | String (required) Indicates the unique identifier of the application instance. |

```sh
luna-send -n 1 -f luna://com.webos.media/getDisplayId '{"instanceId": "9582089b-3a1c-4a37-acf8-83df8d1b6eec0"}
```

> ACG: media.query \| Returns: displayId:Number; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="getforegroundappinfo"></a>
## `getForegroundAppInfo`

`luna://com.webos.media/getForegroundAppInfo`

Provides the application's foreground information.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
luna-send -n 1 -f luna://com.webos.media/getForegroundAppInfo '{}
```

> ACG: media.query \| Returns: returnValue:Boolean; appId:String; acbs:Object array: acbs \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \|\| Not on every firmware (404 on webOS 6.0 per lgtv2 README).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/hobbyquaker/lgtv2/blob/master/README.md), [4](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)

<a id="getpipelinestate"></a>
## `getPipelineState`

`luna://com.webos.media/getPipelineState`

Requests the media server to retrieve pipeline state information.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the unique identifier of the loaded media/camera pipeline. |

```sh
luna-send -n 2 -f luna://com.webos.media/getPipelineState '{"mediaId":"_pwvgD9ivrcVkYV"}
```

> ACG: media.query \| Returns: errorCode:Number; returnValue:Boolean; errorText:String; data:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="getproidiomdiag"></a>
## `getProidiomDiag`

`luna://com.webos.media/getProidiomDiag`

Method on com.webos.media (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/getProidiomDiag '{}'
```

> ACG groups: media, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getresourcelist"></a>
## `getResourceList`

`luna://com.webos.media/getResourceList`

Getter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/getResourceList '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="image"></a>
## `image`

`luna://com.webos.media/image`

Set a image information for snapshot a image.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/image '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="keepalive"></a>
## `keepAlive`

`luna://com.webos.media/keepAlive`

Method on com.webos.media (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/keepAlive '{}'
```

> ACG groups: media, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="kill"></a>
## `kill`

`luna://com.webos.media/kill`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/kill '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="load"></a>
## `load`

`luna://com.webos.media/load`

Loads a new pipeline for the specified URI. The media server returns a unique id to the client which is used for subsequent operations on the pipeline.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (required) Indicates the uri of the media object. Example: http://mymovie.mp4, file://mymovie.mp4 |
| `type` | String (required) Indicates the type of pipeline to load. Note: Currently, media playback pipeline is supported. The media server also supports run-time installation of additional pipelines which is outside the scope of this API document. type: "camera" is to preview the supported USB camera. type: "record" is to record and save video and audio, video or audio, and snapshots. Applications are reco |
| `payload` | Object: payload (optional) See "payload" object. |

```sh
luna-send -n 1 -f luna://com.webos.media/load '{ "uri":"https://media.w3.org/2010/05/sintel/trailer.mp4", "type":"media", "payload":{ "option":{ "appId":"com.webos.app.enactbrowser", "windowId":"_Window_Id_2" } } }
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="loadcompleted"></a>
## `loadCompleted`

`luna://com.webos.media/loadCompleted`

The loadCompleted event is raised when a specific media pipeline has been successfully loaded.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/loadCompleted '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="logpipelinestate"></a>
## `logPipelineState`

`luna://com.webos.media/logPipelineState`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/logPipelineState '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="mediaid"></a>
## `mediaId`

`luna://com.webos.media/mediaId`

Unique identifier of the loaded media/camera pipeline.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/mediaId '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="mediapipelines"></a>
## `mediaPipelines`

`luna://com.webos.media/mediaPipelines`

Contains the AppID-PID mapping of the currently running pipelines. Returns an empty array if no pipelines associated with any applications. Each array element is an object of type {"appId": string, "pid": number}. If the appId string is empty it means the pipeline was loaded without an application ID being provided.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/mediaPipelines '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="notifyactivity"></a>
## `notifyActivity`

`luna://com.webos.media/notifyActivity`

Notifies the media server that the specific pipeline is currently in use. This command raises the timestamp record of the corresponding pipeline to lessen the chance to be picked as the target for a policyAction, which would require the pipeline to release its resources.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `connectionId` | String (required) Indicates the unique identifier of the registered pipeline. |

```sh
luna-send -n 1 -f luna://com.webos.media/notifyActivity '{"connectionId":"_EYv0VPazu3aGo0"}
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="notifyapplifestatus"></a>
## `notifyAppLifeStatus`

`luna://com.webos.media/notifyAppLifeStatus`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/notifyAppLifeStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifybackground"></a>
## `notifyBackground`

`luna://com.webos.media/notifyBackground`

Marks a pipeline as background. This API is called when the media object in question is carded, deleted, or otherwise removed from view. Note: Background video content is not currently visible on the display surface.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `connectionId` | String (required) Indicates the unique identifier of the registered pipeline. |

```sh
luna-send -n 1 -f luna://com.webos.media/notifyBackground '{"connectionId":"_c5zE4w2k7rqmC5"}
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="notifydelay"></a>
## `notifyDelay`

`luna://com.webos.media/notifyDelay`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/notifyDelay '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyfocus"></a>
## `notifyFocus`

`luna://com.webos.media/notifyFocus`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/notifyFocus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyforeground"></a>
## `notifyForeground`

`luna://com.webos.media/notifyForeground`

Marks a pipeline as foreground. This API is called when the media object in question is un-carded and made visible. Note: Foreground pipeline video content is currently visible on the display surface.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `connectionId` | String (required) Indicates the unique identifier of the registered pipeline. |

```sh
luna-send -n 1 -f luna://com.webos.media/notifyForeground '{"connectionId":"_z6SJt11Yx0mVp1"}
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="notifymultiviewcontrolmode"></a>
## `notifyMultiviewControlMode`

`luna://com.webos.media/notifyMultiviewControlMode`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/notifyMultiviewControlMode '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifypipelinestatus"></a>
## `notifyPipelineStatus`

`luna://com.webos.media/notifyPipelineStatus`

Notifies the playback status of media pipelines.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `connectionId` | String (required) Indicates the unique identifier of the media pipeline. |
| `pipelineStatus` | String (required) Indicates the pipeline status. Possible values are: load play pause unload |
| `pid` | Number (optional) Indicates the Process ID of the pipeline. |

```sh
luna-send -n 1 -f luna://com.webos.media/notifyPipelineStatus '{"connectionId":"_gu6P54bK8fkGgo","pipelineStatus":"pause","pid":3190}
```

> ACG: media.operation \| Returns: returnValue:Boolean \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="option"></a>
## `option`

`luna://com.webos.media/option`

Provides parameters for pipeline's Information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/option '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="pause"></a>
## `pause`

`luna://com.webos.media/pause`

Requests the media server to pause the media object.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the unique identifier of the loaded media/camera pipeline. |

```sh
luna-send -n 1 -f luna://com.webos.media/pause '{ "mediaId":"_IsGbw614gu7xRB" }
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="paused"></a>
## `paused`

`luna://com.webos.media/paused`

The paused event is raised when a specific media has been successfully paused.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/paused '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="pauserecord"></a>
## `pauseRecord`

`luna://com.webos.media/pauseRecord`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/pauseRecord '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="payload"></a>
## `payload`

`luna://com.webos.media/payload`

Payload format used in load API. It represents the JSON payload object for a specific type of pipeline.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/payload '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="play"></a>
## `play`

`luna://com.webos.media/play`

Requests the media server to play the media object.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the unique identifier of the loaded media/camera pipeline. |

```sh
luna-send -n 1 -f luna://com.webos.media/play '{"mediaId":"_IsGbw614gu7xRB"}
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="playing"></a>
## `playing`

`luna://com.webos.media/playing`

The playing event is raised once, in response to the play method, when a specified media pipeline has transitioned into the playing state.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/playing '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="policyaction"></a>
## `policyAction`

`luna://com.webos.media/policyAction`

The policyAction event is invoked when the resources are short of quantity to playing new media content and request pipeline to release regarding resource.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/policyAction '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="preload"></a>
## `preload`

`luna://com.webos.media/preload`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/preload '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="procupdate"></a>
## `procUpdate`

`luna://com.webos.media/procUpdate`

The procUpdate object value is an object of type: {"appId" : string, "exec" : bool, "pid" : number} where exec is true when a pipeline appid mapping is added and false when it is destroyed. If the appId string is empty it means the pipeline was loaded without an application ID being provided.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/procUpdate '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="programs"></a>
## `programs`

`luna://com.webos.media/programs`

Provides audio/video stream information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/programs '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="reacquire"></a>
## `reacquire`

`luna://com.webos.media/reacquire`

Dynamically adds more resources to the pipeline.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `connectionId` | String (required) The unique identifier of the pipeline to add resources. |
| `resources` | String (required) Resource list to be allocated. Note: Resources information must be provided as a stringified form of one of the following objects: resources (recommended) resources_new (supported to provide backward compatibility) |

```sh
luna-send -n 1 -f luna://com.webos.media/reacquire '{ "connectionId": "_dqEYC2bXztCwsj", "resources":"{ \"new\":\"[{\\\"qty\\\":3,\\\"resource\\\":\\\"VDEC\\\"}]\", \"old\":\"[{\\\"index\\\":31,\\\"resource\\\":\\\"VDEC\\\"}]\"}" }
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="registermedia"></a>
## `registerMedia`

`luna://com.webos.media/registerMedia`

Media Content Provider (unmanaged) must register with Media Display Controller to allow proper management of video content and displays or audio outputs. NOTE: In managed case, this API is internally invoked from 'load' API. Thus, using this API with load is strongly discouraged. (Duplicated calls for same mediaId are not allowed.)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Unique identifier of the media object to be registered |
| `appId` | String (required) Application ID |

```sh
luna-send -n 1 -f luna://com.webos.media/registerMedia '{"mediaId":"_IsGbw614gu7xRB", "appId":"com.webos.app.enactbrowser"}
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="registerpipeline"></a>
## `registerPipeline`

`luna://com.webos.media/registerPipeline`

Registers with the Resource Manager. Session is persistent across all start/end transaction and acquire/release cycles. Registered clients and their current resource requirements will be tracked by Resource Manager. Param type as specified in Resource Manager configuration file pipeline settings. Note: This method is applicable for unmanaged pipelines only. For managed pipelines, this is taken care of internally by the mediaserver.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `type` | String (required) Indicates the type of pipeline to register. Possible values are: ref media sim |
| `appId` | String (optional) Application ID Note : appId is required parameter for signage. |

```sh
luna-send -n 1 -f luna://com.webos.media/registerPipeline '{"type":"media"}
```

> ACG: media.operation \| Returns: connectionId:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="release"></a>
## `release`

`luna://com.webos.media/release`

Informs media server the resources are released correctly and are not being used anymore. Note: This method is applicable for unmanaged pipelines only.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `resources` | String (required) Resource information. Note: Resources information must be provided as a stringified form of the "resources" object array. |
| `connectionId` | String (required) Indicates the unique identifier of the pipeline to release resources. |

```sh
luna-send -n 1 -f luna://com.webos.media/release '{ "resources":"[{\"resource\":\"DISP0\",\"qty\":1,\"index\":3},{\"resource\":\"VDEC\",\"qty\":1,\"index\":3},{\"resource\":\"ADEC\",\"qty\":1,\"index\":3}}]", "connectionId":"_QY7tkX1XEfBct3" }
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="removeresource"></a>
## `removeResource` ⚠️ DANGEROUS

`luna://com.webos.media/removeResource`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/removeResource '{}'
```

> ACG groups: media, private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetownerpipeline"></a>
## `resetOwnerPipeline` ⚠️ DANGEROUS

`luna://com.webos.media/resetOwnerPipeline`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/resetOwnerPipeline '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetsublevel"></a>
## `resetSubLevel` ⚠️ DANGEROUS

`luna://com.webos.media/resetSubLevel`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/resetSubLevel '{}'
```

> ACG groups: private, all, public. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resourcedetails"></a>
## `ResourceDetails`

`luna://com.webos.media/ResourceDetails`

Details of the resource.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/ResourceDetails '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="resources"></a>
## `resources`

`luna://com.webos.media/resources`

Object of resource name, quantity, and index. Resources can hold more than one set of resource, quantity, and index. Example { "resources": " [{ "resource": "DISP0", "qty": 1, "index": 3, }, { "resource": "VDEC", "qty": 1, "index": 3 }, { "resource": "ADEC", "qty": 1, "index": 3 } ] }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/resources '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="resources_new"></a>
## `resources_new`

`luna://com.webos.media/resources_new`

Object indicating the new and old resource.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/resources_new '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="responseobject"></a>
## `ResponseObject`

`luna://com.webos.media/ResponseObject`

Provides a detailed description of the object. Limit to 2-3 paragraphs.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/ResponseObject '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="resumerecord"></a>
## `resumeRecord`

`luna://com.webos.media/resumeRecord`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/resumeRecord '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="seek"></a>
## `seek`

`luna://com.webos.media/seek`

Seeks the media object to a specified time position.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `position` | Number (required) Indicates the position (in milliseconds) from the start position to seek position. |
| `mediaId` | String (required) Indicates the unique identifier of the loaded media/camera pipeline. |

```sh
luna-send -n 1 -f luna://com.webos.media/seek '{ "position":64935, "mediaId":"_IsGbw614gu7xRB" }
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="seekdone"></a>
## `seekDone`

`luna://com.webos.media/seekDone`

The seekDone event is raised when a seek operation for a media has been successfully completed.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/seekDone '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="selecttrack"></a>
## `selectTrack`

`luna://com.webos.media/selectTrack`

Selects an audio or subtitle track of an open pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (unverified)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) |
| `type` | string (required): audio \| text |
| `index` | integer track number 0..n |

```sh
luna-send -n 1 -f luna://com.webos.media/selectTrack '{"mediaId":"<id>","type":"audio","index":1}'
```

> WebOS 4+ puts the track flagged disposition.default at index 0.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="selecttrackbypreference"></a>
## `selectTrackByPreference`

`luna://com.webos.media/selectTrackByPreference`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/selectTrackByPreference '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="selecttrackbypreferencepayload"></a>
## `selectTrackByPreferencePayload`

`luna://com.webos.media/selectTrackByPreferencePayload`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/selectTrackByPreferencePayload '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setappid"></a>
## `setAppId`

`luna://com.webos.media/setAppId`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setAppId '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setappwindowtype"></a>
## `setAppWindowType`

`luna://com.webos.media/setAppWindowType`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setAppWindowType '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiodualmono"></a>
## `setAudioDualMono`

`luna://com.webos.media/setAudioDualMono`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setAudioDualMono '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiomute"></a>
## `setAudioMute`

`luna://com.webos.media/setAudioMute`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setAudioMute '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setaudiostreampitch"></a>
## `setAudioStreamPitch`

`luna://com.webos.media/setAudioStreamPitch`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setAudioStreamPitch '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setclearkey"></a>
## `setClearKey`

`luna://com.webos.media/setClearKey`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setClearKey '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdebuglevel"></a>
## `setDebugLevel`

`luna://com.webos.media/setDebugLevel`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setDebugLevel '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdebuglevelpipeline"></a>
## `setDebugLevelPipeline`

`luna://com.webos.media/setDebugLevelPipeline`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setDebugLevelPipeline '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdefaultprl"></a>
## `setDefaultPrl`

`luna://com.webos.media/setDefaultPrl`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setDefaultPrl '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdescriptivevideoservice"></a>
## `setDescriptiveVideoService`

`luna://com.webos.media/setDescriptiveVideoService`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setDescriptiveVideoService '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdialogenhancement"></a>
## `setDialogEnhancement`

`luna://com.webos.media/setDialogEnhancement`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setDialogEnhancement '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdisplaywindow"></a>
## `setDisplayWindow`

`luna://com.webos.media/setDisplayWindow`

Registered in webOS OSE sysbus api.json (ACG group media); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setDisplayWindow '{}'
```

> Listed under ACG group "media" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/umediaserver/blob/master/files/sysbus/com.webos.media.api.json)

<a id="setdrmoperation"></a>
## `setDrmOperation`

`luna://com.webos.media/setDrmOperation`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setDrmOperation '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmaster"></a>
## `setMaster`

`luna://com.webos.media/setMaster`

Method on com.webos.media (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setMaster '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmasterclock"></a>
## `setMasterClock`

`luna://com.webos.media/setMasterClock`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setMasterClock '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmediastarttime"></a>
## `setMediaStartTime`

`luna://com.webos.media/setMediaStartTime`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setMediaStartTime '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmediastoptime"></a>
## `setMediaStopTime`

`luna://com.webos.media/setMediaStopTime`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setMediaStopTime '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmediasynchronizercontroltimestamp"></a>
## `setMediaSynchronizerControlTimestamp`

`luna://com.webos.media/setMediaSynchronizerControlTimestamp`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setMediaSynchronizerControlTimestamp '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmediasynchronizeroptions"></a>
## `setMediaSynchronizerOptions`

`luna://com.webos.media/setMediaSynchronizerOptions`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setMediaSynchronizerOptions '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmpeghaudioconfig"></a>
## `setMpeghAudioConfig`

`luna://com.webos.media/setMpeghAudioConfig`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setMpeghAudioConfig '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setownerpipeline"></a>
## `setOwnerPipeline`

`luna://com.webos.media/setOwnerPipeline`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setOwnerPipeline '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinedebugstate"></a>
## `setPipelineDebugState`

`luna://com.webos.media/setPipelineDebugState`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setPipelineDebugState '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setplayrate"></a>
## `setPlayRate`

`luna://com.webos.media/setPlayRate`

Sets the pipeline media play rate.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `playRate` | Number (double) (required) Indicates the play back rate for the media. |
| `mediaId` | String (required) Indicates the unique identifier for the requested loaded media pipeline. |
| `audioOutput` | Boolean (required) Determine to mute audio |

```sh
luna-send -n 1 -f luna://com.webos.media/setPlayRate '{ "playRate":2.0, "mediaId":"_QnGGXr7BdWsOV1", "audioOutput":true }
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="setprioritylevel"></a>
## `setPriorityLevel`

`luna://com.webos.media/setPriorityLevel`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setPriorityLevel '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setproperty"></a>
## `setProperty`

`luna://com.webos.media/setProperty`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setProperty '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpurpose"></a>
## `setPurpose`

`luna://com.webos.media/setPurpose`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setPurpose '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setresourcepolicyextrainfo"></a>
## `setResourcePolicyExtraInfo`

`luna://com.webos.media/setResourcePolicyExtraInfo`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setResourcePolicyExtraInfo '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsink"></a>
## `setSink`

`luna://com.webos.media/setSink`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSink '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setslave"></a>
## `setSlave`

`luna://com.webos.media/setSlave`

Method on com.webos.media (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSlave '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setslaveclock"></a>
## `setSlaveClock`

`luna://com.webos.media/setSlaveClock`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSlaveClock '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setstreamquality"></a>
## `setStreamQuality`

`luna://com.webos.media/setStreamQuality`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setStreamQuality '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitlebackgroundblinking"></a>
## `setSubtitleBackgroundBlinking`

`luna://com.webos.media/setSubtitleBackgroundBlinking`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleBackgroundBlinking '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitlebackgroundcolor"></a>
## `setSubtitleBackgroundColor`

`luna://com.webos.media/setSubtitleBackgroundColor`

Sets subtitle background color for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `bgColor` | string: black(default)\|white\|yellow\|red\|green\|blue |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleBackgroundColor '{"mediaId":"<mediaId>","bgColor":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitlebackgroundopacity"></a>
## `setSubtitleBackgroundOpacity`

`luna://com.webos.media/setSubtitleBackgroundOpacity`

Sets subtitle background opacity for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `bgOpacity` | integer 0 (transparent, default) to 255 |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleBackgroundOpacity '{"mediaId":"<mediaId>","bgOpacity":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitlecharacterblinking"></a>
## `setSubtitleCharacterBlinking`

`luna://com.webos.media/setSubtitleCharacterBlinking`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleCharacterBlinking '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitlecharactercolor"></a>
## `setSubtitleCharacterColor`

`luna://com.webos.media/setSubtitleCharacterColor`

Sets subtitle character color (similar to setSubtitleColor, different values) for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `charColor` | string: black\|white(default)\|yellow\|red\|green\|blue |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleCharacterColor '{"mediaId":"<mediaId>","charColor":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitlecharacteredge"></a>
## `setSubtitleCharacterEdge`

`luna://com.webos.media/setSubtitleCharacterEdge`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleCharacterEdge '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitlecharacteredgecolor"></a>
## `setSubtitleCharacterEdgeColor`

`luna://com.webos.media/setSubtitleCharacterEdgeColor`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleCharacterEdgeColor '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitlecharacterfont"></a>
## `setSubtitleCharacterFont`

`luna://com.webos.media/setSubtitleCharacterFont`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleCharacterFont '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitlecharacterfontsize"></a>
## `setSubtitleCharacterFontSize`

`luna://com.webos.media/setSubtitleCharacterFontSize`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleCharacterFontSize '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitlecharacteropacity"></a>
## `setSubtitleCharacterOpacity`

`luna://com.webos.media/setSubtitleCharacterOpacity`

Sets subtitle character opacity for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `charOpacity` | integer 0 (transparent) to 255 (opaque, default) |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleCharacterOpacity '{"mediaId":"<mediaId>","charOpacity":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitlecolor"></a>
## `setSubtitleColor`

`luna://com.webos.media/setSubtitleColor`

Sets subtitle color for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `color` | integer: 0 yellow,1 red,2 white(default),3 green,4 blue,5 gray |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleColor '{"mediaId":"<mediaId>","color":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitlecustomstyleenable"></a>
## `setSubtitleCustomStyleEnable`

`luna://com.webos.media/setSubtitleCustomStyleEnable`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleCustomStyleEnable '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitleenable"></a>
## `setSubtitleEnable`

`luna://com.webos.media/setSubtitleEnable`

Shows or hides subtitles for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `enable` | boolean: true show, false hide |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleEnable '{"mediaId":"<mediaId>","enable":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitleencoding"></a>
## `setSubtitleEncoding`

`luna://com.webos.media/setSubtitleEncoding`

Sets subtitle text encoding for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `encoding` | string e.g. ISO8859-1, UTF-8, WINDOWS-1252, WINDOWS-1251, BIG5, GB2312, EUCKR, Shift_JIS (full list on gist) |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleEncoding '{"mediaId":"<mediaId>","encoding":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitlefontsize"></a>
## `setSubtitleFontSize`

`luna://com.webos.media/setSubtitleFontSize`

Sets subtitle font size for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `fontSize` | integer: 0 tiny,1 small,2 standard(default),3 large,4 huge |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleFontSize '{"mediaId":"<mediaId>","fontSize":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitleposition"></a>
## `setSubtitlePosition`

`luna://com.webos.media/setSubtitlePosition`

Sets subtitle vertical position for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `position` | integer -3 (lowest) to 4 (highest), 0 default |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitlePosition '{"mediaId":"<mediaId>","position":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitlepositionbypayload"></a>
## `setSubtitlePositionByPayload`

`luna://com.webos.media/setSubtitlePositionByPayload`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitlePositionByPayload '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitlepresentationmode"></a>
## `setSubtitlePresentationMode`

`luna://com.webos.media/setSubtitlePresentationMode`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitlePresentationMode '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitlesource"></a>
## `setSubtitleSource`

`luna://com.webos.media/setSubtitleSource`

Loads an external subtitle file for an open pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (unverified)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) |
| `uri` | string (required) http URL or file:// path to .srt |
| `preferredEncodings` | optional |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleSource '{"mediaId":"<id>","uri":"http://host/sub.srt"}'
```

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitlesync"></a>
## `setSubtitleSync`

`luna://com.webos.media/setSubtitleSync`

Sets subtitle sync offset in milliseconds for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `sync` | integer ms offset, e.g. -350, 200 |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleSync '{"mediaId":"<mediaId>","sync":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitlewindowcolor"></a>
## `setSubtitleWindowColor`

`luna://com.webos.media/setSubtitleWindowColor`

Sets subtitle window color for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `windowColor` | string: black(default)\|white\|yellow\|red\|green\|blue |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleWindowColor '{"mediaId":"<mediaId>","windowColor":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setsubtitlewindowopacity"></a>
## `setSubtitleWindowOpacity`

`luna://com.webos.media/setSubtitleWindowOpacity`

Sets subtitle window opacity for an open media pipeline

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 3.x-6+ (per gist; unverified per model)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mediaId` | string (required) pipeline id |
| `windowOpacity` | integer 0 (transparent, default) to 255 |

```sh
luna-send -n 1 -f luna://com.webos.media/setSubtitleWindowOpacity '{"mediaId":"<mediaId>","windowOpacity":<value>}'
```

> Undocumented by LG; gist author says direct use is discouraged but needed for features the web APIs lack. mediaId from document.querySelector('video').mediaId or videooutput/getStatus.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737)

<a id="setupdateinterval"></a>
## `setUpdateInterval`

`luna://com.webos.media/setUpdateInterval`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setUpdateInterval '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setupdateintervalkv"></a>
## `setUpdateIntervalKV`

`luna://com.webos.media/setUpdateIntervalKV`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setUpdateIntervalKV '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="seturi"></a>
## `setUri`

`luna://com.webos.media/setUri`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setUri '{}'
```

> ACG groups: media, public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setvideoinfo"></a>
## `setVideoInfo`

`luna://com.webos.media/setVideoInfo`

Registered in webOS OSE sysbus api.json (ACG group media); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setVideoInfo '{}'
```

> Listed under ACG group "media" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/umediaserver/blob/master/files/sysbus/com.webos.media.api.json)

<a id="setvisibility"></a>
## `setVisibility`

`luna://com.webos.media/setVisibility`

Registered in webOS OSE sysbus api.json (ACG group media); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setVisibility '{}'
```

> Listed under ACG group "media" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/umediaserver/blob/master/files/sysbus/com.webos.media.api.json)

<a id="setvolume"></a>
## `setVolume`

`luna://com.webos.media/setVolume`

Sets the volume for the specified media object. Additionally, it specifies the ease (fade-in and fade-out) properties for the media object.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Unique identifier of the media object. |
| `volume` | Number (required) The volume to be set. Can be set to any value between 0 and 100. |

```sh
luna-send -n 1 -f luna://com.webos.media/setVolume '{"mediaId":"_IsGbw614gu7xRB","volume":60}
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="setwindowid"></a>
## `setWindowId`

`luna://com.webos.media/setWindowId`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setWindowId '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setxlinkresolution"></a>
## `setXlinkResolution`

`luna://com.webos.media/setXlinkResolution`

Setter on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/setXlinkResolution '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sourceinfo"></a>
## `sourceInfo`

`luna://com.webos.media/sourceInfo`

Provides information of the media that has just been loaded. Example { "sourceInfo": { "programs": [{ "audio_stream": 1, "video_stream": 1 }], "seekable": true, "video_streams": [{ "width": 854, "frame_rate": { "num": 24, "den": 1 }, "bitrate": 535929, "height": 480 }], "audio_streams": [{ "sample_rate": 48000, "bit_rate": 0 }], "container": "", "duration": 52209 } }

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/sourceInfo '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="startcamerarecord"></a>
## `startCameraRecord`

`luna://com.webos.media/startCameraRecord`

Starts camera recording. Camera pipeline stores streamed data from the camera and microphone (if required) at the specified location.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `location` | String (required) Indicates the path for storing the recorded file. |
| `format` | String (required) Indicates the format in which data is stored. Possible values are: MP4 - file format MP4 ( .mp4) file gets generated |
| `mediaId` | String (required) Indicates the unique identifier of the camera pipeline obtained using the load() API. |
| `audio` | Boolean (required) Indicates whether the audio data from the microphone also has to be recorded along with video. Possible values are: true : Include audio data along with video false: Does not include audio data along with video Note: For Signage, record with audio is not supported. |
| `audioSrc` | String (required) Indicates the name of the microphone device from which the audio data has to be captured. Note: Supports only one audio source (pcm_input). |

```sh
luna-send -n 1 luna://com.webos.media/startCameraRecord '{ "mediaId" :"_5nxnM2Xiw55PYS" , "location":"/media/internal/", "format" :"MP4", "audio":false, "audioSrc":"pcm_input" }
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="startrecord"></a>
## `startRecord`

`luna://com.webos.media/startRecord`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/startRecord '{}'
```

> ACG groups: media, public, private, media.record, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopcamerarecord"></a>
## `stopCameraRecord`

`luna://com.webos.media/stopCameraRecord`

Requests media server to stop camera recording and change to the preview state.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the unique identifier of the camera pipeline obtained using the load() API. |

```sh
luna-send -n 1 luna://com.webos.media/stopCameraRecord '{"mediaId":"_JtLZrGoEAoRa1d"}
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="stoprecord"></a>
## `stopRecord`

`luna://com.webos.media/stopRecord`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/stopRecord '{}'
```

> ACG groups: media, public, private, media.record, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribe"></a>
## `subscribe`

`luna://com.webos.media/subscribe`

Subscribes the media client to receive events from a media pipeline. These events, described in the tables above, allow the media client (generally an app or test tool) to monitor pipeline status (including playback position) and adjust their internal state appropriately.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the unique identifier of the loaded media/camera pipeline. |

```sh
luna-send -n 2 -f luna://com.webos.media/subscribe '{"mediaId":"_rTNwzp81clPsxX"}
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String; subscription:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="switchtoautolayout"></a>
## `switchToAutoLayout`

`luna://com.webos.media/switchToAutoLayout`

Method on com.webos.media (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/switchToAutoLayout '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="switchtofullscreen"></a>
## `switchToFullScreen`

`luna://com.webos.media/switchToFullScreen`

Registered in webOS OSE sysbus api.json (ACG group media); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/switchToFullScreen '{}'
```

> Listed under ACG group "media" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/umediaserver/blob/master/files/sysbus/com.webos.media.api.json)

<a id="takecamerasnapshot"></a>
## `takeCameraSnapshot`

`luna://com.webos.media/takeCameraSnapshot`

Captures a frame from the camera preview.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the unique identifier of the camera pipeline which is obtained using the load() API. |
| `location` | String (required) Indicates the path of the captured image to be stored. |
| `format` | String (required) Indicates the format of the frame is to be captured. Possible values are: jpg |
| `width` | Number (required) Indicates the width of the captured image in pixels. Note: Width should be within the range supported by the camera hardware. |
| `height` | Number (required) Indicates the height of the captured image in pixels. Note: Height should be within the range supported by the camera hardware. |
| `pictureQuality` | Number (required) Indicates the percentage of the picture quality. Possible values are: 0-100 |

```sh
luna-send -n 1 luna://com.webos.media/takeCameraSnapshot '{ "mediaId":"", "location":"/tmp/", "format":"jpg", "width":640, "height":480, "pictureQuality":30 }
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="takesnapshot"></a>
## `takeSnapshot`

`luna://com.webos.media/takeSnapshot`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/takeSnapshot '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testpipelineevent"></a>
## `testPipelineEvent`

`luna://com.webos.media/testPipelineEvent`

Method on com.webos.media (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/testPipelineEvent '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="trackacquireresultinfo"></a>
## `trackAcquireResultInfo`

`luna://com.webos.media/trackAcquireResultInfo`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/trackAcquireResultInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="trackappprocesses"></a>
## `trackAppProcesses`

`luna://com.webos.media/trackAppProcesses`

Subscribes to messages containing the mapping of application ID (appID) and pipeline process ID (PID), i.e. it returns information about which application each managed pipeline belongs to.The subscription messages contain information about changes to these mappings, i.e. new mappings when a pipeline is associated with an application or destroyed mappings when a pipeline exits. Note: The return value of the method contains an array of the PIDs of all currently existing pipelines mapped to the corresponding appIDs.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

```sh
luna-send -n 2 -f luna://com.webos.media/trackAppProcesses '{}
```

> ACG: media.devutility \| Returns: subscribed:Boolean; returnValue:Boolean; mediaPipelines:Object array: mediaPipelines; subscription:Boolean \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="trackappstatus"></a>
## `trackAppStatus`

`luna://com.webos.media/trackAppStatus`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/trackAppStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="trackpipelineinfo"></a>
## `trackPipelineInfo`

`luna://com.webos.media/trackPipelineInfo`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/trackPipelineInfo '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="trackpolicyactioninfo"></a>
## `trackPolicyActionInfo`

`luna://com.webos.media/trackPolicyActionInfo`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/trackPolicyActionInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="trackresourcesstatus"></a>
## `trackResourcesStatus`

`luna://com.webos.media/trackResourcesStatus`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/trackResourcesStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tryacquire"></a>
## `tryAcquire`

`luna://com.webos.media/tryAcquire`

Tries to acquire resources from mediaserver. Note: This API will not issue policyAction to other pipelines in order to force them to release resources. If there are insufficient resources to honor the request without issuing a policyAction, the request will fail.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `resources` | String (required) Resource information. Note: Resources information must be provided as a stringified form of the "resources" object array. |
| `connectionId` | String (required) Indicates the unique identifier of the pipeline to acquire resources. |

```sh
luna-send -n 1 luna://com.webos.media/tryAcquire '{ "resources": "[{\"resource\":\"DISP0\",\"qty\":1},{\"resource\":\"VDEC\",\"qty\":1},{\"resource\":\"ADEC\",\"qty\":1}]", "connectionId": "_7P3y7e9AcPv8t1" }
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="unload"></a>
## `unload`

`luna://com.webos.media/unload`

Unloads the pipeline and releases all AV resources.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the unique identifier of the loaded media/camera pipeline. |

```sh
luna-send -n 1 -f luna://com.webos.media/unload '{"mediaId":"_Pvzj2FRn42sL99"}
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:String; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="unloadcompleted"></a>
## `unloadCompleted`

`luna://com.webos.media/unloadCompleted`

The unloadCompleted event is raised when a specific media pipeline has been successfully unloaded.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/unloadCompleted '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="unregistermedia"></a>
## `unregisterMedia`

`luna://com.webos.media/unregisterMedia`

Registered in webOS OSE sysbus api.json (ACG group media); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/unregisterMedia '{}'
```

> Listed under ACG group "media" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/umediaserver/blob/master/files/sysbus/com.webos.media.api.json)

<a id="unregisterpipeline"></a>
## `unregisterPipeline`

`luna://com.webos.media/unregisterPipeline`

Unregisters pipeline with Resource Manager. Note: This method is applicable to unmanaged pipelines only.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `connectionId` | String (required) Indicates the unique identifier of the pipeline to unregister. |

```sh
luna-send -n 1 -f luna://com.webos.media/unregisterPipeline '{"connectionId":"_KXpMET1Sxc1eGO"}
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="unsubscribe"></a>
## `unsubscribe`

`luna://com.webos.media/unsubscribe`

Unsubscribes from media pipeline related events.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mediaId` | String (required) Indicates the unique identifier of the media object to unsubscribe. |

```sh
luna-send -n 1 -f luna://com.webos.media/unsubscribe '{"mediaId":"_gmkaR0OtGWxr6z"}
```

> ACG: media.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; mediaId:String \| Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="updatemetadata"></a>
## `updateMetadata`

`luna://com.webos.media/updateMetadata`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/updateMetadata '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateperiodstart"></a>
## `updatePeriodStart`

`luna://com.webos.media/updatePeriodStart`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/updatePeriodStart '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatepipelinestateevent"></a>
## `updatePipelineStateEvent`

`luna://com.webos.media/updatePipelineStateEvent`

Method on com.webos.media (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/updatePipelineStateEvent '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updateresource"></a>
## `updateResource`

`luna://com.webos.media/updateResource`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/updateResource '{}'
```

> ACG groups: media, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="upsublevel"></a>
## `upSubLevel`

`luna://com.webos.media/upSubLevel`

Method on com.webos.media (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.media/upSubLevel '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="video"></a>
## `video`

`luna://com.webos.media/video`

Set a video information for either video and audio or video only recording.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/video '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)

<a id="videoinfo"></a>
## `videoInfo`

`luna://com.webos.media/videoInfo`

Provides information related to video.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.media/videoInfo '{}'
```

> Service: Provides access to the functionality provided by the webOS media server. The webOS media server supports both managed and unmanaged pipelines. For managed pipelines, com.webos.media provides high-leve \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-media/)
