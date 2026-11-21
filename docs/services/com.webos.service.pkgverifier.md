# `com.webos.service.pkgverifier`

Package signature verifier that verifies IPK app-package signatures. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`verifyIpk`](#verifyipk) | private |  | security | documented | Verifies the ipk. |

<a id="verifyipk"></a>
## `verifyIpk`

`luna://com.webos.service.pkgverifier/verifyIpk`

Verifies the ipk.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ipkName` | String (observed in live traffic) |

```sh
luna-send -n 1 -f luna://com.webos.service.pkgverifier/verifyIpk '{}'
```

> ACG groups: pkgverifier.internal, all. Package signature verifier. Name only.  Parameters observed in live LS2 bus traffic (ls-monitor capture, LG webOS 22, W22O): the names and types are from real calls to this method, so the set may be incomplete and which parameters are required is not determined.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
