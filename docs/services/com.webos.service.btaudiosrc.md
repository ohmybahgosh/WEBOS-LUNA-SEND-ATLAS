# `com.webos.service.btaudiosrc`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`connect`](#connect) | unknown |  | bluetooth | Connects a paired Bluetooth audio device and switches output to it, without the confirmation alert that bluetooth2 a2dp/connect raises |

<a id="connect"></a>
## `connect`

`luna://com.webos.service.btaudiosrc/connect`

Connects a paired Bluetooth audio device and switches output to it, without the confirmation alert that bluetooth2 a2dp/connect raises

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** C1-era webOS (user rooted OLED C1)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `address` | string (required) BT address |

```sh
luna-send -f -n 1 luna://com.webos.service.btaudiosrc/connect '{"address":"aa:bb:cc:dd:ee:ff"}'
```

> Found by a commenter via ls-monitor; run as root.

Sources: [1](https://gist.github.com/aabytt/bddbb1bcf031a050d89a89aeee3a6737#gistcomment-4836305)
