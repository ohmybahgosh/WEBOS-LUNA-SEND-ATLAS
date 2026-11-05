# `com.webos.service.eventmonitor`

Event monitor with pluggable handlers: delivers events to plugins and surfaces network/Wi-Fi-Direct notifications. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`mockPlugin/action`](#mockplugin_action) | private |  | misc | inferred | Handles the action (mock plugin) |
| [`mockPlugin/getEvents`](#mockplugin_getevents) | private |  | misc | inferred | Returns the events (mock plugin) |
| [`network/starfish/alertClose`](#network_starfish_alertclose) | private |  | misc | inferred | Handles the alert close (network starfish) |
| [`network/starfish/enableWifiDirectNotifications`](#network_starfish_enablewifidirectnotifications) | private |  | notifications | inferred | Enables the wifi direct notifications (network starfish) |
| [`network/starfish/TestWifiDirectPinNotifications`](#network_starfish_testwifidirectpinnotifications) | private |  | notifications | inferred | Tests the wifi direct pin notifications (network starfish) |

<a id="mockplugin_action"></a>
## `mockPlugin/action`

`luna://com.webos.service.eventmonitor/mockPlugin/action`

Handles the action (mock plugin)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eventmonitor/mockPlugin/action '{}'
```

> ACG groups: eventmonitor.plugins, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="mockplugin_getevents"></a>
## `mockPlugin/getEvents`

`luna://com.webos.service.eventmonitor/mockPlugin/getEvents`

Returns the events (mock plugin)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eventmonitor/mockPlugin/getEvents '{}'
```

> ACG groups: eventmonitor.plugins, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="network_starfish_alertclose"></a>
## `network/starfish/alertClose`

`luna://com.webos.service.eventmonitor/network/starfish/alertClose`

Handles the alert close (network starfish)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eventmonitor/network/starfish/alertClose '{}'
```

> ACG groups: eventmonitor.plugins, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="network_starfish_enablewifidirectnotifications"></a>
## `network/starfish/enableWifiDirectNotifications`

`luna://com.webos.service.eventmonitor/network/starfish/enableWifiDirectNotifications`

Enables the wifi direct notifications (network starfish)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eventmonitor/network/starfish/enableWifiDirectNotifications '{}'
```

> ACG groups: eventmonitor.plugins, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="network_starfish_testwifidirectpinnotifications"></a>
## `network/starfish/TestWifiDirectPinNotifications`

`luna://com.webos.service.eventmonitor/network/starfish/TestWifiDirectPinNotifications`

Tests the wifi direct pin notifications (network starfish)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.eventmonitor/network/starfish/TestWifiDirectPinNotifications '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
