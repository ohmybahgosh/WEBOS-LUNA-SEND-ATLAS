# `com.webos.service.utp.acas`

ACAS conditional-access service (utp broadcast stack): reports CAS module, contract, ECM, and power-on control info and manages auto-display messages. _(inferred from the service's methods)_

11 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getAutoDisplayMessageInfo`](#getautodisplaymessageinfo) | private |  | security | inferred | Returns the auto display message info. |
| [`getAutoDisplayMessageStatus`](#getautodisplaymessagestatus) | private |  | security | inferred | Returns the auto display message status. |
| [`getCasInfo`](#getcasinfo) | private |  | security | inferred | Returns the cas info. |
| [`getCasModuleInfo`](#getcasmoduleinfo) | private |  | security | inferred | Returns the cas module info. |
| [`getConfirmContractInfo`](#getconfirmcontractinfo) | private |  | security | inferred | Returns the confirm contract info. |
| [`getCurrentContractInfo`](#getcurrentcontractinfo) | private |  | security | inferred | Returns the current contract info. |
| [`getCurrentEcmInfo`](#getcurrentecminfo) | private |  | security | inferred | Returns the current ecm info. |
| [`getPowerOnControlInfo`](#getpoweroncontrolinfo) | private |  | power | inferred | Returns the power on control info. |
| [`setAutoDisplayMessageInfo`](#setautodisplaymessageinfo) | private |  | security | inferred | Sets the auto display message info. |
| [`setCasInfo`](#setcasinfo) | private |  | security | inferred | Sets the cas info. |
| [`setConfirmContractInfo`](#setconfirmcontractinfo) | private |  | security | inferred | Sets the confirm contract info. |

<a id="getautodisplaymessageinfo"></a>
## `getAutoDisplayMessageInfo`

`luna://com.webos.service.utp.acas/getAutoDisplayMessageInfo`

Returns the auto display message info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.acas/getAutoDisplayMessageInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getautodisplaymessagestatus"></a>
## `getAutoDisplayMessageStatus`

`luna://com.webos.service.utp.acas/getAutoDisplayMessageStatus`

Returns the auto display message status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.acas/getAutoDisplayMessageStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcasinfo"></a>
## `getCasInfo`

`luna://com.webos.service.utp.acas/getCasInfo`

Returns the cas info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.acas/getCasInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcasmoduleinfo"></a>
## `getCasModuleInfo`

`luna://com.webos.service.utp.acas/getCasModuleInfo`

Returns the cas module info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.acas/getCasModuleInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconfirmcontractinfo"></a>
## `getConfirmContractInfo`

`luna://com.webos.service.utp.acas/getConfirmContractInfo`

Returns the confirm contract info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.acas/getConfirmContractInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentcontractinfo"></a>
## `getCurrentContractInfo`

`luna://com.webos.service.utp.acas/getCurrentContractInfo`

Returns the current contract info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.acas/getCurrentContractInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentecminfo"></a>
## `getCurrentEcmInfo`

`luna://com.webos.service.utp.acas/getCurrentEcmInfo`

Returns the current ecm info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.acas/getCurrentEcmInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpoweroncontrolinfo"></a>
## `getPowerOnControlInfo`

`luna://com.webos.service.utp.acas/getPowerOnControlInfo`

Returns the power on control info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.acas/getPowerOnControlInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setautodisplaymessageinfo"></a>
## `setAutoDisplayMessageInfo`

`luna://com.webos.service.utp.acas/setAutoDisplayMessageInfo`

Sets the auto display message info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.acas/setAutoDisplayMessageInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcasinfo"></a>
## `setCasInfo`

`luna://com.webos.service.utp.acas/setCasInfo`

Sets the cas info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.acas/setCasInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setconfirmcontractinfo"></a>
## `setConfirmContractInfo`

`luna://com.webos.service.utp.acas/setConfirmContractInfo`

Sets the confirm contract info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.acas/setConfirmContractInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
