# `com.webos.appUpdateService`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`check`](#check) | private |  | update | Method on com.webos.appUpdateService (from on-device permission registry; parameters undocumented). |
| [`status`](#status) | public |  | update | Method on com.webos.appUpdateService (from on-device permission registry; parameters undocumented). |
| [`statusAll`](#statusall) | private |  | update | Method on com.webos.appUpdateService (from on-device permission registry; parameters undocumented). |

<a id="check"></a>
## `check`

`luna://com.webos.appUpdateService/check`

Method on com.webos.appUpdateService (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.appUpdateService/check '{}'
```

> ACG groups: activities.callbacks, appinstalld.internal, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.appUpdateService/status`

Method on com.webos.appUpdateService (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.appUpdateService/status '{}'
```

> ACG groups: activities.callbacks, appinstalld, appinstalld.internal, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="statusall"></a>
## `statusAll`

`luna://com.webos.appUpdateService/statusAll`

Method on com.webos.appUpdateService (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.appUpdateService/statusAll '{}'
```

> ACG groups: appinstalld.internal, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
