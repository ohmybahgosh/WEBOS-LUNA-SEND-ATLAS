# `com.webos.service.voiceconductor`

Voice-assistant orchestration service: recognizes intents by voice or text, reports recognition status and supported languages, and registers voice interactors and their action results. _(inferred from the service's methods)_

32 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancelRecognition`](#cancelrecognition) | private |  | input | inferred | Cancels the recognition. |
| [`checkUpdate`](#checkupdate) | public |  | input | inferred | Checks the update. |
| [`debug/eulaAlert`](#debug_eulaalert) | private |  | input | inferred | Handles the eula alert (debug) |
| [`debug/networkAlert`](#debug_networkalert) | private |  | input | inferred | Handles the network alert (debug) |
| [`debug/streamDisconnectToast`](#debug_streamdisconnecttoast) | private |  | notifications | inferred | Handles the stream disconnect toast (debug) |
| [`getContext`](#getcontext) | public |  | input | inferred | Returns the context. |
| [`getRecognitionStatus`](#getrecognitionstatus) | private |  | input | inferred | Returns the recognition status. |
| [`getSupportedLanguages`](#getsupportedlanguages) | public |  | input | inferred | Returns the supported languages. |
| [`getUtteranceEvents`](#getutteranceevents) | private |  | input | inferred | Returns the utterance events. |
| [`getVoiceKey`](#getvoicekey) | private |  | input | inferred | Returns the voice key. |
| [`getVoiceUiEvents`](#getvoiceuievents) | public |  | input | inferred | Returns the voice ui events. |
| [`interactor/register`](#interactor_register) | public |  | input | inferred | Registers the voiceconductor (interactor) |
| [`interactor/reportActionResult`](#interactor_reportactionresult) | public |  | input | inferred | Reports the action result (interactor) |
| [`interactor/setContext`](#interactor_setcontext) | public |  | input | inferred | Sets the context (interactor) |
| [`launchApp`](#launchapp) | private |  | apps | inferred | Launches the app. |
| [`recognizeIntentByText`](#recognizeintentbytext) | public |  | input | inferred | Recognizes the intent by text. |
| [`recognizeIntentByVoice`](#recognizeintentbyvoice) | private |  | input | inferred | Recognizes the intent by voice. |
| [`recognizeVoice`](#recognizevoice) | private |  | input | inferred | Recognizes the voice. |
| [`recognizeVoiceWithDetails`](#recognizevoicewithdetails) | private |  | input | inferred | Recognizes the voice with details. |
| [`recordVoice`](#recordvoice) | public |  | input | inferred | Records the voice. |
| [`setInputEvent`](#setinputevent) | private |  | input | inferred | Sets the input event. |
| [`showGuide`](#showguide) | private |  | input | inferred | Shows the guide. |
| [`stopRecordingVoice`](#stoprecordingvoice) | public |  | input | inferred | Stops the recording voice. |
| [`system/cancelRecognition`](#system_cancelrecognition) | private |  | input | inferred | Cancels the recognition (system) |
| [`system/checkUpdate`](#system_checkupdate) | private |  | input | inferred | Checks the update (system) |
| [`system/getSupportedLanguages`](#system_getsupportedlanguages) | private |  | input | inferred | Returns the supported languages (system) |
| [`system/recognizeIntentByText`](#system_recognizeintentbytext) | public |  | input | inferred | Recognizes the intent by text (system) |
| [`system/recognizeIntentByVoice`](#system_recognizeintentbyvoice) | private |  | input | inferred | Recognizes the intent by voice (system) |
| [`system/recognizeVoice`](#system_recognizevoice) | private |  | input | inferred | Recognizes the voice (system) |
| [`system/recognizeVoiceWithDetails`](#system_recognizevoicewithdetails) | private |  | input | inferred | Recognizes the voice with details (system) |
| [`system/setInputEvent`](#system_setinputevent) | private |  | input | inferred | Sets the input event (system) |
| [`system/stopRecordingVoice`](#system_stoprecordingvoice) | private |  | input | inferred | Stops the recording voice (system) |

<a id="cancelrecognition"></a>
## `cancelRecognition`

`luna://com.webos.service.voiceconductor/cancelRecognition`

Cancels the recognition.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/cancelRecognition '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkupdate"></a>
## `checkUpdate`

`luna://com.webos.service.voiceconductor/checkUpdate`

Checks the update.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/checkUpdate '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_eulaalert"></a>
## `debug/eulaAlert`

`luna://com.webos.service.voiceconductor/debug/eulaAlert`

Handles the eula alert (debug)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/debug/eulaAlert '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_networkalert"></a>
## `debug/networkAlert`

`luna://com.webos.service.voiceconductor/debug/networkAlert`

Handles the network alert (debug)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/debug/networkAlert '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_streamdisconnecttoast"></a>
## `debug/streamDisconnectToast`

`luna://com.webos.service.voiceconductor/debug/streamDisconnectToast`

Handles the stream disconnect toast (debug)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/debug/streamDisconnectToast '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcontext"></a>
## `getContext`

`luna://com.webos.service.voiceconductor/getContext`

Returns the context.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `accuLocationKey` |  |
| `aodStatus` |  |
| `appInfoYoutube` |  |
| `appList` |  |
| `appUsageHistory` |  |
| `audioFeedbackStatus` |  |
| `audioGuidance` |  |
| `audioSource` |  |
| `cagConfig` |  |
| `channelList` |  |
| `conditionDomain` |  |
| `configAiArt` |  |
| `configBeanBrowser` |  |
| `configMagicLink` |  |
| `context` |  |
| `contextType` |  |
| `contexts` |  |
| `countryPrefix` |  |
| `cpList` |  |
| `currentUserNumber` |  |
| `debugStatus` |  |
| `detectedChannelNumber` |  |
| `deviceAuthStatus` |  |
| `displayType` |  |
| `epgLastUpdated` |  |
| `foreAppId` |  |
| `foreAppIdExt` |  |
| `foreChannel` |  |
| `genreCode` |  |
| `genreCode2` |  |
| `httpHeader` |  |
| `iotList` |  |
| `lastInputApp` |  |
| `lifeAlarm` |  |
| `lifeOnScreen` |  |
| `lifeOnScreenMode` |  |
| `loginUserData` |  |
| `medicationInfoAgreement` |  |
| `multiview` |  |
| `mySportTeamList` |  |
| `networkId` |  |
| `networkStatus` |  |
| `ntpTime` |  |
| `ossInputApp` |  |
| `ossList` |  |
| `preferredInfo` |  |
| `profileHome` |  |
| `profileList` |  |
| `programGroupId` |  |
| `programName` |  |
| `programRemainTime` |  |
| `programSubTitle` |  |
| `recognitionSource` |  |
| `seniorModeEnable` |  |
| `serverHost` |  |
| `storeMode` |  |
| `subDivision` |  |
| `supportBnoModel` |  |
| `supportLedLighting` |  |
| `supportScreenType` |  |
| `supportSignLanguageZoom` |  |
| `supportedLowPowerMode` |  |
| `switchLivepick` |  |
| `switchMusicRecognition` |  |
| `switchRecommendation` |  |
| `switchUnknownAiAssistant` |  |
| `tunerlessStatus` |  |
| `udid` |  |
| `usbPath` |  |
| `useBeanBrowser` |  |
| `userStatus` |  |
| `viewType` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getContext '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrecognitionstatus"></a>
## `getRecognitionStatus`

`luna://com.webos.service.voiceconductor/getRecognitionStatus`

Returns the recognition status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getRecognitionStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsupportedlanguages"></a>
## `getSupportedLanguages`

`luna://com.webos.service.voiceconductor/getSupportedLanguages`

Returns the supported languages.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `voiceLanguages` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getSupportedLanguages '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getutteranceevents"></a>
## `getUtteranceEvents`

`luna://com.webos.service.voiceconductor/getUtteranceEvents`

Returns the utterance events.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getUtteranceEvents '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvoicekey"></a>
## `getVoiceKey`

`luna://com.webos.service.voiceconductor/getVoiceKey`

Returns the voice key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getVoiceKey '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvoiceuievents"></a>
## `getVoiceUiEvents`

`luna://com.webos.service.voiceconductor/getVoiceUiEvents`

Returns the voice ui events.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getVoiceUiEvents '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="interactor_register"></a>
## `interactor/register`

`luna://com.webos.service.voiceconductor/interactor/register`

Registers the voiceconductor (interactor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/interactor/register '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="interactor_reportactionresult"></a>
## `interactor/reportActionResult`

`luna://com.webos.service.voiceconductor/interactor/reportActionResult`

Reports the action result (interactor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/interactor/reportActionResult '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="interactor_setcontext"></a>
## `interactor/setContext`

`luna://com.webos.service.voiceconductor/interactor/setContext`

Sets the context (interactor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/interactor/setContext '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchapp"></a>
## `launchApp`

`luna://com.webos.service.voiceconductor/launchApp`

Launches the app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/launchApp '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizeintentbytext"></a>
## `recognizeIntentByText`

`luna://com.webos.service.voiceconductor/recognizeIntentByText`

Recognizes the intent by text.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/recognizeIntentByText '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizeintentbyvoice"></a>
## `recognizeIntentByVoice`

`luna://com.webos.service.voiceconductor/recognizeIntentByVoice`

Recognizes the intent by voice.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/recognizeIntentByVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizevoice"></a>
## `recognizeVoice`

`luna://com.webos.service.voiceconductor/recognizeVoice`

Recognizes the voice.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/recognizeVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizevoicewithdetails"></a>
## `recognizeVoiceWithDetails`

`luna://com.webos.service.voiceconductor/recognizeVoiceWithDetails`

Recognizes the voice with details.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/recognizeVoiceWithDetails '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recordvoice"></a>
## `recordVoice`

`luna://com.webos.service.voiceconductor/recordVoice`

Records the voice.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/recordVoice '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setinputevent"></a>
## `setInputEvent`

`luna://com.webos.service.voiceconductor/setInputEvent`

Sets the input event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/setInputEvent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showguide"></a>
## `showGuide`

`luna://com.webos.service.voiceconductor/showGuide`

Shows the guide.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/showGuide '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stoprecordingvoice"></a>
## `stopRecordingVoice`

`luna://com.webos.service.voiceconductor/stopRecordingVoice`

Stops the recording voice.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/stopRecordingVoice '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_cancelrecognition"></a>
## `system/cancelRecognition`

`luna://com.webos.service.voiceconductor/system/cancelRecognition`

Cancels the recognition (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/cancelRecognition '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_checkupdate"></a>
## `system/checkUpdate`

`luna://com.webos.service.voiceconductor/system/checkUpdate`

Checks the update (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/checkUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_getsupportedlanguages"></a>
## `system/getSupportedLanguages`

`luna://com.webos.service.voiceconductor/system/getSupportedLanguages`

Returns the supported languages (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/getSupportedLanguages '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_recognizeintentbytext"></a>
## `system/recognizeIntentByText`

`luna://com.webos.service.voiceconductor/system/recognizeIntentByText`

Recognizes the intent by text (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/recognizeIntentByText '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_recognizeintentbyvoice"></a>
## `system/recognizeIntentByVoice`

`luna://com.webos.service.voiceconductor/system/recognizeIntentByVoice`

Recognizes the intent by voice (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/recognizeIntentByVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_recognizevoice"></a>
## `system/recognizeVoice`

`luna://com.webos.service.voiceconductor/system/recognizeVoice`

Recognizes the voice (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/recognizeVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_recognizevoicewithdetails"></a>
## `system/recognizeVoiceWithDetails`

`luna://com.webos.service.voiceconductor/system/recognizeVoiceWithDetails`

Recognizes the voice with details (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/recognizeVoiceWithDetails '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_setinputevent"></a>
## `system/setInputEvent`

`luna://com.webos.service.voiceconductor/system/setInputEvent`

Sets the input event (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/setInputEvent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_stoprecordingvoice"></a>
## `system/stopRecordingVoice`

`luna://com.webos.service.voiceconductor/system/stopRecordingVoice`

Stops the recording voice (system)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/stopRecordingVoice '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
