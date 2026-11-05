# `com.webos.service.arccontroller`

HDMI ARC/eARC controller: reports and sets ARC state, reads ARC EDID info and eARC delay. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getARCEDIDInfo`](#getarcedidinfo) | public |  | misc | inferred | Returns the ARCEDID info. |
| [`getARCState`](#getarcstate) | public |  | misc | inferred | Returns the ARC state. |
| [`getEARCDelay`](#getearcdelay) | public |  | misc | inferred | Returns the EARC delay. |
| [`setARCState`](#setarcstate) | public |  | misc | inferred | Sets the ARC state. |

<a id="getarcedidinfo"></a>
## `getARCEDIDInfo`

`luna://com.webos.service.arccontroller/getARCEDIDInfo`

Returns the ARCEDID info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `SADB` |  |
| `SADs` |  |
| `arcHDMIPort` |  |
| `atmos_arc` |  |
| `dynamicEdid` |  |
| `eARC` |  |
| `earcSADB` |  |
| `earcSADs` |  |
| `edidInfo` |  |
| `inputType` |  |
| `port` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.arccontroller/getARCEDIDInfo '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getarcstate"></a>
## `getARCState`

`luna://com.webos.service.arccontroller/getARCState`

Returns the ARC state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `advancedEarcCapability` |  |
| `arcActivation` |  |
| `arcProfile` |  |
| `audioCodingType` |  |
| `audioDeviceType` |  |
| `connectionDepth` |  |
| `earcATMOS` |  |
| `earcCapability` |  |
| `earcMatProfile` |  |
| `hexSAD` |  |
| `lgHarmony` |  |
| `lgHarmonyDevice` |  |
| `maxChannelNumber` |  |
| `mpeg4AACLC` |  |
| `soundModeList` |  |
| `soundModeType` |  |
| `supportIamf` |  |
| `volumeSyncable` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.arccontroller/getARCState '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getearcdelay"></a>
## `getEARCDelay`

`luna://com.webos.service.arccontroller/getEARCDelay`

Returns the EARC delay.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.arccontroller/getEARCDelay '{}'
```

> ACG groups: all, private, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setarcstate"></a>
## `setARCState`

`luna://com.webos.service.arccontroller/setARCState`

Sets the ARC state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.arccontroller/setARCState '{}'
```

> ACG groups: all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
