# `com.webos.service.tv.legacyinput`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`createKeyEvent`](#createkeyevent) | private |  | keys | Injects a key event via the legacy input service |

<a id="createkeyevent"></a>
## `createKeyEvent`

`luna://com.webos.service.tv.legacyinput/createKeyEvent`

Injects a key event via the legacy input service

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tv.legacyinput/createKeyEvent '{}'
```

> Seen via `ls-monitor -i com.webos.service.tv.legacyinput` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: all, private, tv.services. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/b9.md)
