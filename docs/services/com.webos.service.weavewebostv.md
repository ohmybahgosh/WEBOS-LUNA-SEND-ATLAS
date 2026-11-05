# `com.webos.service.weavewebostv`

Device-registration service (Weave): returns an auth URL and the registered ID, and requests or releases device registration. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getAuthUrl`](#getauthurl) | public |  | misc | inferred | Returns the auth URL. |
| [`getRegisteredId`](#getregisteredid) | public |  | misc | inferred | Returns the registered ID. |
| [`releaseDeviceRegistration`](#releasedeviceregistration) | public |  | misc | inferred | Releases the device registration. |
| [`requestDeviceRegistration`](#requestdeviceregistration) | public |  | misc | inferred | Requests the device registration. |

<a id="getauthurl"></a>
## `getAuthUrl`

`luna://com.webos.service.weavewebostv/getAuthUrl`

Returns the auth URL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.weavewebostv/getAuthUrl '{}'
```

> ACG groups: private, public, weavewebostv.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getregisteredid"></a>
## `getRegisteredId`

`luna://com.webos.service.weavewebostv/getRegisteredId`

Returns the registered ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.weavewebostv/getRegisteredId '{}'
```

> ACG groups: private, public, weavewebostv.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="releasedeviceregistration"></a>
## `releaseDeviceRegistration`

`luna://com.webos.service.weavewebostv/releaseDeviceRegistration`

Releases the device registration.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.weavewebostv/releaseDeviceRegistration '{}'
```

> ACG groups: private, public, weavewebostv.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requestdeviceregistration"></a>
## `requestDeviceRegistration`

`luna://com.webos.service.weavewebostv/requestDeviceRegistration`

Requests the device registration.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.weavewebostv/requestDeviceRegistration '{}'
```

> ACG groups: private, public, weavewebostv.action. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
