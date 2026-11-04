# `com.webos.service.ismmanager`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`closeISM`](#closeism) | private |  | system-info | Method on com.webos.service.ismmanager (from on-device permission registry; parameters undocumented). |
| [`launchISM`](#launchism) | private |  | apps | Method on com.webos.service.ismmanager (from on-device permission registry; parameters undocumented). |
| [`refreshISMContents`](#refreshismcontents) | private |  | system-info | Method on com.webos.service.ismmanager (from on-device permission registry; parameters undocumented). |

<a id="closeism"></a>
## `closeISM`

`luna://com.webos.service.ismmanager/closeISM`

Method on com.webos.service.ismmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ismmanager/closeISM '{}'
```

> ACG groups: ismmanager.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchism"></a>
## `launchISM`

`luna://com.webos.service.ismmanager/launchISM`

Method on com.webos.service.ismmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ismmanager/launchISM '{}'
```

> ACG groups: ismmanager.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="refreshismcontents"></a>
## `refreshISMContents`

`luna://com.webos.service.ismmanager/refreshISMContents`

Method on com.webos.service.ismmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ismmanager/refreshISMContents '{}'
```

> ACG groups: ismmanager.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
