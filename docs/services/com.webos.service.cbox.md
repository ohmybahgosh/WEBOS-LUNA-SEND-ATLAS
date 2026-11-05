# `com.webos.service.cbox`

Appears to be a content box/recording media store: reports device and scan status, recently played items, and audio/VR metadata. _(inferred from the service's methods)_

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`debug`](#debug) | private |  | misc | inferred | Handles the debug. |
| [`getAudioMetadata`](#getaudiometadata) | private |  | audio | inferred | Returns the audio metadata. |
| [`getChangedContent`](#getchangedcontent) | private |  | misc | inferred | Returns the changed content. |
| [`getDeviceStatus`](#getdevicestatus) | private |  | misc | inferred | Returns the device status. |
| [`getScanStatus`](#getscanstatus) | private |  | misc | inferred | Returns the scan status. |
| [`getVRMetadata`](#getvrmetadata) | private |  | tv-broadcast | inferred | Returns the VR metadata. |
| [`isQuotaError`](#isquotaerror) | private |  | misc | inferred | Reports whether the quota error is set. |
| [`setRecentlyPlayed`](#setrecentlyplayed) | public |  | misc | inferred | Sets the recently played. |
| [`unitTest`](#unittest) | private |  | misc | inferred | Handles the unit test. |

<a id="debug"></a>
## `debug`

`luna://com.webos.service.cbox/debug`

Handles the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.cbox/debug '{}'
```

> ACG groups: private, cbox.contentInfo, media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaudiometadata"></a>
## `getAudioMetadata`

`luna://com.webos.service.cbox/getAudioMetadata`

Returns the audio metadata.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.cbox/getAudioMetadata '{}'
```

> ACG groups: private, cbox.contentInfo, media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchangedcontent"></a>
## `getChangedContent`

`luna://com.webos.service.cbox/getChangedContent`

Returns the changed content.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.cbox/getChangedContent '{}'
```

> ACG groups: private, cbox.contentInfo, media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevicestatus"></a>
## `getDeviceStatus`

`luna://com.webos.service.cbox/getDeviceStatus`

Returns the device status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.cbox/getDeviceStatus '{}'
```

> ACG groups: private, cbox.contentInfo, media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getscanstatus"></a>
## `getScanStatus`

`luna://com.webos.service.cbox/getScanStatus`

Returns the scan status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.cbox/getScanStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getvrmetadata"></a>
## `getVRMetadata`

`luna://com.webos.service.cbox/getVRMetadata`

Returns the VR metadata.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.cbox/getVRMetadata '{}'
```

> ACG groups: private, cbox.contentInfo, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="isquotaerror"></a>
## `isQuotaError`

`luna://com.webos.service.cbox/isQuotaError`

Reports whether the quota error is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.cbox/isQuotaError '{}'
```

> ACG groups: private, cbox.contentInfo, media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setrecentlyplayed"></a>
## `setRecentlyPlayed`

`luna://com.webos.service.cbox/setRecentlyPlayed`

Sets the recently played.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.cbox/setRecentlyPlayed '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="unittest"></a>
## `unitTest`

`luna://com.webos.service.cbox/unitTest`

Handles the unit test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.cbox/unitTest '{}'
```

> ACG groups: private, cbox.contentInfo, media, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
