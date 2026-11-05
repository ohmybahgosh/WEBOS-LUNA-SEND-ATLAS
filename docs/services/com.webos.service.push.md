# `com.webos.service.push`

Push-notification service: registers apps and manages push tokens and receivers, relays messages to APNS/GCM providers, and controls per-app push acceptance. _(inferred from the service's methods)_

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`createToken`](#createtoken) | public |  | network | inferred | Creates the token. |
| [`deleteReceiver`](#deletereceiver) | private |  | network | inferred | Deletes the receiver. ⚠️ |
| [`deleteToken`](#deletetoken) | private |  | network | inferred | Deletes the token. ⚠️ |
| [`getPaStatus`](#getpastatus) | private |  | network | inferred | Returns the pa status. |
| [`getPushServerURL`](#getpushserverurl) | public |  | network | inferred | Returns the push server URL. |
| [`getReceiver`](#getreceiver) | public |  | network | inferred | Returns the receiver. |
| [`getReceiverStatus`](#getreceiverstatus) | public |  | network | inferred | Returns the receiver status. |
| [`getServiceOption`](#getserviceoption) | private |  | network | inferred | Returns the service option. |
| [`listApps`](#listapps) | private |  | network | inferred | Lists the apps. |
| [`registerApp`](#registerapp) | public |  | network | inferred | Registers the app. |
| [`sendApnsMessageToProvider`](#sendapnsmessagetoprovider) | private |  | network | inferred | Sends the apns message to provider. |
| [`sendGcmMessageToProvider`](#sendgcmmessagetoprovider) | private |  | network | inferred | Sends the gcm message to provider. |
| [`sendMessageToProvider`](#sendmessagetoprovider) | private |  | network | inferred | Sends the message to provider. |
| [`sendTokenToProvider`](#sendtokentoprovider) | private |  | network | inferred | Sends the token to provider. |
| [`setAcceptableStatus`](#setacceptablestatus) | public |  | network | inferred | Sets the acceptable status. |
| [`setDeviceKey`](#setdevicekey) | private |  | network | inferred | Sets the device key. |
| [`setReceiverStatus`](#setreceiverstatus) | public |  | network | inferred | Sets the receiver status. |
| [`unregisterApp`](#unregisterapp) | public |  | network | inferred | Unregisters the app. |

<a id="createtoken"></a>
## `createToken`

`luna://com.webos.service.push/createToken`

Creates the token.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/createToken '{}'
```

> ACG groups: notifications, private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletereceiver"></a>
## `deleteReceiver` ⚠️ DANGEROUS

`luna://com.webos.service.push/deleteReceiver`

Deletes the receiver.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/deleteReceiver '{}'
```

> ACG groups: private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletetoken"></a>
## `deleteToken` ⚠️ DANGEROUS

`luna://com.webos.service.push/deleteToken`

Deletes the token.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/deleteToken '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpastatus"></a>
## `getPaStatus`

`luna://com.webos.service.push/getPaStatus`

Returns the pa status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/getPaStatus '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpushserverurl"></a>
## `getPushServerURL`

`luna://com.webos.service.push/getPushServerURL`

Returns the push server URL.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/getPushServerURL '{}'
```

> ACG groups: notifications, private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getreceiver"></a>
## `getReceiver`

`luna://com.webos.service.push/getReceiver`

Returns the receiver.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/getReceiver '{}'
```

> ACG groups: private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getreceiverstatus"></a>
## `getReceiverStatus`

`luna://com.webos.service.push/getReceiverStatus`

Returns the receiver status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/getReceiverStatus '{}'
```

> ACG groups: private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getserviceoption"></a>
## `getServiceOption`

`luna://com.webos.service.push/getServiceOption`

Returns the service option.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/getServiceOption '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listapps"></a>
## `listApps`

`luna://com.webos.service.push/listApps`

Lists the apps.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/listApps '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerapp"></a>
## `registerApp`

`luna://com.webos.service.push/registerApp`

Registers the app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/registerApp '{}'
```

> ACG groups: notifications, private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendapnsmessagetoprovider"></a>
## `sendApnsMessageToProvider`

`luna://com.webos.service.push/sendApnsMessageToProvider`

Sends the apns message to provider.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/sendApnsMessageToProvider '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendgcmmessagetoprovider"></a>
## `sendGcmMessageToProvider`

`luna://com.webos.service.push/sendGcmMessageToProvider`

Sends the gcm message to provider.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/sendGcmMessageToProvider '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendmessagetoprovider"></a>
## `sendMessageToProvider`

`luna://com.webos.service.push/sendMessageToProvider`

Sends the message to provider.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/sendMessageToProvider '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendtokentoprovider"></a>
## `sendTokenToProvider`

`luna://com.webos.service.push/sendTokenToProvider`

Sends the token to provider.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/sendTokenToProvider '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setacceptablestatus"></a>
## `setAcceptableStatus`

`luna://com.webos.service.push/setAcceptableStatus`

Sets the acceptable status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/setAcceptableStatus '{}'
```

> ACG groups: notifications, private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdevicekey"></a>
## `setDeviceKey`

`luna://com.webos.service.push/setDeviceKey`

Sets the device key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/setDeviceKey '{}'
```

> ACG groups: private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setreceiverstatus"></a>
## `setReceiverStatus`

`luna://com.webos.service.push/setReceiverStatus`

Sets the receiver status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/setReceiverStatus '{}'
```

> ACG groups: private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="unregisterapp"></a>
## `unregisterApp`

`luna://com.webos.service.push/unregisterApp`

Unregisters the app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.push/unregisterApp '{}'
```

> ACG groups: notifications, private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
