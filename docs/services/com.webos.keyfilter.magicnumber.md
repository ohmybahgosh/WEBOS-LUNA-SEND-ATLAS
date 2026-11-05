# `com.webos.keyfilter.magicnumber`

Key-filter service for Magic Remote number input; notifies which channel to register. Opaque beyond that. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`notifyChannelToRegister`](#notifychanneltoregister) | private |  | keys | inferred | Notifies of the channel to register. |

<a id="notifychanneltoregister"></a>
## `notifyChannelToRegister`

`luna://com.webos.keyfilter.magicnumber/notifyChannelToRegister`

Notifies of the channel to register.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.keyfilter.magicnumber/notifyChannelToRegister '{}'
```

> Seen via `ls-monitor -i com.webos.keyfilter.magicnumber` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)
