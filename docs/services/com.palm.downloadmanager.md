# `com.palm.downloadmanager`

1 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`download`](#download) | root |  | storage | Downloads a URL to /media/internal/downloads |

<a id="download"></a>
## `download`

`luna://com.palm.downloadmanager/download`

Downloads a URL to /media/internal/downloads

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `target` | string url |

```sh
luna-send -n 1 palm://com.palm.downloadmanager/download '{"target":"http://www.google.com/index.html"}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
