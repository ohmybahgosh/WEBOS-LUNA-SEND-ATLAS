# `com.webos.surfacemanager.extended`

Surface-manager extension: gets and sets texture-rendering status for the UI compositor. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getTextureRenderingStatus`](#gettexturerenderingstatus) | private |  | ui | inferred | Returns the texture rendering status. |
| [`setTextureRenderingStatus`](#settexturerenderingstatus) | private |  | ui | inferred | Sets the texture rendering status. |

<a id="gettexturerenderingstatus"></a>
## `getTextureRenderingStatus`

`luna://com.webos.surfacemanager.extended/getTextureRenderingStatus`

Returns the texture rendering status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `running` |  |

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.extended/getTextureRenderingStatus '{}'
```

> ACG groups: private, surfaces.status, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settexturerenderingstatus"></a>
## `setTextureRenderingStatus`

`luna://com.webos.surfacemanager.extended/setTextureRenderingStatus`

Sets the texture rendering status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.surfacemanager.extended/setTextureRenderingStatus '{}'
```

> ACG groups: private, surfaces.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
