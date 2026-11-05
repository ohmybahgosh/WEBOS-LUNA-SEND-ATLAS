# `com.webos.service.gibbs.tvpowerd`

TV power daemon (gibbs stack): coordinates power-off, suspend, resume, and active-standby transitions by registering requests and exchanging prepare/response acknowledgements. _(inferred from the service's methods)_

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

`luna://com.webos.service.gibbs.tvpowerd/registerActiveStandbyRequest`

Registers the active standby request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/registerActiveStandbyRequest '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerpoweroffrequest"></a>
## `registerPowerOffRequest`

`luna://com.webos.service.gibbs.tvpowerd/registerPowerOffRequest`

Registers the power off request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/registerPowerOffRequest '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerprepareactivestandby"></a>
## `registerPrepareActiveStandby`

`luna://com.webos.service.gibbs.tvpowerd/registerPrepareActiveStandby`

Registers the prepare active standby.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/registerPrepareActiveStandby '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerpreparepoweroff"></a>
## `registerPreparePowerOff`

`luna://com.webos.service.gibbs.tvpowerd/registerPreparePowerOff`

Registers the prepare power off.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/registerPreparePowerOff '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerpreparepoweron"></a>
## `registerPreparePowerOn`

`luna://com.webos.service.gibbs.tvpowerd/registerPreparePowerOn`

Registers the prepare power on.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/registerPreparePowerOn '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerprepareresume"></a>
## `registerPrepareResume`

`luna://com.webos.service.gibbs.tvpowerd/registerPrepareResume`

Registers the prepare resume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/registerPrepareResume '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerpreparesuspend"></a>
## `registerPrepareSuspend`

`luna://com.webos.service.gibbs.tvpowerd/registerPrepareSuspend`

Registers the prepare suspend.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/registerPrepareSuspend '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registersuspendrequest"></a>
## `registerSuspendRequest`

`luna://com.webos.service.gibbs.tvpowerd/registerSuspendRequest`

Registers the suspend request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/registerSuspendRequest '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="responseprepareresume"></a>
## `responsePrepareResume`

`luna://com.webos.service.gibbs.tvpowerd/responsePrepareResume`

Handles the response prepare resume.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/responsePrepareResume '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="responsepreparesuspend"></a>
## `responsePrepareSuspend`

`luna://com.webos.service.gibbs.tvpowerd/responsePrepareSuspend`

Handles the response prepare suspend.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/responsePrepareSuspend '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="responsesuspendrequest"></a>
## `responseSuspendRequest`

`luna://com.webos.service.gibbs.tvpowerd/responseSuspendRequest`

Handles the response suspend request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/responseSuspendRequest '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendactivestandbyrequestack"></a>
## `sendActiveStandbyRequestAck`

`luna://com.webos.service.gibbs.tvpowerd/sendActiveStandbyRequestAck`

Sends the active standby request ack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/sendActiveStandbyRequestAck '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendpoweroffrequestack"></a>
## `sendPowerOffRequestAck`

`luna://com.webos.service.gibbs.tvpowerd/sendPowerOffRequestAck`

Sends the power off request ack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/sendPowerOffRequestAck '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendprepareactivestandbyack"></a>
## `sendPrepareActiveStandbyAck`

`luna://com.webos.service.gibbs.tvpowerd/sendPrepareActiveStandbyAck`

Sends the prepare active standby ack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/sendPrepareActiveStandbyAck '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendpreparepoweroffack"></a>
## `sendPreparePowerOffAck`

`luna://com.webos.service.gibbs.tvpowerd/sendPreparePowerOffAck`

Sends the prepare power off ack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/sendPreparePowerOffAck '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendpreparepoweronack"></a>
## `sendPreparePowerOnAck`

`luna://com.webos.service.gibbs.tvpowerd/sendPreparePowerOnAck`

Sends the prepare power on ack.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.tvpowerd/sendPreparePowerOnAck '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
