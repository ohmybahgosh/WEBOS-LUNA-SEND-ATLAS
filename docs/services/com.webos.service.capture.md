# `com.webos.service.capture`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`executeOneShot`](#executeoneshot) | ssap |  | display | Take a screenshot (SSAP alias: ssap://tv/executeOneShot) |

<a id="executeoneshot"></a>
## `executeOneShot`

`luna://com.webos.service.capture/executeOneShot`

Take a screenshot (SSAP alias: ssap://tv/executeOneShot)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 9 (com.webos.service.capture); older: com.webos.service.tv.capture per glasshouse; webOS 4+ (older: com.webos.service.tv.capture)  
- **Confidence:** code, community

| Param | Type / notes |
|---|---|
| `method` | DISPLAY \| SCREEN \| SCREEN_WITH_SOURCE_VIDEO \| VIDEO \| GRAPHIC \| SOURCE \| BLENDED |
| `format` | BMP \| JPG \| PNG \| RGB \| RGBA \| YUV422 |
| `width` | int |
| `height` | int |
| `path` | output file path on TV, e.g. /tmp/capture.jpg |

```sh
{"type":"request","id":"1","uri":"ssap://tv/executeOneShot","payload":{"method":"DISPLAY","format":"JPG","width":960,"height":540,"path":"/tmp/capture.jpg"}}
```

> bscpylgtv `take_screenshot` calls ssap://tv/executeOneShot (no payload; returns a URL/path) and its docstring says the parameters to use are those of com.webos.service.capture/executeOneShot. LGTV Companion docs: tv/executeOneShot {method, format, width, height, path}. On webOS 4 root tools use com.webos.service.tv.capture/executeOneShot instead (glasshouse). \|\| VIDEO is clear sources only; DISPLAY includes OSD.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [3](https://github.com/JPersson77/LGTVCompanion/blob/master/Docs/Commandline.md), [4](https://github.com/rorygallagher2024/glasshouse/blob/main/scripts/tv.sh), [5](https://github.com/Informatic/webos-ssap-web/blob/master/demo.js), [6](https://github.com/Tecnosimples-git/Hubitat_LG_TV_Trato/blob/main/Hubitat_LG_TV_Trato_v1.8.3-TRATO-1.0.groovy), [7](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [8](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)
