# `com.webos.service.blegattsoundbar`

Soundbar control over Bluetooth LE GATT: starts/terminates the link and sends/gets commands to a paired soundbar. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getCommand`](#getcommand) | private |  | bluetooth | inferred | Returns the command. |
| [`setCommand`](#setcommand) | private |  | bluetooth | inferred | Sets the command. |
| [`start`](#start) | private |  | bluetooth | inferred | Starts the blegattsoundbar. |
| [`terminate`](#terminate) | private |  | bluetooth | inferred | Handles the terminate. |

<a id="getcommand"></a>
## `getCommand`

`luna://com.webos.service.blegattsoundbar/getCommand`

Returns the command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.blegattsoundbar/getCommand '{}'
```

> ACG groups: private, com.webos.app.soundbar-setting, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcommand"></a>
## `setCommand`

`luna://com.webos.service.blegattsoundbar/setCommand`

Sets the command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.blegattsoundbar/setCommand '{}'
```

> ACG groups: private, com.webos.app.soundbar-setting, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.blegattsoundbar/start`

Starts the blegattsoundbar.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.blegattsoundbar/start '{}'
```

> ACG groups: private, configurator.callbacks, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="terminate"></a>
## `terminate`

`luna://com.webos.service.blegattsoundbar/terminate`

Handles the terminate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.blegattsoundbar/terminate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
