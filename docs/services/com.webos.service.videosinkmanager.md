# `com.webos.service.videosinkmanager`

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`connect`](#connect) | private |  | misc | Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented). |
| [`disconnect`](#disconnect) | private |  | misc | Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented). |
| [`getConnectionState`](#getconnectionstate) | private |  | misc | Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented). |
| [`private/add`](#private_add) | private |  | misc | Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented). |
| [`private/connect`](#private_connect) | private |  | misc | Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented). |
| [`private/delete`](#private_delete) | private |  | misc | Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented). ⚠️ |
| [`private/register`](#private_register) | private |  | misc | Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented). |
| [`private/skipConflictNotify`](#private_skipconflictnotify) | private |  | misc | Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented). |
| [`private/unregister`](#private_unregister) | private |  | misc | Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented). |
| [`private/update`](#private_update) | private |  | update | Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented). |

<a id="connect"></a>
## `connect`

`luna://com.webos.service.videosinkmanager/connect`

Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/connect '{}'
```

> ACG groups: media, private, videosinkmanager.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="disconnect"></a>
## `disconnect`

`luna://com.webos.service.videosinkmanager/disconnect`

Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/disconnect '{}'
```

> ACG groups: media, private, videosinkmanager.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getconnectionstate"></a>
## `getConnectionState`

`luna://com.webos.service.videosinkmanager/getConnectionState`

Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/getConnectionState '{}'
```

> ACG groups: media, private, videosinkmanager.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_add"></a>
## `private/add`

`luna://com.webos.service.videosinkmanager/private/add`

Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/add '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_connect"></a>
## `private/connect`

`luna://com.webos.service.videosinkmanager/private/connect`

Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/connect '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_delete"></a>
## `private/delete` ⚠️ DANGEROUS

`luna://com.webos.service.videosinkmanager/private/delete`

Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/delete '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_register"></a>
## `private/register`

`luna://com.webos.service.videosinkmanager/private/register`

Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/register '{}'
```

> ACG groups: media, private, videosinkmanager.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_skipconflictnotify"></a>
## `private/skipConflictNotify`

`luna://com.webos.service.videosinkmanager/private/skipConflictNotify`

Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/skipConflictNotify '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_unregister"></a>
## `private/unregister`

`luna://com.webos.service.videosinkmanager/private/unregister`

Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/unregister '{}'
```

> ACG groups: media, private, videosinkmanager.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_update"></a>
## `private/update`

`luna://com.webos.service.videosinkmanager/private/update`

Method on com.webos.service.videosinkmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/update '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
