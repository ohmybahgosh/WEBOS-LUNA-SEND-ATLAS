# `com.webos.service.weavewebostv`

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getAuthUrl`](#getauthurl) | public |  | misc | Method on com.webos.service.weavewebostv (from on-device permission registry; parameters undocumented). |
| [`getRegisteredId`](#getregisteredid) | public |  | misc | Method on com.webos.service.weavewebostv (from on-device permission registry; parameters undocumented). |
| [`releaseDeviceRegistration`](#releasedeviceregistration) | public |  | misc | Method on com.webos.service.weavewebostv (from on-device permission registry; parameters undocumented). |
| [`requestDeviceRegistration`](#requestdeviceregistration) | public |  | misc | Method on com.webos.service.weavewebostv (from on-device permission registry; parameters undocumented). |

<a id="getauthurl"></a>
## `getAuthUrl`

`luna://com.webos.service.weavewebostv/getAuthUrl`

Method on com.webos.service.weavewebostv (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.weavewebostv/getAuthUrl '{}'
```

> ACG groups: private, public, weavewebostv.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getregisteredid"></a>
## `getRegisteredId`

`luna://com.webos.service.weavewebostv/getRegisteredId`

Method on com.webos.service.weavewebostv (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.weavewebostv/getRegisteredId '{}'
```

> ACG groups: private, public, weavewebostv.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releasedeviceregistration"></a>
## `releaseDeviceRegistration`

`luna://com.webos.service.weavewebostv/releaseDeviceRegistration`

Method on com.webos.service.weavewebostv (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.weavewebostv/releaseDeviceRegistration '{}'
```

> ACG groups: private, public, weavewebostv.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requestdeviceregistration"></a>
## `requestDeviceRegistration`

`luna://com.webos.service.weavewebostv/requestDeviceRegistration`

Method on com.webos.service.weavewebostv (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.weavewebostv/requestDeviceRegistration '{}'
```

> ACG groups: private, public, weavewebostv.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
