# `yandex.alice.adapter.plugin`

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cancelRecognition`](#cancelrecognition) | public |  | misc | Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`getVoiceUiEvents`](#getvoiceuievents) | public |  | input | Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`interactor/register`](#interactor_register) | public |  | misc | Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`interactor/setContext`](#interactor_setcontext) | public |  | misc | Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`load`](#load) | private |  | misc | Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`recognizeIntentByText`](#recognizeintentbytext) | private |  | misc | Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`recognizeIntentByVoice`](#recognizeintentbyvoice) | private |  | input | Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`sendYskCommand`](#sendyskcommand) | public |  | misc | Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`stopRecordingVoice`](#stoprecordingvoice) | private |  | input | Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented). |
| [`unload`](#unload) | private |  | misc | Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented). |

<a id="cancelrecognition"></a>
## `cancelRecognition`

`luna://yandex.alice.adapter.plugin/cancelRecognition`

Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://yandex.alice.adapter.plugin/cancelRecognition '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvoiceuievents"></a>
## `getVoiceUiEvents`

`luna://yandex.alice.adapter.plugin/getVoiceUiEvents`

Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://yandex.alice.adapter.plugin/getVoiceUiEvents '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="interactor_register"></a>
## `interactor/register`

`luna://yandex.alice.adapter.plugin/interactor/register`

Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://yandex.alice.adapter.plugin/interactor/register '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="interactor_setcontext"></a>
## `interactor/setContext`

`luna://yandex.alice.adapter.plugin/interactor/setContext`

Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://yandex.alice.adapter.plugin/interactor/setContext '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="load"></a>
## `load`

`luna://yandex.alice.adapter.plugin/load`

Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://yandex.alice.adapter.plugin/load '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognizeintentbytext"></a>
## `recognizeIntentByText`

`luna://yandex.alice.adapter.plugin/recognizeIntentByText`

Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://yandex.alice.adapter.plugin/recognizeIntentByText '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="recognizeintentbyvoice"></a>
## `recognizeIntentByVoice`

`luna://yandex.alice.adapter.plugin/recognizeIntentByVoice`

Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://yandex.alice.adapter.plugin/recognizeIntentByVoice '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendyskcommand"></a>
## `sendYskCommand`

`luna://yandex.alice.adapter.plugin/sendYskCommand`

Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://yandex.alice.adapter.plugin/sendYskCommand '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stoprecordingvoice"></a>
## `stopRecordingVoice`

`luna://yandex.alice.adapter.plugin/stopRecordingVoice`

Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://yandex.alice.adapter.plugin/stopRecordingVoice '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="unload"></a>
## `unload`

`luna://yandex.alice.adapter.plugin/unload`

Method on yandex.alice.adapter.plugin (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://yandex.alice.adapter.plugin/unload '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
