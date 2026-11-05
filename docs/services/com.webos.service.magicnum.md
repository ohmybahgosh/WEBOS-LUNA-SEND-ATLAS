# `com.webos.service.magicnum`

Appears to validate or resolve 'magic number' shortcuts for apps, channels, and launchers and set the country. Purpose. _(inferred from the service's methods)_

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkApp`](#checkapp) | public |  | misc | inferred | Checks the app. |
| [`checkChannel`](#checkchannel) | public |  | misc | inferred | Checks the channel. |
| [`checkLauncher`](#checklauncher) | private |  | apps | inferred | Checks the launcher. |
| [`info`](#info) | private |  | misc | inferred | Handles the info. |
| [`quit`](#quit) | private |  | misc | inferred | Quits the magicnum. |
| [`setCountry`](#setcountry) | private |  | misc | inferred | Sets the country. ⚠️ |

<a id="checkapp"></a>
## `checkApp`

`luna://com.webos.service.magicnum/checkApp`

Checks the app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/checkApp '{}'
```

> ACG groups: configurator.callbacks, magicnum.action, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkchannel"></a>
## `checkChannel`

`luna://com.webos.service.magicnum/checkChannel`

Checks the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/checkChannel '{}'
```

> ACG groups: public, magicnum.action, private, configurator.callbacks, service.magicnum, all, activities.callbacks, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checklauncher"></a>
## `checkLauncher`

`luna://com.webos.service.magicnum/checkLauncher`

Checks the launcher.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/checkLauncher '{}'
```

> ACG groups: configurator.callbacks, service.magicnum, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.magicnum/info`

Handles the info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `arguments` |  |
| `commands` |  |
| `description` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/info '{}'
```

> ACG groups: magicnum.action, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.magicnum/quit`

Quits the magicnum.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/quit '{}'
```

> ACG groups: magicnum.action, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcountry"></a>
## `setCountry` ⚠️ DANGEROUS

`luna://com.webos.service.magicnum/setCountry`

Sets the country.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/setCountry '{}'
```

> ACG groups: configurator.callbacks, service.magicnum, all, activities.callbacks. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
