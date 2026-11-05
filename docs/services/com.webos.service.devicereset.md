# `com.webos.service.devicereset`

Device factory-reset service: triggers reset, reports reset status and progress, requests reboot, and tracks in-store ('instop') demo state. _(inferred from the service's methods)_

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`doReset`](#doreset) | private |  | power | inferred | Handles the do reset. ⚠️ |
| [`getFirstBootAfterInstop`](#getfirstbootafterinstop) | private |  | power | inferred | Returns the first boot after instop. |
| [`getInstopCompleted`](#getinstopcompleted) | private |  | power | inferred | Returns the instop completed. |
| [`getInstopOnGoing`](#getinstopongoing) | private |  | power | inferred | Returns the instop on going. |
| [`getResetStatus`](#getresetstatus) | private |  | power | inferred | Returns the reset status. |
| [`getTvRegion`](#gettvregion) | private |  | power | inferred | Returns the TV region. |
| [`registerResetDone`](#registerresetdone) | private |  | power | inferred | Registers the reset done. ⚠️ |
| [`registerResetReady`](#registerresetready) | private |  | power | inferred | Registers the reset ready. ⚠️ |
| [`registerResetting`](#registerresetting) | private |  | power | inferred | Registers the resetting. ⚠️ |
| [`requestReboot`](#requestreboot) | ssap |  | power-mgmt | documented | Full TV reboot |
| [`respondseResetDone`](#respondseresetdone) | private |  | power | inferred | Handles the respondse reset done. ⚠️ |
| [`respondseResetReady`](#respondseresetready) | private |  | power | inferred | Handles the respondse reset ready. ⚠️ |
| [`respondseResetting`](#respondseresetting) | private |  | power | inferred | Handles the respondse resetting. ⚠️ |
| [`responseResetDone`](#responseresetdone) | private |  | power | inferred | Handles the response reset done. ⚠️ |
| [`responseResetReady`](#responseresetready) | private |  | power | inferred | Handles the response reset ready. ⚠️ |
| [`responseResetting`](#responseresetting) | private |  | power | inferred | Handles the response resetting. ⚠️ |
| [`setInstopCompleted`](#setinstopcompleted) | private |  | power | inferred | Sets the instop completed. |
| [`setResetStatus`](#setresetstatus) | private |  | power | inferred | Sets the reset status. ⚠️ |

<a id="doreset"></a>
## `doReset` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/doReset`

Handles the do reset.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/doReset '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfirstbootafterinstop"></a>
## `getFirstBootAfterInstop`

`luna://com.webos.service.devicereset/getFirstBootAfterInstop`

Returns the first boot after instop.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/getFirstBootAfterInstop '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinstopcompleted"></a>
## `getInstopCompleted`

`luna://com.webos.service.devicereset/getInstopCompleted`

Returns the instop completed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/getInstopCompleted '{}'
```

> ACG groups: configurator.callbacks, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinstopongoing"></a>
## `getInstopOnGoing`

`luna://com.webos.service.devicereset/getInstopOnGoing`

Returns the instop on going.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/getInstopOnGoing '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getresetstatus"></a>
## `getResetStatus`

`luna://com.webos.service.devicereset/getResetStatus`

Returns the reset status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/getResetStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettvregion"></a>
## `getTvRegion`

`luna://com.webos.service.devicereset/getTvRegion`

Returns the TV region.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/getTvRegion '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerresetdone"></a>
## `registerResetDone` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/registerResetDone`

Registers the reset done.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/registerResetDone '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerresetready"></a>
## `registerResetReady` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/registerResetReady`

Registers the reset ready.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/registerResetReady '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerresetting"></a>
## `registerResetting` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/registerResetting`

Registers the resetting.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

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

Handles the respondse reset done.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/respondseResetDone '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="respondseresetready"></a>
## `respondseResetReady` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/respondseResetReady`

Handles the respondse reset ready.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/respondseResetReady '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="respondseresetting"></a>
## `respondseResetting` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/respondseResetting`

Handles the respondse resetting.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/respondseResetting '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="responseresetdone"></a>
## `responseResetDone` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/responseResetDone`

Handles the response reset done.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/responseResetDone '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="responseresetready"></a>
## `responseResetReady` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/responseResetReady`

Handles the response reset ready.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/responseResetReady '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="responseresetting"></a>
## `responseResetting` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/responseResetting`

Handles the response resetting.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/responseResetting '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setinstopcompleted"></a>
## `setInstopCompleted`

`luna://com.webos.service.devicereset/setInstopCompleted`

Sets the instop completed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/setInstopCompleted '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setresetstatus"></a>
## `setResetStatus` ⚠️ DANGEROUS

`luna://com.webos.service.devicereset/setResetStatus`

Sets the reset status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.devicereset/setResetStatus '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
