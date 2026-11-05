# `com.webos.service.recent`

Recent-apps service: lists and removes recently used apps and captures the screen for recents thumbnails. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`listRecents`](#listrecents) | private |  | apps | documented | Lists the recent apps panel entries |
| [`removeAllRecents`](#removeallrecents) | private |  | misc | inferred | Removes the all recents. ⚠️ |
| [`removeRecent`](#removerecent) | private |  | apps | documented | Removes an app from the recents list |
| [`requestScreenCapture`](#requestscreencapture) | private |  | misc | inferred | Requests the screen capture. |

<a id="listrecents"></a>
## `listRecents`

`luna://com.webos.service.recent/listRecents`

Lists the recent apps panel entries

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.recent/listRecents '{}'
```

Sources: [1](https://github.com/rudra-avatar/Hearth/blob/HEAD/src/lib/recents.ts)

<a id="removeallrecents"></a>
## `removeAllRecents` ⚠️ DANGEROUS

`luna://com.webos.service.recent/removeAllRecents`

Removes the all recents.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.recent/removeAllRecents '{}'
```

> ACG groups: private, launcher.control, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removerecent"></a>
## `removeRecent`

`luna://com.webos.service.recent/removeRecent`

Removes an app from the recents list

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** not on every webOS  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | string |

```sh
luna-send -n 1 luna://com.webos.service.recent/removeRecent '{"appId":"netflix"}'
```

Sources: [1](https://github.com/lasharor/cleanyourtv-WebOS/blob/HEAD/helper/running.js)

<a id="requestscreencapture"></a>
## `requestScreenCapture`

`luna://com.webos.service.recent/requestScreenCapture`

Requests the screen capture.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.recent/requestScreenCapture '{}'
```

> ACG groups: private, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
