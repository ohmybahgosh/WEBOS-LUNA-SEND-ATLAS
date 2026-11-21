# `com.webos.service.tvstorepolicy`

Store/demo-mode policy service: changes mode and syncs a demo socket, likely toggling retail store demo behavior. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`changeMode`](#changemode) | private |  | misc | documented | Changes the mode. |
| [`syncDemoSocket`](#syncdemosocket) | private |  | misc | documented | Synchronizes the demo socket. |

<a id="changemode"></a>
## `changeMode`

`luna://com.webos.service.tvstorepolicy/changeMode`

Changes the mode.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mode` | String (required) Target mode: store or home. |

```sh
luna-send -n 1 -f luna://com.webos.service.tvstorepolicy/changeMode '{}'
```

> ACG groups: com.webos.service.tvstorepolicy, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  In current firmware store/home switching returns "This service is not available".  Parameters recovered from the on-device service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="syncdemosocket"></a>
## `syncDemoSocket`

`luna://com.webos.service.tvstorepolicy/syncDemoSocket`

Synchronizes the demo socket.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `mode` | String (required) Socket operation: open, send, or close. |
| `ip` | String (optional) Target IP of the demo device (used by open/send/close). |
| `request` | Object (optional) Message to send over the socket. |

```sh
luna-send -n 1 -f luna://com.webos.service.tvstorepolicy/syncDemoSocket '{}'
```

> ACG groups: com.webos.service.tvstorepolicy, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).  Opens, sends on, or closes a WebSocket to a demo device at wss://<ip>:3001.  Parameters recovered from the on-device service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
