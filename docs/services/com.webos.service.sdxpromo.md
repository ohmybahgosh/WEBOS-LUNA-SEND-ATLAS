# `com.webos.service.sdxpromo`

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`appListChange`](#applistchange) | public |  | security | Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented). |
| [`checkEula`](#checkeula) | public |  | security | Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented). |
| [`checkPromos`](#checkpromos) | public |  | security | Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented). |
| [`deletePromo`](#deletepromo) | public |  | security | Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented). ⚠️ |
| [`dumpPacket`](#dumppacket) | public |  | security | Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented). |
| [`expirePromo`](#expirepromo) | public |  | security | Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented). |
| [`info`](#info) | public |  | security | Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented). |
| [`localeChange`](#localechange) | public |  | security | Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented). |
| [`quit`](#quit) | public |  | security | Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented). |

<a id="applistchange"></a>
## `appListChange`

`luna://com.webos.service.sdxpromo/appListChange`

Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdxpromo/appListChange '{}'
```

> ACG groups: private, public, sdxpromo.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkeula"></a>
## `checkEula`

`luna://com.webos.service.sdxpromo/checkEula`

Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdxpromo/checkEula '{}'
```

> ACG groups: private, public, sdxpromo.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkpromos"></a>
## `checkPromos`

`luna://com.webos.service.sdxpromo/checkPromos`

Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdxpromo/checkPromos '{}'
```

> ACG groups: private, public, sdxpromo.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletepromo"></a>
## `deletePromo` ⚠️ DANGEROUS

`luna://com.webos.service.sdxpromo/deletePromo`

Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdxpromo/deletePromo '{}'
```

> ACG groups: private, public, sdxpromo.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dumppacket"></a>
## `dumpPacket`

`luna://com.webos.service.sdxpromo/dumpPacket`

Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdxpromo/dumpPacket '{}'
```

> ACG groups: private, public, sdxpromo.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="expirepromo"></a>
## `expirePromo`

`luna://com.webos.service.sdxpromo/expirePromo`

Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdxpromo/expirePromo '{}'
```

> ACG groups: private, public, sdxpromo.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.sdxpromo/info`

Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdxpromo/info '{}'
```

> ACG groups: private, public, sdxpromo.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="localechange"></a>
## `localeChange`

`luna://com.webos.service.sdxpromo/localeChange`

Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdxpromo/localeChange '{}'
```

> ACG groups: private, public, sdxpromo.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.sdxpromo/quit`

Method on com.webos.service.sdxpromo (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.sdxpromo/quit '{}'
```

> ACG groups: private, public, sdxpromo.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
