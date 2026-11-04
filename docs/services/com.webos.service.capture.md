# `com.webos.service.capture`

15 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`createHandle`](#createhandle) | private |  | media | Method on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`destroyHandle`](#destroyhandle) | private |  | media | Method on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`execute`](#execute) | private |  | media | Method on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`executeOneShot`](#executeoneshot) | ssap |  | display | Take a screenshot (SSAP alias: ssap://tv/executeOneShot) |
| [`getCapability`](#getcapability) | private |  | media | Getter on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`getClipRegions`](#getclipregions) | private |  | media | Getter on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`getOptions`](#getoptions) | private |  | media | Getter on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`getProperties`](#getproperties) | private |  | media | Getter on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`isLocked`](#islocked) | private |  | media | Method on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`lock`](#lock) | private |  | media | Method on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`setClipRegions`](#setclipregions) | private |  | media | Setter on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`setOptions`](#setoptions) | private |  | media | Setter on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`setOutput`](#setoutput) | private |  | media | Setter on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`setProperties`](#setproperties) | private |  | media | Setter on com.webos.service.capture (introspected on-device; parameters undocumented). |
| [`unlock`](#unlock) | private |  | media | Method on com.webos.service.capture (introspected on-device; parameters undocumented). |

<a id="createhandle"></a>
## `createHandle`

`luna://com.webos.service.capture/createHandle`

Method on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/createHandle '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="destroyhandle"></a>
## `destroyHandle`

`luna://com.webos.service.capture/destroyHandle`

Method on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/destroyHandle '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="execute"></a>
## `execute`

`luna://com.webos.service.capture/execute`

Method on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/execute '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="executeoneshot"></a>
## `executeOneShot`

`luna://com.webos.service.capture/executeOneShot`

Take a screenshot (SSAP alias: ssap://tv/executeOneShot)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 9 (com.webos.service.capture); older: com.webos.service.tv.capture per glasshouse; webOS 4+ (older: com.webos.service.tv.capture)  
- **Confidence:** code, community

| Param | Type / notes |
|---|---|
| `method` | DISPLAY \| SCREEN \| SCREEN_WITH_SOURCE_VIDEO \| VIDEO \| GRAPHIC \| SOURCE \| BLENDED |
| `format` | BMP \| JPG \| PNG \| RGB \| RGBA \| YUV422 |
| `width` | int |
| `height` | int |
| `path` | output file path on TV, e.g. /tmp/capture.jpg |

```sh
{"type":"request","id":"1","uri":"ssap://tv/executeOneShot","payload":{"method":"DISPLAY","format":"JPG","width":960,"height":540,"path":"/tmp/capture.jpg"}}
```

> bscpylgtv `take_screenshot` calls ssap://tv/executeOneShot (no payload; returns a URL/path) and its docstring says the parameters to use are those of com.webos.service.capture/executeOneShot. LGTV Companion docs: tv/executeOneShot {method, format, width, height, path}. On webOS 4 root tools use com.webos.service.tv.capture/executeOneShot instead (glasshouse). \|\| VIDEO is clear sources only; DISPLAY includes OSD.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [3](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md), [4](https://github.com/rorygallagher2024/glasshouse/blob/main/scripts/tv.sh), [5](https://github.com/Informatic/webos-ssap-web/blob/master/demo.js), [6](https://github.com/Tecnosimples-git/Hubitat_LG_TV_Trato/blob/main/Hubitat_LG_TV_Trato_v1.8.3-TRATO-1.0.groovy), [7](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [8](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="getcapability"></a>
## `getCapability`

`luna://com.webos.service.capture/getCapability`

Getter on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/getCapability '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getclipregions"></a>
## `getClipRegions`

`luna://com.webos.service.capture/getClipRegions`

Getter on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/getClipRegions '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoptions"></a>
## `getOptions`

`luna://com.webos.service.capture/getOptions`

Getter on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/getOptions '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getproperties"></a>
## `getProperties`

`luna://com.webos.service.capture/getProperties`

Getter on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/getProperties '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="islocked"></a>
## `isLocked`

`luna://com.webos.service.capture/isLocked`

Method on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/isLocked '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="lock"></a>
## `lock`

`luna://com.webos.service.capture/lock`

Method on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/lock '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setclipregions"></a>
## `setClipRegions`

`luna://com.webos.service.capture/setClipRegions`

Setter on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/setClipRegions '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setoptions"></a>
## `setOptions`

`luna://com.webos.service.capture/setOptions`

Setter on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/setOptions '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setoutput"></a>
## `setOutput`

`luna://com.webos.service.capture/setOutput`

Setter on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/setOutput '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setproperties"></a>
## `setProperties`

`luna://com.webos.service.capture/setProperties`

Setter on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/setProperties '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unlock"></a>
## `unlock`

`luna://com.webos.service.capture/unlock`

Method on com.webos.service.capture (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.capture/unlock '{}'
```

> ACG groups: private, all, capture.client.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
