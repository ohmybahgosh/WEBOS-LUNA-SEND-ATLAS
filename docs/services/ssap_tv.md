# `ssap:tv`

SSAP TV service (TV remote-control protocol): changes channels, lists channels and programs, reports the current channel, and switches external inputs.

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`channelDown`](#channeldown) | ssap |  | tv-broadcast | documented | Channel down |
| [`channelUp`](#channelup) | ssap |  | tv-broadcast | documented | Channel up |
| [`getACRAuthToken`](#getacrauthtoken) | ssap |  | security | documented | Get ACR auth token |
| [`getChannelCurrentProgramInfo`](#getchannelcurrentprograminfo) | ssap |  | tv-broadcast | documented | Get currently airing program info |
| [`getChannelList`](#getchannellist) | ssap | yes | tv-broadcast | documented | List tuned channels |
| [`getChannelProgramInfo`](#getchannelprograminfo) | ssap | yes | tv-broadcast | documented | Get program (EPG) info for a channel |
| [`getCurrentChannel`](#getcurrentchannel) | ssap | yes | tv-broadcast | documented | Get/subscribe current channel |
| [`getExternalInputList`](#getexternalinputlist) | ssap | yes | input | documented | List external inputs |
| [`openChannel`](#openchannel) | ssap |  | tv-broadcast | documented | Tune a channel |
| [`switchInput`](#switchinput) | ssap |  | input | documented | Switch to input |

<a id="channeldown"></a>
## `channelDown`

`ssap://tv/channelDown`

Channel down

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://tv/channelDown","payload":{}}
```

> The SSAP namespace 'tv' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mtv.go)

<a id="channelup"></a>
## `channelUp`

`ssap://tv/channelUp`

Channel up

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://tv/channelUp","payload":{}}
```

> The SSAP namespace 'tv' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mtv.go)

<a id="getacrauthtoken"></a>
## `getACRAuthToken`

`ssap://tv/getACRAuthToken`

Get ACR auth token

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://tv/getACRAuthToken","payload":{}}
```

> Returns 401 insufficient permissions for normal clients (snabb/webostv); manifest permission name READ_TV_ACR_AUTH_TOKEN exists (homebridge-lgwebos-tv manifest). The SSAP namespace 'tv' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/snabb/webostv/blob/master/mtv.go), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java)

<a id="getchannelcurrentprograminfo"></a>
## `getChannelCurrentProgramInfo`

`ssap://tv/getChannelCurrentProgramInfo`

Get currently airing program info

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `channelId` | string (optional) |

```sh
{"type":"request","id":"1","uri":"ssap://tv/getChannelCurrentProgramInfo","payload":{}}
```

> Fields: programId, programName, description, startTime, endTime, localStartTime, localEndTime, channelId, channelName, channelNumber, channelMode, duration (snabb/webostv). The SSAP namespace 'tv' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/snabb/webostv/blob/master/mtv.go), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/webos/WebOSTVDeviceService.java)

<a id="getchannellist"></a>
## `getChannelList`

`ssap://tv/getChannelList`

List tuned channels

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://tv/getChannelList","payload":{}}
```

> Response key channelList. WARNING (lgtv2 README): on TVs without tuned channels (HDMI/ARC-only setups, seen on webOS 6.0) the TV closes the websocket. The SSAP namespace 'tv' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mtv.go), [4](https://github.com/hobbyquaker/lgtv2/blob/master/README.md)

<a id="getchannelprograminfo"></a>
## `getChannelProgramInfo`

`ssap://tv/getChannelProgramInfo`

Get program (EPG) info for a channel

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `channelId` | string (optional) |

```sh
{"type":"request","id":"1","uri":"ssap://tv/getChannelProgramInfo","payload":{}}
```

> 500 on TVs without tuned channels (lgtv2 README). The SSAP namespace 'tv' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mtv.go), [4](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java)

<a id="getcurrentchannel"></a>
## `getCurrentChannel`

`ssap://tv/getCurrentChannel`

Get/subscribe current channel

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://tv/getCurrentChannel","payload":{}}
```

> Returns 500 Application error when not in live TV (lgtv2 README). bscpylgtv subscribes to it only when Live TV (com.webos.app.livetv) is the foreground app. The SSAP namespace 'tv' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mtv.go), [4](https://github.com/hobbyquaker/lgtv2/blob/master/README.md)

<a id="getexternalinputlist"></a>
## `getExternalInputList`

`ssap://tv/getExternalInputList`

List external inputs

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://tv/getExternalInputList","payload":{}}
```

> Response key devices: [{id:'HDMI_1', label, connected, appId, icon,...}]. The SSAP namespace 'tv' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mtv.go)

<a id="openchannel"></a>
## `openChannel`

`ssap://tv/openChannel`

Tune a channel

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `channelId` | string |
| `channelNumber` | string (alternative to channelId) |

```sh
{"type":"request","id":"1","uri":"ssap://tv/openChannel","payload":{"channelId":"..."}}
```

> The SSAP namespace 'tv' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mtv.go), [4](https://github.com/hobbyquaker/lgtv2/blob/master/README.md)

<a id="switchinput"></a>
## `switchInput`

`ssap://tv/switchInput`

Switch to input

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `inputId` | string e.g. HDMI_1 |

```sh
{"type":"request","id":"1","uri":"ssap://tv/switchInput","payload":{"inputId":"HDMI_1"}}
```

> The SSAP namespace 'tv' is an alias defined by the TV's SSAP gateway (listed by ssap://api/getServiceList); the underlying luna service/method is not stated in the sources read, so this record is keyed on the SSAP namespace.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/home-assistant-libs/aiowebostv/blob/main/aiowebostv/endpoints.py), [3](https://github.com/snabb/webostv/blob/master/mtv.go)
