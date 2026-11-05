# `com.webos.rm.client`

Resource-manager client interface: completes resource acquisition and relays policy actions and private commands. Appears to be a thin client to the TV resource manager. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`acquireComplete`](#acquirecomplete) | private |  | misc | inferred | Acquires the complete. |
| [`policyAction`](#policyaction) | private |  | misc | inferred | Handles the policy action. |
| [`privateCommand`](#privatecommand) | private |  | misc | inferred | Handles the private command. |

<a id="acquirecomplete"></a>
## `acquireComplete`

`luna://com.webos.rm.client/acquireComplete`

Acquires the complete.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.rm.client/acquireComplete '{}'
```

> ACG groups: private, tv, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="policyaction"></a>
## `policyAction`

`luna://com.webos.rm.client/policyAction`

Handles the policy action.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.rm.client/policyAction '{}'
```

> ACG groups: private, tv, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="privatecommand"></a>
## `privateCommand`

`luna://com.webos.rm.client/privateCommand`

Handles the private command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.rm.client/privateCommand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
