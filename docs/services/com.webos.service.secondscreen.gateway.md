# `com.webos.service.secondscreen.gateway`

Second-screen gateway: pairs and lists companion devices, sets up app-to-app channels and host messaging, and reports power state and service list. _(inferred from the service's methods)_

28 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`app2app/connectToApp`](#app2app_connecttoapp) | private |  | network | inferred | Connects the to app (app 2 app) |
| [`app2app/createAppChannel`](#app2app_createappchannel) | public |  | network | inferred | Creates the app channel (app 2 app) |
| [`app2app/host/registerAppChannel`](#app2app_host_registerappchannel) | public |  | network | inferred | Registers the app channel (app 2 app host) |
| [`app2app/host/sendJoinResponse`](#app2app_host_sendjoinresponse) | public |  | network | inferred | Sends the join response (app 2 app host) |
| [`app2app/host/sendMessage`](#app2app_host_sendmessage) | public |  | network | inferred | Sends the message (app 2 app host) |
| [`getHostMessage`](#gethostmessage) | private |  | network | inferred | Returns the host message. |
| [`getPairedDeviceList`](#getpaireddevicelist) | private |  | network | inferred | Returns the paired device list. |
| [`getPowerState`](#getpowerstate) | private |  | power | inferred | Returns the power state. |
| [`getServiceList`](#getservicelist) | private |  | network | inferred | Returns the service list. |
| [`heartbeat/notifyNamedSocket`](#heartbeat_notifynamedsocket) | private |  | network | inferred | Notifies of the named socket (heartbeat) |
| [`heartbeat/ping`](#heartbeat_ping) | private |  | network | inferred | Pings the secondscreen gateway (heartbeat) |
| [`internal/heapdump`](#internal_heapdump) | private |  | network | inferred | Handles the heapdump (internal) |
| [`internal/memoryUsage`](#internal_memoryusage) | private |  | network | inferred | Handles the memory usage (internal) |
| [`internal/setConfig`](#internal_setconfig) | private |  | settings | inferred | Sets the config (internal) |
| [`pairing/acceptPairing`](#pairing_acceptpairing) | private |  | network | inferred | Handles the accept pairing (pairing) |
| [`pairing/getPairingStatus`](#pairing_getpairingstatus) | private |  | network | inferred | Returns the pairing status (pairing) |
| [`pairing/register`](#pairing_register) | private |  | network | inferred | Registers the secondscreen gateway (pairing) |
| [`pairing/rejectPairing`](#pairing_rejectpairing) | private |  | network | inferred | Handles the reject pairing (pairing) |
| [`pairing/requestPairing`](#pairing_requestpairing) | private |  | network | inferred | Requests the pairing (pairing) |
| [`pairing/setPin`](#pairing_setpin) | private |  | network | inferred | Sets the pin (pairing) |
| [`setMobileAccess`](#setmobileaccess) | private |  | network | inferred | Sets the mobile access. |
| [`test/getTime`](#test_gettime) | private |  | input | inferred | Returns the time (test) |
| [`test/protected`](#test_protected) | private |  | network | inferred | Handles the protected (test) |
| [`test/secure`](#test_secure) | ssap |  | connection | documented | SSAP self-test: reports whether connection is secure/cleared ({clearedForDuty:true}) |
| [`unpair`](#unpair) | private |  | network | inferred | Unpairs the secondscreen gateway. |
| [`unpairAll`](#unpairall) | private |  | network | inferred | Unpairs the all. |
| [`weeCustom/getResponse`](#weecustom_getresponse) | private |  | network | inferred | Returns the response (wee custom) |
| [`weeCustom/requestAction`](#weecustom_requestaction) | private |  | network | inferred | Requests the action (wee custom) |

<a id="app2app_connecttoapp"></a>
## `app2app/connectToApp`

`luna://com.webos.service.secondscreen.gateway/app2app/connectToApp`

Connects the to app (app 2 app)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/connectToApp '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_createappchannel"></a>
## `app2app/createAppChannel`

`luna://com.webos.service.secondscreen.gateway/app2app/createAppChannel`

Creates the app channel (app 2 app)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/createAppChannel '{}'
```

> ACG groups: public, secondscreen.all, private, system.remote, secondscreen.app2app, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_host_registerappchannel"></a>
## `app2app/host/registerAppChannel`

`luna://com.webos.service.secondscreen.gateway/app2app/host/registerAppChannel`

Registers the app channel (app 2 app host)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/host/registerAppChannel '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_host_sendjoinresponse"></a>
## `app2app/host/sendJoinResponse`

`luna://com.webos.service.secondscreen.gateway/app2app/host/sendJoinResponse`

Sends the join response (app 2 app host)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/host/sendJoinResponse '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_host_sendmessage"></a>
## `app2app/host/sendMessage`

`luna://com.webos.service.secondscreen.gateway/app2app/host/sendMessage`

Sends the message (app 2 app host)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/host/sendMessage '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethostmessage"></a>
## `getHostMessage`

`luna://com.webos.service.secondscreen.gateway/getHostMessage`

Returns the host message.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getHostMessage '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all, secondscreen.uac.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpaireddevicelist"></a>
## `getPairedDeviceList`

`luna://com.webos.service.secondscreen.gateway/getPairedDeviceList`

Returns the paired device list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getPairedDeviceList '{}'
```

> ACG groups: secondscreen.all, private, configurator.callbacks, system.remote, all, secondscreen.uac, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpowerstate"></a>
## `getPowerState`

`luna://com.webos.service.secondscreen.gateway/getPowerState`

Returns the power state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getPowerState '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservicelist"></a>
## `getServiceList`

`luna://com.webos.service.secondscreen.gateway/getServiceList`

Returns the service list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `name` |  |
| `services` |  |
| `version` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getServiceList '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="heartbeat_notifynamedsocket"></a>
## `heartbeat/notifyNamedSocket`

`luna://com.webos.service.secondscreen.gateway/heartbeat/notifyNamedSocket`

Notifies of the named socket (heartbeat)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/heartbeat/notifyNamedSocket '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="heartbeat_ping"></a>
## `heartbeat/ping`

`luna://com.webos.service.secondscreen.gateway/heartbeat/ping`

Pings the secondscreen gateway (heartbeat)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/heartbeat/ping '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="internal_heapdump"></a>
## `internal/heapdump`

`luna://com.webos.service.secondscreen.gateway/internal/heapdump`

Handles the heapdump (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/internal/heapdump '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="internal_memoryusage"></a>
## `internal/memoryUsage`

`luna://com.webos.service.secondscreen.gateway/internal/memoryUsage`

Handles the memory usage (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/internal/memoryUsage '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="internal_setconfig"></a>
## `internal/setConfig`

`luna://com.webos.service.secondscreen.gateway/internal/setConfig`

Sets the config (internal)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/internal/setConfig '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="pairing_acceptpairing"></a>
## `pairing/acceptPairing`

`luna://com.webos.service.secondscreen.gateway/pairing/acceptPairing`

Handles the accept pairing (pairing)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/acceptPairing '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_getpairingstatus"></a>
## `pairing/getPairingStatus`

`luna://com.webos.service.secondscreen.gateway/pairing/getPairingStatus`

Returns the pairing status (pairing)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/getPairingStatus '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_register"></a>
## `pairing/register`

`luna://com.webos.service.secondscreen.gateway/pairing/register`

Registers the secondscreen gateway (pairing)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/register '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_rejectpairing"></a>
## `pairing/rejectPairing`

`luna://com.webos.service.secondscreen.gateway/pairing/rejectPairing`

Handles the reject pairing (pairing)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/rejectPairing '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_requestpairing"></a>
## `pairing/requestPairing`

`luna://com.webos.service.secondscreen.gateway/pairing/requestPairing`

Requests the pairing (pairing)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/requestPairing '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_setpin"></a>
## `pairing/setPin`

`luna://com.webos.service.secondscreen.gateway/pairing/setPin`

Sets the pin (pairing)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/setPin '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmobileaccess"></a>
## `setMobileAccess`

`luna://com.webos.service.secondscreen.gateway/setMobileAccess`

Sets the mobile access.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/setMobileAccess '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_gettime"></a>
## `test/getTime`

`luna://com.webos.service.secondscreen.gateway/test/getTime`

Returns the time (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/test/getTime '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_protected"></a>
## `test/protected`

`luna://com.webos.service.secondscreen.gateway/test/protected`

Handles the protected (test)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.secondscreen.gateway/test/secure","payload":{}}
```

> Called by ConnectSDK WebOSTVService.secureAccessTest; response {clearedForDuty:true}.

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java)

<a id="unpair"></a>
## `unpair`

`luna://com.webos.service.secondscreen.gateway/unpair`

Unpairs the secondscreen gateway.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/unpair '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all, secondscreen.uac.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unpairall"></a>
## `unpairAll`

`luna://com.webos.service.secondscreen.gateway/unpairAll`

Unpairs the all.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/unpairAll '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="weecustom_getresponse"></a>
## `weeCustom/getResponse`

`luna://com.webos.service.secondscreen.gateway/weeCustom/getResponse`

Returns the response (wee custom)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/weeCustom/getResponse '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="weecustom_requestaction"></a>
## `weeCustom/requestAction`

`luna://com.webos.service.secondscreen.gateway/weeCustom/requestAction`

Requests the action (wee custom)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/weeCustom/requestAction '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
