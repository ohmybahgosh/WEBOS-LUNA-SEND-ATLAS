# `com.palm.wifi`

2 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`findnetworks`](#findnetworks) | root |  | network | Finds networks / connects to known WAP |
| [`setstate`](#setstate) | root |  | network | Turns WiFi on/off |

<a id="findnetworks"></a>
## `findnetworks`

`luna://com.palm.wifi/findnetworks`

Finds networks / connects to known WAP

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

```sh
luna-send -n 1 palm://com.palm.wifi/findnetworks '{}'
```

> Wiki shows the malformed payload {""}; {} assumed.

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="setstate"></a>
## `setstate`

`luna://com.palm.wifi/setstate`

Turns WiFi on/off

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `state` | enabled \| disabled |

```sh
luna-send -n 1 palm://com.palm.wifi/setstate '{"state":"enabled"}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
