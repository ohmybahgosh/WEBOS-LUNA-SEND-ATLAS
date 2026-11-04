# `com.webos.service.tv.capture`

14 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`createHandle`](#createhandle) | private |  | media | Screen/video capture service method createHandle (name from community research) |
| [`destroyHandle`](#destroyhandle) | private |  | media | Screen/video capture service method destroyHandle (name from community research) |
| [`execute`](#execute) | private |  | media | Screen/video capture service method execute (name from community research) |
| [`executeOneShot`](#executeoneshot) | private |  | display | Legacy screenshot service name |
| [`getClipRegions`](#getclipregions) | private |  | media | Screen/video capture service method getClipRegions (name from community research) |
| [`getOptions`](#getoptions) | private |  | media | Screen/video capture service method getOptions (name from community research) |
| [`getProperties`](#getproperties) | private |  | media | Screen/video capture service method getProperties (name from community research) |
| [`isLocked`](#islocked) | private |  | media | Screen/video capture service method isLocked (name from community research) |
| [`lock`](#lock) | private |  | media | Screen/video capture service method lock (name from community research) |
| [`setClipRegions`](#setclipregions) | private |  | media | Screen/video capture service method setClipRegions (name from community research) |
| [`setOptions`](#setoptions) | private |  | media | Screen/video capture service method setOptions (name from community research) |
| [`setOutput`](#setoutput) | private |  | media | Screen/video capture service method setOutput (name from community research) |
| [`setProperties`](#setproperties) | private |  | media | Screen/video capture service method setProperties (name from community research) |
| [`unlock`](#unlock) | private |  | media | Screen/video capture service method unlock (name from community research) |

<a id="createhandle"></a>
## `createHandle`

`luna://com.webos.service.tv.capture/createHandle`

Screen/video capture service method createHandle (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/createHandle '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="destroyhandle"></a>
## `destroyHandle`

`luna://com.webos.service.tv.capture/destroyHandle`

Screen/video capture service method destroyHandle (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/destroyHandle '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="execute"></a>
## `execute`

`luna://com.webos.service.tv.capture/execute`

Screen/video capture service method execute (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/execute '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="executeoneshot"></a>
## `executeOneShot`

`luna://com.webos.service.tv.capture/executeOneShot`

Legacy screenshot service name

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** older webOS  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `path` | string |
| `method` | string |
| `format` | string |
| `width` | int |
| `height` | int |

```sh
luna-send -n 1 -f 'luna://com.webos.service.tv.capture/executeOneShot' '{"path":"/tmp/capture.png","method":"DISPLAY","format":"PNG","width":1920,"height":1080}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [2](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/core/services/device-manager.service.ts)

<a id="getclipregions"></a>
## `getClipRegions`

`luna://com.webos.service.tv.capture/getClipRegions`

Screen/video capture service method getClipRegions (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/getClipRegions '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getoptions"></a>
## `getOptions`

`luna://com.webos.service.tv.capture/getOptions`

Screen/video capture service method getOptions (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/getOptions '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.tv.capture/getProperties`

Screen/video capture service method getProperties (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/getProperties '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="islocked"></a>
## `isLocked`

`luna://com.webos.service.tv.capture/isLocked`

Screen/video capture service method isLocked (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/isLocked '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="lock"></a>
## `lock`

`luna://com.webos.service.tv.capture/lock`

Screen/video capture service method lock (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/lock '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="setclipregions"></a>
## `setClipRegions`

`luna://com.webos.service.tv.capture/setClipRegions`

Screen/video capture service method setClipRegions (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/setClipRegions '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="setoptions"></a>
## `setOptions`

`luna://com.webos.service.tv.capture/setOptions`

Screen/video capture service method setOptions (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/setOptions '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="setoutput"></a>
## `setOutput`

`luna://com.webos.service.tv.capture/setOutput`

Screen/video capture service method setOutput (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/setOutput '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="setproperties"></a>
## `setProperties`

`luna://com.webos.service.tv.capture/setProperties`

Screen/video capture service method setProperties (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/setProperties '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="unlock"></a>
## `unlock`

`luna://com.webos.service.tv.capture/unlock`

Screen/video capture service method unlock (name from community research)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (version not stated)  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.tv.capture/unlock '{}'
```

> Part of the handle-based capture API; executeOneShot (already catalogued) is the documented one-shot call. Powback audit says setOutput target semantics need on-device confirmation.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tv.capture.md), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)
