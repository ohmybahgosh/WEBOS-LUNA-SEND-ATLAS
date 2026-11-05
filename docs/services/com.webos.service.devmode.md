# `com.webos.service.devmode`

Developer-mode service (webOS OSE): enables or disables developer mode on the device, returns its passphrase, and queries whether it is enabled.

3 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getDevMode`](#getdevmode) | public | yes | devmode | documented | Return the current status of developer mode. |
| [`getPassphrase`](#getpassphrase) | public |  | devmode | documented | Returns the current passphrase associated with the SSH key, which is used to connect to the device. This method is only callable by the deve |
| [`setDevMode`](#setdevmode) | public |  | devmode | documented | Enable or disable developer mode. The device will reboot if the mode is changed. |

<a id="getdevmode"></a>
## `getDevMode`

`luna://com.webos.service.devmode/getDevMode`

Return the current status of developer mode.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+; webOS OSE  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | boolean |

**Returns:**

| Field | Type / notes |
|---|---|
| `enabled` | Boolean (required) Returns the state of developer mode. Possible values are: - true: If developer mode is enabled. - false: If developer mode is not enabled. |

```sh
luna-send -n 1 luna://com.webos.service.devmode/getDevMode '{}
```

> ACG: devmode.query \| Returns: returnValue:Boolean; enabled:Boolean \| Service: Developer mode support service. Allows you to enable or disable developer mode on a device and to query the status of developer mode. \|\| Documented in OSE reference; not part of TV dev mode (which uses the com.palmdts.devmode app).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-devmode/), [2](https://github.com/thebestbradley/webos-phoenix/blob/HEAD/apps/shared/luna/src/types.ts)

<a id="getpassphrase"></a>
## `getPassphrase`

`luna://com.webos.service.devmode/getPassphrase`

Returns the current passphrase associated with the SSH key, which is used to connect to the device. This method is only callable by the developer mode app.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `passphrase` | String (required) The passphrase. |

```sh
luna-send -P -a com.palmdts.devmode -n 1 luna://com.webos.service.devmode/getPassphrase '{}
```

> ACG: devmode.management \| Returns: returnValue:Boolean; passphrase:String \| Service: Developer mode support service. Allows you to enable or disable developer mode on a device and to query the status of developer mode.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-devmode/)

<a id="setdevmode"></a>
## `setDevMode`

`luna://com.webos.service.devmode/setDevMode`

Enable or disable developer mode. The device will reboot if the mode is changed.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+; webOS OSE  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `enabled` | Boolean (required) Status of developer mode. Possible values are: true: Enable developer mode. false: Disable developer mode. |
| `status` | enabled\|disabled |

```sh
luna-send -n 1 luna://com.webos.service.devmode/setDevMode '{"enabled":false}
```

> ACG: devmode.management \| Returns: returnValue:Boolean \| Service: Developer mode support service. Allows you to enable or disable developer mode on a device and to query the status of developer mode.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-devmode/), [2](https://github.com/thebestbradley/webos-phoenix/blob/HEAD/apps/shared/luna/src/types.ts)
