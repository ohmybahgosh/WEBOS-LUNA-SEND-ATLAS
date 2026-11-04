# `com.webos.service.scd`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`forceFindChannelNumber`](#forcefindchannelnumber) | private |  | tv-broadcast | Method on com.webos.service.scd (from on-device permission registry; parameters undocumented). |
| [`getCurrentChannelNumber`](#getcurrentchannelnumber) | private |  | tv-broadcast | Method on com.webos.service.scd (from on-device permission registry; parameters undocumented). |
| [`wakeup`](#wakeup) | private |  | misc | Method on com.webos.service.scd (from on-device permission registry; parameters undocumented). |

<a id="forcefindchannelnumber"></a>
## `forceFindChannelNumber`

`luna://com.webos.service.scd/forceFindChannelNumber`

Method on com.webos.service.scd (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.scd/forceFindChannelNumber '{}'
```

> ACG groups: private, scd.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentchannelnumber"></a>
## `getCurrentChannelNumber`

`luna://com.webos.service.scd/getCurrentChannelNumber`

Method on com.webos.service.scd (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.scd/getCurrentChannelNumber '{}'
```

> ACG groups: private, scd.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="wakeup"></a>
## `wakeup`

`luna://com.webos.service.scd/wakeup`

Method on com.webos.service.scd (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.scd/wakeup '{}'
```

> ACG groups: configurator.callbacks, private, scd.action, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
