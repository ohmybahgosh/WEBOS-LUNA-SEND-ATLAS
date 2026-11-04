# `amazon.alexa.adapter.plugin`

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cancelRecognition`](#cancelrecognition) | private |  | input | Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |
| [`executeFarfieldSetting`](#executefarfieldsetting) | private |  | input | Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`getAccessToken`](#getaccesstoken) | public |  | input | Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`getAppMessage`](#getappmessage) | private |  | input | Getter on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |
| [`getAvsMusic`](#getavsmusic) | public |  | input | Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`getAvsStatus`](#getavsstatus) | public |  | input | Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`getCblData`](#getcbldata) | public |  | input | Getter on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |
| [`getDialogState`](#getdialogstate) | private |  | input | Getter on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |
| [`getForegroundApp`](#getforegroundapp) | public |  | input | Getter on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |
| [`getFornaxVersion`](#getfornaxversion) | public |  | input | Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`isRegistered`](#isregistered) | public |  | input | Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |
| [`launchShortcutPanel`](#launchshortcutpanel) | public |  | apps | Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |
| [`load`](#load) | private |  | input | Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |
| [`recognizeIntentByVoice`](#recognizeintentbyvoice) | private |  | input | Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |
| [`sendAvsCommand`](#sendavscommand) | public |  | input | Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`setAppMessage`](#setappmessage) | private |  | input | Setter on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |
| [`stopRecordingVoice`](#stoprecordingvoice) | private |  | input | Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |
| [`testToast`](#testtoast) | private |  | notifications | Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented). |

<a id="cancelrecognition"></a>
## `cancelRecognition`

`luna://amazon.alexa.adapter.plugin/cancelRecognition`

Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/cancelRecognition '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="executefarfieldsetting"></a>
## `executeFarfieldSetting`

`luna://amazon.alexa.adapter.plugin/executeFarfieldSetting`

Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/executeFarfieldSetting '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getaccesstoken"></a>
## `getAccessToken`

`luna://amazon.alexa.adapter.plugin/getAccessToken`

Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/getAccessToken '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getappmessage"></a>
## `getAppMessage`

`luna://amazon.alexa.adapter.plugin/getAppMessage`

Getter on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/getAppMessage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getavsmusic"></a>
## `getAvsMusic`

`luna://amazon.alexa.adapter.plugin/getAvsMusic`

Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/getAvsMusic '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getavsstatus"></a>
## `getAvsStatus`

`luna://amazon.alexa.adapter.plugin/getAvsStatus`

Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/getAvsStatus '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcbldata"></a>
## `getCblData`

`luna://amazon.alexa.adapter.plugin/getCblData`

Getter on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/getCblData '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdialogstate"></a>
## `getDialogState`

`luna://amazon.alexa.adapter.plugin/getDialogState`

Getter on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/getDialogState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getforegroundapp"></a>
## `getForegroundApp`

`luna://amazon.alexa.adapter.plugin/getForegroundApp`

Getter on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/getForegroundApp '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfornaxversion"></a>
## `getFornaxVersion`

`luna://amazon.alexa.adapter.plugin/getFornaxVersion`

Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/getFornaxVersion '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="isregistered"></a>
## `isRegistered`

`luna://amazon.alexa.adapter.plugin/isRegistered`

Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/isRegistered '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchshortcutpanel"></a>
## `launchShortcutPanel`

`luna://amazon.alexa.adapter.plugin/launchShortcutPanel`

Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/launchShortcutPanel '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="load"></a>
## `load`

`luna://amazon.alexa.adapter.plugin/load`

Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/load '{}'
```

> ACG groups: configurator.callbacks, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="recognizeintentbyvoice"></a>
## `recognizeIntentByVoice`

`luna://amazon.alexa.adapter.plugin/recognizeIntentByVoice`

Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/recognizeIntentByVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendavscommand"></a>
## `sendAvsCommand`

`luna://amazon.alexa.adapter.plugin/sendAvsCommand`

Method on amazon.alexa.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/sendAvsCommand '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setappmessage"></a>
## `setAppMessage`

`luna://amazon.alexa.adapter.plugin/setAppMessage`

Setter on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/setAppMessage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stoprecordingvoice"></a>
## `stopRecordingVoice`

`luna://amazon.alexa.adapter.plugin/stopRecordingVoice`

Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/stopRecordingVoice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testtoast"></a>
## `testToast`

`luna://amazon.alexa.adapter.plugin/testToast`

Method on amazon.alexa.adapter.plugin (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://amazon.alexa.adapter.plugin/testToast '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
