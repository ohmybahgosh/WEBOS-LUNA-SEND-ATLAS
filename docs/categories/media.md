# Media Playback

433 methods.  [Back to index](../../README.md#categories)

| URI | Access | Conf | Description |
|---|---|---|---|
| [`luna://airplay.homekit/reset`](../services/airplay.homekit.md#reset) | private | inferred | Resets the airplay homekit. ⚠️ |
| [`luna://airplay.homekit/subscribePairingEvent`](../services/airplay.homekit.md#subscribepairingevent) | private | inferred | Subscribes to the pairing event. |
| [`luna://airplay.homekit/subscribeSetupCodeChanged`](../services/airplay.homekit.md#subscribesetupcodechanged) | private | inferred | Subscribes to the setup code changed. |
| [`luna://airplay.service/changeAppPosition`](../services/airplay.service.md#changeappposition) | public | inferred | Changes the app position. |
| [`luna://airplay.service/changeWindowSize`](../services/airplay.service.md#changewindowsize) | public | inferred | Changes the window size. |
| [`luna://airplay.service/changeWindowType`](../services/airplay.service.md#changewindowtype) | public | inferred | Changes the window type. |
| [`luna://airplay.service/exit`](../services/airplay.service.md#exit) | public | inferred | Exits the airplay. |
| [`luna://airplay.service/getStatus`](../services/airplay.service.md#getstatus) | public | inferred | Returns the status. |
| [`luna://airplay.service/mfiKeyDownload`](../services/airplay.service.md#mfikeydownload) | private | inferred | Handles the mfi key download. |
| [`luna://airplay.service/mfiKeyInfo`](../services/airplay.service.md#mfikeyinfo) | private | inferred | Handles the mfi key info. |
| [`luna://airplay.service/mfiKeyVerify`](../services/airplay.service.md#mfikeyverify) | private | inferred | Handles the mfi key verify. |
| [`luna://airplay.service/mfiKeyWrite`](../services/airplay.service.md#mfikeywrite) | private | inferred | Handles the mfi key write. |
| [`luna://airplay.service/notifyMinimizedAppState`](../services/airplay.service.md#notifyminimizedappstate) | private | inferred | Notifies of the minimized app state. |
| [`luna://airplay.service/notifyMirroringState`](../services/airplay.service.md#notifymirroringstate) | private | inferred | Notifies of the mirroring state. |
| [`luna://airplay.service/reset`](../services/airplay.service.md#reset) | private | inferred | Resets the airplay. ⚠️ |
| [`luna://airplay.service/setHomekitInfo`](../services/airplay.service.md#sethomekitinfo) | private | inferred | Sets the homekit info. |
| [`luna://airplay.service/sharedKeyDelete`](../services/airplay.service.md#sharedkeydelete) | private | inferred | Handles the shared key delete. ⚠️ |
| [`luna://airplay.service/showAirplayPage`](../services/airplay.service.md#showairplaypage) | public | inferred | Shows the airplay page. |
| [`luna://airplay.service/showHomekitSettingPage`](../services/airplay.service.md#showhomekitsettingpage) | public | inferred | Shows the homekit setting page. |
| [`luna://airplay.service/test`](../services/airplay.service.md#test) | public | inferred | Tests the airplay. |
| [`luna://com.palm.mediadb/image/listalbums`](../services/com.palm.mediadb.md#image_listalbums) | root | documented | Lists photo albums from mediadb |
| [`luna://com.palm.mediadb/image/listimages`](../services/com.palm.mediadb.md#image_listimages) | root | documented | Lists images from mediadb |
| [`luna://com.test.interc.service.fake/subtitle/getRatingInfo`](../services/com.test.interc.service.fake.md#subtitle_getratinginfo) | public | inferred | Returns the rating info (subtitle) |
| [`luna://com.webos.media/acbs`](../services/com.webos.media.md#acbs) | unknown | documented | Array of objects that gives details of media for foreground application (such as pipeline Id, playstate, position, etc.) |
| [`luna://com.webos.media/acquire`](../services/com.webos.media.md#acquire) | public | documented | Requests resources from the mediaserver. Typical usage is to request the number of audio and video decoders or other hardware components used by the pipeline. A |
| [`luna://com.webos.media/acquireComplete`](../services/com.webos.media.md#acquirecomplete) | unknown | documented | This event is invoked when the acquire request is performed and the result comes out. |
| [`luna://com.webos.media/addResource`](../services/com.webos.media.md#addresource) | private | inferred | Adds the resource. |
| [`luna://com.webos.media/attach`](../services/com.webos.media.md#attach) | public | documented | Allows to transfer the control of a pipeline to be handed over to a different client. When this occurs, the original client gets notified that it got detached f |
| [`luna://com.webos.media/audio`](../services/com.webos.media.md#audio) | unknown | documented | Set a audio information for either video and audio or audio only recording. |
| [`luna://com.webos.media/audioInfo`](../services/com.webos.media.md#audioinfo) | unknown | documented | Provides information related to audio. |
| [`luna://com.webos.media/bufferingEnd`](../services/com.webos.media.md#bufferingend) | unknown | documented | Indicates the pipeline is resuming playback after filling buffers. |
| [`luna://com.webos.media/bufferingStart`](../services/com.webos.media.md#bufferingstart) | unknown | documented | Indicates the pipeline is temporarily pausing playback internally in order to buffer more data. |
| [`luna://com.webos.media/bufferRange`](../services/com.webos.media.md#bufferrange) | unknown | documented | Indicates the buffering range of the particular media content. It is raised multiple times when specific media is loaded. |
| [`luna://com.webos.media/changeResolution`](../services/com.webos.media.md#changeresolution) | public | inferred | Changes the resolution. |
| [`luna://com.webos.media/closeAllConnections`](../services/com.webos.media.md#closeallconnections) | private | inferred | Closes the all connections. |
| [`luna://com.webos.media/closeMediaPipeline`](../services/com.webos.media.md#closemediapipeline) | private | inferred | Closes the media pipeline. |
| [`luna://com.webos.media/contentReady`](../services/com.webos.media.md#contentready) | unknown | documented | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`luna://com.webos.media/currentTime`](../services/com.webos.media.md#currenttime) | unknown | documented | The currentTime event is raised multiple times when a specific media is playing. It indicates the progress of the media being played and provides the current ti |
| [`luna://com.webos.media/detached`](../services/com.webos.media.md#detached) | unknown | documented | The detached event is raised when a specific media has been detached from the client by another client attaching to the corresponding pipeline. The detached eve |
| [`luna://com.webos.media/display_attr`](../services/com.webos.media.md#display_attr) | unknown | documented | Provides detailed information for display resource. |
| [`luna://com.webos.media/downSubLevel`](../services/com.webos.media.md#downsublevel) | public | inferred | Handles the down sub level. |
| [`luna://com.webos.media/enableDebug`](../services/com.webos.media.md#enabledebug) | private | inferred | Enables the debug. |
| [`luna://com.webos.media/endOfStream`](../services/com.webos.media.md#endofstream) | unknown | documented | The endOfStream event is raised when a specific media has received all of its data. |
| [`luna://com.webos.media/error`](../services/com.webos.media.md#error) | unknown | documented | The error event reports errors thrown by pipelines. |
| [`luna://com.webos.media/exit`](../services/com.webos.media.md#exit) | public | inferred | Exits the media. |
| [`luna://com.webos.media/focus`](../services/com.webos.media.md#focus) | unknown | documented | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`luna://com.webos.media/frameRate`](../services/com.webos.media.md#framerate) | unknown | documented | Provides information about the number of frames per second at which the video is being played. It is represented as a combination of numerator and denominator. |
| [`luna://com.webos.media/getActivePipelines`](../services/com.webos.media.md#getactivepipelines) | public | documented | Gets JSON formatted output of currently active media pipelines. Note: Typically, a luna methods returns a JSON object as response. However, in this case, an arr |
| [`luna://com.webos.media/getDisplayId`](../services/com.webos.media.md#getdisplayid) | public | documented | Gets information about the display on which the specified application instance is launched. Note: This method supports multi-screen playback. |
| [`luna://com.webos.media/getForegroundAppInfo`](../services/com.webos.media.md#getforegroundappinfo) | public | documented | Provides the application's foreground information. |
| [`luna://com.webos.media/getPipelineState`](../services/com.webos.media.md#getpipelinestate) | public | documented | Requests the media server to retrieve pipeline state information. |
| [`luna://com.webos.media/getProidiomDiag`](../services/com.webos.media.md#getproidiomdiag) | private | inferred | Returns the proidiom diag. |
| [`luna://com.webos.media/getResourceList`](../services/com.webos.media.md#getresourcelist) | public | inferred | Returns the resource list. |
| [`luna://com.webos.media/image`](../services/com.webos.media.md#image) | unknown | documented | Set a image information for snapshot a image. |
| [`luna://com.webos.media/keepAlive`](../services/com.webos.media.md#keepalive) | public | inferred | Handles the keep alive. |
| [`luna://com.webos.media/kill`](../services/com.webos.media.md#kill) | public | inferred | Handles the kill. |
| [`luna://com.webos.media/load`](../services/com.webos.media.md#load) | public | documented | Loads a new pipeline for the specified URI. The media server returns a unique id to the client which is used for subsequent operations on the pipeline. |
| [`luna://com.webos.media/loadCompleted`](../services/com.webos.media.md#loadcompleted) | unknown | documented | The loadCompleted event is raised when a specific media pipeline has been successfully loaded. |
| [`luna://com.webos.media/logPipelineState`](../services/com.webos.media.md#logpipelinestate) | private | inferred | Handles the log pipeline state. |
| [`luna://com.webos.media/mediaId`](../services/com.webos.media.md#mediaid) | unknown | documented | Unique identifier of the loaded media/camera pipeline. |
| [`luna://com.webos.media/mediaPipelines`](../services/com.webos.media.md#mediapipelines) | unknown | documented | Contains the AppID-PID mapping of the currently running pipelines. Returns an empty array if no pipelines associated with any applications. Each array element i |
| [`luna://com.webos.media/notifyActivity`](../services/com.webos.media.md#notifyactivity) | public | documented | Notifies the media server that the specific pipeline is currently in use. This command raises the timestamp record of the corresponding pipeline to lessen the c |
| [`luna://com.webos.media/notifyAppLifeStatus`](../services/com.webos.media.md#notifyapplifestatus) | public | inferred | Notifies of the app life status. |
| [`luna://com.webos.media/notifyBackground`](../services/com.webos.media.md#notifybackground) | public | documented | Marks a pipeline as background. This API is called when the media object in question is carded, deleted, or otherwise removed from view. Note: Background video  |
| [`luna://com.webos.media/notifyDelay`](../services/com.webos.media.md#notifydelay) | private | inferred | Notifies of the delay. |
| [`luna://com.webos.media/notifyFocus`](../services/com.webos.media.md#notifyfocus) | public | inferred | Notifies of the focus. |
| [`luna://com.webos.media/notifyForeground`](../services/com.webos.media.md#notifyforeground) | public | documented | Marks a pipeline as foreground. This API is called when the media object in question is un-carded and made visible. Note: Foreground pipeline video content is c |
| [`luna://com.webos.media/notifyMultiviewControlMode`](../services/com.webos.media.md#notifymultiviewcontrolmode) | public | inferred | Notifies of the multiview control mode. |
| [`luna://com.webos.media/notifyPipelineStatus`](../services/com.webos.media.md#notifypipelinestatus) | public | documented | Notifies the playback status of media pipelines. |
| [`luna://com.webos.media/option`](../services/com.webos.media.md#option) | unknown | documented | Provides parameters for pipeline's Information. |
| [`luna://com.webos.media/pause`](../services/com.webos.media.md#pause) | public | documented | Requests the media server to pause the media object. |
| [`luna://com.webos.media/paused`](../services/com.webos.media.md#paused) | unknown | documented | The paused event is raised when a specific media has been successfully paused. |
| [`luna://com.webos.media/pauseRecord`](../services/com.webos.media.md#pauserecord) | public | inferred | Pauses the record. |
| [`luna://com.webos.media/payload`](../services/com.webos.media.md#payload) | unknown | documented | Payload format used in load API. It represents the JSON payload object for a specific type of pipeline. |
| [`luna://com.webos.media/play`](../services/com.webos.media.md#play) | public | documented | Requests the media server to play the media object. |
| [`luna://com.webos.media/playing`](../services/com.webos.media.md#playing) | unknown | documented | The playing event is raised once, in response to the play method, when a specified media pipeline has transitioned into the playing state. |
| [`luna://com.webos.media/policyAction`](../services/com.webos.media.md#policyaction) | unknown | documented | The policyAction event is invoked when the resources are short of quantity to playing new media content and request pipeline to release regarding resource. |
| [`luna://com.webos.media/preload`](../services/com.webos.media.md#preload) | public | inferred | Handles the preload. |
| [`luna://com.webos.media/procUpdate`](../services/com.webos.media.md#procupdate) | unknown | documented | The procUpdate object value is an object of type: {"appId" : string, "exec" : bool, "pid" : number} where exec is true when a pipeline appid mapping is added an |
| [`luna://com.webos.media/programs`](../services/com.webos.media.md#programs) | unknown | documented | Provides audio/video stream information. |
| [`luna://com.webos.media/reacquire`](../services/com.webos.media.md#reacquire) | public | documented | Dynamically adds more resources to the pipeline. |
| [`luna://com.webos.media/registerMedia`](../services/com.webos.media.md#registermedia) | public | documented | Media Content Provider (unmanaged) must register with Media Display Controller to allow proper management of video content and displays or audio outputs. NOTE:  |
| [`luna://com.webos.media/registerPipeline`](../services/com.webos.media.md#registerpipeline) | public | documented | Registers with the Resource Manager. Session is persistent across all start/end transaction and acquire/release cycles. Registered clients and their current res |
| [`luna://com.webos.media/release`](../services/com.webos.media.md#release) | public | documented | Informs media server the resources are released correctly and are not being used anymore. Note: This method is applicable for unmanaged pipelines only. |
| [`luna://com.webos.media/removeResource`](../services/com.webos.media.md#removeresource) | private | inferred | Removes the resource. ⚠️ |
| [`luna://com.webos.media/resetOwnerPipeline`](../services/com.webos.media.md#resetownerpipeline) | public | inferred | Resets the owner pipeline. ⚠️ |
| [`luna://com.webos.media/resetSubLevel`](../services/com.webos.media.md#resetsublevel) | public | inferred | Resets the sub level. ⚠️ |
| [`luna://com.webos.media/ResourceDetails`](../services/com.webos.media.md#resourcedetails) | unknown | documented | Details of the resource. |
| [`luna://com.webos.media/resources`](../services/com.webos.media.md#resources) | unknown | documented | Object of resource name, quantity, and index. Resources can hold more than one set of resource, quantity, and index. Example { "resources": " [{ "resource": "DI |
| [`luna://com.webos.media/resources_new`](../services/com.webos.media.md#resources_new) | unknown | documented | Object indicating the new and old resource. |
| [`luna://com.webos.media/ResponseObject`](../services/com.webos.media.md#responseobject) | unknown | documented | Provides a detailed description of the object. Limit to 2-3 paragraphs. |
| [`luna://com.webos.media/resumeRecord`](../services/com.webos.media.md#resumerecord) | public | inferred | Resumes the record. |
| [`luna://com.webos.media/seek`](../services/com.webos.media.md#seek) | public | documented | Seeks the media object to a specified time position. |
| [`luna://com.webos.media/seekDone`](../services/com.webos.media.md#seekdone) | unknown | documented | The seekDone event is raised when a seek operation for a media has been successfully completed. |
| [`luna://com.webos.media/selectTrack`](../services/com.webos.media.md#selecttrack) | public | documented | Selects an audio or subtitle track of an open pipeline |
| [`luna://com.webos.media/selectTrackByPreference`](../services/com.webos.media.md#selecttrackbypreference) | public | inferred | Selects the track by preference. |
| [`luna://com.webos.media/selectTrackByPreferencePayload`](../services/com.webos.media.md#selecttrackbypreferencepayload) | public | inferred | Selects the track by preference payload. |
| [`luna://com.webos.media/setAppId`](../services/com.webos.media.md#setappid) | public | inferred | Sets the app ID. |
| [`luna://com.webos.media/setAppWindowType`](../services/com.webos.media.md#setappwindowtype) | public | inferred | Sets the app window type. |
| [`luna://com.webos.media/setClearKey`](../services/com.webos.media.md#setclearkey) | public | inferred | Sets the clear key. |
| [`luna://com.webos.media/setDebugLevel`](../services/com.webos.media.md#setdebuglevel) | private | inferred | Sets the debug level. |
| [`luna://com.webos.media/setDebugLevelPipeline`](../services/com.webos.media.md#setdebuglevelpipeline) | private | inferred | Sets the debug level pipeline. |
| [`luna://com.webos.media/setDefaultPrl`](../services/com.webos.media.md#setdefaultprl) | public | inferred | Sets the default prl. |
| [`luna://com.webos.media/setDescriptiveVideoService`](../services/com.webos.media.md#setdescriptivevideoservice) | public | inferred | Sets the descriptive video service. |
| [`luna://com.webos.media/setDialogEnhancement`](../services/com.webos.media.md#setdialogenhancement) | public | inferred | Sets the dialog enhancement. |
| [`luna://com.webos.media/setDisplayWindow`](../services/com.webos.media.md#setdisplaywindow) | unknown | documented | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`luna://com.webos.media/setDrmOperation`](../services/com.webos.media.md#setdrmoperation) | public | inferred | Sets the DRM operation. |
| [`luna://com.webos.media/setMaster`](../services/com.webos.media.md#setmaster) | public | inferred | Sets the master. |
| [`luna://com.webos.media/setMasterClock`](../services/com.webos.media.md#setmasterclock) | public | inferred | Sets the master clock. |
| [`luna://com.webos.media/setMediaStartTime`](../services/com.webos.media.md#setmediastarttime) | public | inferred | Sets the media start time. |
| [`luna://com.webos.media/setMediaStopTime`](../services/com.webos.media.md#setmediastoptime) | public | inferred | Sets the media stop time. |
| [`luna://com.webos.media/setMediaSynchronizerControlTimestamp`](../services/com.webos.media.md#setmediasynchronizercontroltimestamp) | public | inferred | Sets the media synchronizer control timestamp. |
| [`luna://com.webos.media/setMediaSynchronizerOptions`](../services/com.webos.media.md#setmediasynchronizeroptions) | public | inferred | Sets the media synchronizer options. |
| [`luna://com.webos.media/setOwnerPipeline`](../services/com.webos.media.md#setownerpipeline) | public | inferred | Sets the owner pipeline. |
| [`luna://com.webos.media/setPipelineDebugState`](../services/com.webos.media.md#setpipelinedebugstate) | private | inferred | Sets the pipeline debug state. |
| [`luna://com.webos.media/setPlayRate`](../services/com.webos.media.md#setplayrate) | public | documented | Sets the pipeline media play rate. |
| [`luna://com.webos.media/setPriorityLevel`](../services/com.webos.media.md#setprioritylevel) | public | inferred | Sets the priority level. |
| [`luna://com.webos.media/setProperty`](../services/com.webos.media.md#setproperty) | public | inferred | Sets the property. |
| [`luna://com.webos.media/setPurpose`](../services/com.webos.media.md#setpurpose) | public | inferred | Sets the purpose. |
| [`luna://com.webos.media/setResourcePolicyExtraInfo`](../services/com.webos.media.md#setresourcepolicyextrainfo) | public | inferred | Sets the resource policy extra info. |
| [`luna://com.webos.media/setSink`](../services/com.webos.media.md#setsink) | public | inferred | Sets the sink. |
| [`luna://com.webos.media/setSlave`](../services/com.webos.media.md#setslave) | public | inferred | Sets the slave. |
| [`luna://com.webos.media/setSlaveClock`](../services/com.webos.media.md#setslaveclock) | public | inferred | Sets the slave clock. |
| [`luna://com.webos.media/setStreamQuality`](../services/com.webos.media.md#setstreamquality) | public | inferred | Sets the stream quality. |
| [`luna://com.webos.media/setSubtitleBackgroundBlinking`](../services/com.webos.media.md#setsubtitlebackgroundblinking) | public | inferred | Sets the subtitle background blinking. |
| [`luna://com.webos.media/setSubtitleBackgroundColor`](../services/com.webos.media.md#setsubtitlebackgroundcolor) | public | documented | Sets subtitle background color for an open media pipeline |
| [`luna://com.webos.media/setSubtitleBackgroundOpacity`](../services/com.webos.media.md#setsubtitlebackgroundopacity) | public | documented | Sets subtitle background opacity for an open media pipeline |
| [`luna://com.webos.media/setSubtitleCharacterBlinking`](../services/com.webos.media.md#setsubtitlecharacterblinking) | public | inferred | Sets the subtitle character blinking. |
| [`luna://com.webos.media/setSubtitleCharacterColor`](../services/com.webos.media.md#setsubtitlecharactercolor) | public | documented | Sets subtitle character color (similar to setSubtitleColor, different values) for an open media pipeline |
| [`luna://com.webos.media/setSubtitleCharacterEdge`](../services/com.webos.media.md#setsubtitlecharacteredge) | public | inferred | Sets the subtitle character edge. |
| [`luna://com.webos.media/setSubtitleCharacterEdgeColor`](../services/com.webos.media.md#setsubtitlecharacteredgecolor) | public | inferred | Sets the subtitle character edge color. |
| [`luna://com.webos.media/setSubtitleCharacterFont`](../services/com.webos.media.md#setsubtitlecharacterfont) | public | inferred | Sets the subtitle character font. |
| [`luna://com.webos.media/setSubtitleCharacterFontSize`](../services/com.webos.media.md#setsubtitlecharacterfontsize) | public | inferred | Sets the subtitle character font size. |
| [`luna://com.webos.media/setSubtitleCharacterOpacity`](../services/com.webos.media.md#setsubtitlecharacteropacity) | public | documented | Sets subtitle character opacity for an open media pipeline |
| [`luna://com.webos.media/setSubtitleColor`](../services/com.webos.media.md#setsubtitlecolor) | public | documented | Sets subtitle color for an open media pipeline |
| [`luna://com.webos.media/setSubtitleCustomStyleEnable`](../services/com.webos.media.md#setsubtitlecustomstyleenable) | public | inferred | Sets the subtitle custom style enable. |
| [`luna://com.webos.media/setSubtitleEnable`](../services/com.webos.media.md#setsubtitleenable) | public | documented | Shows or hides subtitles for an open media pipeline |
| [`luna://com.webos.media/setSubtitleEncoding`](../services/com.webos.media.md#setsubtitleencoding) | public | documented | Sets subtitle text encoding for an open media pipeline |
| [`luna://com.webos.media/setSubtitleFontSize`](../services/com.webos.media.md#setsubtitlefontsize) | public | documented | Sets subtitle font size for an open media pipeline |
| [`luna://com.webos.media/setSubtitlePosition`](../services/com.webos.media.md#setsubtitleposition) | public | documented | Sets subtitle vertical position for an open media pipeline |
| [`luna://com.webos.media/setSubtitlePositionByPayload`](../services/com.webos.media.md#setsubtitlepositionbypayload) | public | inferred | Sets the subtitle position by payload. |
| [`luna://com.webos.media/setSubtitlePresentationMode`](../services/com.webos.media.md#setsubtitlepresentationmode) | public | inferred | Sets the subtitle presentation mode. |
| [`luna://com.webos.media/setSubtitleSource`](../services/com.webos.media.md#setsubtitlesource) | public | documented | Loads an external subtitle file for an open pipeline |
| [`luna://com.webos.media/setSubtitleSync`](../services/com.webos.media.md#setsubtitlesync) | public | documented | Sets subtitle sync offset in milliseconds for an open media pipeline |
| [`luna://com.webos.media/setSubtitleWindowColor`](../services/com.webos.media.md#setsubtitlewindowcolor) | public | documented | Sets subtitle window color for an open media pipeline |
| [`luna://com.webos.media/setSubtitleWindowOpacity`](../services/com.webos.media.md#setsubtitlewindowopacity) | public | documented | Sets subtitle window opacity for an open media pipeline |
| [`luna://com.webos.media/setUpdateInterval`](../services/com.webos.media.md#setupdateinterval) | public | inferred | Sets the update interval. |
| [`luna://com.webos.media/setUpdateIntervalKV`](../services/com.webos.media.md#setupdateintervalkv) | public | inferred | Sets the update interval KV. |
| [`luna://com.webos.media/setUri`](../services/com.webos.media.md#seturi) | public | inferred | Sets the URI. |
| [`luna://com.webos.media/setVideoInfo`](../services/com.webos.media.md#setvideoinfo) | unknown | documented | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`luna://com.webos.media/setVisibility`](../services/com.webos.media.md#setvisibility) | unknown | documented | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`luna://com.webos.media/setVolume`](../services/com.webos.media.md#setvolume) | public | documented | Sets the volume for the specified media object. Additionally, it specifies the ease (fade-in and fade-out) properties for the media object. |
| [`luna://com.webos.media/setWindowId`](../services/com.webos.media.md#setwindowid) | public | inferred | Sets the window ID. |
| [`luna://com.webos.media/setXlinkResolution`](../services/com.webos.media.md#setxlinkresolution) | public | inferred | Sets the xlink resolution. |
| [`luna://com.webos.media/sourceInfo`](../services/com.webos.media.md#sourceinfo) | unknown | documented | Provides information of the media that has just been loaded. Example { "sourceInfo": { "programs": [{ "audio_stream": 1, "video_stream": 1 }], "seekable": true, |
| [`luna://com.webos.media/startCameraRecord`](../services/com.webos.media.md#startcamerarecord) | public | documented | Starts camera recording. Camera pipeline stores streamed data from the camera and microphone (if required) at the specified location. |
| [`luna://com.webos.media/startRecord`](../services/com.webos.media.md#startrecord) | public | inferred | Starts the record. |
| [`luna://com.webos.media/stopCameraRecord`](../services/com.webos.media.md#stopcamerarecord) | public | documented | Requests media server to stop camera recording and change to the preview state. |
| [`luna://com.webos.media/stopRecord`](../services/com.webos.media.md#stoprecord) | public | inferred | Stops the record. |
| [`luna://com.webos.media/subscribe`](../services/com.webos.media.md#subscribe) | public | documented | Subscribes the media client to receive events from a media pipeline. These events, described in the tables above, allow the media client (generally an app or te |
| [`luna://com.webos.media/switchToAutoLayout`](../services/com.webos.media.md#switchtoautolayout) | public | inferred | Switches the to auto layout. |
| [`luna://com.webos.media/switchToFullScreen`](../services/com.webos.media.md#switchtofullscreen) | unknown | documented | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`luna://com.webos.media/takeCameraSnapshot`](../services/com.webos.media.md#takecamerasnapshot) | public | documented | Captures a frame from the camera preview. |
| [`luna://com.webos.media/takeSnapshot`](../services/com.webos.media.md#takesnapshot) | private | inferred | Handles the take snapshot. |
| [`luna://com.webos.media/testPipelineEvent`](../services/com.webos.media.md#testpipelineevent) | private | inferred | Tests the pipeline event. |
| [`luna://com.webos.media/trackAcquireResultInfo`](../services/com.webos.media.md#trackacquireresultinfo) | private | inferred | Handles the track acquire result info. |
| [`luna://com.webos.media/trackAppProcesses`](../services/com.webos.media.md#trackappprocesses) | public | documented | Subscribes to messages containing the mapping of application ID (appID) and pipeline process ID (PID), i.e. it returns information about which application each  |
| [`luna://com.webos.media/trackAppStatus`](../services/com.webos.media.md#trackappstatus) | private | inferred | Handles the track app status. |
| [`luna://com.webos.media/trackPipelineInfo`](../services/com.webos.media.md#trackpipelineinfo) | public | inferred | Handles the track pipeline info. |
| [`luna://com.webos.media/trackPolicyActionInfo`](../services/com.webos.media.md#trackpolicyactioninfo) | private | inferred | Handles the track policy action info. |
| [`luna://com.webos.media/trackResourcesStatus`](../services/com.webos.media.md#trackresourcesstatus) | private | inferred | Handles the track resources status. |
| [`luna://com.webos.media/tryAcquire`](../services/com.webos.media.md#tryacquire) | public | documented | Tries to acquire resources from mediaserver. Note: This API will not issue policyAction to other pipelines in order to force them to release resources. If there |
| [`luna://com.webos.media/unload`](../services/com.webos.media.md#unload) | public | documented | Unloads the pipeline and releases all AV resources. |
| [`luna://com.webos.media/unloadCompleted`](../services/com.webos.media.md#unloadcompleted) | unknown | documented | The unloadCompleted event is raised when a specific media pipeline has been successfully unloaded. |
| [`luna://com.webos.media/unregisterMedia`](../services/com.webos.media.md#unregistermedia) | unknown | documented | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`luna://com.webos.media/unregisterPipeline`](../services/com.webos.media.md#unregisterpipeline) | public | documented | Unregisters pipeline with Resource Manager. Note: This method is applicable to unmanaged pipelines only. |
| [`luna://com.webos.media/unsubscribe`](../services/com.webos.media.md#unsubscribe) | public | documented | Unsubscribes from media pipeline related events. |
| [`luna://com.webos.media/updateMetadata`](../services/com.webos.media.md#updatemetadata) | public | inferred | Updates the metadata. |
| [`luna://com.webos.media/updatePeriodStart`](../services/com.webos.media.md#updateperiodstart) | public | inferred | Updates the period start. |
| [`luna://com.webos.media/updatePipelineStateEvent`](../services/com.webos.media.md#updatepipelinestateevent) | public | inferred | Updates the pipeline state event. |
| [`luna://com.webos.media/updateResource`](../services/com.webos.media.md#updateresource) | private | inferred | Updates the resource. |
| [`luna://com.webos.media/upSubLevel`](../services/com.webos.media.md#upsublevel) | public | inferred | Handles the up sub level. |
| [`luna://com.webos.media/video`](../services/com.webos.media.md#video) | unknown | documented | Set a video information for either video and audio or video only recording. |
| [`luna://com.webos.media/videoInfo`](../services/com.webos.media.md#videoinfo) | unknown | documented | Provides information related to video. |
| [`luna://com.webos.mediadb/cancelSearch`](../services/com.webos.mediadb.md#cancelsearch) | private | inferred | Cancels the search. |
| [`luna://com.webos.mediadb/internal/scheduledBackup`](../services/com.webos.mediadb.md#internal_scheduledbackup) | private | inferred | Handles the scheduled backup (internal) |
| [`luna://com.webos.mediadb/shardKind`](../services/com.webos.mediadb.md#shardkind) | public | inferred | Handles the shard kind. |
| [`luna://com.webos.pipeline.record/audio`](../services/com.webos.pipeline.record.md#audio) | unknown | documented | Details of audio. |
| [`luna://com.webos.pipeline.record/image`](../services/com.webos.pipeline.record.md#image) | unknown | documented | Details of image. |
| [`luna://com.webos.pipeline.record/pause`](../services/com.webos.pipeline.record.md#pause) | public | documented | Pauses the recording. |
| [`luna://com.webos.pipeline.record/resume`](../services/com.webos.pipeline.record.md#resume) | public | documented | Resumes the recording. |
| [`luna://com.webos.pipeline.record/start`](../services/com.webos.pipeline.record.md#start) | public | documented | Starts recording. |
| [`luna://com.webos.pipeline.record/stop`](../services/com.webos.pipeline.record.md#stop) | public | documented | Stops recording and saves the output to file. |
| [`luna://com.webos.pipeline.record/subscribe`](../services/com.webos.pipeline.record.md#subscribe) | public | documented | Gets a notification when there is an event on pipeline. |
| [`luna://com.webos.pipeline.record/video`](../services/com.webos.pipeline.record.md#video) | unknown | documented | Details of video. |
| [`luna://com.webos.service.airplayadaptor/airplayRestart`](../services/com.webos.service.airplayadaptor.md#airplayrestart) | private | inferred | Handles the airplay restart. |
| [`luna://com.webos.service.airplayadaptor/airplayStart`](../services/com.webos.service.airplayadaptor.md#airplaystart) | public | inferred | Handles the airplay start. |
| [`luna://com.webos.service.airplayadaptor/airplayStatus`](../services/com.webos.service.airplayadaptor.md#airplaystatus) | public | inferred | Handles the airplay status. |
| [`luna://com.webos.service.airplayadaptor/airplayStop`](../services/com.webos.service.airplayadaptor.md#airplaystop) | public | inferred | Handles the airplay stop. |
| [`luna://com.webos.service.airplayadaptor/mfiKeyCheck`](../services/com.webos.service.airplayadaptor.md#mfikeycheck) | private | inferred | Handles the mfi key check. |
| [`luna://com.webos.service.airplayadaptor/mfiKeyLength`](../services/com.webos.service.airplayadaptor.md#mfikeylength) | private | inferred | Handles the mfi key length. |
| [`luna://com.webos.service.airplayadaptor/mfiKeyWrite`](../services/com.webos.service.airplayadaptor.md#mfikeywrite) | private | inferred | Handles the mfi key write. |
| [`luna://com.webos.service.airplayadaptor/test`](../services/com.webos.service.airplayadaptor.md#test) | public | inferred | Tests the airplayadaptor. |
| [`luna://com.webos.service.apiadapter/media_viewer/close`](../services/com.webos.service.apiadapter.md#media_viewer_close) | private | inferred | Closes the apiadapter (media viewer) |
| [`luna://com.webos.service.apiadapter/media_viewer/open`](../services/com.webos.service.apiadapter.md#media_viewer_open) | private | inferred | Opens the apiadapter (media viewer) |
| [`luna://com.webos.service.appcasting/getCommand`](../services/com.webos.service.appcasting.md#getcommand) | ssap | documented | Subscribe to appcasting commands from the TV |
| [`luna://com.webos.service.appcasting/getMediaInfo`](../services/com.webos.service.appcasting.md#getmediainfo) | private | inferred | Returns the media info. |
| [`luna://com.webos.service.appcasting/receiveUIBCEvent`](../services/com.webos.service.appcasting.md#receiveuibcevent) | ssap | documented | Subscribe to UIBC user-input events (screen mirroring) |
| [`luna://com.webos.service.appcasting/sendCommand`](../services/com.webos.service.appcasting.md#sendcommand) | ssap | documented | Send appcasting (LG Cast) command: payload {cmd, service}; cmd values in ConnectSDK: CONNECT, GET_PARAMETER, SET_PARAMETER, PLAY, PAUSE, KEEPALIVE, TEARDOWN (al |
| [`luna://com.webos.service.camera2/getMediaFile`](../services/com.webos.service.camera2.md#getmediafile) | private | inferred | Returns the media file. |
| [`luna://com.webos.service.camera2/getMediaFileList`](../services/com.webos.service.camera2.md#getmediafilelist) | private | inferred | Returns the media file list. |
| [`luna://com.webos.service.camera2/removeMediaFile`](../services/com.webos.service.camera2.md#removemediafile) | private | inferred | Removes the media file. ⚠️ |
| [`luna://com.webos.service.capture/createHandle`](../services/com.webos.service.capture.md#createhandle) | private | inferred | Creates the handle. |
| [`luna://com.webos.service.capture/destroyHandle`](../services/com.webos.service.capture.md#destroyhandle) | private | inferred | Handles the destroy handle. |
| [`luna://com.webos.service.capture/execute`](../services/com.webos.service.capture.md#execute) | private | inferred | Runs the capture. |
| [`luna://com.webos.service.capture/getCapability`](../services/com.webos.service.capture.md#getcapability) | private | inferred | Returns the capability. |
| [`luna://com.webos.service.capture/getClipRegions`](../services/com.webos.service.capture.md#getclipregions) | private | inferred | Returns the clip regions. |
| [`luna://com.webos.service.capture/getOptions`](../services/com.webos.service.capture.md#getoptions) | private | inferred | Returns the options. |
| [`luna://com.webos.service.capture/getProperties`](../services/com.webos.service.capture.md#getproperties) | private | inferred | Returns the properties. |
| [`luna://com.webos.service.capture/isLocked`](../services/com.webos.service.capture.md#islocked) | private | inferred | Reports whether the locked is set. |
| [`luna://com.webos.service.capture/lock`](../services/com.webos.service.capture.md#lock) | private | inferred | Locks the capture. |
| [`luna://com.webos.service.capture/setClipRegions`](../services/com.webos.service.capture.md#setclipregions) | private | inferred | Sets the clip regions. |
| [`luna://com.webos.service.capture/setOptions`](../services/com.webos.service.capture.md#setoptions) | private | inferred | Sets the options. |
| [`luna://com.webos.service.capture/setOutput`](../services/com.webos.service.capture.md#setoutput) | private | inferred | Sets the output. |
| [`luna://com.webos.service.capture/setProperties`](../services/com.webos.service.capture.md#setproperties) | private | inferred | Sets the properties. |
| [`luna://com.webos.service.capture/unlock`](../services/com.webos.service.capture.md#unlock) | private | inferred | Unlocks the capture. |
| [`luna://com.webos.service.capturepermission/checkPermission`](../services/com.webos.service.capturepermission.md#checkpermission) | private | inferred | Checks the permission. |
| [`luna://com.webos.service.capturepermission/setPermission`](../services/com.webos.service.capturepermission.md#setpermission) | private | inferred | Sets the permission. |
| [`luna://com.webos.service.capturetv/info`](../services/com.webos.service.capturetv.md#info) | public | inferred | Handles the info. |
| [`luna://com.webos.service.capturetv/nodeStart`](../services/com.webos.service.capturetv.md#nodestart) | public | inferred | Handles the node start. |
| [`luna://com.webos.service.capturetv/quit`](../services/com.webos.service.capturetv.md#quit) | public | inferred | Quits the capturetv. |
| [`luna://com.webos.service.commercial.scapadapter/video/getMediaID`](../services/com.webos.service.commercial.scapadapter.md#video_getmediaid) | public | inferred | Returns the media ID (video) |
| [`luna://com.webos.service.dmost/call`](../services/com.webos.service.dmost.md#call) | private | inferred | Calls the dmost. |
| [`luna://com.webos.service.dmost/changeDmostState`](../services/com.webos.service.dmost.md#changedmoststate) | private | inferred | Changes the dmost state. |
| [`luna://com.webos.service.dmost/disableChannelPlus`](../services/com.webos.service.dmost.md#disablechannelplus) | public | inferred | Disables the channel plus. |
| [`luna://com.webos.service.dmost/disableLGchannelsByHome`](../services/com.webos.service.dmost.md#disablelgchannelsbyhome) | private | inferred | Disables the l gchannels by home. |
| [`luna://com.webos.service.dmost/enableChannelPlus`](../services/com.webos.service.dmost.md#enablechannelplus) | public | inferred | Enables the channel plus. |
| [`luna://com.webos.service.dmost/getCdpBeaconInfo`](../services/com.webos.service.dmost.md#getcdpbeaconinfo) | private | inferred | Returns the cdp beacon info. |
| [`luna://com.webos.service.dmost/getChannel`](../services/com.webos.service.dmost.md#getchannel) | private | inferred | Returns the channel. |
| [`luna://com.webos.service.dmost/getChannelChangeResult`](../services/com.webos.service.dmost.md#getchannelchangeresult) | private | inferred | Returns the channel change result. |
| [`luna://com.webos.service.dmost/getChannelState`](../services/com.webos.service.dmost.md#getchannelstate) | private | inferred | Returns the channel state. |
| [`luna://com.webos.service.dmost/getClientMacInfo`](../services/com.webos.service.dmost.md#getclientmacinfo) | public | inferred | Returns the client MAC info. |
| [`luna://com.webos.service.dmost/getDmostScreenSaverResponse`](../services/com.webos.service.dmost.md#getdmostscreensaverresponse) | private | inferred | Returns the dmost screen saver response. |
| [`luna://com.webos.service.dmost/getDmostState`](../services/com.webos.service.dmost.md#getdmoststate) | private | inferred | Returns the dmost state. |
| [`luna://com.webos.service.dmost/getHomeAppId`](../services/com.webos.service.dmost.md#gethomeappid) | private | inferred | Returns the home app ID. |
| [`luna://com.webos.service.dmost/isChannelPlusEnabled`](../services/com.webos.service.dmost.md#ischannelplusenabled) | public | inferred | Reports whether the channel plus enabled is set. |
| [`luna://com.webos.service.dmost/isSupportedCountry`](../services/com.webos.service.dmost.md#issupportedcountry) | private | inferred | Reports whether the supported country is set. |
| [`luna://com.webos.service.dmost/isSystemLocked`](../services/com.webos.service.dmost.md#issystemlocked) | public | inferred | Reports whether the system locked is set. |
| [`luna://com.webos.service.dmost/loadData`](../services/com.webos.service.dmost.md#loaddata) | public | inferred | Loads the data. |
| [`luna://com.webos.service.dmost/reportLiveDmostError`](../services/com.webos.service.dmost.md#reportlivedmosterror) | private | inferred | Reports the live dmost error. |
| [`luna://com.webos.service.dmost/saveData`](../services/com.webos.service.dmost.md#savedata) | public | inferred | Saves the data. |
| [`luna://com.webos.service.dmost/setChannel`](../services/com.webos.service.dmost.md#setchannel) | private | inferred | Sets the channel. |
| [`luna://com.webos.service.dmost/setDmostScreenSaverResponse`](../services/com.webos.service.dmost.md#setdmostscreensaverresponse) | private | inferred | Sets the dmost screen saver response. |
| [`luna://com.webos.service.dmost/setPlayerState`](../services/com.webos.service.dmost.md#setplayerstate) | private | inferred | Sets the player state. |
| [`luna://com.webos.service.dmost/setSink`](../services/com.webos.service.dmost.md#setsink) | private | inferred | Sets the sink. |
| [`luna://com.webos.service.dmost/startService`](../services/com.webos.service.dmost.md#startservice) | public | inferred | Starts the service. |
| [`luna://com.webos.service.dmost/stopChannel`](../services/com.webos.service.dmost.md#stopchannel) | private | inferred | Stops the channel. |
| [`luna://com.webos.service.dmost/subscribe`](../services/com.webos.service.dmost.md#subscribe) | private | inferred | Subscribes to the dmost. |
| [`luna://com.webos.service.dmost/unsubscribe`](../services/com.webos.service.dmost.md#unsubscribe) | private | inferred | Unsubscribes from the dmost. |
| [`luna://com.webos.service.dmrsvc/showSubtitle`](../services/com.webos.service.dmrsvc.md#showsubtitle) | private | inferred | Shows the subtitle. |
| [`luna://com.webos.service.gingaccwebservices.test/mediaController`](../services/com.webos.service.gingaccwebservices.test.md#mediacontroller) | public | inferred | Handles the media controller. |
| [`luna://com.webos.service.gingaccwebservices.test/mediaKeySession`](../services/com.webos.service.gingaccwebservices.test.md#mediakeysession) | public | inferred | Handles the media key session. |
| [`luna://com.webos.service.gingaccwebservices/mediaController`](../services/com.webos.service.gingaccwebservices.md#mediacontroller) | public | inferred | Handles the media controller. |
| [`luna://com.webos.service.gingaccwebservices/mediaKeySession`](../services/com.webos.service.gingaccwebservices.md#mediakeysession) | public | inferred | Handles the media key session. |
| [`luna://com.webos.service.mediacontroller/activateMediaSession`](../services/com.webos.service.mediacontroller.md#activatemediasession) | public | documented | Activates the media session. Recommended usage : The API is recommended to be used by the application . Note: Only an active media session can receive the AVRCP |
| [`luna://com.webos.service.mediacontroller/coverArtInfo`](../services/com.webos.service.mediacontroller.md#coverartinfo) | unknown | documented | Details of media cover art. |
| [`luna://com.webos.service.mediacontroller/coverArtPathInfo`](../services/com.webos.service.mediacontroller.md#coverartpathinfo) | unknown | documented | Provides cover art source URI and downloaded path. |
| [`luna://com.webos.service.mediacontroller/deactivateMediaSession`](../services/com.webos.service.mediacontroller.md#deactivatemediasession) | public | documented | Deactivates the media session. Recommended usage : The API is recommended to be used by the application . Note: After the media session is deactivated, the corr |
| [`luna://com.webos.service.mediacontroller/getActiveMediaSessions`](../services/com.webos.service.mediacontroller.md#getactivemediasessions) | public | documented | Gets the list of all the active media sessions. Recommended usage : The API is recommended to be used by the service . |
| [`luna://com.webos.service.mediacontroller/getMediaCoverArtPath`](../services/com.webos.service.mediacontroller.md#getmediacoverartpath) | public | documented | Downloads requested cover art URI and provides downloaded path. |
| [`luna://com.webos.service.mediacontroller/getMediaMetaData`](../services/com.webos.service.mediacontroller.md#getmediametadata) | public | documented | Requests metadata of the media session related to the given mediaId. Recommended usage : The API is recommended to be used by the service . |
| [`luna://com.webos.service.mediacontroller/getMediaPlayStatus`](../services/com.webos.service.mediacontroller.md#getmediaplaystatus) | public | documented | Gets the current playback status of the given mediaId, status such as stopped, paused, playing, buffering. Recommended usage : The API is recommended to be used |
| [`luna://com.webos.service.mediacontroller/getMediaSessionId`](../services/com.webos.service.mediacontroller.md#getmediasessionid) | public | documented | Provides the list of mediaId of all the media sessions for a given app. Recommended usage : The API is recommended to be used by the service . |
| [`luna://com.webos.service.mediacontroller/getMediaSessionInfo`](../services/com.webos.service.mediacontroller.md#getmediasessioninfo) | public | documented | Gets the details of a media session like app id, metadata, volume info. Recommended usage : The API is recommended to be used by the service . |
| [`luna://com.webos.service.mediacontroller/injectMediaKeyEvent`](../services/com.webos.service.mediacontroller.md#injectmediakeyevent) | public | documented | Sets the keyEvent of the given displayId. Recommended usage : The API is recommended to be used by the service . |
| [`luna://com.webos.service.mediacontroller/mediaMetaData`](../services/com.webos.service.mediacontroller.md#mediametadata) | unknown | documented | Contains the mediaMetaData information. |
| [`luna://com.webos.service.mediacontroller/mediaSession`](../services/com.webos.service.mediacontroller.md#mediasession) | unknown | documented | Contains the details about mediaId, appId, and metaData. |
| [`luna://com.webos.service.mediacontroller/receiveMediaPlaybackInfo`](../services/com.webos.service.mediacontroller.md#receivemediaplaybackinfo) | public | documented | Subscribes to receive the play status, mute status, play position, mediaMetaData information. Recommended usage : The API is recommended to be used by the servi |
| [`luna://com.webos.service.mediacontroller/registerMediaSession`](../services/com.webos.service.mediacontroller.md#registermediasession) | public | documented | Registers media sessions, subscribes to receive AVRCP key events. Recommended usage : The API is recommended to be used by the application . |
| [`luna://com.webos.service.mediacontroller/setMediaCoverArt`](../services/com.webos.service.mediacontroller.md#setmediacoverart) | public | documented | Sets the cover art data for media session. |
| [`luna://com.webos.service.mediacontroller/setMediaMetaData`](../services/com.webos.service.mediacontroller.md#setmediametadata) | public | documented | Sets the metadata information for the session. Example: title, artist. Recommended usage : The API is recommended to be used by the application . |
| [`luna://com.webos.service.mediacontroller/setMediaMuteStatus`](../services/com.webos.service.mediacontroller.md#setmediamutestatus) | public | documented | Sets the status of the media session. Recommended usage : The API is recommended to be used by the application . |
| [`luna://com.webos.service.mediacontroller/setMediaPlayPosition`](../services/com.webos.service.mediacontroller.md#setmediaplayposition) | public | documented | Sets the play position for the media session. Recommended usage : The API is recommended to be used by the application . |
| [`luna://com.webos.service.mediacontroller/setMediaPlayStatus`](../services/com.webos.service.mediacontroller.md#setmediaplaystatus) | public | documented | Sets the playStatus for the session. Example: play, pause, stopped and so on. Recommended usage : The API is recommended to be used by the application . |
| [`luna://com.webos.service.mediacontroller/setSupportedActions`](../services/com.webos.service.mediacontroller.md#setsupportedactions) | public | documented | Sets the list of supported media actions. |
| [`luna://com.webos.service.mediacontroller/sizes`](../services/com.webos.service.mediacontroller.md#sizes) | unknown | documented | Provides possible sizes for each cover art |
| [`luna://com.webos.service.mediacontroller/unregisterMediaSession`](../services/com.webos.service.mediacontroller.md#unregistermediasession) | public | documented | Unsubscribes and unregisters the media session. Recommended usage : The API is recommended to be used by the application . |
| [`luna://com.webos.service.mediaindexer/AudioList`](../services/com.webos.service.mediaindexer.md#audiolist) | unknown | documented | Contains the detailed information about the audio files. |
| [`luna://com.webos.service.mediaindexer/AudioMetadata`](../services/com.webos.service.mediaindexer.md#audiometadata) | unknown | documented | Contains the information about the AudioList, and also provides detailed information that are not included in AudioList. |
| [`luna://com.webos.service.mediaindexer/deviceList`](../services/com.webos.service.mediaindexer.md#devicelist) | unknown | documented | Provides the detailed information about the specific device connected to the media indexer service. |
| [`luna://com.webos.service.mediaindexer/getAudioList`](../services/com.webos.service.mediaindexer.md#getaudiolist) | public | documented | Gets the available audio file list included in attached devices. Note : If the uri is specified, the audio file list for specified uri is provided. Else the aud |
| [`luna://com.webos.service.mediaindexer/getAudioMetadata`](../services/com.webos.service.mediaindexer.md#getaudiometadata) | public | documented | Gets the detailed meta data information of the specified uri for the given audio file. |
| [`luna://com.webos.service.mediaindexer/getDeviceList`](../services/com.webos.service.mediaindexer.md#getdevicelist) | public | documented | Gets the list of all the attached storage devices. Note : The list can contain devices that are currently attached or the devices attached in the past. |
| [`luna://com.webos.service.mediaindexer/getImageList`](../services/com.webos.service.mediaindexer.md#getimagelist) | public | documented | Gets all the available image file list included in the attached devices. Note : If the uri is specified, the image file list for specified uri is provided. Else |
| [`luna://com.webos.service.mediaindexer/getImageMetadata`](../services/com.webos.service.mediaindexer.md#getimagemetadata) | public | documented | Gets the detailed meta data information of specified uri of the image file. |
| [`luna://com.webos.service.mediaindexer/getMediaDbPermission`](../services/com.webos.service.mediaindexer.md#getmediadbpermission) | public | documented | Enables the downloadable services or apps (built-in or downloadable) to acquire, access permission of the DB managed by the media indexer service. |
| [`luna://com.webos.service.mediaindexer/getPlugin`](../services/com.webos.service.mediaindexer.md#getplugin) | public | documented | Requests to retrieve the plugin from the plugin factory and to then activate the plugin. |
| [`luna://com.webos.service.mediaindexer/getPluginList`](../services/com.webos.service.mediaindexer.md#getpluginlist) | public | documented | Gets a list of available plugins. |
| [`luna://com.webos.service.mediaindexer/getVideoList`](../services/com.webos.service.mediaindexer.md#getvideolist) | public | documented | Gets the available video files list included in the attached devices. Note : If the uri is specified, the video file list for specified uri is provided. Else th |
| [`luna://com.webos.service.mediaindexer/getVideoMetadata`](../services/com.webos.service.mediaindexer.md#getvideometadata) | public | documented | Gets the detailed meta data information for the specified uri of the video file. |
| [`luna://com.webos.service.mediaindexer/ImageList`](../services/com.webos.service.mediaindexer.md#imagelist) | unknown | documented | Detailed information about video files. |
| [`luna://com.webos.service.mediaindexer/ImageMetadata`](../services/com.webos.service.mediaindexer.md#imagemetadata) | unknown | documented | Contains the information in the ImageList, and also provides detailed information that are not included in ImageList. |
| [`luna://com.webos.service.mediaindexer/pluginList`](../services/com.webos.service.mediaindexer.md#pluginlist) | unknown | documented | Defines the supported device types by the media indexer service. |
| [`luna://com.webos.service.mediaindexer/putPlugin`](../services/com.webos.service.mediaindexer.md#putplugin) | public | documented | Requests to add the plugin to the plugin factory. |
| [`luna://com.webos.service.mediaindexer/requestDelete`](../services/com.webos.service.mediaindexer.md#requestdelete) | public | documented | Requests deletion of media item from media DB connector. |
| [`luna://com.webos.service.mediaindexer/requestMediaScan`](../services/com.webos.service.mediaindexer.md#requestmediascan) | public | documented | Scans device for media item. |
| [`luna://com.webos.service.mediaindexer/runDetect`](../services/com.webos.service.mediaindexer.md#rundetect) | public | documented | Requests to check plugins that are available in the known devices databases and then enables the device detection to notify the observer. |
| [`luna://com.webos.service.mediaindexer/stopDetect`](../services/com.webos.service.mediaindexer.md#stopdetect) | public | documented | Requests not to detect the plugin in database for the known device and do not enable the device detection to notify the observer. |
| [`luna://com.webos.service.mediaindexer/VideoList`](../services/com.webos.service.mediaindexer.md#videolist) | unknown | documented | Contains the detailed information about the video files. |
| [`luna://com.webos.service.mediaindexer/VideoMetadata`](../services/com.webos.service.mediaindexer.md#videometadata) | unknown | documented | Contains the information about the VideoList, provides information about the video files that are not included in the VideoList. |
| [`luna://com.webos.service.mediarecorder/close`](../services/com.webos.service.mediarecorder.md#close) | public | documented | Closes the recorder and releases all resources. |
| [`luna://com.webos.service.mediarecorder/open`](../services/com.webos.service.mediarecorder.md#open) | public | documented | Opens a new recorder. Returns a unique ID to the client that is used for subsequent operations to control the recorder. |
| [`luna://com.webos.service.mediarecorder/pause`](../services/com.webos.service.mediarecorder.md#pause) | public | documented | Pauses recording. Note: Call this API after start() but before stop() or resume() . |
| [`luna://com.webos.service.mediarecorder/resume`](../services/com.webos.service.mediarecorder.md#resume) | public | documented | Resumes recording. Note: Call this API after pause() but before stop(). |
| [`luna://com.webos.service.mediarecorder/setAudioFormat`](../services/com.webos.service.mediarecorder.md#setaudioformat) | public | documented | Sets the audio format. Note: Call this API after open() but before start() . |
| [`luna://com.webos.service.mediarecorder/setOutputFile`](../services/com.webos.service.mediarecorder.md#setoutputfile) | public | documented | Sets the path to store the streaming data. The default file name is of the format "RecordDDMMYYYY-HHMMSS", where DDMMYYYY-HHMMSS is current date and time. Call  |
| [`luna://com.webos.service.mediarecorder/setOutputFormat`](../services/com.webos.service.mediarecorder.md#setoutputformat) | public | documented | Sets the specified format to store the streaming data. Note: Call this API after open() but before start() . |
| [`luna://com.webos.service.mediarecorder/setVideoFormat`](../services/com.webos.service.mediarecorder.md#setvideoformat) | public | documented | Sets the video format. Note: Call this API after open() but before start() . |
| [`luna://com.webos.service.mediarecorder/start`](../services/com.webos.service.mediarecorder.md#start) | public | documented | Starts recording. |
| [`luna://com.webos.service.mediarecorder/stop`](../services/com.webos.service.mediarecorder.md#stop) | public | documented | Stops recording and saves the output to file. |
| [`luna://com.webos.service.mediarecorder/takeSnapshot`](../services/com.webos.service.mediarecorder.md#takesnapshot) | public | documented | Takes one video snapshot during recording and save the image to a file. The default file name is of the format "CaptureDDMMYYYY-HHMMSS", where DDMMYYYY-HHMMSS i |
| [`luna://com.webos.service.mediasync/setupData`](../services/com.webos.service.mediasync.md#setupdata) | public | inferred | Handles the setup data. |
| [`luna://com.webos.service.miracast/close`](../services/com.webos.service.miracast.md#close) | ssap | documented | Close Miracast session |
| [`luna://com.webos.service.miracast/get3dMediaInfo`](../services/com.webos.service.miracast.md#get3dmediainfo) | private | inferred | Returns the 3 d media info. |
| [`luna://com.webos.service.miracast/getConnectionStatus`](../services/com.webos.service.miracast.md#getconnectionstatus) | ssap | documented | Get Miracast connection status |
| [`luna://com.webos.service.miracast/getMediaInfo`](../services/com.webos.service.miracast.md#getmediainfo) | private | inferred | Returns the media info. |
| [`luna://com.webos.service.miracast/getP2pState`](../services/com.webos.service.miracast.md#getp2pstate) | ssap | documented | Get Miracast P2P state |
| [`luna://com.webos.service.miracast/setUACSettings`](../services/com.webos.service.miracast.md#setuacsettings) | ssap | documented | Set Miracast UAC settings |
| [`luna://com.webos.service.miracast/uibc/getUibcKeyEvent`](../services/com.webos.service.miracast.md#uibc_getuibckeyevent) | ssap | documented | Get Miracast UIBC key event |
| [`luna://com.webos.service.multiviewcontroller/getMediaControlStatus`](../services/com.webos.service.multiviewcontroller.md#getmediacontrolstatus) | public | inferred | Returns the media control status. |
| [`luna://com.webos.service.multiviewcontroller/setMediaContentInfo`](../services/com.webos.service.multiviewcontroller.md#setmediacontentinfo) | public | inferred | Sets the media content info. |
| [`luna://com.webos.service.mvpd/notifyMediaId`](../services/com.webos.service.mvpd.md#notifymediaid) | public | inferred | Notifies of the media ID. |
| [`luna://com.webos.service.nais/setSubtitleDisplay`](../services/com.webos.service.nais.md#setsubtitledisplay) | public | inferred | Sets the subtitle display. |
| [`luna://com.webos.service.nais/setSubtitleEnable`](../services/com.webos.service.nais.md#setsubtitleenable) | public | inferred | Sets the subtitle enable. |
| [`luna://com.webos.service.nais/setSubtitleLanguage`](../services/com.webos.service.nais.md#setsubtitlelanguage) | public | inferred | Sets the subtitle language. |
| [`luna://com.webos.service.photorenderer/capturePhoto`](../services/com.webos.service.photorenderer.md#capturephoto) | private | inferred | Captures the photo. |
| [`luna://com.webos.service.photorenderer/close`](../services/com.webos.service.photorenderer.md#close) | private | inferred | Closes the photorenderer. |
| [`luna://com.webos.service.photorenderer/drawPhoto`](../services/com.webos.service.photorenderer.md#drawphoto) | private | inferred | Handles the draw photo. |
| [`luna://com.webos.service.photorenderer/get3DChangeable`](../services/com.webos.service.photorenderer.md#get3dchangeable) | private | inferred | Returns the 3 d changeable. |
| [`luna://com.webos.service.photorenderer/open`](../services/com.webos.service.photorenderer.md#open) | private | inferred | Opens the photorenderer. |
| [`luna://com.webos.service.photorenderer/pause`](../services/com.webos.service.photorenderer.md#pause) | private | inferred | Pauses the photorenderer. |
| [`luna://com.webos.service.photorenderer/play`](../services/com.webos.service.photorenderer.md#play) | private | inferred | Plays the photorenderer. |
| [`luna://com.webos.service.photorenderer/resume`](../services/com.webos.service.photorenderer.md#resume) | private | inferred | Resumes the photorenderer. |
| [`luna://com.webos.service.photorenderer/set3DChangeable`](../services/com.webos.service.photorenderer.md#set3dchangeable) | private | inferred | Sets the 3 d changeable. |
| [`luna://com.webos.service.photorenderer/setColorFilterProperty`](../services/com.webos.service.photorenderer.md#setcolorfilterproperty) | private | inferred | Sets the color filter property. |
| [`luna://com.webos.service.photorenderer/setFilePath`](../services/com.webos.service.photorenderer.md#setfilepath) | private | inferred | Sets the file path. |
| [`luna://com.webos.service.photorenderer/setRotationProperty`](../services/com.webos.service.photorenderer.md#setrotationproperty) | private | inferred | Sets the rotation property. |
| [`luna://com.webos.service.photorenderer/setScaleProperty`](../services/com.webos.service.photorenderer.md#setscaleproperty) | private | inferred | Sets the scale property. |
| [`luna://com.webos.service.photorenderer/setThumbnailProperty`](../services/com.webos.service.photorenderer.md#setthumbnailproperty) | private | inferred | Sets the thumbnail property. |
| [`luna://com.webos.service.photorenderer/setTransitionProperty`](../services/com.webos.service.photorenderer.md#settransitionproperty) | private | inferred | Sets the transition property. |
| [`luna://com.webos.service.photorenderer/setTranslationProperty`](../services/com.webos.service.photorenderer.md#settranslationproperty) | private | inferred | Sets the translation property. |
| [`luna://com.webos.service.photorenderer/setWindow`](../services/com.webos.service.photorenderer.md#setwindow) | private | inferred | Sets the window. |
| [`luna://com.webos.service.photorenderer/subscribe`](../services/com.webos.service.photorenderer.md#subscribe) | private | inferred | Subscribes to the photorenderer. |
| [`luna://com.webos.service.remotediag/notifyMediaInfo`](../services/com.webos.service.remotediag.md#notifymediainfo) | private | inferred | Notifies of the media info. |
| [`luna://com.webos.service.remotediag/requestMediaInfo`](../services/com.webos.service.remotediag.md#requestmediainfo) | private | inferred | Requests the media info. |
| [`luna://com.webos.service.remotediag/subscribeMediaInfo`](../services/com.webos.service.remotediag.md#subscribemediainfo) | private | inferred | Subscribes to the media info. |
| [`luna://com.webos.service.systemservice/erase/EraseMedia`](../services/com.webos.service.systemservice.md#erase_erasemedia) | private | inferred | Erases the media (erase) ⚠️ |
| [`luna://com.webos.service.tv.capture/createHandle`](../services/com.webos.service.tv.capture.md#createhandle) | private | documented | Screen/video capture service method createHandle (name from community research) |
| [`luna://com.webos.service.tv.capture/destroyHandle`](../services/com.webos.service.tv.capture.md#destroyhandle) | private | documented | Screen/video capture service method destroyHandle (name from community research) |
| [`luna://com.webos.service.tv.capture/execute`](../services/com.webos.service.tv.capture.md#execute) | private | documented | Screen/video capture service method execute (name from community research) |
| [`luna://com.webos.service.tv.capture/getClipRegions`](../services/com.webos.service.tv.capture.md#getclipregions) | private | documented | Screen/video capture service method getClipRegions (name from community research) |
| [`luna://com.webos.service.tv.capture/getOptions`](../services/com.webos.service.tv.capture.md#getoptions) | private | documented | Screen/video capture service method getOptions (name from community research) |
| [`luna://com.webos.service.tv.capture/getProperties`](../services/com.webos.service.tv.capture.md#getproperties) | private | documented | Screen/video capture service method getProperties (name from community research) |
| [`luna://com.webos.service.tv.capture/isLocked`](../services/com.webos.service.tv.capture.md#islocked) | private | documented | Screen/video capture service method isLocked (name from community research) |
| [`luna://com.webos.service.tv.capture/lock`](../services/com.webos.service.tv.capture.md#lock) | private | documented | Screen/video capture service method lock (name from community research) |
| [`luna://com.webos.service.tv.capture/setClipRegions`](../services/com.webos.service.tv.capture.md#setclipregions) | private | documented | Screen/video capture service method setClipRegions (name from community research) |
| [`luna://com.webos.service.tv.capture/setOptions`](../services/com.webos.service.tv.capture.md#setoptions) | private | documented | Screen/video capture service method setOptions (name from community research) |
| [`luna://com.webos.service.tv.capture/setOutput`](../services/com.webos.service.tv.capture.md#setoutput) | private | documented | Screen/video capture service method setOutput (name from community research) |
| [`luna://com.webos.service.tv.capture/setProperties`](../services/com.webos.service.tv.capture.md#setproperties) | private | documented | Screen/video capture service method setProperties (name from community research) |
| [`luna://com.webos.service.tv.capture/unlock`](../services/com.webos.service.tv.capture.md#unlock) | private | documented | Screen/video capture service method unlock (name from community research) |
| [`luna://com.webos.service.tv.dvr/device/checkStoragePerformance`](../services/com.webos.service.tv.dvr.md#device_checkstorageperformance) | private | documented | DVR/PVR method: device/checkStoragePerformance |
| [`luna://com.webos.service.tv.dvr/device/isRecordableStorage`](../services/com.webos.service.tv.dvr.md#device_isrecordablestorage) | private | documented | DVR/PVR method: device/isRecordableStorage |
| [`luna://com.webos.service.tv.dvr/play/openRecordingPlayInstance`](../services/com.webos.service.tv.dvr.md#play_openrecordingplayinstance) | private | documented | DVR/PVR method: play/openRecordingPlayInstance |
| [`luna://com.webos.service.tv.dvr/play/seek`](../services/com.webos.service.tv.dvr.md#play_seek) | private | documented | DVR/PVR method: play/seek |
| [`luna://com.webos.service.tv.dvr/play/setPlayRate`](../services/com.webos.service.tv.dvr.md#play_setplayrate) | private | documented | DVR/PVR method: play/setPlayRate |
| [`luna://com.webos.service.tv.dvr/private/deleteRecordFile`](../services/com.webos.service.tv.dvr.md#private_deleterecordfile) | private | documented | DVR/PVR method: private/deleteRecordFile |
| [`luna://com.webos.service.tv.dvr/private/getRecordFileList`](../services/com.webos.service.tv.dvr.md#private_getrecordfilelist) | private | documented | DVR/PVR method: private/getRecordFileList |
| [`luna://com.webos.service.tv.dvr/private/getThumbnail`](../services/com.webos.service.tv.dvr.md#private_getthumbnail) | private | documented | DVR/PVR method: private/getThumbnail |
| [`luna://com.webos.service.tv.dvr/record/changeToSeriesRecord`](../services/com.webos.service.tv.dvr.md#record_changetoseriesrecord) | private | documented | DVR/PVR method: record/changeToSeriesRecord |
| [`luna://com.webos.service.tv.dvr/record/openTimeshiftPlayInstance`](../services/com.webos.service.tv.dvr.md#record_opentimeshiftplayinstance) | private | documented | DVR/PVR method: record/openTimeshiftPlayInstance |
| [`luna://com.webos.service.tv.dvr/record/pauseTimeshiftBuffering`](../services/com.webos.service.tv.dvr.md#record_pausetimeshiftbuffering) | private | documented | DVR/PVR method: record/pauseTimeshiftBuffering |
| [`luna://com.webos.service.tv.dvr/record/setRecordingEndTime`](../services/com.webos.service.tv.dvr.md#record_setrecordingendtime) | private | documented | DVR/PVR method: record/setRecordingEndTime |
| [`luna://com.webos.service.tv.dvr/record/startExternalInputRecord`](../services/com.webos.service.tv.dvr.md#record_startexternalinputrecord) | private | documented | Records an external (HDMI/AV) input to USB (subject to HDCP on protected sources) |
| [`luna://com.webos.service.tv.dvr/record/startManualRecord`](../services/com.webos.service.tv.dvr.md#record_startmanualrecord) | private | documented | DVR/PVR method: record/startManualRecord |
| [`luna://com.webos.service.tv.dvr/record/startProgramRecord`](../services/com.webos.service.tv.dvr.md#record_startprogramrecord) | private | documented | DVR/PVR method: record/startProgramRecord |
| [`luna://com.webos.service.tv.dvr/record/startScheduleRecord`](../services/com.webos.service.tv.dvr.md#record_startschedulerecord) | private | documented | DVR/PVR method: record/startScheduleRecord |
| [`luna://com.webos.service.tv.dvr/record/startTimeshiftBuffering`](../services/com.webos.service.tv.dvr.md#record_starttimeshiftbuffering) | private | documented | DVR/PVR method: record/startTimeshiftBuffering |
| [`luna://com.webos.service.tv.dvr/record/stopRecord`](../services/com.webos.service.tv.dvr.md#record_stoprecord) | private | documented | DVR/PVR method: record/stopRecord |
| [`luna://com.webos.service.utp.subtitle/disableAdccPes`](../services/com.webos.service.utp.subtitle.md#disableadccpes) | private | inferred | Disables the adcc pes. |
| [`luna://com.webos.service.utp.subtitle/disablePreview`](../services/com.webos.service.utp.subtitle.md#disablepreview) | private | inferred | Disables the preview. |
| [`luna://com.webos.service.utp.subtitle/disableSubtitle`](../services/com.webos.service.utp.subtitle.md#disablesubtitle) | public | inferred | Disables the subtitle. |
| [`luna://com.webos.service.utp.subtitle/disableSubtPes`](../services/com.webos.service.utp.subtitle.md#disablesubtpes) | private | inferred | Disables the subt pes. |
| [`luna://com.webos.service.utp.subtitle/enableAdccPes`](../services/com.webos.service.utp.subtitle.md#enableadccpes) | private | inferred | Enables the adcc pes. |
| [`luna://com.webos.service.utp.subtitle/enablePreview`](../services/com.webos.service.utp.subtitle.md#enablepreview) | private | inferred | Enables the preview. |
| [`luna://com.webos.service.utp.subtitle/enableSubtitle`](../services/com.webos.service.utp.subtitle.md#enablesubtitle) | public | inferred | Enables the subtitle. |
| [`luna://com.webos.service.utp.subtitle/enableSubtPes`](../services/com.webos.service.utp.subtitle.md#enablesubtpes) | private | inferred | Enables the subt pes. |
| [`luna://com.webos.service.utp.subtitle/getCaptionPosition`](../services/com.webos.service.utp.subtitle.md#getcaptionposition) | private | inferred | Returns the caption position. |
| [`luna://com.webos.service.utp.subtitle/getCurrentSubtitle`](../services/com.webos.service.utp.subtitle.md#getcurrentsubtitle) | public | inferred | Returns the current subtitle. |
| [`luna://com.webos.service.utp.subtitle/getCurrentSubtitleState`](../services/com.webos.service.utp.subtitle.md#getcurrentsubtitlestate) | private | inferred | Returns the current subtitle state. |
| [`luna://com.webos.service.utp.subtitle/getRatingInfo`](../services/com.webos.service.utp.subtitle.md#getratinginfo) | public | inferred | Returns the rating info. |
| [`luna://com.webos.service.utp.subtitle/getSubtitleList`](../services/com.webos.service.utp.subtitle.md#getsubtitlelist) | public | inferred | Returns the subtitle list. |
| [`luna://com.webos.service.utp.subtitle/getSubtitleState`](../services/com.webos.service.utp.subtitle.md#getsubtitlestate) | public | inferred | Returns the subtitle state. |
| [`luna://com.webos.service.utp.subtitle/offSubtitleDisplay`](../services/com.webos.service.utp.subtitle.md#offsubtitledisplay) | private | inferred | Handles the off subtitle display. |
| [`luna://com.webos.service.utp.subtitle/onSubtitleDisplay`](../services/com.webos.service.utp.subtitle.md#onsubtitledisplay) | private | inferred | Event handler: fires on the subtitle display. |
| [`luna://com.webos.service.utp.subtitle/pipelineShared`](../services/com.webos.service.utp.subtitle.md#pipelineshared) | private | inferred | Handles the pipeline shared. |
| [`luna://com.webos.service.utp.subtitle/sendPesDvbSubtitle`](../services/com.webos.service.utp.subtitle.md#sendpesdvbsubtitle) | private | inferred | Sends the pes DVB subtitle. |
| [`luna://com.webos.service.utp.subtitle/setCaptionPosition`](../services/com.webos.service.utp.subtitle.md#setcaptionposition) | private | inferred | Sets the caption position. |
| [`luna://com.webos.service.utp.subtitle/setSubtitle`](../services/com.webos.service.utp.subtitle.md#setsubtitle) | public | inferred | Sets the subtitle. |
| [`luna://com.webos.service.wowplay/bleConnect`](../services/com.webos.service.wowplay.md#bleconnect) | private | inferred | Handles the ble connect. |
| [`luna://com.webos.service.wowplay/bleDisconnect`](../services/com.webos.service.wowplay.md#bledisconnect) | private | inferred | Handles the ble disconnect. |
| [`luna://com.webos.service.wowplay/cancelDiscovery`](../services/com.webos.service.wowplay.md#canceldiscovery) | private | inferred | Cancels the discovery. |
| [`luna://com.webos.service.wowplay/getCalibrationStatus`](../services/com.webos.service.wowplay.md#getcalibrationstatus) | private | inferred | Returns the calibration status. |
| [`luna://com.webos.service.wowplay/getLatestConnectionInfo`](../services/com.webos.service.wowplay.md#getlatestconnectioninfo) | private | inferred | Returns the latest connection info. |
| [`luna://com.webos.service.wowplay/getProperty`](../services/com.webos.service.wowplay.md#getproperty) | private | inferred | Returns the property. |
| [`luna://com.webos.service.wowplay/p2pConnect`](../services/com.webos.service.wowplay.md#p2pconnect) | private | inferred | Handles the p 2 p connect. |
| [`luna://com.webos.service.wowplay/p2pDisconnect`](../services/com.webos.service.wowplay.md#p2pdisconnect) | private | inferred | Handles the p 2 p disconnect. |
| [`luna://com.webos.service.wowplay/p2pSearch`](../services/com.webos.service.wowplay.md#p2psearch) | private | inferred | Handles the p 2 p search. |
| [`luna://com.webos.service.wowplay/p2pStopSearch`](../services/com.webos.service.wowplay.md#p2pstopsearch) | private | inferred | Handles the p 2 p stop search. |
| [`luna://com.webos.service.wowplay/pause`](../services/com.webos.service.wowplay.md#pause) | private | inferred | Pauses the wowplay. |
| [`luna://com.webos.service.wowplay/play`](../services/com.webos.service.wowplay.md#play) | private | inferred | Plays the wowplay. |
| [`luna://com.webos.service.wowplay/playRingToneSound`](../services/com.webos.service.wowplay.md#playringtonesound) | private | inferred | Plays the ring tone sound. |
| [`luna://com.webos.service.wowplay/removePairedDevice`](../services/com.webos.service.wowplay.md#removepaireddevice) | private | inferred | Removes the paired device. ⚠️ |
| [`luna://com.webos.service.wowplay/setProperty`](../services/com.webos.service.wowplay.md#setproperty) | private | inferred | Sets the property. |
| [`luna://com.webos.service.wowplay/startCalibration`](../services/com.webos.service.wowplay.md#startcalibration) | private | inferred | Starts the calibration. |
| [`luna://com.webos.service.wowplay/startDiscovery`](../services/com.webos.service.wowplay.md#startdiscovery) | private | inferred | Starts the discovery. |
| [`luna://com.webos.service.wowplay/stopCalibration`](../services/com.webos.service.wowplay.md#stopcalibration) | private | inferred | Stops the calibration. |
| [`ssap://media.controls/fastForward`](../services/ssap_media.controls.md#fastforward) | ssap | documented | Media control: fastForward |
| [`ssap://media.controls/pause`](../services/ssap_media.controls.md#pause) | ssap | documented | Media control: pause |
| [`ssap://media.controls/play`](../services/ssap_media.controls.md#play) | ssap | documented | Media control: play |
| [`ssap://media.controls/rewind`](../services/ssap_media.controls.md#rewind) | ssap | documented | Media control: rewind |
| [`ssap://media.controls/stop`](../services/ssap_media.controls.md#stop) | ssap | documented | Media control: stop |
| [`ssap://media.viewer/close`](../services/ssap_media.viewer.md#close) | ssap | documented | Close media viewer |
| [`ssap://media.viewer/open`](../services/ssap_media.viewer.md#open) | ssap | documented | Open media viewer with a URL |
