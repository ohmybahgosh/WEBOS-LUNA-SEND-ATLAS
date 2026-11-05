# `com.webos.surfacemanager.input`

Surface-manager input service: blocks and unblocks key input, reports key-input block state, and registers allowed keys and per-app keymasks. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`blockKeyInput`](#blockkeyinput) | private |  | ui | inferred | Blocks the key input. |
| [`cancelBlockKeyInput`](#cancelblockkeyinput) | private |  | ui | inferred | Cancels the block key input. |
| [`getForegroundAppKeymask`](#getforegroundappkeymask) | private |  | ui | inferred | Returns the foreground app keymask. |
| [`getKeyInputBlockState`](#getkeyinputblockstate) | private |  | ui | inferred | Returns the key input block state. |
| [`registerAllowedKey`](#registerallowedkey) | private |  | ui | inferred | Registers the allowed key. |

<a id="blockkeyinput"></a>
## `blockKeyInput`

`luna://com.webos.surfacemanager.input/blockKeyInput`

Blocks the key input.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.input/blockKeyInput '{}'
```

> ACG groups: private, surfaces.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="cancelblockkeyinput"></a>
## `cancelBlockKeyInput`

`luna://com.webos.surfacemanager.input/cancelBlockKeyInput`

Cancels the block key input.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.input/cancelBlockKeyInput '{}'
```

> ACG groups: private, surfaces.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getforegroundappkeymask"></a>
## `getForegroundAppKeymask`

`luna://com.webos.surfacemanager.input/getForegroundAppKeymask`

Returns the foreground app keymask.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.input/getForegroundAppKeymask '{}'
```

> ACG groups: private, surfaces.status, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getkeyinputblockstate"></a>
## `getKeyInputBlockState`

`luna://com.webos.surfacemanager.input/getKeyInputBlockState`

Returns the key input block state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.input/getKeyInputBlockState '{}'
```

> ACG groups: surfaces.status, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerallowedkey"></a>
## `registerAllowedKey`

`luna://com.webos.surfacemanager.input/registerAllowedKey`

Registers the allowed key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.input/registerAllowedKey '{}'
```

> ACG groups: private, surfaces.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
