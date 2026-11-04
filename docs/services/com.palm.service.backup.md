# `com.palm.service.backup`

2 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`restoreApps`](#restoreapps) | root |  | update | Restores purchased apps |
| [`scheduleAppRestore`](#scheduleapprestore) | root |  | update | Schedules restore of purchased apps |

<a id="restoreapps"></a>
## `restoreApps`

`luna://com.palm.service.backup/restoreApps`

Restores purchased apps

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

```sh
luna-send -n 1 palm://com.palm.service.backup/restoreApps '{}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="scheduleapprestore"></a>
## `scheduleAppRestore`

`luna://com.palm.service.backup/scheduleAppRestore`

Schedules restore of purchased apps

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

```sh
luna-send -n 1 palm://com.palm.service.backup/scheduleAppRestore '{}'
```

> Wiki: used with restoreApps to reinstall purchased apps.

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
