# `com.webos.service.bluetooth`

26 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`audio/changeToTVSpeaker`](#audio_changetotvspeaker) | public |  | audio | Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented). |
| [`audio/enableSoundOutRedirect`](#audio_enablesoundoutredirect) | public |  | audio | Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented). |
| [`audio/getSoundOutRedirectState`](#audio_getsoundoutredirectstate) | public |  | audio | Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented). |
| [`audio/noReconn`](#audio_noreconn) | public |  | audio | Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented). |
| [`audio/setVolume`](#audio_setvolume) | public |  | audio | Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented). |
| [`audio/yesReconn`](#audio_yesreconn) | public |  | audio | Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented). |
| [`gap/btResumeDone`](#gap_btresumedone) | public |  | bluetooth | Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented). |
| [`gap/findDevices`](#gap_finddevices) | ssap |  | bluetooth | Bluetooth gap/findDevices exposed through SSAP |
| [`gap/getFeatureSupport`](#gap_getfeaturesupport) | private |  | bluetooth | Getter on com.webos.service.bluetooth (introspected on-device; parameters undocumented). |
| [`gap/getLocalDeviceVersion`](#gap_getlocaldeviceversion) | public |  | bluetooth | Getter on com.webos.service.bluetooth (introspected on-device; parameters undocumented). |
| [`gap/getMagicSearchResult`](#gap_getmagicsearchresult) | public |  | bluetooth | Getter on com.webos.service.bluetooth (introspected on-device; parameters undocumented). |
| [`gap/getState`](#gap_getstate) | public |  | bluetooth | Getter on com.webos.service.bluetooth (introspected on-device; parameters undocumented). |
| [`gap/getTrustedDevices`](#gap_gettrusteddevices) | ssap |  | bluetooth | Bluetooth gap/getTrustedDevices exposed through SSAP |
| [`gap/isRadioOn`](#gap_isradioon) | public |  | bluetooth | Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented). |
| [`gap/isWiFiOnly`](#gap_iswifionly) | ssap |  | bluetooth | Bluetooth gap/isWiFiOnly exposed through SSAP |
| [`gap/launchAdapterFwUpdate`](#gap_launchadapterfwupdate) | public |  | bluetooth | Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented). |
| [`gap/registerBtAppServiceList`](#gap_registerbtappservicelist) | private |  | bluetooth | Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented). |
| [`gap/removeTrustedDevice`](#gap_removetrusteddevice) | ssap |  | bluetooth | Bluetooth gap/removeTrustedDevice exposed through SSAP |
| [`gap/resetMagicSearchResult`](#gap_resetmagicsearchresult) | public |  | bluetooth | Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented). ⚠️ |
| [`gap/responseBtPrepareSuspendDone`](#gap_responsebtpreparesuspenddone) | public |  | bluetooth | Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented). |
| [`service/connect`](#service_connect) | ssap |  | bluetooth | Bluetooth service/connect exposed through SSAP |
| [`service/disconnect`](#service_disconnect) | ssap |  | bluetooth | Bluetooth service/disconnect exposed through SSAP |
| [`service/getStates`](#service_getstates) | ssap |  | bluetooth | Bluetooth service/getStates exposed through SSAP |
| [`service/init`](#service_init) | public |  | bluetooth | Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented). |
| [`service/release`](#service_release) | public |  | bluetooth | Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented). |
| [`service/subscribeNotifications`](#service_subscribenotifications) | ssap | yes | bluetooth | Bluetooth service/subscribeNotifications exposed through SSAP |

<a id="audio_changetotvspeaker"></a>
## `audio/changeToTVSpeaker`

`luna://com.webos.service.bluetooth/audio/changeToTVSpeaker`

Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/changeToTVSpeaker '{}'
```

> ACG groups: bluetooth.manage, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="audio_enablesoundoutredirect"></a>
## `audio/enableSoundOutRedirect`

`luna://com.webos.service.bluetooth/audio/enableSoundOutRedirect`

Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/enableSoundOutRedirect '{}'
```

> ACG groups: bluetooth.manage, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="audio_getsoundoutredirectstate"></a>
## `audio/getSoundOutRedirectState`

`luna://com.webos.service.bluetooth/audio/getSoundOutRedirectState`

Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/getSoundOutRedirectState '{}'
```

> ACG groups: bluetooth.manage, bluetooth.query, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="audio_noreconn"></a>
## `audio/noReconn`

`luna://com.webos.service.bluetooth/audio/noReconn`

Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/noReconn '{}'
```

> ACG groups: bluetooth.manage, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="audio_setvolume"></a>
## `audio/setVolume`

`luna://com.webos.service.bluetooth/audio/setVolume`

Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/setVolume '{}'
```

> ACG groups: bluetooth.manage, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="audio_yesreconn"></a>
## `audio/yesReconn`

`luna://com.webos.service.bluetooth/audio/yesReconn`

Method on com.webos.service.bluetooth (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/audio/yesReconn '{}'
```

> ACG groups: bluetooth.manage, devices, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gap_btresumedone"></a>
## `gap/btResumeDone`

`luna://com.webos.service.bluetooth/gap/btResumeDone`

Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/gap/findDevices","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="gap_getfeaturesupport"></a>
## `gap/getFeatureSupport`

`luna://com.webos.service.bluetooth/gap/getFeatureSupport`

Getter on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/getFeatureSupport '{}'
```

> ACG groups: all, bluetooth.query, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_getlocaldeviceversion"></a>
## `gap/getLocalDeviceVersion`

`luna://com.webos.service.bluetooth/gap/getLocalDeviceVersion`

Getter on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/getLocalDeviceVersion '{}'
```

> ACG groups: public, private, all, bluetooth.query, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_getmagicsearchresult"></a>
## `gap/getMagicSearchResult`

`luna://com.webos.service.bluetooth/gap/getMagicSearchResult`

Getter on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/getMagicSearchResult '{}'
```

> ACG groups: public, private, all, bluetooth.query, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_getstate"></a>
## `gap/getState`

`luna://com.webos.service.bluetooth/gap/getState`

Getter on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/gap/getTrustedDevices","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="gap_isradioon"></a>
## `gap/isRadioOn`

`luna://com.webos.service.bluetooth/gap/isRadioOn`

Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/gap/isWiFiOnly","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="gap_launchadapterfwupdate"></a>
## `gap/launchAdapterFwUpdate`

`luna://com.webos.service.bluetooth/gap/launchAdapterFwUpdate`

Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/launchAdapterFwUpdate '{}'
```

> ACG groups: public, private, all, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_registerbtappservicelist"></a>
## `gap/registerBtAppServiceList`

`luna://com.webos.service.bluetooth/gap/registerBtAppServiceList`

Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/gap/removeTrustedDevice","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="gap_resetmagicsearchresult"></a>
## `gap/resetMagicSearchResult` ⚠️ DANGEROUS

`luna://com.webos.service.bluetooth/gap/resetMagicSearchResult`

Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/gap/resetMagicSearchResult '{}'
```

> ACG groups: public, private, all, bluetooth.query, devices, bluetooth.manage. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gap_responsebtpreparesuspenddone"></a>
## `gap/responseBtPrepareSuspendDone`

`luna://com.webos.service.bluetooth/gap/responseBtPrepareSuspendDone`

Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

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
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/service/getStates","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)

<a id="service_init"></a>
## `service/init`

`luna://com.webos.service.bluetooth/service/init`

Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.bluetooth/service/init '{}'
```

> ACG groups: public, private, all, devices, bluetooth.manage.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="service_release"></a>
## `service/release`

`luna://com.webos.service.bluetooth/service/release`

Method on com.webos.service.bluetooth (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

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
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.bluetooth/service/subscribeNotifications","payload":{}}
```

> Listed (unimplemented TODO) in snabb/webostv; Payload unknown. (Manifest permission names CONTROL_BLUETOOTH and CHECK_BLUETOOTH_DEVICE exist in homebridge-lgwebos-tv's registration manifest, but the sources do not map them to specific methods.)

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go)
