# `com.palm.notes`

1 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getNotes`](#getnotes) | root |  | misc | Views notes |

<a id="getnotes"></a>
## `getNotes`

`luna://com.palm.notes/getNotes`

Views notes

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

```sh
luna-send -n 1 palm://com.palm.notes/getNotes {}
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
