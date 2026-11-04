# `com.webos.service.devicereset`

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`doReset`](#doreset) | private |  | power | Method on com.webos.service.devicereset (introspected on-device; parameters undocumented). ⚠️ |
| [`getFirstBootAfterInstop`](#getfirstbootafterinstop) | private |  | power | Getter on com.webos.service.devicereset (introspected on-device; parameters undocumented). |
| [`getInstopCompleted`](#getinstopcompleted) | private |  | power | Getter on com.webos.service.devicereset (introspected on-device; parameters undocumented). |
| [`getInstopOnGoing`](#getinstopongoing) | private |  | power | Getter on com.webos.service.devicereset (introspected on-device; parameters undocumented). |
| [`getResetStatus`](#getresetstatus) | private |  | power | Getter on com.webos.service.devicereset (introspected on-device; parameters undocumented). |
| [`getTvRegion`](#gettvregion) | private |  | power | Getter on com.webos.service.devicereset (introspected on-device; parameters undocumented). |
| [`registerResetDone`](#registerresetdone) | private |  | power | Method on com.webos.service.devicereset (introspected on-device; parameters undocumented). ⚠️ |
| [`registerResetReady`](#registerresetready) | private |  | power | Method on com.webos.service.devicereset (introspected on-device; parameters undocumented). ⚠️ |
| [`registerResetting`](#registerresetting) | private |  | power | Method on com.webos.service.devicereset (introspected on-device; parameters undocumented). ⚠️ |
| [`requestReboot`](#requestreboot) | ssap |  | power-mgmt | Full TV reboot |
| [`respondseResetDone`](#respondseresetdone) | private |  | power | Method on com.webos.service.devicereset (introspected on-device; parameters undocumented). ⚠️ |
| [`respondseResetReady`](#respondseresetready) | private |  | power | Method on com.webos.service.devicereset (introspected on-device; parameters undocumented). ⚠️ |
| [`respondseResetting`](#respondseresetting) | private |  | power | Method on com.webos.service.devicereset (introspected on-device; parameters undocumented). ⚠️ |
| [`responseResetDone`](#responseresetdone) | private |  | power | Method on com.webos.service.devicereset (introspected on-device; parameters undocumented). ⚠️ |
| [`responseResetReady`](#responseresetready) | private |  | power | Method on com.webos.service.devicereset (introspected on-device; parameters undocumented). ⚠️ |
| [`responseResetting`](#responseresetting) | private |  | power | Method on com.webos.service.devicereset (introspected on-device; parameters undocumented). ⚠️ |
| [`setInstopCompleted`](#setinstopcompleted) | private |  | power | Setter on com.webos.service.devicereset (introspected on-device; parameters undocumented). |
| [`setResetStatus`](#setresetstatus) | private |  | power | Setter on com.webos.service.devicereset (introspected on-device; parameters undocumented). ⚠️ |

<a id="doreset"></a>
## `doReset` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/doReset`

Method on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/doReset '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfirstbootafterinstop"></a>
## `getFirstBootAfterInstop`

`luna://com.webos.service.devicereset/getFirstBootAfterInstop`

Getter on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/getFirstBootAfterInstop '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinstopcompleted"></a>
## `getInstopCompleted`

`luna://com.webos.service.devicereset/getInstopCompleted`

Getter on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/getInstopCompleted '{}'
```

> ACG groups: configurator.callbacks, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinstopongoing"></a>
## `getInstopOnGoing`

`luna://com.webos.service.devicereset/getInstopOnGoing`

Getter on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/getInstopOnGoing '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getresetstatus"></a>
## `getResetStatus`

`luna://com.webos.service.devicereset/getResetStatus`

Getter on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/getResetStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettvregion"></a>
## `getTvRegion`

`luna://com.webos.service.devicereset/getTvRegion`

Getter on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/getTvRegion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerresetdone"></a>
## `registerResetDone` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/registerResetDone`

Method on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/registerResetDone '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerresetready"></a>
## `registerResetReady` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/registerResetReady`

Method on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/registerResetReady '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerresetting"></a>
## `registerResetting` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/registerResetting`

Method on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/registerResetting '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestreboot"></a>
## `requestReboot`

`luna://com.webos.service.devicereset/requestReboot`

Full TV reboot

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `reason` | string, e.g. 'broadcastSystemChanged' |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.devicereset/requestReboot","payload":{"reason":"broadcastSystemChanged"}}
```

> bscpylgtv `reboot()` ('Reboot device fully') uses this as a public SSAP endpoint.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py)

<a id="respondseresetdone"></a>
## `respondseResetDone` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/respondseResetDone`

Method on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/respondseResetDone '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="respondseresetready"></a>
## `respondseResetReady` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/respondseResetReady`

Method on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/respondseResetReady '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="respondseresetting"></a>
## `respondseResetting` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/respondseResetting`

Method on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/respondseResetting '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="responseresetdone"></a>
## `responseResetDone` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/responseResetDone`

Method on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/responseResetDone '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="responseresetready"></a>
## `responseResetReady` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/responseResetReady`

Method on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/responseResetReady '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="responseresetting"></a>
## `responseResetting` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/responseResetting`

Method on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/responseResetting '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setinstopcompleted"></a>
## `setInstopCompleted`

`luna://com.webos.service.devicereset/setInstopCompleted`

Setter on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/setInstopCompleted '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setresetstatus"></a>
## `setResetStatus` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/setResetStatus`

Setter on com.webos.service.devicereset (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/setResetStatus '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
