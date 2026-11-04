# `com.webos.service.systemprofile`

2 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`debug/rescan`](#debug_rescan) | private |  | apps | Rescans the system profile override folder (/var/webos-profile/override) so a custom home profile is used |
| [`getProfiles`](#getprofiles) | private |  | settings | Reads named system profiles (e.g. defaultApps, idleApp) |

<a id="debug_rescan"></a>
## `debug/rescan`

`luna://com.webos.service.systemprofile/debug/rescan`

Rescans the system profile override folder (/var/webos-profile/override) so a custom home profile is used

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 11-12 (per home-chooser)  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.systemprofile/debug/rescan '{}'
```

> home-chooser notes systemprofile/getProfiles (12.x) and debug/rescan (11.x and 12.x) refuse the service identity.

Sources: [1](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/README.md), [2](https://github.com/webosbrew/home-chooser/blob/HEAD/docs/service.md)

<a id="getprofiles"></a>
## `getProfiles`

`luna://com.webos.service.systemprofile/getProfiles`

Reads named system profiles (e.g. defaultApps, idleApp)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `names` | string[] |
| `subscribe` | boolean |

```sh
luna-send -n 1 luna://com.webos.service.systemprofile/getProfiles '{"names":["defaultApps","idleApp"],"subscribe":false}'
```

Sources: [1](https://github.com/Razdva122/clean-your-tv-lg-webos/blob/main/cytv/operations.py)
