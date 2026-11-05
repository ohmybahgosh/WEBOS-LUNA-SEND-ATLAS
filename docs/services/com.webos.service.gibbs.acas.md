# `com.webos.service.gibbs.acas`

ACAS conditional-access service (gibbs broadcast stack): reports CAS module, contract, ECM, and power-on control information and manages auto-display messages. _(inferred from the service's methods)_

11 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getAutoDisplayMessageInfo`](#getautodisplaymessageinfo) | private |  | tv-broadcast | inferred | Returns the auto display message info. |
| [`getAutoDisplayMessageStatus`](#getautodisplaymessagestatus) | private |  | tv-broadcast | inferred | Returns the auto display message status. |
| [`getCasInfo`](#getcasinfo) | private |  | tv-broadcast | inferred | Returns the cas info. |
| [`getCasModuleInfo`](#getcasmoduleinfo) | private |  | tv-broadcast | inferred | Returns the cas module info. |
| [`getConfirmContractInfo`](#getconfirmcontractinfo) | private |  | tv-broadcast | inferred | Returns the confirm contract info. |
| [`getCurrentContractInfo`](#getcurrentcontractinfo) | private |  | tv-broadcast | inferred | Returns the current contract info. |
| [`getCurrentEcmInfo`](#getcurrentecminfo) | private |  | tv-broadcast | inferred | Returns the current ecm info. |
| [`getPowerOnControlInfo`](#getpoweroncontrolinfo) | private |  | power | inferred | Returns the power on control info. |
| [`setAutoDisplayMessageInfo`](#setautodisplaymessageinfo) | private |  | tv-broadcast | inferred | Sets the auto display message info. |
| [`setCasInfo`](#setcasinfo) | private |  | tv-broadcast | inferred | Sets the cas info. |
| [`setConfirmContractInfo`](#setconfirmcontractinfo) | private |  | tv-broadcast | inferred | Sets the confirm contract info. |

<a id="getautodisplaymessageinfo"></a>
## `getAutoDisplayMessageInfo`

`luna://com.webos.service.gibbs.acas/getAutoDisplayMessageInfo`

Returns the auto display message info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.acas/getAutoDisplayMessageInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getautodisplaymessagestatus"></a>
## `getAutoDisplayMessageStatus`

`luna://com.webos.service.gibbs.acas/getAutoDisplayMessageStatus`

Returns the auto display message status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.acas/getAutoDisplayMessageStatus '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcasinfo"></a>
## `getCasInfo`

`luna://com.webos.service.gibbs.acas/getCasInfo`

Returns the cas info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.acas/getCasInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcasmoduleinfo"></a>
## `getCasModuleInfo`

`luna://com.webos.service.gibbs.acas/getCasModuleInfo`

Returns the cas module info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.acas/getCasModuleInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getconfirmcontractinfo"></a>
## `getConfirmContractInfo`

`luna://com.webos.service.gibbs.acas/getConfirmContractInfo`

Returns the confirm contract info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.acas/getConfirmContractInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentcontractinfo"></a>
## `getCurrentContractInfo`

`luna://com.webos.service.gibbs.acas/getCurrentContractInfo`

Returns the current contract info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.acas/getCurrentContractInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentecminfo"></a>
## `getCurrentEcmInfo`

`luna://com.webos.service.gibbs.acas/getCurrentEcmInfo`

Returns the current ecm info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.acas/getCurrentEcmInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpoweroncontrolinfo"></a>
## `getPowerOnControlInfo`

`luna://com.webos.service.gibbs.acas/getPowerOnControlInfo`

Returns the power on control info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.acas/getPowerOnControlInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setautodisplaymessageinfo"></a>
## `setAutoDisplayMessageInfo`

`luna://com.webos.service.gibbs.acas/setAutoDisplayMessageInfo`

Sets the auto display message info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.acas/setAutoDisplayMessageInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setcasinfo"></a>
## `setCasInfo`

`luna://com.webos.service.gibbs.acas/setCasInfo`

Sets the cas info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.acas/setCasInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setconfirmcontractinfo"></a>
## `setConfirmContractInfo`

`luna://com.webos.service.gibbs.acas/setConfirmContractInfo`

Sets the confirm contract info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.gibbs.acas/setConfirmContractInfo '{}'
```

> ACG groups: gibbs.service. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
