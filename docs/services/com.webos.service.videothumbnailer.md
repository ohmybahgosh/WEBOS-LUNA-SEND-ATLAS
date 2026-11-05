# `com.webos.service.videothumbnailer`

Video thumbnailer that generates video thumbnails (including from elementary streams) and reports video info.

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getThumbnail`](#getthumbnail) | private |  | misc | inferred | Returns the thumbnail. |
| [`getThumbnailEs`](#getthumbnailes) | private |  | misc | inferred | Returns the thumbnail es. |
| [`getVideoInfo`](#getvideoinfo) | private |  | misc | inferred | Returns the video info. |

<a id="getthumbnail"></a>
## `getThumbnail`

`luna://com.webos.service.videothumbnailer/getThumbnail`

Returns the thumbnail.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videothumbnailer/getThumbnail '{}'
```

> ACG groups: media, private, videothumbnailer.read. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getthumbnailes"></a>
## `getThumbnailEs`

`luna://com.webos.service.videothumbnailer/getThumbnailEs`

Returns the thumbnail es.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videothumbnailer/getThumbnailEs '{}'
```

> ACG groups: private, videothumbnailer.read. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvideoinfo"></a>
## `getVideoInfo`

`luna://com.webos.service.videothumbnailer/getVideoInfo`

Returns the video info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videothumbnailer/getVideoInfo '{}'
```

> ACG groups: private, videothumbnailer.read. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
