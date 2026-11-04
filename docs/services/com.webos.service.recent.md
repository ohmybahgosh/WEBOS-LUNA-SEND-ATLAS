# `com.webos.service.recent`

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`listRecents`](#listrecents) | private |  | apps | Lists the recent apps panel entries |
| [`removeAllRecents`](#removeallrecents) | private |  | misc | Method on com.webos.service.recent (introspected on-device; parameters undocumented). ⚠️ |
| [`removeRecent`](#removerecent) | private |  | apps | Removes an app from the recents list |
| [`requestScreenCapture`](#requestscreencapture) | private |  | misc | Method on com.webos.service.recent (introspected on-device; parameters undocumented). |

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

<a id="removeallrecents"></a>
## `removeAllRecents` ⚠️ DANGEROUS

`luna://com.webos.service.recent/removeAllRecents`

Method on com.webos.service.recent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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

Method on com.webos.service.recent (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.recent/requestScreenCapture '{}'
```

> ACG groups: private, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
