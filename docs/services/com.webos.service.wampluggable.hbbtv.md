# `com.webos.service.wampluggable.hbbtv`

26 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`debug`](#debug) | private |  | tv-broadcast | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`exitHbbtvApp`](#exithbbtvapp) | private |  | tv-broadcast | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`getAmStatus`](#getamstatus) | private |  | tv-broadcast | Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`getCurrBroadcastPipelineId`](#getcurrbroadcastpipelineid) | private |  | security | Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`getKeySetStatus`](#getkeysetstatus) | private |  | tv-broadcast | Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`getResourceClientStatus`](#getresourceclientstatus) | private |  | input | Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`getResourceStatus`](#getresourcestatus) | private |  | tv-broadcast | Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`getUserAgent`](#getuseragent) | private |  | tv-broadcast | Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`getUserAgentString`](#getuseragentstring) | private |  | bluetooth | Method on com.webos.service.wampluggable.hbbtv (from on-device permission registry; parameters undocumented). |
| [`httpRequest`](#httprequest) | private |  | tv-broadcast | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`onAitxUserConfirm`](#onaitxuserconfirm) | private |  | tv-broadcast | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`onDeviceIdUserNotificationChanged`](#ondeviceidusernotificationchanged) | private |  | notifications | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`putKey`](#putkey) | private |  | tv-broadcast | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`registerResourceClient`](#registerresourceclient) | private |  | input | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`releaseResource`](#releaseresource) | private |  | tv-broadcast | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`reloadPage`](#reloadpage) | private |  | bluetooth | Method on com.webos.service.wampluggable.hbbtv (from on-device permission registry; parameters undocumented). |
| [`reserveResource`](#reserveresource) | private |  | tv-broadcast | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`resetDeviceId`](#resetdeviceid) | private |  | tv-broadcast | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). ⚠️ |
| [`resetDialConnection`](#resetdialconnection) | private |  | tv-broadcast | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). ⚠️ |
| [`setAmLaunchMode`](#setamlaunchmode) | private |  | apps | Setter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`setHbbtvAppVisibility`](#sethbbtvappvisibility) | private |  | tv-broadcast | Setter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`setQueryOrganisations`](#setqueryorganisations) | private |  | tv-broadcast | Setter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`setResourcePriority`](#setresourcepriority) | private |  | tv-broadcast | Setter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`subscribeOipfAppLoadChange`](#subscribeoipfapploadchange) | private |  | tv-broadcast | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`test`](#test) | private |  | tv-broadcast | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |
| [`unregisterResourceClient`](#unregisterresourceclient) | private |  | input | Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented). |

<a id="debug"></a>
## `debug`

`luna://com.webos.service.wampluggable.hbbtv/debug`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/debug '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="exithbbtvapp"></a>
## `exitHbbtvApp`

`luna://com.webos.service.wampluggable.hbbtv/exitHbbtvApp`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/exitHbbtvApp '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getamstatus"></a>
## `getAmStatus`

`luna://com.webos.service.wampluggable.hbbtv/getAmStatus`

Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getAmStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrbroadcastpipelineid"></a>
## `getCurrBroadcastPipelineId`

`luna://com.webos.service.wampluggable.hbbtv/getCurrBroadcastPipelineId`

Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getCurrBroadcastPipelineId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getkeysetstatus"></a>
## `getKeySetStatus`

`luna://com.webos.service.wampluggable.hbbtv/getKeySetStatus`

Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getKeySetStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getresourceclientstatus"></a>
## `getResourceClientStatus`

`luna://com.webos.service.wampluggable.hbbtv/getResourceClientStatus`

Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getResourceClientStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getresourcestatus"></a>
## `getResourceStatus`

`luna://com.webos.service.wampluggable.hbbtv/getResourceStatus`

Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getResourceStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getuseragent"></a>
## `getUserAgent`

`luna://com.webos.service.wampluggable.hbbtv/getUserAgent`

Getter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getUserAgent '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getuseragentstring"></a>
## `getUserAgentString`

`luna://com.webos.service.wampluggable.hbbtv/getUserAgentString`

Method on com.webos.service.wampluggable.hbbtv (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/getUserAgentString '{}'
```

> ACG groups: applications.internal, hbbtv.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="httprequest"></a>
## `httpRequest`

`luna://com.webos.service.wampluggable.hbbtv/httpRequest`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/httpRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="onaitxuserconfirm"></a>
## `onAitxUserConfirm`

`luna://com.webos.service.wampluggable.hbbtv/onAitxUserConfirm`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/onAitxUserConfirm '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ondeviceidusernotificationchanged"></a>
## `onDeviceIdUserNotificationChanged`

`luna://com.webos.service.wampluggable.hbbtv/onDeviceIdUserNotificationChanged`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/onDeviceIdUserNotificationChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="putkey"></a>
## `putKey`

`luna://com.webos.service.wampluggable.hbbtv/putKey`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/putKey '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registerresourceclient"></a>
## `registerResourceClient`

`luna://com.webos.service.wampluggable.hbbtv/registerResourceClient`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/registerResourceClient '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releaseresource"></a>
## `releaseResource`

`luna://com.webos.service.wampluggable.hbbtv/releaseResource`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/releaseResource '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reloadpage"></a>
## `reloadPage`

`luna://com.webos.service.wampluggable.hbbtv/reloadPage`

Method on com.webos.service.wampluggable.hbbtv (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/reloadPage '{}'
```

> ACG groups: applications.internal, hbbtv.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="reserveresource"></a>
## `reserveResource`

`luna://com.webos.service.wampluggable.hbbtv/reserveResource`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/reserveResource '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetdeviceid"></a>
## `resetDeviceId` ⚠️ DANGEROUS

`luna://com.webos.service.wampluggable.hbbtv/resetDeviceId`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/resetDeviceId '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="resetdialconnection"></a>
## `resetDialConnection` ⚠️ DANGEROUS

`luna://com.webos.service.wampluggable.hbbtv/resetDialConnection`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/resetDialConnection '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setamlaunchmode"></a>
## `setAmLaunchMode`

`luna://com.webos.service.wampluggable.hbbtv/setAmLaunchMode`

Setter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/setAmLaunchMode '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sethbbtvappvisibility"></a>
## `setHbbtvAppVisibility`

`luna://com.webos.service.wampluggable.hbbtv/setHbbtvAppVisibility`

Setter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/setHbbtvAppVisibility '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setqueryorganisations"></a>
## `setQueryOrganisations`

`luna://com.webos.service.wampluggable.hbbtv/setQueryOrganisations`

Setter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/setQueryOrganisations '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setresourcepriority"></a>
## `setResourcePriority`

`luna://com.webos.service.wampluggable.hbbtv/setResourcePriority`

Setter on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/setResourcePriority '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribeoipfapploadchange"></a>
## `subscribeOipfAppLoadChange`

`luna://com.webos.service.wampluggable.hbbtv/subscribeOipfAppLoadChange`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/subscribeOipfAppLoadChange '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.wampluggable.hbbtv/test`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/test '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unregisterresourceclient"></a>
## `unregisterResourceClient`

`luna://com.webos.service.wampluggable.hbbtv/unregisterResourceClient`

Method on com.webos.service.wampluggable.hbbtv (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.hbbtv/unregisterResourceClient '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
