# `com.webos.surfacemanager.hcap`

Surface-manager HCAP helper: gets and sets the opacity of the HCAP (broadcast app) surface layer. Narrow UI-compositing role. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getHcapOpacity`](#gethcapopacity) | private |  | ui | inferred | Returns the hcap opacity. |
| [`setHcapOpacity`](#sethcapopacity) | private |  | ui | inferred | Sets the hcap opacity. |

<a id="gethcapopacity"></a>
## `getHcapOpacity`

`luna://com.webos.surfacemanager.hcap/getHcapOpacity`

Returns the hcap opacity.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.hcap/getHcapOpacity '{}'
```

> ACG groups: surfaces.status, private, all, launcher.status.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sethcapopacity"></a>
## `setHcapOpacity`

`luna://com.webos.surfacemanager.hcap/setHcapOpacity`

Sets the hcap opacity.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.hcap/setHcapOpacity '{}'
```

> ACG groups: surfaces.control, private, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
