# `com.webos.service.image`

Image-processing utility: converts, resizes, crops and combines images and reports image info.

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`combine`](#combine) | private |  | misc | documented | Handles the combine. |
| [`convert`](#convert) | public |  | misc | documented | Handles the convert. |
| [`cropMultiple`](#cropmultiple) | private |  | misc | documented | Handles the crop multiple. |
| [`ezResize`](#ezresize) | public |  | misc | documented | Handles the ez resize. |
| [`imageInfo`](#imageinfo) | public |  | misc | documented | Handles the image info. |

<a id="combine"></a>
## `combine`

`luna://com.webos.service.image/combine`

Handles the combine.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `srcFile` | Array (required) |
| `combineDimension` | Object (optional) |
| `combineScaled` | Object (optional) |
| `position` | Object (required) |
| `backgroundColor` | String (optional) |
| `destFile` | String (required) |
| `scrim` | String (optional) |

```sh
luna-send -n 1 -f luna://com.webos.service.image/combine '{}'
```

> ACG groups: image.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="convert"></a>
## `convert`

`luna://com.webos.service.image/convert`

Handles the convert.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `src` | String (required) |
| `dest` | String (required) |
| `destType` | String (required) |
| `focusX` | Number (optional) |
| `focusY` | Number (optional) |
| `cropW` | Number (optional) |
| `cropH` | Number (optional) |

```sh
luna-send -n 1 -f luna://com.webos.service.image/convert '{}'
```

> ACG groups: image.action, media, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="cropmultiple"></a>
## `cropMultiple`

`luna://com.webos.service.image/cropMultiple`

Handles the crop multiple.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `src` | String (required) |
| `destSpec` | Array (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.image/cropMultiple '{}'
```

> ACG groups: image.action, media, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ezresize"></a>
## `ezResize`

`luna://com.webos.service.image/ezResize`

Handles the ez resize.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `src` | String (required) |
| `dest` | String (required) |
| `destType` | String (required) |
| `destSizeW` | Number (required) |
| `destSizeH` | Number (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.image/ezResize '{}'
```

> ACG groups: image.action, media, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="imageinfo"></a>
## `imageInfo`

`luna://com.webos.service.image/imageInfo`

Handles the image info.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `src` | String (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.image/imageInfo '{}'
```

> ACG groups: image.action, media, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Parameters documented from the on-device LS2 request schema (/etc/palm/schemas, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
