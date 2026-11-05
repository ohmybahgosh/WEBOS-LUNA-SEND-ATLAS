# `com.webos.service.videosinkmanager`

Video sink manager: connects and disconnects video sinks, reports connection state, and registers and resolves sink conflicts. _(inferred from the service's methods)_

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`connect`](#connect) | private |  | misc | inferred | Connects the videosinkmanager. |
| [`disconnect`](#disconnect) | private |  | misc | inferred | Disconnects the videosinkmanager. |
| [`getConnectionState`](#getconnectionstate) | private |  | misc | inferred | Returns the connection state. |
| [`private/add`](#private_add) | private |  | misc | inferred | Adds the videosinkmanager (private) |
| [`private/connect`](#private_connect) | private |  | misc | inferred | Connects the videosinkmanager (private) |
| [`private/delete`](#private_delete) | private |  | misc | inferred | Deletes the videosinkmanager (private) ⚠️ |
| [`private/register`](#private_register) | private |  | misc | inferred | Registers the videosinkmanager (private) |
| [`private/skipConflictNotify`](#private_skipconflictnotify) | private |  | misc | inferred | Skips the conflict notify (private) |
| [`private/unregister`](#private_unregister) | private |  | misc | inferred | Unregisters the videosinkmanager (private) |
| [`private/update`](#private_update) | private |  | update | inferred | Updates the videosinkmanager (private) |

<a id="connect"></a>
## `connect`

`luna://com.webos.service.videosinkmanager/connect`

Connects the videosinkmanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/connect '{}'
```

> ACG groups: media, private, videosinkmanager.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="disconnect"></a>
## `disconnect`

`luna://com.webos.service.videosinkmanager/disconnect`

Disconnects the videosinkmanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/disconnect '{}'
```

> ACG groups: media, private, videosinkmanager.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getconnectionstate"></a>
## `getConnectionState`

`luna://com.webos.service.videosinkmanager/getConnectionState`

Returns the connection state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/getConnectionState '{}'
```

> ACG groups: media, private, videosinkmanager.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_add"></a>
## `private/add`

`luna://com.webos.service.videosinkmanager/private/add`

Adds the videosinkmanager (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/add '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_connect"></a>
## `private/connect`

`luna://com.webos.service.videosinkmanager/private/connect`

Connects the videosinkmanager (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/connect '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_delete"></a>
## `private/delete` ⚠️ DANGEROUS

`luna://com.webos.service.videosinkmanager/private/delete`

Deletes the videosinkmanager (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/delete '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_register"></a>
## `private/register`

`luna://com.webos.service.videosinkmanager/private/register`

Registers the videosinkmanager (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/register '{}'
```

> ACG groups: media, private, videosinkmanager.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_skipconflictnotify"></a>
## `private/skipConflictNotify`

`luna://com.webos.service.videosinkmanager/private/skipConflictNotify`

Skips the conflict notify (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/skipConflictNotify '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_unregister"></a>
## `private/unregister`

`luna://com.webos.service.videosinkmanager/private/unregister`

Unregisters the videosinkmanager (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/unregister '{}'
```

> ACG groups: media, private, videosinkmanager.utilmgr. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="private_update"></a>
## `private/update`

`luna://com.webos.service.videosinkmanager/private/update`

Updates the videosinkmanager (private)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.videosinkmanager/private/update '{}'
```

> ACG groups: media. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
