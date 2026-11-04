# `com.webos.service.extinputs`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`resetAudioVideoSettings`](#resetaudiovideosettings) | private |  | audio | Method on com.webos.service.extinputs (from on-device permission registry; parameters undocumented). ⚠️ |

<a id="resetaudiovideosettings"></a>
## `resetAudioVideoSettings` ⚠️ DANGEROUS

`luna://com.webos.service.extinputs/resetAudioVideoSettings`

Method on com.webos.service.extinputs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.extinputs/resetAudioVideoSettings '{}'
```

> ACG groups: extinputs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
