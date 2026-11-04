# `com.webos.service.gibbs`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`file/play`](#file_play) | private |  | tv-broadcast | Method on com.webos.service.gibbs (from on-device permission registry; parameters undocumented). |
| [`file/registerDataMfu`](#file_registerdatamfu) | private |  | tv-broadcast | Method on com.webos.service.gibbs (from on-device permission registry; parameters undocumented). |
| [`file/setDefaultChList`](#file_setdefaultchlist) | private |  | tv-broadcast | Method on com.webos.service.gibbs (from on-device permission registry; parameters undocumented). |

<a id="file_play"></a>
## `file/play`

`luna://com.webos.service.gibbs/file/play`

Method on com.webos.service.gibbs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs/file/play '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="file_registerdatamfu"></a>
## `file/registerDataMfu`

`luna://com.webos.service.gibbs/file/registerDataMfu`

Method on com.webos.service.gibbs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs/file/registerDataMfu '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="file_setdefaultchlist"></a>
## `file/setDefaultChList`

`luna://com.webos.service.gibbs/file/setDefaultChList`

Method on com.webos.service.gibbs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs/file/setDefaultChList '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
