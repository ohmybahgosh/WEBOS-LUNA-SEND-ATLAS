# `com.webos.service.browser`

Appears to provide browser-side device and file access: mounts and lists storage devices, reads content and size properties, and processes documents. _(inferred from the service's methods)_

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`config`](#config) | private |  | settings | inferred | Handles the config. |
| [`getDeviceProperties`](#getdeviceproperties) | public |  | misc | inferred | Returns the device properties. |
| [`getListContent`](#getlistcontent) | public |  | misc | inferred | Returns the list content. |
| [`getSizeProperties`](#getsizeproperties) | public |  | misc | inferred | Returns the size properties. |
| [`invoke`](#invoke) | public |  | misc | inferred | Handles the invoke. |
| [`listDeviceContents`](#listdevicecontents) | public |  | input | inferred | Lists the device contents. |
| [`listMountDevices`](#listmountdevices) | private |  | misc | inferred | Lists the mount devices. |
| [`mount`](#mount) | private |  | misc | inferred | Mounts the browser. |
| [`processDocument`](#processdocument) | public |  | misc | inferred | Processes the document. |

<a id="config"></a>
## `config`

`luna://com.webos.service.browser/config`

Handles the config.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.browser/config '{}'
```

> ACG groups: all, private, browser.public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdeviceproperties"></a>
## `getDeviceProperties`

`luna://com.webos.service.browser/getDeviceProperties`

Returns the device properties.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.browser/getDeviceProperties '{}'
```

> ACG groups: viewer.public, all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getlistcontent"></a>
## `getListContent`

`luna://com.webos.service.browser/getListContent`

Returns the list content.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.browser/getListContent '{}'
```

> ACG groups: viewer.public, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsizeproperties"></a>
## `getSizeProperties`

`luna://com.webos.service.browser/getSizeProperties`

Returns the size properties.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.browser/getSizeProperties '{}'
```

> ACG groups: viewer.public, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="invoke"></a>
## `invoke`

`luna://com.webos.service.browser/invoke`

Handles the invoke.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.browser/invoke '{}'
```

> ACG groups: all, private, public, browser.public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listdevicecontents"></a>
## `listDeviceContents`

`luna://com.webos.service.browser/listDeviceContents`

Lists the device contents.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.browser/listDeviceContents '{}'
```

> ACG groups: viewer.public, all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listmountdevices"></a>
## `listMountDevices`

`luna://com.webos.service.browser/listMountDevices`

Lists the mount devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.browser/listMountDevices '{}'
```

> ACG groups: all, private, browser.public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="mount"></a>
## `mount`

`luna://com.webos.service.browser/mount`

Mounts the browser.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.browser/mount '{}'
```

> ACG groups: all, private, browser.public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="processdocument"></a>
## `processDocument`

`luna://com.webos.service.browser/processDocument`

Processes the document.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.browser/processDocument '{}'
```

> ACG groups: viewer.public, all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
