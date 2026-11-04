# `com.webos.service.tts`

5 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getAvailableLanguages`](#getavailablelanguages) | public |  | audio | Gets the list of languages that are supported by the TTS provider. |
| [`getStatus`](#getstatus) | public |  | audio | Gets the current state of the service. |
| [`speak`](#speak) | public | yes | audio | Reads out an input text in the language chosen by the user. Note : It generates a series of audio as output sounds until the complete speech |
| [`status`](#status) | unknown |  | audio | Indicates the current state of the service. |
| [`stop`](#stop) | public |  | audio | Stops the text-to-speech processing immediately and ignores the pending text on the buffer. Note : There could be some noise in the output w |

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

```sh
luna-send -n 1 -f luna://com.webos.service.tts/getStatus '{}
```

> ACG: tts.operation \| Returns: status:Object: status; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Converts plain language text into speech output. The synthesized speech can be used by applications such as voice assistants.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-tts/)

<a id="speak"></a>
## `speak`

`luna://com.webos.service.tts/speak`

Reads out an input text in the language chosen by the user. Note : It generates a series of audio as output sounds until the complete speech signal for the input text is synthesized.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 10  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `text` | String (required) Indicates the text to be converted. Note : The expected character encoding is platform-endian UTF-8. |
| `clear` | Boolean (optional) Indicates if the current text is to be cleared. Possible values are: true : Stops processing the current text, and processes the next one. false : Processes the next text only after completing the current one. Default: false |
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true: Subscribe for notifications false: Not subscribed Default: false |
| `language` | String (optional) Indicates the language used to read the input text. Note: To get the list supported languages, use the getAvailableLanguages() method. The default language is English (en-US). |
| `appID` | String (optional) Indicates the Application ID. Example: com.webos.app.voice |
| `feedback` | Boolean (optional) Indicates if a unique identifier is to be returned for the input text. Possible values are: true : Provides msgIDs for texts. false : Does not provide identifiers for texts. Default: false |
| `displayId` | Number (optional) Indicates the unique identifier for the displays. Possible values are: 0: display 1 1: display 2 Default: 0 |

```sh
luna-send -n 1 luna://com.webos.service.tts/speak '{"text":"hi","clear":true}'
```

> ACG: tts.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; msgID:String; language:String \| Service: Converts plain language text into speech output. The synthesized speech can be used by applications such as voice assistants. \|\| Error 8101 unless option.audioGuidance is on.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-tts/), [2](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

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

```sh
luna-send -n 1 -f luna://com.webos.service.tts/stop '{}
```

> ACG: tts.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Converts plain language text into speech output. The synthesized speech can be used by applications such as voice assistants.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-tts/)
