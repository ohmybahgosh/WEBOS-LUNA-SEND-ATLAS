# `com.webos.service.push`

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`createToken`](#createtoken) | public |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`deleteReceiver`](#deletereceiver) | private |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). ⚠️ |
| [`deleteToken`](#deletetoken) | private |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). ⚠️ |
| [`getPaStatus`](#getpastatus) | private |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`getPushServerURL`](#getpushserverurl) | public |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`getReceiver`](#getreceiver) | public |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`getReceiverStatus`](#getreceiverstatus) | public |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`getServiceOption`](#getserviceoption) | private |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`listApps`](#listapps) | private |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`registerApp`](#registerapp) | public |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`sendApnsMessageToProvider`](#sendapnsmessagetoprovider) | private |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`sendGcmMessageToProvider`](#sendgcmmessagetoprovider) | private |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`sendMessageToProvider`](#sendmessagetoprovider) | private |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`sendTokenToProvider`](#sendtokentoprovider) | private |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`setAcceptableStatus`](#setacceptablestatus) | public |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`setDeviceKey`](#setdevicekey) | private |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`setReceiverStatus`](#setreceiverstatus) | public |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |
| [`unregisterApp`](#unregisterapp) | public |  | network | Method on com.webos.service.push (from on-device permission registry; parameters undocumented). |

<a id="createtoken"></a>
## `createToken`

`luna://com.webos.service.push/createToken`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/createToken '{}'
```

> ACG groups: notifications, private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletereceiver"></a>
## `deleteReceiver` ⚠️ DANGEROUS

`luna://com.webos.service.push/deleteReceiver`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/deleteReceiver '{}'
```

> ACG groups: private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deletetoken"></a>
## `deleteToken` ⚠️ DANGEROUS

`luna://com.webos.service.push/deleteToken`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/deleteToken '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpastatus"></a>
## `getPaStatus`

`luna://com.webos.service.push/getPaStatus`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/getPaStatus '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getpushserverurl"></a>
## `getPushServerURL`

`luna://com.webos.service.push/getPushServerURL`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/getPushServerURL '{}'
```

> ACG groups: notifications, private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getreceiver"></a>
## `getReceiver`

`luna://com.webos.service.push/getReceiver`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/getReceiver '{}'
```

> ACG groups: private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getreceiverstatus"></a>
## `getReceiverStatus`

`luna://com.webos.service.push/getReceiverStatus`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/getReceiverStatus '{}'
```

> ACG groups: private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getserviceoption"></a>
## `getServiceOption`

`luna://com.webos.service.push/getServiceOption`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/getServiceOption '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listapps"></a>
## `listApps`

`luna://com.webos.service.push/listApps`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/listApps '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="registerapp"></a>
## `registerApp`

`luna://com.webos.service.push/registerApp`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/registerApp '{}'
```

> ACG groups: notifications, private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendapnsmessagetoprovider"></a>
## `sendApnsMessageToProvider`

`luna://com.webos.service.push/sendApnsMessageToProvider`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/sendApnsMessageToProvider '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendgcmmessagetoprovider"></a>
## `sendGcmMessageToProvider`

`luna://com.webos.service.push/sendGcmMessageToProvider`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/sendGcmMessageToProvider '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendmessagetoprovider"></a>
## `sendMessageToProvider`

`luna://com.webos.service.push/sendMessageToProvider`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/sendMessageToProvider '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="sendtokentoprovider"></a>
## `sendTokenToProvider`

`luna://com.webos.service.push/sendTokenToProvider`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/sendTokenToProvider '{}'
```

> ACG groups: notifications, private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setacceptablestatus"></a>
## `setAcceptableStatus`

`luna://com.webos.service.push/setAcceptableStatus`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/setAcceptableStatus '{}'
```

> ACG groups: notifications, private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdevicekey"></a>
## `setDeviceKey`

`luna://com.webos.service.push/setDeviceKey`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/setDeviceKey '{}'
```

> ACG groups: private, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setreceiverstatus"></a>
## `setReceiverStatus`

`luna://com.webos.service.push/setReceiverStatus`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/setReceiverStatus '{}'
```

> ACG groups: private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="unregisterapp"></a>
## `unregisterApp`

`luna://com.webos.service.push/unregisterApp`

Method on com.webos.service.push (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.push/unregisterApp '{}'
```

> ACG groups: notifications, private, public, push.control. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
