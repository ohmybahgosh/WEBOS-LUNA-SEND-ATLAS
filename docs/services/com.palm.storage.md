# `com.palm.storage`

3 methods.  Platforms seen: HP webOS, Palm, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`diskmode/enterMSM`](#diskmode_entermsm) | root |  | storage | Enters (and toggles out of) USB mass storage mode |
| [`diskmode/queryMSMStatus`](#diskmode_querymsmstatus) | public |  | storage | Method on com.palm.storage (from on-device permission registry; parameters undocumented). |
| [`erase/EraseAll`](#erase_eraseall) | root |  | storage | Erases all storage (part of ##RTN# sequence) ⚠️ |

<a id="diskmode_entermsm"></a>
## `diskmode/enterMSM`

`luna://com.palm.storage/diskmode/enterMSM`

Enters (and toggles out of) USB mass storage mode

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

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

Method on com.palm.storage (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

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
- **Confidence:** community

```sh
luna-send -n 1 luna://com.palm.storage/erase/EraseAll {}
```

> Destructive per the wiki ("Nuking your phone").

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
