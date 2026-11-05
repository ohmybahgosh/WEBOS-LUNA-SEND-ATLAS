# `com.webos.service.gibbs.debug`

GIBBS broadcast-stack debug interface: dumps channel, media, memory and NRT state, imports/exports the channel list and reports pipeline IDs. _(inferred from the service's methods)_

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`channel`](#channel) | private |  | tv-broadcast | inferred | Handles the channel. |
| [`dump`](#dump) | private |  | tv-broadcast | inferred | Dumps the gibbs debug. |
| [`exportChannelList`](#exportchannellist) | private |  | tv-broadcast | inferred | Exports the channel list. |
| [`getPipelineId`](#getpipelineid) | private |  | tv-broadcast | inferred | Returns the pipeline ID. |
| [`importChannelList`](#importchannellist) | private |  | tv-broadcast | inferred | Imports the channel list. |
| [`media`](#media) | private |  | tv-broadcast | inferred | Handles the media. |
| [`memgr`](#memgr) | private |  | tv-broadcast | inferred | Handles the memgr. |
| [`nrt`](#nrt) | private |  | tv-broadcast | inferred | Handles the nrt. |
| [`setScreenSaverType`](#setscreensavertype) | private |  | tv-broadcast | inferred | Sets the screen saver type. |

<a id="channel"></a>
## `channel`

`luna://com.webos.service.gibbs.debug/channel`

Handles the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.debug/channel '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="dump"></a>
## `dump`

`luna://com.webos.service.gibbs.debug/dump`

Dumps the gibbs debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.debug/dump '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="exportchannellist"></a>
## `exportChannelList`

`luna://com.webos.service.gibbs.debug/exportChannelList`

Exports the channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.debug/exportChannelList '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpipelineid"></a>
## `getPipelineId`

`luna://com.webos.service.gibbs.debug/getPipelineId`

Returns the pipeline ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.debug/getPipelineId '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="importchannellist"></a>
## `importChannelList`

`luna://com.webos.service.gibbs.debug/importChannelList`

Imports the channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.debug/importChannelList '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="media"></a>
## `media`

`luna://com.webos.service.gibbs.debug/media`

Handles the media.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.debug/media '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="memgr"></a>
## `memgr`

`luna://com.webos.service.gibbs.debug/memgr`

Handles the memgr.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.debug/memgr '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="nrt"></a>
## `nrt`

`luna://com.webos.service.gibbs.debug/nrt`

Handles the nrt.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.debug/nrt '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setscreensavertype"></a>
## `setScreenSaverType`

`luna://com.webos.service.gibbs.debug/setScreenSaverType`

Sets the screen saver type.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.debug/setScreenSaverType '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
