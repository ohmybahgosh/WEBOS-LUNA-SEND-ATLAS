# `com.webos.service.bluetooth2`

258 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`a2dp/connect`](#a2dp_connect) | public | yes | bluetooth | Connects to the A2DP profile on the specified remote device. |
| [`a2dp/disableDelayReporting`](#a2dp_disabledelayreporting) | public |  | bluetooth | Disables the AVDTP delay reporting. |
| [`a2dp/disconnect`](#a2dp_disconnect) | public |  | bluetooth | Drops the connection to the given remote device on the A2DP profile. |
| [`a2dp/enableDelayReporting`](#a2dp_enabledelayreporting) | public |  | bluetooth | Enables the AVDTP delay reporting. |
| [`a2dp/getDelayReportingTime`](#a2dp_getdelayreportingtime) | public | yes | bluetooth | Gets the AVDTP delay from a remote A2DP device, whenever the AVDTP delay is changed. |
| [`a2dp/getStatus`](#a2dp_getstatus) | public | yes | bluetooth | Returns the status of the A2DP connection to a remote device. Note: If the address input parameter is not specified, the method will return  |
| [`a2dp/internal/disable`](#a2dp_internal_disable) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`a2dp/internal/enable`](#a2dp_internal_enable) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`a2dp/internal/getAudioPath`](#a2dp_internal_getaudiopath) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`a2dp/internal/getCodecConfiguration`](#a2dp_internal_getcodecconfiguration) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`a2dp/internal/setCodecConfiguration`](#a2dp_internal_setcodecconfiguration) | private |  | bluetooth | Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`a2dp/internal/setDualAudioMode`](#a2dp_internal_setdualaudiomode) | private |  | audio | Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`a2dp/internal/setLatency`](#a2dp_internal_setlatency) | public |  | bluetooth | Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`a2dp/internal/setSbcEncoderBitpool`](#a2dp_internal_setsbcencoderbitpool) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`a2dp/internal/startStreaming`](#a2dp_internal_startstreaming) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`a2dp/internal/stopStreaming`](#a2dp_internal_stopstreaming) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`a2dp/internal/toggle_left_right`](#a2dp_internal_toggle_left_right) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`adapter/awaitPairingRequests`](#adapter_awaitpairingrequests) | public | yes | bluetooth | Awaits incoming pairing requests on the default Bluetooth adapter (only) by setting its state to be pairable. The caller must subscribe to t |
| [`adapter/cancelDiscovery`](#adapter_canceldiscovery) | public |  | bluetooth | Cancels discovering the remote Bluetooth devices. Note: Discovery of a specific adapter can be canceled based on the adapter address passed. |
| [`adapter/cancelPairing`](#adapter_cancelpairing) | public |  | bluetooth | Cancels the pairing request with a remote device, either incoming or outgoing. Sends a success response immediately. Once the SIL (Stack Int |
| [`adapter/getStatus`](#adapter_getstatus) | public | yes | bluetooth | Returns the status information about the Bluetooth adapters available in the system. |
| [`adapter/internal/getKeepAliveStatus`](#adapter_internal_getkeepalivestatus) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`adapter/internal/getTraceStatus`](#adapter_internal_gettracestatus) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`adapter/internal/getWoBleStatus`](#adapter_internal_getwoblestatus) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`adapter/internal/sendHciCommand`](#adapter_internal_sendhcicommand) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only ⚠️ |
| [`adapter/internal/setDutMode`](#adapter_internal_setdutmode) | private |  | bluetooth | Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`adapter/internal/setKeepAlive`](#adapter_internal_setkeepalive) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`adapter/internal/setTrace`](#adapter_internal_settrace) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`adapter/internal/setULLMode`](#adapter_internal_setullmode) | private |  | bluetooth | Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`adapter/internal/setWoBle`](#adapter_internal_setwoble) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`adapter/internal/setWoBleTriggerDevices`](#adapter_internal_setwobletriggerdevices) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`adapter/internal/startDiscovery`](#adapter_internal_startdiscovery) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`adapter/pair`](#adapter_pair) | public | yes | bluetooth | Pairs a specific remote Bluetooth device with a specific Bluetooth adapter. The caller must subscribe to this method. Only one pairing reque |
| [`adapter/queryAvailable`](#adapter_queryavailable) | public | yes | bluetooth | Returns the information on the Bluetooth adapters currently available in the system. The caller subscribes to this method to get informed of |
| [`adapter/setState`](#adapter_setstate) | public |  | bluetooth | Sets the state of the specified Bluetooth adapter. |
| [`adapter/startDiscovery`](#adapter_startdiscovery) | public |  | bluetooth | Starts discovering the remote Bluetooth devices. Note: Discovery continues until adapter/cancelDiscovery is called or for bluetooth2AdapterS |
| [`adapter/supplyPasskey`](#adapter_supplypasskey) | public |  | bluetooth | Supplies the user-entered passkey. Note: The passkey is entered when adapter/pair sends a subscription response containing request:enterPass |
| [`adapter/supplyPasskeyConfirmation`](#adapter_supplypasskeyconfirmation) | public |  | bluetooth | Supplies the user's confirmation for the passkey. Note: The user confirms the passkey when adapter/pair sends a subscription response contai |
| [`adapter/supplyPinCode`](#adapter_supplypincode) | public |  | bluetooth | Supplies the user-entered PIN code. Note: The PIN code is entered when adapter/pair sends a subscription response containing request:enterPi |
| [`adapter/unpair`](#adapter_unpair) | public |  | bluetooth | Disconnects from the paired remote device. Note: All pairing information about the remote device will be removed and any open connections wi |
| [`avrcp/awaitMediaMetaDataRequest`](#avrcp_awaitmediametadatarequest) | public | yes | bluetooth | Awaits incoming media metadata requests from remote devices. This method is available only for TG (Target). The method just listens the requ |
| [`avrcp/awaitMediaPlayStatusRequest`](#avrcp_awaitmediaplaystatusrequest) | public | yes | bluetooth | Awaits the incoming media play status requests from remote devices. This method is available only for the TG (Target). The avrcp/awaitMediaP |
| [`avrcp/browse/addToNowPlaying`](#avrcp_browse_addtonowplaying) | public |  | bluetooth | Adds the browsed item to the current playing list. Note : When user selects a playable item (playable is set to true for the item in the get |
| [`avrcp/browse/changePath`](#avrcp_browse_changepath) | public |  | bluetooth | Navigates the virtual filesystem presented by the remote media player. This API can be called to change to a specific folder for browsing. " |
| [`avrcp/browse/getCurrentFolder`](#avrcp_browse_getcurrentfolder) | public | yes | bluetooth | Gets the current folder in the media player's virtual filesystem presented by AVRCP TG which can be browsed for the media content. Example:  |
| [`avrcp/browse/getFolderItems`](#avrcp_browse_getfolderitems) | public |  | bluetooth | Gets the items in the current folder of the media player's virtual filesystem presented by AVRCP TG. It takes startIndex and endIndex as arg |
| [`avrcp/browse/getNumberOfItems`](#avrcp_browse_getnumberofitems) | public |  | bluetooth | Retrieves the total number of items in the current folder of the media player's virtual file system presented by the AVRCP TG. |
| [`avrcp/browse/playItem`](#avrcp_browse_playitem) | public |  | bluetooth | Plays the browsed item. Note : When user selects a playable item (playable is set to true for the item in the getFolderItems response) among |
| [`avrcp/browse/search`](#avrcp_browse_search) | public |  | bluetooth | Searches an item in the current browsing folder (and its sub folders) using a search string. Note : The API succeeds only if the player is s |
| [`avrcp/connect`](#avrcp_connect) | public | yes | bluetooth | Opens an AVRCP connection to a remote Bluetooth device. |
| [`avrcp/disconnect`](#avrcp_disconnect) | public |  | bluetooth | Drops the connection to the given remote device on the AVRCP profile. |
| [`avrcp/getMediaMetaData`](#avrcp_getmediametadata) | public | yes | bluetooth | Gets media metadata of the target from remote devices connected via AVRCP 1.3 profile. |
| [`avrcp/getMediaPlayStatus`](#avrcp_getmediaplaystatus) | public | yes | bluetooth | Gets the media metadata of the target from remote devices connected via AVRCP 1.3 profile. |
| [`avrcp/getPlayerApplicationSettings`](#avrcp_getplayerapplicationsettings) | public | yes | bluetooth | Gets the player application settings value. |
| [`avrcp/getPlayerInfo`](#avrcp_getplayerinfo) | public | yes | bluetooth | Returns the information of the media players available that is received from AVRCP TG (AVRCP Target). Subscription response will be received |
| [`avrcp/getRemoteVolume`](#avrcp_getremotevolume) | public | yes | bluetooth | Gets the volume of the remote device. Note: The method supports 'Volume Changed Notification' only. |
| [`avrcp/getStatus`](#avrcp_getstatus) | public | yes | bluetooth | Returns the status of an AVRCP connection to a remote Bluetooth device. |
| [`avrcp/internal/disable`](#avrcp_internal_disable) | public |  | bluetooth | Disables the profile and role of AVRCP. |
| [`avrcp/internal/enable`](#avrcp_internal_enable) | public |  | bluetooth | Enables the profile and the role of AVRCP. |
| [`avrcp/internal/getRemoteBattery`](#avrcp_internal_getremotebattery) | public |  | bluetooth | Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`avrcp/internal/getRemoteFeatures`](#avrcp_internal_getremotefeatures) | public |  | bluetooth | Gets the remote AVRCP's features. |
| [`avrcp/internal/getSupportedNotificationEvents`](#avrcp_internal_getsupportednotificationevents) | public | yes | bluetooth | Gets the remote AVRCP's supported notification events. |
| [`avrcp/notifyMediaPlayStatus`](#avrcp_notifymediaplaystatus) | public |  | bluetooth | Enables the AVRCP target to inform the AVRCP controller about the change in media play status or position without controller requesting for  |
| [`avrcp/receivePassThroughCommand`](#avrcp_receivepassthroughcommand) | public | yes | bluetooth | Receives PATH THROUGH command from CT to TG. Note: The PASS THROUGH command is used to transfer user operation information from a CT (Contro |
| [`avrcp/receiveRegisterNotificationAbsoluteVolume`](#avrcp_receiveregisternotificationabsolutevolume) | public |  | notifications | Method on com.webos.service.bluetooth2 (from on-device permission registry; parameters undocumented). |
| [`avrcp/registerNotificationAbsoluteVolumeResponse`](#avrcp_registernotificationabsolutevolumeresponse) | public |  | notifications | Method on com.webos.service.bluetooth2 (from on-device permission registry; parameters undocumented). |
| [`avrcp/sendPassThroughCommand`](#avrcp_sendpassthroughcommand) | public |  | bluetooth | Sends PASS THROUGH command from CT (Controller) to TG (Target). Note: The PASS THROUGH command is used to transfer user operation informatio |
| [`avrcp/sendVendorPassThroughCommand`](#avrcp_sendvendorpassthroughcommand) | private |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`avrcp/setAbsoluteVolume`](#avrcp_setabsolutevolume) | public |  | bluetooth | Sets the absolute volume on the target device. |
| [`avrcp/setPlayerApplicationSettings`](#avrcp_setplayerapplicationsettings) | public |  | bluetooth | Sets the player application settings value. |
| [`avrcp/supplyMediaMetaData`](#avrcp_supplymediametadata) | public |  | bluetooth | Supplies media metadata of the target to remote devices connected via AVRCP 1.3 profile. |
| [`avrcp/supplyMediaPlayStatus`](#avrcp_supplymediaplaystatus) | public |  | bluetooth | Supplies media play status of the target to remote devices connected via AVRCP 1.3 profile. |
| [`BleMeshAppKeys`](#blemeshappkeys) | unknown |  | bluetooth | Object gives the info related to app-key used/created by the application |
| [`BleMeshCompositionData`](#blemeshcompositiondata) | unknown |  | bluetooth | Provides composition data information about a requested node. |
| [`BleMeshConfigRelayStatus`](#blemeshconfigrelaystatus) | unknown |  | bluetooth | provide node relay information |
| [`BleMeshElement`](#blemeshelement) | unknown |  | bluetooth | Object provides sequence of element descriptions |
| [`BleMeshFeature`](#blemeshfeature) | unknown |  | bluetooth | Object information indicating the device features. |
| [`BleMeshInfo`](#blemeshinfo) | unknown |  | bluetooth | Object provides mesh network information |
| [`BleMeshKeyUpdateResponse`](#blemeshkeyupdateresponse) | unknown |  | bluetooth | Object representing the intermediate response during key update to nodes in the network. |
| [`BleMeshNetKeys`](#blemeshnetkeys) | unknown |  | bluetooth | Object provides the info related to network key |
| [`BleMeshNode`](#blemeshnode) | unknown |  | bluetooth | Object containing a list of provisioned nodes in the network |
| [`BleMeshPayload - for "onOff" command`](#blemeshpayload_-_for_onoff_command) | unknown |  | bluetooth | Payload object structure when the command is "onOff" in mesh/model/send API. |
| [`BleMeshPayload - for "passthrough" command`](#blemeshpayload_-_for_passthrough_command) | unknown |  | bluetooth | Payload object structure when the command is "passThrough" in mesh/model/send API. |
| [`BleMeshProvisioner`](#blemeshprovisioner) | unknown |  | bluetooth | Object provides provisioner related information |
| [`BleMeshUnprovisionedDevice`](#blemeshunprovisioneddevice) | unknown |  | bluetooth | Array of BLE Mesh devices that are known to the system and that are not yet provisioned by the system |
| [`bluetooth2Adapter`](#bluetooth2adapter) | unknown |  | bluetooth | An object containing constant information about the adapter. |
| [`bluetooth2AdapterStatus`](#bluetooth2adapterstatus) | unknown |  | bluetooth | Contains the information about the status of the adapter identified by the adapterAddress parameter. The following values are read-only: Dis |
| [`bluetooth2AdvertiseData`](#bluetooth2advertisedata) | unknown |  | bluetooth | Defines the format for data parameters. |
| [`bluetooth2AdvertiseSettings`](#bluetooth2advertisesettings) | unknown |  | bluetooth | Object containing information about the advertisement setting. |
| [`bluetooth2aptxConfiguration`](#bluetooth2aptxconfiguration) | unknown |  | bluetooth | Object containing information about aptX configuration for A2DP. |
| [`bluetooth2AvrcpFolderItem`](#bluetooth2avrcpfolderitem) | unknown |  | bluetooth | Describes an item in the folder. |
| [`bluetooth2AvrcpPlayerInfo`](#bluetooth2avrcpplayerinfo) | unknown |  | bluetooth | Represents the media player information as received from AVRCP target. |
| [`bluetooth2AvrcpRemoteFeatureInfo`](#bluetooth2avrcpremotefeatureinfo) | unknown |  | bluetooth | Object containing information about avrcp remote features |
| [`bluetooth2DeviceStatus`](#bluetooth2devicestatus) | unknown |  | bluetooth | Contains the information about the status of the device identified by the address. Note: All object properties apart from name are read-only |
| [`bluetooth2GattCharacteristicInfo`](#bluetooth2gattcharacteristicinfo) | unknown |  | bluetooth | Object containing information about a GATT characteristic. |
| [`bluetooth2GattCharacteristicValueInfo`](#bluetooth2gattcharacteristicvalueinfo) | unknown |  | bluetooth | Object containing information about the characteristic uuid and values. |
| [`bluetooth2GattDescriptorInfo`](#bluetooth2gattdescriptorinfo) | unknown |  | bluetooth | Object containing information about a GATT descriptor. |
| [`bluetooth2GattManufacturerData`](#bluetooth2gattmanufacturerdata) | unknown |  | bluetooth | Indicates manufacturer-specific company ID and data (if advertised from the remote device, else it will be blank) and scanResponse data Note |
| [`bluetooth2GattPermissionsInfo`](#bluetooth2gattpermissionsinfo) | unknown |  | bluetooth | Object containing information about the permissions allowed for a client to use a particular characteristic value. All properties are define |
| [`bluetooth2GattPropertiesInfo`](#bluetooth2gattpropertiesinfo) | unknown |  | bluetooth | Object containing information about the set properties of a characteristic. All properties are defined in Bluetooth Core Specification 4.1 v |
| [`bluetooth2GattServiceInfo`](#bluetooth2gattserviceinfo) | unknown |  | bluetooth | Object containing the GATT service configuration. |
| [`bluetooth2GattValueInfo`](#bluetooth2gattvalueinfo) | unknown |  | bluetooth | Object contains information about a GATT value. As a GATT characteristic can be extended with a descriptor which describes the type of the s |
| [`bluetooth2LeManufacturerData`](#bluetooth2lemanufacturerdata) | unknown |  | bluetooth | Object containing information about manufacturer data. |
| [`bluetooth2LeProprietaryDataObject`](#bluetooth2leproprietarydataobject) | unknown |  | bluetooth | Defines the format for proprietary data with vendor proprietary advertising type or undefined type in sil-api. Note: SIL stands for Stack In |
| [`bluetooth2LeServiceDataObject`](#bluetooth2leservicedataobject) | unknown |  | bluetooth | Object containing information about a service data to be advertised. |
| [`bluetooth2LeServiceObject`](#bluetooth2leserviceobject) | unknown |  | bluetooth | Object containing information about a service to be advertised. |
| [`bluetooth2LeServiceUuidObject`](#bluetooth2leserviceuuidobject) | unknown |  | bluetooth | Object containing information about a service uuid to be advertised. |
| [`bluetooth2MasInstances`](#bluetooth2masinstances) | unknown |  | bluetooth | Contains the list of supported MAS instances. |
| [`bluetooth2MasInstancesStatus`](#bluetooth2masinstancesstatus) | unknown |  | bluetooth | Contains an array of the MAS instances with the connection details. |
| [`bluetooth2MediaMetaData`](#bluetooth2mediametadata) | unknown |  | bluetooth | Contains information about a media metadata value. Note : string parameters accepts empty string as some meta data doesn't have particular i |
| [`bluetooth2Message`](#bluetooth2message) | unknown |  | bluetooth | Indicates the description of the message . |
| [`bluetooth2MessageFilters`](#bluetooth2messagefilters) | unknown |  | bluetooth | Indicates the list of filters. |
| [`bluetooth2MessageList`](#bluetooth2messagelist) | unknown |  | bluetooth | Indicates the message list. |
| [`bluetooth2MessageNotificationProperties`](#bluetooth2messagenotificationproperties) | unknown |  | bluetooth | Indicates the message notification properties. |
| [`bluetooth2MessageProperties`](#bluetooth2messageproperties) | unknown |  | bluetooth | Contains the list of supported Message properties. |
| [`bluetooth2NewMessageProperties`](#bluetooth2newmessageproperties) | unknown |  | bluetooth | Indicates the properties of the new message . |
| [`bluetooth2PbapProperties`](#bluetooth2pbapproperties) | unknown |  | bluetooth | Contains supported properties from PSE device. |
| [`bluetooth2PbapSearchFilter`](#bluetooth2pbapsearchfilter) | unknown |  | bluetooth | Filter with key & value pair to search the phonebook |
| [`bluetooth2PbapVcfHandles`](#bluetooth2pbapvcfhandles) | unknown |  | bluetooth | Contains information about vcf files entries with name and vcf handle from selected phonebook path. |
| [`bluetooth2PlayStatus`](#bluetooth2playstatus) | unknown |  | bluetooth | Contains the information about the media playstatus value. |
| [`bluetooth2PushRequest`](#bluetooth2pushrequest) | unknown |  | bluetooth | Object containing information about an OPP push request |
| [`bluetooth2SbcConfiguration`](#bluetooth2sbcconfiguration) | unknown |  | bluetooth | Object containing information about SBC configuration for A2DP. |
| [`bluetooth2ServiceClass`](#bluetooth2serviceclass) | unknown |  | bluetooth | Contains the Bluetooth service class information. |
| [`bluetooth2TxPower`](#bluetooth2txpower) | unknown |  | bluetooth | Object containing txpower information. |
| [`device/getConnectedDevices`](#device_getconnecteddevices) | unknown |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.query); name only |
| [`device/getDiagnosis`](#device_getdiagnosis) | private |  | bluetooth | Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`device/getDiscoveredDevice`](#device_getdiscovereddevice) | public | yes | bluetooth | Gets the newly discovered Bluetooth device information known to the system. |
| [`device/getHistory`](#device_gethistory) | private |  | bluetooth | Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`device/getPairedDevices`](#device_getpaireddevices) | public | yes | bluetooth | Gets a list of paired Bluetooth devices info, known to the system. |
| [`device/getStatus`](#device_getstatus) | public | yes | bluetooth | Gets the current status of remote Bluetooth devices known to the system. |
| [`device/internal/getLinkKey`](#device_internal_getlinkkey) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`device/internal/getStatus`](#device_internal_getstatus) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`device/internal/setDebugValue`](#device_internal_setdebugvalue) | private |  | bluetooth | Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`device/internal/startSniff`](#device_internal_startsniff) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`device/internal/stopSniff`](#device_internal_stopsniff) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`device/setState`](#device_setstate) | public |  | bluetooth | Sets the local values for the state of a remote device. |
| [`ftp/connect`](#ftp_connect) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`ftp/disconnect`](#ftp_disconnect) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`ftp/getStatus`](#ftp_getstatus) | public |  | bluetooth | Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`ftp/listDirectory`](#ftp_listdirectory) | public |  | bluetooth | Lister on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`ftp/pullFile`](#ftp_pullfile) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`ftp/pushFile`](#ftp_pushfile) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`gatt/addService`](#gatt_addservice) | public |  | bluetooth | Adds a new service definition to the local database. Note: The new service will be directly exposed to clients which are discovering availab |
| [`gatt/ancs/advertise`](#gatt_ancs_advertise) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`gatt/ancs/awaitConnectionRequest`](#gatt_ancs_awaitconnectionrequest) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`gatt/ancs/awaitNotifications`](#gatt_ancs_awaitnotifications) | public |  | notifications | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`gatt/ancs/connect`](#gatt_ancs_connect) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`gatt/ancs/disconnect`](#gatt_ancs_disconnect) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`gatt/ancs/getStatus`](#gatt_ancs_getstatus) | public |  | bluetooth | Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`gatt/ancs/performNotificationAction`](#gatt_ancs_performnotificationaction) | public |  | notifications | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`gatt/ancs/queryAppAttributes`](#gatt_ancs_queryappattributes) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`gatt/ancs/queryNotificationAttributes`](#gatt_ancs_querynotificationattributes) | public |  | notifications | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`gatt/closeServer`](#gatt_closeserver) | public |  | bluetooth | Closes the BluetoothGattServer. |
| [`gatt/connect`](#gatt_connect) | public | yes | bluetooth | Connects to the GATT profile on the specified remote device. |
| [`gatt/disconnect`](#gatt_disconnect) | public |  | bluetooth | Drops the connection to the given remote device on GATT profile. |
| [`gatt/discoverServices`](#gatt_discoverservices) | public |  | bluetooth | Discovers available services for the given remote device. Pre-requisite: The given remote device should be connected through gatt/connect me |
| [`gatt/getServices`](#gatt_getservices) | public | yes | bluetooth | Gets available services for either the given local Bluetooth adapter or remote device. Note: Depending on the passed parameter, a list of se |
| [`gatt/getStatus`](#gatt_getstatus) | public | yes | bluetooth | Returns the status of GATT connection to the given remote device. |
| [`gatt/monitorCharacteristic`](#gatt_monitorcharacteristic) | public | yes | bluetooth | Monitors specific characteristic value changes. Note: If the characteristic is not marked as being notifiable, the method will fail. If the  |
| [`gatt/monitorCharacteristics`](#gatt_monitorcharacteristics) | public | yes | bluetooth | Monitors specific characteristic value changes. If the characteristic is not marked as being notifiable, the method will fail. |
| [`gatt/openServer`](#gatt_openserver) | public |  | bluetooth | Opens the BluetoothGattServer managing services. |
| [`gatt/readCharacteristicValue`](#gatt_readcharacteristicvalue) | public |  | bluetooth | Reads the value of a specific characteristic. Note: When called from client side, the method actively reads and retrieves the latest value f |
| [`gatt/readCharacteristicValues`](#gatt_readcharacteristicvalues) | public |  | bluetooth | Reads the value of a specific characteristic. When called from client side, the method actively reads and retrieves the latest value from th |
| [`gatt/readDescriptorValue`](#gatt_readdescriptorvalue) | public |  | bluetooth | Reads the value of descriptor of a service characteristic either in the local adapter or the remote device. When called from client side, th |
| [`gatt/readDescriptorValues`](#gatt_readdescriptorvalues) | public |  | bluetooth | Read the value of descriptor(s) of a service characteristic either in the local adapter or the remote device. When called from client side,  |
| [`gatt/removeService`](#gatt_removeservice) | public |  | bluetooth | Remove a service definition from the local database. All characteristics which belong to the service will be also removed. If the given serv |
| [`gatt/writeCharacteristicValue`](#gatt_writecharacteristicvalue) | public |  | bluetooth | Writes the value for a local or remote characteristic. |
| [`gatt/writeDescriptorValue`](#gatt_writedescriptorvalue) | public |  | bluetooth | Writes the value of a specific descriptor of a service characteristic either in the local adapter or the remote device. |
| [`hfp/closeSCO`](#hfp_closesco) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`hfp/connect`](#hfp_connect) | public | yes | bluetooth | Opens a HFP connection to a remote device. |
| [`hfp/disconnect`](#hfp_disconnect) | public |  | bluetooth | Drops the connection to the given remote device on the HFP profile. |
| [`hfp/getStatus`](#hfp_getstatus) | public | yes | bluetooth | Returns the status of a HFP connection to a remote device. If address input parameter is not specified, the method will return the informati |
| [`hfp/indicateCall`](#hfp_indicatecall) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`hfp/openSCO`](#hfp_opensco) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`hfp/receiveAT`](#hfp_receiveat) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`hfp/receiveResult`](#hfp_receiveresult) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`hfp/sendAT`](#hfp_sendat) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`hfp/sendResult`](#hfp_sendresult) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`hid/connect`](#hid_connect) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.management); name only |
| [`hid/disconnect`](#hid_disconnect) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.management); name only |
| [`hid/getStatus`](#hid_getstatus) | unknown |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.query); name only |
| [`hid/internal/getReport`](#hid_internal_getreport) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`hid/internal/sendData`](#hid_internal_senddata) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`hid/internal/setReport`](#hid_internal_setreport) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only |
| [`le/configureAdvertisement`](#le_configureadvertisement) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`le/disableAdvertising`](#le_disableadvertising) | public |  | bluetooth | Stops and disables advertising Note: Call this method after le/startAdvertising. |
| [`le/getStatus`](#le_getstatus) | unknown |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.query); name only |
| [`le/internal/startScan`](#le_internal_startscan) | private |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`le/setScanParameters`](#le_setscanparameters) | private |  | bluetooth | Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`le/startAdvertising`](#le_startadvertising) | public | yes | bluetooth | Starts broadcasting the Bluetooth Low Energy advertisement. |
| [`le/startMultiScan`](#le_startmultiscan) | private |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`le/startScan`](#le_startscan) | public | yes | bluetooth | Starts scanning only ble devices. |
| [`le/stopAdvertising`](#le_stopadvertising) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`le/updateAdvertising`](#le_updateadvertising) | unknown |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.operation); name only |
| [`leaudio/internal/updateBroadcastMetadata`](#leaudio_internal_updatebroadcastmetadata) | private |  | audio | Method on com.webos.service.bluetooth2 (from on-device permission registry; parameters undocumented). |
| [`map/connect`](#map_connect) | public | yes | bluetooth | Connects to the MAS Instance of the specified remote device. Note: The method is available only for MCE . |
| [`map/disconnect`](#map_disconnect) | public |  | bluetooth | Disconnects from the MAS Instance on the specified remote device. Note: The method is available only for MCE . |
| [`map/getFolderList`](#map_getfolderlist) | public |  | bluetooth | Lists the available folders of the connected MAS instance of the MSE device. Note: This method is available only for MCE. |
| [`map/getMASInstances`](#map_getmasinstances) | public |  | bluetooth | Retrieves the MAS instance details of a MSE device. MAP MSE devices may present one or several MAS Instances to the MCE, each providing the  |
| [`map/getMessage`](#map_getmessage) | public |  | bluetooth | Downloads the specific message based on the message handle. Note: This method is available only for MCE. |
| [`map/getMessageFilters`](#map_getmessagefilters) | public |  | bluetooth | Returns all the available fields that can be used in the fields filter of the getMessageList . |
| [`map/getMessageList`](#map_getmessagelist) | public |  | bluetooth | Gets the message list of the specific folder of the connected MAS instance of the MSE device. |
| [`map/getMessageNotification`](#map_getmessagenotification) | public | yes | bluetooth | Receives the message notification from the MSE device. Note : This method is available only for MCE. |
| [`map/getStatus`](#map_getstatus) | public | yes | bluetooth | Returns the status of the MAS connection with a remote device. Note: The method is available only for MCE . |
| [`map/pushMessage`](#map_pushmessage) | public |  | bluetooth | Sends the message. Example: Sending an SMS. Note : The API is designed based on MAP 1.0 specification. |
| [`map/setFolder`](#map_setfolder) | public |  | bluetooth | Returns to the child folder of the current directory of the connected MAS instance of the MSE device. |
| [`map/setMessageStatus`](#map_setmessagestatus) | public |  | bluetooth | Modifies the status of a message on the MSE. Note : This method is available only for MCE |
| [`mesh/createAppKey`](#mesh_createappkey) | public |  | bluetooth | Requests to generate a new application key. This call affects the local key database only. To update the remote config server, use mesh/mode |
| [`mesh/createNetwork`](#mesh_createnetwork) | public |  | bluetooth | This is the first API that must be called by the application to create a network and to become a provisioner. This is called once for every  |
| [`mesh/getMeshInfo`](#mesh_getmeshinfo) | public |  | bluetooth | Gets mesh network-related information. |
| [`mesh/keyRefresh`](#mesh_keyrefresh) | public | yes | bluetooth | Refreshes the mesh network key and associated app keys. |
| [`mesh/listProvisionedNodes`](#mesh_listprovisionednodes) | public |  | bluetooth | Gets a list of provisioned nodes. |
| [`mesh/model/config/get`](#mesh_model_config_get) | public | yes | bluetooth | Gets various configuration parameters provided by configuration model. |
| [`mesh/model/config/getCompositionData`](#mesh_model_config_getcompositiondata) | public | yes | bluetooth | Gets composition data of a mesh node. The composition data contains information about a node, the elements it includes, and the supported mo |
| [`mesh/model/config/set`](#mesh_model_config_set) | public | yes | bluetooth | Sets various configuration parameters provided by the configuration model. |
| [`mesh/model/onOff/set`](#mesh_model_onoff_set) | public | yes | bluetooth | Sets the on/off state of the remote node using a generic on-off model. |
| [`mesh/model/receive`](#mesh_model_receive) | public | yes | bluetooth | Receives messages addressed to the application. |
| [`mesh/model/send`](#mesh_model_send) | public |  | bluetooth | Sends a message originated by a local model. |
| [`mesh/provision`](#mesh_provision) | public | yes | bluetooth | Initiates provisioning of a device. Once a mesh device is discovered using mesh/scanUnprovisionedDevices API, the discovered device can be p |
| [`mesh/removeNode`](#mesh_removenode) | public |  | bluetooth | Removes the node from the network. Multiple nodes can be removed by calling this API multiple times. After the required nodes are removed fr |
| [`mesh/scanUnprovisionedDevices`](#mesh_scanunprovisioneddevices) | public | yes | bluetooth | Scans for mesh devices to provision when the local node is provisioner. |
| [`mesh/supplyProvisioningNumeric`](#mesh_supplyprovisioningnumeric) | public |  | bluetooth | Provides decimal number for authentication during provisioning; when "request" = "promptNumeric" in the subscription response of mesh/provis |
| [`mesh/supplyProvisioningOob`](#mesh_supplyprovisioningoob) | public |  | bluetooth | Supplies the static OOB data required during provision; when "request" = "promptStatic" in the subscription response of mesh/provision API. |
| [`mesh/unprovisionedScanCancel`](#mesh_unprovisionedscancancel) | public |  | bluetooth | Cancels scanning for unprovisioned BLE mesh devices. |
| [`opp/acceptTransferRequest`](#opp_accepttransferrequest) | public |  | bluetooth | Accept a Bluetooth object push request. This method is available only for a push server. |
| [`opp/awaitTransferRequest`](#opp_awaittransferrequest) | public | yes | bluetooth | Await incoming transfer requests from push clients. This method is available only for a push server. |
| [`opp/cancelTransfer`](#opp_canceltransfer) | public |  | bluetooth | Cancel an ongoing file transfer. This method is available only for a push server. In a client side, LSCallCancel() is used to cancel the tra |
| [`opp/connect`](#opp_connect) | public | yes | bluetooth | Open (or initialize) an OPP connection to a remote Bluetooth device. In some cases of such as using BSA stack, only initialization of OPP ca |
| [`opp/disconnect`](#opp_disconnect) | public |  | bluetooth | Close (or deinitialize) the connection to the given remote device on OPP profile. In some cases of such as using BSA stack, this method perf |
| [`opp/getStatus`](#opp_getstatus) | public | yes | bluetooth | Return the status of an OPP connection to a remote Bluetooth device. This method is available for both of client and server. |
| [`opp/monitorTransfer`](#opp_monitortransfer) | public | yes | bluetooth | Return the status of ongoing file transfer requests. This method is only available for server. |
| [`opp/pushFile`](#opp_pushfile) | public | yes | bluetooth | Push a file to a remote Bluetooth device. This method is available only for push client. If the client calls LSCallCancel() , the file trans |
| [`opp/rejectTransferRequest`](#opp_rejecttransferrequest) | public |  | bluetooth | Reject a Bluetooth object push request. This method is available only for a push server. |
| [`pan/connect`](#pan_connect) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`pan/disconnect`](#pan_disconnect) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`pan/getStatus`](#pan_getstatus) | public |  | bluetooth | Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`pan/setTethering`](#pan_settethering) | public |  | bluetooth | Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`pbap/acceptAccessRequest`](#pbap_acceptaccessrequest) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`pbap/awaitAccessRequest`](#pbap_awaitaccessrequest) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`pbap/connect`](#pbap_connect) | public | yes | bluetooth | Connects to the PBAP profile on the specified remote device. Note: This method is available only for PCE . |
| [`pbap/disconnect`](#pbap_disconnect) | public |  | bluetooth | Disconnects from the PBAP profile on the specified remote device. Note: This method is available only for PCE . |
| [`pbap/getPhoneBookProperties`](#pbap_getphonebookproperties) | public | yes | bluetooth | Gets the supported PBAP profile properties from PSE device. Note: This method is available only for PCE . |
| [`pbap/getSize`](#pbap_getsize) | public |  | bluetooth | Gets the total number of vcf entries from the selected phonebook path. Note: This method is available only for PCE . |
| [`pbap/getStatus`](#pbap_getstatus) | public | yes | bluetooth | Returns the status of a PBAP connection to a remote Bluetooth device. Note: The method is available for both client and server. |
| [`pbap/getvCardFilters`](#pbap_getvcardfilters) | public |  | bluetooth | Displays all the available vcard filters supported by Bluetooth stack. Note: The method is available only for PCE . |
| [`pbap/pullPhoneBook`](#pbap_pullphonebook) | public | yes | bluetooth | Retrieves all (given maxcount) the phonebook entries from a given startoffset and stores it in a local file. |
| [`pbap/pullvCard`](#pbap_pullvcard) | public |  | bluetooth | Given a vcard handle, retrieves the vcard in the current phonebook object and store it in a local file. Note: This method is available only  |
| [`pbap/rejectAccessRequest`](#pbap_rejectaccessrequest) | public |  | bluetooth | Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented). |
| [`pbap/searchPhoneBook`](#pbap_searchphonebook) | public |  | bluetooth | Searches for entries matching the given condition and returns an object of vcard-listing data where every entry consists of a pair of string |
| [`pbap/setPhoneBook`](#pbap_setphonebook) | public |  | bluetooth | Sets the phonebook object for other operations. Note: This method is available only for PCE . |
| [`pbap/vCardListing`](#pbap_vcardlisting) | public |  | bluetooth | Displays the total number of vcf file entries from the selected phonebook path. Note: This method is available only for PCE . |
| [`popo/pushFile`](#popo_pushfile) | private |  | bluetooth | Registered in webOS OSE sysbus api.json (ACG group bluetooth.management); name only |
| [`spp/connect`](#spp_connect) | public | yes | bluetooth | Open a SPP connection to a remote Bluetooth device. |
| [`spp/createChannel`](#spp_createchannel) | public | yes | bluetooth | Register a service record in the device service record database with the specified UUID and name. The channel can be removed through LSCallC |
| [`spp/disconnect`](#spp_disconnect) | public |  | bluetooth | Drop the connection to the given remote device on SPP profile. |
| [`spp/getStatus`](#spp_getstatus) | public | yes | bluetooth | Return the status of a SPP connection to a remote device. |
| [`spp/readData`](#spp_readdata) | public | yes | bluetooth | Receive data from the connected remote device. |
| [`spp/writeData`](#spp_writedata) | public |  | bluetooth | Transfer data to the connected remote device. |

<a id="a2dp_connect"></a>
## `a2dp/connect`

`luna://com.webos.service.bluetooth2/a2dp/connect`

Connects to the A2DP profile on the specified remote device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifcations. false: Not subscribed. Default : false |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/a2dp/connect '{ "address":"AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; subscribed:Boolean; adapterAddress:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="a2dp_disabledelayreporting"></a>
## `a2dp/disableDelayReporting`

`luna://com.webos.service.bluetooth2/a2dp/disableDelayReporting`

Disables the AVDTP delay reporting.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/a2dp/disableDelayReporting '{ "adapterAddress":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: adapterAddress:String; errorCode:Number; errorText:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="a2dp_disconnect"></a>
## `a2dp/disconnect`

`luna://com.webos.service.bluetooth2/a2dp/disconnect`

Drops the connection to the given remote device on the A2DP profile.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/a2dp/disconnect '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="a2dp_enabledelayreporting"></a>
## `a2dp/enableDelayReporting`

`luna://com.webos.service.bluetooth2/a2dp/enableDelayReporting`

Enables the AVDTP delay reporting.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n -1 luna://com.webos.service.bluetooth2/a2dp/enableDelayReporting '{ "adapterAddress":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: adapterAddress:String; errorCode:Number; errorText:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="a2dp_getdelayreportingtime"></a>
## `a2dp/getDelayReportingTime`

`luna://com.webos.service.bluetooth2/a2dp/getDelayReportingTime`

Gets the AVDTP delay from a remote A2DP device, whenever the AVDTP delay is changed.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (optional) Indicates the address (bdaddr) of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Default: false |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/a2dp/getDelayReportingTime '{
```

> ACG: bluetooth.management \| Returns: delay:Number; adapterAddress:String; address:String; errorCode:Number; errorText:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="a2dp_getstatus"></a>
## `a2dp/getStatus`

`luna://com.webos.service.bluetooth2/a2dp/getStatus`

Returns the status of the A2DP connection to a remote device. Note: If the address input parameter is not specified, the method will return the information of the device whose connection or playing status has been changed.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Default: false |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/a2dp/getStatus '{ "address":"AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; subscribed:Boolean; connecting:Boolean; connected:Boolean; playing:Boolean; adapterAddress:String; address:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="a2dp_internal_disable"></a>
## `a2dp/internal/disable`

`luna://com.webos.service.bluetooth2/a2dp/internal/disable`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/a2dp/internal/disable '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="a2dp_internal_enable"></a>
## `a2dp/internal/enable`

`luna://com.webos.service.bluetooth2/a2dp/internal/enable`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/a2dp/internal/enable '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="a2dp_internal_getaudiopath"></a>
## `a2dp/internal/getAudioPath`

`luna://com.webos.service.bluetooth2/a2dp/internal/getAudioPath`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/a2dp/internal/getAudioPath '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="a2dp_internal_getcodecconfiguration"></a>
## `a2dp/internal/getCodecConfiguration`

`luna://com.webos.service.bluetooth2/a2dp/internal/getCodecConfiguration`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/a2dp/internal/getCodecConfiguration '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="a2dp_internal_setcodecconfiguration"></a>
## `a2dp/internal/setCodecConfiguration`

`luna://com.webos.service.bluetooth2/a2dp/internal/setCodecConfiguration`

Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/a2dp/internal/setCodecConfiguration '{}'
```

> ACG groups: all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="a2dp_internal_setdualaudiomode"></a>
## `a2dp/internal/setDualAudioMode`

`luna://com.webos.service.bluetooth2/a2dp/internal/setDualAudioMode`

Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/a2dp/internal/setDualAudioMode '{}'
```

> ACG groups: all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="a2dp_internal_setlatency"></a>
## `a2dp/internal/setLatency`

`luna://com.webos.service.bluetooth2/a2dp/internal/setLatency`

Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/a2dp/internal/setLatency '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="a2dp_internal_setsbcencoderbitpool"></a>
## `a2dp/internal/setSbcEncoderBitpool`

`luna://com.webos.service.bluetooth2/a2dp/internal/setSbcEncoderBitpool`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/a2dp/internal/setSbcEncoderBitpool '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="a2dp_internal_startstreaming"></a>
## `a2dp/internal/startStreaming`

`luna://com.webos.service.bluetooth2/a2dp/internal/startStreaming`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/a2dp/internal/startStreaming '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="a2dp_internal_stopstreaming"></a>
## `a2dp/internal/stopStreaming`

`luna://com.webos.service.bluetooth2/a2dp/internal/stopStreaming`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/a2dp/internal/stopStreaming '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="a2dp_internal_toggle_left_right"></a>
## `a2dp/internal/toggle_left_right`

`luna://com.webos.service.bluetooth2/a2dp/internal/toggle_left_right`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/a2dp/internal/toggle_left_right '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="adapter_awaitpairingrequests"></a>
## `adapter/awaitPairingRequests`

`luna://com.webos.service.bluetooth2/adapter/awaitPairingRequests`

Awaits incoming pairing requests on the default Bluetooth adapter (only) by setting its state to be pairable. The caller must subscribe to this method. It expects the caller will stay subscribed to this method across multiple pairing requests for as long as the webOS device wishes to accept pairing requests. Only one pairing request, either incoming or outgoing, can be active for an adapter at a given time. An outgoing pairing request is active until the service ends the subscription to adapter/pair by sending a subscription response containing request:endPairing . An incoming pairing request is active once a subscription response to this method contains request:displayPinCode , request:displayPasskey , request:confirmPasskey , request:enterPinCode , or request:enterPinCode . An incoming pairing request becomes inactive When a subscription response to this method contains request:endPair

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Note: Set to true , since caller must subscribe to this method. Possible values are: true: Subscribed. false: Not subscribed. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/adapter/awaitPairingRequests '{"subscribe":true}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="adapter_canceldiscovery"></a>
## `adapter/cancelDiscovery`

`luna://com.webos.service.bluetooth2/adapter/cancelDiscovery`

Cancels discovering the remote Bluetooth devices. Note: Discovery of a specific adapter can be canceled based on the adapter address passed.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/cancelDiscovery '{ }
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="adapter_cancelpairing"></a>
## `adapter/cancelPairing`

`luna://com.webos.service.bluetooth2/adapter/cancelPairing`

Cancels the pairing request with a remote device, either incoming or outgoing. Sends a success response immediately. Once the SIL (Stack Interface Layer) calls back, If the cancel succeeds, it causes a request:endPairing subscription response to adapter/pair or adapter/awaitPairingRequests with a "Pairing canceled by user" error. If the cancel fails, it causes a request:continuePairing subscription response.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/cancelPairing '{ "address": "AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; subscribed:Boolean; adapterAddress:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="adapter_getstatus"></a>
## `adapter/getStatus`

`luna://com.webos.service.bluetooth2/adapter/getStatus`

Returns the status information about the Bluetooth adapters available in the system.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/adapter/getStatus '{"subscribe":true}
```

> ACG: bluetooth.query \| Returns: subscribed:Boolean; returnValue:Boolean; adapters:Object array: bluetooth2AdapterStatus \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="adapter_internal_getkeepalivestatus"></a>
## `adapter/internal/getKeepAliveStatus`

`luna://com.webos.service.bluetooth2/adapter/internal/getKeepAliveStatus`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/internal/getKeepAliveStatus '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="adapter_internal_gettracestatus"></a>
## `adapter/internal/getTraceStatus`

`luna://com.webos.service.bluetooth2/adapter/internal/getTraceStatus`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/internal/getTraceStatus '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="adapter_internal_getwoblestatus"></a>
## `adapter/internal/getWoBleStatus`

`luna://com.webos.service.bluetooth2/adapter/internal/getWoBleStatus`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `adapterAddress` | string |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/internal/getWoBleStatus '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read. Params from the STRICT_SCHEMA in bluetoothmanagerservice.cpp.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json), [2](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/src/bluetoothmanagerservice.cpp)

<a id="adapter_internal_sendhcicommand"></a>
## `adapter/internal/sendHciCommand` ⚠️ DANGEROUS

`luna://com.webos.service.bluetooth2/adapter/internal/sendHciCommand`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `ogf` | integer (required) |
| `ocf` | integer (required) |
| `parameters` | integer[] (required) |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/internal/sendHciCommand '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read. Params from the STRICT_SCHEMA in bluetoothmanagerservice.cpp.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json), [2](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/src/bluetoothmanagerservice.cpp)

<a id="adapter_internal_setdutmode"></a>
## `adapter/internal/setDutMode`

`luna://com.webos.service.bluetooth2/adapter/internal/setDutMode`

Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/internal/setDutMode '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="adapter_internal_setkeepalive"></a>
## `adapter/internal/setKeepAlive`

`luna://com.webos.service.bluetooth2/adapter/internal/setKeepAlive`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `keepAliveEnabled` | boolean |
| `adapterAddress` | string |
| `keepAliveInterval` | integer |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/internal/setKeepAlive '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read. Params from the STRICT_SCHEMA in bluetoothmanagerservice.cpp.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json), [2](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/src/bluetoothmanagerservice.cpp)

<a id="adapter_internal_settrace"></a>
## `adapter/internal/setTrace`

`luna://com.webos.service.bluetooth2/adapter/internal/setTrace`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/internal/setTrace '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="adapter_internal_setullmode"></a>
## `adapter/internal/setULLMode`

`luna://com.webos.service.bluetooth2/adapter/internal/setULLMode`

Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/internal/setULLMode '{}'
```

> ACG groups: all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="adapter_internal_setwoble"></a>
## `adapter/internal/setWoBle`

`luna://com.webos.service.bluetooth2/adapter/internal/setWoBle`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `woBleEnabled` | boolean (required) |
| `suspend` | boolean (required) |
| `adapterAddress` | string |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/internal/setWoBle '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read. Params from the STRICT_SCHEMA in bluetoothmanagerservice.cpp.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json), [2](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/src/bluetoothmanagerservice.cpp)

<a id="adapter_internal_setwobletriggerdevices"></a>
## `adapter/internal/setWoBleTriggerDevices`

`luna://com.webos.service.bluetooth2/adapter/internal/setWoBleTriggerDevices`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `triggerDevices` | string[] (required) |
| `adapterAddress` | string |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/internal/setWoBleTriggerDevices '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read. Params from the STRICT_SCHEMA in bluetoothmanagerservice.cpp.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json), [2](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/src/bluetoothmanagerservice.cpp)

<a id="adapter_internal_startdiscovery"></a>
## `adapter/internal/startDiscovery`

`luna://com.webos.service.bluetooth2/adapter/internal/startDiscovery`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/internal/startDiscovery '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="adapter_pair"></a>
## `adapter/pair`

`luna://com.webos.service.bluetooth2/adapter/pair`

Pairs a specific remote Bluetooth device with a specific Bluetooth adapter. The caller must subscribe to this method. Only one pairing request, either incoming or outgoing, can be active for an adapter at a given time. An outgoing pairing request is active until the service ends the subscription to this method by sending a subscription response containing request:endPairing . An incoming pairing request is active once a subscription response to adapter/awaitPairingRequests contains request:displayPinCode , request:displayPasskey , request:confirmPasskey , request:enterPinCode , or request:enterPinCode . An incoming pairing becomes inactive when a subscription response contains request:endPairing . If the client calls LSCallCancel() , the pairing is canceled the same way as if adapter/cancelPairing had been called. Note: A remote device can only be paired to a single adapter.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device with which pairing is being attempted. |
| `subscribe` | Boolean (required) Indicates if subscribed to get a notification when there is a change in the pairing status. Possible values are: true: Subscribed for notifications false: Not subscribed. Note: Set subscribe to true . The caller must subscribe to this method. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/adapter/pair '{ "address": "AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="adapter_queryavailable"></a>
## `adapter/queryAvailable`

`luna://com.webos.service.bluetooth2/adapter/queryAvailable`

Returns the information on the Bluetooth adapters currently available in the system. The caller subscribes to this method to get informed of added/removed adapters (e.g., Bluetooth dongles) dynamically. Note: The information returned for an adapter doesn't change while it is available.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Default: false |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/adapter/queryAvailable '{"subscribe":true}
```

> ACG: bluetooth.operation \| Returns: subscribed:Boolean; returnValue:Boolean; adapters:Object array: bluetooth2Adapter; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="adapter_setstate"></a>
## `adapter/setState`

`luna://com.webos.service.bluetooth2/adapter/setState`

Sets the state of the specified Bluetooth adapter.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `name` | String (optional) Indicates the friendly name of the adapter. |
| `powered` | Boolean (optional) Indicates the power status of the adapter radio. Possible values are: true: Power ON false: Power OFF |
| `discoveryTimeout` | Number (optional) Indicates the discovery timeout in seconds. Note: After discoveryTimeout seconds, the adapter will stop discovering remote Bluetooth devices. A value of 0 means that the timeout is disabled and the adapter will run the discovery process until the adapter/cancelDiscovery method is called. Negative values are not valid. discoverableTimeout = 0 is only supported for O22 TV & O20 Sig |
| `discoverable` | Boolean (optional) Indicates whether the adapter can be discovered by remote devices. Note : If discoverableTimeout is set to a non-zero value, discoverable will be set back to false when the timer expires. Possible values are: true: Can be discovered false: Cannot be discovered |
| `discoverableTimeout` | Number (optional) Indicates the discoverable timeout in seconds. Note: A value of 0 means that the timeout is disabled and the adapter will stay in discoverable mode until discoverable is set to false. Negative values are not valid. |
| `pairable` | Boolean (optional) Indicates whether to enable the adapter to be paired to a remote device. Possible values are: true (Default): Adapter can be paired false: Adapter cannot be paired |
| `pairableTimeout` | Number (optional) Indicates the pairable timeout in seconds. Note: After pairableTimeout seconds, the adapter is no longer pairable, and false is returned for pairable . |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/adapter/setState '{"powered":true}
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="adapter_startdiscovery"></a>
## `adapter/startDiscovery`

`luna://com.webos.service.bluetooth2/adapter/startDiscovery`

Starts discovering the remote Bluetooth devices. Note: Discovery continues until adapter/cancelDiscovery is called or for bluetooth2AdapterStatus. discoveryTimeout seconds (if non-zero). The Discovery of a specific Adapter can be invoked by passing the adapter address. To get the list of devices found, subscribe to device/getStatus .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/startDiscovery '{ }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="adapter_supplypasskey"></a>
## `adapter/supplyPasskey`

`luna://com.webos.service.bluetooth2/adapter/supplyPasskey`

Supplies the user-entered passkey. Note: The passkey is entered when adapter/pair sends a subscription response containing request:enterPasskey .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `passkey` | Number (required) Indicates the passkey entered by the user. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/supplyPasskey '{ "address": "AA:BB:CC:DD:EE:FF", "passkey":842280 }
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="adapter_supplypasskeyconfirmation"></a>
## `adapter/supplyPasskeyConfirmation`

`luna://com.webos.service.bluetooth2/adapter/supplyPasskeyConfirmation`

Supplies the user's confirmation for the passkey. Note: The user confirms the passkey when adapter/pair sends a subscription response containing request:confirmPasskey .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device with which pairing is being attempted. |
| `accept` | Boolean (required) Indicates if the user has confirmed the passkey. Possible values are: true: User confirmed the passkey. false: User did not confirm the passkey. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/supplyPasskeyConfirmation '{ "address": "AA:BB:CC:DD:EE:FF", "accept":true }
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="adapter_supplypincode"></a>
## `adapter/supplyPinCode`

`luna://com.webos.service.bluetooth2/adapter/supplyPinCode`

Supplies the user-entered PIN code. Note: The PIN code is entered when adapter/pair sends a subscription response containing request:enterPinCode .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `pin` | String (required) Indicates the PIN code entered by the user. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/supplyPinCode '{ "address": "AA:BB:CC:DD:EE:FF", "pin":"2345" }
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="adapter_unpair"></a>
## `adapter/unpair`

`luna://com.webos.service.bluetooth2/adapter/unpair`

Disconnects from the paired remote device. Note: All pairing information about the remote device will be removed and any open connections will be closed. However, the remote device is still discoverable.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device to unpair. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/adapter/unpair '{ "address": "AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_awaitmediametadatarequest"></a>
## `avrcp/awaitMediaMetaDataRequest`

`luna://com.webos.service.bluetooth2/avrcp/awaitMediaMetaDataRequest`

Awaits incoming media metadata requests from remote devices. This method is available only for TG (Target). The method just listens the requests from CT (Controller) and lets the caller of the method in TG know the requests. We assume that the caller already knows the media or playback status information or can get it from the other services such as media or music service. The caller in TG is expected to send proper information by using the avrcp/supplyMediaMetaData method to CT after receiving the request returned from the avrcp/awaitMediaMetaDataRequest method. In AVRCP, metadata attributes for the currently playing media element can be retrieved by the CT by using the GetElementAttributes command. This allows the CT to request a specific set, or all attributes from the TG. These attributes include such as title and artist. The CT also might be interested to know the current status of 

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed for notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Note: The caller must subscribe to this method. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -f -i luna://com.webos.service.bluetooth2/avrcp/awaitMediaMetaDataRequest '{"subscribe":true}
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; subscribed:Boolean; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_awaitmediaplaystatusrequest"></a>
## `avrcp/awaitMediaPlayStatusRequest`

`luna://com.webos.service.bluetooth2/avrcp/awaitMediaPlayStatusRequest`

Awaits the incoming media play status requests from remote devices. This method is available only for the TG (Target). The avrcp/awaitMediaPlayStatusRequest method used for the TG just listens to the requests from CT (Controller) and lets the caller of the method in TG know the requests. We assume that the caller already knows the media or playback status information or can get it from the other services such as media or music service. The caller in TG is expected to send the proper information by using avrcp/supplyMediaPlayStatus method to CT after receiving the request returned from the avrcp/awaitMediaPlayStatusRequest method.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Note: The caller must subscribe to this method. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -f -i luna://com.webos.service.bluetooth2/avrcp/awaitMediaPlayStatusRequest '{"subscribe":true}
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; subscribed:Boolean; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_browse_addtonowplaying"></a>
## `avrcp/browse/addToNowPlaying`

`luna://com.webos.service.bluetooth2/avrcp/browse/addToNowPlaying`

Adds the browsed item to the current playing list. Note : When user selects a playable item (playable is set to true for the item in the getFolderItems response) among the items listed, the application can call this API with the path received in the bluetooth2FolderItem object of the getFolderItems response to add the item to the now playing list. The application can call addToNowPlaying with the path to the folder, if the folder is playable.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `itemPath` | String (required) Indicates the path to the item in the current folder to be added to the current playing list. Note: Item path is received in the bluetooth2FolderItem object of the getFolderItems API response. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/ avrcp/browse/addToNowPlaying '{ "address":"AA:BB:CC:DD:EE:FF", "adapterAddress":"AA:BB:CC:DD:EE:FF", "itemPath":"player0/Filesystem/item4/item97" }
```

> ACG: bluetooth.management \| Returns: adapterAddress:String; address:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_browse_changepath"></a>
## `avrcp/browse/changePath`

`luna://com.webos.service.bluetooth2/avrcp/browse/changePath`

Navigates the virtual filesystem presented by the remote media player. This API can be called to change to a specific folder for browsing. "type" field of bluetooth2FolderItem received as response to getFolderITems indicates if the item is audio/video or folder. If the item is "folder" then the API can be called with corresponding path to browse the folder. Browsing folder can be changed to a folder that is one level up or down to the current folder in hierarchy. Example: Folder cannot be changed directly from media/album/album1/ to /media/artist/artist1. We need to move first from /media/album/album1 ==> to /media/album/ ==> then to /media/ ==> then to /media/artist/ ==> and then to /media/artist/artist1. Note that for going back to a parent folder also the API needs to be called with the parent folder path. When the API succeeds, the current browsing folder changes, hence the applicati

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `itemPath` | String (required) Indicates the path to the folder item to change to. Note: Item path is received in the bluetooth2FolderItem object of the getFolderItems API response. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/ avrcp/browse/changePath '{ "address":"AA:BB:CC:DD:EE:FF", "adapterAddress":"AA:BB:CC:DD:EE:FF", "itemPath":"player0/Filesystem/item4" }
```

> ACG: bluetooth.management \| Returns: adapterAddress:String; address:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_browse_getcurrentfolder"></a>
## `avrcp/browse/getCurrentFolder`

`luna://com.webos.service.bluetooth2/avrcp/browse/getCurrentFolder`

Gets the current folder in the media player's virtual filesystem presented by AVRCP TG which can be browsed for the media content. Example: As the user navigates to a sub folder or a parent folder, browsing folder changes. The information (i.e. the new current folder) is provided as subscription response of this API.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Default : false |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/avrcp/browse/getCurrentFolder '{ "address":"AA:BB:CC:DD:EE:FF", "adapterAddress":"AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.management \| Returns: adapterAddress:String; address:String; returnValue:Boolean; subscribed:Boolean; folderName:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_browse_getfolderitems"></a>
## `avrcp/browse/getFolderItems`

`luna://com.webos.service.bluetooth2/avrcp/browse/getFolderItems`

Gets the items in the current folder of the media player's virtual filesystem presented by AVRCP TG. It takes startIndex and endIndex as argument and gets the items within this range. It is recommended to fetch a part of the list at a time and update it as user scrolls the display to avoid any delay in fetching the items from AVRCP_TG and displaying the items. This can be done by specifying the range using startIndex and endIndex. endIndex should be less than total number of items received using getNumberOfItems API. Application should not call getFolderItems API if the folder is empty.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `startIndex` | Number (required) Indicates the offset within the listing of the item, which should be the first returned item. The first element in the listing is at offset 0. |
| `endIndex` | Number (required) Indicates the offset within the listing of the item, which should be the final returned item. Note : endIndex should be greater than or equal to startIndex ( endIndex = startIndex means you are requesting one item that is at index endIndex/startIndex) and less than total number of items in the current folder. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/avrcp/browse/getFolderItems '{ "address":"AA:BB:CC:DD:EE:FF", "adapterAddress":"AA:BB:CC:DD:EE:FF", "startIndex":0, "endIndex":3 }
```

> ACG: bluetooth.management \| Returns: adapterAddress:String; address:String; returnValue:Boolean; folderItems:Object array: bluetooth2AvrcpFolderItem; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_browse_getnumberofitems"></a>
## `avrcp/browse/getNumberOfItems`

`luna://com.webos.service.bluetooth2/avrcp/browse/getNumberOfItems`

Retrieves the total number of items in the current folder of the media player's virtual file system presented by the AVRCP TG.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/avrcp/browse/getNumberOfItems '{ "address":"AA:BB:CC:DD:EE:FF", "adapterAddress":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: adapterAddress:String; address:String; returnValue:Boolean; numberOfItems:Number; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_browse_playitem"></a>
## `avrcp/browse/playItem`

`luna://com.webos.service.bluetooth2/avrcp/browse/playItem`

Plays the browsed item. Note : When user selects a playable item (playable is set to true for the item in the getFolderItems response) among the items listed The application can call the API with the path received in the bluetooth2AvrcpFolderItem object of getFolderItems response to play the selected item.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `itemPath` | String (required) Indicates the path to the playable item in the current folder to be played. Note: Item path is received in the bluetooth2AvrcpFolderItem object of the getFolderItems API response. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/ avrcp/browse/playItem '{ "address":"AA:BB:CC:DD:EE:FF", "adapterAddress":"AA:BB:CC:DD:EE:FF", "itemPath":"player7/Filesystem/item4/item95" }
```

> ACG: bluetooth.management \| Returns: adapterAddress:String; address:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_browse_search"></a>
## `avrcp/browse/search`

`luna://com.webos.service.bluetooth2/avrcp/browse/search`

Searches an item in the current browsing folder (and its sub folders) using a search string. Note : The API succeeds only if the player is searchable. The "searchable" field of bluetooth2AvrcpPlayerInfo object for the addressed player received in the getPlayerInfo response indicates if the player supports search feature.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `searchString` | String (required) Indicates the string to search. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/ avrcp/browse/search '{ "address":"AA:BB:CC:DD:EE:FF", "adapterAddress":"AA:BB:CC:DD:EE:FF", "searchString":"abcd" }
```

> ACG: bluetooth.management \| Returns: adapterAddress:String; address:String; returnValue:Boolean; searchResult:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_connect"></a>
## `avrcp/connect`

`luna://com.webos.service.bluetooth2/avrcp/connect`

Opens an AVRCP connection to a remote Bluetooth device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/avrcp/connect '{"address":"AA:BB:CC:DD:EE:FF","subscribe":true}
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; errorText:String; errorCode:Number; subscribed:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_disconnect"></a>
## `avrcp/disconnect`

`luna://com.webos.service.bluetooth2/avrcp/disconnect`

Drops the connection to the given remote device on the AVRCP profile.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/avrcp/disconnect '{"address":"AA:BB:CC:DD:EE:FF"}
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_getmediametadata"></a>
## `avrcp/getMediaMetaData`

`luna://com.webos.service.bluetooth2/avrcp/getMediaMetaData`

Gets media metadata of the target from remote devices connected via AVRCP 1.3 profile.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Note: The caller must subscribe to this method. |
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/avrcp/getMediaMetaData '{ "subscribe":true, "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; subscribed:Boolean; address:String; adapterAddress:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_getmediaplaystatus"></a>
## `avrcp/getMediaPlayStatus`

`luna://com.webos.service.bluetooth2/avrcp/getMediaPlayStatus`

Gets the media metadata of the target from remote devices connected via AVRCP 1.3 profile.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Note: The caller must subscribe to this method. |
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/avrcp/getMediaPlayStatus '{ "subscribe":true }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; subscribed:Boolean; address:String; adapterAddress:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_getplayerapplicationsettings"></a>
## `avrcp/getPlayerApplicationSettings`

`luna://com.webos.service.bluetooth2/avrcp/getPlayerApplicationSettings`

Gets the player application settings value.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. |
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/avrcp/getPlayerApplicationSettings '{ "subscribe":true }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; subscribed:Boolean; address:String; adapterAddress:String; errorCode:String; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_getplayerinfo"></a>
## `avrcp/getPlayerInfo`

`luna://com.webos.service.bluetooth2/avrcp/getPlayerInfo`

Returns the information of the media players available that is received from AVRCP TG (AVRCP Target). Subscription response will be received by the application whenever a new media player is added or a media player is removed from the media player list received from AVRCP TG.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Default: false |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/avrcp/getPlayerInfo '{ "address":"AA:BB:CC:DD:EE:FF", "adapterAddress":"AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.management \| Returns: adapterAddress:String; address:String; subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String; playerInfo:Object array: bluetooth2AvrcpPlayerInfo \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_getremotevolume"></a>
## `avrcp/getRemoteVolume`

`luna://com.webos.service.bluetooth2/avrcp/getRemoteVolume`

Gets the volume of the remote device. Note: The method supports 'Volume Changed Notification' only.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Note: The caller must subscribe to this method. |
| `address` | String (optional) Indicates the address (bdaddr) of the remote device. Note : If not specified, returns all requested volume info from the all connected devices. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/avrcp/getRemoteVolume '{ "subscribe":true }
```

> ACG: bluetooth.management \| Returns: returnValue:String; subscribed:Boolean; adapterAddress:String; address:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_getstatus"></a>
## `avrcp/getStatus`

`luna://com.webos.service.bluetooth2/avrcp/getStatus`

Returns the status of an AVRCP connection to a remote Bluetooth device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/avrcp/getStatus '{"address":"AA:BB:CC:DD:EE:FF", "subscribe":true}
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; subscribed:Boolean; connecting:Boolean; connected:Boolean; adapterAddress:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_internal_disable"></a>
## `avrcp/internal/disable`

`luna://com.webos.service.bluetooth2/avrcp/internal/disable`

Disables the profile and role of AVRCP.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `role` | String (optional) Indicates the type of AVRCP role to be disabled. Possible values are: AVRCP-TG AVRCP-CT Note: If not specified, the role which is possible is disabled. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the default adapter will be used. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/avrcp/internal/disable '{ "role":"AVRCP-TG" }
```

> ACG: bluetooth.devutility \| Returns: adapterAddress:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_internal_enable"></a>
## `avrcp/internal/enable`

`luna://com.webos.service.bluetooth2/avrcp/internal/enable`

Enables the profile and the role of AVRCP.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `role` | String (optional) Indicates the AVRCP role to be enabled. Possible values are: AVRCP-TG AVRCP-CT Note: If not specified, the role which is possible is enabled. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the default adapter will be used. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/avrcp/internal/enable '{ "role":"AVRCP-TG" }
```

> ACG: bluetooth.devutility \| Returns: adapterAddress:String; returnValue:Boolean; errorCode:Boolean; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_internal_getremotebattery"></a>
## `avrcp/internal/getRemoteBattery`

`luna://com.webos.service.bluetooth2/avrcp/internal/getRemoteBattery`

Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/avrcp/internal/getRemoteBattery '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="avrcp_internal_getremotefeatures"></a>
## `avrcp/internal/getRemoteFeatures`

`luna://com.webos.service.bluetooth2/avrcp/internal/getRemoteFeatures`

Gets the remote AVRCP's features.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the default adapter will be used. If the application/service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/avrcp/internal/getRemoteFeatures '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.devutility \| Returns: returnValue:Boolean; adapterAddress:String; address:String; remoteFeatures:Object array: bluetooth2AvrcpRemoteFeatureInfo; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_internal_getsupportednotificationevents"></a>
## `avrcp/internal/getSupportedNotificationEvents`

`luna://com.webos.service.bluetooth2/avrcp/internal/getSupportedNotificationEvents`

Gets the remote AVRCP's supported notification events.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter executing this method. Note: If not specified, the default adapter will be used. If the application/service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Note: The caller must subscribe to this method. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/avrcp/internal/getSupportedNotificationEvents '{ "address":"AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.devutility \| Returns: returnValue:Boolean; adapterAddress:String; subscribed:Boolean; address:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_notifymediaplaystatus"></a>
## `avrcp/notifyMediaPlayStatus`

`luna://com.webos.service.bluetooth2/avrcp/notifyMediaPlayStatus`

Enables the AVRCP target to inform the AVRCP controller about the change in media play status or position without controller requesting for the same.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the default adapter is used |
| `address` | String (required) Indicates the address of the remote device. |
| `playbackStatus` | Object: bluetooth2PlayStatus (required) Indicates the information about the play status of the media. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/avrcp/ notifyMediaPlayStatus '{ "adapterAddress":"AA:BB:CC:DD:EE:FF", "address":"AA:BB:CC:DD:EE:FF", "playbackStatus":{ "duration":60000, "position":8000, "status":"playing" } }
```

> ACG: bluetooth.management \| Returns: adapterAddress:String; address:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_receivepassthroughcommand"></a>
## `avrcp/receivePassThroughCommand`

`luna://com.webos.service.bluetooth2/avrcp/receivePassThroughCommand`

Receives PATH THROUGH command from CT to TG. Note: The PASS THROUGH command is used to transfer user operation information from a CT (Controller) to Panel sub-unit on TG (Target).

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Note: The caller must subscribe to this method. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/avrcp/receivePassThroughCommand '{ "address": "AA:BB:CC:DD:EE:FF", "subscribe" : true }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; subscribed:Boolean; address:String; errorCode:Boolean; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_receiveregisternotificationabsolutevolume"></a>
## `avrcp/receiveRegisterNotificationAbsoluteVolume`

`luna://com.webos.service.bluetooth2/avrcp/receiveRegisterNotificationAbsoluteVolume`

Method on com.webos.service.bluetooth2 (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/avrcp/receiveRegisterNotificationAbsoluteVolume '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="avrcp_registernotificationabsolutevolumeresponse"></a>
## `avrcp/registerNotificationAbsoluteVolumeResponse`

`luna://com.webos.service.bluetooth2/avrcp/registerNotificationAbsoluteVolumeResponse`

Method on com.webos.service.bluetooth2 (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/avrcp/registerNotificationAbsoluteVolumeResponse '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="avrcp_sendpassthroughcommand"></a>
## `avrcp/sendPassThroughCommand`

`luna://com.webos.service.bluetooth2/avrcp/sendPassThroughCommand`

Sends PASS THROUGH command from CT (Controller) to TG (Target). Note: The PASS THROUGH command is used to transfer user operation information from the CT to the panel sub-unit on the TG.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `keyCode` | String (required) The key code which is operated. Possible values are: play pause mute stop next previous fastForward rewind volumeUp volumeDown |
| `keyStatus` | String (required) The key status. Possible values are: pressed released |
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/avrcp/sendPassThroughCommand '{ "keyCode":"play", "keyStatus":"pressed", "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; address:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_sendvendorpassthroughcommand"></a>
## `avrcp/sendVendorPassThroughCommand`

`luna://com.webos.service.bluetooth2/avrcp/sendVendorPassThroughCommand`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/avrcp/sendVendorPassThroughCommand '{}'
```

> ACG groups: all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="avrcp_setabsolutevolume"></a>
## `avrcp/setAbsoluteVolume`

`luna://com.webos.service.bluetooth2/avrcp/setAbsoluteVolume`

Sets the absolute volume on the target device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `volume` | Number (required) Indicates the requested volume level in percentage. Possible range: 0 ~ 100 . |
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/avrcp/setAbsoluteVolume '{ "address":"AA:BB:CC:DD:EE:FF", "volume":100 }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; address:String; errorCode:String; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_setplayerapplicationsettings"></a>
## `avrcp/setPlayerApplicationSettings`

`luna://com.webos.service.bluetooth2/avrcp/setPlayerApplicationSettings`

Sets the player application settings value.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `equalizer` | String (optional) Indicates the status of the equalizer. Possible values are: off on |
| `repeat` | String (optional) Indicates the status of repeat mode. Possible values are: off singletrack alltracks group |
| `shuffle` | String (optional) Indicates the status of shuffle. Possible values are: off alltracks group |
| `scan` | String (optional) Indicates the status of scan. Possible values are: off alltracks group |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/avrcp/setPlayerApplicationSettings '{ "address":"AA:BB:CC:DD:EE:FF", "equalizer":"on", "repeat":"on" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; address:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_supplymediametadata"></a>
## `avrcp/supplyMediaMetaData`

`luna://com.webos.service.bluetooth2/avrcp/supplyMediaMetaData`

Supplies media metadata of the target to remote devices connected via AVRCP 1.3 profile.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `requestId` | String (required) Indicates the unique ID of a request. Note: The format of requestId is "nnn", a three-digit number. |
| `metaData` | Object: bluetooth2MediaMetaData (required) Indicates the metaData of the media. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -f -i luna://com.webos.service.bluetooth2/avrcp/supplyMediaMetaData '{ "requestId":"001", "metaData":{ "title":"let it go", "artist":"demi lovato", "album":"disney frozen", "genre":"pop", "trackNumber":1, "trackCount":3, "duration":225 } }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; requestId:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="avrcp_supplymediaplaystatus"></a>
## `avrcp/supplyMediaPlayStatus`

`luna://com.webos.service.bluetooth2/avrcp/supplyMediaPlayStatus`

Supplies media play status of the target to remote devices connected via AVRCP 1.3 profile.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `requestId` | String (required) The unique ID of a request. The format of requestId is "nnn", a three-digit number. |
| `playbackStatus` | Object: bluetooth2PlayStatus (required) The information about play status of the media. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/avrcp/supplyMediaPlayStatus '{ "requestId":"001", "playbackStatus":{ "duration":225, "position":100, "status":"playing" } }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; requestId:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshappkeys"></a>
## `BleMeshAppKeys`

`luna://com.webos.service.bluetooth2/BleMeshAppKeys`

Object gives the info related to app-key used/created by the application

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshAppKeys '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshcompositiondata"></a>
## `BleMeshCompositionData`

`luna://com.webos.service.bluetooth2/BleMeshCompositionData`

Provides composition data information about a requested node.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshCompositionData '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshconfigrelaystatus"></a>
## `BleMeshConfigRelayStatus`

`luna://com.webos.service.bluetooth2/BleMeshConfigRelayStatus`

provide node relay information

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshConfigRelayStatus '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshelement"></a>
## `BleMeshElement`

`luna://com.webos.service.bluetooth2/BleMeshElement`

Object provides sequence of element descriptions

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshElement '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshfeature"></a>
## `BleMeshFeature`

`luna://com.webos.service.bluetooth2/BleMeshFeature`

Object information indicating the device features.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshFeature '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshinfo"></a>
## `BleMeshInfo`

`luna://com.webos.service.bluetooth2/BleMeshInfo`

Object provides mesh network information

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshInfo '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshkeyupdateresponse"></a>
## `BleMeshKeyUpdateResponse`

`luna://com.webos.service.bluetooth2/BleMeshKeyUpdateResponse`

Object representing the intermediate response during key update to nodes in the network.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshKeyUpdateResponse '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshnetkeys"></a>
## `BleMeshNetKeys`

`luna://com.webos.service.bluetooth2/BleMeshNetKeys`

Object provides the info related to network key

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshNetKeys '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshnode"></a>
## `BleMeshNode`

`luna://com.webos.service.bluetooth2/BleMeshNode`

Object containing a list of provisioned nodes in the network

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshNode '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshpayload_-_for_onoff_command"></a>
## `BleMeshPayload - for "onOff" command`

`luna://com.webos.service.bluetooth2/BleMeshPayload - for "onOff" command`

Payload object structure when the command is "onOff" in mesh/model/send API.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshPayload - for "onOff" command '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshpayload_-_for_passthrough_command"></a>
## `BleMeshPayload - for "passthrough" command`

`luna://com.webos.service.bluetooth2/BleMeshPayload - for "passthrough" command`

Payload object structure when the command is "passThrough" in mesh/model/send API.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshPayload - for "passthrough" command '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshprovisioner"></a>
## `BleMeshProvisioner`

`luna://com.webos.service.bluetooth2/BleMeshProvisioner`

Object provides provisioner related information

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshProvisioner '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="blemeshunprovisioneddevice"></a>
## `BleMeshUnprovisionedDevice`

`luna://com.webos.service.bluetooth2/BleMeshUnprovisionedDevice`

Array of BLE Mesh devices that are known to the system and that are not yet provisioned by the system

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/BleMeshUnprovisionedDevice '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2adapter"></a>
## `bluetooth2Adapter`

`luna://com.webos.service.bluetooth2/bluetooth2Adapter`

An object containing constant information about the adapter.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2Adapter '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2adapterstatus"></a>
## `bluetooth2AdapterStatus`

`luna://com.webos.service.bluetooth2/bluetooth2AdapterStatus`

Contains the information about the status of the adapter identified by the adapterAddress parameter. The following values are read-only: Discovering Pairable Pairing

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2AdapterStatus '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2advertisedata"></a>
## `bluetooth2AdvertiseData`

`luna://com.webos.service.bluetooth2/bluetooth2AdvertiseData`

Defines the format for data parameters.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2AdvertiseData '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2advertisesettings"></a>
## `bluetooth2AdvertiseSettings`

`luna://com.webos.service.bluetooth2/bluetooth2AdvertiseSettings`

Object containing information about the advertisement setting.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2AdvertiseSettings '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2aptxconfiguration"></a>
## `bluetooth2aptxConfiguration`

`luna://com.webos.service.bluetooth2/bluetooth2aptxConfiguration`

Object containing information about aptX configuration for A2DP.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2aptxConfiguration '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2avrcpfolderitem"></a>
## `bluetooth2AvrcpFolderItem`

`luna://com.webos.service.bluetooth2/bluetooth2AvrcpFolderItem`

Describes an item in the folder.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2AvrcpFolderItem '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2avrcpplayerinfo"></a>
## `bluetooth2AvrcpPlayerInfo`

`luna://com.webos.service.bluetooth2/bluetooth2AvrcpPlayerInfo`

Represents the media player information as received from AVRCP target.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2AvrcpPlayerInfo '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2avrcpremotefeatureinfo"></a>
## `bluetooth2AvrcpRemoteFeatureInfo`

`luna://com.webos.service.bluetooth2/bluetooth2AvrcpRemoteFeatureInfo`

Object containing information about avrcp remote features

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2AvrcpRemoteFeatureInfo '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2devicestatus"></a>
## `bluetooth2DeviceStatus`

`luna://com.webos.service.bluetooth2/bluetooth2DeviceStatus`

Contains the information about the status of the device identified by the address. Note: All object properties apart from name are read-only.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2DeviceStatus '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2gattcharacteristicinfo"></a>
## `bluetooth2GattCharacteristicInfo`

`luna://com.webos.service.bluetooth2/bluetooth2GattCharacteristicInfo`

Object containing information about a GATT characteristic.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2GattCharacteristicInfo '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2gattcharacteristicvalueinfo"></a>
## `bluetooth2GattCharacteristicValueInfo`

`luna://com.webos.service.bluetooth2/bluetooth2GattCharacteristicValueInfo`

Object containing information about the characteristic uuid and values.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2GattCharacteristicValueInfo '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2gattdescriptorinfo"></a>
## `bluetooth2GattDescriptorInfo`

`luna://com.webos.service.bluetooth2/bluetooth2GattDescriptorInfo`

Object containing information about a GATT descriptor.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2GattDescriptorInfo '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2gattmanufacturerdata"></a>
## `bluetooth2GattManufacturerData`

`luna://com.webos.service.bluetooth2/bluetooth2GattManufacturerData`

Indicates manufacturer-specific company ID and data (if advertised from the remote device, else it will be blank) and scanResponse data Note: If defined SCAN_RECORD only companyId and data will be available, if not all parameters visible

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 30+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2GattManufacturerData '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2gattpermissionsinfo"></a>
## `bluetooth2GattPermissionsInfo`

`luna://com.webos.service.bluetooth2/bluetooth2GattPermissionsInfo`

Object containing information about the permissions allowed for a client to use a particular characteristic value. All properties are defined in Bluetooth Core Specification 4.1 vol. 4 Part G chapter 3.3.1.1.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2GattPermissionsInfo '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2gattpropertiesinfo"></a>
## `bluetooth2GattPropertiesInfo`

`luna://com.webos.service.bluetooth2/bluetooth2GattPropertiesInfo`

Object containing information about the set properties of a characteristic. All properties are defined in Bluetooth Core Specification 4.1 vol. 4 Part G chapter 3.3.1.1.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2GattPropertiesInfo '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2gattserviceinfo"></a>
## `bluetooth2GattServiceInfo`

`luna://com.webos.service.bluetooth2/bluetooth2GattServiceInfo`

Object containing the GATT service configuration.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2GattServiceInfo '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2gattvalueinfo"></a>
## `bluetooth2GattValueInfo`

`luna://com.webos.service.bluetooth2/bluetooth2GattValueInfo`

Object contains information about a GATT value. As a GATT characteristic can be extended with a descriptor which describes the type of the stored value we have three different representations of a value currently: string number Array of numbers The last one is only used when not value type descriptor is present.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2GattValueInfo '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2lemanufacturerdata"></a>
## `bluetooth2LeManufacturerData`

`luna://com.webos.service.bluetooth2/bluetooth2LeManufacturerData`

Object containing information about manufacturer data.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2LeManufacturerData '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2leproprietarydataobject"></a>
## `bluetooth2LeProprietaryDataObject`

`luna://com.webos.service.bluetooth2/bluetooth2LeProprietaryDataObject`

Defines the format for proprietary data with vendor proprietary advertising type or undefined type in sil-api. Note: SIL stands for Stack Interface Layer

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2LeProprietaryDataObject '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2leservicedataobject"></a>
## `bluetooth2LeServiceDataObject`

`luna://com.webos.service.bluetooth2/bluetooth2LeServiceDataObject`

Object containing information about a service data to be advertised.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2LeServiceDataObject '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2leserviceobject"></a>
## `bluetooth2LeServiceObject`

`luna://com.webos.service.bluetooth2/bluetooth2LeServiceObject`

Object containing information about a service to be advertised.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2LeServiceObject '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2leserviceuuidobject"></a>
## `bluetooth2LeServiceUuidObject`

`luna://com.webos.service.bluetooth2/bluetooth2LeServiceUuidObject`

Object containing information about a service uuid to be advertised.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2LeServiceUuidObject '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2masinstances"></a>
## `bluetooth2MasInstances`

`luna://com.webos.service.bluetooth2/bluetooth2MasInstances`

Contains the list of supported MAS instances.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2MasInstances '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2masinstancesstatus"></a>
## `bluetooth2MasInstancesStatus`

`luna://com.webos.service.bluetooth2/bluetooth2MasInstancesStatus`

Contains an array of the MAS instances with the connection details.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2MasInstancesStatus '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2mediametadata"></a>
## `bluetooth2MediaMetaData`

`luna://com.webos.service.bluetooth2/bluetooth2MediaMetaData`

Contains information about a media metadata value. Note : string parameters accepts empty string as some meta data doesn't have particular info, and number parameters accepts non negative numbers

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2MediaMetaData '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2message"></a>
## `bluetooth2Message`

`luna://com.webos.service.bluetooth2/bluetooth2Message`

Indicates the description of the message .

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2Message '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2messagefilters"></a>
## `bluetooth2MessageFilters`

`luna://com.webos.service.bluetooth2/bluetooth2MessageFilters`

Indicates the list of filters.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2MessageFilters '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2messagelist"></a>
## `bluetooth2MessageList`

`luna://com.webos.service.bluetooth2/bluetooth2MessageList`

Indicates the message list.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2MessageList '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2messagenotificationproperties"></a>
## `bluetooth2MessageNotificationProperties`

`luna://com.webos.service.bluetooth2/bluetooth2MessageNotificationProperties`

Indicates the message notification properties.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2MessageNotificationProperties '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2messageproperties"></a>
## `bluetooth2MessageProperties`

`luna://com.webos.service.bluetooth2/bluetooth2MessageProperties`

Contains the list of supported Message properties.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2MessageProperties '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2newmessageproperties"></a>
## `bluetooth2NewMessageProperties`

`luna://com.webos.service.bluetooth2/bluetooth2NewMessageProperties`

Indicates the properties of the new message .

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2NewMessageProperties '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2pbapproperties"></a>
## `bluetooth2PbapProperties`

`luna://com.webos.service.bluetooth2/bluetooth2PbapProperties`

Contains supported properties from PSE device.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2PbapProperties '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2pbapsearchfilter"></a>
## `bluetooth2PbapSearchFilter`

`luna://com.webos.service.bluetooth2/bluetooth2PbapSearchFilter`

Filter with key & value pair to search the phonebook

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2PbapSearchFilter '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2pbapvcfhandles"></a>
## `bluetooth2PbapVcfHandles`

`luna://com.webos.service.bluetooth2/bluetooth2PbapVcfHandles`

Contains information about vcf files entries with name and vcf handle from selected phonebook path.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2PbapVcfHandles '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2playstatus"></a>
## `bluetooth2PlayStatus`

`luna://com.webos.service.bluetooth2/bluetooth2PlayStatus`

Contains the information about the media playstatus value.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2PlayStatus '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2pushrequest"></a>
## `bluetooth2PushRequest`

`luna://com.webos.service.bluetooth2/bluetooth2PushRequest`

Object containing information about an OPP push request

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2PushRequest '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2sbcconfiguration"></a>
## `bluetooth2SbcConfiguration`

`luna://com.webos.service.bluetooth2/bluetooth2SbcConfiguration`

Object containing information about SBC configuration for A2DP.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2SbcConfiguration '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2serviceclass"></a>
## `bluetooth2ServiceClass`

`luna://com.webos.service.bluetooth2/bluetooth2ServiceClass`

Contains the Bluetooth service class information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2ServiceClass '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="bluetooth2txpower"></a>
## `bluetooth2TxPower`

`luna://com.webos.service.bluetooth2/bluetooth2TxPower`

Object containing txpower information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/bluetooth2TxPower '{}'
```

> Service: Allows webOS to use remote Bluetooth devices. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="device_getconnecteddevices"></a>
## `device/getConnectedDevices`

`luna://com.webos.service.bluetooth2/device/getConnectedDevices`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.query); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `subscribe` | boolean |
| `adapterAddress` | string |
| `classOfDevice` | integer |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/device/getConnectedDevices '{}'
```

> Listed under ACG group "bluetooth.query" in the component api.json/groups.json; no parameter docs read. Params from the STRICT_SCHEMA in bluetoothmanagerservice.cpp.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json), [2](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/src/bluetoothmanagerservice.cpp)

<a id="device_getdiagnosis"></a>
## `device/getDiagnosis`

`luna://com.webos.service.bluetooth2/device/getDiagnosis`

Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/device/getDiagnosis '{}'
```

> ACG groups: all, bluetooth.query, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_getdiscovereddevice"></a>
## `device/getDiscoveredDevice`

`luna://com.webos.service.bluetooth2/device/getDiscoveredDevice`

Gets the newly discovered Bluetooth device information known to the system.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used |
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true : Subscribe for notifications. false : Not subscribed |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/device/getDiscoveredDevice '{ "subscribe":true }
```

> ACG: bluetooth.query \| Returns: subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; device:Object: bluetooth2DeviceStatus \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="device_gethistory"></a>
## `device/getHistory`

`luna://com.webos.service.bluetooth2/device/getHistory`

Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/device/getHistory '{}'
```

> ACG groups: all, bluetooth.query, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_getpaireddevices"></a>
## `device/getPairedDevices`

`luna://com.webos.service.bluetooth2/device/getPairedDevices`

Gets a list of paired Bluetooth devices info, known to the system.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used |
| `subscribe` | String (required) Indicates if subscribed to get notifications. Possible values are: true : Subscribe for notifications. false : Not subscribed |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/device/getPairedDevices '{ "subscribe":true }
```

> ACG: bluetooth.query \| Returns: subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; devices:Object array: bluetooth2DeviceStatus \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="device_getstatus"></a>
## `device/getStatus`

`luna://com.webos.service.bluetooth2/device/getStatus`

Gets the current status of remote Bluetooth devices known to the system.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Subscribe to this method if you require notifications about any changes in its response Possible values are: true: Subscribed. false (Default): Not subscribed. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/device/getStatus '{}
```

> ACG: bluetooth.query \| Returns: subscribed:Boolean; returnValue:Boolean; adapterAddress:String; devices:Object array: bluetooth2DeviceStatus \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="device_internal_getlinkkey"></a>
## `device/internal/getLinkKey`

`luna://com.webos.service.bluetooth2/device/internal/getLinkKey`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/device/internal/getLinkKey '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="device_internal_getstatus"></a>
## `device/internal/getStatus`

`luna://com.webos.service.bluetooth2/device/internal/getStatus`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/device/internal/getStatus '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="device_internal_setdebugvalue"></a>
## `device/internal/setDebugValue`

`luna://com.webos.service.bluetooth2/device/internal/setDebugValue`

Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/device/internal/setDebugValue '{}'
```

> ACG groups: all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_internal_startsniff"></a>
## `device/internal/startSniff`

`luna://com.webos.service.bluetooth2/device/internal/startSniff`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/device/internal/startSniff '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="device_internal_stopsniff"></a>
## `device/internal/stopSniff`

`luna://com.webos.service.bluetooth2/device/internal/stopSniff`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/device/internal/stopSniff '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="device_setstate"></a>
## `device/setState`

`luna://com.webos.service.bluetooth2/device/setState`

Sets the local values for the state of a remote device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `trusted` | Boolean (optional) Indicates whether to set a remote device as a trusted device. Possible values are: true: Sets it as a trusted device false (Default): Sets it as a untrusted device. |
| `blocked` | Boolean (optional) Indicates whether to block (if set) or unblock (if reset) a remote device for pairing and profile connections. Possible values are: true: Blocks incoming connections. Any incoming connection from the device will be immediately rejected. Also, device drivers will be removed and no new ones will be probed as long as the device is blocked. false (Default): Unblocks connections. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/device/setState '{"address":"AA:BB:CC:DD:EE:FF", "trusted":true}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="ftp_connect"></a>
## `ftp/connect`

`luna://com.webos.service.bluetooth2/ftp/connect`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/ftp/connect '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ftp_disconnect"></a>
## `ftp/disconnect`

`luna://com.webos.service.bluetooth2/ftp/disconnect`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/ftp/disconnect '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ftp_getstatus"></a>
## `ftp/getStatus`

`luna://com.webos.service.bluetooth2/ftp/getStatus`

Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/ftp/getStatus '{}'
```

> ACG groups: public, private, all, bluetooth.query, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ftp_listdirectory"></a>
## `ftp/listDirectory`

`luna://com.webos.service.bluetooth2/ftp/listDirectory`

Lister on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/ftp/listDirectory '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ftp_pullfile"></a>
## `ftp/pullFile`

`luna://com.webos.service.bluetooth2/ftp/pullFile`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/ftp/pullFile '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ftp_pushfile"></a>
## `ftp/pushFile`

`luna://com.webos.service.bluetooth2/ftp/pushFile`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/ftp/pushFile '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gatt_addservice"></a>
## `gatt/addService`

`luna://com.webos.service.bluetooth2/gatt/addService`

Adds a new service definition to the local database. Note: The new service will be directly exposed to clients which are discovering available services.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `service` | String (required) Indicates the unique identifier of the service. |
| `type` | String (required) Indicates the type of the service. Possible values are: primary secondary |
| `includes` | String array (required) Indicates an array that contains a list of UUIDs the service includes. |
| `characteristics` | Object array: bluetooth2GattCharacteristicInfo (required) Indicates the information about GATT characteristics of the service. |
| `serverId` | String (optional) Indicates the server identifier to add the service to. Note : If not specified, the default value of serverId is used automatically. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/addService '{ "service":"6161", "type":"primary", "includes":[ ], "characteristics":[ { "characteristic":"1a4ef224-f27a-11e4-b9b2-1697f925ec7b", "properties":{ "broadcast":true, "read":true, "indicate":true, "write":true, "notify":true }, "permissions":{ "read":true, "write":true }, "value":{ "bytes":[ 34, 0, 12, 99 ] }, "descriptors":[ { "descriptor":"f000ffc1-0451-4000-b000-000000000000", "value":{ "bytes":[ 0 ] } } ] } ] }
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; returnValue:Boolean; serverId:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_ancs_advertise"></a>
## `gatt/ancs/advertise`

`luna://com.webos.service.bluetooth2/gatt/ancs/advertise`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/gatt/ancs/advertise '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gatt_ancs_awaitconnectionrequest"></a>
## `gatt/ancs/awaitConnectionRequest`

`luna://com.webos.service.bluetooth2/gatt/ancs/awaitConnectionRequest`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/gatt/ancs/awaitConnectionRequest '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gatt_ancs_awaitnotifications"></a>
## `gatt/ancs/awaitNotifications`

`luna://com.webos.service.bluetooth2/gatt/ancs/awaitNotifications`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/gatt/ancs/awaitNotifications '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gatt_ancs_connect"></a>
## `gatt/ancs/connect`

`luna://com.webos.service.bluetooth2/gatt/ancs/connect`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/gatt/ancs/connect '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gatt_ancs_disconnect"></a>
## `gatt/ancs/disconnect`

`luna://com.webos.service.bluetooth2/gatt/ancs/disconnect`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/gatt/ancs/disconnect '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gatt_ancs_getstatus"></a>
## `gatt/ancs/getStatus`

`luna://com.webos.service.bluetooth2/gatt/ancs/getStatus`

Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/gatt/ancs/getStatus '{}'
```

> ACG groups: public, private, all, bluetooth.query, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gatt_ancs_performnotificationaction"></a>
## `gatt/ancs/performNotificationAction`

`luna://com.webos.service.bluetooth2/gatt/ancs/performNotificationAction`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/gatt/ancs/performNotificationAction '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gatt_ancs_queryappattributes"></a>
## `gatt/ancs/queryAppAttributes`

`luna://com.webos.service.bluetooth2/gatt/ancs/queryAppAttributes`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/gatt/ancs/queryAppAttributes '{}'
```

> ACG groups: public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gatt_ancs_querynotificationattributes"></a>
## `gatt/ancs/queryNotificationAttributes`

`luna://com.webos.service.bluetooth2/gatt/ancs/queryNotificationAttributes`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/gatt/ancs/queryNotificationAttributes '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gatt_closeserver"></a>
## `gatt/closeServer`

`luna://com.webos.service.bluetooth2/gatt/closeServer`

Closes the BluetoothGattServer.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `serverId` | String (required) Indicates the unique identifier of a server to remove on the stack. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/closeServer '{"serverId":"001"}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_connect"></a>
## `gatt/connect`

`luna://com.webos.service.bluetooth2/gatt/connect`

Connects to the GATT profile on the specified remote device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true: Subscribed for notifications. false: Not subscribed. Default : false Note: Disconnection can also happen when local adapter calls the gatt/disconnect method (initiated by the local user) |
| `autoConnect` | Boolean (optional) Indicates if the remote device is automatically connected. Possible values are: true : Automatically connects as soon as the remote device becomes available. false : Manually connect to the remote device. Default: false |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/connect '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapaterAddress:String; address:String; errorCode:Number; errorText:String; clientId:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_disconnect"></a>
## `gatt/disconnect`

`luna://com.webos.service.bluetooth2/gatt/disconnect`

Drops the connection to the given remote device on GATT profile.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `clientId` | String (required) Indicates the unique identifier of the remote device. Format: "nnn", 3 digit number increasing sequentially. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/disconnect '{ "clientId":"002" }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; address:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_discoverservices"></a>
## `gatt/discoverServices`

`luna://com.webos.service.bluetooth2/gatt/discoverServices`

Discovers available services for the given remote device. Pre-requisite: The given remote device should be connected through gatt/connect method. Otherwise, the method will fail. Note: When a discovery process is already running, any further call to this method will succeed but will not restart the discovery. Current discovery state is notified through gatt/getStatus method. Discovered services are notified through gatt/getServices method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (optional) Indicates the address of the remote device. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/discoverServices '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; address:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_getservices"></a>
## `gatt/getServices`

`luna://com.webos.service.bluetooth2/gatt/getServices`

Gets available services for either the given local Bluetooth adapter or remote device. Note: Depending on the passed parameter, a list of services is returned: If adapterAddress is passed, a list of services for the given adapter will be returned. If address is passed, a list of services for the given remote device will be returned. If both address and adapterAddress are passed, the method will return an error. If none of both is passed, the method will return an error.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (required) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/getServices '{"adapterAddress":"AA:BB:CC:DD:EE:FF"}
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; address:String; services:Object array: bluetooth2GattServiceInfo; returnValue:Boolean; subscribed:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_getstatus"></a>
## `gatt/getStatus`

`luna://com.webos.service.bluetooth2/gatt/getStatus`

Returns the status of GATT connection to the given remote device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/getStatus '{"address":"AA:BB:CC:DD:EE:FF"}
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; adapterAddress:String; address:String; connecting:Boolean; connected:Boolean; discoveringServices:Boolean; subscribed:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_monitorcharacteristic"></a>
## `gatt/monitorCharacteristic`

`luna://com.webos.service.bluetooth2/gatt/monitorCharacteristic`

Monitors specific characteristic value changes. Note: If the characteristic is not marked as being notifiable, the method will fail. If the address is not set, monitors specific characteristics of the local service for value changes. If the address is set, monitors specific characteristics of the given remote device for characteristic value changes.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `service` | String (optional) Indicates the UUID of the service the characteristic belongs to. Note : Either this and characteristic , or instanceId is required. |
| `characteristic` | String (optional) Indicates the UUID of the characteristic to be monitored. Note : Either this and service , or instanceId is required. |
| `InstanceId` | String (optional) Indicates the unique identifier of a characteristic to monitored, which has the following format: "nnn". Note: Either this, or service and characteristic are required. |
| `serverId` | String (optional) Indicates the identifier of server to get the characteristic from. To read the value of characteristic, set serverId to specific server identifier. Or to read in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find characteristic in the webOS device. |
| `clientId` | String (optional) Indicates the identifier of the remote device (client) to get the characteristic from. To read the value of characteristics, set serverId to specific server identifier. Or to read in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find characteristics in the webOS device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Note: Must set subscribe to true . |

```sh
luna-send -f -i luna://com.webos.service.bluetooth2/gatt/monitorCharacteristic '{ "clientId":"007", "service":"7905f431-b5ce-4e99-a40f-4b1e122d00d0", "characteristic":"9fbf120d-6301-42d9-8c58-25e699a21dbd", "subscribe":true }
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; address:String; subscribed:Boolean; returnValue:Boolean; errorCode:String; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_monitorcharacteristics"></a>
## `gatt/monitorCharacteristics`

`luna://com.webos.service.bluetooth2/gatt/monitorCharacteristics`

Monitors specific characteristic value changes. If the characteristic is not marked as being notifiable, the method will fail.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `service` | String (required) Indicates the UUID of the service to which the characteristic belongs to. |
| `characteristics` | String array (required) Indicates an array of strings where each string is a UUID of a characteristic to be monitored. |
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed. false: Not subscribed. |
| `serverId` | String (optional) Indicates the identifier of the server to get the characteristic from. Note : To be informed of changes to the value of characteristics, set serverId to specific server identifier. Or to be informed in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find characteristics in the webOS device. |
| `clientId` | String (optional) Indicates the identifier of the remote device (client) to get the characteristics from. Note : To be informed of changes to the value of characteristics, set serverId to specific server identifier. Or to be informed in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find characteristics in the webOS device. |

```sh
luna-send -f -i luna://com.webos.service.bluetooth2/gatt/monitorCharacteristics '{ "service":"7905f431-b5ce-4e99-a40f-4b1e122d00d0", "characteristics":["9fbf120d-6301-42d9-8c58-25e699a21dbd"], "subscribe":true }
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; address:String; subscribed:Boolean; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_openserver"></a>
## `gatt/openServer`

`luna://com.webos.service.bluetooth2/gatt/openServer`

Opens the BluetoothGattServer managing services.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/openServer '{}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; serverId:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_readcharacteristicvalue"></a>
## `gatt/readCharacteristicValue`

`luna://com.webos.service.bluetooth2/gatt/readCharacteristicValue`

Reads the value of a specific characteristic. Note: When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache. When called from server side, the method just returns stored value from the local database.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `service` | String (optional) Indicates the unique identifier of the service the characteristic belongs to. Note : Either this and characteristic , or instanceId is required. |
| `characteristic` | String (optional) Indicates the unique identifier of the characteristic to read. Note : Either this and service , or instanceId is required. |
| `instanceId` | String (optional) Indicates the unique ID of the characteristic to read, which has the following format: "nnn". Note : Either this, or service and characteristic are required. |
| `serverId` | String (optional) Indicates the identifier of server to get the characteristic from. To read the value of characteristics, set serverId to specific server identifier. Or to read in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find characteristics in the webOS device. |
| `clientId` | String (optional) Indicates the identifier of the remote device (client) to get the characteristic from. To read the value of characteristics, set serverId to specific server identifier. Or to read in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find characteristics in the webOS device. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/readCharacteristicValue '{ "adapterAddress":"AA:BB:CC:DD:EE:FF", "service":"f000aa00-0451-4000-b000-000000000000", "characteristic":"f000aa01-0451-4000-b000-000000000000" }
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; returnValue:Boolean; address:String; service:String; value:Object: bluetooth2GattCharacteristicInfo \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_readcharacteristicvalues"></a>
## `gatt/readCharacteristicValues`

`luna://com.webos.service.bluetooth2/gatt/readCharacteristicValues`

Reads the value of a specific characteristic. When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache. When called from server side, the method just returns stored value from the local database.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used |
| `service` | String (required) Indicates the unique identifier of the service the characteristic belongs to. |
| `characteristics` | String array (required) Indicates the unique identifiers of the characteristics to read. |
| `serverId` | String (optional) Indicates the identifier of server to get the characteristic from. Note : To read the value of characteristics, set serverId to specific server identifier. Or to read in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find characteristics in the webOS device. |
| `clientId` | String (optional) Indicates the identifier of the remote device (client) to get the characteristic from. Note : To read the value of characteristics, set serverId to specific server identifier. Or to read in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find characteristics in the webOS device. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/readCharacteristicValues '{ "service":"f000aa00-0451-4000-b000-000000000000", "characteristics":["f000aa01-0451-4000-b000-000000000000"] }
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; address:String; service:String; values:Object array: bluetooth2GattCharacteristicInfo; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_readdescriptorvalue"></a>
## `gatt/readDescriptorValue`

`luna://com.webos.service.bluetooth2/gatt/readDescriptorValue`

Reads the value of descriptor of a service characteristic either in the local adapter or the remote device. When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache. When called from server side, the method just returns stored value from the local database.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used |
| `service` | String (optional) Indicates the unique identifier of the service the characteristic belongs to. Note : Either this and characteristic and descriptor , or instanceId is required. |
| `characteristic` | String (optional) Indicates the unique identifier of the characteristic the descriptor belongs to. Note : Either this and service and descriptor , or instanceId is required. |
| `descriptor` | String (optional) Indicates the Uuid of descriptor. Note : Either this and service and characteristic , or instanceId is required. |
| `instanceId` | String (optional) Unique identifier of the descriptor to read, which has the following format: "nnn". Either this, or service and characteristic , descriptor are required. |
| `serverId` | String (optional) Indicates the identifier of server to get the descriptors from. Note : To read the value of descriptors, set serverId to specific server identifier. Or to read in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find descriptors in the webOS device. |
| `clientId` | String (optional) Indicates the identifier of remote device (client) to get the descriptors from. Note : To read the value of descriptors, set serverId to specific server identifier. Otherwise, set clientId to specific remote device identifier. if both serverId and clientId not specified, find descriptors in the webOS device. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/readDescriptorValue '{ "service":"f000aa40-0451-4000-b000-000000000000", "characteristic":"f000aa41-0451-4000-b000-000000000000" "descriptor":"00002902-0000-1000-8000-00805f9b34fc" }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; address:String; service:String; characteristic:String; value:Object: bluetooth2GattDescriptorInfo \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_readdescriptorvalues"></a>
## `gatt/readDescriptorValues`

`luna://com.webos.service.bluetooth2/gatt/readDescriptorValues`

Read the value of descriptor(s) of a service characteristic either in the local adapter or the remote device. When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache. When called from server side, the method just returns stored value from the local database.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used |
| `service` | String (required) Indicates the unique identifier of the service the descriptor belongs to. |
| `characteristic` | String (required) Indicates the unique identifier of the characteristic the descriptor belongs to. |
| `descriptors` | String array (required) Indicates the array of descriptors UUIDs. |
| `serverId` | String (optional) Indicates the identifier of server to get the descriptors from. Note : To read the value of descriptors, set serverId to specific server identifier. Or to read in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find descriptors in the webOS device. |
| `clientId` | String (optional) Indicates the identifier of the remote device (client) to get the descriptors from. Note : To read the value of descriptors, set serverId to specific server identifier. Otherwise, set clientId to specific remote device identifier. if both serverId and clientId not specified, find descriptors in the webOS device. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/readDescriptorValues '{ "serverId":"001", "service":"f000aa40-0451-4000-b000-000000000000", "characteristic":"f000aa41-0451-4000-b000-000000000000", "descriptors":["00002902-0000-1000-8000-00805f9b34fc"] }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; address:String; service:String; characteristic:String; values:Object array: bluetooth2GattDescriptorInfo \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_removeservice"></a>
## `gatt/removeService`

`luna://com.webos.service.bluetooth2/gatt/removeService`

Remove a service definition from the local database. All characteristics which belong to the service will be also removed. If the given service is included by another service, the method will fail.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used |
| `service` | String (required) Indicates the unique identifier of the service. |
| `serverId` | String (optional) Indicates the identifier of server to remove the service from. Note : To remove the service, set serverId to specific server identifier. If not specified, find service with uuid in the webOS device. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/removeService '{"service":"6161"}
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_writecharacteristicvalue"></a>
## `gatt/writeCharacteristicValue`

`luna://com.webos.service.bluetooth2/gatt/writeCharacteristicValue`

Writes the value for a local or remote characteristic.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used |
| `service` | String (optional) Indicates the UUID of the service the characteristic belongs to. Note : Either this and service , or instanceId is required. |
| `characteristic` | String (optional) Indicates the UUID (unique identifier) of the characteristic. Note : Either this and service , or instanceId is required. |
| `instanceId` | String (optional) Indicates the unique identifier of the descriptors to read, which has the following format: "nnn". Note : Either this, or service and characteristic are required. |
| `value` | Object: bluetooth2GattValueInfo (required) Indicates the value of the characteristic. Note : A value can only have one type and depending on this type one of the fields "string", "number" or "bytes" should be passed. If multiple fields are passed, the method will fail. |
| `serverId` | String (optional) Indicates the identifier of server to get the characteristic from. Note : To write the value of characteristic, set serverId to specific server identifier. Or to write in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find characteristic in the webOS device. |
| `clientId` | String (optional) Indicates the identifier of the remote device (client) to get the characteristic from. Note : To write the value of characteristic, set serverId to specific server identifier. Or to write in remote device, set clientId to specific remote device identifier. If both serverId and clientId not specified, find characteristic in the webOS device. |
| `writeType` | String (optional) Indicates the writeType of the characteristic. Possible values are: default noresponse signed |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/writeCharacteristicValue '{ "clientId":"001", "service":"f000aa00-0451-4000-b000-000000000000", "characteristic":"f000aa02-0451-4000-b000-000000000000", "value":{"bytes":[1]} }
```

> ACG: bluetooth.operation \| Returns: adapterAddress:String; address:String; returnValue:Boolean; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="gatt_writedescriptorvalue"></a>
## `gatt/writeDescriptorValue`

`luna://com.webos.service.bluetooth2/gatt/writeDescriptorValue`

Writes the value of a specific descriptor of a service characteristic either in the local adapter or the remote device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used |
| `service` | String (optional) Indicates the unique identifier of the service the descriptor belongs to. Note : Either this and characteristic and descriptor , or instanceId is required. |
| `characteristic` | String (optional) Indicates the unique identifier of the characteristic the descriptor belongs to. Note : Either this and service and descriptor , or instanceId is required. |
| `descriptor` | String (optional) Indicates the unique identifier of the descriptor. Note : Either this and service and characteristic , or instanceId is required. |
| `instanceId` | String (optional) Indicates the unique identifier of the descriptors to read, which has the following format: "nnn". Note : Either this, or service and characteristic are required. |
| `value` | Object: bluetooth2GattValueInfo (required) Indicates the value of the descriptor. Note : A value can only have one type. Depending on this type, one of the fields "string", "number" or "bytes" is passed. If multiple fields are passed, the method will fail. |
| `serverId` | String (optional) Indicates the identifier of server to get the descriptor from. Note : To write the value of descriptor, set serverId to specific server identifier. Or to write in remote device, set clientId to specific remote device identifier. if both serverId and clientId not specified, find descriptor in the webOS device. |
| `clientId` | String (optional) Indicates the identifier of the remote device (client) to get the descriptor from. Note : To write the value of descriptor, set serverId to specific server identifier. Or to write in remote device, set clientId to specific remote device identifier. if both serverId and clientId not specified, find descriptor in the webOS device. |

```sh
luna-send -f -n 1 luna://com.webos.service.bluetooth2/gatt/writeDescriptorValue '{ "clientId":"001", "service":"f000aa40-0451-4000-b000-000000000000", "characteristic":"f000aa41-0451-4000-b000-000000000000", "descriptor":"00002902-0000-1000-8000-00805f9b34fb", "value":{"bytes":[1, 0]} }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; address:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="hfp_closesco"></a>
## `hfp/closeSCO`

`luna://com.webos.service.bluetooth2/hfp/closeSCO`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hfp/closeSCO '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hfp_connect"></a>
## `hfp/connect`

`luna://com.webos.service.bluetooth2/hfp/connect`

Opens a HFP connection to a remote device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true : Subscribe to get notifications false : Not subscribed Default: false |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/hfp/connect
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; subscribed:Boolean; adapterAddress:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="hfp_disconnect"></a>
## `hfp/disconnect`

`luna://com.webos.service.bluetooth2/hfp/disconnect`

Drops the connection to the given remote device on the HFP profile.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hfp/disconnect'{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.operation \| Returns: returnValues:Boolean; adapterAddress:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="hfp_getstatus"></a>
## `hfp/getStatus`

`luna://com.webos.service.bluetooth2/hfp/getStatus`

Returns the status of a HFP connection to a remote device. If address input parameter is not specified, the method will return the information of the device whose connection status has been changed.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true : Subscribe to get notifications false : Not subscribed |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hfp/getStatus'{ "address":"AA:BB:CC:DD:EE:FF", "subscribe":false }
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; subscribed:Boolean; connecting:Boolean; connected:Boolean; sco:Boolean; adapterAddress:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="hfp_indicatecall"></a>
## `hfp/indicateCall`

`luna://com.webos.service.bluetooth2/hfp/indicateCall`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hfp/indicateCall '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hfp_opensco"></a>
## `hfp/openSCO`

`luna://com.webos.service.bluetooth2/hfp/openSCO`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hfp/openSCO '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hfp_receiveat"></a>
## `hfp/receiveAT`

`luna://com.webos.service.bluetooth2/hfp/receiveAT`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hfp/receiveAT '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hfp_receiveresult"></a>
## `hfp/receiveResult`

`luna://com.webos.service.bluetooth2/hfp/receiveResult`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hfp/receiveResult '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hfp_sendat"></a>
## `hfp/sendAT`

`luna://com.webos.service.bluetooth2/hfp/sendAT`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hfp/sendAT '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hfp_sendresult"></a>
## `hfp/sendResult`

`luna://com.webos.service.bluetooth2/hfp/sendResult`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hfp/sendResult '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="hid_connect"></a>
## `hid/connect`

`luna://com.webos.service.bluetooth2/hid/connect`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hid/connect '{}'
```

> Listed under ACG group "bluetooth.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="hid_disconnect"></a>
## `hid/disconnect`

`luna://com.webos.service.bluetooth2/hid/disconnect`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hid/disconnect '{}'
```

> Listed under ACG group "bluetooth.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="hid_getstatus"></a>
## `hid/getStatus`

`luna://com.webos.service.bluetooth2/hid/getStatus`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.query); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hid/getStatus '{}'
```

> Listed under ACG group "bluetooth.query" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="hid_internal_getreport"></a>
## `hid/internal/getReport`

`luna://com.webos.service.bluetooth2/hid/internal/getReport`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hid/internal/getReport '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="hid_internal_senddata"></a>
## `hid/internal/sendData`

`luna://com.webos.service.bluetooth2/hid/internal/sendData`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hid/internal/sendData '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="hid_internal_setreport"></a>
## `hid/internal/setReport`

`luna://com.webos.service.bluetooth2/hid/internal/setReport`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.devutility); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/hid/internal/setReport '{}'
```

> Listed under ACG group "bluetooth.devutility" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="le_configureadvertisement"></a>
## `le/configureAdvertisement`

`luna://com.webos.service.bluetooth2/le/configureAdvertisement`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/le/configureAdvertisement '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="le_disableadvertising"></a>
## `le/disableAdvertising`

`luna://com.webos.service.bluetooth2/le/disableAdvertising`

Stops and disables advertising Note: Call this method after le/startAdvertising.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Address of the adapter. Note: If not specified, the address of the default adapter is used. |
| `advertiserId` | Number (required) ID of the started advertisement. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/le/disableAdvertising '{"advertiserId":1}
```

> ACG: bluetooth.operation \| Returns: advertiserId:Number; returnValue:Boolean; adapterAddress:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="le_getstatus"></a>
## `le/getStatus`

`luna://com.webos.service.bluetooth2/le/getStatus`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.query); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/le/getStatus '{}'
```

> Listed under ACG group "bluetooth.query" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="le_internal_startscan"></a>
## `le/internal/startScan`

`luna://com.webos.service.bluetooth2/le/internal/startScan`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/le/internal/startScan '{}'
```

> ACG groups: all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="le_setscanparameters"></a>
## `le/setScanParameters`

`luna://com.webos.service.bluetooth2/le/setScanParameters`

Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/le/setScanParameters '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="le_startadvertising"></a>
## `le/startAdvertising`

`luna://com.webos.service.bluetooth2/le/startAdvertising`

Starts broadcasting the Bluetooth Low Energy advertisement.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter executing this method. If not specified, the default adapter will be used. |
| `subscribe` | Boolean (required) Since subscription ends only when the client chooses to close it. Possible values are: true: Subscribed. Must always be set to true. false: Not subscribed. |
| `settings` | Object: bluetooth2AdvertiseSettings (optional) Defines the format for advertiser setting parameters. |
| `advertiseData` | Object: bluetooth2AdvertiseData (optional) Defines the format for scan request data parameters. |
| `scanResponse` | Object: bluetooth2AdvertiseData (optional) Defines the format for scan response data parameters. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/le/startAdvertising '{ "subscribe":true, "advertiseData":{ "manufacturerData":[ 1, 2, 3, 4 ], "proprietaryData":[ { "type":27, "data":[ 5, 6, 7, 8 ] } ], "includeTxPower":true, "services":[ { "uuid":"aada", "data":[ 7, 8, 9, 0 ] } ], "includeName":false } }
```

> ACG: bluetooth.operation \| Returns: subscribed:Boolean; returnValue:Boolean; adapterAddress:String; advertiserId:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="le_startmultiscan"></a>
## `le/startMultiScan`

`luna://com.webos.service.bluetooth2/le/startMultiScan`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/le/startMultiScan '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="le_startscan"></a>
## `le/startScan`

`luna://com.webos.service.bluetooth2/le/startScan`

Starts scanning only ble devices.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (optional) Indicates the MAC address. |
| `subscribe` | Boolean (required) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Default : false |
| `name` | String (optional) Indicates the name of the device. |
| `serviceUuid` | Object: bluetooth2LeServiceUuidObject (optional) Object containing information about the serviceUuid to be advertised. |
| `serviceData` | Object: bluetooth2LeServiceDataObject (optional) Object containing information about a serviceData to be advertised. |
| `manufacturerData` | Object: bluetooth2LeManufacturerData (optional) Object containing information about a manufacturerData. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. |

```sh
luna-send -f -i luna://com.webos.service.bluetooth2/le/startScan '{ "subscribe":true, "serviceUuid":{"uuid":"aaaaffe3-aaaa-1000-8000-00805f9b34fc"} }
```

> ACG: bluetooth.operation \| Returns: subscribed:Boolean; returnValue:Boolean; adapterAddress:String; errorCode:Number; errorText:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="le_stopadvertising"></a>
## `le/stopAdvertising`

`luna://com.webos.service.bluetooth2/le/stopAdvertising`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/le/stopAdvertising '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="le_updateadvertising"></a>
## `le/updateAdvertising`

`luna://com.webos.service.bluetooth2/le/updateAdvertising`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.operation); name only

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `advertiserId` | integer (required) |
| `adapterAddress` | string |
| `settings` | object {connectable,txPower,minInterval,maxInterval,timeout} |
| `advertiseData` | object |
| `scanResponse` | object |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/le/updateAdvertising '{}'
```

> Listed under ACG group "bluetooth.operation" in the component api.json/groups.json; no parameter docs read. Params from the STRICT_SCHEMA in bluetoothmanagerservice.cpp.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json), [2](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/src/bluetoothmanagerservice.cpp)

<a id="leaudio_internal_updatebroadcastmetadata"></a>
## `leaudio/internal/updateBroadcastMetadata`

`luna://com.webos.service.bluetooth2/leaudio/internal/updateBroadcastMetadata`

Method on com.webos.service.bluetooth2 (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/leaudio/internal/updateBroadcastMetadata '{}'
```

> ACG groups: bluetooth.manage, devices. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="map_connect"></a>
## `map/connect`

`luna://com.webos.service.bluetooth2/map/connect`

Connects to the MAS Instance of the specified remote device. Note: The method is available only for MCE .

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device (MSE). |
| `instanceName` | String (optional) Indicates the specific MAS instance of the MSE required for the connection to be initiated. Note : If the instanceName is not passed and server supports multiple instances, then the first available MAS instance of MSE is connected. The client can get available instance name by calling map/getMASInstances |
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true : Subscribe to get notifications. false : Not subscribed. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/map/connect '{ "adapterAddress":"b8:27:eb:13:68 :c0", "address":"AA:BB:CC:DD:EE:FF", "instanceName":"SMS/MMS", "subscribe":true }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; subscribed:Boolean; address:String; adapterAddress:String; instanceName:String; sessionId:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="map_disconnect"></a>
## `map/disconnect`

`luna://com.webos.service.bluetooth2/map/disconnect`

Disconnects from the MAS Instance on the specified remote device. Note: The method is available only for MCE .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `sessionId` | String (required) Indicates the unique identifier of the session which was received as a connection response from the map/connect . |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/map/disconnect '{ "adapterAddress":"b8:27:eb: 13:68:c0", "address":"AA:BB:CC:DD:EE:FF", "sessionId":"session1" }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; instanceName:String; sessionId:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="map_getfolderlist"></a>
## `map/getFolderList`

`luna://com.webos.service.bluetooth2/map/getFolderList`

Lists the available folders of the connected MAS instance of the MSE device. Note: This method is available only for MCE.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the remote Bluetooth device address(MSE). |
| `sessionId` | String (required) Indicates the unique identifier of the session which was received as a connection response from map/connect . |
| `startOffset` | Number (optional) Indicates the Offset of the first item. Default: 0 |
| `maxListCount` | Number (optional) Indicates the maximum number of items. Default: 1024 |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/map/getFolderList '{ "adapterAddress":"b8:27:eb :13:68:c0", "address":"AA:BB:CC:DD:EE:FF", "sessionId":"session2" }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; folders:String array; instanceName:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="map_getmasinstances"></a>
## `map/getMASInstances`

`luna://com.webos.service.bluetooth2/map/getMASInstances`

Retrieves the MAS instance details of a MSE device. MAP MSE devices may present one or several MAS Instances to the MCE, each providing the overall MAP MSE server functionality. Note: The method is available only for MCE .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote Bluetooth device address(MSE). |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/map/getMASInstances '{ "adapterAddress":"b8:2 7:eb:13:68:c0", "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.query \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; masInstances:Object array: bluetooth2MasInstances; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="map_getmessage"></a>
## `map/getMessage`

`luna://com.webos.service.bluetooth2/map/getMessage`

Downloads the specific message based on the message handle. Note: This method is available only for MCE.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the remote Bluetooth device address(MSE). |
| `handle` | String (required) Indicates the message handle. |
| `destinationFile` | String (optional) Indicates the name of the destination file. Note : If not provided, it will be set as per the message handle. |
| `attachment` | Boolean (optional) Indicates if attachments are included in the bMessage object returned by the MSE. Possible values are: false : Indicates that the no attachments included in the bMessage object true : Indicates that the attachments included in the bMessage object Default: false |
| `sessionId` | String (required) Indicates the unique identifier of the session which was received as a connection response from the map/connect . |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/map/getMessage '{ "adapterAddress":"b8:27:eb: 13:68:c0", "address":"AA:BB:CC:DD:EE:FF", "sessionId":"session2", "handle":"message288230376151723506" }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; destinationFile:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="map_getmessagefilters"></a>
## `map/getMessageFilters`

`luna://com.webos.service.bluetooth2/map/getMessageFilters`

Returns all the available fields that can be used in the fields filter of the getMessageList .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the remote Bluetooth device address(MSE). |
| `sessionId` | String (required) Indicates the unique identifier of the session which was received as a connection response from the map/connect . |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/map/getMessageFilters '{ "adapterAddress":"b8:2 7:eb:13:68:c0", "address":"AA:BB:CC:DD:EE:FF", "sessionId":"session2" }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; filters:String array; instanceName:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="map_getmessagelist"></a>
## `map/getMessageList`

`luna://com.webos.service.bluetooth2/map/getMessageList`

Gets the message list of the specific folder of the connected MAS instance of the MSE device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the remote Bluetooth device address(MSE). |
| `sessionId` | String (required) Indicates the unique identifier of the session which was received as a connection response from the map/connect . |
| `folder` | String (optional) Indicates the name of the sub folder for the API service to be executed. Note : If empty the API service will be executed for current folder. |
| `filters` | Object: bluetooth2MessageFilters (optional) Indicates the list of the filters which can be used for the API. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/map/getMessageList '{ "adapterAddress":"b8:27 :eb:13:68:c0", "address":"AA:BB:CC:DD:EE:FF", "sessionId":"session2", "folder":"sent", "filter":{ "maxCount":1 } }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; instanceName:String; returnValue:Boolean; messages:Object array: bluetooth2MessageList \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="map_getmessagenotification"></a>
## `map/getMessageNotification`

`luna://com.webos.service.bluetooth2/map/getMessageNotification`

Receives the message notification from the MSE device. Note : This method is available only for MCE.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the remote Bluetooth device address(MSE). |
| `sessionId` | String (required) Indicates the unique identifier of the session which was received as a connection response from the map/connect . |
| `subscribe` | Boolean (required) Indicates if subscribed to get the notifications on the message event from the MSE. Possible values are: true : Subscribe to get the notifications false : Not subscribed |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/map/getMessageNotification '{ "adapterAddress":"AA:BB:CC:DD:EE:FF", "address":"AA:BB:CC:DD:EE:FF", "sessionId":"session3", "subscribe":true }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; returnValue:Boolean; subscribed:Boolean; sessionId:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="map_getstatus"></a>
## `map/getStatus`

`luna://com.webos.service.bluetooth2/map/getStatus`

Returns the status of the MAS connection with a remote device. Note: The method is available only for MCE .

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `instanceName` | String (optional) Indicates a specific MAS instance name. Note : If not provided, all MAS instances details will be provided |
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true : Subscribed for notifications. false : Not subscribed. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/map/getStatus '{ "adapterAddress":"b8:27:eb:13: 68:c0", "address":"AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.query \| Returns: subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; address:String; status:Object array: bluetooth2MasInstancesStatus \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="map_pushmessage"></a>
## `map/pushMessage`

`luna://com.webos.service.bluetooth2/map/pushMessage`

Sends the message. Example: Sending an SMS. Note : The API is designed based on MAP 1.0 specification.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the remote Bluetooth device address(MSE). |
| `sessionId` | String (required) Indicates the unique identifier of the session which was received as a connection response from the map/connect . |
| `sourceFile` | String (required) Indicates the location of the file containing message body in the bMessage format. Note : Get sample file using map/getMessage API. |
| `folder` | String (required) Indicates the folder name with the absolute path. Possible inputs : Get the supported folder list using the map/getFolderlist API. |
| `transparent` | Boolean (optional) Indicates to the MSE that no copy of the message shall be kept in the 'sent' folder after the message was sent. Default: false |
| `retry` | Boolean (optional) Indicates if successive attempts at sending the message shall be carried out in case of the cellular network. Default: true |
| `charset` | String (optional) Indicates the type of content delivered in the iMessage Possible values are: native : Only applicable for SMS messages, when the bMessage content is a SMS_Deliver PDU which can be sent by the MSE without trans-coding utf8 : If the message text shall is coded in UTF-8 which may (Email/MMS) or shall be trans-coded into SMS by the MSE before sending. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/map/pushMessage '{ "adapterAddress":"b8:27:eb :13:68:c0", "address":"AA:BB:CC:DD:EE:FF", "sessionId":"session5", "sourceFile":"/media/internal/map/64_a2_f9_7e_e7_a7/message2882303761 51723506", "folder":"outbox" }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; returnValue:Boolean; handle:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="map_setfolder"></a>
## `map/setFolder`

`luna://com.webos.service.bluetooth2/map/setFolder`

Returns to the child folder of the current directory of the connected MAS instance of the MSE device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the remote Bluetooth device address(MSE). |
| `sessionId` | String (required) Indicates the unique identifier of the session which was received as a connection response from the map/connect . |
| `folder` | String (required) Indicates the name or the absolute path of the child folder. Possible inputs: Get the supported folder list using map/getFolderlist |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/map/setFolder '{ "adapterAddress":"b8:27:eb:1 3:68:c0", "address":"AA:BB:CC:DD:EE:FF", "sessionId":"session2", "folder":"/telecom/msg/inbox" }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; instanceName:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="map_setmessagestatus"></a>
## `map/setMessageStatus`

`luna://com.webos.service.bluetooth2/map/setMessageStatus`

Modifies the status of a message on the MSE. Note : This method is available only for MCE

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note : If not specified, the default adapter is used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the remote Bluetooth device address(MSE). |
| `sessionId` | String (required) Indicates the unique identifier of the session which was received as a connection response from the map/connect . |
| `handle` | String (required) Indicates the message handle. The handle shall be represented by a null-terminated unicode text string with 16 hexadecimal digits. |
| `statusIndicator` | String (required) Indicates the status of the information to be modified. Possible values are: read : Read status deleted : Deleted status |
| `statusValue` | Boolean (required) Indicates the status value. For the "readStatus" indicator. Possible values are: true: read false: unread For the "deletedStatus" indicator. Possible values are: true: deleted false: undeleted |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/map/setMessageStatus '{ "adapterAddress":"b8: 27:eb:13:68:c0", "address":"AA:BB:CC:DD:EE:FF", "sessionId":"session2", "handle":"message288230376151723506", "statusIndicator":"delete", "statusValue":true }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_createappkey"></a>
## `mesh/createAppKey`

`luna://com.webos.service.bluetooth2/mesh/createAppKey`

Requests to generate a new application key. This call affects the local key database only. To update the remote config server, use mesh/model/config/set .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `netKeyIndex` | Number (optional) The net key to be bound to the application key. Note : If netKeyIndex value is not passed the primary netKeyIndex (i.e. 000) is used. Call mesh/getMeshInfo to get the available netKeyIndexes. |
| `appKeyIndex` | Number (optional) The app key index to add. Note : If appKeyIndex value is not passed, Bluetooth service creates appKeyIndex. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/mesh/createAppKey '{"bearer":"PB-ADV", "netKeyIndex":0, "appKeyIndex":0}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; netKeyIndex:Number; appKeyIndex:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_createnetwork"></a>
## `mesh/createNetwork`

`luna://com.webos.service.bluetooth2/mesh/createNetwork`

This is the first API that must be called by the application to create a network and to become a provisioner. This is called once for every network and the token returned should be stored securely by the application. This API should not be called if the local node is not acting as the provisioner.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/mesh/createNetwork '{}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; networkId:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_getmeshinfo"></a>
## `mesh/getMeshInfo`

`luna://com.webos.service.bluetooth2/mesh/getMeshInfo`

Gets mesh network-related information.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/mesh/getMeshInfo '{}
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; meshInfo:Object: BleMeshInfo \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_keyrefresh"></a>
## `mesh/keyRefresh`

`luna://com.webos.service.bluetooth2/mesh/keyRefresh`

Refreshes the mesh network key and associated app keys.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 14+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe for notifications about any failure during the key refresh procedure. Possible values are: true: Subscribed. false: Not subscribed. For example: If app key update to the remote node fails during the key refresh procedure, it informs the application using subscription response and the key refresh procedure continues for the remaining nodes. |
| `adapterAddress` | String (optional) The address of the adapter. Note: If not specified, the default adapter is used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `blacklistedNodes` | Number array (optional) Provide a list of blacklistedNodes, represented by the primary element address of the node. Note: Blacklisted nodes will not receive new app/network keys during the keyRefresh process. |
| `waitTimeout` | Number (optional) The total duration (in seconds) to wait for each phase to complete during keyRefresh process. The application has to provide a time considering the low power nodes in the network as they may take longer to respond. Note: If not specified, a default timeout time of 2 seconds is used. |
| `refreshAppKeys` | Boolean (optional) Indicates whether to refresh appkeys associated with net key indicated by netKeyIndex true: Refresh app keys (List the app keys to refresh in "appKeyIndexes" field) false: Do not Refresh app keys Note: If not specified, the default value false is used. Use case 1: When an application had called removeNode API to remove a node from the network, it can refresh only those app keys  |
| `appKeyIndexes` | Number array (optional) Provide app key indexes to refresh. This parameter is ignored if refreshAppKeys is false. Note: If refreshAppKeys is true, and an empty array is passed, or if this field is not provided, all app keys will be refreshed by default. List of appkeys known to a node can be fetched by calling mesh/listProvisionedNodes API before removing a particular node. |

```sh
luna-send -n i -f luna://com.webos.service.bluetooth2/mesh/keyRefresh '{ "subscribe" : true, "waitTimeout" : 2, "netKeyIndex" : 0, "refreshAppKeys" : true, "blacklistedNodes":[170] }
```

> ACG: bluetooth.management \| Returns: subscribed:Boolean; returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_listprovisionednodes"></a>
## `mesh/listProvisionedNodes`

`luna://com.webos.service.bluetooth2/mesh/listProvisionedNodes`

Gets a list of provisioned nodes.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 14+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter. Note: If not specified, the default adapter is used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/mesh/listProvisionedNodes '{}
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; nodes:Object array: BleMeshNode \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_model_config_get"></a>
## `mesh/model/config/get`

`luna://com.webos.service.bluetooth2/mesh/model/config/get`

Gets various configuration parameters provided by configuration model.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `subscribe` | Boolean (required) Subscribe for notifications on changes. Possible values are: true : Subscribed (Must be set to true. The caller must subscribe to this method.) false : Not subscribed. |
| `destAddress` | Number (required) The unicast address of the destination. |
| `config` | String (required) The configurations to be retrieved. Possible values are: APPKEYINDEX DEFAULT_TTL GATT_PROXY RELAY |
| `netKeyIndex` | Number (optional) The index of the net key. This parameter is mandatory if config field is APPKEYINDEX and ignored for others. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/mesh/model/config/get '{ "destAddress":173, "config":"GATT_PROXY", "netKeyIndex": 0, "subscribe":true }
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; subscribed:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_model_config_getcompositiondata"></a>
## `mesh/model/config/getCompositionData`

`luna://com.webos.service.bluetooth2/mesh/model/config/getCompositionData`

Gets composition data of a mesh node. The composition data contains information about a node, the elements it includes, and the supported models. Note: The naming convention for this method is taken from the specification.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `destAddress` | Number (required) The destination address. |
| `subscribe` | Boolean (required) Subscribe for notifications on changes. Possible values are: true : Subscribed (Must be set to true. The caller must subscribe to this method.) false : Not subscribed. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/mesh/model/config/getCompositionData '{ "bearer":"PB-ADV", "destAddress" : 170, "subscribe" : true }
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; subscribed:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_model_config_set"></a>
## `mesh/model/config/set`

`luna://com.webos.service.bluetooth2/mesh/model/config/set`

Sets various configuration parameters provided by the configuration model.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `subscribe` | Boolean (required) Subscribe for notifications on changes. Possible values are: true : Subscribed (Must be set to true. The caller must subscribe to this method.) false : Not subscribed. |
| `destAddress` | Number (required) The unicast address of the destination. |
| `config` | String (required) The configuration to be set. Possible values are: APPKEY_ADD APPKEY_DELETE APPKEY_UPDATE APPKEY_BIND APPKEY_UNBIND DEFAULT_TTL GATT_PROXY RELAY |
| `netKeyIndex` | Number (optional) The net key index. Note: Mandatory parameter if config is APPKEY_ADD, APPKEY_DELETE, APPKEY_UPDATE, APPKEY_UNBIND |
| `appKeyIndex` | Number (optional) The app key index. Note: Mandatory parameter if config is APPKEY_ADD, APPKEY_DELETE, APPKEY_UPDATE, APPKEY_BIND, APPKEY_UNBIND. |
| `modelId` | Number (optional) SIG Model ID or Vendor Model ID. Note: Mandatory parameter if config is APPKEY_BIND, APPKEY_UNBIND. |
| `ttl` | Number (optional) The default TTL to set for the outgoing message. Values can be in the range: 0x00, 0x02–0x7F Note: Mandatory parameter if config is DEFAULT_TTL. |
| `gattProxyState` | Number (optional) The GATT proxy state to set. Possible values are: 0x00: The Proxy feature is supported and disabled 0x01: The Proxy feature is supported and enabled 0x02: The Proxy feature is not supported Note: Mandatory parameter if config is GATT_PROXY. |
| `relayStatus` | Object: BleMeshConfigRelayStatus (optional) The Current Relay and Relay Retransmit states of a node. Note: Mandatory parameter if config is RELAY. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/mesh/model/config/set '{ "destAddress":170, "config":"APPKEY_ADD", "netKeyIndex": 0, "appKeyIndex": 0, "subscribe":true }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; subscribed:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_model_onoff_set"></a>
## `mesh/model/onOff/set`

`luna://com.webos.service.bluetooth2/mesh/model/onOff/set`

Sets the on/off state of the remote node using a generic on-off model.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `destAddress` | Number (required) The destination address. |
| `appKeyIndex` | Number (required) The application key index to used for encoding. |
| `state` | Boolean (required) The state of the remote node. Possible values are: true : On false : Off |
| `subscribe` | Boolean (optional) Subscribe for notifications on changes. Possible values are: true : Subscribed. false : Not subscribed (default). Note: If not subscribed, unacknowledged on/off message is sent to the remote node, acknowledged message is sent otherwise. |

```sh
luna-send -i -f -a com.webos.service.test luna://com.webos.service.bluetooth2/mesh/model/onOff/set '{ "destAddress":170, "appKeyIndex": 0, "state": true, "subscribe":false }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_model_receive"></a>
## `mesh/model/receive`

`luna://com.webos.service.bluetooth2/mesh/model/receive`

Receives messages addressed to the application.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `appKeyIndex` | Number (required) The application key to be used for decrypting the message. The appKeyIndex must be valid for that element. |
| `subscribe` | Boolean (required) Subscribe for notifications on changes. Possible values are: true : Subscribed (Must be set to true. The caller must subscribe to this method.) false : Not subscribed. |

```sh
luna-send -i -f -a com.webos.service.test luna://com.webos.service.bluetooth2/mesh/model/receive '{"appKeyIndex": 0, "subscribe":true}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; subscribed:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_model_send"></a>
## `mesh/model/send`

`luna://com.webos.service.bluetooth2/mesh/model/send`

Sends a message originated by a local model.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `srcAddress` | Number (required) The unicast address of the source element. |
| `destAddress` | Number (required) The destination unicast address or group address. |
| `appKeyIndex` | Number (required) The application key to use for encrypting the message. The appKeyIndex must be valid for that element Note: The application which has created the appKeyIndex will only receive messages belonging to that application |
| `command` | String (required) The command that corresponds to the message being sent in the payload. Possible values are: passThrough onOff Note : webos-bluetooth-service with the help of the underlying stack just encrypts and sends the payload when the command is passThrough. The application sends the payload that is in the packet format as mentioned in the specification. The bluetooth service and the underl |
| `payload` | Object: BleMeshPayload - for "onOff" command (required) Payload object when "command" = "onOff". |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/mesh/model/send '{ "srcAddress":1, "destAddress":170, "appKeyIndex": 0, "command":"onOff", "payload":{"value":true} }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_provision"></a>
## `mesh/provision`

`luna://com.webos.service.bluetooth2/mesh/provision`

Initiates provisioning of a device. Once a mesh device is discovered using mesh/scanUnprovisionedDevices API, the discovered device can be provisioned using this method. After the provisioning, the device becomes a node in the mesh network.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `timeout` | Number (uint16_t) (optional) Provision request timeout in seconds. Default value: 60 sec Note : Authentication data must be supplied in this interval if required eg. call mesh/supplyProvisioningOob API if request string is "promptStatic" |
| `subscribe` | String (required) Subscribe for notifications on changes. Possible values are: true : Subscribed (Must be set to true. The caller must subscribe to this method). false : Not subscribed. |
| `uuid` | String (required) Device UUID for provisioning device. UUID is received as part of the subscription response of mesh/scanUnprovisionedDevices API. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/mesh/provision '{"uuid":"1ef4354ffbbe43b5a8a7fbe94ec7746d", "subscribe":true}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; subscribed:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_removenode"></a>
## `mesh/removeNode`

`luna://com.webos.service.bluetooth2/mesh/removeNode`

Removes the node from the network. Multiple nodes can be removed by calling this API multiple times. After the required nodes are removed from the mesh network, key refresh procedure for the corresponding app keys and net key must be initiated by the application using mesh/keyRefresh API to avoid compromising network security.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 14+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter. Note: If not specified, the default adapter is used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `primaryElementAddress` | Number (required) Unicast address of the primary element of the node to be removed from the network. Valid Range: 1 to 32767. Note: Removing local node not allowed |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/mesh/removeNode '{"primaryElementAddress":170}
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; primaryElementAddress:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_scanunprovisioneddevices"></a>
## `mesh/scanUnprovisionedDevices`

`luna://com.webos.service.bluetooth2/mesh/scanUnprovisionedDevices`

Scans for mesh devices to provision when the local node is provisioner.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `scanTimeout` | Number (uint16_t) (optional) Scan timeout in seconds. The scan continues until mesh/unprovisionedScanCancel is called or for scanTimeout seconds (if non-zero). Default value: 20 sec |
| `subscribe` | Boolean (required) Subscribe for notifications on changes. Possible values are: true : Subscribed. false : Not subscribed. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/mesh/scanUnprovisionedDevices '{"scanTimeout":10, "subscribe":true}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String; subscribed:Boolean; devices:Object array: BleMeshUnprovisionedDevice; device:Object: BleMeshUnprovisionedDevice \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_supplyprovisioningnumeric"></a>
## `mesh/supplyProvisioningNumeric`

`luna://com.webos.service.bluetooth2/mesh/supplyProvisioningNumeric`

Provides decimal number for authentication during provisioning; when "request" = "promptNumeric" in the subscription response of mesh/provision API.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `number` | Number (required) The numeric data. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/mesh/supplyProvisioningNumeric '{"number":1234}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_supplyprovisioningoob"></a>
## `mesh/supplyProvisioningOob`

`luna://com.webos.service.bluetooth2/mesh/supplyProvisioningOob`

Supplies the static OOB data required during provision; when "request" = "promptStatic" in the subscription response of mesh/provision API.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |
| `oobData` | String (required) The static OOB data which is 16 octet byte array. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/mesh/supplyProvisioningOob '{"oobData":"6E6F726469635F6578616D706C655F31"}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="mesh_unprovisionedscancancel"></a>
## `mesh/unprovisionedScanCancel`

`luna://com.webos.service.bluetooth2/mesh/unprovisionedScanCancel`

Cancels scanning for unprovisioned BLE mesh devices.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) The address of the adapter to be used. |
| `bearer` | String (optional) The underlying bearer to use. Possible values are: PB-ADV (default) PB-GATT (Currently not supported) |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/mesh/unprovisionedScanCancel '{}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; errorCode:Number; errorText:String; adapterAddress:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="opp_accepttransferrequest"></a>
## `opp/acceptTransferRequest`

`luna://com.webos.service.bluetooth2/opp/acceptTransferRequest`

Accept a Bluetooth object push request. This method is available only for a push server.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `requestId` | String (required) The unique ID of a request. |
| `adapaterAddress` | String (optional) The address of the adapter executing this method. If not specified, the default adapter will be used. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/opp/acceptTransferRequest '{"requestId":"001"}
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="opp_awaittransferrequest"></a>
## `opp/awaitTransferRequest`

`luna://com.webos.service.bluetooth2/opp/awaitTransferRequest`

Await incoming transfer requests from push clients. This method is available only for a push server.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Subscribe and get notifications. Possible values are: true - Subscribed for changes. false - Not subscribed. Note: The caller MUST subscribe to this method. |
| `adapterAddress` | String (optional) The address of the adapter executing this method. If not specified, the default adapter will be used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/opp/awaitTransferRequest '{ "subscribe":true }'
```

> ACG: bluetooth.management \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="opp_canceltransfer"></a>
## `opp/cancelTransfer`

`luna://com.webos.service.bluetooth2/opp/cancelTransfer`

Cancel an ongoing file transfer. This method is available only for a push server. In a client side, LSCallCancel() is used to cancel the transfer.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `requestId` | String (required) The unique ID of a request. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/opp/cancelTransfer '{ "requestId":"001" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="opp_connect"></a>
## `opp/connect`

`luna://com.webos.service.bluetooth2/opp/connect`

Open (or initialize) an OPP connection to a remote Bluetooth device. In some cases of such as using BSA stack, only initialization of OPP capability is done by this method and the actual Bluetooth connection is created through the opp/pushFile method. If the client calls LSCallCancel() , the connection is closed and OPP setup is deinitialized (the opp/disconnect method also can be used for the disconnection). This method is available only for a push client.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) The address (bdaddr) of the remote device. |
| `subscribe` | Boolean (optional) Subscribe and get notified when connection is closed. Possible values are: true - Subscribed for changes. false - Not subscribed. Default value: false |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/opp/connect '{ "address":"AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.management \| Returns: subscribed:Boolean; returnValue:Boolean; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="opp_disconnect"></a>
## `opp/disconnect`

`luna://com.webos.service.bluetooth2/opp/disconnect`

Close (or deinitialize) the connection to the given remote device on OPP profile. In some cases of such as using BSA stack, this method performs only deinitialization of the OPP-related setup and the actual Bluetooth connection is dropped after finishing file transfer. This method is available only for a push client.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) The address (bdaddr) of the remote device. |

```sh
luna-send -n 1 luna://com.webos.service.bluetooth2/opp/disconnect '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="opp_getstatus"></a>
## `opp/getStatus`

`luna://com.webos.service.bluetooth2/opp/getStatus`

Return the status of an OPP connection to a remote Bluetooth device. This method is available for both of client and server.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) The address (bdaddr) of the remote device. |
| `subscribe` | Boolean (optional) To be notified of changes to the connection, set subscribe to true . Otherwise, set subscribe to false . |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/opp/getStatus '{ "address":"AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; connecting:Boolean; connected:Boolean; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="opp_monitortransfer"></a>
## `opp/monitorTransfer`

`luna://com.webos.service.bluetooth2/opp/monitorTransfer`

Return the status of ongoing file transfer requests. This method is only available for server.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Must set subscribe to true . |
| `adapterAddress` | String (optional) The address of the adapter executing this method call. If not specified, the default adapter will be used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/opp/monitorTransfer '{ "subscribe":true }'
```

> ACG: bluetooth.management \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="opp_pushfile"></a>
## `opp/pushFile`

`luna://com.webos.service.bluetooth2/opp/pushFile`

Push a file to a remote Bluetooth device. This method is available only for push client. If the client calls LSCallCancel() , the file transfer is cancelled.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) The address (bdaddr) of the remote device. |
| `sourceFile` | String (required) Absolute path of the source file, rooted at /media/internal . |
| `subscribe` | Boolean (optional) To monitor the progress of the transfer, set subscribe to true . Otherwise, set subscribe to false . The default value of subscribed is false . |
| `adapterAddress` | String (optional) The address of the adapter executing this method. If not specified, the default adapter will be used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/opp/pushFile '{ "address":"AA:BB:CC:DD:EE:FF", "sourceFile":"music.mp3", "subscribe":true }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; subscribed:Boolean; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="opp_rejecttransferrequest"></a>
## `opp/rejectTransferRequest`

`luna://com.webos.service.bluetooth2/opp/rejectTransferRequest`

Reject a Bluetooth object push request. This method is available only for a push server.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `requestId` | String (required) The unique ID of a request. |
| `adapterAddress` | String (optional) The address of the adapter executing this method. If not specified, the default adapter will be used. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/opp/rejectTransferRequest '{"requestId":"001"}'
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="pan_connect"></a>
## `pan/connect`

`luna://com.webos.service.bluetooth2/pan/connect`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pan/connect '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pan_disconnect"></a>
## `pan/disconnect`

`luna://com.webos.service.bluetooth2/pan/disconnect`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pan/disconnect '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pan_getstatus"></a>
## `pan/getStatus`

`luna://com.webos.service.bluetooth2/pan/getStatus`

Getter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pan/getStatus '{}'
```

> ACG groups: public, private, all, bluetooth.query, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pan_settethering"></a>
## `pan/setTethering`

`luna://com.webos.service.bluetooth2/pan/setTethering`

Setter on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pan/setTethering '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pbap_acceptaccessrequest"></a>
## `pbap/acceptAccessRequest`

`luna://com.webos.service.bluetooth2/pbap/acceptAccessRequest`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pbap/acceptAccessRequest '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pbap_awaitaccessrequest"></a>
## `pbap/awaitAccessRequest`

`luna://com.webos.service.bluetooth2/pbap/awaitAccessRequest`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pbap/awaitAccessRequest '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pbap_connect"></a>
## `pbap/connect`

`luna://com.webos.service.bluetooth2/pbap/connect`

Connects to the PBAP profile on the specified remote device. Note: This method is available only for PCE .

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed. Default: false |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/pbap/connect '{ "address":"AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; subscribed:Boolean; adapterAddress:String; errorCode:Number; errorText:String; address:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="pbap_disconnect"></a>
## `pbap/disconnect`

`luna://com.webos.service.bluetooth2/pbap/disconnect`

Disconnects from the PBAP profile on the specified remote device. Note: This method is available only for PCE .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/pbap/disconnect '{ "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: returnValue:Boolean; adapterAddress:String; errorText:String; errorCode:Number; address:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="pbap_getphonebookproperties"></a>
## `pbap/getPhoneBookProperties`

`luna://com.webos.service.bluetooth2/pbap/getPhoneBookProperties`

Gets the supported PBAP profile properties from PSE device. Note: This method is available only for PCE .

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Default: false |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/pbap/getPhoneBookProperties '{ "adapterAddress":"AA:BB:CC:DD:EE:FF", "address":"AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; properties:Object: bluetooth2PbapProperties; subscribed:Boolean; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="pbap_getsize"></a>
## `pbap/getSize`

`luna://com.webos.service.bluetooth2/pbap/getSize`

Gets the total number of vcf entries from the selected phonebook path. Note: This method is available only for PCE .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pbap/getSize '{ "adapterAddress":"AA:BB:CC:DD:EE:FF", "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; size:Number; adapterAddress:String; address:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="pbap_getstatus"></a>
## `pbap/getStatus`

`luna://com.webos.service.bluetooth2/pbap/getStatus`

Returns the status of a PBAP connection to a remote Bluetooth device. Note: The method is available for both client and server.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get the notifications. Possible values are: true : Subscribed for notifications false : Not subscribed Default: false . |
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/pbap/getStatus '{ "address":"AA:BB:CC:DD:EE:FF", "subscribe":true }
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; connecting:Boolean; connected:Boolean; adapterAddress:String; subscribed:Boolean; errorText:String; errorCode:Number; address:String \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="pbap_getvcardfilters"></a>
## `pbap/getvCardFilters`

`luna://com.webos.service.bluetooth2/pbap/getvCardFilters`

Displays all the available vcard filters supported by Bluetooth stack. Note: The method is available only for PCE .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pbap/getvCardFilters '{ "adapterAddress":"AA:BB:CC:DD:EE:FF", "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; adapterAddress:String; address:String; filters:String array; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="pbap_pullphonebook"></a>
## `pbap/pullPhoneBook`

`luna://com.webos.service.bluetooth2/pbap/pullPhoneBook`

Retrieves all (given maxcount) the phonebook entries from a given startoffset and stores it in a local file.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address (bdaddr) of the remote device. |
| `subscribe` | Boolean (required) Indicates if the user is subscribed to get the notifications. Possible values are: true: Subscribed for notifications false: Not subscribed Default: false |
| `destinationFile` | String (required) Indicates the absolute path of the destination file rooted at /media/internal/pbap. Note: This must be a path to a file, not a directory. Example: /media/internal/pbap/<device-address>/<foldername>/<vcf file name> |
| `startOffset` | Number (optional) Indicates the Offset of the first item. Default: 0 |
| `maxListCount` | Number (optional) Indicates the maximum number of items. Default: unlimited (65535) |
| `vCardVersion` | String (optional) Indicates the vCard format versions. Possible values are: 2.1 3.0 Default: 2.1 |
| `filterFields` | String array (optional) Provide vCard with fields as specified in the filter. Mandatory properties for vCard 2.1 are VERSION, N, and TEL. Mandatory properties for vCard 3.0 are VERSION, N, FN, and TEL. Note: We can get the list of supported filters using pbap/getvCardFilters API. If not specified, all supported filters are used by default. |

```sh
luna-send -i -f luna://com.webos.service.bluetooth2/pbap/pullPhoneBook '{ "adapterAddress":"AA:BB:CC:DD:EE:FF", "address":"AA:BB:CC:DD:EE:FF", "destinationFile":"mycontacts.vcf", "subscribe":true }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; destinationFile:String; subscribed:Boolean; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="pbap_pullvcard"></a>
## `pbap/pullvCard`

`luna://com.webos.service.bluetooth2/pbap/pullvCard`

Given a vcard handle, retrieves the vcard in the current phonebook object and store it in a local file. Note: This method is available only for PCE .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `destinationFile` | String (optional) Indicates destination file name. Note: If not provided, it will be set as vCardHandle. |
| `vCardHandle` | String (required) Indicates vCard handle for vcf file. |
| `vCardVersion` | String (optional) Indicates vCard format version. Possible values are : 2.1 3.0 Default: 2.1 |
| `filterFields` | String array (optional) Provides vCard with fields as specified in the filter. Mandatory properties for vCard 2.1 are VERSION, N, and TEL. Mandatory properties for vCard 3.0 are VERSION, N, FN, and TEL. Note : We can get the list of supported filters using pbap/getvCardFilters API. If not specified, all supported filters are used by default. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pbap/pullvCard '{ "adapterAddress":"AA:BB:CC:DD:EE:FF", "address":"AA:BB:CC:DD:EE:FF", "vCardHandle":"123.vcf", "vCardVersion":"2.1", "filterFields":[ "BDAY", "FN" ] }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; adapterAddress:String; address:String; destinationFile:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="pbap_rejectaccessrequest"></a>
## `pbap/rejectAccessRequest`

`luna://com.webos.service.bluetooth2/pbap/rejectAccessRequest`

Method on com.webos.service.bluetooth2 (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pbap/rejectAccessRequest '{}'
```

> ACG groups: public, private, all, bluetooth.manage, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pbap_searchphonebook"></a>
## `pbap/searchPhoneBook`

`luna://com.webos.service.bluetooth2/pbap/searchPhoneBook`

Searches for entries matching the given condition and returns an object of vcard-listing data where every entry consists of a pair of strings containing the vcard handle and the contact name. Note: This method is available only for PCE .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device. |
| `order` | String (optional) Displays the search results based on the given order. Possible values are: Indexed (default) Alphanumeric Phonetic |
| `filter` | Object: bluetooth2PbapSearchFilter (required) Filter with key & value pair to search the phonebook. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pbap/searchPhoneBook '{ "adapterAddress":"AA:BB:CC:DD:EE:FF", "address":"AA:BB:CC:DD:EE:FF", "order":"indexed", "filter":{ "key":"name", "value":"LG" } }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; adapterAddress:String; address:String; vcfHandles:Object: bluetooth2PbapVcfHandles; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="pbap_setphonebook"></a>
## `pbap/setPhoneBook`

`luna://com.webos.service.bluetooth2/pbap/setPhoneBook`

Sets the phonebook object for other operations. Note: This method is available only for PCE .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device required for the connection. |
| `repository` | String (required) Indicates the type of repository that stores the phonebook. Possible inputs : internal sim1 Default: internal. |
| `object` | String (required) Indicates the path of the phonebook object. Possible inputs : pb : phonebook for the saved contacts. ich : incoming call history. och : outgoing call history. mch : missing call history. cch : a combination of ich, och, mch. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pbap/setPhoneBook '{ "adapterAddress":"AA:BB:CC:DD:EE:FF", "address":"AA:BB:CC:DD:EE:FF", "repository":"internal", "object":"pb" }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; address:String; adapterAddress:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="pbap_vcardlisting"></a>
## `pbap/vCardListing`

`luna://com.webos.service.bluetooth2/pbap/vCardListing`

Displays the total number of vcf file entries from the selected phonebook path. Note: This method is available only for PCE .

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `adapterAddress` | String (optional) Indicates the address of the adapter. Note: If not specified, the address of the default adapter will be used. If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. |
| `address` | String (required) Indicates the address of the remote device for the requested operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/pbap/vCardListing '{ "adapterAddress":"b8:27 :eb:13:68:c0", "address":"AA:BB:CC:DD:EE:FF" }
```

> ACG: bluetooth.management \| Returns: errorCode:Number; errorText:String; vcfHandles:Object array: bluetooth2PbapVcfHandles; adapterAddress:String; address:String; returnValue:Boolean \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="popo_pushfile"></a>
## `popo/pushFile`

`luna://com.webos.service.bluetooth2/popo/pushFile`

Registered in webOS OSE sysbus api.json (ACG group bluetooth.management); name only

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE (master branch)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/popo/pushFile '{}'
```

> Listed under ACG group "bluetooth.management" in the component api.json/groups.json; no parameter docs read.

Sources: [1](https://github.com/webosose/com.webos.service.bluetooth2/blob/master/files/sysbus/com.webos.service.bluetooth2.api.json)

<a id="spp_connect"></a>
## `spp/connect`

`luna://com.webos.service.bluetooth2/spp/connect`

Open a SPP connection to a remote Bluetooth device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) The address (bdaddr) of the remote device. |
| `uuid` | String (required) The UUID used when the server application opens its SPP channel. |
| `subscribe` | Boolean (optional) To be notified when the connection is closed, set subscribe to true . Otherwise, set subscribe to false . The default value of subscribe is false . |
| `adapterAddress` | String (optional) The address of the adapter executing this method call. If not specified, the default adapter will be used. |

```sh
luna-send -i -f -a "com.domain.app.testapp" luna://com.webos.service.bluetooth2/spp/connect '{ "address":"AA:BB:CC:DD:EE:FF", "uuid":"00001101-0000-1000-8000-00805f9b34fb", "subscribe":true }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; subscribed:Boolean; address:String; channelId:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="spp_createchannel"></a>
## `spp/createChannel`

`luna://com.webos.service.bluetooth2/spp/createChannel`

Register a service record in the device service record database with the specified UUID and name. The channel can be removed through LSCallCancel() .

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) An identifiable name of a SPP service in the server, which the system will automatically write to a new Service Discovery Protocol (SDP) database entry on the device (the name is arbitrary and can simply be your application name). |
| `uuid` | String (required) The UUID is also included in the SDP entry and will be the basis for the connection agreement with the client device. That is, when the client attempts to connect with this device, it will carry a UUID that uniquely identifies the service with which it wants to connect. These UUIDs must match in order for the connection to be accepted. |
| `subscribe` | Boolean (required) Must set subscribe to true to be notified of changes to the channel (e.g., connection of client, removal of the channel). |
| `adapterAddress` | String (optional) The address of the adapter executing this method. If not specified, the default adapter will be used. |

```sh
luna-send -i -f -a "com.domain.app.testapp" luna://com.webos.service.bluetooth2/spp/createChannel '{ "name":"service1", "uuid":"00001101-0000-1000-8000-00805f9b34fb", "subscribe":true }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; subscribed:Boolean; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="spp_disconnect"></a>
## `spp/disconnect`

`luna://com.webos.service.bluetooth2/spp/disconnect`

Drop the connection to the given remote device on SPP profile.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `channelId` | String (required) Unique ID of a SPP channel, which has the following format: "nnn", 3 digit number increasing sequentially. |
| `adapterAddress` | String (optional) The address of the adapter executing this method. If not specified, the default adapter will be used. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/spp/disconnect '{ "channelId": "001" }
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="spp_getstatus"></a>
## `spp/getStatus`

`luna://com.webos.service.bluetooth2/spp/getStatus`

Return the status of a SPP connection to a remote device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `address` | String (required) The address (bdaddr) of the remote device. |
| `subscribe` | Boolean (optional) To be notified of changes to the connection, set subscribe to true . Otherwise, set subscribe to false . The default value of subscribe is false . |
| `adapterAddress` | String (optional) The address of the adapter executing this method call. When the field is not set, the default adapter is used for it. |

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth2/spp/getStatus '{ "address": "AA:BB:CC:DD:EE:FF", "subscribe": false }
```

> ACG: bluetooth.query \| Returns: returnValue:Boolean; connecting:Boolean; connected:Boolean; adapterAddress:String; connectedChannels:String array; subscribed:Boolean; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="spp_readdata"></a>
## `spp/readData`

`luna://com.webos.service.bluetooth2/spp/readData`

Receive data from the connected remote device.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `channelId` | String (optional) Unique ID of a SPP channel. If channelId is not specified, all connected channel IDs from which the caller received data will be returned. |
| `subscribe` | Boolean (optional) To read the data continuously, set subscribe to true . Otherwise, set subscribe to false . The default value of subscribe is true . |
| `timeout` | Number (optional) The receive timeout in seconds. It is available only when subscribe is set to true . After timeout seconds, the subscription is canceled. A value of 0 means that the timeout is disabled. |
| `adapterAddress` | String (optional) The address of the adapter executing this method. If not specified, the default adapter will be used. |

```sh
luna-send -i -f -a "com.domain.app.testapp" luna://com.webos.service.bluetooth2/spp/readData '{"channelId": "001”,"subscribe":true}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; subscribed:Boolean; channelId:String; data:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)

<a id="spp_writedata"></a>
## `spp/writeData`

`luna://com.webos.service.bluetooth2/spp/writeData`

Transfer data to the connected remote device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `channelId` | String (required) Unique ID of a SPP channel. |
| `data` | String (required) Data to send. This string data should be encoded to BASE64. |
| `adapterAddress` | String (optional) The address of the adapter executing this method. If not specified, the default adapter will be used. |

```sh
luna-send -i -f -a "com.domain.app.testapp" luna://com.webos.service.bluetooth2/spp/writeData '{"channelId": "001”,"data": "R29vZCBEYXkNCg=="}
```

> ACG: bluetooth.operation \| Returns: returnValue:Boolean; adapterAddress:String; errorText:String; errorCode:Number \| Service: Allows webOS to use remote Bluetooth devices.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-bluetooth2/)
