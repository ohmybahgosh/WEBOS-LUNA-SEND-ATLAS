# `com.webos.service.hybridtvmanager`

Hybrid-TV manager: handles hybrid broadcast-broadband state, user agreements, ACR first-run settings, and teletext display and messaging. _(inferred from the service's methods)_

13 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getHybridTvState`](#gethybridtvstate) | private |  | misc | inferred | Returns the hybrid TV state. |
| [`launchUserAgreement`](#launchuseragreement) | private |  | apps | inferred | Launches the user agreement. |
| [`notifyActivityEvent`](#notifyactivityevent) | private |  | activity | inferred | Notifies of the activity event. |
| [`setFirstRunAcrSetting`](#setfirstrunacrsetting) | private |  | misc | inferred | Sets the first run ACR setting. |
| [`teletext/enableTeletext`](#teletext_enableteletext) | public |  | misc | inferred | Enables the teletext (teletext) |
| [`teletext/enableTime`](#teletext_enabletime) | public |  | input | inferred | Enables the time (teletext) |
| [`teletext/getBroadcastId`](#teletext_getbroadcastid) | public |  | tv-broadcast | inferred | Returns the broadcast ID (teletext) |
| [`teletext/getCurrentTeletext`](#teletext_getcurrentteletext) | public |  | misc | inferred | Returns the current teletext (teletext) |
| [`teletext/getMessage`](#teletext_getmessage) | public |  | misc | inferred | Returns the message (teletext) |
| [`teletext/getTeletextState`](#teletext_getteletextstate) | public |  | misc | inferred | Returns the teletext state (teletext) |
| [`teletext/isTimeAvailable`](#teletext_istimeavailable) | public |  | input | inferred | Reports whether the time available is set (teletext) |
| [`teletext/setMessage`](#teletext_setmessage) | public |  | misc | inferred | Sets the message (teletext) |
| [`teletext/setTeletext`](#teletext_setteletext) | public |  | misc | inferred | Sets the teletext (teletext) |

<a id="gethybridtvstate"></a>
## `getHybridTvState`

`luna://com.webos.service.hybridtvmanager/getHybridTvState`

Returns the hybrid TV state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/getHybridTvState '{}'
```

> ACG groups: tv. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchuseragreement"></a>
## `launchUserAgreement`

`luna://com.webos.service.hybridtvmanager/launchUserAgreement`

Launches the user agreement.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/launchUserAgreement '{}'
```

> ACG groups: com.webos.service.hybridtvmanager*, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyactivityevent"></a>
## `notifyActivityEvent`

`luna://com.webos.service.hybridtvmanager/notifyActivityEvent`

Notifies of the activity event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/notifyActivityEvent '{}'
```

> ACG groups: activities.callbacks, com.webos.service.hybridtvmanager*, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setfirstrunacrsetting"></a>
## `setFirstRunAcrSetting`

`luna://com.webos.service.hybridtvmanager/setFirstRunAcrSetting`

Sets the first run ACR setting.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/setFirstRunAcrSetting '{}'
```

> ACG groups: com.webos.service.hybridtvmanager*, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_enableteletext"></a>
## `teletext/enableTeletext`

`luna://com.webos.service.hybridtvmanager/teletext/enableTeletext`

Enables the teletext (teletext)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/enableTeletext '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_enabletime"></a>
## `teletext/enableTime`

`luna://com.webos.service.hybridtvmanager/teletext/enableTime`

Enables the time (teletext)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/enableTime '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_getbroadcastid"></a>
## `teletext/getBroadcastId`

`luna://com.webos.service.hybridtvmanager/teletext/getBroadcastId`

Returns the broadcast ID (teletext)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/getBroadcastId '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_getcurrentteletext"></a>
## `teletext/getCurrentTeletext`

`luna://com.webos.service.hybridtvmanager/teletext/getCurrentTeletext`

Returns the current teletext (teletext)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/getCurrentTeletext '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_getmessage"></a>
## `teletext/getMessage`

`luna://com.webos.service.hybridtvmanager/teletext/getMessage`

Returns the message (teletext)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/getMessage '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_getteletextstate"></a>
## `teletext/getTeletextState`

`luna://com.webos.service.hybridtvmanager/teletext/getTeletextState`

Returns the teletext state (teletext)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/getTeletextState '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_istimeavailable"></a>
## `teletext/isTimeAvailable`

`luna://com.webos.service.hybridtvmanager/teletext/isTimeAvailable`

Reports whether the time available is set (teletext)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/isTimeAvailable '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_setmessage"></a>
## `teletext/setMessage`

`luna://com.webos.service.hybridtvmanager/teletext/setMessage`

Sets the message (teletext)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/setMessage '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="teletext_setteletext"></a>
## `teletext/setTeletext`

`luna://com.webos.service.hybridtvmanager/teletext/setTeletext`

Sets the teletext (teletext)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.hybridtvmanager/teletext/setTeletext '{}'
```

> ACG groups: private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
