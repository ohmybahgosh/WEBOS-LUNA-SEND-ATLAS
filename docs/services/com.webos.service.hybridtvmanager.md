# `com.webos.service.hybridtvmanager`

13 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getHybridTvState`](#gethybridtvstate) | private |  | misc | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`launchUserAgreement`](#launchuseragreement) | private |  | apps | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`notifyActivityEvent`](#notifyactivityevent) | private |  | activity | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`setFirstRunAcrSetting`](#setfirstrunacrsetting) | private |  | misc | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`teletext/enableTeletext`](#teletext_enableteletext) | public |  | misc | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`teletext/enableTime`](#teletext_enabletime) | public |  | input | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`teletext/getBroadcastId`](#teletext_getbroadcastid) | public |  | tv-broadcast | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`teletext/getCurrentTeletext`](#teletext_getcurrentteletext) | public |  | misc | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`teletext/getMessage`](#teletext_getmessage) | public |  | misc | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`teletext/getTeletextState`](#teletext_getteletextstate) | public |  | misc | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`teletext/isTimeAvailable`](#teletext_istimeavailable) | public |  | input | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`teletext/setMessage`](#teletext_setmessage) | public |  | misc | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |
| [`teletext/setTeletext`](#teletext_setteletext) | public |  | misc | Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented). |

<a id="gethybridtvstate"></a>
## `getHybridTvState`

`luna://com.webos.service.hybridtvmanager/getHybridTvState`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/getHybridTvState '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchuseragreement"></a>
## `launchUserAgreement`

`luna://com.webos.service.hybridtvmanager/launchUserAgreement`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/launchUserAgreement '{}'
```

> ACG groups: com.webos.service.hybridtvmanager*, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyactivityevent"></a>
## `notifyActivityEvent`

`luna://com.webos.service.hybridtvmanager/notifyActivityEvent`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/notifyActivityEvent '{}'
```

> ACG groups: activities.callbacks, com.webos.service.hybridtvmanager*, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setfirstrunacrsetting"></a>
## `setFirstRunAcrSetting`

`luna://com.webos.service.hybridtvmanager/setFirstRunAcrSetting`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/setFirstRunAcrSetting '{}'
```

> ACG groups: com.webos.service.hybridtvmanager*, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_enableteletext"></a>
## `teletext/enableTeletext`

`luna://com.webos.service.hybridtvmanager/teletext/enableTeletext`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/enableTeletext '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_enabletime"></a>
## `teletext/enableTime`

`luna://com.webos.service.hybridtvmanager/teletext/enableTime`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/enableTime '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_getbroadcastid"></a>
## `teletext/getBroadcastId`

`luna://com.webos.service.hybridtvmanager/teletext/getBroadcastId`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/getBroadcastId '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_getcurrentteletext"></a>
## `teletext/getCurrentTeletext`

`luna://com.webos.service.hybridtvmanager/teletext/getCurrentTeletext`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/getCurrentTeletext '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_getmessage"></a>
## `teletext/getMessage`

`luna://com.webos.service.hybridtvmanager/teletext/getMessage`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/getMessage '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_getteletextstate"></a>
## `teletext/getTeletextState`

`luna://com.webos.service.hybridtvmanager/teletext/getTeletextState`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/getTeletextState '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_istimeavailable"></a>
## `teletext/isTimeAvailable`

`luna://com.webos.service.hybridtvmanager/teletext/isTimeAvailable`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/isTimeAvailable '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_setmessage"></a>
## `teletext/setMessage`

`luna://com.webos.service.hybridtvmanager/teletext/setMessage`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/setMessage '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_setteletext"></a>
## `teletext/setTeletext`

`luna://com.webos.service.hybridtvmanager/teletext/setTeletext`

Method on com.webos.service.hybridtvmanager (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/setTeletext '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
