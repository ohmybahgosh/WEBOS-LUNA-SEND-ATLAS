# `com.webos.service.image`

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`combine`](#combine) | private |  | misc | Method on com.webos.service.image (from on-device permission registry; parameters undocumented). |
| [`convert`](#convert) | public |  | misc | Method on com.webos.service.image (from on-device permission registry; parameters undocumented). |
| [`cropMultiple`](#cropmultiple) | private |  | misc | Method on com.webos.service.image (from on-device permission registry; parameters undocumented). |
| [`ezResize`](#ezresize) | public |  | misc | Method on com.webos.service.image (from on-device permission registry; parameters undocumented). |
| [`imageInfo`](#imageinfo) | public |  | misc | Method on com.webos.service.image (from on-device permission registry; parameters undocumented). |

<a id="combine"></a>
## `combine`

`luna://com.webos.service.image/combine`

Method on com.webos.service.image (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.image/combine '{}'
```

> ACG groups: image.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="convert"></a>
## `convert`

`luna://com.webos.service.image/convert`

Method on com.webos.service.image (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.image/convert '{}'
```

> ACG groups: image.action, media, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="cropmultiple"></a>
## `cropMultiple`

`luna://com.webos.service.image/cropMultiple`

Method on com.webos.service.image (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.image/cropMultiple '{}'
```

> ACG groups: image.action, media, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ezresize"></a>
## `ezResize`

`luna://com.webos.service.image/ezResize`

Method on com.webos.service.image (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.image/ezResize '{}'
```

> ACG groups: image.action, media, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="imageinfo"></a>
## `imageInfo`

`luna://com.webos.service.image/imageInfo`

Method on com.webos.service.image (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.image/imageInfo '{}'
```

> ACG groups: image.action, media, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
