# `com.webos.service.systemprofile`

System-profile service: enables, disables and lists device profiles and reports status. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`debug/rescan`](#debug_rescan) | private |  | apps | documented | Rescans the system profile override folder (/var/webos-profile/override) so a custom home profile is used |
| [`disableProfile`](#disableprofile) | private |  | misc | inferred | Disables the profile. |
| [`enableProfile`](#enableprofile) | private |  | misc | inferred | Enables the profile. |
| [`getProfiles`](#getprofiles) | private |  | settings | documented | Reads named system profiles (e.g. defaultApps, idleApp) |
| [`status`](#status) | private |  | misc | inferred | Handles the status. |

<a id="debug_rescan"></a>
## `debug/rescan`

`luna://com.webos.service.systemprofile/debug/rescan`

Rescans the system profile override folder (/var/webos-profile/override) so a custom home profile is used

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 11-12 (per home-chooser)  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.systemprofile/debug/rescan '{}'
```

> home-chooser notes systemprofile/getProfiles (12.x) and debug/rescan (11.x and 12.x) refuse the service identity.

Sources: [1](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/README.md), [2](https://github.com/webosbrew/home-chooser/blob/HEAD/docs/service.md)

<a id="disableprofile"></a>
## `disableProfile`

`luna://com.webos.service.systemprofile/disableProfile`

Disables the profile.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemprofile/disableProfile '{}'
```

> ACG groups: systemProfile, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enableprofile"></a>
## `enableProfile`

`luna://com.webos.service.systemprofile/enableProfile`

Enables the profile.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemprofile/enableProfile '{}'
```

> ACG groups: systemProfile, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getprofiles"></a>
## `getProfiles`

`luna://com.webos.service.systemprofile/getProfiles`

Reads named system profiles (e.g. defaultApps, idleApp)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `names` | string[] |
| `subscribe` | boolean |

```sh
luna-send -n 1 luna://com.webos.service.systemprofile/getProfiles '{"names":["defaultApps","idleApp"],"subscribe":false}'
```

Sources: [1](https://github.com/Razdva122/clean-your-tv-lg-webos/blob/main/cytv/operations.py)

<a id="status"></a>
## `status`

`luna://com.webos.service.systemprofile/status`

Handles the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.systemprofile/status '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
