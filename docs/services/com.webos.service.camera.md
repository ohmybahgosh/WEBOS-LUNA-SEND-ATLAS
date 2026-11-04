# `com.webos.service.camera`

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`acquire`](#acquire) | private |  | camera | USB camera method: acquire |
| [`applyPhotoEffect`](#applyphotoeffect) | private |  | camera | USB camera method: applyPhotoEffect |
| [`close`](#close) | private |  | camera | USB camera method: close |
| [`getFirmwareVersion`](#getfirmwareversion) | private |  | camera | USB camera method: getFirmwareVersion |
| [`getInfo`](#getinfo) | public |  | camera | Returns detailed info of a camera/microphone device. |
| [`getList`](#getlist) | public | yes | camera | Lists camera and microphone devices connected to the TV. |
| [`getProperties`](#getproperties) | private |  | camera | USB camera method: getProperties |
| [`isCovered`](#iscovered) | public | yes | camera | Cover status of the built-in camera. |
| [`open`](#open) | private |  | camera | USB camera method: open |

<a id="acquire"></a>
## `acquire`

`luna://com.webos.service.camera/acquire`

USB camera method: acquire

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/acquire '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="applyphotoeffect"></a>
## `applyPhotoEffect`

`luna://com.webos.service.camera/applyPhotoEffect`

USB camera method: applyPhotoEffect

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/applyPhotoEffect '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="close"></a>
## `close`

`luna://com.webos.service.camera/close`

USB camera method: close

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/close '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getfirmwareversion"></a>
## `getFirmwareVersion`

`luna://com.webos.service.camera/getFirmwareVersion`

USB camera method: getFirmwareVersion

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/getFirmwareVersion '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getinfo"></a>
## `getInfo`

`luna://com.webos.service.camera/getInfo`

Returns detailed info of a camera/microphone device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 1-3; Deprecated from 4.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (required) device URI |

```sh
luna-send -n 1 -f luna://com.webos.service.camera/getInfo '{"uri":"camera://com.webos.service.camera/camera1"}'
```

> Deprecated from webOS TV 4.0.

Sources: [1](https://webostv.developer.lge.com/develop/references/camera)

<a id="getlist"></a>
## `getList`

`luna://com.webos.service.camera/getList`

Lists camera and microphone devices connected to the TV.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV 1-3; Deprecated from 4.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) |

```sh
luna-send -i -f luna://com.webos.service.camera/getList '{}'
```

> Deprecated from webOS TV 4.0.

Sources: [1](https://webostv.developer.lge.com/develop/references/camera)

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.camera/getProperties`

USB camera method: getProperties

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/getProperties '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="iscovered"></a>
## `isCovered`

`luna://com.webos.service.camera/isCovered`

Cover status of the built-in camera.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV 1-3; Deprecated from 4.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `uri` | String (required) |
| `subscribe` | Boolean (optional) |

```sh
luna-send -i -f luna://com.webos.service.camera/isCovered '{"uri":"camera://com.webos.service.camera/camera1"}'
```

> Deprecated from webOS TV 4.0.

Sources: [1](https://webostv.developer.lge.com/develop/references/camera)

<a id="open"></a>
## `open`

`luna://com.webos.service.camera/open`

USB camera method: open

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.camera/open '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)
