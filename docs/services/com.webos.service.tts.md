# `com.webos.service.tts`

Text-to-speech and audio-guidance service: speaks text, manages voice/language packs, toggles audio guidance, and controls playback (pause/resume/stop).

16 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getAdvancedLanguagePackInstallStatus`](#getadvancedlanguagepackinstallstatus) | private |  | misc | inferred | Returns the advanced language pack install status. |
| [`getAvailableLanguages`](#getavailablelanguages) | public |  | audio | documented | Gets the list of languages that are supported by the TTS provider. |
| [`getStatus`](#getstatus) | public |  | audio | documented | Gets the current state of the service. |
| [`installAdvancedLanguagePack`](#installadvancedlanguagepack) | private |  | misc | inferred | Installs the advanced language pack. |
| [`load`](#load) | private |  | misc | inferred | Loads the tts. |
| [`msgFeedback`](#msgfeedback) | private |  | db | inferred | Handles the msg feedback. |
| [`pause`](#pause) | private |  | misc | inferred | Pauses the tts. |
| [`removeAdvancedLanguagePack`](#removeadvancedlanguagepack) | private |  | misc | inferred | Removes the advanced language pack. ⚠️ |
| [`resume`](#resume) | private |  | misc | inferred | Resumes the tts. |
| [`setAudioGuidanceOnOff`](#setaudioguidanceonoff) | private |  | audio | inferred | Sets the audio guidance on off. |
| [`speak`](#speak) | public | yes | audio | documented | Reads out an input text in the language chosen by the user. Note : It generates a series of audio as output sounds until the complete speech |
| [`speakVKB`](#speakvkb) | private |  | misc | inferred | Handles the speak VKB. |
| [`start`](#start) | private |  | misc | inferred | Starts the tts. |
| [`status`](#status) | unknown |  | audio | documented | Indicates the current state of the service. |
| [`stop`](#stop) | public |  | audio | documented | Stops the text-to-speech processing immediately and ignores the pending text on the buffer. Note : There could be some noise in the output w |
| [`unload`](#unload) | private |  | misc | inferred | Unloads the tts. |

<a id="getadvancedlanguagepackinstallstatus"></a>
## `getAdvancedLanguagePackInstallStatus`

`luna://com.webos.service.tts/getAdvancedLanguagePackInstallStatus`

Returns the advanced language pack install status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tts/getAdvancedLanguagePackInstallStatus '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getavailablelanguages"></a>
## `getAvailableLanguages`

`luna://com.webos.service.tts/getAvailableLanguages`

Gets the list of languages that are supported by the TTS provider.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `displayId` | Number (optional) Indicates the unique identifier for the displays. Possible values are: 0: display 1 1: display 2 Default: 0 |

**Returns:**

| Field | Type / notes |
|---|---|
| `languages` | String array (required) Indicates the list of supported languages. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.tts/getAvailableLanguages '{}
```

> ACG: tts.operation \| Returns: languages:String array; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Converts plain language text into speech output. The synthesized speech can be used by applications such as voice assistants.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-tts/)

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.tts/getStatus`

Gets the current state of the service.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `displayId` | Number (optional) Indicates the unique identifier for the displays. Possible values are: 0: display 1 1: display 2 Default: 0 |

**Returns:**

| Field | Type / notes |
|---|---|
| `status` | Object: status (required) Indicates the current state of the service. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.tts/getStatus '{}
```

> ACG: tts.operation \| Returns: status:Object: status; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Converts plain language text into speech output. The synthesized speech can be used by applications such as voice assistants.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-tts/)

<a id="installadvancedlanguagepack"></a>
## `installAdvancedLanguagePack`

`luna://com.webos.service.tts/installAdvancedLanguagePack`

Installs the advanced language pack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tts/installAdvancedLanguagePack '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="load"></a>
## `load`

`luna://com.webos.service.tts/load`

Loads the tts.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tts/load '{}'
```

> ACG groups: media, tts.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="msgfeedback"></a>
## `msgFeedback`

`luna://com.webos.service.tts/msgFeedback`

Handles the msg feedback.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tts/msgFeedback '{}'
```

> ACG groups: private, tts.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pause"></a>
## `pause`

`luna://com.webos.service.tts/pause`

Pauses the tts.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tts/pause '{}'
```

> ACG groups: media, tts.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="removeadvancedlanguagepack"></a>
## `removeAdvancedLanguagePack` ⚠️ DANGEROUS

`luna://com.webos.service.tts/removeAdvancedLanguagePack`

Removes the advanced language pack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tts/removeAdvancedLanguagePack '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="resume"></a>
## `resume`

`luna://com.webos.service.tts/resume`

Resumes the tts.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tts/resume '{}'
```

> ACG groups: media, tts.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setaudioguidanceonoff"></a>
## `setAudioGuidanceOnOff`

`luna://com.webos.service.tts/setAudioGuidanceOnOff`

Sets the audio guidance on off.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tts/setAudioGuidanceOnOff '{}'
```

> ACG groups: private, tts.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="speak"></a>
## `speak`

`luna://com.webos.service.tts/speak`

Reads out an input text in the language chosen by the user. Note : It generates a series of audio as output sounds until the complete speech signal for the input text is synthesized.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 10  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `text` | String (required) Indicates the text to be converted. Note : The expected character encoding is platform-endian UTF-8. |
| `clear` | Boolean (optional) Indicates if the current text is to be cleared. Possible values are: true : Stops processing the current text, and processes the next one. false : Processes the next text only after completing the current one. Default: false |
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true: Subscribe for notifications false: Not subscribed Default: false |
| `language` | String (optional) Indicates the language used to read the input text. Note: To get the list supported languages, use the getAvailableLanguages() method. The default language is English (en-US). |
| `appID` | String (optional) Indicates the Application ID. Example: com.webos.app.voice |
| `feedback` | Boolean (optional) Indicates if a unique identifier is to be returned for the input text. Possible values are: true : Provides msgIDs for texts. false : Does not provide identifiers for texts. Default: false |
| `displayId` | Number (optional) Indicates the unique identifier for the displays. Possible values are: 0: display 1 1: display 2 Default: 0 |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. |
| `msgID` | String (optional) Indicates the unique identifier containing 12 characters that represent the input text. Note: The value is returned only if the feedback is set to true. |
| `language` | String (optional) Indicates the language used to process the input text. |

```sh
luna-send -n 1 luna://com.webos.service.tts/speak '{"text":"hi","clear":true}'
```

> ACG: tts.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; msgID:String; language:String \| Service: Converts plain language text into speech output. The synthesized speech can be used by applications such as voice assistants. \|\| Error 8101 unless option.audioGuidance is on.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-tts/), [2](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="speakvkb"></a>
## `speakVKB`

`luna://com.webos.service.tts/speakVKB`

Handles the speak VKB.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tts/speakVKB '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.tts/start`

Starts the tts.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tts/start '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, media, private, tts.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.service.tts/status`

Indicates the current state of the service.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tts/status '{}'
```

> Service: Converts plain language text into speech output. The synthesized speech can be used by applications such as voice assistants. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-tts/)

<a id="stop"></a>
## `stop`

`luna://com.webos.service.tts/stop`

Stops the text-to-speech processing immediately and ignores the pending text on the buffer. Note : There could be some noise in the output when the service is stopped abruptly. To avoid this, set the fadeOut parameter to true . This will gradually reduce the output sound to zero without any noise. If both appID and msgID are passed in the API call, it considers only the msgID and stops the service based on the value provided by the msgID.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appID` | String (optional) Indicates the Application ID passed in the speak() method. |
| `msgID` | String (optional) Indicates the unique identifier containing 12 characters that represent the input text. |
| `fadeOut` | Boolean (optional) Reduces the output sound without any noise. Possible values are: true : Gradually reduces the output sound to zero. false : Immediately stops the speech processing. This can result in unwanted noise. Default: true |
| `displayId` | Number (optional) Indicates the unique identifier for the displays. Possible values are: 0: display 1 1: display 2 Default: 0 |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorCode` | Number (optional) The error code for the failed operation. |
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. |

```sh
luna-send -n 1 -f luna://com.webos.service.tts/stop '{}
```

> ACG: tts.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Converts plain language text into speech output. The synthesized speech can be used by applications such as voice assistants.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-tts/)

<a id="unload"></a>
## `unload`

`luna://com.webos.service.tts/unload`

Unloads the tts.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tts/unload '{}'
```

> ACG groups: media, tts.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
