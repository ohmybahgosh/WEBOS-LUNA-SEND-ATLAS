# `com.webos.surfacemanager.extended`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getTextureRenderingStatus`](#gettexturerenderingstatus) | private |  | ui | Getter on com.webos.surfacemanager.extended (introspected on-device; parameters undocumented). |
| [`setTextureRenderingStatus`](#settexturerenderingstatus) | private |  | ui | Setter on com.webos.surfacemanager.extended (introspected on-device; parameters undocumented). |

<a id="gettexturerenderingstatus"></a>
## `getTextureRenderingStatus`

`luna://com.webos.surfacemanager.extended/getTextureRenderingStatus`

Getter on com.webos.surfacemanager.extended (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.extended/getTextureRenderingStatus '{}'
```

> ACG groups: private, surfaces.status, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settexturerenderingstatus"></a>
## `setTextureRenderingStatus`

`luna://com.webos.surfacemanager.extended/setTextureRenderingStatus`

Setter on com.webos.surfacemanager.extended (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.extended/setTextureRenderingStatus '{}'
```

> ACG groups: private, surfaces.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
