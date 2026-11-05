# `com.webos.service.bthidmanager`

Bluetooth HID manager: discovers, pairs, connects and removes input devices (remotes, keyboards, gamepads) and reports paired-device and discovery status.

16 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancelDiscovery`](#canceldiscovery) | private |  | bluetooth | inferred | Cancels the discovery. |
| [`createAlert`](#createalert) | private |  | bluetooth | inferred | Creates the alert. |
| [`createToast`](#createtoast) | private |  | notifications | inferred | Creates the toast. |
| [`getCurrentDeviceInfo`](#getcurrentdeviceinfo) | private |  | bluetooth | inferred | Returns the current device info. |
| [`getPairedDeviceLists`](#getpaireddevicelists) | private |  | bluetooth | inferred | Returns the paired device lists. |
| [`getSupportedGamePadList`](#getsupportedgamepadlist) | private |  | bluetooth | inferred | Returns the supported game pad list. |
| [`requestConnect`](#requestconnect) | private |  | bluetooth | inferred | Requests the connect. |
| [`requestDelete`](#requestdelete) | private |  | bluetooth | inferred | Requests the delete. ⚠️ |
| [`requestDisconnect`](#requestdisconnect) | private |  | bluetooth | inferred | Requests the disconnect. |
| [`requestDiscovery`](#requestdiscovery) | private |  | bluetooth | inferred | Requests the discovery. |
| [`startIncommingPair`](#startincommingpair) | private |  | bluetooth | inferred | Starts the incomming pair. |
| [`stopPairing`](#stoppairing) | private |  | bluetooth | inferred | Stops the pairing. |
| [`subscribeDevicesStatus`](#subscribedevicesstatus) | private |  | bluetooth | inferred | Subscribes to the devices status. |
| [`subscribeDiscovery`](#subscribediscovery) | private |  | bluetooth | inferred | Subscribes to the discovery. |
| [`tests/runTVDEVTC_23931`](#tests_runtvdevtc_23931) | private |  | bluetooth | inferred | Runs the TVDEVTC 23931 (tests) |
| [`tests/subscribeTVDEVTC_23931`](#tests_subscribetvdevtc_23931) | private |  | bluetooth | inferred | Subscribes to the TVDEVTC 23931 (tests) |

<a id="canceldiscovery"></a>
## `cancelDiscovery`

`luna://com.webos.service.bthidmanager/cancelDiscovery`

Cancels the discovery.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/cancelDiscovery '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createalert"></a>
## `createAlert`

`luna://com.webos.service.bthidmanager/createAlert`

Creates the alert.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/createAlert '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createtoast"></a>
## `createToast`

`luna://com.webos.service.bthidmanager/createToast`

Creates the toast.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/createToast '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentdeviceinfo"></a>
## `getCurrentDeviceInfo`

`luna://com.webos.service.bthidmanager/getCurrentDeviceInfo`

Returns the current device info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/getCurrentDeviceInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpaireddevicelists"></a>
## `getPairedDeviceLists`

`luna://com.webos.service.bthidmanager/getPairedDeviceLists`

Returns the paired device lists.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/getPairedDeviceLists '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsupportedgamepadlist"></a>
## `getSupportedGamePadList`

`luna://com.webos.service.bthidmanager/getSupportedGamePadList`

Returns the supported game pad list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/getSupportedGamePadList '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requestconnect"></a>
## `requestConnect`

`luna://com.webos.service.bthidmanager/requestConnect`

Requests the connect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/requestConnect '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestdelete"></a>
## `requestDelete` ⚠️ DANGEROUS

`luna://com.webos.service.bthidmanager/requestDelete`

Requests the delete.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/requestDelete '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestdisconnect"></a>
## `requestDisconnect`

`luna://com.webos.service.bthidmanager/requestDisconnect`

Requests the disconnect.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/requestDisconnect '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestdiscovery"></a>
## `requestDiscovery`

`luna://com.webos.service.bthidmanager/requestDiscovery`

Requests the discovery.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/requestDiscovery '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startincommingpair"></a>
## `startIncommingPair`

`luna://com.webos.service.bthidmanager/startIncommingPair`

Starts the incomming pair.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/startIncommingPair '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stoppairing"></a>
## `stopPairing`

`luna://com.webos.service.bthidmanager/stopPairing`

Stops the pairing.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/stopPairing '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribedevicesstatus"></a>
## `subscribeDevicesStatus`

`luna://com.webos.service.bthidmanager/subscribeDevicesStatus`

Subscribes to the devices status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/subscribeDevicesStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribediscovery"></a>
## `subscribeDiscovery`

`luna://com.webos.service.bthidmanager/subscribeDiscovery`

Subscribes to the discovery.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/subscribeDiscovery '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tests_runtvdevtc_23931"></a>
## `tests/runTVDEVTC_23931`

`luna://com.webos.service.bthidmanager/tests/runTVDEVTC_23931`

Runs the TVDEVTC 23931 (tests)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/tests/runTVDEVTC_23931 '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tests_subscribetvdevtc_23931"></a>
## `tests/subscribeTVDEVTC_23931`

`luna://com.webos.service.bthidmanager/tests/subscribeTVDEVTC_23931`

Subscribes to the TVDEVTC 23931 (tests)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bthidmanager/tests/subscribeTVDEVTC_23931 '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
