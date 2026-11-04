# Input & Keys

152 methods.  [Back to index](../../README.md#categories)

| URI | Access | Description |
|---|---|---|
| [`luna://com.webos.service.cec/args`](../services/com.webos.service.cec.md#args) | unknown | Contains list of arguments passed to command. |
| [`luna://com.webos.service.cec/command`](../services/com.webos.service.cec.md#command) | unknown | Command to execute on destination HDMI CEC device. |
| [`luna://com.webos.service.cec/devices`](../services/com.webos.service.cec.md#devices) | unknown | Contains information about connected HDMI CEC devices. |
| [`luna://com.webos.service.cec/getConfig`](../services/com.webos.service.cec.md#getconfig) | public | Gets the value of the specified input configuration. |
| [`luna://com.webos.service.cec/listAdapters`](../services/com.webos.service.cec.md#listadapters) | public | Searches CEC adapters from system and list all the identified local CEC adapters. |
| [`luna://com.webos.service.cec/scan`](../services/com.webos.service.cec.md#scan) | public | Scans the CEC bus and provides information of the connected HDMI CEC devices. |
| [`luna://com.webos.service.cec/sendCommand`](../services/com.webos.service.cec.md#sendcommand) | public | Sends the input command to destination HDMI CEC devices connected on CEC bus. |
| [`luna://com.webos.service.cec/setConfig`](../services/com.webos.service.cec.md#setconfig) | public | Sets the input configuration. |
| [`luna://com.webos.service.eim/addDevice`](../services/com.webos.service.eim.md#adddevice) | public | Registers an app as a selectable input (appinfo needs "supportGIP": true) |
| [`luna://com.webos.service.eim/blockInputPopup`](../services/com.webos.service.eim.md#blockinputpopup) | public | Registered on eim (name only; presumably suppresses the new-input popup) |
| [`luna://com.webos.service.eim/cec/getCECPowerSyncStatus`](../services/com.webos.service.eim.md#cec_getcecpowersyncstatus) | private | HDMI-CEC state query |
| [`luna://com.webos.service.eim/cec/getCECState`](../services/com.webos.service.eim.md#cec_getcecstate) | private | HDMI-CEC state query |
| [`luna://com.webos.service.eim/cec/sendKeyEvent`](../services/com.webos.service.eim.md#cec_sendkeyevent) | private | Sends an HDMI-CEC key event |
| [`luna://com.webos.service.eim/deleteDevice`](../services/com.webos.service.eim.md#deletedevice) | public | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`luna://com.webos.service.eim/getAllInputStatus`](../services/com.webos.service.eim.md#getallinputstatus) | public | Lists all inputs (HDMI 1-4 with labels, CEC sub-devices, ARC) with connection state |
| [`luna://com.webos.service.eim/getConnectionStatus`](../services/com.webos.service.eim.md#getconnectionstatus) | public | Method registered by com.webos.service.eim (root category) |
| [`luna://com.webos.service.eim/getCurrentInput`](../services/com.webos.service.eim.md#getcurrentinput) | public | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`luna://com.webos.service.eim/getDeviceInfo`](../services/com.webos.service.eim.md#getdeviceinfo) | public | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`luna://com.webos.service.eim/getHDMISignalInfo`](../services/com.webos.service.eim.md#gethdmisignalinfo) | private | HDMI signal details (resolution, VRR/ALLM/HDR, cable presence) |
| [`luna://com.webos.service.eim/getInputStatus`](../services/com.webos.service.eim.md#getinputstatus) | public | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`luna://com.webos.service.eim/getLastInput`](../services/com.webos.service.eim.md#getlastinput) | public | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`luna://com.webos.service.eim/getTotalDeviceList`](../services/com.webos.service.eim.md#gettotaldevicelist) | public | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`luna://com.webos.service.eim/registerAppToBlockNoti`](../services/com.webos.service.eim.md#registerapptoblocknoti) | public | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`luna://com.webos.service.eim/setChosenDevice`](../services/com.webos.service.eim.md#setchosendevice) | public | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`luna://com.webos.service.eim/setDeviceInfo`](../services/com.webos.service.eim.md#setdeviceinfo) | ssap | Set HDMI input device icon/label (also used to switch an input between PC and non-PC mode) |
| [`luna://com.webos.service.eim/setLastInput`](../services/com.webos.service.eim.md#setlastinput) | private | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`luna://com.webos.service.eim/updateVirtualDevice`](../services/com.webos.service.eim.md#updatevirtualdevice) | private | External Input Manager method (listed in webosbrew eim.yml; params undocumented there) |
| [`luna://com.webos.service.ime/deleteCharacters`](../services/com.webos.service.ime.md#deletecharacters) | public | Delete characters in the focused text field |
| [`luna://com.webos.service.ime/insertText`](../services/com.webos.service.ime.md#inserttext) | public | Insert (or replace) text in the focused text field |
| [`luna://com.webos.service.ime/registerRemoteKeyboard`](../services/com.webos.service.ime.md#registerremotekeyboard) | public | Subscribe to remote-keyboard (text field focus) events |
| [`luna://com.webos.service.ime/sendEnterKey`](../services/com.webos.service.ime.md#sendenterkey) | public | Send Enter to the on-screen keyboard/text field |
| [`luna://com.webos.service.irdbmanager/addDevice`](../services/com.webos.service.irdbmanager.md#adddevice) | private | IR blaster database method: addDevice |
| [`luna://com.webos.service.irdbmanager/delDevice`](../services/com.webos.service.irdbmanager.md#deldevice) | private | IR blaster database method: delDevice |
| [`luna://com.webos.service.irdbmanager/getIrData`](../services/com.webos.service.irdbmanager.md#getirdata) | private | IR blaster database method: getIrData |
| [`luna://com.webos.service.irdbmanager/getIrDb`](../services/com.webos.service.irdbmanager.md#getirdb) | private | IR blaster database method: getIrDb |
| [`luna://com.webos.service.irdbmanager/getManufacturerList`](../services/com.webos.service.irdbmanager.md#getmanufacturerlist) | private | IR blaster database method: getManufacturerList |
| [`luna://com.webos.service.irdbmanager/isSupported`](../services/com.webos.service.irdbmanager.md#issupported) | private | IR blaster database method: isSupported |
| [`luna://com.webos.service.irdbmanager/requestSettopPowerIr`](../services/com.webos.service.irdbmanager.md#requestsettoppowerir) | private | IR blaster database method: requestSettopPowerIr |
| [`luna://com.webos.service.irdbmanager/setChannel`](../services/com.webos.service.irdbmanager.md#setchannel) | private | IR blaster database method: setChannel |
| [`luna://com.webos.service.mrcu/activateMotionSensor`](../services/com.webos.service.mrcu.md#activatemotionsensor) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/activateMrcu`](../services/com.webos.service.mrcu.md#activatemrcu) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/createAlert`](../services/com.webos.service.mrcu.md#createalert) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/createToast`](../services/com.webos.service.mrcu.md#createtoast) | private | Shows a toast via the Magic Remote control service |
| [`luna://com.webos.service.mrcu/cursor/setAutoAlign`](../services/com.webos.service.mrcu.md#cursor_setautoalign) | public | Method registered by com.webos.service.mrcu (category '/cursor') |
| [`luna://com.webos.service.mrcu/cursor/setPosition`](../services/com.webos.service.mrcu.md#cursor_setposition) | public | Method registered by com.webos.service.mrcu (category '/cursor') |
| [`luna://com.webos.service.mrcu/cursor/setSensitivity`](../services/com.webos.service.mrcu.md#cursor_setsensitivity) | private | Method registered by com.webos.service.mrcu (category '/cursor') |
| [`luna://com.webos.service.mrcu/cursor/setSlideMode`](../services/com.webos.service.mrcu.md#cursor_setslidemode) | public | Method registered by com.webos.service.mrcu (category '/cursor') |
| [`luna://com.webos.service.mrcu/cursor/setWakeUpCondition`](../services/com.webos.service.mrcu.md#cursor_setwakeupcondition) | public | Method registered by com.webos.service.mrcu (category '/cursor') |
| [`luna://com.webos.service.mrcu/enableAudioSinkMode`](../services/com.webos.service.mrcu.md#enableaudiosinkmode) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/enableDualPairing`](../services/com.webos.service.mrcu.md#enabledualpairing) | public | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/enableLoggingMotion`](../services/com.webos.service.mrcu.md#enableloggingmotion) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/enableMotionHistory`](../services/com.webos.service.mrcu.md#enablemotionhistory) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/enablePrintRfStatus`](../services/com.webos.service.mrcu.md#enableprintrfstatus) | public | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getAPIVersion`](../services/com.webos.service.mrcu.md#getapiversion) | public | Gets the MRCU API version. |
| [`luna://com.webos.service.mrcu/getBtServiceAvailable`](../services/com.webos.service.mrcu.md#getbtserviceavailable) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getButtonHistory`](../services/com.webos.service.mrcu.md#getbuttonhistory) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getConnectionStatus`](../services/com.webos.service.mrcu.md#getconnectionstatus) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getCursorHistory`](../services/com.webos.service.mrcu.md#getcursorhistory) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getDataDelivery`](../services/com.webos.service.mrcu.md#getdatadelivery) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getDeviceInfo`](../services/com.webos.service.mrcu.md#getdeviceinfo) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getDoingOtaStatus`](../services/com.webos.service.mrcu.md#getdoingotastatus) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getMotionEngineStatus`](../services/com.webos.service.mrcu.md#getmotionenginestatus) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getMrcuCmdHistory`](../services/com.webos.service.mrcu.md#getmrcucmdhistory) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getPairingHistory`](../services/com.webos.service.mrcu.md#getpairinghistory) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getPairingHistoryCount`](../services/com.webos.service.mrcu.md#getpairinghistorycount) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getPairingStatus`](../services/com.webos.service.mrcu.md#getpairingstatus) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/getTraceLogStatus`](../services/com.webos.service.mrcu.md#gettracelogstatus) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/hid/connect`](../services/com.webos.service.mrcu.md#hid_connect) | private | Method registered by com.webos.service.mrcu (category '/hid') |
| [`luna://com.webos.service.mrcu/hid/disconnect`](../services/com.webos.service.mrcu.md#hid_disconnect) | private | Method registered by com.webos.service.mrcu (category '/hid') |
| [`luna://com.webos.service.mrcu/hid/subscribeDevicesStatus`](../services/com.webos.service.mrcu.md#hid_subscribedevicesstatus) | private | Method registered by com.webos.service.mrcu (category '/hid') |
| [`luna://com.webos.service.mrcu/ir/eraseIrCodes`](../services/com.webos.service.mrcu.md#ir_eraseircodes) | private | Magic Remote service method ir/eraseIrCodes (listed in community research table) |
| [`luna://com.webos.service.mrcu/ir/getCurrentSavedCodeSetId`](../services/com.webos.service.mrcu.md#ir_getcurrentsavedcodesetid) | private | Method registered by com.webos.service.mrcu (category '/ir') |
| [`luna://com.webos.service.mrcu/ir/getIrCableConnection`](../services/com.webos.service.mrcu.md#ir_getircableconnection) | private | Method registered by com.webos.service.mrcu (category '/ir') |
| [`luna://com.webos.service.mrcu/ir/getUeiCmdResponse`](../services/com.webos.service.mrcu.md#ir_getueicmdresponse) | private | Method registered by com.webos.service.mrcu (category '/ir') |
| [`luna://com.webos.service.mrcu/ir/pushIrCodes`](../services/com.webos.service.mrcu.md#ir_pushircodes) | private | Magic Remote service method ir/pushIrCodes (listed in community research table) |
| [`luna://com.webos.service.mrcu/ir/requestUeiCodeSetId`](../services/com.webos.service.mrcu.md#ir_requestueicodesetid) | private | Method registered by com.webos.service.mrcu (category '/ir') |
| [`luna://com.webos.service.mrcu/ir/requestUeiPrimaryCodeSetId`](../services/com.webos.service.mrcu.md#ir_requestueiprimarycodesetid) | private | Method registered by com.webos.service.mrcu (category '/ir') |
| [`luna://com.webos.service.mrcu/ir/saveIrCodes`](../services/com.webos.service.mrcu.md#ir_saveircodes) | private | Magic Remote service method ir/saveIrCodes (listed in community research table) |
| [`luna://com.webos.service.mrcu/ir/sendUeiIrCmd`](../services/com.webos.service.mrcu.md#ir_sendueiircmd) | private | Method registered by com.webos.service.mrcu (category '/ir') |
| [`luna://com.webos.service.mrcu/isExistDbFile`](../services/com.webos.service.mrcu.md#isexistdbfile) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/isPaired`](../services/com.webos.service.mrcu.md#ispaired) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/printBtLog`](../services/com.webos.service.mrcu.md#printbtlog) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/reset`](../services/com.webos.service.mrcu.md#reset) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/sensor/getSensorData`](../services/com.webos.service.mrcu.md#sensor_getsensordata) | public | Subscribes to sensor data (older API). |
| [`luna://com.webos.service.mrcu/sensor/resetQuaternion`](../services/com.webos.service.mrcu.md#sensor_resetquaternion) | public | Resets quaternion data. |
| [`luna://com.webos.service.mrcu/sensor/setCursorBounds`](../services/com.webos.service.mrcu.md#sensor_setcursorbounds) | private | Method registered by com.webos.service.mrcu (category '/sensor') |
| [`luna://com.webos.service.mrcu/sensor2/cancelSensorDataSubscribe`](../services/com.webos.service.mrcu.md#sensor2_cancelsensordatasubscribe) | public | Cancels the current sensor subscription. |
| [`luna://com.webos.service.mrcu/sensor2/getSensorEventData`](../services/com.webos.service.mrcu.md#sensor2_getsensoreventdata) | public | Subscribes to magic remote sensor data. |
| [`luna://com.webos.service.mrcu/sensor2/getSensorInterval`](../services/com.webos.service.mrcu.md#sensor2_getsensorinterval) | public | Min/max sensor callback interval. |
| [`luna://com.webos.service.mrcu/sensor2/getSensorState`](../services/com.webos.service.mrcu.md#sensor2_getsensorstate) | public | Status of the remote motion sensor. |
| [`luna://com.webos.service.mrcu/sensor2/resetQuaternion`](../services/com.webos.service.mrcu.md#sensor2_resetquaternion) | public | Resets the quaternion sensor. |
| [`luna://com.webos.service.mrcu/sensor2/setSensorInterval`](../services/com.webos.service.mrcu.md#sensor2_setsensorinterval) | public | Changes the sensor callback interval (msec). |
| [`luna://com.webos.service.mrcu/setHotkeyCursorPolicy`](../services/com.webos.service.mrcu.md#sethotkeycursorpolicy) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/setPairingHistoryKeyCode`](../services/com.webos.service.mrcu.md#setpairinghistorykeycode) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/setSleepMode`](../services/com.webos.service.mrcu.md#setsleepmode) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/startFirmwareUpdate`](../services/com.webos.service.mrcu.md#startfirmwareupdate) | private | Method registered by com.webos.service.mrcu (root category) ⚠️ |
| [`luna://com.webos.service.mrcu/startPairing`](../services/com.webos.service.mrcu.md#startpairing) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/subscribeRfStatus`](../services/com.webos.service.mrcu.md#subscriberfstatus) | private | Method registered by com.webos.service.mrcu (root category) |
| [`luna://com.webos.service.mrcu/voice/sendCommand`](../services/com.webos.service.mrcu.md#voice_sendcommand) | private | Magic Remote service method voice/sendCommand (listed in community research table) |
| [`luna://com.webos.service.mrcu/voice/setSharedMemory`](../services/com.webos.service.mrcu.md#voice_setsharedmemory) | private | Magic Remote service method voice/setSharedMemory (listed in community research table) |
| [`luna://com.webos.service.mrcu/voice/subscribeAudioStatus`](../services/com.webos.service.mrcu.md#voice_subscribeaudiostatus) | private | Magic Remote service method voice/subscribeAudioStatus (listed in community research table) |
| [`luna://com.webos.service.mrcu/voice/subscribeDeviceStatus`](../services/com.webos.service.mrcu.md#voice_subscribedevicestatus) | private | Magic Remote service method voice/subscribeDeviceStatus (listed in community research table) |
| [`luna://com.webos.service.peripheralmanager/config`](../services/com.webos.service.peripheralmanager.md#config) | unknown | Configurations to be set for the opened UART Interface. |
| [`luna://com.webos.service.peripheralmanager/gpio/close`](../services/com.webos.service.peripheralmanager.md#gpio_close) | public | Closes the opened GPIO pin, so that the pin is available for other applications to use. |
| [`luna://com.webos.service.peripheralmanager/gpio/getDirection`](../services/com.webos.service.peripheralmanager.md#gpio_getdirection) | public | Returns the direction of the required GPIO pin. |
| [`luna://com.webos.service.peripheralmanager/gpio/getPollingFd`](../services/com.webos.service.peripheralmanager.md#gpio_getpollingfd) | public | Returns the file descriptor for the GPIO pin specified in the input. |
| [`luna://com.webos.service.peripheralmanager/gpio/getValue`](../services/com.webos.service.peripheralmanager.md#gpio_getvalue) | public | Reads the value of the opened input pin |
| [`luna://com.webos.service.peripheralmanager/gpio/list`](../services/com.webos.service.peripheralmanager.md#gpio_list) | public | Provides the list of available GPIO pins in the target hardware. |
| [`luna://com.webos.service.peripheralmanager/gpio/open`](../services/com.webos.service.peripheralmanager.md#gpio_open) | public | Opens the GPIO pin, if not already opened by other applications. |
| [`luna://com.webos.service.peripheralmanager/gpio/setDirection`](../services/com.webos.service.peripheralmanager.md#gpio_setdirection) | public | Sets the direction of the GPIO pin to input or output |
| [`luna://com.webos.service.peripheralmanager/gpio/setValue`](../services/com.webos.service.peripheralmanager.md#gpio_setvalue) | public | Sets the value of the opened output pin to "low" or "high" |
| [`luna://com.webos.service.peripheralmanager/gpioList`](../services/com.webos.service.peripheralmanager.md#gpiolist) | unknown | Provides the list of available GPIO pins with the status. |
| [`luna://com.webos.service.peripheralmanager/i2c/close`](../services/com.webos.service.peripheralmanager.md#i2c_close) | public | Closes the opened I2C device connected to the bus. |
| [`luna://com.webos.service.peripheralmanager/i2c/getPollingFd`](../services/com.webos.service.peripheralmanager.md#i2c_getpollingfd) | public | Returns the file descriptor for the I2c if specified in the input. |
| [`luna://com.webos.service.peripheralmanager/i2c/list`](../services/com.webos.service.peripheralmanager.md#i2c_list) | public | Provides the list of available I2C buses. |
| [`luna://com.webos.service.peripheralmanager/i2c/open`](../services/com.webos.service.peripheralmanager.md#i2c_open) | public | Opens the device connected to I2C bus. |
| [`luna://com.webos.service.peripheralmanager/i2c/read`](../services/com.webos.service.peripheralmanager.md#i2c_read) | public | Reads data from the I2C device. |
| [`luna://com.webos.service.peripheralmanager/i2c/readRegBuffer`](../services/com.webos.service.peripheralmanager.md#i2c_readregbuffer) | public | Reads a value from the register buffer. |
| [`luna://com.webos.service.peripheralmanager/i2c/readRegByte`](../services/com.webos.service.peripheralmanager.md#i2c_readregbyte) | public | Reads a byte from a given register of the I2C device. |
| [`luna://com.webos.service.peripheralmanager/i2c/readRegWord`](../services/com.webos.service.peripheralmanager.md#i2c_readregword) | public | Reads a word from the register of the i2c device. |
| [`luna://com.webos.service.peripheralmanager/i2c/write`](../services/com.webos.service.peripheralmanager.md#i2c_write) | public | Writes the data to the opened I2C device. |
| [`luna://com.webos.service.peripheralmanager/i2c/writeRegBuffer`](../services/com.webos.service.peripheralmanager.md#i2c_writeregbuffer) | public | Writes data to the register buffer of the connected I2C device. |
| [`luna://com.webos.service.peripheralmanager/i2c/writeRegByte`](../services/com.webos.service.peripheralmanager.md#i2c_writeregbyte) | public | Writes a byte from a given register. |
| [`luna://com.webos.service.peripheralmanager/i2c/writeRegWord`](../services/com.webos.service.peripheralmanager.md#i2c_writeregword) | public | Writes a word to the register of the I2C device. |
| [`luna://com.webos.service.peripheralmanager/i2cBusList`](../services/com.webos.service.peripheralmanager.md#i2cbuslist) | unknown | List of I2C buses and the slave address. |
| [`luna://com.webos.service.peripheralmanager/spi/close`](../services/com.webos.service.peripheralmanager.md#spi_close) | public | Closes the opened SPI bus, for other applications to use. |
| [`luna://com.webos.service.peripheralmanager/spi/list`](../services/com.webos.service.peripheralmanager.md#spi_list) | public | Provides the list of available SPI buses in the target hardware. |
| [`luna://com.webos.service.peripheralmanager/spi/open`](../services/com.webos.service.peripheralmanager.md#spi_open) | public | Opens the SPI bus, if not already opened by other applications. |
| [`luna://com.webos.service.peripheralmanager/spi/setBitJustification`](../services/com.webos.service.peripheralmanager.md#spi_setbitjustification) | public | Sets bit justification of the data transferred in the SPI bus i.e MSB-first or LSB-first |
| [`luna://com.webos.service.peripheralmanager/spi/setBitsPerWord`](../services/com.webos.service.peripheralmanager.md#spi_setbitsperword) | public | Configures the number of bits in each SPI transfer word. |
| [`luna://com.webos.service.peripheralmanager/spi/setDelay`](../services/com.webos.service.peripheralmanager.md#spi_setdelay) | public | Sets the delay after a transfer before the chip select status is changed and the next transfer is triggered. |
| [`luna://com.webos.service.peripheralmanager/spi/setFrequency`](../services/com.webos.service.peripheralmanager.md#spi_setfrequency) | public | Sets the rate of data transfer (Hz) |
| [`luna://com.webos.service.peripheralmanager/spi/setMode`](../services/com.webos.service.peripheralmanager.md#spi_setmode) | public | Sets modes that correspond to the possible clocking configurations. |
| [`luna://com.webos.service.peripheralmanager/spi/transfer`](../services/com.webos.service.peripheralmanager.md#spi_transfer) | public | Opens a connection for receiving/transmitting data to/from a particular slave device. |
| [`luna://com.webos.service.peripheralmanager/spi/writeBuffer`](../services/com.webos.service.peripheralmanager.md#spi_writebuffer) | public | Writes a chunk of data to SPI device. |
| [`luna://com.webos.service.peripheralmanager/spi/writeByte`](../services/com.webos.service.peripheralmanager.md#spi_writebyte) | public | Writes a byte of data to the SPI device connected to the bus. |
| [`luna://com.webos.service.peripheralmanager/uart/close`](../services/com.webos.service.peripheralmanager.md#uart_close) | public | Closes the opened UART device so that the interface is available for other apps to use. |
| [`luna://com.webos.service.peripheralmanager/uart/getBaudrate`](../services/com.webos.service.peripheralmanager.md#uart_getbaudrate) | public | Reads the baud rate of the opened UART device. |
| [`luna://com.webos.service.peripheralmanager/uart/getPollingFd`](../services/com.webos.service.peripheralmanager.md#uart_getpollingfd) | public | Returns the file descriptor for the UART interface specified in the input. |
| [`luna://com.webos.service.peripheralmanager/uart/list`](../services/com.webos.service.peripheralmanager.md#uart_list) | public | Provides the list of available UART interfaces in the target hardware. |
| [`luna://com.webos.service.peripheralmanager/uart/open`](../services/com.webos.service.peripheralmanager.md#uart_open) | public | Opens the UART interface, if not already opened by other applications. |
| [`luna://com.webos.service.peripheralmanager/uart/read`](../services/com.webos.service.peripheralmanager.md#uart_read) | public | Reads the data from the opened UART device. |
| [`luna://com.webos.service.peripheralmanager/uart/setBaudrate`](../services/com.webos.service.peripheralmanager.md#uart_setbaudrate) | public | Sets the baud rate of the opened UART device to the required value. |
| [`luna://com.webos.service.peripheralmanager/uart/write`](../services/com.webos.service.peripheralmanager.md#uart_write) | public | Writes the data to the opened UART device. |
| [`luna://com.webos.service.peripheralmanager/uartList`](../services/com.webos.service.peripheralmanager.md#uartlist) | unknown | Provide List of UART interfaces along with the status |
| [`luna://com.webos.service.voiceinput/getDevices`](../services/com.webos.service.voiceinput.md#getdevices) | private | Method registered by com.webos.service.voiceinput (root category) |
| [`luna://com.webos.service.voiceinput/respondEvent`](../services/com.webos.service.voiceinput.md#respondevent) | private | Method registered by com.webos.service.voiceinput (root category) |
| [`luna://com.webos.service.voiceinput/restartTimer`](../services/com.webos.service.voiceinput.md#restarttimer) | private | Method registered by com.webos.service.voiceinput (root category) |
| [`luna://com.webos.service.voiceinput/startStreaming`](../services/com.webos.service.voiceinput.md#startstreaming) | private | Method registered by com.webos.service.voiceinput (root category) |
| [`luna://com.webos.service.voiceinput/stopStreaming`](../services/com.webos.service.voiceinput.md#stopstreaming) | private | Method registered by com.webos.service.voiceinput (root category) |
| [`ssap://tv/getExternalInputList`](../services/ssap_tv.md#getexternalinputlist) | ssap | List external inputs |
| [`ssap://tv/switchInput`](../services/ssap_tv.md#switchinput) | ssap | Switch to input |
