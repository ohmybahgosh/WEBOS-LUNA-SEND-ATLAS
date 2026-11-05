# `com.palm.notes`

Legacy Palm/HP webOS notes application service; retrieves stored notes. _(inferred from the service's methods)_

1 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getNotes`](#getnotes) | root |  | misc | documented | Views notes |

<a id="getnotes"></a>
## `getNotes`

`luna://com.palm.notes/getNotes`

Views notes

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

```sh
luna-send -n 1 palm://com.palm.notes/getNotes {}
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
