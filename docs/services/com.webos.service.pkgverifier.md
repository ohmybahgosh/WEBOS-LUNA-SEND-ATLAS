# `com.webos.service.pkgverifier`

Package signature verifier that verifies IPK app-package signatures. _(inferred from the service's methods)_

1 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`verifyIpk`](#verifyipk) | private |  | security | inferred | Verifies the ipk. |

<a id="verifyipk"></a>
## `verifyIpk`

`luna://com.webos.service.pkgverifier/verifyIpk`

Verifies the ipk.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.pkgverifier/verifyIpk '{}'
```

> ACG groups: pkgverifier.internal, all. Package signature verifier. Name only.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
