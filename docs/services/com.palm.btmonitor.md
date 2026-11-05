# `com.palm.btmonitor`

Legacy Palm/HP webOS Bluetooth radio monitor that reports the Bluetooth radio powering on and off. _(inferred from the service's methods)_

2 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`monitor/radiooff`](#monitor_radiooff) | root |  | bluetooth | documented | Turns Bluetooth radio off |
| [`monitor/radioon`](#monitor_radioon) | root |  | bluetooth | documented | Turns Bluetooth radio on |

<a id="monitor_radiooff"></a>
## `monitor/radiooff`

`luna://com.palm.btmonitor/monitor/radiooff`

Turns Bluetooth radio off

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

```sh
luna-send -n 1 palm://com.palm.btmonitor/monitor/radiooff {}
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="monitor_radioon"></a>
## `monitor/radioon`

`luna://com.palm.btmonitor/monitor/radioon`

Turns Bluetooth radio on

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `visible` | boolean |
| `connectable` | boolean |

```sh
luna-send -n 1 palm://com.palm.btmonitor/monitor/radioon '{"visible":true,"connectable":true}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
