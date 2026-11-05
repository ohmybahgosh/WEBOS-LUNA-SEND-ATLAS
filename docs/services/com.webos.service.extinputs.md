# `com.webos.service.extinputs`

External-inputs service exposing a single method to reset external-input audio/video settings. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`resetAudioVideoSettings`](#resetaudiovideosettings) | private |  | audio | inferred | Resets the audio video settings. ⚠️ |

<a id="resetaudiovideosettings"></a>
## `resetAudioVideoSettings` ⚠️ DANGEROUS

`luna://com.webos.service.extinputs/resetAudioVideoSettings`

Resets the audio video settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs/resetAudioVideoSettings '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
