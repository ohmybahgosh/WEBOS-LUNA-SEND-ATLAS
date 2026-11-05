# `com.webos.service.tvstorepolicy`

Store/demo-mode policy service: changes mode and syncs a demo socket, likely toggling retail store demo behavior. _(inferred from the service's methods)_

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`changeMode`](#changemode) | private |  | misc | inferred | Changes the mode. |
| [`syncDemoSocket`](#syncdemosocket) | private |  | misc | inferred | Synchronizes the demo socket. |

<a id="changemode"></a>
## `changeMode`

`luna://com.webos.service.tvstorepolicy/changeMode`

Changes the mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvstorepolicy/changeMode '{}'
```

> ACG groups: com.webos.service.tvstorepolicy, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="syncdemosocket"></a>
## `syncDemoSocket`

`luna://com.webos.service.tvstorepolicy/syncDemoSocket`

Synchronizes the demo socket.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvstorepolicy/syncDemoSocket '{}'
```

> ACG groups: com.webos.service.tvstorepolicy, configurator.callbacks, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
