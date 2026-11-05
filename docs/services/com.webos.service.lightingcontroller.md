# `com.webos.service.lightingcontroller`

Ambient/gaming LED lighting controller: reads the ambient and gaming LED MICOM microcontroller firmware versions and updates that firmware. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getAmbientLedMicomVersion`](#getambientledmicomversion) | public |  | power | inferred | Returns the ambient LED MICOM version. |
| [`getGamingLedMicomVersion`](#getgamingledmicomversion) | public |  | power | inferred | Returns the gaming LED MICOM version. |
| [`updateAmbientLedMicomFirmware`](#updateambientledmicomfirmware) | public |  | power | inferred | Updates the ambient LED MICOM firmware. ⚠️ |
| [`updateGamingLedMicomFirmware`](#updategamingledmicomfirmware) | public |  | power | inferred | Updates the gaming LED MICOM firmware. ⚠️ |

<a id="getambientledmicomversion"></a>
## `getAmbientLedMicomVersion`

`luna://com.webos.service.lightingcontroller/getAmbientLedMicomVersion`

Returns the ambient LED MICOM version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.lightingcontroller/getAmbientLedMicomVersion '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getgamingledmicomversion"></a>
## `getGamingLedMicomVersion`

`luna://com.webos.service.lightingcontroller/getGamingLedMicomVersion`

Returns the gaming LED MICOM version.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.lightingcontroller/getGamingLedMicomVersion '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updateambientledmicomfirmware"></a>
## `updateAmbientLedMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.lightingcontroller/updateAmbientLedMicomFirmware`

Updates the ambient LED MICOM firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.lightingcontroller/updateAmbientLedMicomFirmware '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="updategamingledmicomfirmware"></a>
## `updateGamingLedMicomFirmware` ⚠️ DANGEROUS

`luna://com.webos.service.lightingcontroller/updateGamingLedMicomFirmware`

Updates the gaming LED MICOM firmware.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.lightingcontroller/updateGamingLedMicomFirmware '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
