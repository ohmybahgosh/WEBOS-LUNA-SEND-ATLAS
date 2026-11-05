# `com.webos.service.iotclient`

IoT client: discovers, lists and controls connected IoT devices, manages linked accounts, macros and registration tokens, and handles IoT push notifications. _(inferred from the service's methods)_

27 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkSupport`](#checksupport) | private |  | network | inferred | Checks the support. |
| [`deleteAccountInfo`](#deleteaccountinfo) | private |  | network | inferred | Deletes the account info. ⚠️ |
| [`delMacro`](#delmacro) | private |  | network | inferred | Handles the del macro. |
| [`discover`](#discover) | private |  | network | inferred | Handles the discover. |
| [`getAccountInfoList`](#getaccountinfolist) | private |  | network | inferred | Returns the account info list. |
| [`getConfig`](#getconfig) | private |  | settings | inferred | Returns the config. |
| [`getConnectedDevices`](#getconnecteddevices) | private |  | network | inferred | Returns the connected devices. |
| [`getDeviceUuid`](#getdeviceuuid) | private |  | network | inferred | Returns the device uuid. |
| [`getIoTConfig`](#getiotconfig) | private |  | settings | inferred | Returns the io t config. |
| [`getMacro`](#getmacro) | private |  | network | inferred | Returns the macro. |
| [`getTestMode`](#gettestmode) | private |  | network | inferred | Returns the test mode. |
| [`listDetailedDevicesInfo`](#listdetaileddevicesinfo) | private |  | network | inferred | Lists the detailed devices info. |
| [`listDevicesInfo`](#listdevicesinfo) | private |  | network | inferred | Lists the devices info. |
| [`notifyIotPush`](#notifyiotpush) | private |  | network | inferred | Notifies of the iot push. |
| [`push`](#push) | private |  | network | inferred | Pushes the iotclient. |
| [`registerToken`](#registertoken) | private |  | network | inferred | Registers the token. |
| [`requestRegistration`](#requestregistration) | private |  | network | inferred | Requests the registration. |
| [`sendResponse`](#sendresponse) | private |  | network | inferred | Sends the response. |
| [`setDROff`](#setdroff) | private |  | network | inferred | Sets the DR off. |
| [`setDROn`](#setdron) | private |  | network | inferred | Sets the DR on. |
| [`setDRReservation`](#setdrreservation) | private |  | tv-broadcast | inferred | Sets the DR reservation. |
| [`setIoTConfig`](#setiotconfig) | private |  | settings | inferred | Sets the io t config. |
| [`setMacro`](#setmacro) | private |  | network | inferred | Sets the macro. |
| [`setTestMode`](#settestmode) | private |  | network | inferred | Sets the test mode. |
| [`setToastPopUp`](#settoastpopup) | private |  | notifications | inferred | Sets the toast pop up. |
| [`updateAccountInfo`](#updateaccountinfo) | private |  | network | inferred | Updates the account info. |
| [`updateDeviceName`](#updatedevicename) | private |  | network | inferred | Updates the device name. |

<a id="checksupport"></a>
## `checkSupport`

`luna://com.webos.service.iotclient/checkSupport`

Checks the support.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/checkSupport '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deleteaccountinfo"></a>
## `deleteAccountInfo` ⚠️ DANGEROUS

`luna://com.webos.service.iotclient/deleteAccountInfo`

Deletes the account info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/deleteAccountInfo '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="delmacro"></a>
## `delMacro`

`luna://com.webos.service.iotclient/delMacro`

Handles the del macro.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/delMacro '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="discover"></a>
## `discover`

`luna://com.webos.service.iotclient/discover`

Handles the discover.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/discover '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaccountinfolist"></a>
## `getAccountInfoList`

`luna://com.webos.service.iotclient/getAccountInfoList`

Returns the account info list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getAccountInfoList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconfig"></a>
## `getConfig`

`luna://com.webos.service.iotclient/getConfig`

Returns the config.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getConfig '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconnecteddevices"></a>
## `getConnectedDevices`

`luna://com.webos.service.iotclient/getConnectedDevices`

Returns the connected devices.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getConnectedDevices '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdeviceuuid"></a>
## `getDeviceUuid`

`luna://com.webos.service.iotclient/getDeviceUuid`

Returns the device uuid.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `deviceUuid` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getDeviceUuid '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getiotconfig"></a>
## `getIoTConfig`

`luna://com.webos.service.iotclient/getIoTConfig`

Returns the io t config.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getIoTConfig '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmacro"></a>
## `getMacro`

`luna://com.webos.service.iotclient/getMacro`

Returns the macro.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getMacro '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettestmode"></a>
## `getTestMode`

`luna://com.webos.service.iotclient/getTestMode`

Returns the test mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `apiKey` |  |
| `serviceId` |  |
| `serviceKey` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getTestMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listdetaileddevicesinfo"></a>
## `listDetailedDevicesInfo`

`luna://com.webos.service.iotclient/listDetailedDevicesInfo`

Lists the detailed devices info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `active` |  |
| `addedMatter` |  |
| `addedThinq` |  |
| `alias` |  |
| `deletedMatter` |  |
| `deletedThinq` |  |
| `deviceId` |  |
| `deviceInfo` |  |
| `deviceList` |  |
| `deviceType` |  |
| `homeHub` |  |
| `homeId` |  |
| `homeName` |  |
| `homes` |  |
| `homeyHubSupported` |  |
| `iotdevices` |  |
| `localMatterControllerSupported` |  |
| `matterVersion` |  |
| `modelName` |  |
| `platform` |  |
| `plugin` |  |
| `reportable` |  |
| `roomId` |  |
| `roomName` |  |
| `rooms` |  |
| `threadSupport` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/listDetailedDevicesInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listdevicesinfo"></a>
## `listDevicesInfo`

`luna://com.webos.service.iotclient/listDevicesInfo`

Lists the devices info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `active` |  |
| `alias` |  |
| `deviceId` |  |
| `deviceInfo` |  |
| `deviceList` |  |
| `deviceType` |  |
| `homeHub` |  |
| `homeId` |  |
| `homeName` |  |
| `homes` |  |
| `homeyHubSupported` |  |
| `iotdevices` |  |
| `localMatterControllerSupported` |  |
| `matterVersion` |  |
| `modelName` |  |
| `platform` |  |
| `plugin` |  |
| `reportable` |  |
| `roomId` |  |
| `roomName` |  |
| `rooms` |  |
| `threadSupport` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/listDevicesInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyiotpush"></a>
## `notifyIotPush`

`luna://com.webos.service.iotclient/notifyIotPush`

Notifies of the iot push.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/notifyIotPush '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="push"></a>
## `push`

`luna://com.webos.service.iotclient/push`

Pushes the iotclient.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/push '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registertoken"></a>
## `registerToken`

`luna://com.webos.service.iotclient/registerToken`

Registers the token.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/registerToken '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestregistration"></a>
## `requestRegistration`

`luna://com.webos.service.iotclient/requestRegistration`

Requests the registration.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/requestRegistration '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendresponse"></a>
## `sendResponse`

`luna://com.webos.service.iotclient/sendResponse`

Sends the response.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/sendResponse '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdroff"></a>
## `setDROff`

`luna://com.webos.service.iotclient/setDROff`

Sets the DR off.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setDROff '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdron"></a>
## `setDROn`

`luna://com.webos.service.iotclient/setDROn`

Sets the DR on.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setDROn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdrreservation"></a>
## `setDRReservation`

`luna://com.webos.service.iotclient/setDRReservation`

Sets the DR reservation.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setDRReservation '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setiotconfig"></a>
## `setIoTConfig`

`luna://com.webos.service.iotclient/setIoTConfig`

Sets the io t config.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setIoTConfig '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmacro"></a>
## `setMacro`

`luna://com.webos.service.iotclient/setMacro`

Sets the macro.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setMacro '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settestmode"></a>
## `setTestMode`

`luna://com.webos.service.iotclient/setTestMode`

Sets the test mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setTestMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settoastpopup"></a>
## `setToastPopUp`

`luna://com.webos.service.iotclient/setToastPopUp`

Sets the toast pop up.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setToastPopUp '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateaccountinfo"></a>
## `updateAccountInfo`

`luna://com.webos.service.iotclient/updateAccountInfo`

Updates the account info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/updateAccountInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatedevicename"></a>
## `updateDeviceName`

`luna://com.webos.service.iotclient/updateDeviceName`

Updates the device name.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/updateDeviceName '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
