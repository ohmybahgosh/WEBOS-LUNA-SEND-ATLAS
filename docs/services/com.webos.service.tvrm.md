# `com.webos.service.tvrm`

TV resource manager: requests, releases and arbitrates tuner/pipeline resources through transactions, policy actions and foreground/background state, with a simulation mode. _(inferred from the service's methods)_

16 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`beginTransaction`](#begintransaction) | private |  | tv-broadcast | inferred | Begins the transaction. |
| [`dbgFeature`](#dbgfeature) | private |  | tv-broadcast | inferred | Debug: Handles the feature. |
| [`endTransaction`](#endtransaction) | private |  | tv-broadcast | inferred | Handles the end transaction. |
| [`getResourceToRelease`](#getresourcetorelease) | private |  | tv-broadcast | inferred | Returns the resource to release. |
| [`getSimulationResult`](#getsimulationresult) | private |  | tv-broadcast | inferred | Returns the simulation result. |
| [`notifyBackground`](#notifybackground) | private |  | tv-broadcast | inferred | Notifies of the background. |
| [`notifyForeground`](#notifyforeground) | private |  | tv-broadcast | inferred | Notifies of the foreground. |
| [`policyActionEvent`](#policyactionevent) | private |  | misc | inferred | Handles the policy action event. |
| [`presetTuner`](#presettuner) | private |  | tv-broadcast | inferred | Handles the preset tuner. ⚠️ |
| [`registerHandledResource`](#registerhandledresource) | private |  | tv-broadcast | inferred | Registers the handled resource. |
| [`releaseResource`](#releaseresource) | private |  | tv-broadcast | inferred | Releases the resource. |
| [`requestResource`](#requestresource) | private |  | tv-broadcast | inferred | Requests the resource. |
| [`setPipelineState`](#setpipelinestate) | private |  | tv-broadcast | inferred | Sets the pipeline state. |
| [`setSimulationMode`](#setsimulationmode) | private |  | tv-broadcast | inferred | Sets the simulation mode. |
| [`simulateResource`](#simulateresource) | private |  | tv-broadcast | inferred | Handles the simulate resource. |
| [`updatePipelineInfo`](#updatepipelineinfo) | private |  | tv-broadcast | inferred | Updates the pipeline info. |

<a id="begintransaction"></a>
## `beginTransaction`

`luna://com.webos.service.tvrm/beginTransaction`

Begins the transaction.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/beginTransaction '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="dbgfeature"></a>
## `dbgFeature`

`luna://com.webos.service.tvrm/dbgFeature`

Debug: Handles the feature.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/dbgFeature '{}'
```

> ACG groups: private, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="endtransaction"></a>
## `endTransaction`

`luna://com.webos.service.tvrm/endTransaction`

Handles the end transaction.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/endTransaction '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getresourcetorelease"></a>
## `getResourceToRelease`

`luna://com.webos.service.tvrm/getResourceToRelease`

Returns the resource to release.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/getResourceToRelease '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsimulationresult"></a>
## `getSimulationResult`

`luna://com.webos.service.tvrm/getSimulationResult`

Returns the simulation result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `simulationResult` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/getSimulationResult '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifybackground"></a>
## `notifyBackground`

`luna://com.webos.service.tvrm/notifyBackground`

Notifies of the background.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/notifyBackground '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyforeground"></a>
## `notifyForeground`

`luna://com.webos.service.tvrm/notifyForeground`

Notifies of the foreground.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/notifyForeground '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="policyactionevent"></a>
## `policyActionEvent`

`luna://com.webos.service.tvrm/policyActionEvent`

Handles the policy action event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/policyActionEvent '{}'
```

> ACG groups: all, private, tvrm.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="presettuner"></a>
## `presetTuner` ⚠️ DANGEROUS

`luna://com.webos.service.tvrm/presetTuner`

Handles the preset tuner.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/presetTuner '{}'
```

> ACG groups: private, tv, all, tvrm.control. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerhandledresource"></a>
## `registerHandledResource`

`luna://com.webos.service.tvrm/registerHandledResource`

Registers the handled resource.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/registerHandledResource '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releaseresource"></a>
## `releaseResource`

`luna://com.webos.service.tvrm/releaseResource`

Releases the resource.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/releaseResource '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestresource"></a>
## `requestResource`

`luna://com.webos.service.tvrm/requestResource`

Requests the resource.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/requestResource '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpipelinestate"></a>
## `setPipelineState`

`luna://com.webos.service.tvrm/setPipelineState`

Sets the pipeline state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/setPipelineState '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsimulationmode"></a>
## `setSimulationMode`

`luna://com.webos.service.tvrm/setSimulationMode`

Sets the simulation mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/setSimulationMode '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="simulateresource"></a>
## `simulateResource`

`luna://com.webos.service.tvrm/simulateResource`

Handles the simulate resource.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/simulateResource '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatepipelineinfo"></a>
## `updatePipelineInfo`

`luna://com.webos.service.tvrm/updatePipelineInfo`

Updates the pipeline info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvrm/updatePipelineInfo '{}'
```

> ACG groups: private, tv, all, tvrm.control.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
