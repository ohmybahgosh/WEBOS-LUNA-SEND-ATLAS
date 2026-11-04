# `com.palm.keymanager`

17 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`changePassword`](#changepassword) | private |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`crypt`](#crypt) | public |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`export`](#export) | public |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`fetchKey`](#fetchkey) | public |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`fileDecrypt`](#filedecrypt) | private |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`fileEncrypt`](#fileencrypt) | private |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`finish`](#finish) | private |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`generate`](#generate) | public |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`import`](#import) | public |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`initialize`](#initialize) | private |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`keyInfo`](#keyinfo) | public |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`postBackup`](#postbackup) | private |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`postRestore`](#postrestore) | private |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`preBackup`](#prebackup) | private |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`preRestore`](#prerestore) | private |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |
| [`remove`](#remove) | public |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). ⚠️ |
| [`store`](#store) | public |  | input | Method on com.palm.keymanager (from on-device permission registry; parameters undocumented). |

<a id="changepassword"></a>
## `changePassword`

`luna://com.palm.keymanager/changePassword`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/changePassword '{}'
```

> ACG groups: keymanager, private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="crypt"></a>
## `crypt`

`luna://com.palm.keymanager/crypt`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/crypt '{}'
```

> ACG groups: keymanager, private, public, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="export"></a>
## `export`

`luna://com.palm.keymanager/export`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/export '{}'
```

> ACG groups: keymanager, private, public, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fetchkey"></a>
## `fetchKey`

`luna://com.palm.keymanager/fetchKey`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/fetchKey '{}'
```

> ACG groups: keymanager, private, public, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="filedecrypt"></a>
## `fileDecrypt`

`luna://com.palm.keymanager/fileDecrypt`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/fileDecrypt '{}'
```

> ACG groups: keymanager, private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fileencrypt"></a>
## `fileEncrypt`

`luna://com.palm.keymanager/fileEncrypt`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/fileEncrypt '{}'
```

> ACG groups: keymanager, private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="finish"></a>
## `finish`

`luna://com.palm.keymanager/finish`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/finish '{}'
```

> ACG groups: keymanager, private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="generate"></a>
## `generate`

`luna://com.palm.keymanager/generate`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/generate '{}'
```

> ACG groups: keymanager, private, public, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="import"></a>
## `import`

`luna://com.palm.keymanager/import`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/import '{}'
```

> ACG groups: keymanager, private, public, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="initialize"></a>
## `initialize`

`luna://com.palm.keymanager/initialize`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/initialize '{}'
```

> ACG groups: keymanager, private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="keyinfo"></a>
## `keyInfo`

`luna://com.palm.keymanager/keyInfo`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/keyInfo '{}'
```

> ACG groups: keymanager, private, public, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="postbackup"></a>
## `postBackup`

`luna://com.palm.keymanager/postBackup`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/postBackup '{}'
```

> ACG groups: keymanager, private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="postrestore"></a>
## `postRestore`

`luna://com.palm.keymanager/postRestore`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/postRestore '{}'
```

> ACG groups: keymanager, private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="prebackup"></a>
## `preBackup`

`luna://com.palm.keymanager/preBackup`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/preBackup '{}'
```

> ACG groups: keymanager, private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="prerestore"></a>
## `preRestore`

`luna://com.palm.keymanager/preRestore`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/preRestore '{}'
```

> ACG groups: keymanager, private, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="remove"></a>
## `remove` ⚠️ DANGEROUS

`luna://com.palm.keymanager/remove`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/remove '{}'
```

> ACG groups: keymanager, private, public, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="store"></a>
## `store`

`luna://com.palm.keymanager/store`

Method on com.palm.keymanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.palm.keymanager/store '{}'
```

> ACG groups: keymanager, private, public, security. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
