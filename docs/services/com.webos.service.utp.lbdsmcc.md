# `com.webos.service.utp.lbdsmcc`

DSM-CC data-carousel service (utp stack): mounts and attaches DSM-CC carousels, fetches carousel files, and registers for stream events in digital broadcast. _(inferred from the service's methods)_

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`attach`](#attach) | private |  | system-info | inferred | Handles the attach. |
| [`detachDsmccFiles`](#detachdsmccfiles) | private |  | system-info | inferred | Handles the detach dsmcc files. |
| [`getCarouselInfo`](#getcarouselinfo) | private |  | system-info | inferred | Returns the carousel info. |
| [`getDsmccFile`](#getdsmccfile) | private |  | system-info | inferred | Returns the dsmcc file. |
| [`mountDsmcc`](#mountdsmcc) | private |  | system-info | inferred | Mounts the dsmcc. |
| [`registerStreamEvent`](#registerstreamevent) | private |  | system-info | inferred | Registers the stream event. |
| [`unregisterStreamEvent`](#unregisterstreamevent) | private |  | system-info | inferred | Unregisters the stream event. |

<a id="attach"></a>
## `attach`

`luna://com.webos.service.utp.lbdsmcc/attach`

Handles the attach.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.lbdsmcc/attach '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="detachdsmccfiles"></a>
## `detachDsmccFiles`

`luna://com.webos.service.utp.lbdsmcc/detachDsmccFiles`

Handles the detach dsmcc files.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.lbdsmcc/detachDsmccFiles '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcarouselinfo"></a>
## `getCarouselInfo`

`luna://com.webos.service.utp.lbdsmcc/getCarouselInfo`

Returns the carousel info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.lbdsmcc/getCarouselInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdsmccfile"></a>
## `getDsmccFile`

`luna://com.webos.service.utp.lbdsmcc/getDsmccFile`

Returns the dsmcc file.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.lbdsmcc/getDsmccFile '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="mountdsmcc"></a>
## `mountDsmcc`

`luna://com.webos.service.utp.lbdsmcc/mountDsmcc`

Mounts the dsmcc.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.lbdsmcc/mountDsmcc '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerstreamevent"></a>
## `registerStreamEvent`

`luna://com.webos.service.utp.lbdsmcc/registerStreamEvent`

Registers the stream event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.lbdsmcc/registerStreamEvent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unregisterstreamevent"></a>
## `unregisterStreamEvent`

`luna://com.webos.service.utp.lbdsmcc/unregisterStreamEvent`

Unregisters the stream event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.lbdsmcc/unregisterStreamEvent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
