# `com.palm.backup`

Legacy Palm/HP webOS backup service: starts a backup of device data. _(inferred from the service's methods)_

1 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`startBackup`](#startbackup) | root |  | storage | documented | Starts a manual Palm Backup (after launching com.palm.app.backup) |

<a id="startbackup"></a>
## `startBackup`

`luna://com.palm.backup/startBackup`

Starts a manual Palm Backup (after launching com.palm.app.backup)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

```sh
luna-send -n 1 palm://com.palm.backup/startBackup '{}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
