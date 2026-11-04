# Display / Panel

65 methods.  [Back to index](../../README.md#categories)

| URI | Access | Description |
|---|---|---|
| [`luna://com.webos.service.avoutput/audio/connect`](../services/com.webos.service.avoutput.md#audio_connect) | public | Connects audio source to audio sink. Note : In case it's already connected, will disconnect from previous sink automatically. |
| [`luna://com.webos.service.avoutput/audio/disconnect`](../services/com.webos.service.avoutput.md#audio_disconnect) | public | Disconnect from audio sink. No change is done if not connected. |
| [`luna://com.webos.service.avoutput/audio/getStatus`](../services/com.webos.service.avoutput.md#audio_getstatus) | public | Lists all video and audio sinks and their status. |
| [`luna://com.webos.service.avoutput/audio/mute`](../services/com.webos.service.avoutput.md#audio_mute) | public | Stop/start outputting data to audio sink. This allows seamless disconnect and connect and avoids outputting invalid data while reconnection is in progress. |
| [`luna://com.webos.service.avoutput/audio/volume/down`](../services/com.webos.service.avoutput.md#audio_volume_down) | public | Decreases the volume. |
| [`luna://com.webos.service.avoutput/audio/volume/set`](../services/com.webos.service.avoutput.md#audio_volume_set) | public | Set volume to a numerical value. |
| [`luna://com.webos.service.avoutput/audio/volume/up`](../services/com.webos.service.avoutput.md#audio_volume_up) | public | Increases the volume. |
| [`luna://com.webos.service.avoutput/video/blankVideo`](../services/com.webos.service.avoutput.md#video_blankvideo) | public | Stop/start data output to video sink. This allows seamless disconnect and connect and avoids invalid data output while reconnection is in progress. |
| [`luna://com.webos.service.avoutput/video/connect`](../services/com.webos.service.avoutput.md#video_connect) | public | Connects a video source to a video sink |
| [`luna://com.webos.service.avoutput/video/disconnect`](../services/com.webos.service.avoutput.md#video_disconnect) | public | Disconnects video from sink. |
| [`luna://com.webos.service.avoutput/video/display/getOutputCapabilities`](../services/com.webos.service.avoutput.md#video_display_getoutputcapabilities) | public | Helper method to query the set video limits |
| [`luna://com.webos.service.avoutput/video/display/setCompositing`](../services/com.webos.service.avoutput.md#video_display_setcompositing) | public | Set compositing parameters for the video sinks. This maps directly to adapter call and changes the compositing parameters for both video outputs simultaneously. |
| [`luna://com.webos.service.avoutput/video/display/setDisplayWindow`](../services/com.webos.service.avoutput.md#video_display_setdisplaywindow) | public | Setup video output location on the screen for specified sink. Note : Video is actually placed only if setVideoMediaData has been called. Otherwise the values ar |
| [`luna://com.webos.service.avoutput/video/getStatus`](../services/com.webos.service.avoutput.md#video_getstatus) | public | Lists all video sinks and their status. |
| [`luna://com.webos.service.avoutput/video/setMediaData`](../services/com.webos.service.avoutput.md#video_setmediadata) | public | Sets video media data needed for playback. |
| [`luna://com.webos.service.avoutput/VideoRect`](../services/com.webos.service.avoutput.md#videorect) | unknown | Object to represent the video window coordinates. |
| [`luna://com.webos.service.avoutput/VideoSize`](../services/com.webos.service.avoutput.md#videosize) | unknown | Object to represent video size. |
| [`luna://com.webos.service.capture/executeOneShot`](../services/com.webos.service.capture.md#executeoneshot) | ssap | Take a screenshot (SSAP alias: ssap://tv/executeOneShot) |
| [`luna://com.webos.service.oledepl/getGlobalStressReduction`](../services/com.webos.service.oledepl.md#getglobalstressreduction) | private | OLED care read-only query |
| [`luna://com.webos.service.oledepl/getOledPanelUTT`](../services/com.webos.service.oledepl.md#getoledpanelutt) | private | OLED care read-only query |
| [`luna://com.webos.service.oledepl/getPanelTemperature`](../services/com.webos.service.oledepl.md#getpaneltemperature) | private | OLED care read-only query |
| [`luna://com.webos.service.oledepl/getPixelRefresherInfoList`](../services/com.webos.service.oledepl.md#getpixelrefresherinfolist) | private | OLED care read-only query |
| [`luna://com.webos.service.oledepl/isPixelRefresherCondition`](../services/com.webos.service.oledepl.md#ispixelrefreshercondition) | private | Queries OLED pixel refresher condition (used by home-chooser e2e to check panel state) |
| [`luna://com.webos.service.oledepl/setGlobalStressReduction`](../services/com.webos.service.oledepl.md#setglobalstressreduction) | private | Toggles OLED GSR (In-Start service menu option) ⚠️ |
| [`luna://com.webos.service.oledepl/setTemporalPeakControl`](../services/com.webos.service.oledepl.md#settemporalpeakcontrol) | private | Toggles OLED TPC (In-Start service menu option) ⚠️ |
| [`luna://com.webos.service.panelcontroller/setScreenOnOff`](../services/com.webos.service.panelcontroller.md#setscreenonoff) | ssap | Toggle panel on/off (can behave differently from tvpower turnOn/OffScreen) |
| [`luna://com.webos.service.rollingscreen/changeCurve`](../services/com.webos.service.rollingscreen.md#changecurve) | private | Select curve preset on bendable/Flex display (e.g. LG OLED Flex) |
| [`luna://com.webos.service.rollingscreen/updateCurvature`](../services/com.webos.service.rollingscreen.md#updatecurvature) | private | Adjust the curvature percentage of a curve preset |
| [`luna://com.webos.service.tv.capture/executeOneShot`](../services/com.webos.service.tv.capture.md#executeoneshot) | private | Legacy screenshot service name |
| [`luna://com.webos.service.tv.display/get3DStatus`](../services/com.webos.service.tv.display.md#get3dstatus) | ssap | Get 3D status |
| [`luna://com.webos.service.tv.display/getLightSensorData`](../services/com.webos.service.tv.display.md#getlightsensordata) | private | Reads the ambient light sensor data |
| [`luna://com.webos.service.tv.display/requestClearPanelNoise`](../services/com.webos.service.tv.display.md#requestclearpanelnoise) | private | OLED pixel refresh scheduling ⚠️ |
| [`luna://com.webos.service.tv.display/set3DOff`](../services/com.webos.service.tv.display.md#set3doff) | ssap | Turn 3D mode off |
| [`luna://com.webos.service.tv.display/set3DOn`](../services/com.webos.service.tv.display.md#set3don) | ssap | Turn 3D mode on |
| [`luna://com.webos.service.tv.power/turnOffScreen`](../services/com.webos.service.tv.power.md#turnoffscreen) | ssap | Blank the panel (legacy, webOS 4.0 path) |
| [`luna://com.webos.service.tv.power/turnOnScreen`](../services/com.webos.service.tv.power.md#turnonscreen) | ssap | Unblank the panel (legacy, webOS 4.0 path) |
| [`luna://com.webos.service.tvpower/power/registerScreenSaverRequest`](../services/com.webos.service.tvpower.md#power_registerscreensaverrequest) | private | Subscription: LG asks before starting its screensaver; the subscriber replies via responseScreenSaverRequest |
| [`luna://com.webos.service.tvpower/power/responseScreenSaverRequest`](../services/com.webos.service.tvpower.md#power_responsescreensaverrequest) | private | Answers a screensaver request |
| [`luna://com.webos.service.tvpower/power/turnOffScreen`](../services/com.webos.service.tvpower.md#power_turnoffscreen) | ssap | Blank the panel (screen off) while keeping the TV powered |
| [`luna://com.webos.service.tvpower/power/turnOnScreen`](../services/com.webos.service.tvpower.md#power_turnonscreen) | ssap | Unblank the panel |
| [`luna://com.webos.service.tvpower/power/turnOnScreenSaver`](../services/com.webos.service.tvpower.md#power_turnonscreensaver) | private | Starts the LG screensaver now |
| [`luna://com.webos.service.tvpower/power2/turnOffScreen`](../services/com.webos.service.tvpower.md#power2_turnoffscreen) | private | Alternate screen-off path tried as fallback |
| [`luna://com.webos.service.videooutput/blankVideo`](../services/com.webos.service.videooutput.md#blankvideo) | unknown | Registered in webOS OSE sysbus api.json (ACG group media); name only |
| [`luna://com.webos.service.videooutput/ComposeOrder`](../services/com.webos.service.videooutput.md#composeorder) | unknown | Object to represent compositing parameters for the video sinks. |
| [`luna://com.webos.service.videooutput/connect`](../services/com.webos.service.videooutput.md#connect) | public | Connects a video source to a video sink |
| [`luna://com.webos.service.videooutput/disconnect`](../services/com.webos.service.videooutput.md#disconnect) | public | Disconnects video from sink. |
| [`luna://com.webos.service.videooutput/display/getOutputCapabilities`](../services/com.webos.service.videooutput.md#display_getoutputcapabilities) | public | Helper method to query the set video limits |
| [`luna://com.webos.service.videooutput/display/getParam`](../services/com.webos.service.videooutput.md#display_getparam) | public | Gets information of parameters for video sinks to render video frames |
| [`luna://com.webos.service.videooutput/display/setCompositing`](../services/com.webos.service.videooutput.md#display_setcompositing) | public | Sets compositing parameters for the video sinks. This maps directly to adapter call and changes the compositing parameters for both video outputs simultaneously |
| [`luna://com.webos.service.videooutput/display/setDisplayWindow`](../services/com.webos.service.videooutput.md#display_setdisplaywindow) | public | Setup video output location on the screen for specified sink. |
| [`luna://com.webos.service.videooutput/getStatus`](../services/com.webos.service.videooutput.md#getstatus) | public | Lists all video sinks and their status. |
| [`luna://com.webos.service.videooutput/Planes`](../services/com.webos.service.videooutput.md#planes) | unknown | Object to represent video planes and available size of scaling. |
| [`luna://com.webos.service.videooutput/register`](../services/com.webos.service.videooutput.md#register) | public | Registers pipeline ID to videooutputd. Note: If this API is required to be called, make sure it is called before the connect API call. |
| [`luna://com.webos.service.videooutput/setVideoData`](../services/com.webos.service.videooutput.md#setvideodata) | public | Sets video data needed for playback. |
| [`luna://com.webos.service.videooutput/unregister`](../services/com.webos.service.videooutput.md#unregister) | public | Unregisters pipeline ID from videooutputd. |
| [`luna://com.webos.service.videooutput/Video`](../services/com.webos.service.videooutput.md#video) | unknown | Object to represent the status of video sinks. |
| [`luna://com.webos.service.videooutput/VideoRect`](../services/com.webos.service.videooutput.md#videorect) | unknown | Object to represent the video window coordinates. |
| [`luna://com.webos.service.videooutput/VideoSize`](../services/com.webos.service.videooutput.md#videosize) | unknown | Object to represent video size. |
| [`luna://com.webos.surfacemanager/captureCompositorOutput`](../services/com.webos.surfacemanager.md#capturecompositoroutput) | public | Takes a screenshot of the content that the compositor generates. The content can be either a frame that contains the graphics composition result or an applicati |
| [`luna://com.webos.surfacemanager/closeByAppId`](../services/com.webos.surfacemanager.md#closebyappid) | public | Close an application's surface with given appId. In most cases, closing the surface leads the application to quit. But with this method, the compositor doesn't  |
| [`luna://com.webos.surfacemanager/foregroundAppInfo`](../services/com.webos.surfacemanager.md#foregroundappinfo) | unknown | Provides information about a surface that is shown in the foreground. |
| [`luna://com.webos.surfacemanager/getAppMirroring`](../services/com.webos.surfacemanager.md#getappmirroring) | public | Gets the status of the app mirroring. |
| [`luna://com.webos.surfacemanager/getForegroundAppInfo`](../services/com.webos.surfacemanager.md#getforegroundappinfo) | public | Provides the list of applications that are currently visible in the foreground. Note: This is a private method that can be used by SAM only. For public use, ref |
| [`luna://com.webos.surfacemanager/mirroringInfo`](../services/com.webos.surfacemanager.md#mirroringinfo) | unknown | Indicates mirroring status of each display. |
| [`luna://com.webos.surfacemanager/setAppMirroring`](../services/com.webos.surfacemanager.md#setappmirroring) | public | Starts or stops app mirroring for a given display pair. |
