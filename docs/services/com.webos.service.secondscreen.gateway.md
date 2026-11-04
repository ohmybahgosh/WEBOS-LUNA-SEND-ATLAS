# `com.webos.service.secondscreen.gateway`

28 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`app2app/connectToApp`](#app2app_connecttoapp) | private |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`app2app/createAppChannel`](#app2app_createappchannel) | public |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`app2app/host/registerAppChannel`](#app2app_host_registerappchannel) | public |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`app2app/host/sendJoinResponse`](#app2app_host_sendjoinresponse) | public |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`app2app/host/sendMessage`](#app2app_host_sendmessage) | public |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`getHostMessage`](#gethostmessage) | private |  | network | Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`getPairedDeviceList`](#getpaireddevicelist) | private |  | network | Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`getPowerState`](#getpowerstate) | private |  | power | Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`getServiceList`](#getservicelist) | private |  | network | Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`heartbeat/notifyNamedSocket`](#heartbeat_notifynamedsocket) | private |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`heartbeat/ping`](#heartbeat_ping) | private |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`internal/heapdump`](#internal_heapdump) | private |  | network | Method on com.webos.service.secondscreen.gateway (from on-device permission registry; parameters undocumented). |
| [`internal/memoryUsage`](#internal_memoryusage) | private |  | network | Method on com.webos.service.secondscreen.gateway (from on-device permission registry; parameters undocumented). |
| [`internal/setConfig`](#internal_setconfig) | private |  | settings | Method on com.webos.service.secondscreen.gateway (from on-device permission registry; parameters undocumented). |
| [`pairing/acceptPairing`](#pairing_acceptpairing) | private |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`pairing/getPairingStatus`](#pairing_getpairingstatus) | private |  | network | Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`pairing/register`](#pairing_register) | private |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`pairing/rejectPairing`](#pairing_rejectpairing) | private |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`pairing/requestPairing`](#pairing_requestpairing) | private |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`pairing/setPin`](#pairing_setpin) | private |  | network | Setter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`setMobileAccess`](#setmobileaccess) | private |  | network | Setter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`test/getTime`](#test_gettime) | private |  | input | Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`test/protected`](#test_protected) | private |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`test/secure`](#test_secure) | ssap |  | connection | SSAP self-test: reports whether connection is secure/cleared ({clearedForDuty:true}) |
| [`unpair`](#unpair) | private |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`unpairAll`](#unpairall) | private |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`weeCustom/getResponse`](#weecustom_getresponse) | private |  | network | Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |
| [`weeCustom/requestAction`](#weecustom_requestaction) | private |  | network | Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented). |

<a id="app2app_connecttoapp"></a>
## `app2app/connectToApp`

`luna://com.webos.service.secondscreen.gateway/app2app/connectToApp`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/connectToApp '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_createappchannel"></a>
## `app2app/createAppChannel`

`luna://com.webos.service.secondscreen.gateway/app2app/createAppChannel`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/createAppChannel '{}'
```

> ACG groups: public, secondscreen.all, private, system.remote, secondscreen.app2app, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_host_registerappchannel"></a>
## `app2app/host/registerAppChannel`

`luna://com.webos.service.secondscreen.gateway/app2app/host/registerAppChannel`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/host/registerAppChannel '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_host_sendjoinresponse"></a>
## `app2app/host/sendJoinResponse`

`luna://com.webos.service.secondscreen.gateway/app2app/host/sendJoinResponse`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/host/sendJoinResponse '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_host_sendmessage"></a>
## `app2app/host/sendMessage`

`luna://com.webos.service.secondscreen.gateway/app2app/host/sendMessage`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/host/sendMessage '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethostmessage"></a>
## `getHostMessage`

`luna://com.webos.service.secondscreen.gateway/getHostMessage`

Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getHostMessage '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all, secondscreen.uac.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpaireddevicelist"></a>
## `getPairedDeviceList`

`luna://com.webos.service.secondscreen.gateway/getPairedDeviceList`

Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getPairedDeviceList '{}'
```

> ACG groups: secondscreen.all, private, configurator.callbacks, system.remote, all, secondscreen.uac, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpowerstate"></a>
## `getPowerState`

`luna://com.webos.service.secondscreen.gateway/getPowerState`

Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getPowerState '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservicelist"></a>
## `getServiceList`

`luna://com.webos.service.secondscreen.gateway/getServiceList`

Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getServiceList '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="heartbeat_notifynamedsocket"></a>
## `heartbeat/notifyNamedSocket`

`luna://com.webos.service.secondscreen.gateway/heartbeat/notifyNamedSocket`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/heartbeat/notifyNamedSocket '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="heartbeat_ping"></a>
## `heartbeat/ping`

`luna://com.webos.service.secondscreen.gateway/heartbeat/ping`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/heartbeat/ping '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_heapdump"></a>
## `internal/heapdump`

`luna://com.webos.service.secondscreen.gateway/internal/heapdump`

Method on com.webos.service.secondscreen.gateway (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/internal/heapdump '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="internal_memoryusage"></a>
## `internal/memoryUsage`

`luna://com.webos.service.secondscreen.gateway/internal/memoryUsage`

Method on com.webos.service.secondscreen.gateway (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/internal/memoryUsage '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="internal_setconfig"></a>
## `internal/setConfig`

`luna://com.webos.service.secondscreen.gateway/internal/setConfig`

Method on com.webos.service.secondscreen.gateway (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/internal/setConfig '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pairing_acceptpairing"></a>
## `pairing/acceptPairing`

`luna://com.webos.service.secondscreen.gateway/pairing/acceptPairing`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/acceptPairing '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_getpairingstatus"></a>
## `pairing/getPairingStatus`

`luna://com.webos.service.secondscreen.gateway/pairing/getPairingStatus`

Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/getPairingStatus '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_register"></a>
## `pairing/register`

`luna://com.webos.service.secondscreen.gateway/pairing/register`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/register '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_rejectpairing"></a>
## `pairing/rejectPairing`

`luna://com.webos.service.secondscreen.gateway/pairing/rejectPairing`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/rejectPairing '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_requestpairing"></a>
## `pairing/requestPairing`

`luna://com.webos.service.secondscreen.gateway/pairing/requestPairing`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/requestPairing '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_setpin"></a>
## `pairing/setPin`

`luna://com.webos.service.secondscreen.gateway/pairing/setPin`

Setter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/setPin '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmobileaccess"></a>
## `setMobileAccess`

`luna://com.webos.service.secondscreen.gateway/setMobileAccess`

Setter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/setMobileAccess '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_gettime"></a>
## `test/getTime`

`luna://com.webos.service.secondscreen.gateway/test/getTime`

Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/test/getTime '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_protected"></a>
## `test/protected`

`luna://com.webos.service.secondscreen.gateway/test/protected`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/test/protected '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_secure"></a>
## `test/secure`

`luna://com.webos.service.secondscreen.gateway/test/secure`

SSAP self-test: reports whether connection is secure/cleared ({clearedForDuty:true})

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.secondscreen.gateway/test/secure","payload":{}}
```

> Called by ConnectSDK WebOSTVService.secureAccessTest; response {clearedForDuty:true}.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java)

<a id="unpair"></a>
## `unpair`

`luna://com.webos.service.secondscreen.gateway/unpair`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/unpair '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all, secondscreen.uac.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unpairall"></a>
## `unpairAll`

`luna://com.webos.service.secondscreen.gateway/unpairAll`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/unpairAll '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="weecustom_getresponse"></a>
## `weeCustom/getResponse`

`luna://com.webos.service.secondscreen.gateway/weeCustom/getResponse`

Getter on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/weeCustom/getResponse '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="weecustom_requestaction"></a>
## `weeCustom/requestAction`

`luna://com.webos.service.secondscreen.gateway/weeCustom/requestAction`

Method on com.webos.service.secondscreen.gateway (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/weeCustom/requestAction '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
