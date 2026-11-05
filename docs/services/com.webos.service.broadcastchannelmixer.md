# `com.webos.service.broadcastchannelmixer`

Broadcast channel-list editor: changes and moves channel numbers, merges channel lists and reports network IDs. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`changeChannelNumber`](#changechannelnumber) | private |  | tv-broadcast | inferred | Changes the channel number. |
| [`debug`](#debug) | private |  | tv-broadcast | inferred | Handles the debug. |
| [`getNetworkIdList`](#getnetworkidlist) | private |  | tv-broadcast | inferred | Returns the network ID list. |
| [`merge`](#merge) | private |  | tv-broadcast | inferred | Merges the broadcastchannelmixer. |
| [`moveChannel`](#movechannel) | private |  | tv-broadcast | inferred | Moves the channel. |

<a id="changechannelnumber"></a>
## `changeChannelNumber`

`luna://com.webos.service.broadcastchannelmixer/changeChannelNumber`

Changes the channel number.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.broadcastchannelmixer/changeChannelNumber '{}'
```

> ACG groups: broadcastchannelmixer. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.broadcastchannelmixer/debug`

Handles the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.broadcastchannelmixer/debug '{}'
```

> ACG groups: broadcastchannelmixer. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getnetworkidlist"></a>
## `getNetworkIdList`

`luna://com.webos.service.broadcastchannelmixer/getNetworkIdList`

Returns the network ID list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.broadcastchannelmixer/getNetworkIdList '{}'
```

> ACG groups: broadcastchannelmixer. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="merge"></a>
## `merge`

`luna://com.webos.service.broadcastchannelmixer/merge`

Merges the broadcastchannelmixer.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.broadcastchannelmixer/merge '{}'
```

> ACG groups: broadcastchannelmixer. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="movechannel"></a>
## `moveChannel`

`luna://com.webos.service.broadcastchannelmixer/moveChannel`

Moves the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.broadcastchannelmixer/moveChannel '{}'
```

> ACG groups: broadcastchannelmixer. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
