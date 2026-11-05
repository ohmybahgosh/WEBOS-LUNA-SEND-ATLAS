# `lg.thinqai.adapter`

LG ThinQ AI adapter: runs voice/intent recognition by voice or text, returns TTS and keyword results, and manages Voice ID enrollment and privacy data. _(inferred from the service's methods)_

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancelRecognition`](#cancelrecognition) | private |  | misc | inferred | Cancels the recognition. |
| [`deletePrivacyData`](#deleteprivacydata) | private |  | misc | inferred | Deletes the privacy data. ⚠️ |
| [`getKeywordResult`](#getkeywordresult) | private |  | misc | inferred | Returns the keyword result. |
| [`getTtsData`](#getttsdata) | private |  | misc | inferred | Returns the tts data. |
| [`load`](#load) | private |  | misc | inferred | Loads the lg thinqai adapter. |
| [`recognizeIntentByText`](#recognizeintentbytext) | private |  | misc | inferred | Recognizes the intent by text. |
| [`recognizeIntentByVoice`](#recognizeintentbyvoice) | private |  | input | inferred | Recognizes the intent by voice. |
| [`recognizeVoice`](#recognizevoice) | private |  | input | inferred | Recognizes the voice. |
| [`showGuide`](#showguide) | private |  | misc | inferred | Shows the guide. |
| [`stopRecordingVoice`](#stoprecordingvoice) | private |  | input | inferred | Stops the recording voice. |
| [`unload`](#unload) | private |  | misc | inferred | Unloads the lg thinqai adapter. |
| [`vid/cancelEnroll`](#vid_cancelenroll) | private |  | misc | inferred | Cancels the enroll (vid) |
| [`vid/deleteVoiceId`](#vid_deletevoiceid) | private |  | input | inferred | Deletes the voice ID (vid) ⚠️ |
| [`vid/getStatusList`](#vid_getstatuslist) | private |  | misc | inferred | Returns the status list (vid) |
| [`vid/getSupportedLanguagesForVoiceId`](#vid_getsupportedlanguagesforvoiceid) | private |  | input | inferred | Returns the supported languages for voice ID (vid) |
| [`vid/getVidFirstuseEnabled`](#vid_getvidfirstuseenabled) | private |  | misc | inferred | Returns the vid firstuse enabled (vid) |
| [`vid/isVoiceIdRegistered`](#vid_isvoiceidregistered) | private |  | input | inferred | Reports whether the voice ID registered is set (vid) |
| [`vid/listScripts`](#vid_listscripts) | private |  | misc | inferred | Lists the scripts (vid) |

<a id="cancelrecognition"></a>
## `cancelRecognition`

`luna://lg.thinqai.adapter/cancelRecognition`

Cancels the recognition.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/cancelRecognition '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deleteprivacydata"></a>
## `deletePrivacyData` ⚠️ DANGEROUS

`luna://lg.thinqai.adapter/deletePrivacyData`

Deletes the privacy data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/deletePrivacyData '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getkeywordresult"></a>
## `getKeywordResult`

`luna://lg.thinqai.adapter/getKeywordResult`

Returns the keyword result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/getKeywordResult '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getttsdata"></a>
## `getTtsData`

`luna://lg.thinqai.adapter/getTtsData`

Returns the tts data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/getTtsData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="load"></a>
## `load`

`luna://lg.thinqai.adapter/load`

Loads the lg thinqai adapter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/load '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizeintentbytext"></a>
## `recognizeIntentByText`

`luna://lg.thinqai.adapter/recognizeIntentByText`

Recognizes the intent by text.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/recognizeIntentByText '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizeintentbyvoice"></a>
## `recognizeIntentByVoice`

`luna://lg.thinqai.adapter/recognizeIntentByVoice`

Recognizes the intent by voice.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/recognizeIntentByVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizevoice"></a>
## `recognizeVoice`

`luna://lg.thinqai.adapter/recognizeVoice`

Recognizes the voice.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/recognizeVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showguide"></a>
## `showGuide`

`luna://lg.thinqai.adapter/showGuide`

Shows the guide.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/showGuide '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stoprecordingvoice"></a>
## `stopRecordingVoice`

`luna://lg.thinqai.adapter/stopRecordingVoice`

Stops the recording voice.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/stopRecordingVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unload"></a>
## `unload`

`luna://lg.thinqai.adapter/unload`

Unloads the lg thinqai adapter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/unload '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="vid_cancelenroll"></a>
## `vid/cancelEnroll`

`luna://lg.thinqai.adapter/vid/cancelEnroll`

Cancels the enroll (vid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/vid/cancelEnroll '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="vid_deletevoiceid"></a>
## `vid/deleteVoiceId` ⚠️ DANGEROUS

`luna://lg.thinqai.adapter/vid/deleteVoiceId`

Deletes the voice ID (vid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/vid/deleteVoiceId '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="vid_getstatuslist"></a>
## `vid/getStatusList`

`luna://lg.thinqai.adapter/vid/getStatusList`

Returns the status list (vid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/vid/getStatusList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="vid_getsupportedlanguagesforvoiceid"></a>
## `vid/getSupportedLanguagesForVoiceId`

`luna://lg.thinqai.adapter/vid/getSupportedLanguagesForVoiceId`

Returns the supported languages for voice ID (vid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/vid/getSupportedLanguagesForVoiceId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="vid_getvidfirstuseenabled"></a>
## `vid/getVidFirstuseEnabled`

`luna://lg.thinqai.adapter/vid/getVidFirstuseEnabled`

Returns the vid firstuse enabled (vid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/vid/getVidFirstuseEnabled '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="vid_isvoiceidregistered"></a>
## `vid/isVoiceIdRegistered`

`luna://lg.thinqai.adapter/vid/isVoiceIdRegistered`

Reports whether the voice ID registered is set (vid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/vid/isVoiceIdRegistered '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="vid_listscripts"></a>
## `vid/listScripts`

`luna://lg.thinqai.adapter/vid/listScripts`

Lists the scripts (vid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://lg.thinqai.adapter/vid/listScripts '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
