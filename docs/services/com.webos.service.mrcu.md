# `com.webos.service.mrcu`

Magic Remote Control Unit service: pairs the remote, manages the pointer cursor and motion sensor, IR codes and firmware, and shows alerts/toasts.

122 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`activateMotionSensor`](#activatemotionsensor) | private |  | input | inferred | Activates the motion sensor. |
| [`activateMrcu`](#activatemrcu) | private |  | input | inferred | Activates the MRCU. |
| [`createAlert`](#createalert) | private |  | input | inferred | Creates the alert. |
| [`createToast`](#createtoast) | private |  | input | documented | Shows a toast via the Magic Remote control service |
| [`cursor/setAutoAlign`](#cursor_setautoalign) | public |  | input | inferred | Sets the auto align (cursor) |
| [`cursor/setPosition`](#cursor_setposition) | public |  | input | inferred | Sets the position (cursor) |
| [`cursor/setSensitivity`](#cursor_setsensitivity) | private |  | input | inferred | Sets the sensitivity (cursor) |
| [`cursor/setSlideMode`](#cursor_setslidemode) | public |  | input | inferred | Sets the slide mode (cursor) |
| [`cursor/setWakeUpCondition`](#cursor_setwakeupcondition) | public |  | input | inferred | Sets the wake up condition (cursor) |
| [`decreasePairingHistoryCount`](#decreasepairinghistorycount) | private |  | input | inferred | Decreases the pairing history count. |
| [`enableAudioSinkMode`](#enableaudiosinkmode) | private |  | input | inferred | Enables the audio sink mode. |
| [`enableDualPairing`](#enabledualpairing) | public |  | input | inferred | Enables the dual pairing. |
| [`enableLoggingMotion`](#enableloggingmotion) | private |  | input | inferred | Enables the logging motion. |
| [`enableMotionHistory`](#enablemotionhistory) | private |  | input | inferred | Enables the motion history. |
| [`enablePrintRfStatus`](#enableprintrfstatus) | public |  | input | inferred | Enables the print RF status. |
| [`eraseIrCodes`](#eraseircodes) | public |  | input | inferred | Erases the IR codes. ⚠️ |
| [`getAPIVersion`](#getapiversion) | public |  | input | documented | Gets the MRCU API version. |
| [`getBtServiceAvailable`](#getbtserviceavailable) | private |  | input | inferred | Returns the Bluetooth service available. |
| [`getButtonHistory`](#getbuttonhistory) | private |  | input | inferred | Returns the button history. |
| [`getConnectionStatus`](#getconnectionstatus) | private |  | input | inferred | Returns the connection status. |
| [`getCursorHistory`](#getcursorhistory) | private |  | input | inferred | Returns the cursor history. |
| [`getDataDelivery`](#getdatadelivery) | private |  | input | inferred | Returns the data delivery. |
| [`getDeviceInfo`](#getdeviceinfo) | private |  | input | inferred | Returns the device info. |
| [`getDiagnosisItem`](#getdiagnosisitem) | private |  | input | inferred | Returns the diagnosis item. |
| [`getDoingOtaStatus`](#getdoingotastatus) | private |  | input | inferred | Returns the doing ota status. |
| [`getLongpressKeyInfo`](#getlongpresskeyinfo) | private |  | input | inferred | Returns the longpress key info. |
| [`getMotionEngineStatus`](#getmotionenginestatus) | private |  | input | inferred | Returns the motion engine status. |
| [`getMrcuCmdHistory`](#getmrcucmdhistory) | private |  | input | inferred | Returns the MRCU cmd history. |
| [`getPairingHistory`](#getpairinghistory) | private |  | input | inferred | Returns the pairing history. |
| [`getPairingHistoryCount`](#getpairinghistorycount) | private |  | input | inferred | Returns the pairing history count. |
| [`getPairingStatus`](#getpairingstatus) | private |  | input | inferred | Returns the pairing status. |
| [`getSensorData`](#getsensordata) | public |  | input | inferred | Returns the sensor data. |
| [`getStatus`](#getstatus) | public |  | input | inferred | Returns the status. |
| [`getTraceLogStatus`](#gettracelogstatus) | private |  | input | inferred | Returns the trace log status. |
| [`hid/connect`](#hid_connect) | private |  | input | inferred | Connects the MRCU (hid) |
| [`hid/delete`](#hid_delete) | private |  | input | inferred | Deletes the MRCU (hid) ⚠️ |
| [`hid/disconnect`](#hid_disconnect) | private |  | input | inferred | Disconnects the MRCU (hid) |
| [`hid/getToneBLEDeviceInfo`](#hid_gettonebledeviceinfo) | private |  | input | inferred | Returns the tone BLE device info (hid) |
| [`hid/subscribeDevicesStatus`](#hid_subscribedevicesstatus) | private |  | input | inferred | Subscribes to the devices status (hid) |
| [`increasePairingHistoryCount`](#increasepairinghistorycount) | private |  | input | inferred | Increases the pairing history count. |
| [`ir/eraseIrCodes`](#ir_eraseircodes) | private |  | input | documented | Magic Remote service method ir/eraseIrCodes (listed in community research table) |
| [`ir/getCurrentSavedCodeSetId`](#ir_getcurrentsavedcodesetid) | private |  | input | inferred | Returns the current saved code set ID (IR) |
| [`ir/getIrCableConnection`](#ir_getircableconnection) | private |  | input | inferred | Returns the IR cable connection (IR) |
| [`ir/getStbPwrControl`](#ir_getstbpwrcontrol) | private |  | input | inferred | Returns the stb pwr control (IR) |
| [`ir/getUeiCmdResponse`](#ir_getueicmdresponse) | private |  | input | inferred | Returns the uei cmd response (IR) |
| [`ir/pushIrCodes`](#ir_pushircodes) | private |  | input | documented | Magic Remote service method ir/pushIrCodes (listed in community research table) |
| [`ir/requestUeiCodeSetId`](#ir_requestueicodesetid) | private |  | input | inferred | Requests the uei code set ID (IR) |
| [`ir/requestUeiPrimaryCodeSetId`](#ir_requestueiprimarycodesetid) | private |  | input | inferred | Requests the uei primary code set ID (IR) |
| [`ir/saveIrCodes`](#ir_saveircodes) | private |  | input | documented | Magic Remote service method ir/saveIrCodes (listed in community research table) |
| [`ir/sendUeiIrCmd`](#ir_sendueiircmd) | private |  | input | inferred | Sends the uei IR cmd (IR) |
| [`ir/setRepeatIrCtrl`](#ir_setrepeatirctrl) | private |  | input | inferred | Sets the repeat IR ctrl (IR) |
| [`ir/setSendIrInterval`](#ir_setsendirinterval) | private |  | input | inferred | Sets the send IR interval (IR) |
| [`ir/setStbPwrControl`](#ir_setstbpwrcontrol) | private |  | input | inferred | Sets the stb pwr control (IR) |
| [`ir/testIrGeneration`](#ir_testirgeneration) | private |  | input | inferred | Tests the IR generation (IR) |
| [`isCheckingDB`](#ischeckingdb) | private |  | input | inferred | Reports whether the checking DB is set. |
| [`isExistDbFile`](#isexistdbfile) | private |  | input | inferred | Reports whether the exist db file is set. |
| [`isPaired`](#ispaired) | private |  | input | inferred | Reports whether the paired is set. |
| [`magicblaster/getStatus`](#magicblaster_getstatus) | public |  | input | inferred | Returns the status (magicblaster) |
| [`printBtLog`](#printbtlog) | private |  | input | inferred | Prints the Bluetooth log. |
| [`pushIrCodes`](#pushircodes) | public |  | input | inferred | Pushes the IR codes. |
| [`reset`](#reset) | private |  | input | inferred | Resets the MRCU. |
| [`resetQuaternion`](#resetquaternion) | public |  | input | inferred | Resets the quaternion. ⚠️ |
| [`saveIrCodes`](#saveircodes) | public |  | input | inferred | Saves the IR codes. |
| [`sendCommand`](#sendcommand) | public |  | input | inferred | Sends the command. |
| [`sensor/captureLog`](#sensor_capturelog) | private |  | input | inferred | Captures the log (sensor) |
| [`sensor/getSensorData`](#sensor_getsensordata) | public | yes | input | documented | Subscribes to sensor data (older API). |
| [`sensor/resetQuaternion`](#sensor_resetquaternion) | public |  | input | documented | Resets quaternion data. |
| [`sensor/setCursorBounds`](#sensor_setcursorbounds) | private |  | input | inferred | Sets the cursor bounds (sensor) |
| [`sensor2/cancelSensorDataSubscribe`](#sensor2_cancelsensordatasubscribe) | public |  | input | documented | Cancels the current sensor subscription. |
| [`sensor2/getSensorEventData`](#sensor2_getsensoreventdata) | public | yes | input | documented | Subscribes to magic remote sensor data. |
| [`sensor2/getSensorInterval`](#sensor2_getsensorinterval) | public |  | input | documented | Min/max sensor callback interval. |
| [`sensor2/getSensorState`](#sensor2_getsensorstate) | public |  | input | documented | Status of the remote motion sensor. |
| [`sensor2/getSensorType`](#sensor2_getsensortype) | public |  | input | inferred | Returns the sensor type (sensor 2) |
| [`sensor2/resetQuaternion`](#sensor2_resetquaternion) | public |  | input | documented | Resets the quaternion sensor. |
| [`sensor2/setSensorInterval`](#sensor2_setsensorinterval) | public |  | input | documented | Changes the sensor callback interval (msec). |
| [`setAutoAlign`](#setautoalign) | public |  | input | inferred | Sets the auto align. |
| [`setCursorBounds`](#setcursorbounds) | private |  | input | inferred | Sets the cursor bounds. |
| [`setHotkeyCursorPolicy`](#sethotkeycursorpolicy) | private |  | input | inferred | Sets the hotkey cursor policy. |
| [`setPairingHistoryKeyCode`](#setpairinghistorykeycode) | private |  | input | inferred | Sets the pairing history key code. |
| [`setPosition`](#setposition) | public |  | input | inferred | Sets the position. |
| [`setSensitivity`](#setsensitivity) | public |  | input | inferred | Sets the sensitivity. |
| [`setSharedMemory`](#setsharedmemory) | public |  | input | inferred | Sets the shared memory. |
| [`setSleepMode`](#setsleepmode) | private |  | input | inferred | Sets the sleep mode. |
| [`setSlideMode`](#setslidemode) | public |  | input | inferred | Sets the slide mode. |
| [`setWakeUpCondition`](#setwakeupcondition) | public |  | input | inferred | Sets the wake up condition. |
| [`startFirmwareUpdate`](#startfirmwareupdate) | private |  | input | inferred | Starts the firmware update. ⚠️ |
| [`startPairing`](#startpairing) | private |  | input | inferred | Starts the pairing. |
| [`stopPairing`](#stoppairing) | private |  | input | inferred | Stops the pairing. |
| [`subscribeAudioStatus`](#subscribeaudiostatus) | public |  | audio | inferred | Subscribes to the audio status. |
| [`subscribeDeviceStatus`](#subscribedevicestatus) | public |  | input | inferred | Subscribes to the device status. |
| [`subscribeRfStatus`](#subscriberfstatus) | private |  | input | inferred | Subscribes to the RF status. |
| [`test/checkButton`](#test_checkbutton) | private |  | input | inferred | Checks the button (test) |
| [`test/checkCursor`](#test_checkcursor) | private |  | input | inferred | Checks the cursor (test) |
| [`test/checkTonePlusVoiceButton`](#test_checktoneplusvoicebutton) | private |  | input | inferred | Checks the tone plus voice button (test) |
| [`test/checkWheel`](#test_checkwheel) | private |  | input | inferred | Checks the wheel (test) |
| [`test/confirmKeys`](#test_confirmkeys) | private |  | input | inferred | Handles the confirm keys (test) |
| [`test/connect`](#test_connect) | private |  | input | inferred | Connects the MRCU (test) |
| [`test/createVirtualMrcu`](#test_createvirtualmrcu) | private |  | input | inferred | Creates the virtual MRCU (test) |
| [`test/destroyVirtualMrcu`](#test_destroyvirtualmrcu) | private |  | input | inferred | Handles the destroy virtual MRCU (test) |
| [`test/gattConnect`](#test_gattconnect) | private |  | input | inferred | Handles the GATT connect (test) |
| [`test/gattDiscoverServices`](#test_gattdiscoverservices) | private |  | input | inferred | Handles the GATT discover services (test) |
| [`test/gattMonitorCharacteristics`](#test_gattmonitorcharacteristics) | private |  | input | inferred | Handles the GATT monitor characteristics (test) |
| [`test/gattWriteCharacteristicValue`](#test_gattwritecharacteristicvalue) | private |  | input | inferred | Handles the GATT write characteristic value (test) |
| [`test/gattWriteDescriptorValue`](#test_gattwritedescriptorvalue) | private |  | input | inferred | Handles the GATT write descriptor value (test) |
| [`test/getAdapterStatus`](#test_getadapterstatus) | private |  | input | inferred | Returns the adapter status (test) |
| [`test/getDeviceStatus`](#test_getdevicestatus) | private |  | input | inferred | Returns the device status (test) |
| [`test/getHidStatus`](#test_gethidstatus) | private |  | input | inferred | Returns the hid status (test) |
| [`test/pair`](#test_pair) | private |  | input | inferred | Pairs the MRCU (test) |
| [`test/printDumpPacket`](#test_printdumppacket) | private |  | input | inferred | Prints the dump packet (test) |
| [`test/sendIrCommand`](#test_sendircommand) | private |  | input | inferred | Sends the IR command (test) |
| [`test/startDiscovery`](#test_startdiscovery) | private |  | input | inferred | Starts the discovery (test) |
| [`test/startPairing`](#test_startpairing) | private |  | input | inferred | Starts the pairing (test) |
| [`test/subscribeOTAStatus`](#test_subscribeotastatus) | private |  | input | inferred | Subscribes to the OTA status (test) |
| [`test/subscribePairingStatus`](#test_subscribepairingstatus) | private |  | input | inferred | Subscribes to the pairing status (test) |
| [`test/subscribeSendIrCommand`](#test_subscribesendircommand) | private |  | input | inferred | Subscribes to the send IR command (test) |
| [`test/unpair`](#test_unpair) | private |  | input | inferred | Unpairs the MRCU (test) |
| [`tests/runTVDEVTC_25703`](#tests_runtvdevtc_25703) | private |  | input | inferred | Runs the TVDEVTC 25703 (tests) |
| [`tests/subscribeTVDEVTC_25703`](#tests_subscribetvdevtc_25703) | private |  | input | inferred | Subscribes to the TVDEVTC 25703 (tests) |
| [`voice/sendCommand`](#voice_sendcommand) | private |  | input | documented | Magic Remote service method voice/sendCommand (listed in community research table) |
| [`voice/setSharedMemory`](#voice_setsharedmemory) | private |  | input | documented | Magic Remote service method voice/setSharedMemory (listed in community research table) |
| [`voice/subscribeAudioStatus`](#voice_subscribeaudiostatus) | private |  | input | documented | Magic Remote service method voice/subscribeAudioStatus (listed in community research table) |
| [`voice/subscribeDeviceStatus`](#voice_subscribedevicestatus) | private |  | input | documented | Magic Remote service method voice/subscribeDeviceStatus (listed in community research table) |

<a id="activatemotionsensor"></a>
## `activateMotionSensor`

`luna://com.webos.service.mrcu/activateMotionSensor`

Activates the motion sensor.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/activateMotionSensor '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="activatemrcu"></a>
## `activateMrcu`

`luna://com.webos.service.mrcu/activateMrcu`

Activates the MRCU.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/activateMrcu '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read. \| Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="createalert"></a>
## `createAlert`

`luna://com.webos.service.mrcu/createAlert`

Creates the alert.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/createToast '{"message":"Hello"}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read. \| Params unverified; mirrors com.webos.notification/createToast.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/b9.md)

<a id="cursor_setautoalign"></a>
## `cursor/setAutoAlign`

`luna://com.webos.service.mrcu/cursor/setAutoAlign`

Sets the auto align (cursor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/cursor/setAutoAlign '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="cursor_setposition"></a>
## `cursor/setPosition`

`luna://com.webos.service.mrcu/cursor/setPosition`

Sets the position (cursor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/cursor/setPosition '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="cursor_setsensitivity"></a>
## `cursor/setSensitivity`

`luna://com.webos.service.mrcu/cursor/setSensitivity`

Sets the sensitivity (cursor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/cursor/setSensitivity '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="cursor_setslidemode"></a>
## `cursor/setSlideMode`

`luna://com.webos.service.mrcu/cursor/setSlideMode`

Sets the slide mode (cursor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/cursor/setSlideMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="cursor_setwakeupcondition"></a>
## `cursor/setWakeUpCondition`

`luna://com.webos.service.mrcu/cursor/setWakeUpCondition`

Sets the wake up condition (cursor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/cursor/setWakeUpCondition '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="decreasepairinghistorycount"></a>
## `decreasePairingHistoryCount`

`luna://com.webos.service.mrcu/decreasePairingHistoryCount`

Decreases the pairing history count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/decreasePairingHistoryCount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enableaudiosinkmode"></a>
## `enableAudioSinkMode`

`luna://com.webos.service.mrcu/enableAudioSinkMode`

Enables the audio sink mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/enableAudioSinkMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enabledualpairing"></a>
## `enableDualPairing`

`luna://com.webos.service.mrcu/enableDualPairing`

Enables the dual pairing.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/enableDualPairing '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enableloggingmotion"></a>
## `enableLoggingMotion`

`luna://com.webos.service.mrcu/enableLoggingMotion`

Enables the logging motion.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/enableLoggingMotion '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enablemotionhistory"></a>
## `enableMotionHistory`

`luna://com.webos.service.mrcu/enableMotionHistory`

Enables the motion history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/enableMotionHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="enableprintrfstatus"></a>
## `enablePrintRfStatus`

`luna://com.webos.service.mrcu/enablePrintRfStatus`

Enables the print RF status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/enablePrintRfStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="eraseircodes"></a>
## `eraseIrCodes` ⚠️ DANGEROUS

`luna://com.webos.service.mrcu/eraseIrCodes`

Erases the IR codes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

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

Returns the Bluetooth service available.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getBtServiceAvailable '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getbuttonhistory"></a>
## `getButtonHistory`

`luna://com.webos.service.mrcu/getButtonHistory`

Returns the button history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getButtonHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getconnectionstatus"></a>
## `getConnectionStatus`

`luna://com.webos.service.mrcu/getConnectionStatus`

Returns the connection status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getConnectionStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getcursorhistory"></a>
## `getCursorHistory`

`luna://com.webos.service.mrcu/getCursorHistory`

Returns the cursor history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getCursorHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getdatadelivery"></a>
## `getDataDelivery`

`luna://com.webos.service.mrcu/getDataDelivery`

Returns the data delivery.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getDataDelivery '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getdeviceinfo"></a>
## `getDeviceInfo`

`luna://com.webos.service.mrcu/getDeviceInfo`

Returns the device info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getDeviceInfo '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getdiagnosisitem"></a>
## `getDiagnosisItem`

`luna://com.webos.service.mrcu/getDiagnosisItem`

Returns the diagnosis item.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getDiagnosisItem '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdoingotastatus"></a>
## `getDoingOtaStatus`

`luna://com.webos.service.mrcu/getDoingOtaStatus`

Returns the doing ota status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getDoingOtaStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getlongpresskeyinfo"></a>
## `getLongpressKeyInfo`

`luna://com.webos.service.mrcu/getLongpressKeyInfo`

Returns the longpress key info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getLongpressKeyInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmotionenginestatus"></a>
## `getMotionEngineStatus`

`luna://com.webos.service.mrcu/getMotionEngineStatus`

Returns the motion engine status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getMotionEngineStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getmrcucmdhistory"></a>
## `getMrcuCmdHistory`

`luna://com.webos.service.mrcu/getMrcuCmdHistory`

Returns the MRCU cmd history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getMrcuCmdHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpairinghistory"></a>
## `getPairingHistory`

`luna://com.webos.service.mrcu/getPairingHistory`

Returns the pairing history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getPairingHistory '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpairinghistorycount"></a>
## `getPairingHistoryCount`

`luna://com.webos.service.mrcu/getPairingHistoryCount`

Returns the pairing history count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getPairingHistoryCount '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpairingstatus"></a>
## `getPairingStatus`

`luna://com.webos.service.mrcu/getPairingStatus`

Returns the pairing status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getPairingStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getsensordata"></a>
## `getSensorData`

`luna://com.webos.service.mrcu/getSensorData`

Returns the sensor data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getSensorData '{}'
```

> ACG groups: mrcu.read, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.mrcu/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getStatus '{}'
```

> ACG groups: mrcu.read, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gettracelogstatus"></a>
## `getTraceLogStatus`

`luna://com.webos.service.mrcu/getTraceLogStatus`

Returns the trace log status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/getTraceLogStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="hid_connect"></a>
## `hid/connect`

`luna://com.webos.service.mrcu/hid/connect`

Connects the MRCU (hid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/hid/connect '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="hid_delete"></a>
## `hid/delete` ⚠️ DANGEROUS

`luna://com.webos.service.mrcu/hid/delete`

Deletes the MRCU (hid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/hid/delete '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hid_disconnect"></a>
## `hid/disconnect`

`luna://com.webos.service.mrcu/hid/disconnect`

Disconnects the MRCU (hid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/hid/disconnect '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="hid_gettonebledeviceinfo"></a>
## `hid/getToneBLEDeviceInfo`

`luna://com.webos.service.mrcu/hid/getToneBLEDeviceInfo`

Returns the tone BLE device info (hid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/hid/getToneBLEDeviceInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hid_subscribedevicesstatus"></a>
## `hid/subscribeDevicesStatus`

`luna://com.webos.service.mrcu/hid/subscribeDevicesStatus`

Subscribes to the devices status (hid)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/hid/subscribeDevicesStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="increasepairinghistorycount"></a>
## `increasePairingHistoryCount`

`luna://com.webos.service.mrcu/increasePairingHistoryCount`

Increases the pairing history count.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/eraseIrCodes '{}'
```

> Listed in rhinoswirl/webostv-research mrcu method table; descriptions blank there. Executable is /usr/sbin/lginput2 per that page.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.mrcu.md)

<a id="ir_getcurrentsavedcodesetid"></a>
## `ir/getCurrentSavedCodeSetId`

`luna://com.webos.service.mrcu/ir/getCurrentSavedCodeSetId`

Returns the current saved code set ID (IR)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/getCurrentSavedCodeSetId '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ir_getircableconnection"></a>
## `ir/getIrCableConnection`

`luna://com.webos.service.mrcu/ir/getIrCableConnection`

Returns the IR cable connection (IR)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/getIrCableConnection '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read. \|

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ir_getstbpwrcontrol"></a>
## `ir/getStbPwrControl`

`luna://com.webos.service.mrcu/ir/getStbPwrControl`

Returns the stb pwr control (IR)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/getStbPwrControl '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ir_getueicmdresponse"></a>
## `ir/getUeiCmdResponse`

`luna://com.webos.service.mrcu/ir/getUeiCmdResponse`

Returns the uei cmd response (IR)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/pushIrCodes '{}'
```

> Listed in rhinoswirl/webostv-research mrcu method table; descriptions blank there. Executable is /usr/sbin/lginput2 per that page.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.mrcu.md)

<a id="ir_requestueicodesetid"></a>
## `ir/requestUeiCodeSetId`

`luna://com.webos.service.mrcu/ir/requestUeiCodeSetId`

Requests the uei code set ID (IR)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/requestUeiCodeSetId '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ir_requestueiprimarycodesetid"></a>
## `ir/requestUeiPrimaryCodeSetId`

`luna://com.webos.service.mrcu/ir/requestUeiPrimaryCodeSetId`

Requests the uei primary code set ID (IR)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/saveIrCodes '{}'
```

> Listed in rhinoswirl/webostv-research mrcu method table; descriptions blank there. Executable is /usr/sbin/lginput2 per that page.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.mrcu.md)

<a id="ir_sendueiircmd"></a>
## `ir/sendUeiIrCmd`

`luna://com.webos.service.mrcu/ir/sendUeiIrCmd`

Sends the uei IR cmd (IR)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/sendUeiIrCmd '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ir_setrepeatirctrl"></a>
## `ir/setRepeatIrCtrl`

`luna://com.webos.service.mrcu/ir/setRepeatIrCtrl`

Sets the repeat IR ctrl (IR)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/setRepeatIrCtrl '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ir_setsendirinterval"></a>
## `ir/setSendIrInterval`

`luna://com.webos.service.mrcu/ir/setSendIrInterval`

Sets the send IR interval (IR)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/setSendIrInterval '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ir_setstbpwrcontrol"></a>
## `ir/setStbPwrControl`

`luna://com.webos.service.mrcu/ir/setStbPwrControl`

Sets the stb pwr control (IR)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/setStbPwrControl '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ir_testirgeneration"></a>
## `ir/testIrGeneration`

`luna://com.webos.service.mrcu/ir/testIrGeneration`

Tests the IR generation (IR)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/ir/testIrGeneration '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ischeckingdb"></a>
## `isCheckingDB`

`luna://com.webos.service.mrcu/isCheckingDB`

Reports whether the checking DB is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/isCheckingDB '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isexistdbfile"></a>
## `isExistDbFile`

`luna://com.webos.service.mrcu/isExistDbFile`

Reports whether the exist db file is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/isExistDbFile '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="ispaired"></a>
## `isPaired`

`luna://com.webos.service.mrcu/isPaired`

Reports whether the paired is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/isPaired '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="magicblaster_getstatus"></a>
## `magicblaster/getStatus`

`luna://com.webos.service.mrcu/magicblaster/getStatus`

Returns the status (magicblaster)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/magicblaster/getStatus '{}'
```

> ACG groups: devices, mrcu.action, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="printbtlog"></a>
## `printBtLog`

`luna://com.webos.service.mrcu/printBtLog`

Prints the Bluetooth log.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/printBtLog '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="pushircodes"></a>
## `pushIrCodes`

`luna://com.webos.service.mrcu/pushIrCodes`

Pushes the IR codes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/pushIrCodes '{}'
```

> ACG groups: mrcu.action, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="reset"></a>
## `reset`

`luna://com.webos.service.mrcu/reset`

Resets the MRCU.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/reset '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="resetquaternion"></a>
## `resetQuaternion` ⚠️ DANGEROUS

`luna://com.webos.service.mrcu/resetQuaternion`

Resets the quaternion.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/resetQuaternion '{}'
```

> ACG groups: mrcu.action, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="saveircodes"></a>
## `saveIrCodes`

`luna://com.webos.service.mrcu/saveIrCodes`

Saves the IR codes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/saveIrCodes '{}'
```

> ACG groups: mrcu.action, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendcommand"></a>
## `sendCommand`

`luna://com.webos.service.mrcu/sendCommand`

Sends the command.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/sendCommand '{}'
```

> ACG groups: mrcu.action, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sensor_capturelog"></a>
## `sensor/captureLog`

`luna://com.webos.service.mrcu/sensor/captureLog`

Captures the log (sensor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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

Sets the cursor bounds (sensor)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

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

Returns the sensor type (sensor 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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

Sets the auto align.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setAutoAlign '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setcursorbounds"></a>
## `setCursorBounds`

`luna://com.webos.service.mrcu/setCursorBounds`

Sets the cursor bounds.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setCursorBounds '{}'
```

> ACG groups: mrcu.write, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sethotkeycursorpolicy"></a>
## `setHotkeyCursorPolicy`

`luna://com.webos.service.mrcu/setHotkeyCursorPolicy`

Sets the hotkey cursor policy.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setHotkeyCursorPolicy '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setpairinghistorykeycode"></a>
## `setPairingHistoryKeyCode`

`luna://com.webos.service.mrcu/setPairingHistoryKeyCode`

Sets the pairing history key code.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setPairingHistoryKeyCode '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setposition"></a>
## `setPosition`

`luna://com.webos.service.mrcu/setPosition`

Sets the position.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setPosition '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsensitivity"></a>
## `setSensitivity`

`luna://com.webos.service.mrcu/setSensitivity`

Sets the sensitivity.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setSensitivity '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsharedmemory"></a>
## `setSharedMemory`

`luna://com.webos.service.mrcu/setSharedMemory`

Sets the shared memory.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setSharedMemory '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsleepmode"></a>
## `setSleepMode`

`luna://com.webos.service.mrcu/setSleepMode`

Sets the sleep mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setSleepMode '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="setslidemode"></a>
## `setSlideMode`

`luna://com.webos.service.mrcu/setSlideMode`

Sets the slide mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setSlideMode '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setwakeupcondition"></a>
## `setWakeUpCondition`

`luna://com.webos.service.mrcu/setWakeUpCondition`

Sets the wake up condition.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/setWakeUpCondition '{}'
```

> ACG groups: mrcu.write, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startfirmwareupdate"></a>
## `startFirmwareUpdate` ⚠️ DANGEROUS

`luna://com.webos.service.mrcu/startFirmwareUpdate`

Starts the firmware update.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/startFirmwareUpdate '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="startpairing"></a>
## `startPairing`

`luna://com.webos.service.mrcu/startPairing`

Starts the pairing.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/startPairing '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="stoppairing"></a>
## `stopPairing`

`luna://com.webos.service.mrcu/stopPairing`

Stops the pairing.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/stopPairing '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribeaudiostatus"></a>
## `subscribeAudioStatus`

`luna://com.webos.service.mrcu/subscribeAudioStatus`

Subscribes to the audio status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/subscribeAudioStatus '{}'
```

> ACG groups: mrcu.subscribe, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscribedevicestatus"></a>
## `subscribeDeviceStatus`

`luna://com.webos.service.mrcu/subscribeDeviceStatus`

Subscribes to the device status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/subscribeDeviceStatus '{}'
```

> ACG groups: mrcu.subscribe, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscriberfstatus"></a>
## `subscribeRfStatus`

`luna://com.webos.service.mrcu/subscribeRfStatus`

Subscribes to the RF status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/subscribeRfStatus '{}'
```

> Seen via `ls-monitor -i com.webos.service.mrcu` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all, devices. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="test_checkbutton"></a>
## `test/checkButton`

`luna://com.webos.service.mrcu/test/checkButton`

Checks the button (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/checkButton '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_checkcursor"></a>
## `test/checkCursor`

`luna://com.webos.service.mrcu/test/checkCursor`

Checks the cursor (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/checkCursor '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_checktoneplusvoicebutton"></a>
## `test/checkTonePlusVoiceButton`

`luna://com.webos.service.mrcu/test/checkTonePlusVoiceButton`

Checks the tone plus voice button (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/checkTonePlusVoiceButton '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_checkwheel"></a>
## `test/checkWheel`

`luna://com.webos.service.mrcu/test/checkWheel`

Checks the wheel (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/checkWheel '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_confirmkeys"></a>
## `test/confirmKeys`

`luna://com.webos.service.mrcu/test/confirmKeys`

Handles the confirm keys (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/confirmKeys '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_connect"></a>
## `test/connect`

`luna://com.webos.service.mrcu/test/connect`

Connects the MRCU (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/connect '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_createvirtualmrcu"></a>
## `test/createVirtualMrcu`

`luna://com.webos.service.mrcu/test/createVirtualMrcu`

Creates the virtual MRCU (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/createVirtualMrcu '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_destroyvirtualmrcu"></a>
## `test/destroyVirtualMrcu`

`luna://com.webos.service.mrcu/test/destroyVirtualMrcu`

Handles the destroy virtual MRCU (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/destroyVirtualMrcu '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_gattconnect"></a>
## `test/gattConnect`

`luna://com.webos.service.mrcu/test/gattConnect`

Handles the GATT connect (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/gattConnect '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_gattdiscoverservices"></a>
## `test/gattDiscoverServices`

`luna://com.webos.service.mrcu/test/gattDiscoverServices`

Handles the GATT discover services (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/gattDiscoverServices '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_gattmonitorcharacteristics"></a>
## `test/gattMonitorCharacteristics`

`luna://com.webos.service.mrcu/test/gattMonitorCharacteristics`

Handles the GATT monitor characteristics (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/gattMonitorCharacteristics '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_gattwritecharacteristicvalue"></a>
## `test/gattWriteCharacteristicValue`

`luna://com.webos.service.mrcu/test/gattWriteCharacteristicValue`

Handles the GATT write characteristic value (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/gattWriteCharacteristicValue '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_gattwritedescriptorvalue"></a>
## `test/gattWriteDescriptorValue`

`luna://com.webos.service.mrcu/test/gattWriteDescriptorValue`

Handles the GATT write descriptor value (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/gattWriteDescriptorValue '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="test_getadapterstatus"></a>
## `test/getAdapterStatus`

`luna://com.webos.service.mrcu/test/getAdapterStatus`

Returns the adapter status (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/getAdapterStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_getdevicestatus"></a>
## `test/getDeviceStatus`

`luna://com.webos.service.mrcu/test/getDeviceStatus`

Returns the device status (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/getDeviceStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_gethidstatus"></a>
## `test/getHidStatus`

`luna://com.webos.service.mrcu/test/getHidStatus`

Returns the hid status (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/getHidStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_pair"></a>
## `test/pair`

`luna://com.webos.service.mrcu/test/pair`

Pairs the MRCU (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/pair '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_printdumppacket"></a>
## `test/printDumpPacket`

`luna://com.webos.service.mrcu/test/printDumpPacket`

Prints the dump packet (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/printDumpPacket '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_sendircommand"></a>
## `test/sendIrCommand`

`luna://com.webos.service.mrcu/test/sendIrCommand`

Sends the IR command (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/sendIrCommand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_startdiscovery"></a>
## `test/startDiscovery`

`luna://com.webos.service.mrcu/test/startDiscovery`

Starts the discovery (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/startDiscovery '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_startpairing"></a>
## `test/startPairing`

`luna://com.webos.service.mrcu/test/startPairing`

Starts the pairing (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/startPairing '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_subscribeotastatus"></a>
## `test/subscribeOTAStatus`

`luna://com.webos.service.mrcu/test/subscribeOTAStatus`

Subscribes to the OTA status (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/subscribeOTAStatus '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_subscribepairingstatus"></a>
## `test/subscribePairingStatus`

`luna://com.webos.service.mrcu/test/subscribePairingStatus`

Subscribes to the pairing status (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/subscribePairingStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_subscribesendircommand"></a>
## `test/subscribeSendIrCommand`

`luna://com.webos.service.mrcu/test/subscribeSendIrCommand`

Subscribes to the send IR command (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/subscribeSendIrCommand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_unpair"></a>
## `test/unpair`

`luna://com.webos.service.mrcu/test/unpair`

Unpairs the MRCU (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/test/unpair '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tests_runtvdevtc_25703"></a>
## `tests/runTVDEVTC_25703`

`luna://com.webos.service.mrcu/tests/runTVDEVTC_25703`

Runs the TVDEVTC 25703 (tests)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/tests/runTVDEVTC_25703 '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="tests_subscribetvdevtc_25703"></a>
## `tests/subscribeTVDEVTC_25703`

`luna://com.webos.service.mrcu/tests/subscribeTVDEVTC_25703`

Subscribes to the TVDEVTC 25703 (tests)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

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
- **Confidence:** documented

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
- **Confidence:** documented

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
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.mrcu/voice/subscribeDeviceStatus '{}'
```

> Listed in rhinoswirl/webostv-research mrcu method table; descriptions blank there. Executable is /usr/sbin/lginput2 per that page.

Sources: [1](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.mrcu.md)
