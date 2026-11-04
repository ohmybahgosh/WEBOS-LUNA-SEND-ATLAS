# `com.webos.service.bugreport`

4 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`account`](#account) | unknown |  | system-info | Account info to log in to Jira. |
| [`createBug`](#createbug) | public |  | system-info | Creates a bug ticket on Jira with the given data. Note: This method is intended to be called by the bugreport app. If you want to use this i |
| [`getConfig`](#getconfig) | public |  | system-info | Gets Jira configuration and files to be attached to the Jira ticket. Note: This method is intended to be called by the bugreport app. If you |
| [`setConfig`](#setconfig) | public |  | system-info | Sets the Jira configurations. Currently, the only configurations supported are: username password Note: These values are persisted across re |

<a id="account"></a>
## `account`

`luna://com.webos.service.bugreport/account`

Account info to log in to Jira.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bugreport/account '{}'
```

> Service: Provides methods for reporting bug in Jira system. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bugreport/)

<a id="createbug"></a>
## `createBug`

`luna://com.webos.service.bugreport/createBug`

Creates a bug ticket on Jira with the given data. Note: This method is intended to be called by the bugreport app. If you want to use this in other modules, contact the API owner.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 15+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `summary` | String (required) Summary of Jira ticket. |
| `description` | String (optional) Description of the Jira ticket. |
| `priority` | String (optional) Priority of Jira ticket. It depends on the Jira system. For example, the following values are used in the WRN project of clm.lge.com. P1 P2 P3 P4 P5 |
| `reproducibility` | String (optional) Reproducibility of Jira ticket. It depends on the Jira system. For example, the following values are used in the WRN project of clm.lge.com. Always (100%) Often (50-99%) Seldom (10-49%) Rarely (<10%) I didn't try |
| `screenshots` | String array (optional) Screenshot files to attach to the Jira ticket. These files are deleted upon successful ticket creation. |

```sh
luna-send -n 1 -f luna://com.webos.service.bugreport/createBug '{"summary": "test", "priority": "P5", "reproducibility": "Always (100%)"}
```

> ACG: diagnostics.telemetry \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; key:String \| Service: Provides methods for reporting bug in Jira system.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bugreport/)

<a id="getconfig"></a>
## `getConfig`

`luna://com.webos.service.bugreport/getConfig`

Gets Jira configuration and files to be attached to the Jira ticket. Note: This method is intended to be called by the bugreport app. If you want to use this in other modules, contact the API owner.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 15+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bugreport/getConfig '{}
```

> ACG: diagnostics.telemetry \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; account:Object: account; screenshots:String \| Service: Provides methods for reporting bug in Jira system.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bugreport/)

<a id="setconfig"></a>
## `setConfig`

`luna://com.webos.service.bugreport/setConfig`

Sets the Jira configurations. Currently, the only configurations supported are: username password Note: These values are persisted across reboots until another value is set. This method is intended to be called by the bugreport app. If you want to use this in other modules, contact the API owner.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 15+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `account` | Object: account (optional) Account info to login to Jira |

```sh
luna-send -n 1 -f luna://com.webos.service.bugreport/setConfig '{"account": {"username": "webosreporter", "password": "bGdlITIzNDVe"}}
```

> ACG: diagnostics.telemetry \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Provides methods for reporting bug in Jira system.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bugreport/)
