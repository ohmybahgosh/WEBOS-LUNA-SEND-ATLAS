# `com.webos.service.recent`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`listRecents`](#listrecents) | private |  | apps | Lists the recent apps panel entries |
| [`removeRecent`](#removerecent) | private |  | apps | Removes an app from the recents list |

<a id="listrecents"></a>
## `listRecents`

`luna://com.webos.service.recent/listRecents`

Lists the recent apps panel entries

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.recent/listRecents '{}'
```

Sources: [1](https://github.com/rudra-avatar/Hearth/blob/HEAD/src/lib/recents.ts)

<a id="removerecent"></a>
## `removeRecent`

`luna://com.webos.service.recent/removeRecent`

Removes an app from the recents list

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** not on every webOS  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `appId` | string |

```sh
luna-send -n 1 luna://com.webos.service.recent/removeRecent '{"appId":"netflix"}'
```

Sources: [1](https://github.com/lasharor/cleanyourtv-WebOS/blob/HEAD/helper/running.js)
