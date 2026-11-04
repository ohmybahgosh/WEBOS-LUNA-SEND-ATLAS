# `com.palm.systemmanager`

1 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`runProgressAnimation`](#runprogressanimation) | root |  | ui | Starts/stops the pulsing Palm logo progress animation |

<a id="runprogressanimation"></a>
## `runProgressAnimation`

`luna://com.palm.systemmanager/runProgressAnimation`

Starts/stops the pulsing Palm logo progress animation

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `state` | start \| stop |

```sh
luna-send -n 1 palm://com.palm.systemmanager/runProgressAnimation '{"state":"start"}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
