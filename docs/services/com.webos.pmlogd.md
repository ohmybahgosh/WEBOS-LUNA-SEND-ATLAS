# `com.webos.pmlogd`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`enableNewWhitelist`](#enablenewwhitelist) | private |  | misc | Reloads the pmlogd dev-log whitelist (also reloaded on reboot) |
| [`getdevlogstatus`](#getdevlogstatus) | private |  | misc | Reads whether dev logs are being recorded |
| [`setdevlogstatus`](#setdevlogstatus) | private |  | activity | Enables dev logging on webOS 3.x (no whitelist) |

<a id="enablenewwhitelist"></a>
## `enableNewWhitelist`

`luna://com.webos.pmlogd/enableNewWhitelist`

Reloads the pmlogd dev-log whitelist (also reloaded on reboot)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 luna://com.webos.pmlogd/enableNewWhitelist '{}'
```

> Documented in community pmlogd logging note.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/ops/pmlogd-logging.md)

<a id="getdevlogstatus"></a>
## `getdevlogstatus`

`luna://com.webos.pmlogd/getdevlogstatus`

Reads whether dev logs are being recorded

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 -f 'luna://com.webos.pmlogd/getdevlogstatus' '{}'
```

> Companion of setdevlogstatus {"recordDevLogs":bool}.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/ops/pmlogd-logging.md)

<a id="setdevlogstatus"></a>
## `setdevlogstatus`

`luna://com.webos.pmlogd/setdevlogstatus`

Enables dev logging on webOS 3.x (no whitelist)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3.x and older (4.x+ uses config system.collectDevLogs)  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `recordDevLogs` | boolean |

```sh
luna-send -n 1 -f 'luna://com.webos.pmlogd/setdevlogstatus' '{"recordDevLogs":true}'
```

Sources: [1](https://github.com/webosbrew/pages/blob/HEAD/content/pages/logging.md), [2](https://github.com/webosbrew/dev-manager-desktop/blob/HEAD/src/app/debug/pmlog/pmlog.component.ts), [3](https://github.com/webosbrew/piccap/blob/HEAD/servicefiles/setuplegacylogging.sh)
