# `com.webos.service.tvrm.policy.receiver`

TV resource-manager policy receiver exposing a single method to acknowledge completed policy actions. Narrow arbitration role. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`notifyPolicyActionDone`](#notifypolicyactiondone) | private |  | tv-broadcast | inferred | Notifies of the policy action done. |

<a id="notifypolicyactiondone"></a>
## `notifyPolicyActionDone`

`luna://com.webos.service.tvrm.policy.receiver/notifyPolicyActionDone`

Notifies of the policy action done.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm.policy.receiver/notifyPolicyActionDone '{}'
```

> ACG groups: all, tv, private, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
