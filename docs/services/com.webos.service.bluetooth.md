# `com.webos.service.bluetooth`

Bluetooth service: adapter state and device discovery/pairing (GAP), trusted-device management, adapter firmware update, and Bluetooth audio sound-out redirection.

26 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`audio/changeToTVSpeaker`](#audio_changetotvspeaker) | public |  | audio | inferred | Changes the to TV speaker (audio) |
| [`audio/enableSoundOutRedirect`](#audio_enablesoundoutredirect) | public |  | audio | inferred | Enables the sound out redirect (audio) |
| [`audio/getSoundOutRedirectState`](#audio_getsoundoutredirectstate) | public |  | audio | inferred | Returns the sound out redirect state (audio) |
| [`audio/noReconn`](#audio_noreconn) | public |  | audio | inferred | Handles the no reconn (audio) |
| [`audio/setVolume`](#audio_setvolume) | public |  | audio | inferred | Sets the volume (audio) |
| [`audio/yesReconn`](#audio_yesreconn) | public |  | audio | inferred | Handles the yes reconn (audio) |
| [`gap/btResumeDone`](#gap_btresumedone) | public |  | bluetooth | inferred | Handles the Bluetooth resume done (gap) |
| [`gap/findDevices`](#gap_finddevices) | ssap |  | bluetooth | documented | Bluetooth gap/findDevices exposed through SSAP |
| [`gap/getFeatureSupport`](#gap_getfeaturesupport) | private |  | bluetooth | inferred | Returns the feature support (gap) |
| [`gap/getLocalDeviceVersion`](#gap_getlocaldeviceversion) | public |  | bluetooth | inferred | Returns the local device version (gap) |
| [`gap/getMagicSearchResult`](#gap_getmagicsearchresult) | public |  | bluetooth | inferred | Returns the magic search result (gap) |
| [`gap/getState`](#gap_getstate) | public |  | bluetooth | inferred | Returns the state (gap) |
| [`gap/getTrustedDevices`](#gap_gettrusteddevices) | ssap |  | bluetooth | documented | Bluetooth gap/getTrustedDevices exposed through SSAP |
| [`gap/isRadioOn`](#gap_isradioon) | public |  | bluetooth | inferred | Reports whether the radio on is set (gap) |
| [`gap/isWiFiOnly`](#gap_iswifionly) | ssap |  | bluetooth | documented | Bluetooth gap/isWiFiOnly exposed through SSAP |
| [`gap/launchAdapterFwUpdate`](#gap_launchadapterfwupdate) | public |  | bluetooth | inferred | Launches the adapter firmware update (gap) |
| [`gap/registerBtAppServiceList`](#gap_registerbtappservicelist) | private |  | bluetooth | inferred | Registers the Bluetooth app service list (gap) |
| [`gap/removeTrustedDevice`](#gap_removetrusteddevice) | ssap |  | bluetooth | documented | Bluetooth gap/removeTrustedDevice exposed through SSAP |
| [`gap/resetMagicSearchResult`](#gap_resetmagicsearchresult) | public |  | bluetooth | inferred | Resets the magic search result (gap) ⚠️ |
| [`gap/responseBtPrepareSuspendDone`](#gap_responsebtpreparesuspenddone) | public |  | bluetooth | inferred | Handles the response Bluetooth prepare suspend done (gap) |
| [`service/connect`](#service_connect) | ssap |  | bluetooth | documented | Bluetooth service/connect exposed through SSAP |
| [`service/disconnect`](#service_disconnect) | ssap |  | bluetooth | documented | Bluetooth service/disconnect exposed through SSAP |
| [`service/getStates`](#service_getstates) | ssap |  | bluetooth | documented | Bluetooth service/getStates exposed through SSAP |
| [`service/init`](#service_init) | public |  | bluetooth | inferred | Initializes the bluetooth (service) |
| [`service/release`](#service_release) | public |  | bluetooth | inferred | Releases the bluetooth (service) |
| [`service/subscribeNotifications`](#service_subscribenotifications) | ssap | yes | bluetooth | documented | Bluetooth service/subscribeNotifications exposed through SSAP |

<a id="audio_changetotvspeaker"></a>
## `audio/changeToTVSpeaker`

`luna://com.webos.service.bluetooth/audio/changeToTVSpeaker`

Changes the to TV speaker (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/changeToTVSpeaker '{}'
```

> ACG groups: bluetooth.manage, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="audio_enablesoundoutredirect"></a>
## `audio/enableSoundOutRedirect`

`luna://com.webos.service.bluetooth/audio/enableSoundOutRedirect`

Enables the sound out redirect (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/enableSoundOutRedirect '{}'
```

> ACG groups: bluetooth.manage, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="audio_getsoundoutredirectstate"></a>
## `audio/getSoundOutRedirectState`

`luna://com.webos.service.bluetooth/audio/getSoundOutRedirectState`

Returns the sound out redirect state (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/getSoundOutRedirectState '{}'
```

> ACG groups: bluetooth.manage, bluetooth.query, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="audio_noreconn"></a>
## `audio/noReconn`

`luna://com.webos.service.bluetooth/audio/noReconn`

Handles the no reconn (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/noReconn '{}'
```

> ACG groups: bluetooth.manage, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="audio_setvolume"></a>
## `audio/setVolume`

`luna://com.webos.service.bluetooth/audio/setVolume`

Sets the volume (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/setVolume '{}'
```

> ACG groups: bluetooth.manage, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="audio_yesreconn"></a>
## `audio/yesReconn`

`luna://com.webos.service.bluetooth/audio/yesReconn`

Handles the yes reconn (audio)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/yesReconn '{}'
```

> ACG groups: bluetooth.manage, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gap_btresumedone"></a>
## `gap/btResumeDone`

`luna://com.webos.service.bluetooth/gap/btResumeDone`

Handles the Bluetooth resume done (gap)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/btResumeDone '{}'
```

> ACG groups: public, private, all, bluetooth.query, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_finddevices"></a>
## `gap/findDevices`

`luna://com.webos.service.bluetooth/gap/findDevices`

Bluetooth gap/findDevices exposed through SSAP

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/gap/findDevices","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="gap_getfeaturesupport"></a>
## `gap/getFeatureSupport`

`luna://com.webos.service.bluetooth/gap/getFeatureSupport`

Returns the feature support (gap)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/getFeatureSupport '{}'
```

> ACG groups: all, bluetooth.query, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_getlocaldeviceversion"></a>
## `gap/getLocalDeviceVersion`

`luna://com.webos.service.bluetooth/gap/getLocalDeviceVersion`

Returns the local device version (gap)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/getLocalDeviceVersion '{}'
```

> ACG groups: public, private, all, bluetooth.query, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_getmagicsearchresult"></a>
## `gap/getMagicSearchResult`

`luna://com.webos.service.bluetooth/gap/getMagicSearchResult`

Returns the magic search result (gap)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/getMagicSearchResult '{}'
```

> ACG groups: public, private, all, bluetooth.query, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_getstate"></a>
## `gap/getState`

`luna://com.webos.service.bluetooth/gap/getState`

Returns the state (gap)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/getState '{}'
```

> ACG groups: public, private, all, bluetooth.query, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_gettrusteddevices"></a>
## `gap/getTrustedDevices`

`luna://com.webos.service.bluetooth/gap/getTrustedDevices`

Bluetooth gap/getTrustedDevices exposed through SSAP

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/gap/getTrustedDevices","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="gap_isradioon"></a>
## `gap/isRadioOn`

`luna://com.webos.service.bluetooth/gap/isRadioOn`

Reports whether the radio on is set (gap)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/isRadioOn '{}'
```

> ACG groups: public, private, all, bluetooth.query, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_iswifionly"></a>
## `gap/isWiFiOnly`

`luna://com.webos.service.bluetooth/gap/isWiFiOnly`

Bluetooth gap/isWiFiOnly exposed through SSAP

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/gap/isWiFiOnly","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="gap_launchadapterfwupdate"></a>
## `gap/launchAdapterFwUpdate`

`luna://com.webos.service.bluetooth/gap/launchAdapterFwUpdate`

Launches the adapter firmware update (gap)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/launchAdapterFwUpdate '{}'
```

> ACG groups: public, private, all, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_registerbtappservicelist"></a>
## `gap/registerBtAppServiceList`

`luna://com.webos.service.bluetooth/gap/registerBtAppServiceList`

Registers the Bluetooth app service list (gap)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/registerBtAppServiceList '{}'
```

> ACG groups: all, bluetooth.query, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_removetrusteddevice"></a>
## `gap/removeTrustedDevice`

`luna://com.webos.service.bluetooth/gap/removeTrustedDevice`

Bluetooth gap/removeTrustedDevice exposed through SSAP

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/gap/removeTrustedDevice","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="gap_resetmagicsearchresult"></a>
## `gap/resetMagicSearchResult` ⚠️ DANGEROUS

`luna://com.webos.service.bluetooth/gap/resetMagicSearchResult`

Resets the magic search result (gap)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/resetMagicSearchResult '{}'
```

> ACG groups: public, private, all, bluetooth.query, devices, bluetooth.manage. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_responsebtpreparesuspenddone"></a>
## `gap/responseBtPrepareSuspendDone`

`luna://com.webos.service.bluetooth/gap/responseBtPrepareSuspendDone`

Handles the response Bluetooth prepare suspend done (gap)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/responseBtPrepareSuspendDone '{}'
```

> ACG groups: public, private, all, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="service_connect"></a>
## `service/connect`

`luna://com.webos.service.bluetooth/service/connect`

Bluetooth service/connect exposed through SSAP

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/service/connect","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="service_disconnect"></a>
## `service/disconnect`

`luna://com.webos.service.bluetooth/service/disconnect`

Bluetooth service/disconnect exposed through SSAP

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/service/disconnect","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="service_getstates"></a>
## `service/getStates`

`luna://com.webos.service.bluetooth/service/getStates`

Bluetooth service/getStates exposed through SSAP

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/service/getStates","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="service_init"></a>
## `service/init`

`luna://com.webos.service.bluetooth/service/init`

Initializes the bluetooth (service)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/service/init '{}'
```

> ACG groups: public, private, all, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="service_release"></a>
## `service/release`

`luna://com.webos.service.bluetooth/service/release`

Releases the bluetooth (service)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/service/release '{}'
```

> ACG groups: public, private, all, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="service_subscribenotifications"></a>
## `service/subscribeNotifications`

`luna://com.webos.service.bluetooth/service/subscribeNotifications`

Bluetooth service/subscribeNotifications exposed through SSAP

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/service/subscribeNotifications","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)
