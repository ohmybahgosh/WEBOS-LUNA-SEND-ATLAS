# `com.palm.audio`

3 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`media/setVolume`](#media_setvolume) | root |  | audio | Sets media volume (0-100) |
| [`ringtone/setVolume`](#ringtone_setvolume) | root |  | audio | Sets ringtone volume (0-100) |
| [`system/setVolume`](#system_setvolume) | root |  | audio | Sets system volume (0-100) |

<a id="media_setvolume"></a>
## `media/setVolume`

`luna://com.palm.audio/media/setVolume`

Sets media volume (0-100)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `volume` | integer 0-100 |

```sh
luna-send -n 1 palm://com.palm.audio/media/setVolume '{"volume":80}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="ringtone_setvolume"></a>
## `ringtone/setVolume`

`luna://com.palm.audio/ringtone/setVolume`

Sets ringtone volume (0-100)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `volume` | integer 0-100 |

```sh
luna-send -n 1 palm://com.palm.audio/ringtone/setVolume '{"volume":100}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="system_setvolume"></a>
## `system/setVolume`

`luna://com.palm.audio/system/setVolume`

Sets system volume (0-100)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `volume` | integer 0-100 |

```sh
luna-send -n 1 palm://com.palm.audio/system/setVolume '{"volume":80}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
