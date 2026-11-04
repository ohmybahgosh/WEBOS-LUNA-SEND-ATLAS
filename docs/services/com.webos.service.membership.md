# `com.webos.service.membership`

14 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`conveyRequest`](#conveyrequest) | private |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`conveyRequestPub`](#conveyrequestpub) | public |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`deleteValue`](#deletevalue) | public |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). ⚠️ |
| [`deviceInfo`](#deviceinfo) | private |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`getPubValue`](#getpubvalue) | public |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`getValue`](#getvalue) | private |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`hello`](#hello) | public |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`info`](#info) | public |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`notifyResult`](#notifyresult) | public |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`open`](#open) | public |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`openNotify`](#opennotify) | private |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`quit`](#quit) | public |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`runLocalHttpServer`](#runlocalhttpserver) | private |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |
| [`setValue`](#setvalue) | private |  | system-info | Method on com.webos.service.membership (from on-device permission registry; parameters undocumented). |

<a id="conveyrequest"></a>
## `conveyRequest`

`luna://com.webos.service.membership/conveyRequest`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/conveyRequest '{}'
```

> ACG groups: membership.function, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="conveyrequestpub"></a>
## `conveyRequestPub`

`luna://com.webos.service.membership/conveyRequestPub`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/conveyRequestPub '{}'
```

> ACG groups: membership.function, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletevalue"></a>
## `deleteValue` ⚠️ DANGEROUS

`luna://com.webos.service.membership/deleteValue`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/deleteValue '{}'
```

> ACG groups: membership.function, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deviceinfo"></a>
## `deviceInfo`

`luna://com.webos.service.membership/deviceInfo`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/deviceInfo '{}'
```

> ACG groups: membership.function, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpubvalue"></a>
## `getPubValue`

`luna://com.webos.service.membership/getPubValue`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/getPubValue '{}'
```

> ACG groups: membership.info, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvalue"></a>
## `getValue`

`luna://com.webos.service.membership/getValue`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/getValue '{}'
```

> ACG groups: membership.info, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="hello"></a>
## `hello`

`luna://com.webos.service.membership/hello`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/hello '{}'
```

> ACG groups: membership.function, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.membership/info`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/info '{}'
```

> ACG groups: membership.function, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyresult"></a>
## `notifyResult`

`luna://com.webos.service.membership/notifyResult`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/notifyResult '{}'
```

> ACG groups: membership.function, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.membership/open`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/open '{}'
```

> ACG groups: membership.function, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="opennotify"></a>
## `openNotify`

`luna://com.webos.service.membership/openNotify`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/openNotify '{}'
```

> ACG groups: membership.function, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.membership/quit`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/quit '{}'
```

> ACG groups: membership.function, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="runlocalhttpserver"></a>
## `runLocalHttpServer`

`luna://com.webos.service.membership/runLocalHttpServer`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/runLocalHttpServer '{}'
```

> ACG groups: membership.function, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setvalue"></a>
## `setValue`

`luna://com.webos.service.membership/setValue`

Method on com.webos.service.membership (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.membership/setValue '{}'
```

> ACG groups: membership.modify, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
