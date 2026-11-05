# `com.webos.service.legacybroadcast.tvpowerd`

TV power daemon (legacy broadcast stack): coordinates power-off, suspend, resume, and active-standby transitions via registered requests and prepare/response acknowledgements. _(inferred from the service's methods)_

16 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`registerActiveStandbyRequest`](#registeractivestandbyrequest) | private |  | power | inferred | Registers the active standby request. |
| [`registerPowerOffRequest`](#registerpoweroffrequest) | private |  | power | inferred | Registers the power off request. |
| [`registerPrepareActiveStandby`](#registerprepareactivestandby) | private |  | power | inferred | Registers the prepare active standby. |
| [`registerPreparePowerOff`](#registerpreparepoweroff) | private |  | power | inferred | Registers the prepare power off. |
| [`registerPreparePowerOn`](#registerpreparepoweron) | private |  | power | inferred | Registers the prepare power on. |
| [`registerPrepareResume`](#registerprepareresume) | private |  | power | inferred | Registers the prepare resume. |
| [`registerPrepareSuspend`](#registerpreparesuspend) | private |  | power | inferred | Registers the prepare suspend. |
| [`registerSuspendRequest`](#registersuspendrequest) | private |  | power | inferred | Registers the suspend request. |
| [`responsePrepareResume`](#responseprepareresume) | private |  | power | inferred | Handles the response prepare resume. |
| [`responsePrepareSuspend`](#responsepreparesuspend) | private |  | power | inferred | Handles the response prepare suspend. |
| [`responseSuspendRequest`](#responsesuspendrequest) | private |  | power | inferred | Handles the response suspend request. |
| [`sendActiveStandbyRequestAck`](#sendactivestandbyrequestack) | private |  | power | inferred | Sends the active standby request ack. |
| [`sendPowerOffRequestAck`](#sendpoweroffrequestack) | private |  | power | inferred | Sends the power off request ack. |
| [`sendPrepareActiveStandbyAck`](#sendprepareactivestandbyack) | private |  | power | inferred | Sends the prepare active standby ack. |
| [`sendPreparePowerOffAck`](#sendpreparepoweroffack) | private |  | power | inferred | Sends the prepare power off ack. |
| [`sendPreparePowerOnAck`](#sendpreparepoweronack) | private |  | power | inferred | Sends the prepare power on ack. |

<a id="registeractivestandbyrequest"></a>
## `registerActiveStandbyRequest`

`luna://com.webos.service.legacybroadcast.tvpowerd/registerActiveStandbyRequest`

Registers the active standby request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/registerActiveStandbyRequest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerpoweroffrequest"></a>
## `registerPowerOffRequest`

`luna://com.webos.service.legacybroadcast.tvpowerd/registerPowerOffRequest`

Registers the power off request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/registerPowerOffRequest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerprepareactivestandby"></a>
## `registerPrepareActiveStandby`

`luna://com.webos.service.legacybroadcast.tvpowerd/registerPrepareActiveStandby`

Registers the prepare active standby.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/registerPrepareActiveStandby '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerpreparepoweroff"></a>
## `registerPreparePowerOff`

`luna://com.webos.service.legacybroadcast.tvpowerd/registerPreparePowerOff`

Registers the prepare power off.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/registerPreparePowerOff '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerpreparepoweron"></a>
## `registerPreparePowerOn`

`luna://com.webos.service.legacybroadcast.tvpowerd/registerPreparePowerOn`

Registers the prepare power on.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/registerPreparePowerOn '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerprepareresume"></a>
## `registerPrepareResume`

`luna://com.webos.service.legacybroadcast.tvpowerd/registerPrepareResume`

Registers the prepare resume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/registerPrepareResume '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerpreparesuspend"></a>
## `registerPrepareSuspend`

`luna://com.webos.service.legacybroadcast.tvpowerd/registerPrepareSuspend`

Registers the prepare suspend.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/registerPrepareSuspend '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registersuspendrequest"></a>
## `registerSuspendRequest`

`luna://com.webos.service.legacybroadcast.tvpowerd/registerSuspendRequest`

Registers the suspend request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/registerSuspendRequest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="responseprepareresume"></a>
## `responsePrepareResume`

`luna://com.webos.service.legacybroadcast.tvpowerd/responsePrepareResume`

Handles the response prepare resume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/responsePrepareResume '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="responsepreparesuspend"></a>
## `responsePrepareSuspend`

`luna://com.webos.service.legacybroadcast.tvpowerd/responsePrepareSuspend`

Handles the response prepare suspend.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/responsePrepareSuspend '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="responsesuspendrequest"></a>
## `responseSuspendRequest`

`luna://com.webos.service.legacybroadcast.tvpowerd/responseSuspendRequest`

Handles the response suspend request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/responseSuspendRequest '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendactivestandbyrequestack"></a>
## `sendActiveStandbyRequestAck`

`luna://com.webos.service.legacybroadcast.tvpowerd/sendActiveStandbyRequestAck`

Sends the active standby request ack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/sendActiveStandbyRequestAck '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendpoweroffrequestack"></a>
## `sendPowerOffRequestAck`

`luna://com.webos.service.legacybroadcast.tvpowerd/sendPowerOffRequestAck`

Sends the power off request ack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/sendPowerOffRequestAck '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendprepareactivestandbyack"></a>
## `sendPrepareActiveStandbyAck`

`luna://com.webos.service.legacybroadcast.tvpowerd/sendPrepareActiveStandbyAck`

Sends the prepare active standby ack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/sendPrepareActiveStandbyAck '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendpreparepoweroffack"></a>
## `sendPreparePowerOffAck`

`luna://com.webos.service.legacybroadcast.tvpowerd/sendPreparePowerOffAck`

Sends the prepare power off ack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/sendPreparePowerOffAck '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendpreparepoweronack"></a>
## `sendPreparePowerOnAck`

`luna://com.webos.service.legacybroadcast.tvpowerd/sendPreparePowerOnAck`

Sends the prepare power on ack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.tvpowerd/sendPreparePowerOnAck '{}'
```

> ACG groups: legacybroadcast.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
