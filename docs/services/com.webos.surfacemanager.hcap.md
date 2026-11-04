# `com.webos.surfacemanager.hcap`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getHcapOpacity`](#gethcapopacity) | private |  | ui | Getter on com.webos.surfacemanager.hcap (introspected on-device; parameters undocumented). |
| [`setHcapOpacity`](#sethcapopacity) | private |  | ui | Setter on com.webos.surfacemanager.hcap (introspected on-device; parameters undocumented). |

<a id="gethcapopacity"></a>
## `getHcapOpacity`

`luna://com.webos.surfacemanager.hcap/getHcapOpacity`

Getter on com.webos.surfacemanager.hcap (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.hcap/getHcapOpacity '{}'
```

> ACG groups: surfaces.status, private, all, launcher.status.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sethcapopacity"></a>
## `setHcapOpacity`

`luna://com.webos.surfacemanager.hcap/setHcapOpacity`

Setter on com.webos.surfacemanager.hcap (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.hcap/setHcapOpacity '{}'
```

> ACG groups: surfaces.control, private, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
