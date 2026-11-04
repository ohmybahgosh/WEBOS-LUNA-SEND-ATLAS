# `com.webos.keyfilter.magicnumber`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`notifyChannelToRegister`](#notifychanneltoregister) | private |  | keys | Method registered by com.webos.keyfilter.magicnumber (root category) |

<a id="notifychanneltoregister"></a>
## `notifyChannelToRegister`

`luna://com.webos.keyfilter.magicnumber/notifyChannelToRegister`

Method registered by com.webos.keyfilter.magicnumber (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.keyfilter.magicnumber/notifyChannelToRegister '{}'
```

> Seen via `ls-monitor -i com.webos.keyfilter.magicnumber` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)
