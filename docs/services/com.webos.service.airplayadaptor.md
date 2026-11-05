# `com.webos.service.airplayadaptor`

AirPlay adaptor: starts, stops, restarts and reports the status of AirPlay, and handles MFi authentication keys. _(inferred from the service's methods)_

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`airplayRestart`](#airplayrestart) | private |  | media | inferred | Handles the airplay restart. |
| [`airplayStart`](#airplaystart) | public |  | media | inferred | Handles the airplay start. |
| [`airplayStatus`](#airplaystatus) | public |  | media | inferred | Handles the airplay status. |
| [`airplayStop`](#airplaystop) | public |  | media | inferred | Handles the airplay stop. |
| [`mfiKeyCheck`](#mfikeycheck) | private |  | media | inferred | Handles the mfi key check. |
| [`mfiKeyLength`](#mfikeylength) | private |  | media | inferred | Handles the mfi key length. |
| [`mfiKeyWrite`](#mfikeywrite) | private |  | media | inferred | Handles the mfi key write. |
| [`test`](#test) | public |  | media | inferred | Tests the airplayadaptor. |
| [`updateApp`](#updateapp) | public |  | update | inferred | Updates the app. |

<a id="airplayrestart"></a>
## `airplayRestart`

`luna://com.webos.service.airplayadaptor/airplayRestart`

Handles the airplay restart.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/airplayRestart '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="airplaystart"></a>
## `airplayStart`

`luna://com.webos.service.airplayadaptor/airplayStart`

Handles the airplay start.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/airplayStart '{}'
```

> ACG groups: private, all, public, com.webos.service.airplayadaptor.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="airplaystatus"></a>
## `airplayStatus`

`luna://com.webos.service.airplayadaptor/airplayStatus`

Handles the airplay status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/airplayStatus '{}'
```

> ACG groups: private, all, public, com.webos.service.airplayadaptor.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="airplaystop"></a>
## `airplayStop`

`luna://com.webos.service.airplayadaptor/airplayStop`

Handles the airplay stop.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/airplayStop '{}'
```

> ACG groups: private, all, public, com.webos.service.airplayadaptor.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="mfikeycheck"></a>
## `mfiKeyCheck`

`luna://com.webos.service.airplayadaptor/mfiKeyCheck`

Handles the mfi key check.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/mfiKeyCheck '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="mfikeylength"></a>
## `mfiKeyLength`

`luna://com.webos.service.airplayadaptor/mfiKeyLength`

Handles the mfi key length.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/mfiKeyLength '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="mfikeywrite"></a>
## `mfiKeyWrite`

`luna://com.webos.service.airplayadaptor/mfiKeyWrite`

Handles the mfi key write.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/mfiKeyWrite '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.airplayadaptor/test`

Tests the airplayadaptor.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/test '{}'
```

> ACG groups: private, all, public, com.webos.service.airplayadaptor.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateapp"></a>
## `updateApp`

`luna://com.webos.service.airplayadaptor/updateApp`

Updates the app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.airplayadaptor/updateApp '{}'
```

> ACG groups: private, all, public, com.webos.service.airplayadaptor.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
