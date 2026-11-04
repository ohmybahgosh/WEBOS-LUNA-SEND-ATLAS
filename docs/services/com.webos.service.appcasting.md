# `com.webos.service.appcasting`

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`debug`](#debug) | private |  | security | Method on com.webos.service.appcasting (introspected on-device; parameters undocumented). |
| [`getCommand`](#getcommand) | ssap | yes | media | Subscribe to appcasting commands from the TV |
| [`getMediaInfo`](#getmediainfo) | private |  | media | Getter on com.webos.service.appcasting (introspected on-device; parameters undocumented). |
| [`getState`](#getstate) | private |  | security | Getter on com.webos.service.appcasting (introspected on-device; parameters undocumented). |
| [`localizationTest`](#localizationtest) | private |  | security | Method on com.webos.service.appcasting (introspected on-device; parameters undocumented). |
| [`receiveUIBCEvent`](#receiveuibcevent) | ssap | yes | media | Subscribe to UIBC user-input events (screen mirroring) |
| [`sendAppMsg`](#sendappmsg) | private |  | security | Method on com.webos.service.appcasting (introspected on-device; parameters undocumented). |
| [`sendCommand`](#sendcommand) | ssap |  | media | Send appcasting (LG Cast) command: payload {cmd, service}; cmd values in ConnectSDK: CONNECT, GET_PARAMETER, SET_PARAMETER, PLAY, PAUSE, KEE |
| [`sendUIBCEvent`](#senduibcevent) | private |  | security | Method on com.webos.service.appcasting (introspected on-device; parameters undocumented). |

<a id="debug"></a>
## `debug`

`luna://com.webos.service.appcasting/debug`

Method on com.webos.service.appcasting (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.appcasting/debug '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcommand"></a>
## `getCommand`

`luna://com.webos.service.appcasting/getCommand`

Subscribe to appcasting commands from the TV

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `subscribe` | true |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.appcasting/getCommand","payload":{}}
```

> Used by ConnectSDK LGCast screen mirroring.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/lgcast/common/connection/LGCastCommand.java)

<a id="getmediainfo"></a>
## `getMediaInfo`

`luna://com.webos.service.appcasting/getMediaInfo`

Getter on com.webos.service.appcasting (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.appcasting/getMediaInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstate"></a>
## `getState`

`luna://com.webos.service.appcasting/getState`

Getter on com.webos.service.appcasting (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.appcasting/getState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="localizationtest"></a>
## `localizationTest`

`luna://com.webos.service.appcasting/localizationTest`

Method on com.webos.service.appcasting (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.appcasting/localizationTest '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="receiveuibcevent"></a>
## `receiveUIBCEvent`

`luna://com.webos.service.appcasting/receiveUIBCEvent`

Subscribe to UIBC user-input events (screen mirroring)

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `subscribe` | true |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.appcasting/receiveUIBCEvent","payload":{}}
```

> Used by ConnectSDK LGCast screen mirroring.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/lgcast/common/connection/LGCastCommand.java)

<a id="sendappmsg"></a>
## `sendAppMsg`

`luna://com.webos.service.appcasting/sendAppMsg`

Method on com.webos.service.appcasting (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.appcasting/sendAppMsg '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendcommand"></a>
## `sendCommand`

`luna://com.webos.service.appcasting/sendCommand`

Send appcasting (LG Cast) command: payload {cmd, service}; cmd values in ConnectSDK: CONNECT, GET_PARAMETER, SET_PARAMETER, PLAY, PAUSE, KEEPALIVE, TEARDOWN (also deviceInfo, clientKey keys)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `cmd` | string |
| `service` | string feature name |
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.appcasting/sendCommand","payload":{}}
```

> Used by ConnectSDK LGCast screen mirroring.

Sources: [1](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/lgcast/common/connection/LGCastCommand.java)

<a id="senduibcevent"></a>
## `sendUIBCEvent`

`luna://com.webos.service.appcasting/sendUIBCEvent`

Method on com.webos.service.appcasting (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.appcasting/sendUIBCEvent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
