# `airplay.homekit`

AirPlay/HomeKit integration helper: manages pairing and reports setup-code and pairing events for Apple AirPlay and HomeKit on the TV. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`reset`](#reset) | private |  | media | inferred | Resets the airplay homekit. ⚠️ |
| [`subscribePairingEvent`](#subscribepairingevent) | private |  | media | inferred | Subscribes to the pairing event. |
| [`subscribeSetupCodeChanged`](#subscribesetupcodechanged) | private |  | media | inferred | Subscribes to the setup code changed. |

<a id="reset"></a>
## `reset` ⚠️ DANGEROUS

`luna://airplay.homekit/reset`

Resets the airplay homekit.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.homekit/reset '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscribepairingevent"></a>
## `subscribePairingEvent`

`luna://airplay.homekit/subscribePairingEvent`

Subscribes to the pairing event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.homekit/subscribePairingEvent '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscribesetupcodechanged"></a>
## `subscribeSetupCodeChanged`

`luna://airplay.homekit/subscribeSetupCodeChanged`

Subscribes to the setup code changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://airplay.homekit/subscribeSetupCodeChanged '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
