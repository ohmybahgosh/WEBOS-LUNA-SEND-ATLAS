# `com.webos.service.wirelessavcontroller`

31 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`antennaSearch`](#antennasearch) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`diagnostic`](#diagnostic) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`fwUpdate`](#fwupdate) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getAlertPopupIsClose`](#getalertpopupisclose) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getAVCtrl`](#getavctrl) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getBeamMonitorReport`](#getbeammonitorreport) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getChannelAntennaInfo`](#getchannelantennainfo) | private |  | tv-broadcast | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getEventLog`](#geteventlog) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getFileState`](#getfilestate) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getInstartList`](#getinstartlist) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getModemCtrl`](#getmodemctrl) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getNVConf`](#getnvconf) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getParamConf`](#getparamconf) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getStatus`](#getstatus) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getVersion`](#getversion) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getWatParameter`](#getwatparameter) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`getZcbMicomVersion`](#getzcbmicomversion) | private |  | power | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`setAlertPopup`](#setalertpopup) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`setAlertPopupGoTosettings`](#setalertpopupgotosettings) | private |  | settings | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`setAVCtrl`](#setavctrl) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`setModemCtrl`](#setmodemctrl) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`setNVConf`](#setnvconf) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`setOSD`](#setosd) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`setParamConf`](#setparamconf) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`setSignalLevel`](#setsignallevel) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`setWirelessConfig`](#setwirelessconfig) | private |  | settings | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`test/getFactoryTestResult`](#test_getfactorytestresult) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`test/lsTest`](#test_lstest) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`test/setDebug`](#test_setdebug) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`test/SPITest`](#test_spitest) | private |  | network | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). |
| [`updateZcbMicomFirmware`](#updatezcbmicomfirmware) | private |  | power | Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented). ⚠️ |

<a id="antennasearch"></a>
## `antennaSearch`

`luna://com.webos.service.wirelessavcontroller/antennaSearch`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/antennaSearch '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="diagnostic"></a>
## `diagnostic`

`luna://com.webos.service.wirelessavcontroller/diagnostic`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/diagnostic '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="fwupdate"></a>
## `fwUpdate`

`luna://com.webos.service.wirelessavcontroller/fwUpdate`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/fwUpdate '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getalertpopupisclose"></a>
## `getAlertPopupIsClose`

`luna://com.webos.service.wirelessavcontroller/getAlertPopupIsClose`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getAlertPopupIsClose '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getavctrl"></a>
## `getAVCtrl`

`luna://com.webos.service.wirelessavcontroller/getAVCtrl`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getAVCtrl '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getbeammonitorreport"></a>
## `getBeamMonitorReport`

`luna://com.webos.service.wirelessavcontroller/getBeamMonitorReport`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getBeamMonitorReport '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getchannelantennainfo"></a>
## `getChannelAntennaInfo`

`luna://com.webos.service.wirelessavcontroller/getChannelAntennaInfo`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getChannelAntennaInfo '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="geteventlog"></a>
## `getEventLog`

`luna://com.webos.service.wirelessavcontroller/getEventLog`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getEventLog '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getfilestate"></a>
## `getFileState`

`luna://com.webos.service.wirelessavcontroller/getFileState`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getFileState '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getinstartlist"></a>
## `getInstartList`

`luna://com.webos.service.wirelessavcontroller/getInstartList`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getInstartList '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getmodemctrl"></a>
## `getModemCtrl`

`luna://com.webos.service.wirelessavcontroller/getModemCtrl`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getModemCtrl '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getnvconf"></a>
## `getNVConf`

`luna://com.webos.service.wirelessavcontroller/getNVConf`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getNVConf '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getparamconf"></a>
## `getParamConf`

`luna://com.webos.service.wirelessavcontroller/getParamConf`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getParamConf '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.wirelessavcontroller/getStatus`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getStatus '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getversion"></a>
## `getVersion`

`luna://com.webos.service.wirelessavcontroller/getVersion`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getVersion '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getwatparameter"></a>
## `getWatParameter`

`luna://com.webos.service.wirelessavcontroller/getWatParameter`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getWatParameter '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getzcbmicomversion"></a>
## `getZcbMicomVersion`

`luna://com.webos.service.wirelessavcontroller/getZcbMicomVersion`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/getZcbMicomVersion '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setalertpopup"></a>
## `setAlertPopup`

`luna://com.webos.service.wirelessavcontroller/setAlertPopup`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setAlertPopup '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setalertpopupgotosettings"></a>
## `setAlertPopupGoTosettings`

`luna://com.webos.service.wirelessavcontroller/setAlertPopupGoTosettings`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setAlertPopupGoTosettings '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setavctrl"></a>
## `setAVCtrl`

`luna://com.webos.service.wirelessavcontroller/setAVCtrl`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setAVCtrl '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setmodemctrl"></a>
## `setModemCtrl`

`luna://com.webos.service.wirelessavcontroller/setModemCtrl`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setModemCtrl '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setnvconf"></a>
## `setNVConf`

`luna://com.webos.service.wirelessavcontroller/setNVConf`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setNVConf '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setosd"></a>
## `setOSD`

`luna://com.webos.service.wirelessavcontroller/setOSD`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setOSD '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setparamconf"></a>
## `setParamConf`

`luna://com.webos.service.wirelessavcontroller/setParamConf`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setParamConf '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsignallevel"></a>
## `setSignalLevel`

`luna://com.webos.service.wirelessavcontroller/setSignalLevel`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setSignalLevel '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setwirelessconfig"></a>
## `setWirelessConfig`

`luna://com.webos.service.wirelessavcontroller/setWirelessConfig`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/setWirelessConfig '{}'
```

> ACG groups: networking, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_getfactorytestresult"></a>
## `test/getFactoryTestResult`

`luna://com.webos.service.wirelessavcontroller/test/getFactoryTestResult`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/test/getFactoryTestResult '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_lstest"></a>
## `test/lsTest`

`luna://com.webos.service.wirelessavcontroller/test/lsTest`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/test/lsTest '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_setdebug"></a>
## `test/setDebug`

`luna://com.webos.service.wirelessavcontroller/test/setDebug`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/test/setDebug '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_spitest"></a>
## `test/SPITest`

`luna://com.webos.service.wirelessavcontroller/test/SPITest`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/test/SPITest '{}'
```

> ACG groups: networking. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updatezcbmicomfirmware"></a>
## `updateZcbMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.wirelessavcontroller/updateZcbMicomFirmware`

Method on com.webos.service.wirelessavcontroller (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wirelessavcontroller/updateZcbMicomFirmware '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
