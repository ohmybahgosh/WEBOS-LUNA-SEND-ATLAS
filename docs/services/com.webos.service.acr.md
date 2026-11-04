# `com.webos.service.acr`

15 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`closedApplication`](#closedapplication) | public |  | misc | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`getACRAppStatus`](#getacrappstatus) | private |  | misc | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`getACRLaunchFlag`](#getacrlaunchflag) | private |  | apps | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`getACRstatus`](#getacrstatus) | private |  | misc | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`getContentProperty`](#getcontentproperty) | public |  | misc | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`getProductVersion`](#getproductversion) | private |  | misc | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`launchApplication`](#launchapplication) | private |  | apps | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`setACRsetting`](#setacrsetting) | private |  | misc | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`setCloseCaption`](#setclosecaption) | private |  | media | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`setDebug`](#setdebug) | private |  | misc | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`setForceAliveTime`](#setforcealivetime) | public |  | input | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`setSessionControl`](#setsessioncontrol) | public |  | misc | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`setVideoPig`](#setvideopig) | public |  | misc | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`startAcr`](#startacr) | private |  | misc | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |
| [`subscribeEvent`](#subscribeevent) | public |  | misc | Method on com.webos.service.acr (from on-device permission registry; parameters undocumented). |

<a id="closedapplication"></a>
## `closedApplication`

`luna://com.webos.service.acr/closedApplication`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/closedApplication '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getacrappstatus"></a>
## `getACRAppStatus`

`luna://com.webos.service.acr/getACRAppStatus`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getACRAppStatus '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getacrlaunchflag"></a>
## `getACRLaunchFlag`

`luna://com.webos.service.acr/getACRLaunchFlag`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getACRLaunchFlag '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getacrstatus"></a>
## `getACRstatus`

`luna://com.webos.service.acr/getACRstatus`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getACRstatus '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcontentproperty"></a>
## `getContentProperty`

`luna://com.webos.service.acr/getContentProperty`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getContentProperty '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getproductversion"></a>
## `getProductVersion`

`luna://com.webos.service.acr/getProductVersion`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getProductVersion '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="launchapplication"></a>
## `launchApplication`

`luna://com.webos.service.acr/launchApplication`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/launchApplication '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setacrsetting"></a>
## `setACRsetting`

`luna://com.webos.service.acr/setACRsetting`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setACRsetting '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setclosecaption"></a>
## `setCloseCaption`

`luna://com.webos.service.acr/setCloseCaption`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setCloseCaption '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdebug"></a>
## `setDebug`

`luna://com.webos.service.acr/setDebug`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setDebug '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setforcealivetime"></a>
## `setForceAliveTime`

`luna://com.webos.service.acr/setForceAliveTime`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setForceAliveTime '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsessioncontrol"></a>
## `setSessionControl`

`luna://com.webos.service.acr/setSessionControl`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setSessionControl '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setvideopig"></a>
## `setVideoPig`

`luna://com.webos.service.acr/setVideoPig`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setVideoPig '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startacr"></a>
## `startAcr`

`luna://com.webos.service.acr/startAcr`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/startAcr '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscribeevent"></a>
## `subscribeEvent`

`luna://com.webos.service.acr/subscribeEvent`

Method on com.webos.service.acr (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.acr/subscribeEvent '{}'
```

> ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
