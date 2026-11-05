# `com.palm.keys`

Legacy Palm key/event service exposing hardware key status (e.g. audio keys). Opaque; little beyond key-status reporting is inferable. _(inferred from the service's methods)_

1 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`audio/status`](#audio_status) | root |  | keys | documented | Subscribes to volume key status changes |

<a id="audio_status"></a>
## `audio/status`

`luna://com.palm.keys/audio/status`

Subscribes to volume key status changes

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | boolean |

```sh
luna-send -n -i palm://com.palm.keys/audio/status '{"subscribe":true}'
```

> Replies like {"key":"volume_up","state":"down"}.

Sources: [1](http://www.banneret.nl/webos/documentation/all/dev-guide/tools/command-line-tools.html)
