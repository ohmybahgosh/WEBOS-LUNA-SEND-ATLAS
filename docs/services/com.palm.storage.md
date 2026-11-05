# `com.palm.storage`

Mass-storage service: enters USB mass-storage (MSM) disk mode, queries its status, and erases all storage.

3 methods.  Platforms seen: HP webOS, Palm, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`diskmode/enterMSM`](#diskmode_entermsm) | root |  | storage | documented | Enters (and toggles out of) USB mass storage mode |
| [`diskmode/queryMSMStatus`](#diskmode_querymsmstatus) | public |  | storage | inferred | Queries the MSM status (diskmode) |
| [`erase/EraseAll`](#erase_eraseall) | root |  | storage | documented | Erases all storage (part of ##RTN# sequence) ⚠️ |

<a id="diskmode_entermsm"></a>
## `diskmode/enterMSM`

`luna://com.palm.storage/diskmode/enterMSM`

Enters (and toggles out of) USB mass storage mode

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `user-confirmed` | boolean true |
| `enterIMasq` | boolean |

```sh
luna-send -n 1 palm://com.palm.storage/diskmode/enterMSM '{"user-confirmed":true,"enterIMasq":false}'
```

> Wiki lists the identical command for exit (toggle).

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="diskmode_querymsmstatus"></a>
## `diskmode/queryMSMStatus`

`luna://com.palm.storage/diskmode/queryMSMStatus`

Queries the MSM status (diskmode)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.palm.storage/diskmode/queryMSMStatus '{}'
```

> ACG groups: public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="erase_eraseall"></a>
## `erase/EraseAll` ⚠️ DANGEROUS

`luna://com.palm.storage/erase/EraseAll`

Erases all storage (part of ##RTN# sequence)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.palm.storage/erase/EraseAll {}
```

> Destructive per the wiki ("Nuking your phone").

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
