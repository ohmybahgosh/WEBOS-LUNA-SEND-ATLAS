# `com.webos.service.facedetect`

Face-detection service exposing a single faceDetect method. Narrow role; detects faces (likely from a camera) based on its name. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`faceDetect`](#facedetect) | public |  | misc | inferred | Handles the face detect. |

<a id="facedetect"></a>
## `faceDetect`

`luna://com.webos.service.facedetect/faceDetect`

Handles the face detect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.facedetect/faceDetect '{}'
```

> ACG groups: public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
