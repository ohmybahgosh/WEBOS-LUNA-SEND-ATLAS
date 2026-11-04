# `com.webos.service.iotclient`

27 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`checkSupport`](#checksupport) | private |  | network | Method on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`deleteAccountInfo`](#deleteaccountinfo) | private |  | network | Method on com.webos.service.iotclient (introspected on-device; parameters undocumented). ⚠️ |
| [`delMacro`](#delmacro) | private |  | network | Method on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`discover`](#discover) | private |  | network | Method on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`getAccountInfoList`](#getaccountinfolist) | private |  | network | Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`getConfig`](#getconfig) | private |  | settings | Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`getConnectedDevices`](#getconnecteddevices) | private |  | network | Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`getDeviceUuid`](#getdeviceuuid) | private |  | network | Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`getIoTConfig`](#getiotconfig) | private |  | settings | Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`getMacro`](#getmacro) | private |  | network | Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`getTestMode`](#gettestmode) | private |  | network | Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`listDetailedDevicesInfo`](#listdetaileddevicesinfo) | private |  | network | Lister on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`listDevicesInfo`](#listdevicesinfo) | private |  | network | Lister on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`notifyIotPush`](#notifyiotpush) | private |  | network | Method on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`push`](#push) | private |  | network | Method on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`registerToken`](#registertoken) | private |  | network | Method on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`requestRegistration`](#requestregistration) | private |  | network | Method on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`sendResponse`](#sendresponse) | private |  | network | Method on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`setDROff`](#setdroff) | private |  | network | Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`setDROn`](#setdron) | private |  | network | Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`setDRReservation`](#setdrreservation) | private |  | tv-broadcast | Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`setIoTConfig`](#setiotconfig) | private |  | settings | Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`setMacro`](#setmacro) | private |  | network | Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`setTestMode`](#settestmode) | private |  | network | Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`setToastPopUp`](#settoastpopup) | private |  | notifications | Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`updateAccountInfo`](#updateaccountinfo) | private |  | network | Method on com.webos.service.iotclient (introspected on-device; parameters undocumented). |
| [`updateDeviceName`](#updatedevicename) | private |  | network | Method on com.webos.service.iotclient (introspected on-device; parameters undocumented). |

<a id="checksupport"></a>
## `checkSupport`

`luna://com.webos.service.iotclient/checkSupport`

Method on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/checkSupport '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deleteaccountinfo"></a>
## `deleteAccountInfo` ⚠️ DANGEROUS

`luna://com.webos.service.iotclient/deleteAccountInfo`

Method on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/deleteAccountInfo '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="delmacro"></a>
## `delMacro`

`luna://com.webos.service.iotclient/delMacro`

Method on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/delMacro '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="discover"></a>
## `discover`

`luna://com.webos.service.iotclient/discover`

Method on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/discover '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaccountinfolist"></a>
## `getAccountInfoList`

`luna://com.webos.service.iotclient/getAccountInfoList`

Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getAccountInfoList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconfig"></a>
## `getConfig`

`luna://com.webos.service.iotclient/getConfig`

Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getConfig '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getconnecteddevices"></a>
## `getConnectedDevices`

`luna://com.webos.service.iotclient/getConnectedDevices`

Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getConnectedDevices '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdeviceuuid"></a>
## `getDeviceUuid`

`luna://com.webos.service.iotclient/getDeviceUuid`

Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getDeviceUuid '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getiotconfig"></a>
## `getIoTConfig`

`luna://com.webos.service.iotclient/getIoTConfig`

Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getIoTConfig '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmacro"></a>
## `getMacro`

`luna://com.webos.service.iotclient/getMacro`

Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getMacro '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettestmode"></a>
## `getTestMode`

`luna://com.webos.service.iotclient/getTestMode`

Getter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/getTestMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listdetaileddevicesinfo"></a>
## `listDetailedDevicesInfo`

`luna://com.webos.service.iotclient/listDetailedDevicesInfo`

Lister on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/listDetailedDevicesInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="listdevicesinfo"></a>
## `listDevicesInfo`

`luna://com.webos.service.iotclient/listDevicesInfo`

Lister on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/listDevicesInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyiotpush"></a>
## `notifyIotPush`

`luna://com.webos.service.iotclient/notifyIotPush`

Method on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/notifyIotPush '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="push"></a>
## `push`

`luna://com.webos.service.iotclient/push`

Method on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/push '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registertoken"></a>
## `registerToken`

`luna://com.webos.service.iotclient/registerToken`

Method on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/registerToken '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestregistration"></a>
## `requestRegistration`

`luna://com.webos.service.iotclient/requestRegistration`

Method on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/requestRegistration '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sendresponse"></a>
## `sendResponse`

`luna://com.webos.service.iotclient/sendResponse`

Method on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/sendResponse '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdroff"></a>
## `setDROff`

`luna://com.webos.service.iotclient/setDROff`

Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setDROff '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdron"></a>
## `setDROn`

`luna://com.webos.service.iotclient/setDROn`

Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setDROn '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdrreservation"></a>
## `setDRReservation`

`luna://com.webos.service.iotclient/setDRReservation`

Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setDRReservation '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setiotconfig"></a>
## `setIoTConfig`

`luna://com.webos.service.iotclient/setIoTConfig`

Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setIoTConfig '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmacro"></a>
## `setMacro`

`luna://com.webos.service.iotclient/setMacro`

Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setMacro '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settestmode"></a>
## `setTestMode`

`luna://com.webos.service.iotclient/setTestMode`

Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setTestMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settoastpopup"></a>
## `setToastPopUp`

`luna://com.webos.service.iotclient/setToastPopUp`

Setter on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/setToastPopUp '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateaccountinfo"></a>
## `updateAccountInfo`

`luna://com.webos.service.iotclient/updateAccountInfo`

Method on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/updateAccountInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updatedevicename"></a>
## `updateDeviceName`

`luna://com.webos.service.iotclient/updateDeviceName`

Method on com.webos.service.iotclient (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.iotclient/updateDeviceName '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
