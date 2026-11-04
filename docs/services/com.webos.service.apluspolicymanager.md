# `com.webos.service.apluspolicymanager`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`launchPartialViewApp`](#launchpartialviewapp) | public |  | apps | Method on com.webos.service.apluspolicymanager (from on-device permission registry; parameters undocumented). |
| [`setSituationMonitoring`](#setsituationmonitoring) | public |  | misc | Method on com.webos.service.apluspolicymanager (from on-device permission registry; parameters undocumented). |
| [`synchronizeWoweffect`](#synchronizewoweffect) | public |  | misc | Method on com.webos.service.apluspolicymanager (from on-device permission registry; parameters undocumented). |

<a id="launchpartialviewapp"></a>
## `launchPartialViewApp`

`luna://com.webos.service.apluspolicymanager/launchPartialViewApp`

Method on com.webos.service.apluspolicymanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apluspolicymanager/launchPartialViewApp '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsituationmonitoring"></a>
## `setSituationMonitoring`

`luna://com.webos.service.apluspolicymanager/setSituationMonitoring`

Method on com.webos.service.apluspolicymanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apluspolicymanager/setSituationMonitoring '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="synchronizewoweffect"></a>
## `synchronizeWoweffect`

`luna://com.webos.service.apluspolicymanager/synchronizeWoweffect`

Method on com.webos.service.apluspolicymanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.apluspolicymanager/synchronizeWoweffect '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
