# `com.webos.service.scd`

SCD channel-number service: reports and force-finds the current channel number and wakes the component. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`forceFindChannelNumber`](#forcefindchannelnumber) | private |  | tv-broadcast | inferred | Forces the find channel number. |
| [`getCurrentChannelNumber`](#getcurrentchannelnumber) | private |  | tv-broadcast | inferred | Returns the current channel number. |
| [`wakeup`](#wakeup) | private |  | misc | inferred | Handles the wakeup. |

<a id="forcefindchannelnumber"></a>
## `forceFindChannelNumber`

`luna://com.webos.service.scd/forceFindChannelNumber`

Forces the find channel number.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.scd/forceFindChannelNumber '{}'
```

> ACG groups: private, scd.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentchannelnumber"></a>
## `getCurrentChannelNumber`

`luna://com.webos.service.scd/getCurrentChannelNumber`

Returns the current channel number.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.scd/getCurrentChannelNumber '{}'
```

> ACG groups: private, scd.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="wakeup"></a>
## `wakeup`

`luna://com.webos.service.scd/wakeup`

Handles the wakeup.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.scd/wakeup '{}'
```

> ACG groups: configurator.callbacks, private, scd.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
