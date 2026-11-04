# `com.webos.service.airplayadaptor`

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`airplayRestart`](#airplayrestart) | private |  | media | Method on com.webos.service.airplayadaptor (from on-device permission registry; parameters undocumented). |
| [`airplayStart`](#airplaystart) | public |  | media | Method on com.webos.service.airplayadaptor (introspected on-device; parameters undocumented). |
| [`airplayStatus`](#airplaystatus) | public |  | media | Method on com.webos.service.airplayadaptor (introspected on-device; parameters undocumented). |
| [`airplayStop`](#airplaystop) | public |  | media | Method on com.webos.service.airplayadaptor (introspected on-device; parameters undocumented). |
| [`mfiKeyCheck`](#mfikeycheck) | private |  | media | Method on com.webos.service.airplayadaptor (from on-device permission registry; parameters undocumented). |
| [`mfiKeyLength`](#mfikeylength) | private |  | media | Method on com.webos.service.airplayadaptor (from on-device permission registry; parameters undocumented). |
| [`mfiKeyWrite`](#mfikeywrite) | private |  | media | Method on com.webos.service.airplayadaptor (from on-device permission registry; parameters undocumented). |
| [`test`](#test) | public |  | media | Method on com.webos.service.airplayadaptor (introspected on-device; parameters undocumented). |
| [`updateApp`](#updateapp) | public |  | update | Method on com.webos.service.airplayadaptor (introspected on-device; parameters undocumented). |

<a id="airplayrestart"></a>
## `airplayRestart`

`luna://com.webos.service.airplayadaptor/airplayRestart`

Method on com.webos.service.airplayadaptor (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/airplayRestart '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="airplaystart"></a>
## `airplayStart`

`luna://com.webos.service.airplayadaptor/airplayStart`

Method on com.webos.service.airplayadaptor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/airplayStart '{}'
```

> ACG groups: private, all, public, com.webos.service.airplayadaptor.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="airplaystatus"></a>
## `airplayStatus`

`luna://com.webos.service.airplayadaptor/airplayStatus`

Method on com.webos.service.airplayadaptor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/airplayStatus '{}'
```

> ACG groups: private, all, public, com.webos.service.airplayadaptor.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="airplaystop"></a>
## `airplayStop`

`luna://com.webos.service.airplayadaptor/airplayStop`

Method on com.webos.service.airplayadaptor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/airplayStop '{}'
```

> ACG groups: private, all, public, com.webos.service.airplayadaptor.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="mfikeycheck"></a>
## `mfiKeyCheck`

`luna://com.webos.service.airplayadaptor/mfiKeyCheck`

Method on com.webos.service.airplayadaptor (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/mfiKeyCheck '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="mfikeylength"></a>
## `mfiKeyLength`

`luna://com.webos.service.airplayadaptor/mfiKeyLength`

Method on com.webos.service.airplayadaptor (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/mfiKeyLength '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="mfikeywrite"></a>
## `mfiKeyWrite`

`luna://com.webos.service.airplayadaptor/mfiKeyWrite`

Method on com.webos.service.airplayadaptor (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/mfiKeyWrite '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.airplayadaptor/test`

Method on com.webos.service.airplayadaptor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/test '{}'
```

> ACG groups: private, all, public, com.webos.service.airplayadaptor.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateapp"></a>
## `updateApp`

`luna://com.webos.service.airplayadaptor/updateApp`

Method on com.webos.service.airplayadaptor (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/updateApp '{}'
```

> ACG groups: private, all, public, com.webos.service.airplayadaptor.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
