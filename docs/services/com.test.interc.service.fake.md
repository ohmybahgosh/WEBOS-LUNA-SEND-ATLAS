# `com.test.interc.service.fake`

13 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`crd/getCRDEvent`](#crd_getcrdevent) | public |  | misc | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`databroadcast/getAlertInfo`](#databroadcast_getalertinfo) | public |  | tv-broadcast | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`databroadcast/getCurrentEPGInfo`](#databroadcast_getcurrentepginfo) | public |  | tv-broadcast | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`databroadcast/getCurrentServiceInfo`](#databroadcast_getcurrentserviceinfo) | public |  | tv-broadcast | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`settingsservice/getSystemSettingsAudioDescriptionAtsc30`](#settingsservice_getsystemsettingsaudiodescriptionatsc30) | public |  | audio | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`settingsservice/getSystemSettingsCaption`](#settingsservice_getsystemsettingscaption) | public |  | settings | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`settingsservice/getSystemSettingsCaptionEnable`](#settingsservice_getsystemsettingscaptionenable) | public |  | settings | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`settingsservice/getSystemSettingsCaptionLang`](#settingsservice_getsystemsettingscaptionlang) | public |  | settings | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`settingsservice/getSystemSettingsDialogEnhancementPref`](#settingsservice_getsystemsettingsdialogenhancementpref) | public |  | settings | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`settingsservice/getSystemSettingsEmergencyInformation`](#settingsservice_getsystemsettingsemergencyinformation) | public |  | settings | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`settingsservice/getSystemSettingsLocaleInfo`](#settingsservice_getsystemsettingslocaleinfo) | public |  | settings | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`settingsservice/getSystemSettingsSound`](#settingsservice_getsystemsettingssound) | public |  | settings | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |
| [`subtitle/getRatingInfo`](#subtitle_getratinginfo) | public |  | media | Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented). |

<a id="crd_getcrdevent"></a>
## `crd/getCRDEvent`

`luna://com.test.interc.service.fake/crd/getCRDEvent`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/crd/getCRDEvent '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="databroadcast_getalertinfo"></a>
## `databroadcast/getAlertInfo`

`luna://com.test.interc.service.fake/databroadcast/getAlertInfo`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/databroadcast/getAlertInfo '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="databroadcast_getcurrentepginfo"></a>
## `databroadcast/getCurrentEPGInfo`

`luna://com.test.interc.service.fake/databroadcast/getCurrentEPGInfo`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/databroadcast/getCurrentEPGInfo '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="databroadcast_getcurrentserviceinfo"></a>
## `databroadcast/getCurrentServiceInfo`

`luna://com.test.interc.service.fake/databroadcast/getCurrentServiceInfo`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/databroadcast/getCurrentServiceInfo '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingsaudiodescriptionatsc30"></a>
## `settingsservice/getSystemSettingsAudioDescriptionAtsc30`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsAudioDescriptionAtsc30`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsAudioDescriptionAtsc30 '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingscaption"></a>
## `settingsservice/getSystemSettingsCaption`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaption`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaption '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingscaptionenable"></a>
## `settingsservice/getSystemSettingsCaptionEnable`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaptionEnable`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaptionEnable '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingscaptionlang"></a>
## `settingsservice/getSystemSettingsCaptionLang`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaptionLang`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaptionLang '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingsdialogenhancementpref"></a>
## `settingsservice/getSystemSettingsDialogEnhancementPref`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsDialogEnhancementPref`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsDialogEnhancementPref '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingsemergencyinformation"></a>
## `settingsservice/getSystemSettingsEmergencyInformation`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsEmergencyInformation`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsEmergencyInformation '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingslocaleinfo"></a>
## `settingsservice/getSystemSettingsLocaleInfo`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsLocaleInfo`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsLocaleInfo '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingssound"></a>
## `settingsservice/getSystemSettingsSound`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsSound`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsSound '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subtitle_getratinginfo"></a>
## `subtitle/getRatingInfo`

`luna://com.test.interc.service.fake/subtitle/getRatingInfo`

Method on com.test.interc.service.fake (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/subtitle/getRatingInfo '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
