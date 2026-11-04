# `com.palm.mediadb`

2 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`image/listalbums`](#image_listalbums) | root |  | media | Lists photo albums from mediadb |
| [`image/listimages`](#image_listimages) | root |  | media | Lists images from mediadb |

<a id="image_listalbums"></a>
## `image/listalbums`

`luna://com.palm.mediadb/image/listalbums`

Lists photo albums from mediadb

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

```sh
luna-send -n 1 luna://com.palm.mediadb/image/listalbums {}
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="image_listimages"></a>
## `image/listimages`

`luna://com.palm.mediadb/image/listimages`

Lists images from mediadb

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

```sh
luna-send -n 1 luna://com.palm.mediadb/image/listimages {}
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
