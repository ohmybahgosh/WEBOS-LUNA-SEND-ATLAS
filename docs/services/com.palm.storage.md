# `com.palm.storage`

2 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`diskmode/enterMSM`](#diskmode_entermsm) | root |  | storage | Enters (and toggles out of) USB mass storage mode |
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
