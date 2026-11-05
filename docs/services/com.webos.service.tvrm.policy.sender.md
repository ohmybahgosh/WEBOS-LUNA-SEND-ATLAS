# `com.webos.service.tvrm.policy.sender`

TV resource-manager policy sender: subscribes to resource-policy actions. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`subscribePolicyAction`](#subscribepolicyaction) | private |  | tv-broadcast | inferred | Subscribes to the policy action. |

<a id="subscribepolicyaction"></a>
## `subscribePolicyAction`

`luna://com.webos.service.tvrm.policy.sender/subscribePolicyAction`

Subscribes to the policy action.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm.policy.sender/subscribePolicyAction '{}'
```

> ACG groups: all, private, tv, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
