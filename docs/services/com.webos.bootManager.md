# `com.webos.bootManager`

Boot manager that monitors and controls boot status and boot mode (e.g. Normal), signals first-use completion, and reports boot-sequence progress.

4 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`firstUseDone`](#firstusedone) | private |  | misc | inferred | Handles the first use done. |
| [`generateSignal`](#generatesignal) | public |  | misc | documented | Generates boot step signals. Caller and argument are decided statically. |
| [`getBootStatus`](#getbootstatus) | public | yes | misc | documented | Gets the boot status or subscribe to updates on the boot status. |
| [`signals`](#signals) | unknown |  | misc | documented | Contains an array of upstart signals. The value of an upstart signal is set to true after bootd generates the signal. Note: The value of all |

<a id="firstusedone"></a>
## `firstUseDone`

`luna://com.webos.bootManager/firstUseDone`

Handles the first use done.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.bootManager/firstUseDone '{}'
```

> ACG groups: system, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="generatesignal"></a>
## `generateSignal`

`luna://com.webos.bootManager/generateSignal`

Generates boot step signals. Caller and argument are decided statically.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Indicates the logical event name to notify bootd. Normally, this is used to generate upstart signal like 'core-boot-done', 'init-boot-done' and 'minimal-boot-done'. Note: If bootd internal components await the logical event, bootd unblocks internal components. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) Indicates the reason for the failure of the operation. See the " Error Codes Reference" section of this method for details. |

```sh
luna-send -n 1 -f luna://com.webos.bootManager/generateSignal '{ "name":"minimal-boot-done" }
```

> ACG: boot.management \| Returns: errorText:String; returnValue:Boolean \| Service: Monitors and controls the boot status/mode. It manages the boot sequence for: Ensuring boot time performance. Providing boot mode like 'Normal', and so on.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-bootmanager/)

<a id="getbootstatus"></a>
## `getBootStatus`

`luna://com.webos.bootManager/getBootStatus`

Gets the boot status or subscribe to updates on the boot status.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get future updates. Possible values are: true: Get future updates. false: To receive a one-time update. |

**Returns:**

| Field | Type / notes |
|---|---|
| `bootStatus` | String (required) Returns the current status of the booting process. Possible values are: - normal: The current status of the booting process is normal. - unknown: The current status of the booting process unknown. |
| `powerStatus` | String (required) Returns current power status. Possible values are: - active: Current power status is in active mode. - activeStandby: Current power status is in activeStandby mode. - suspend: Current power status is in suspend mode. - unknown: Current power status is in unknown mode. |
| `bootTarget` | String (required) Returns the current target system. Possible values are: - emulator - hardware - unknown |
| `signals` | Object: signals (required) Returns signal information. |

```sh
luna-send -n 1 -f luna://com.webos.bootManager/getBootStatus '{ "subscribe":true }
```

> ACG: boot.query \| Returns: bootStatus:String; powerStatus:String; bootTarget:String; signals:Object: signals; subscribed:Boolean; returnValue:Boolean \| Service: Monitors and controls the boot status/mode. It manages the boot sequence for: Ensuring boot time performance. Providing boot mode like 'Normal', and so on.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-bootmanager/)

<a id="signals"></a>
## `signals`

`luna://com.webos.bootManager/signals`

Contains an array of upstart signals. The value of an upstart signal is set to true after bootd generates the signal. Note: The value of all upstart signal in this array is set to false by default.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.bootManager/signals '{}'
```

> Service: Monitors and controls the boot status/mode. It manages the boot sequence for: Ensuring boot time performance. Providing boot mode like 'Normal', and so on. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-bootmanager/)
