# `com.palm.location`

Legacy location service: returns the current geographic position and configures GPS and auto-locate settings.

3 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getCurrentPosition`](#getcurrentposition) | root |  | location | documented | Gets current position |
| [`setAutoLocate`](#setautolocate) | root |  | location | documented | Enables auto locate |
| [`setUseGps`](#setusegps) | root |  | location | documented | Enables GPS use |

<a id="getcurrentposition"></a>
## `getCurrentPosition`

`luna://com.palm.location/getCurrentPosition`

Gets current position

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | boolean |

```sh
luna-send -f -P -i palm://com.palm.location/getCurrentPosition '{"subscribe":true}'
```

> Also on wiki.webos-internals.org/wiki/Luna_Send. Sample reply fields: latitude, longitude, altitude, heading, horizAccuracy, vertAccuracy, velocity, timestamp, errorCode.

Sources: [1](http://www.banneret.nl/webos/documentation/all/dev-guide/tools/command-line-tools.html)

<a id="setautolocate"></a>
## `setAutoLocate`

`luna://com.palm.location/setAutoLocate`

Enables auto locate

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `autoLocate` | string true/false |

```sh
luna-send -n 1 palm://com.palm.location/setAutoLocate '{"autoLocate":"true"}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="setusegps"></a>
## `setUseGps`

`luna://com.palm.location/setUseGps`

Enables GPS use

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `useGps` | string true/false |

```sh
luna-send -n 1 palm://com.palm.location/setUseGps '{"useGps":"true"}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
