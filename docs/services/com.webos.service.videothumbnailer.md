# `com.webos.service.videothumbnailer`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getThumbnail`](#getthumbnail) | private |  | misc | Method on com.webos.service.videothumbnailer (from on-device permission registry; parameters undocumented). |
| [`getThumbnailEs`](#getthumbnailes) | private |  | misc | Method on com.webos.service.videothumbnailer (from on-device permission registry; parameters undocumented). |
| [`getVideoInfo`](#getvideoinfo) | private |  | misc | Method on com.webos.service.videothumbnailer (from on-device permission registry; parameters undocumented). |

<a id="getthumbnail"></a>
## `getThumbnail`

`luna://com.webos.service.videothumbnailer/getThumbnail`

Method on com.webos.service.videothumbnailer (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videothumbnailer/getThumbnail '{}'
```

> ACG groups: media, private, videothumbnailer.read. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getthumbnailes"></a>
## `getThumbnailEs`

`luna://com.webos.service.videothumbnailer/getThumbnailEs`

Method on com.webos.service.videothumbnailer (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videothumbnailer/getThumbnailEs '{}'
```

> ACG groups: private, videothumbnailer.read. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.videothumbnailer/getVideoInfo`

Method on com.webos.service.videothumbnailer (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videothumbnailer/getVideoInfo '{}'
```

> ACG groups: private, videothumbnailer.read. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
