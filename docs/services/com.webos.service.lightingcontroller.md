# `com.webos.service.lightingcontroller`

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getAmbientLedMicomVersion`](#getambientledmicomversion) | public |  | power | Method on com.webos.service.lightingcontroller (from on-device permission registry; parameters undocumented). |
| [`getGamingLedMicomVersion`](#getgamingledmicomversion) | public |  | power | Method on com.webos.service.lightingcontroller (from on-device permission registry; parameters undocumented). |
| [`updateAmbientLedMicomFirmware`](#updateambientledmicomfirmware) | public |  | power | Method on com.webos.service.lightingcontroller (from on-device permission registry; parameters undocumented). ⚠️ |
| [`updateGamingLedMicomFirmware`](#updategamingledmicomfirmware) | public |  | power | Method on com.webos.service.lightingcontroller (from on-device permission registry; parameters undocumented). ⚠️ |

<a id="getambientledmicomversion"></a>
## `getAmbientLedMicomVersion`

`luna://com.webos.service.lightingcontroller/getAmbientLedMicomVersion`

Method on com.webos.service.lightingcontroller (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.lightingcontroller/getAmbientLedMicomVersion '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getgamingledmicomversion"></a>
## `getGamingLedMicomVersion`

`luna://com.webos.service.lightingcontroller/getGamingLedMicomVersion`

Method on com.webos.service.lightingcontroller (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.lightingcontroller/getGamingLedMicomVersion '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updateambientledmicomfirmware"></a>
## `updateAmbientLedMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.lightingcontroller/updateAmbientLedMicomFirmware`

Method on com.webos.service.lightingcontroller (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.lightingcontroller/updateAmbientLedMicomFirmware '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updategamingledmicomfirmware"></a>
## `updateGamingLedMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.lightingcontroller/updateGamingLedMicomFirmware`

Method on com.webos.service.lightingcontroller (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.lightingcontroller/updateGamingLedMicomFirmware '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
