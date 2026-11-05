# `com.test.interc.service.fake`

Fake/test interceptor service that mocks caption, data-broadcast and settings reads (captions, locale, sound, emergency info) for testing. Marked as a test stub by name. _(inferred from the service's methods)_

13 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`crd/getCRDEvent`](#crd_getcrdevent) | public |  | misc | inferred | Returns the CRD event (crd) |
| [`databroadcast/getAlertInfo`](#databroadcast_getalertinfo) | public |  | tv-broadcast | inferred | Returns the alert info (databroadcast) |
| [`databroadcast/getCurrentEPGInfo`](#databroadcast_getcurrentepginfo) | public |  | tv-broadcast | inferred | Returns the current EPG info (databroadcast) |
| [`databroadcast/getCurrentServiceInfo`](#databroadcast_getcurrentserviceinfo) | public |  | tv-broadcast | inferred | Returns the current service info (databroadcast) |
| [`settingsservice/getSystemSettingsAudioDescriptionAtsc30`](#settingsservice_getsystemsettingsaudiodescriptionatsc30) | public |  | audio | inferred | Returns the system settings audio description ATSC 30 (settingsservice) |
| [`settingsservice/getSystemSettingsCaption`](#settingsservice_getsystemsettingscaption) | public |  | settings | inferred | Returns the system settings caption (settingsservice) |
| [`settingsservice/getSystemSettingsCaptionEnable`](#settingsservice_getsystemsettingscaptionenable) | public |  | settings | inferred | Returns the system settings caption enable (settingsservice) |
| [`settingsservice/getSystemSettingsCaptionLang`](#settingsservice_getsystemsettingscaptionlang) | public |  | settings | inferred | Returns the system settings caption lang (settingsservice) |
| [`settingsservice/getSystemSettingsDialogEnhancementPref`](#settingsservice_getsystemsettingsdialogenhancementpref) | public |  | settings | inferred | Returns the system settings dialog enhancement pref (settingsservice) |
| [`settingsservice/getSystemSettingsEmergencyInformation`](#settingsservice_getsystemsettingsemergencyinformation) | public |  | settings | inferred | Returns the system settings emergency information (settingsservice) |
| [`settingsservice/getSystemSettingsLocaleInfo`](#settingsservice_getsystemsettingslocaleinfo) | public |  | settings | inferred | Returns the system settings locale info (settingsservice) |
| [`settingsservice/getSystemSettingsSound`](#settingsservice_getsystemsettingssound) | public |  | settings | inferred | Returns the system settings sound (settingsservice) |
| [`subtitle/getRatingInfo`](#subtitle_getratinginfo) | public |  | media | inferred | Returns the rating info (subtitle) |

<a id="crd_getcrdevent"></a>
## `crd/getCRDEvent`

`luna://com.test.interc.service.fake/crd/getCRDEvent`

Returns the CRD event (crd)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/crd/getCRDEvent '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="databroadcast_getalertinfo"></a>
## `databroadcast/getAlertInfo`

`luna://com.test.interc.service.fake/databroadcast/getAlertInfo`

Returns the alert info (databroadcast)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/databroadcast/getAlertInfo '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="databroadcast_getcurrentepginfo"></a>
## `databroadcast/getCurrentEPGInfo`

`luna://com.test.interc.service.fake/databroadcast/getCurrentEPGInfo`

Returns the current EPG info (databroadcast)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/databroadcast/getCurrentEPGInfo '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="databroadcast_getcurrentserviceinfo"></a>
## `databroadcast/getCurrentServiceInfo`

`luna://com.test.interc.service.fake/databroadcast/getCurrentServiceInfo`

Returns the current service info (databroadcast)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/databroadcast/getCurrentServiceInfo '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingsaudiodescriptionatsc30"></a>
## `settingsservice/getSystemSettingsAudioDescriptionAtsc30`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsAudioDescriptionAtsc30`

Returns the system settings audio description ATSC 30 (settingsservice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsAudioDescriptionAtsc30 '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingscaption"></a>
## `settingsservice/getSystemSettingsCaption`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaption`

Returns the system settings caption (settingsservice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaption '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingscaptionenable"></a>
## `settingsservice/getSystemSettingsCaptionEnable`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaptionEnable`

Returns the system settings caption enable (settingsservice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaptionEnable '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingscaptionlang"></a>
## `settingsservice/getSystemSettingsCaptionLang`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaptionLang`

Returns the system settings caption lang (settingsservice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsCaptionLang '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingsdialogenhancementpref"></a>
## `settingsservice/getSystemSettingsDialogEnhancementPref`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsDialogEnhancementPref`

Returns the system settings dialog enhancement pref (settingsservice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsDialogEnhancementPref '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingsemergencyinformation"></a>
## `settingsservice/getSystemSettingsEmergencyInformation`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsEmergencyInformation`

Returns the system settings emergency information (settingsservice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsEmergencyInformation '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingslocaleinfo"></a>
## `settingsservice/getSystemSettingsLocaleInfo`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsLocaleInfo`

Returns the system settings locale info (settingsservice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsLocaleInfo '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="settingsservice_getsystemsettingssound"></a>
## `settingsservice/getSystemSettingsSound`

`luna://com.test.interc.service.fake/settingsservice/getSystemSettingsSound`

Returns the system settings sound (settingsservice)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/settingsservice/getSystemSettingsSound '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subtitle_getratinginfo"></a>
## `subtitle/getRatingInfo`

`luna://com.test.interc.service.fake/subtitle/getRatingInfo`

Returns the rating info (subtitle)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.test.interc.service.fake/subtitle/getRatingInfo '{}'
```

> ACG groups: all, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
