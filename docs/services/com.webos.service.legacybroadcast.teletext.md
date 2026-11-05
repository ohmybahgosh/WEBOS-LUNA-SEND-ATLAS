# `com.webos.service.legacybroadcast.teletext`

Legacy-broadcast teletext service: enables/disables teletext (and teletext PES), and reports teletext data, lists and state. _(inferred from the service's methods)_

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`disableTeletextPes`](#disableteletextpes) | private |  | tv-broadcast | inferred | Disables the teletext pes. |
| [`enableTeletext`](#enableteletext) | private |  | tv-broadcast | inferred | Enables the teletext. |
| [`enableTeletextPes`](#enableteletextpes) | private |  | tv-broadcast | inferred | Enables the teletext pes. |
| [`getCurrentTeletext`](#getcurrentteletext) | private |  | tv-broadcast | inferred | Returns the current teletext. |
| [`getTeletextData`](#getteletextdata) | private |  | tv-broadcast | inferred | Returns the teletext data. |
| [`getTeletextInfo`](#getteletextinfo) | private |  | tv-broadcast | inferred | Returns the teletext info. |
| [`getTeletextList`](#getteletextlist) | private |  | tv-broadcast | inferred | Returns the teletext list. |
| [`getTeletextState`](#getteletextstate) | private |  | tv-broadcast | inferred | Returns the teletext state. |
| [`isTimeAvailable`](#istimeavailable) | private |  | tv-broadcast | inferred | Reports whether the time available is set. |
| [`setTeletext`](#setteletext) | private |  | tv-broadcast | inferred | Sets the teletext. |

<a id="disableteletextpes"></a>
## `disableTeletextPes`

`luna://com.webos.service.legacybroadcast.teletext/disableTeletextPes`

Disables the teletext pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.teletext/disableTeletextPes '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enableteletext"></a>
## `enableTeletext`

`luna://com.webos.service.legacybroadcast.teletext/enableTeletext`

Enables the teletext.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.teletext/enableTeletext '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enableteletextpes"></a>
## `enableTeletextPes`

`luna://com.webos.service.legacybroadcast.teletext/enableTeletextPes`

Enables the teletext pes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.teletext/enableTeletextPes '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentteletext"></a>
## `getCurrentTeletext`

`luna://com.webos.service.legacybroadcast.teletext/getCurrentTeletext`

Returns the current teletext.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.teletext/getCurrentTeletext '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextdata"></a>
## `getTeletextData`

`luna://com.webos.service.legacybroadcast.teletext/getTeletextData`

Returns the teletext data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.teletext/getTeletextData '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextinfo"></a>
## `getTeletextInfo`

`luna://com.webos.service.legacybroadcast.teletext/getTeletextInfo`

Returns the teletext info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.teletext/getTeletextInfo '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextlist"></a>
## `getTeletextList`

`luna://com.webos.service.legacybroadcast.teletext/getTeletextList`

Returns the teletext list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.teletext/getTeletextList '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextstate"></a>
## `getTeletextState`

`luna://com.webos.service.legacybroadcast.teletext/getTeletextState`

Returns the teletext state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.teletext/getTeletextState '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="istimeavailable"></a>
## `isTimeAvailable`

`luna://com.webos.service.legacybroadcast.teletext/isTimeAvailable`

Reports whether the time available is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.teletext/isTimeAvailable '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setteletext"></a>
## `setTeletext`

`luna://com.webos.service.legacybroadcast.teletext/setTeletext`

Sets the teletext.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.teletext/setTeletext '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
