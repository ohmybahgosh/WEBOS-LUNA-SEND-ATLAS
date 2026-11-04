# `org.webosbrew.hbchannel.service`

12 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`autostart`](#autostart) | root |  | misc | Homebrew Channel service: Boot hook |
| [`checkRoot`](#checkroot) | root |  | misc | Homebrew Channel service: Root status |
| [`elevateService`](#elevateservice) | root |  | misc | Homebrew Channel service: Elevates a dev-mode service to root ⚠️ |
| [`exec`](#exec) | root |  | misc | Runs a shell command (root if TV is rooted) ⚠️ |
| [`getAppInfo`](#getappinfo) | root |  | misc | Homebrew Channel service: getAppInfo via dev endpoints |
| [`getConfiguration`](#getconfiguration) | root |  | misc | Homebrew Channel service: Reads HBC flags |
| [`install`](#install) | root | yes | apps | Downloads, verifies and installs an IPK |
| [`reboot`](#reboot) | root |  | misc | Homebrew Channel service: Reboots |
| [`setConfiguration`](#setconfiguration) | root |  | misc | Homebrew Channel service: Sets HBC flags |
| [`spawn`](#spawn) | root | yes | misc | Spawns long-running process with streamed output ⚠️ |
| [`uninstall`](#uninstall) | root |  | misc | Homebrew Channel service: Removes app by id |
| [`updateStartupScript`](#updatestartupscript) | root |  | misc | Homebrew Channel service: Refreshes /var/lib/webosbrew/startup.sh ⚠️ |

<a id="autostart"></a>
## `autostart`

`luna://org.webosbrew.hbchannel.service/autostart`

Homebrew Channel service: Boot hook

- **Access:** root  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** code

```sh
luna-send -n 1 luna://org.webosbrew.hbchannel.service/autostart '{}'
```

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts)

<a id="checkroot"></a>
## `checkRoot`

`luna://org.webosbrew.hbchannel.service/checkRoot`

Homebrew Channel service: Root status

- **Access:** root  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** code

```sh
luna-send -n 1 luna://org.webosbrew.hbchannel.service/checkRoot '{}'
```

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts)

<a id="elevateservice"></a>
## `elevateService` ⚠️ DANGEROUS

`luna://org.webosbrew.hbchannel.service/elevateService`

Homebrew Channel service: Elevates a dev-mode service to root

- **Access:** root  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `id` | string |

```sh
luna-send -n 1 luna://org.webosbrew.hbchannel.service/elevateService '{}'
```

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts)

<a id="exec"></a>
## `exec` ⚠️ DANGEROUS

`luna://org.webosbrew.hbchannel.service/exec`

Runs a shell command (root if TV is rooted)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `command` | string |

```sh
luna-send -n 1 luna://org.webosbrew.hbchannel.service/exec '{"command":"id"}'
```

> Callable by apps.

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/README.md)

<a id="getappinfo"></a>
## `getAppInfo`

`luna://org.webosbrew.hbchannel.service/getAppInfo`

Homebrew Channel service: getAppInfo via dev endpoints

- **Access:** root  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** code

```sh
luna-send -n 1 luna://org.webosbrew.hbchannel.service/getAppInfo '{}'
```

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts)

<a id="getconfiguration"></a>
## `getConfiguration`

`luna://org.webosbrew.hbchannel.service/getConfiguration`

Homebrew Channel service: Reads HBC flags

- **Access:** root  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** code

```sh
luna-send -n 1 luna://org.webosbrew.hbchannel.service/getConfiguration '{}'
```

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts)

<a id="install"></a>
## `install`

`luna://org.webosbrew.hbchannel.service/install`

Downloads, verifies and installs an IPK

- **Access:** root  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `ipkUrl` | string |
| `ipkHash` | sha256 |
| `subscribe` | boolean |

```sh
luna-send -i -f luna://org.webosbrew.hbchannel.service/install '{"ipkUrl":"https://x/app.ipk","ipkHash":"SHA"}'
```

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/README.md), [2](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md)

<a id="reboot"></a>
## `reboot`

`luna://org.webosbrew.hbchannel.service/reboot`

Homebrew Channel service: Reboots

- **Access:** root  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** code

```sh
luna-send -n 1 luna://org.webosbrew.hbchannel.service/reboot '{}'
```

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts)

<a id="setconfiguration"></a>
## `setConfiguration`

`luna://org.webosbrew.hbchannel.service/setConfiguration`

Homebrew Channel service: Sets HBC flags

- **Access:** root  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** code

```sh
luna-send -n 1 luna://org.webosbrew.hbchannel.service/setConfiguration '{}'
```

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts)

<a id="spawn"></a>
## `spawn` ⚠️ DANGEROUS

`luna://org.webosbrew.hbchannel.service/spawn`

Spawns long-running process with streamed output

- **Access:** root  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `command` | string |

```sh
luna-send -i luna://org.webosbrew.hbchannel.service/spawn '{"command":"sleep 1"}'
```

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/README.md)

<a id="uninstall"></a>
## `uninstall`

`luna://org.webosbrew.hbchannel.service/uninstall`

Homebrew Channel service: Removes app by id

- **Access:** root  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `id` | string |

```sh
luna-send -n 1 luna://org.webosbrew.hbchannel.service/uninstall '{}'
```

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts)

<a id="updatestartupscript"></a>
## `updateStartupScript` ⚠️ DANGEROUS

`luna://org.webosbrew.hbchannel.service/updateStartupScript`

Homebrew Channel service: Refreshes /var/lib/webosbrew/startup.sh

- **Access:** root  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** HBC  
- **Confidence:** code

```sh
luna-send -n 1 luna://org.webosbrew.hbchannel.service/updateStartupScript '{}'
```

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts)
