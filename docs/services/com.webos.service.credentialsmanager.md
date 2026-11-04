# `com.webos.service.credentialsmanager`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`check`](#check) | public |  | system-info | Method on com.webos.service.credentialsmanager (from on-device permission registry; parameters undocumented). |
| [`create`](#create) | public |  | system-info | Method on com.webos.service.credentialsmanager (from on-device permission registry; parameters undocumented). |
| [`remove`](#remove) | public |  | system-info | Method on com.webos.service.credentialsmanager (from on-device permission registry; parameters undocumented). ⚠️ |

<a id="check"></a>
## `check`

`luna://com.webos.service.credentialsmanager/check`

Method on com.webos.service.credentialsmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.credentialsmanager/check '{}'
```

> ACG groups: public, security, security.public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="create"></a>
## `create`

`luna://com.webos.service.credentialsmanager/create`

Method on com.webos.service.credentialsmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.credentialsmanager/create '{}'
```

> ACG groups: public, security, security.public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="remove"></a>
## `remove` ⚠️ DANGEROUS

`luna://com.webos.service.credentialsmanager/remove`

Method on com.webos.service.credentialsmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.credentialsmanager/remove '{}'
```

> ACG groups: public, security, security.public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
