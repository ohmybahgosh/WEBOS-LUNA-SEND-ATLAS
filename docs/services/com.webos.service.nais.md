# `com.webos.service.nais`

Appears to provide a QR-code-based service plus subtitle controls, reporting service status and supported-platform info. _(inferred from the service's methods)_

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getQrCodeGenerationUrl`](#getqrcodegenerationurl) | public |  | misc | inferred | Returns the qr code generation URL. |
| [`getServiceStatus`](#getservicestatus) | public |  | misc | inferred | Returns the service status. |
| [`getSupportedPlatformInfo`](#getsupportedplatforminfo) | public |  | misc | inferred | Returns the supported platform info. |
| [`setSubtitleDisplay`](#setsubtitledisplay) | public |  | media | inferred | Sets the subtitle display. |
| [`setSubtitleEnable`](#setsubtitleenable) | public |  | media | inferred | Sets the subtitle enable. |
| [`setSubtitleLanguage`](#setsubtitlelanguage) | public |  | media | inferred | Sets the subtitle language. |

<a id="getqrcodegenerationurl"></a>
## `getQrCodeGenerationUrl`

`luna://com.webos.service.nais/getQrCodeGenerationUrl`

Returns the qr code generation URL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nais/getQrCodeGenerationUrl '{}'
```

> ACG groups: com.webos.service.nais, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getservicestatus"></a>
## `getServiceStatus`

`luna://com.webos.service.nais/getServiceStatus`

Returns the service status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nais/getServiceStatus '{}'
```

> ACG groups: com.webos.service.nais, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsupportedplatforminfo"></a>
## `getSupportedPlatformInfo`

`luna://com.webos.service.nais/getSupportedPlatformInfo`

Returns the supported platform info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nais/getSupportedPlatformInfo '{}'
```

> ACG groups: com.webos.service.nais, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitledisplay"></a>
## `setSubtitleDisplay`

`luna://com.webos.service.nais/setSubtitleDisplay`

Sets the subtitle display.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nais/setSubtitleDisplay '{}'
```

> ACG groups: com.webos.service.nais, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitleenable"></a>
## `setSubtitleEnable`

`luna://com.webos.service.nais/setSubtitleEnable`

Sets the subtitle enable.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nais/setSubtitleEnable '{}'
```

> ACG groups: com.webos.service.nais, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsubtitlelanguage"></a>
## `setSubtitleLanguage`

`luna://com.webos.service.nais/setSubtitleLanguage`

Sets the subtitle language.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nais/setSubtitleLanguage '{}'
```

> ACG groups: com.webos.service.nais, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
