# `com.webos.service.tvrm.policy.receiver`

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`notifyPolicyActionDone`](#notifypolicyactiondone) | private |  | tv-broadcast | Method on com.webos.service.tvrm.policy.receiver (introspected on-device; parameters undocumented). |

<a id="notifypolicyactiondone"></a>
## `notifyPolicyActionDone`

`luna://com.webos.service.tvrm.policy.receiver/notifyPolicyActionDone`

Method on com.webos.service.tvrm.policy.receiver (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm.policy.receiver/notifyPolicyActionDone '{}'
```

> ACG groups: all, tv, private, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
