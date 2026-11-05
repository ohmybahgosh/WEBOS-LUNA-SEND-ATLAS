# `com.palm.vibrate`

Legacy Palm vibration service: triggers device vibration. _(inferred from the service's methods)_

1 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`vibrate`](#vibrate) | root |  | misc | documented | Activates the vibrator |

<a id="vibrate"></a>
## `vibrate`

`luna://com.palm.vibrate/vibrate`

Activates the vibrator

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `period` | integer |
| `duration` | integer ms |

```sh
luna-send -n 1 palm://com.palm.vibrate/vibrate '{"period":1,"duration":1000}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
