# `com.webos.service.secondscreen.gateway`

Second-screen gateway: pairs and lists companion devices, sets up app-to-app channels and host messaging, and reports power state and service list. _(inferred from the service's methods)_

28 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`app2app/connectToApp`](#app2app_connecttoapp) | private |  | network | documented | Connects the to app (app 2 app) |
| [`app2app/createAppChannel`](#app2app_createappchannel) | public |  | network | documented | Creates the app channel (app 2 app) |
| [`app2app/host/registerAppChannel`](#app2app_host_registerappchannel) | public |  | network | documented | Registers the app channel (app 2 app host) |
| [`app2app/host/sendJoinResponse`](#app2app_host_sendjoinresponse) | public |  | network | documented | Sends the join response (app 2 app host) |
| [`app2app/host/sendMessage`](#app2app_host_sendmessage) | public |  | network | documented | Sends the message (app 2 app host) |
| [`getHostMessage`](#gethostmessage) | private |  | network | documented | Returns the host message. |
| [`getPairedDeviceList`](#getpaireddevicelist) | private |  | network | documented | Returns the paired device list. |
| [`getPowerState`](#getpowerstate) | private |  | power | documented | Returns the power state. |
| [`getServiceList`](#getservicelist) | private |  | network | documented | Returns the service list. |
| [`heartbeat/notifyNamedSocket`](#heartbeat_notifynamedsocket) | private |  | network | documented | Notifies of the named socket (heartbeat) |
| [`heartbeat/ping`](#heartbeat_ping) | private |  | network | documented | Pings the secondscreen gateway (heartbeat) |
| [`internal/heapdump`](#internal_heapdump) | private |  | network | inferred | Handles the heapdump (internal) |
| [`internal/memoryUsage`](#internal_memoryusage) | private |  | network | inferred | Handles the memory usage (internal) |
| [`internal/setConfig`](#internal_setconfig) | private |  | settings | inferred | Sets the config (internal) |
| [`pairing/acceptPairing`](#pairing_acceptpairing) | private |  | network | documented | Handles the accept pairing (pairing) |
| [`pairing/getPairingStatus`](#pairing_getpairingstatus) | private |  | network | documented | Returns the pairing status (pairing) |
| [`pairing/register`](#pairing_register) | private |  | network | documented | Registers the secondscreen gateway (pairing) |
| [`pairing/rejectPairing`](#pairing_rejectpairing) | private |  | network | documented | Handles the reject pairing (pairing) |
| [`pairing/requestPairing`](#pairing_requestpairing) | private |  | network | documented | Requests the pairing (pairing) |
| [`pairing/setPin`](#pairing_setpin) | private |  | network | documented | Sets the pin (pairing) |
| [`setMobileAccess`](#setmobileaccess) | private |  | network | documented | Sets the mobile access. |
| [`test/getTime`](#test_gettime) | private |  | input | documented | Returns the time (test) |
| [`test/protected`](#test_protected) | private |  | network | documented | Handles the protected (test) |
| [`test/secure`](#test_secure) | ssap |  | connection | documented | SSAP self-test: reports whether connection is secure/cleared ({clearedForDuty:true}) |
| [`unpair`](#unpair) | private |  | network | documented | Unpairs the secondscreen gateway. |
| [`unpairAll`](#unpairall) | private |  | network | documented | Unpairs the all. |
| [`weeCustom/getResponse`](#weecustom_getresponse) | private |  | network | documented | Returns the response (wee custom) |
| [`weeCustom/requestAction`](#weecustom_requestaction) | private |  | network | documented | Requests the action (wee custom) |

<a id="app2app_connecttoapp"></a>
## `app2app/connectToApp`

`luna://com.webos.service.secondscreen.gateway/app2app/connectToApp`

Connects the to app (app 2 app)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (optional) Target app ID.  Required unless `webAppId` is given. |
| `webAppId` | String (optional) Target web app ID.  Required unless `appId` is given. |
| `params` | Object (optional) Parameters passed to the target app. |
| `bringAppToForeground` | Boolean (optional) Bring the target app to the foreground. |
| `subscribe` | Boolean (required) Must be true; subscription-only. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/connectToApp '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all.  Requires either `appId` or `webAppId`.  Opens an app-to-app channel to the target app.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_createappchannel"></a>
## `app2app/createAppChannel`

`luna://com.webos.service.secondscreen.gateway/app2app/createAppChannel`

Creates the app channel (app 2 app)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/createAppChannel '{}'
```

> ACG groups: public, secondscreen.all, private, system.remote, secondscreen.app2app, all.  Takes no request parameters; the sender app ID is used (permission denied if the sender cannot be identified).  Returns a `socketUrl` (ws://) for registering an app with that name.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_host_registerappchannel"></a>
## `app2app/host/registerAppChannel`

`luna://com.webos.service.secondscreen.gateway/app2app/host/registerAppChannel`

Registers the app channel (app 2 app host)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `appId` | String (optional) App ID to host the channel as; only first-party services (com.webos, com.lge, com.palm) may specify one, otherwise the sender's own app/service ID is used. |
| `subscribe` | Boolean (required) Must be true; subscription-only. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/host/registerAppChannel '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all, public.  Registers an app-channel host for the sender.  Fails if a subscription is already registered for that app.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_host_sendjoinresponse"></a>
## `app2app/host/sendJoinResponse`

`luna://com.webos.service.secondscreen.gateway/app2app/host/sendJoinResponse`

Sends the join response (app 2 app host)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `requestId` | String (required) Join request ID being answered. |
| `allowJoin` | Boolean (required) Whether to allow the guest to join. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/host/sendJoinResponse '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all, public.  Requires a channel previously registered with registerAppChannel.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="app2app_host_sendmessage"></a>
## `app2app/host/sendMessage`

`luna://com.webos.service.secondscreen.gateway/app2app/host/sendMessage`

Sends the message (app 2 app host)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `payload` | Object (required) Message payload to send. |
| `to` | String (optional) Target guest to send to. |
| `ns` | String (optional) Namespace. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/app2app/host/sendMessage '{}'
```

> ACG groups: secondscreen.all, private, system.remote, secondscreen.app2app, all, public.  Requires a channel previously registered with registerAppChannel.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethostmessage"></a>
## `getHostMessage`

`luna://com.webos.service.secondscreen.gateway/getHostMessage`

Returns the host message.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientKey` | String (required) Client key (also accepted as `_clientKey`). |
| `subscribe` | Boolean (required) Must be true; subscription-only. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getHostMessage '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all, secondscreen.uac.  Subscription-only.  Streams host messages for the client.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpaireddevicelist"></a>
## `getPairedDeviceList`

`luna://com.webos.service.secondscreen.gateway/getPairedDeviceList`

Returns the paired device list.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `all` | Boolean (optional) Include all profiles (including unsigned) rather than only signed ones. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getPairedDeviceList '{}'
```

> ACG groups: secondscreen.all, private, configurator.callbacks, system.remote, all, secondscreen.uac, activities.callbacks.  Subscribable.  Returns the paired devices in `devices`.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpowerstate"></a>
## `getPowerState`

`luna://com.webos.service.secondscreen.gateway/getPowerState`

Returns the power state.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientKey` | String (required) Client key (also accepted as `_clientKey`). |
| `subscribe` | Boolean (required) Must be true; subscription-only. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getPowerState '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Subscription-only.  Streams the TV power state to the client.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getservicelist"></a>
## `getServiceList`

`luna://com.webos.service.secondscreen.gateway/getServiceList`

Returns the service list.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `name` |  |
| `services` |  |
| `version` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/getServiceList '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Takes no parameters.  Returns the virtual interface (service) list in `services`.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="heartbeat_notifynamedsocket"></a>
## `heartbeat/notifyNamedSocket`

`luna://com.webos.service.secondscreen.gateway/heartbeat/notifyNamedSocket`

Notifies of the named socket (heartbeat)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/heartbeat/notifyNamedSocket '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Forwards the request payload to the heartbeat manager's notifyNamedSocket event.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="heartbeat_ping"></a>
## `heartbeat/ping`

`luna://com.webos.service.secondscreen.gateway/heartbeat/ping`

Pings the secondscreen gateway (heartbeat)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/heartbeat/ping '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Takes no parameters.  Returns returnValue:true.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

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

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pairingRequestId` | String (required) ID of the pairing request to accept. |
| `closeAlert` | Boolean (optional) Close the pairing alert. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/acceptPairing '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_getpairingstatus"></a>
## `pairing/getPairingStatus`

`luna://com.webos.service.secondscreen.gateway/pairing/getPairingStatus`

Returns the pairing status (pairing)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (required) Must be true; this method is subscription-only. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/getPairingStatus '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Subscription-only.  Streams pairing, accept and reject events (pairingRequestId, pin, deviceName, status).  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_register"></a>
## `pairing/register`

`luna://com.webos.service.secondscreen.gateway/pairing/register`

Registers the secondscreen gateway (pairing)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `payload` | Object (required) Registration data: client-key, companion-client-key, pairingType and manifest (deviceName, permissions, trustKeys, r2rMode, forcePairing). |
| `subscribe` | Boolean (required) Must be true; register is subscription-only. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/register '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Registers a companion client from the luna bus; reuses an existing client profile when a valid client-key is supplied, otherwise prompts to pair.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_rejectpairing"></a>
## `pairing/rejectPairing`

`luna://com.webos.service.secondscreen.gateway/pairing/rejectPairing`

Handles the reject pairing (pairing)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pairingRequestId` | String (required) ID of the pairing request to reject. |
| `closeAlert` | Boolean (optional) Close the pairing alert. |
| `errorCode` | Integer (optional) Error code to report with the rejection. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/rejectPairing '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_requestpairing"></a>
## `pairing/requestPairing`

`luna://com.webos.service.secondscreen.gateway/pairing/requestPairing`

Requests the pairing (pairing)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pairingType` | String (required) Pairing prompt type: PROMPT, PIN, or COMBINED. |
| `message` | String (required) Dialog message. |
| `title` | String (optional) Dialog title. |
| `subscribe` | Boolean (required) Must be true; this method is subscription-only. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/requestPairing '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Prompts the user to confirm pairing and streams the chosen pairingType.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="pairing_setpin"></a>
## `pairing/setPin`

`luna://com.webos.service.secondscreen.gateway/pairing/setPin`

Sets the pin (pairing)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pin` | String (optional) PIN code to validate against the open pairing prompt. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/pairing/setPin '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Matches `pin` against the pending PIN/COMBINED pairing request for the caller; returns access denied if there is no matching prompt.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setmobileaccess"></a>
## `setMobileAccess`

`luna://com.webos.service.secondscreen.gateway/setMobileAccess`

Sets the mobile access.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `enable` | Boolean (required) Enable (true) or block (false) connect requests and messages from SSAP for EWS events. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/setMobileAccess '{}'
```

> ACG groups: private, all.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_gettime"></a>
## `test/getTime`

`luna://com.webos.service.secondscreen.gateway/test/getTime`

Returns the time (test)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/test/getTime '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Takes no parameters.  Subscribable.  Returns the current time; a subscription streams it once per second.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test_protected"></a>
## `test/protected`

`luna://com.webos.service.secondscreen.gateway/test/protected`

Handles the protected (test)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/test/protected '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Test method; returns clearedForDuty.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

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

> Called by ConnectSDK WebOSTVService.secureAccessTest; response {clearedForDuty:true}.  Test method; returns clearedForDuty.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/snabb/webostv/blob/master/mmisc.go), [2](https://github.com/ConnectSDK/Connect-SDK-Android-Core/blob/master/src/com/connectsdk/service/WebOSTVService.java)

<a id="unpair"></a>
## `unpair`

`luna://com.webos.service.secondscreen.gateway/unpair`

Unpairs the secondscreen gateway.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `clientKey` | String (required) Client key of the paired device to remove. |

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/unpair '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all, secondscreen.uac.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unpairall"></a>
## `unpairAll`

`luna://com.webos.service.secondscreen.gateway/unpairAll`

Unpairs the all.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/unpairAll '{}'
```

> ACG groups: secondscreen.all, private, system.remote, all.  Takes no parameters.  Unpairs all paired devices.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="weecustom_getresponse"></a>
## `weeCustom/getResponse`

`luna://com.webos.service.secondscreen.gateway/weeCustom/getResponse`

Returns the response (wee custom)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/weeCustom/getResponse '{}'
```

> ACG groups: private, all.  Sends the request payload to all connected companion clients.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="weecustom_requestaction"></a>
## `weeCustom/requestAction`

`luna://com.webos.service.secondscreen.gateway/weeCustom/requestAction`

Requests the action (wee custom)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.secondscreen.gateway/weeCustom/requestAction '{}'
```

> ACG groups: private, all.  Forwards the request payload to com.webos.service.weecustom/requestAction.  Parameters recovered from the on-device second-screen gateway service source (readable JavaScript, LG webOS 22, W22O).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
