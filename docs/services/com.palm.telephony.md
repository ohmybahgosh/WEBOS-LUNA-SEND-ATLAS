# `com.palm.telephony`

5 methods.  Platforms seen: HP webOS, Palm.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`dial`](#dial) | root |  | misc | Dials a number (really places the call) |
| [`hangupAll`](#hangupall) | root |  | misc | Hangs up all calls |
| [`radioDefaultsRestore`](#radiodefaultsrestore) | root |  | misc | Restores radio defaults (##RTN# style nuke command) ⚠️ |
| [`resetRadio`](#resetradio) | root |  | misc | Resets the radio (part of ##RTN# sequence) ⚠️ |
| [`roamModeSet`](#roammodeset) | root |  | misc | Sets roaming mode |

<a id="dial"></a>
## `dial`

`luna://com.palm.telephony/dial`

Dials a number (really places the call)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `number` | string |

```sh
luna-send -n 1 palm://com.palm.telephony/dial '{"number":"8001234567"}'
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="hangupall"></a>
## `hangupAll`

`luna://com.palm.telephony/hangupAll`

Hangs up all calls

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

```sh
luna-send -n 1 palm://com.palm.telephony/hangupAll {}
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="radiodefaultsrestore"></a>
## `radioDefaultsRestore` ⚠️ DANGEROUS

`luna://com.palm.telephony/radioDefaultsRestore`

Restores radio defaults (##RTN# style nuke command)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

```sh
luna-send -n 1 luna://com.palm.telephony/radioDefaultsRestore {}
```

> Wiki warns Palm calls this "Nuking your phone"; do not remove battery.

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="resetradio"></a>
## `resetRadio` ⚠️ DANGEROUS

`luna://com.palm.telephony/resetRadio`

Resets the radio (part of ##RTN# sequence)

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

```sh
luna-send -n 1 luna://com.palm.telephony/resetRadio {}
```

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)

<a id="roammodeset"></a>
## `roamModeSet`

`luna://com.palm.telephony/roamModeSet`

Sets roaming mode

- **Access:** root  
- **Subscribe:** no  
- **Platform:** Palm, HP webOS  
- **Versions:** webOS 1.x/2.x  
- **Confidence:** community

| Param | Type / notes |
|---|---|
| `mode` | homeonly \| any \| roamonly |

```sh
luna-send -n 1 palm://com.palm.telephony/roamModeSet '{"mode":"homeonly"}'
```

> Wiki examples also use a double slash (//roamModeSet).

Sources: [1](https://wiki.webos-internals.org/wiki/Luna_Send)
