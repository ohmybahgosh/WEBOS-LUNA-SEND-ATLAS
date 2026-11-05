# `com.webos.service.wirelessavcontroller`

Wireless A/V controller (wireless transmitter box/antenna): antenna/beam search and monitoring, modem control, event logs, diagnostics and firmware update. _(inferred from the service's methods)_

31 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`antennaSearch`](#antennasearch) | private |  | network | inferred | Handles the antenna search. |
| [`diagnostic`](#diagnostic) | private |  | network | inferred | Handles the diagnostic. |
| [`fwUpdate`](#fwupdate) | private |  | network | inferred | Handles the firmware update. |
| [`getAlertPopupIsClose`](#getalertpopupisclose) | private |  | network | inferred | Returns the alert popup is close. |
| [`getAVCtrl`](#getavctrl) | private |  | network | inferred | Returns the A/V ctrl. |
| [`getBeamMonitorReport`](#getbeammonitorreport) | private |  | network | inferred | Returns the beam monitor report. |
| [`getChannelAntennaInfo`](#getchannelantennainfo) | private |  | tv-broadcast | inferred | Returns the channel antenna info. |
| [`getEventLog`](#geteventlog) | private |  | network | inferred | Returns the event log. |
| [`getFileState`](#getfilestate) | private |  | network | inferred | Returns the file state. |
| [`getInstartList`](#getinstartlist) | private |  | network | inferred | Returns the instart list. |
| [`getModemCtrl`](#getmodemctrl) | private |  | network | inferred | Returns the modem ctrl. |
| [`getNVConf`](#getnvconf) | private |  | network | inferred | Returns the NV conf. |
| [`getParamConf`](#getparamconf) | private |  | network | inferred | Returns the param conf. |
| [`getStatus`](#getstatus) | private |  | network | inferred | Returns the status. |
| [`getVersion`](#getversion) | private |  | network | inferred | Returns the version. |
| [`getWatParameter`](#getwatparameter) | private |  | network | inferred | Returns the wat parameter. |
| [`getZcbMicomVersion`](#getzcbmicomversion) | private |  | power | inferred | Returns the zcb MICOM version. |
| [`setAlertPopup`](#setalertpopup) | private |  | network | inferred | Sets the alert popup. |
| [`setAlertPopupGoTosettings`](#setalertpopupgotosettings) | private |  | settings | inferred | Sets the alert popup go tosettings. |
| [`setAVCtrl`](#setavctrl) | private |  | network | inferred | Sets the A/V ctrl. |
| [`setModemCtrl`](#setmodemctrl) | private |  | network | inferred | Sets the modem ctrl. |
| [`setNVConf`](#setnvconf) | private |  | network | inferred | Sets the NV conf. |
| [`setOSD`](#setosd) | private |  | network | inferred | Sets the OSD. |
| [`setParamConf`](#setparamconf) | private |  | network | inferred | Sets the param conf. |
| [`setSignalLevel`](#setsignallevel) | private |  | network | inferred | Sets the signal level. |
| [`setWirelessConfig`](#setwirelessconfig) | private |  | settings | inferred | Sets the wireless config. |
| [`test/getFactoryTestResult`](#test_getfactorytestresult) | private |  | network | inferred | Returns the factory test result (test) |
| [`test/lsTest`](#test_lstest) | private |  | network | inferred | Handles the ls test (test) |
| [`test/setDebug`](#test_setdebug) | private |  | network | inferred | Sets the debug (test) |
| [`test/SPITest`](#test_spitest) | private |  | network | inferred | Handles the SPI test (test) |
| [`updateZcbMicomFirmware`](#updatezcbmicomfirmware) | private |  | power | inferred | Updates the zcb MICOM firmware. ⚠️ |

<a id="antennasearch"></a>
## `antennaSearch`

`luna://com.webos.service.wirelessavcontroller/antennaSearch`

Handles the antenna search.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/antennaSearch '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="diagnostic"></a>
## `diagnostic`

`luna://com.webos.service.wirelessavcontroller/diagnostic`

Handles the diagnostic.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/diagnostic '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fwupdate"></a>
## `fwUpdate`

`luna://com.webos.service.wirelessavcontroller/fwUpdate`

Handles the firmware update.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/fwUpdate '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getalertpopupisclose"></a>
## `getAlertPopupIsClose`

`luna://com.webos.service.wirelessavcontroller/getAlertPopupIsClose`

Returns the alert popup is close.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getAlertPopupIsClose '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getavctrl"></a>
## `getAVCtrl`

`luna://com.webos.service.wirelessavcontroller/getAVCtrl`

Returns the A/V ctrl.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getAVCtrl '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbeammonitorreport"></a>
## `getBeamMonitorReport`

`luna://com.webos.service.wirelessavcontroller/getBeamMonitorReport`

Returns the beam monitor report.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getBeamMonitorReport '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelantennainfo"></a>
## `getChannelAntennaInfo`

`luna://com.webos.service.wirelessavcontroller/getChannelAntennaInfo`

Returns the channel antenna info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getChannelAntennaInfo '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="geteventlog"></a>
## `getEventLog`

`luna://com.webos.service.wirelessavcontroller/getEventLog`

Returns the event log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getEventLog '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getfilestate"></a>
## `getFileState`

`luna://com.webos.service.wirelessavcontroller/getFileState`

Returns the file state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getFileState '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getinstartlist"></a>
## `getInstartList`

`luna://com.webos.service.wirelessavcontroller/getInstartList`

Returns the instart list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getInstartList '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmodemctrl"></a>
## `getModemCtrl`

`luna://com.webos.service.wirelessavcontroller/getModemCtrl`

Returns the modem ctrl.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getModemCtrl '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getnvconf"></a>
## `getNVConf`

`luna://com.webos.service.wirelessavcontroller/getNVConf`

Returns the NV conf.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getNVConf '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getparamconf"></a>
## `getParamConf`

`luna://com.webos.service.wirelessavcontroller/getParamConf`

Returns the param conf.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getParamConf '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.wirelessavcontroller/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getStatus '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getversion"></a>
## `getVersion`

`luna://com.webos.service.wirelessavcontroller/getVersion`

Returns the version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getVersion '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getwatparameter"></a>
## `getWatParameter`

`luna://com.webos.service.wirelessavcontroller/getWatParameter`

Returns the wat parameter.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getWatParameter '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getzcbmicomversion"></a>
## `getZcbMicomVersion`

`luna://com.webos.service.wirelessavcontroller/getZcbMicomVersion`

Returns the zcb MICOM version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getZcbMicomVersion '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setalertpopup"></a>
## `setAlertPopup`

`luna://com.webos.service.wirelessavcontroller/setAlertPopup`

Sets the alert popup.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setAlertPopup '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setalertpopupgotosettings"></a>
## `setAlertPopupGoTosettings`

`luna://com.webos.service.wirelessavcontroller/setAlertPopupGoTosettings`

Sets the alert popup go tosettings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setAlertPopupGoTosettings '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setavctrl"></a>
## `setAVCtrl`

`luna://com.webos.service.wirelessavcontroller/setAVCtrl`

Sets the A/V ctrl.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setAVCtrl '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmodemctrl"></a>
## `setModemCtrl`

`luna://com.webos.service.wirelessavcontroller/setModemCtrl`

Sets the modem ctrl.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setModemCtrl '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setnvconf"></a>
## `setNVConf`

`luna://com.webos.service.wirelessavcontroller/setNVConf`

Sets the NV conf.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setNVConf '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setosd"></a>
## `setOSD`

`luna://com.webos.service.wirelessavcontroller/setOSD`

Sets the OSD.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setOSD '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setparamconf"></a>
## `setParamConf`

`luna://com.webos.service.wirelessavcontroller/setParamConf`

Sets the param conf.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setParamConf '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsignallevel"></a>
## `setSignalLevel`

`luna://com.webos.service.wirelessavcontroller/setSignalLevel`

Sets the signal level.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setSignalLevel '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setwirelessconfig"></a>
## `setWirelessConfig`

`luna://com.webos.service.wirelessavcontroller/setWirelessConfig`

Sets the wireless config.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setWirelessConfig '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_getfactorytestresult"></a>
## `test/getFactoryTestResult`

`luna://com.webos.service.wirelessavcontroller/test/getFactoryTestResult`

Returns the factory test result (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/test/getFactoryTestResult '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_lstest"></a>
## `test/lsTest`

`luna://com.webos.service.wirelessavcontroller/test/lsTest`

Handles the ls test (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/test/lsTest '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_setdebug"></a>
## `test/setDebug`

`luna://com.webos.service.wirelessavcontroller/test/setDebug`

Sets the debug (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/test/setDebug '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_spitest"></a>
## `test/SPITest`

`luna://com.webos.service.wirelessavcontroller/test/SPITest`

Handles the SPI test (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/test/SPITest '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatezcbmicomfirmware"></a>
## `updateZcbMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.wirelessavcontroller/updateZcbMicomFirmware`

Updates the zcb MICOM firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/updateZcbMicomFirmware '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
