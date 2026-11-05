# `com.webos.service.wampluggable.hbbtv`

HbbTV (Hybrid Broadcast Broadband TV) service: manages HbbTV app lifecycle, reserves and releases broadcast resources, makes HTTP requests, and handles key sets, user agent and device ID. _(inferred from the service's methods)_

26 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`debug`](#debug) | private |  | tv-broadcast | inferred | Handles the debug. |
| [`exitHbbtvApp`](#exithbbtvapp) | private |  | tv-broadcast | inferred | Exits the hbbtv app. |
| [`getAmStatus`](#getamstatus) | private |  | tv-broadcast | inferred | Returns the am status. |
| [`getCurrBroadcastPipelineId`](#getcurrbroadcastpipelineid) | private |  | security | inferred | Returns the curr broadcast pipeline ID. |
| [`getKeySetStatus`](#getkeysetstatus) | private |  | tv-broadcast | inferred | Returns the key set status. |
| [`getResourceClientStatus`](#getresourceclientstatus) | private |  | input | inferred | Returns the resource client status. |
| [`getResourceStatus`](#getresourcestatus) | private |  | tv-broadcast | inferred | Returns the resource status. |
| [`getUserAgent`](#getuseragent) | private |  | tv-broadcast | inferred | Returns the user agent. |
| [`getUserAgentString`](#getuseragentstring) | private |  | bluetooth | inferred | Returns the user agent string. |
| [`httpRequest`](#httprequest) | private |  | tv-broadcast | inferred | Handles the http request. |
| [`onAitxUserConfirm`](#onaitxuserconfirm) | private |  | tv-broadcast | inferred | Event handler: fires on the aitx user confirm. |
| [`onDeviceIdUserNotificationChanged`](#ondeviceidusernotificationchanged) | private |  | notifications | inferred | Event handler: fires on the device ID user notification changed. |
| [`putKey`](#putkey) | private |  | tv-broadcast | inferred | Writes the key. |
| [`registerResourceClient`](#registerresourceclient) | private |  | input | inferred | Registers the resource client. |
| [`releaseResource`](#releaseresource) | private |  | tv-broadcast | inferred | Releases the resource. |
| [`reloadPage`](#reloadpage) | private |  | bluetooth | inferred | Reloads the page. |
| [`reserveResource`](#reserveresource) | private |  | tv-broadcast | inferred | Handles the reserve resource. |
| [`resetDeviceId`](#resetdeviceid) | private |  | tv-broadcast | inferred | Resets the device ID. ⚠️ |
| [`resetDialConnection`](#resetdialconnection) | private |  | tv-broadcast | inferred | Resets the dial connection. ⚠️ |
| [`setAmLaunchMode`](#setamlaunchmode) | private |  | apps | inferred | Sets the am launch mode. |
| [`setHbbtvAppVisibility`](#sethbbtvappvisibility) | private |  | tv-broadcast | inferred | Sets the hbbtv app visibility. |
| [`setQueryOrganisations`](#setqueryorganisations) | private |  | tv-broadcast | inferred | Sets the query organisations. |
| [`setResourcePriority`](#setresourcepriority) | private |  | tv-broadcast | inferred | Sets the resource priority. |
| [`subscribeOipfAppLoadChange`](#subscribeoipfapploadchange) | private |  | tv-broadcast | inferred | Subscribes to the oipf app load change. |
| [`test`](#test) | private |  | tv-broadcast | inferred | Tests the wampluggable hbbtv. |
| [`unregisterResourceClient`](#unregisterresourceclient) | private |  | input | inferred | Unregisters the resource client. |

<a id="debug"></a>
## `debug`

`luna://com.webos.service.wampluggable.hbbtv/debug`

Handles the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/debug '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="exithbbtvapp"></a>
## `exitHbbtvApp`

`luna://com.webos.service.wampluggable.hbbtv/exitHbbtvApp`

Exits the hbbtv app.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/exitHbbtvApp '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getamstatus"></a>
## `getAmStatus`

`luna://com.webos.service.wampluggable.hbbtv/getAmStatus`

Returns the am status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `id` |  |
| `status` |  |
| `statusCode` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getAmStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrbroadcastpipelineid"></a>
## `getCurrBroadcastPipelineId`

`luna://com.webos.service.wampluggable.hbbtv/getCurrBroadcastPipelineId`

Returns the curr broadcast pipeline ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getCurrBroadcastPipelineId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getkeysetstatus"></a>
## `getKeySetStatus`

`luna://com.webos.service.wampluggable.hbbtv/getKeySetStatus`

Returns the key set status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getKeySetStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getresourceclientstatus"></a>
## `getResourceClientStatus`

`luna://com.webos.service.wampluggable.hbbtv/getResourceClientStatus`

Returns the resource client status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getResourceClientStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getresourcestatus"></a>
## `getResourceStatus`

`luna://com.webos.service.wampluggable.hbbtv/getResourceStatus`

Returns the resource status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getResourceStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getuseragent"></a>
## `getUserAgent`

`luna://com.webos.service.wampluggable.hbbtv/getUserAgent`

Returns the user agent.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `commonUserAgent` |  |
| `userAgent` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getUserAgent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getuseragentstring"></a>
## `getUserAgentString`

`luna://com.webos.service.wampluggable.hbbtv/getUserAgentString`

Returns the user agent string.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getUserAgentString '{}'
```

> ACG groups: applications.internal, hbbtv.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="httprequest"></a>
## `httpRequest`

`luna://com.webos.service.wampluggable.hbbtv/httpRequest`

Handles the http request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/httpRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="onaitxuserconfirm"></a>
## `onAitxUserConfirm`

`luna://com.webos.service.wampluggable.hbbtv/onAitxUserConfirm`

Event handler: fires on the aitx user confirm.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/onAitxUserConfirm '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ondeviceidusernotificationchanged"></a>
## `onDeviceIdUserNotificationChanged`

`luna://com.webos.service.wampluggable.hbbtv/onDeviceIdUserNotificationChanged`

Event handler: fires on the device ID user notification changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/onDeviceIdUserNotificationChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="putkey"></a>
## `putKey`

`luna://com.webos.service.wampluggable.hbbtv/putKey`

Writes the key.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/putKey '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerresourceclient"></a>
## `registerResourceClient`

`luna://com.webos.service.wampluggable.hbbtv/registerResourceClient`

Registers the resource client.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/registerResourceClient '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releaseresource"></a>
## `releaseResource`

`luna://com.webos.service.wampluggable.hbbtv/releaseResource`

Releases the resource.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/releaseResource '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reloadpage"></a>
## `reloadPage`

`luna://com.webos.service.wampluggable.hbbtv/reloadPage`

Reloads the page.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/reloadPage '{}'
```

> ACG groups: applications.internal, hbbtv.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="reserveresource"></a>
## `reserveResource`

`luna://com.webos.service.wampluggable.hbbtv/reserveResource`

Handles the reserve resource.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/reserveResource '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetdeviceid"></a>
## `resetDeviceId` ⚠️ DANGEROUS

`luna://com.webos.service.wampluggable.hbbtv/resetDeviceId`

Resets the device ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/resetDeviceId '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetdialconnection"></a>
## `resetDialConnection` ⚠️ DANGEROUS

`luna://com.webos.service.wampluggable.hbbtv/resetDialConnection`

Resets the dial connection.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/resetDialConnection '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setamlaunchmode"></a>
## `setAmLaunchMode`

`luna://com.webos.service.wampluggable.hbbtv/setAmLaunchMode`

Sets the am launch mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/setAmLaunchMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sethbbtvappvisibility"></a>
## `setHbbtvAppVisibility`

`luna://com.webos.service.wampluggable.hbbtv/setHbbtvAppVisibility`

Sets the hbbtv app visibility.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/setHbbtvAppVisibility '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setqueryorganisations"></a>
## `setQueryOrganisations`

`luna://com.webos.service.wampluggable.hbbtv/setQueryOrganisations`

Sets the query organisations.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/setQueryOrganisations '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setresourcepriority"></a>
## `setResourcePriority`

`luna://com.webos.service.wampluggable.hbbtv/setResourcePriority`

Sets the resource priority.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/setResourcePriority '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribeoipfapploadchange"></a>
## `subscribeOipfAppLoadChange`

`luna://com.webos.service.wampluggable.hbbtv/subscribeOipfAppLoadChange`

Subscribes to the oipf app load change.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/subscribeOipfAppLoadChange '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.wampluggable.hbbtv/test`

Tests the wampluggable hbbtv.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/test '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unregisterresourceclient"></a>
## `unregisterResourceClient`

`luna://com.webos.service.wampluggable.hbbtv/unregisterResourceClient`

Unregisters the resource client.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/unregisterResourceClient '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
