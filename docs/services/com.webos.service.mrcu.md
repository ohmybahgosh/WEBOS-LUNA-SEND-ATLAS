# `com.webos.service.mrcu`

122 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`activateMotionSensor`](#activatemotionsensor) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`activateMrcu`](#activatemrcu) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`createAlert`](#createalert) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`createToast`](#createtoast) | private |  | input | Shows a toast via the Magic Remote control service |
| [`cursor/setAutoAlign`](#cursor_setautoalign) | public |  | input | Method registered by com.webos.service.mrcu (category '/cursor') |
| [`cursor/setPosition`](#cursor_setposition) | public |  | input | Method registered by com.webos.service.mrcu (category '/cursor') |
| [`cursor/setSensitivity`](#cursor_setsensitivity) | private |  | input | Method registered by com.webos.service.mrcu (category '/cursor') |
| [`cursor/setSlideMode`](#cursor_setslidemode) | public |  | input | Method registered by com.webos.service.mrcu (category '/cursor') |
| [`cursor/setWakeUpCondition`](#cursor_setwakeupcondition) | public |  | input | Method registered by com.webos.service.mrcu (category '/cursor') |
| [`decreasePairingHistoryCount`](#decreasepairinghistorycount) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`enableAudioSinkMode`](#enableaudiosinkmode) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`enableDualPairing`](#enabledualpairing) | public |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`enableLoggingMotion`](#enableloggingmotion) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`enableMotionHistory`](#enablemotionhistory) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`enablePrintRfStatus`](#enableprintrfstatus) | public |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`eraseIrCodes`](#eraseircodes) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). ⚠️ |
| [`getAPIVersion`](#getapiversion) | public |  | input | Gets the MRCU API version. |
| [`getBtServiceAvailable`](#getbtserviceavailable) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getButtonHistory`](#getbuttonhistory) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getConnectionStatus`](#getconnectionstatus) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getCursorHistory`](#getcursorhistory) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getDataDelivery`](#getdatadelivery) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getDeviceInfo`](#getdeviceinfo) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getDiagnosisItem`](#getdiagnosisitem) | private |  | input | Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`getDoingOtaStatus`](#getdoingotastatus) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getLongpressKeyInfo`](#getlongpresskeyinfo) | private |  | input | Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`getMotionEngineStatus`](#getmotionenginestatus) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getMrcuCmdHistory`](#getmrcucmdhistory) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getPairingHistory`](#getpairinghistory) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getPairingHistoryCount`](#getpairinghistorycount) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getPairingStatus`](#getpairingstatus) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`getSensorData`](#getsensordata) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`getStatus`](#getstatus) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`getTraceLogStatus`](#gettracelogstatus) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`hid/connect`](#hid_connect) | private |  | input | Method registered by com.webos.service.mrcu (category '/hid') |
| [`hid/delete`](#hid_delete) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). ⚠️ |
| [`hid/disconnect`](#hid_disconnect) | private |  | input | Method registered by com.webos.service.mrcu (category '/hid') |
| [`hid/getToneBLEDeviceInfo`](#hid_gettonebledeviceinfo) | private |  | input | Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`hid/subscribeDevicesStatus`](#hid_subscribedevicesstatus) | private |  | input | Method registered by com.webos.service.mrcu (category '/hid') |
| [`increasePairingHistoryCount`](#increasepairinghistorycount) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`ir/eraseIrCodes`](#ir_eraseircodes) | private |  | input | Magic Remote service method ir/eraseIrCodes (listed in community research table) |
| [`ir/getCurrentSavedCodeSetId`](#ir_getcurrentsavedcodesetid) | private |  | input | Method registered by com.webos.service.mrcu (category '/ir') |
| [`ir/getIrCableConnection`](#ir_getircableconnection) | private |  | input | Method registered by com.webos.service.mrcu (category '/ir') |
| [`ir/getStbPwrControl`](#ir_getstbpwrcontrol) | private |  | input | Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`ir/getUeiCmdResponse`](#ir_getueicmdresponse) | private |  | input | Method registered by com.webos.service.mrcu (category '/ir') |
| [`ir/pushIrCodes`](#ir_pushircodes) | private |  | input | Magic Remote service method ir/pushIrCodes (listed in community research table) |
| [`ir/requestUeiCodeSetId`](#ir_requestueicodesetid) | private |  | input | Method registered by com.webos.service.mrcu (category '/ir') |
| [`ir/requestUeiPrimaryCodeSetId`](#ir_requestueiprimarycodesetid) | private |  | input | Method registered by com.webos.service.mrcu (category '/ir') |
| [`ir/saveIrCodes`](#ir_saveircodes) | private |  | input | Magic Remote service method ir/saveIrCodes (listed in community research table) |
| [`ir/sendUeiIrCmd`](#ir_sendueiircmd) | private |  | input | Method registered by com.webos.service.mrcu (category '/ir') |
| [`ir/setRepeatIrCtrl`](#ir_setrepeatirctrl) | private |  | input | Setter on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`ir/setSendIrInterval`](#ir_setsendirinterval) | private |  | input | Setter on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`ir/setStbPwrControl`](#ir_setstbpwrcontrol) | private |  | input | Setter on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`ir/testIrGeneration`](#ir_testirgeneration) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`isCheckingDB`](#ischeckingdb) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`isExistDbFile`](#isexistdbfile) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`isPaired`](#ispaired) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`magicblaster/getStatus`](#magicblaster_getstatus) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`printBtLog`](#printbtlog) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`pushIrCodes`](#pushircodes) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`reset`](#reset) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`resetQuaternion`](#resetquaternion) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). ⚠️ |
| [`saveIrCodes`](#saveircodes) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`sendCommand`](#sendcommand) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`sensor/captureLog`](#sensor_capturelog) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`sensor/getSensorData`](#sensor_getsensordata) | public | yes | input | Subscribes to sensor data (older API). |
| [`sensor/resetQuaternion`](#sensor_resetquaternion) | public |  | input | Resets quaternion data. |
| [`sensor/setCursorBounds`](#sensor_setcursorbounds) | private |  | input | Method registered by com.webos.service.mrcu (category '/sensor') |
| [`sensor2/cancelSensorDataSubscribe`](#sensor2_cancelsensordatasubscribe) | public |  | input | Cancels the current sensor subscription. |
| [`sensor2/getSensorEventData`](#sensor2_getsensoreventdata) | public | yes | input | Subscribes to magic remote sensor data. |
| [`sensor2/getSensorInterval`](#sensor2_getsensorinterval) | public |  | input | Min/max sensor callback interval. |
| [`sensor2/getSensorState`](#sensor2_getsensorstate) | public |  | input | Status of the remote motion sensor. |
| [`sensor2/getSensorType`](#sensor2_getsensortype) | public |  | input | Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`sensor2/resetQuaternion`](#sensor2_resetquaternion) | public |  | input | Resets the quaternion sensor. |
| [`sensor2/setSensorInterval`](#sensor2_setsensorinterval) | public |  | input | Changes the sensor callback interval (msec). |
| [`setAutoAlign`](#setautoalign) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`setCursorBounds`](#setcursorbounds) | private |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`setHotkeyCursorPolicy`](#sethotkeycursorpolicy) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`setPairingHistoryKeyCode`](#setpairinghistorykeycode) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`setPosition`](#setposition) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`setSensitivity`](#setsensitivity) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`setSharedMemory`](#setsharedmemory) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`setSleepMode`](#setsleepmode) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`setSlideMode`](#setslidemode) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`setWakeUpCondition`](#setwakeupcondition) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`startFirmwareUpdate`](#startfirmwareupdate) | private |  | input | Method registered by com.webos.service.mrcu (root category) ⚠️ |
| [`startPairing`](#startpairing) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`stopPairing`](#stoppairing) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`subscribeAudioStatus`](#subscribeaudiostatus) | public |  | audio | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`subscribeDeviceStatus`](#subscribedevicestatus) | public |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`subscribeRfStatus`](#subscriberfstatus) | private |  | input | Method registered by com.webos.service.mrcu (root category) |
| [`test/checkButton`](#test_checkbutton) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/checkCursor`](#test_checkcursor) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/checkTonePlusVoiceButton`](#test_checktoneplusvoicebutton) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/checkWheel`](#test_checkwheel) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/confirmKeys`](#test_confirmkeys) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/connect`](#test_connect) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/createVirtualMrcu`](#test_createvirtualmrcu) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/destroyVirtualMrcu`](#test_destroyvirtualmrcu) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/gattConnect`](#test_gattconnect) | private |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`test/gattDiscoverServices`](#test_gattdiscoverservices) | private |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`test/gattMonitorCharacteristics`](#test_gattmonitorcharacteristics) | private |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`test/gattWriteCharacteristicValue`](#test_gattwritecharacteristicvalue) | private |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`test/gattWriteDescriptorValue`](#test_gattwritedescriptorvalue) | private |  | input | Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented). |
| [`test/getAdapterStatus`](#test_getadapterstatus) | private |  | input | Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/getDeviceStatus`](#test_getdevicestatus) | private |  | input | Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/getHidStatus`](#test_gethidstatus) | private |  | input | Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/pair`](#test_pair) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/printDumpPacket`](#test_printdumppacket) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/sendIrCommand`](#test_sendircommand) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/startDiscovery`](#test_startdiscovery) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/startPairing`](#test_startpairing) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/subscribeOTAStatus`](#test_subscribeotastatus) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/subscribePairingStatus`](#test_subscribepairingstatus) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/subscribeSendIrCommand`](#test_subscribesendircommand) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`test/unpair`](#test_unpair) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`tests/runTVDEVTC_25703`](#tests_runtvdevtc_25703) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`tests/subscribeTVDEVTC_25703`](#tests_subscribetvdevtc_25703) | private |  | input | Method on com.webos.service.mrcu (introspected on-device; parameters undocumented). |
| [`voice/sendCommand`](#voice_sendcommand) | private |  | input | Magic Remote service method voice/sendCommand (listed in community research table) |
| [`voice/setSharedMemory`](#voice_setsharedmemory) | private |  | input | Magic Remote service method voice/setSharedMemory (listed in community research table) |
| [`voice/subscribeAudioStatus`](#voice_subscribeaudiostatus) | private |  | input | Magic Remote service method voice/subscribeAudioStatus (listed in community research table) |
| [`voice/subscribeDeviceStatus`](#voice_subscribedevicestatus) | private |  | input | Magic Remote service method voice/subscribeDeviceStatus (listed in community research table) |

<a id="activatemotionsensor"></a>
## `activateMotionSensor`

`luna://com.webos.service.mrcu/activateMotionSensor`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/activateMotionSensor '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="activatemrcu"></a>
## `activateMrcu`

`luna://com.webos.service.mrcu/activateMrcu`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/activateMrcu '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read. \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="createalert"></a>
## `createAlert`

`luna://com.webos.service.mrcu/createAlert`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/createAlert '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="createtoast"></a>
## `createToast`

`luna://com.webos.service.mrcu/createToast`

Shows a toast via the Magic Remote control service

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/createToast '{"message":"Hello"}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read. \| Params unverified; mirrors com.webos.notification/createToast.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/b9.md)

<a id="cursor_setautoalign"></a>
## `cursor/setAutoAlign`

`luna://com.webos.service.mrcu/cursor/setAutoAlign`

Method registered by com.webos.service.mrcu (category '/cursor')

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/cursor/setAutoAlign '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="cursor_setposition"></a>
## `cursor/setPosition`

`luna://com.webos.service.mrcu/cursor/setPosition`

Method registered by com.webos.service.mrcu (category '/cursor')

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/cursor/setPosition '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="cursor_setsensitivity"></a>
## `cursor/setSensitivity`

`luna://com.webos.service.mrcu/cursor/setSensitivity`

Method registered by com.webos.service.mrcu (category '/cursor')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/cursor/setSensitivity '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="cursor_setslidemode"></a>
## `cursor/setSlideMode`

`luna://com.webos.service.mrcu/cursor/setSlideMode`

Method registered by com.webos.service.mrcu (category '/cursor')

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/cursor/setSlideMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="cursor_setwakeupcondition"></a>
## `cursor/setWakeUpCondition`

`luna://com.webos.service.mrcu/cursor/setWakeUpCondition`

Method registered by com.webos.service.mrcu (category '/cursor')

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/cursor/setWakeUpCondition '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="decreasepairinghistorycount"></a>
## `decreasePairingHistoryCount`

`luna://com.webos.service.mrcu/decreasePairingHistoryCount`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/decreasePairingHistoryCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enableaudiosinkmode"></a>
## `enableAudioSinkMode`

`luna://com.webos.service.mrcu/enableAudioSinkMode`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/enableAudioSinkMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enabledualpairing"></a>
## `enableDualPairing`

`luna://com.webos.service.mrcu/enableDualPairing`

Method registered by com.webos.service.mrcu (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/enableDualPairing '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enableloggingmotion"></a>
## `enableLoggingMotion`

`luna://com.webos.service.mrcu/enableLoggingMotion`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/enableLoggingMotion '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enablemotionhistory"></a>
## `enableMotionHistory`

`luna://com.webos.service.mrcu/enableMotionHistory`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/enableMotionHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enableprintrfstatus"></a>
## `enablePrintRfStatus`

`luna://com.webos.service.mrcu/enablePrintRfStatus`

Method registered by com.webos.service.mrcu (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/enablePrintRfStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="eraseircodes"></a>
## `eraseIrCodes` ⚠️ DANGEROUS

`luna://com.webos.service.mrcu/eraseIrCodes`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/eraseIrCodes '{}'
```

> ACG groups: mrcu.action, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getapiversion"></a>
## `getAPIVersion`

`luna://com.webos.service.mrcu/getAPIVersion`

Gets the MRCU API version.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+ (partial on older)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getAPIVersion '{}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/magic-remote)

<a id="getbtserviceavailable"></a>
## `getBtServiceAvailable`

`luna://com.webos.service.mrcu/getBtServiceAvailable`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getBtServiceAvailable '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getbuttonhistory"></a>
## `getButtonHistory`

`luna://com.webos.service.mrcu/getButtonHistory`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getButtonHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getconnectionstatus"></a>
## `getConnectionStatus`

`luna://com.webos.service.mrcu/getConnectionStatus`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getConnectionStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getcursorhistory"></a>
## `getCursorHistory`

`luna://com.webos.service.mrcu/getCursorHistory`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getCursorHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getdatadelivery"></a>
## `getDataDelivery`

`luna://com.webos.service.mrcu/getDataDelivery`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getDataDelivery '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getdeviceinfo"></a>
## `getDeviceInfo`

`luna://com.webos.service.mrcu/getDeviceInfo`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getDeviceInfo '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getdiagnosisitem"></a>
## `getDiagnosisItem`

`luna://com.webos.service.mrcu/getDiagnosisItem`

Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getDiagnosisItem '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdoingotastatus"></a>
## `getDoingOtaStatus`

`luna://com.webos.service.mrcu/getDoingOtaStatus`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getDoingOtaStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getlongpresskeyinfo"></a>
## `getLongpressKeyInfo`

`luna://com.webos.service.mrcu/getLongpressKeyInfo`

Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getLongpressKeyInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmotionenginestatus"></a>
## `getMotionEngineStatus`

`luna://com.webos.service.mrcu/getMotionEngineStatus`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getMotionEngineStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getmrcucmdhistory"></a>
## `getMrcuCmdHistory`

`luna://com.webos.service.mrcu/getMrcuCmdHistory`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getMrcuCmdHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpairinghistory"></a>
## `getPairingHistory`

`luna://com.webos.service.mrcu/getPairingHistory`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getPairingHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpairinghistorycount"></a>
## `getPairingHistoryCount`

`luna://com.webos.service.mrcu/getPairingHistoryCount`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getPairingHistoryCount '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpairingstatus"></a>
## `getPairingStatus`

`luna://com.webos.service.mrcu/getPairingStatus`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getPairingStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getsensordata"></a>
## `getSensorData`

`luna://com.webos.service.mrcu/getSensorData`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getSensorData '{}'
```

> ACG groups: mrcu.read, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.mrcu/getStatus`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getStatus '{}'
```

> ACG groups: mrcu.read, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gettracelogstatus"></a>
## `getTraceLogStatus`

`luna://com.webos.service.mrcu/getTraceLogStatus`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getTraceLogStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="hid_connect"></a>
## `hid/connect`

`luna://com.webos.service.mrcu/hid/connect`

Method registered by com.webos.service.mrcu (category '/hid')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/hid/connect '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="hid_delete"></a>
## `hid/delete` ⚠️ DANGEROUS

`luna://com.webos.service.mrcu/hid/delete`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/hid/delete '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hid_disconnect"></a>
## `hid/disconnect`

`luna://com.webos.service.mrcu/hid/disconnect`

Method registered by com.webos.service.mrcu (category '/hid')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/hid/disconnect '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="hid_gettonebledeviceinfo"></a>
## `hid/getToneBLEDeviceInfo`

`luna://com.webos.service.mrcu/hid/getToneBLEDeviceInfo`

Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/hid/getToneBLEDeviceInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hid_subscribedevicesstatus"></a>
## `hid/subscribeDevicesStatus`

`luna://com.webos.service.mrcu/hid/subscribeDevicesStatus`

Method registered by com.webos.service.mrcu (category '/hid')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/hid/subscribeDevicesStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="increasepairinghistorycount"></a>
## `increasePairingHistoryCount`

`luna://com.webos.service.mrcu/increasePairingHistoryCount`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/increasePairingHistoryCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ir_eraseircodes"></a>
## `ir/eraseIrCodes`

`luna://com.webos.service.mrcu/ir/eraseIrCodes`

Magic Remote service method ir/eraseIrCodes (listed in community research table)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/eraseIrCodes '{}'
```

> Listed in rhinoswirl/webostv-research mrcu method table; descriptions blank there. Executable is /usr/sbin/lginput2 per that page.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.mrcu.md)

<a id="ir_getcurrentsavedcodesetid"></a>
## `ir/getCurrentSavedCodeSetId`

`luna://com.webos.service.mrcu/ir/getCurrentSavedCodeSetId`

Method registered by com.webos.service.mrcu (category '/ir')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/getCurrentSavedCodeSetId '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ir_getircableconnection"></a>
## `ir/getIrCableConnection`

`luna://com.webos.service.mrcu/ir/getIrCableConnection`

Method registered by com.webos.service.mrcu (category '/ir')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/getIrCableConnection '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read. \|

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ir_getstbpwrcontrol"></a>
## `ir/getStbPwrControl`

`luna://com.webos.service.mrcu/ir/getStbPwrControl`

Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/getStbPwrControl '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ir_getueicmdresponse"></a>
## `ir/getUeiCmdResponse`

`luna://com.webos.service.mrcu/ir/getUeiCmdResponse`

Method registered by com.webos.service.mrcu (category '/ir')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/getUeiCmdResponse '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ir_pushircodes"></a>
## `ir/pushIrCodes`

`luna://com.webos.service.mrcu/ir/pushIrCodes`

Magic Remote service method ir/pushIrCodes (listed in community research table)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/pushIrCodes '{}'
```

> Listed in rhinoswirl/webostv-research mrcu method table; descriptions blank there. Executable is /usr/sbin/lginput2 per that page.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.mrcu.md)

<a id="ir_requestueicodesetid"></a>
## `ir/requestUeiCodeSetId`

`luna://com.webos.service.mrcu/ir/requestUeiCodeSetId`

Method registered by com.webos.service.mrcu (category '/ir')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/requestUeiCodeSetId '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ir_requestueiprimarycodesetid"></a>
## `ir/requestUeiPrimaryCodeSetId`

`luna://com.webos.service.mrcu/ir/requestUeiPrimaryCodeSetId`

Method registered by com.webos.service.mrcu (category '/ir')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/requestUeiPrimaryCodeSetId '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ir_saveircodes"></a>
## `ir/saveIrCodes`

`luna://com.webos.service.mrcu/ir/saveIrCodes`

Magic Remote service method ir/saveIrCodes (listed in community research table)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/saveIrCodes '{}'
```

> Listed in rhinoswirl/webostv-research mrcu method table; descriptions blank there. Executable is /usr/sbin/lginput2 per that page.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.mrcu.md)

<a id="ir_sendueiircmd"></a>
## `ir/sendUeiIrCmd`

`luna://com.webos.service.mrcu/ir/sendUeiIrCmd`

Method registered by com.webos.service.mrcu (category '/ir')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/sendUeiIrCmd '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ir_setrepeatirctrl"></a>
## `ir/setRepeatIrCtrl`

`luna://com.webos.service.mrcu/ir/setRepeatIrCtrl`

Setter on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/setRepeatIrCtrl '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ir_setsendirinterval"></a>
## `ir/setSendIrInterval`

`luna://com.webos.service.mrcu/ir/setSendIrInterval`

Setter on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/setSendIrInterval '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ir_setstbpwrcontrol"></a>
## `ir/setStbPwrControl`

`luna://com.webos.service.mrcu/ir/setStbPwrControl`

Setter on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/setStbPwrControl '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ir_testirgeneration"></a>
## `ir/testIrGeneration`

`luna://com.webos.service.mrcu/ir/testIrGeneration`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/testIrGeneration '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ischeckingdb"></a>
## `isCheckingDB`

`luna://com.webos.service.mrcu/isCheckingDB`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/isCheckingDB '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isexistdbfile"></a>
## `isExistDbFile`

`luna://com.webos.service.mrcu/isExistDbFile`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/isExistDbFile '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ispaired"></a>
## `isPaired`

`luna://com.webos.service.mrcu/isPaired`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/isPaired '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="magicblaster_getstatus"></a>
## `magicblaster/getStatus`

`luna://com.webos.service.mrcu/magicblaster/getStatus`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/magicblaster/getStatus '{}'
```

> ACG groups: devices, mrcu.action, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="printbtlog"></a>
## `printBtLog`

`luna://com.webos.service.mrcu/printBtLog`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/printBtLog '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="pushircodes"></a>
## `pushIrCodes`

`luna://com.webos.service.mrcu/pushIrCodes`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/pushIrCodes '{}'
```

> ACG groups: mrcu.action, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="reset"></a>
## `reset`

`luna://com.webos.service.mrcu/reset`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/reset '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetquaternion"></a>
## `resetQuaternion` ⚠️ DANGEROUS

`luna://com.webos.service.mrcu/resetQuaternion`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/resetQuaternion '{}'
```

> ACG groups: mrcu.action, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="saveircodes"></a>
## `saveIrCodes`

`luna://com.webos.service.mrcu/saveIrCodes`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/saveIrCodes '{}'
```

> ACG groups: mrcu.action, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendcommand"></a>
## `sendCommand`

`luna://com.webos.service.mrcu/sendCommand`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/sendCommand '{}'
```

> ACG groups: mrcu.action, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sensor_capturelog"></a>
## `sensor/captureLog`

`luna://com.webos.service.mrcu/sensor/captureLog`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/sensor/captureLog '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sensor_getsensordata"></a>
## `sensor/getSensorData`

`luna://com.webos.service.mrcu/sensor/getSensorData`

Subscribes to sensor data (older API).

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+ (partial on older)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `callbackInterval` | Number (required) |
| `subscribe` | Boolean (required) |

```sh
luna-send -i -f luna://com.webos.service.mrcu/sensor/getSensorData '{"callbackInterval":1,"subscribe":true}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/magic-remote)

<a id="sensor_resetquaternion"></a>
## `sensor/resetQuaternion`

`luna://com.webos.service.mrcu/sensor/resetQuaternion`

Resets quaternion data.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+ (partial on older)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/sensor/resetQuaternion '{}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/magic-remote)

<a id="sensor_setcursorbounds"></a>
## `sensor/setCursorBounds`

`luna://com.webos.service.mrcu/sensor/setCursorBounds`

Method registered by com.webos.service.mrcu (category '/sensor')

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/sensor/setCursorBounds '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="sensor2_cancelsensordatasubscribe"></a>
## `sensor2/cancelSensorDataSubscribe`

`luna://com.webos.service.mrcu/sensor2/cancelSensorDataSubscribe`

Cancels the current sensor subscription.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+ (partial on older)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/sensor2/cancelSensorDataSubscribe '{}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/magic-remote)

<a id="sensor2_getsensoreventdata"></a>
## `sensor2/getSensorEventData`

`luna://com.webos.service.mrcu/sensor2/getSensorEventData`

Subscribes to magic remote sensor data.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+ (partial on older)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `sensorType` | String (required) e.g. all |
| `subscribe` | Boolean (required) |

```sh
luna-send -i -f luna://com.webos.service.mrcu/sensor2/getSensorEventData '{"sensorType":"all","subscribe":true}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/magic-remote)

<a id="sensor2_getsensorinterval"></a>
## `sensor2/getSensorInterval`

`luna://com.webos.service.mrcu/sensor2/getSensorInterval`

Min/max sensor callback interval.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+ (partial on older)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/sensor2/getSensorInterval '{}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/magic-remote)

<a id="sensor2_getsensorstate"></a>
## `sensor2/getSensorState`

`luna://com.webos.service.mrcu/sensor2/getSensorState`

Status of the remote motion sensor.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+ (partial on older)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/sensor2/getSensorState '{}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/magic-remote)

<a id="sensor2_getsensortype"></a>
## `sensor2/getSensorType`

`luna://com.webos.service.mrcu/sensor2/getSensorType`

Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/sensor2/getSensorType '{}'
```

> ACG groups: public, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sensor2_resetquaternion"></a>
## `sensor2/resetQuaternion`

`luna://com.webos.service.mrcu/sensor2/resetQuaternion`

Resets the quaternion sensor.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+ (partial on older)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/sensor2/resetQuaternion '{}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/magic-remote)

<a id="sensor2_setsensorinterval"></a>
## `sensor2/setSensorInterval`

`luna://com.webos.service.mrcu/sensor2/setSensorInterval`

Changes the sensor callback interval (msec).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 22+ (partial on older)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `interval` | Int (required) msec |

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/sensor2/setSensorInterval '{"interval":10}'
```

Sources: [1](https://webostv.developer.lge.com/develop/references/magic-remote)

<a id="setautoalign"></a>
## `setAutoAlign`

`luna://com.webos.service.mrcu/setAutoAlign`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setAutoAlign '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setcursorbounds"></a>
## `setCursorBounds`

`luna://com.webos.service.mrcu/setCursorBounds`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setCursorBounds '{}'
```

> ACG groups: mrcu.write, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sethotkeycursorpolicy"></a>
## `setHotkeyCursorPolicy`

`luna://com.webos.service.mrcu/setHotkeyCursorPolicy`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setHotkeyCursorPolicy '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setpairinghistorykeycode"></a>
## `setPairingHistoryKeyCode`

`luna://com.webos.service.mrcu/setPairingHistoryKeyCode`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setPairingHistoryKeyCode '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setposition"></a>
## `setPosition`

`luna://com.webos.service.mrcu/setPosition`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setPosition '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsensitivity"></a>
## `setSensitivity`

`luna://com.webos.service.mrcu/setSensitivity`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setSensitivity '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsharedmemory"></a>
## `setSharedMemory`

`luna://com.webos.service.mrcu/setSharedMemory`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setSharedMemory '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsleepmode"></a>
## `setSleepMode`

`luna://com.webos.service.mrcu/setSleepMode`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setSleepMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setslidemode"></a>
## `setSlideMode`

`luna://com.webos.service.mrcu/setSlideMode`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setSlideMode '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setwakeupcondition"></a>
## `setWakeUpCondition`

`luna://com.webos.service.mrcu/setWakeUpCondition`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setWakeUpCondition '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startfirmwareupdate"></a>
## `startFirmwareUpdate` ⚠️ DANGEROUS

`luna://com.webos.service.mrcu/startFirmwareUpdate`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/startFirmwareUpdate '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="startpairing"></a>
## `startPairing`

`luna://com.webos.service.mrcu/startPairing`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/startPairing '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="stoppairing"></a>
## `stopPairing`

`luna://com.webos.service.mrcu/stopPairing`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/stopPairing '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribeaudiostatus"></a>
## `subscribeAudioStatus`

`luna://com.webos.service.mrcu/subscribeAudioStatus`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/subscribeAudioStatus '{}'
```

> ACG groups: mrcu.subscribe, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscribedevicestatus"></a>
## `subscribeDeviceStatus`

`luna://com.webos.service.mrcu/subscribeDeviceStatus`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/subscribeDeviceStatus '{}'
```

> ACG groups: mrcu.subscribe, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscriberfstatus"></a>
## `subscribeRfStatus`

`luna://com.webos.service.mrcu/subscribeRfStatus`

Method registered by com.webos.service.mrcu (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/subscribeRfStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="test_checkbutton"></a>
## `test/checkButton`

`luna://com.webos.service.mrcu/test/checkButton`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/checkButton '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_checkcursor"></a>
## `test/checkCursor`

`luna://com.webos.service.mrcu/test/checkCursor`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/checkCursor '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_checktoneplusvoicebutton"></a>
## `test/checkTonePlusVoiceButton`

`luna://com.webos.service.mrcu/test/checkTonePlusVoiceButton`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/checkTonePlusVoiceButton '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_checkwheel"></a>
## `test/checkWheel`

`luna://com.webos.service.mrcu/test/checkWheel`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/checkWheel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_confirmkeys"></a>
## `test/confirmKeys`

`luna://com.webos.service.mrcu/test/confirmKeys`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/confirmKeys '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_connect"></a>
## `test/connect`

`luna://com.webos.service.mrcu/test/connect`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/connect '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_createvirtualmrcu"></a>
## `test/createVirtualMrcu`

`luna://com.webos.service.mrcu/test/createVirtualMrcu`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/createVirtualMrcu '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_destroyvirtualmrcu"></a>
## `test/destroyVirtualMrcu`

`luna://com.webos.service.mrcu/test/destroyVirtualMrcu`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/destroyVirtualMrcu '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_gattconnect"></a>
## `test/gattConnect`

`luna://com.webos.service.mrcu/test/gattConnect`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/gattConnect '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_gattdiscoverservices"></a>
## `test/gattDiscoverServices`

`luna://com.webos.service.mrcu/test/gattDiscoverServices`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/gattDiscoverServices '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_gattmonitorcharacteristics"></a>
## `test/gattMonitorCharacteristics`

`luna://com.webos.service.mrcu/test/gattMonitorCharacteristics`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/gattMonitorCharacteristics '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_gattwritecharacteristicvalue"></a>
## `test/gattWriteCharacteristicValue`

`luna://com.webos.service.mrcu/test/gattWriteCharacteristicValue`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/gattWriteCharacteristicValue '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_gattwritedescriptorvalue"></a>
## `test/gattWriteDescriptorValue`

`luna://com.webos.service.mrcu/test/gattWriteDescriptorValue`

Method on com.webos.service.mrcu (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/gattWriteDescriptorValue '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_getadapterstatus"></a>
## `test/getAdapterStatus`

`luna://com.webos.service.mrcu/test/getAdapterStatus`

Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/getAdapterStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_getdevicestatus"></a>
## `test/getDeviceStatus`

`luna://com.webos.service.mrcu/test/getDeviceStatus`

Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/getDeviceStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_gethidstatus"></a>
## `test/getHidStatus`

`luna://com.webos.service.mrcu/test/getHidStatus`

Getter on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/getHidStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_pair"></a>
## `test/pair`

`luna://com.webos.service.mrcu/test/pair`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/pair '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_printdumppacket"></a>
## `test/printDumpPacket`

`luna://com.webos.service.mrcu/test/printDumpPacket`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/printDumpPacket '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_sendircommand"></a>
## `test/sendIrCommand`

`luna://com.webos.service.mrcu/test/sendIrCommand`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/sendIrCommand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_startdiscovery"></a>
## `test/startDiscovery`

`luna://com.webos.service.mrcu/test/startDiscovery`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/startDiscovery '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_startpairing"></a>
## `test/startPairing`

`luna://com.webos.service.mrcu/test/startPairing`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/startPairing '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_subscribeotastatus"></a>
## `test/subscribeOTAStatus`

`luna://com.webos.service.mrcu/test/subscribeOTAStatus`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/subscribeOTAStatus '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_subscribepairingstatus"></a>
## `test/subscribePairingStatus`

`luna://com.webos.service.mrcu/test/subscribePairingStatus`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/subscribePairingStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_subscribesendircommand"></a>
## `test/subscribeSendIrCommand`

`luna://com.webos.service.mrcu/test/subscribeSendIrCommand`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/subscribeSendIrCommand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_unpair"></a>
## `test/unpair`

`luna://com.webos.service.mrcu/test/unpair`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/unpair '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tests_runtvdevtc_25703"></a>
## `tests/runTVDEVTC_25703`

`luna://com.webos.service.mrcu/tests/runTVDEVTC_25703`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/tests/runTVDEVTC_25703 '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tests_subscribetvdevtc_25703"></a>
## `tests/subscribeTVDEVTC_25703`

`luna://com.webos.service.mrcu/tests/subscribeTVDEVTC_25703`

Method on com.webos.service.mrcu (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/tests/subscribeTVDEVTC_25703 '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="voice_sendcommand"></a>
## `voice/sendCommand`

`luna://com.webos.service.mrcu/voice/sendCommand`

Magic Remote service method voice/sendCommand (listed in community research table)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/voice/sendCommand '{}'
```

> Listed in rhinoswirl/webostv-research mrcu method table; descriptions blank there. Executable is /usr/sbin/lginput2 per that page.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.mrcu.md)

<a id="voice_setsharedmemory"></a>
## `voice/setSharedMemory`

`luna://com.webos.service.mrcu/voice/setSharedMemory`

Magic Remote service method voice/setSharedMemory (listed in community research table)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/voice/setSharedMemory '{}'
```

> Listed in rhinoswirl/webostv-research mrcu method table; descriptions blank there. Executable is /usr/sbin/lginput2 per that page.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.mrcu.md)

<a id="voice_subscribeaudiostatus"></a>
## `voice/subscribeAudioStatus`

`luna://com.webos.service.mrcu/voice/subscribeAudioStatus`

Magic Remote service method voice/subscribeAudioStatus (listed in community research table)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/voice/subscribeAudioStatus '{}'
```

> Listed in rhinoswirl/webostv-research mrcu method table; descriptions blank there. Executable is /usr/sbin/lginput2 per that page.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.mrcu.md)

<a id="voice_subscribedevicestatus"></a>
## `voice/subscribeDeviceStatus`

`luna://com.webos.service.mrcu/voice/subscribeDeviceStatus`

Magic Remote service method voice/subscribeDeviceStatus (listed in community research table)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** community

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/voice/subscribeDeviceStatus '{}'
```

> Listed in rhinoswirl/webostv-research mrcu method table; descriptions blank there. Executable is /usr/sbin/lginput2 per that page.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.mrcu.md)
