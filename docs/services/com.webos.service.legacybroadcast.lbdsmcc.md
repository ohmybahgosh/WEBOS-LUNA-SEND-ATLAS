# `com.webos.service.legacybroadcast.lbdsmcc`

Legacy broadcast DSM-CC service: mounts and attaches DSM-CC object carousels, retrieves carousel files, and registers stream events for data/interactive broadcasting. _(inferred from the service's methods)_

8 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`attach`](#attach) | private |  | tv-broadcast | inferred | Handles the attach. |
| [`detachDsmccFiles`](#detachdsmccfiles) | private |  | tv-broadcast | inferred | Handles the detach dsmcc files. |
| [`getCarouselInfo`](#getcarouselinfo) | private |  | tv-broadcast | inferred | Returns the carousel info. |
| [`getDebugDsmccInfo`](#getdebugdsmccinfo) | private |  | tv-broadcast | inferred | Returns the debug dsmcc info. |
| [`getDsmccFile`](#getdsmccfile) | private |  | tv-broadcast | inferred | Returns the dsmcc file. |
| [`mountDsmcc`](#mountdsmcc) | private |  | tv-broadcast | inferred | Mounts the dsmcc. |
| [`registerStreamEvent`](#registerstreamevent) | private |  | tv-broadcast | inferred | Registers the stream event. |
| [`unregisterStreamEvent`](#unregisterstreamevent) | private |  | tv-broadcast | inferred | Unregisters the stream event. |

<a id="attach"></a>
## `attach`

`luna://com.webos.service.legacybroadcast.lbdsmcc/attach`

Handles the attach.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.lbdsmcc/attach '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="detachdsmccfiles"></a>
## `detachDsmccFiles`

`luna://com.webos.service.legacybroadcast.lbdsmcc/detachDsmccFiles`

Handles the detach dsmcc files.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.lbdsmcc/detachDsmccFiles '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcarouselinfo"></a>
## `getCarouselInfo`

`luna://com.webos.service.legacybroadcast.lbdsmcc/getCarouselInfo`

Returns the carousel info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.lbdsmcc/getCarouselInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdebugdsmccinfo"></a>
## `getDebugDsmccInfo`

`luna://com.webos.service.legacybroadcast.lbdsmcc/getDebugDsmccInfo`

Returns the debug dsmcc info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.lbdsmcc/getDebugDsmccInfo '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdsmccfile"></a>
## `getDsmccFile`

`luna://com.webos.service.legacybroadcast.lbdsmcc/getDsmccFile`

Returns the dsmcc file.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.lbdsmcc/getDsmccFile '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="mountdsmcc"></a>
## `mountDsmcc`

`luna://com.webos.service.legacybroadcast.lbdsmcc/mountDsmcc`

Mounts the dsmcc.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.lbdsmcc/mountDsmcc '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerstreamevent"></a>
## `registerStreamEvent`

`luna://com.webos.service.legacybroadcast.lbdsmcc/registerStreamEvent`

Registers the stream event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.lbdsmcc/registerStreamEvent '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unregisterstreamevent"></a>
## `unregisterStreamEvent`

`luna://com.webos.service.legacybroadcast.lbdsmcc/unregisterStreamEvent`

Unregisters the stream event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.lbdsmcc/unregisterStreamEvent '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
