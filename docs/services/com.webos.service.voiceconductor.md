# `com.webos.service.voiceconductor`

32 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cancelRecognition`](#cancelrecognition) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`checkUpdate`](#checkupdate) | public |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`debug/eulaAlert`](#debug_eulaalert) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`debug/networkAlert`](#debug_networkalert) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`debug/streamDisconnectToast`](#debug_streamdisconnecttoast) | private |  | notifications | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`getContext`](#getcontext) | public |  | input | Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`getRecognitionStatus`](#getrecognitionstatus) | private |  | input | Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`getSupportedLanguages`](#getsupportedlanguages) | public |  | input | Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`getUtteranceEvents`](#getutteranceevents) | private |  | input | Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`getVoiceKey`](#getvoicekey) | private |  | input | Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`getVoiceUiEvents`](#getvoiceuievents) | public |  | input | Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`interactor/register`](#interactor_register) | public |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`interactor/reportActionResult`](#interactor_reportactionresult) | public |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`interactor/setContext`](#interactor_setcontext) | public |  | input | Setter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`launchApp`](#launchapp) | private |  | apps | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`recognizeIntentByText`](#recognizeintentbytext) | public |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`recognizeIntentByVoice`](#recognizeintentbyvoice) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`recognizeVoice`](#recognizevoice) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`recognizeVoiceWithDetails`](#recognizevoicewithdetails) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`recordVoice`](#recordvoice) | public |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`setInputEvent`](#setinputevent) | private |  | input | Setter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`showGuide`](#showguide) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`stopRecordingVoice`](#stoprecordingvoice) | public |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`system/cancelRecognition`](#system_cancelrecognition) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`system/checkUpdate`](#system_checkupdate) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`system/getSupportedLanguages`](#system_getsupportedlanguages) | private |  | input | Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`system/recognizeIntentByText`](#system_recognizeintentbytext) | public |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`system/recognizeIntentByVoice`](#system_recognizeintentbyvoice) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`system/recognizeVoice`](#system_recognizevoice) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`system/recognizeVoiceWithDetails`](#system_recognizevoicewithdetails) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`system/setInputEvent`](#system_setinputevent) | private |  | input | Setter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |
| [`system/stopRecordingVoice`](#system_stoprecordingvoice) | private |  | input | Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented). |

<a id="cancelrecognition"></a>
## `cancelRecognition`

`luna://com.webos.service.voiceconductor/cancelRecognition`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/cancelRecognition '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checkupdate"></a>
## `checkUpdate`

`luna://com.webos.service.voiceconductor/checkUpdate`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/checkUpdate '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_eulaalert"></a>
## `debug/eulaAlert`

`luna://com.webos.service.voiceconductor/debug/eulaAlert`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/debug/eulaAlert '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_networkalert"></a>
## `debug/networkAlert`

`luna://com.webos.service.voiceconductor/debug/networkAlert`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/debug/networkAlert '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug_streamdisconnecttoast"></a>
## `debug/streamDisconnectToast`

`luna://com.webos.service.voiceconductor/debug/streamDisconnectToast`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/debug/streamDisconnectToast '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcontext"></a>
## `getContext`

`luna://com.webos.service.voiceconductor/getContext`

Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getContext '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrecognitionstatus"></a>
## `getRecognitionStatus`

`luna://com.webos.service.voiceconductor/getRecognitionStatus`

Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getRecognitionStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsupportedlanguages"></a>
## `getSupportedLanguages`

`luna://com.webos.service.voiceconductor/getSupportedLanguages`

Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getSupportedLanguages '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getutteranceevents"></a>
## `getUtteranceEvents`

`luna://com.webos.service.voiceconductor/getUtteranceEvents`

Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getUtteranceEvents '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvoicekey"></a>
## `getVoiceKey`

`luna://com.webos.service.voiceconductor/getVoiceKey`

Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getVoiceKey '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvoiceuievents"></a>
## `getVoiceUiEvents`

`luna://com.webos.service.voiceconductor/getVoiceUiEvents`

Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/getVoiceUiEvents '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="interactor_register"></a>
## `interactor/register`

`luna://com.webos.service.voiceconductor/interactor/register`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/interactor/register '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="interactor_reportactionresult"></a>
## `interactor/reportActionResult`

`luna://com.webos.service.voiceconductor/interactor/reportActionResult`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/interactor/reportActionResult '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="interactor_setcontext"></a>
## `interactor/setContext`

`luna://com.webos.service.voiceconductor/interactor/setContext`

Setter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/interactor/setContext '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchapp"></a>
## `launchApp`

`luna://com.webos.service.voiceconductor/launchApp`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/launchApp '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizeintentbytext"></a>
## `recognizeIntentByText`

`luna://com.webos.service.voiceconductor/recognizeIntentByText`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/recognizeIntentByText '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizeintentbyvoice"></a>
## `recognizeIntentByVoice`

`luna://com.webos.service.voiceconductor/recognizeIntentByVoice`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/recognizeIntentByVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizevoice"></a>
## `recognizeVoice`

`luna://com.webos.service.voiceconductor/recognizeVoice`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/recognizeVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizevoicewithdetails"></a>
## `recognizeVoiceWithDetails`

`luna://com.webos.service.voiceconductor/recognizeVoiceWithDetails`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/recognizeVoiceWithDetails '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recordvoice"></a>
## `recordVoice`

`luna://com.webos.service.voiceconductor/recordVoice`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/recordVoice '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setinputevent"></a>
## `setInputEvent`

`luna://com.webos.service.voiceconductor/setInputEvent`

Setter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/setInputEvent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="showguide"></a>
## `showGuide`

`luna://com.webos.service.voiceconductor/showGuide`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/showGuide '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stoprecordingvoice"></a>
## `stopRecordingVoice`

`luna://com.webos.service.voiceconductor/stopRecordingVoice`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/stopRecordingVoice '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_cancelrecognition"></a>
## `system/cancelRecognition`

`luna://com.webos.service.voiceconductor/system/cancelRecognition`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/cancelRecognition '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_checkupdate"></a>
## `system/checkUpdate`

`luna://com.webos.service.voiceconductor/system/checkUpdate`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/checkUpdate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_getsupportedlanguages"></a>
## `system/getSupportedLanguages`

`luna://com.webos.service.voiceconductor/system/getSupportedLanguages`

Getter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/getSupportedLanguages '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_recognizeintentbytext"></a>
## `system/recognizeIntentByText`

`luna://com.webos.service.voiceconductor/system/recognizeIntentByText`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/recognizeIntentByText '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_recognizeintentbyvoice"></a>
## `system/recognizeIntentByVoice`

`luna://com.webos.service.voiceconductor/system/recognizeIntentByVoice`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/recognizeIntentByVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_recognizevoice"></a>
## `system/recognizeVoice`

`luna://com.webos.service.voiceconductor/system/recognizeVoice`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/recognizeVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_recognizevoicewithdetails"></a>
## `system/recognizeVoiceWithDetails`

`luna://com.webos.service.voiceconductor/system/recognizeVoiceWithDetails`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/recognizeVoiceWithDetails '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_setinputevent"></a>
## `system/setInputEvent`

`luna://com.webos.service.voiceconductor/system/setInputEvent`

Setter on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/setInputEvent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="system_stoprecordingvoice"></a>
## `system/stopRecordingVoice`

`luna://com.webos.service.voiceconductor/system/stopRecordingVoice`

Method on com.webos.service.voiceconductor (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.voiceconductor/system/stopRecordingVoice '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
