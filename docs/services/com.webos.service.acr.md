# `com.webos.service.acr`

Automatic Content Recognition (ACR) service: starts/stops ACR, reports its status and recognized content properties, and manages video capture and related settings. _(inferred from the service's methods)_

17 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`closedApplication`](#closedapplication) | private |  | apps | documented | Notifies ACR that an app closed. Name only. |
| [`getACRAppStatus`](#getacrappstatus) | private |  | system-info | documented | Reports the ACR app status. |
| [`getACRLaunchFlag`](#getacrlaunchflag) | private |  | system-info | documented | Reports the ACR launch flag. |
| [`getACRSolutionStatus`](#getacrsolutionstatus) | private |  | system-info | documented | Read-only: reports whether the ACR fingerprinting solution is active (Glasshouse saw 'false' with consents off). |
| [`getACRstatus`](#getacrstatus) | private |  | system-info | documented | Read-only: reports ACR on/off status. Starts acr2 if dynamic. |
| [`getContentProperty`](#getcontentproperty) | private |  | system-info | documented | Returns recognised-content properties. |
| [`getProductVersion`](#getproductversion) | private |  | system-info | documented | Returns the ACR product/solution version. |
| [`getVideoCaptureStatus`](#getvideocapturestatus) | private |  | system-info | documented | Reports the ACR video-capture state (Glasshouse: 'stopped', captureSpeed 0 with consents off). |
| [`launchApplication`](#launchapplication) | private |  | apps | documented | Launches an app from an ACR trigger. Name only. |
| [`setACRsetting`](#setacrsetting) | private |  | settings | documented | Changes an ACR setting. |
| [`setCloseCaption`](#setclosecaption) | private |  | settings | documented | ACR closed-caption control. Name only. |
| [`setDebug`](#setdebug) | private |  | devmode | documented | ACR debug control. |
| [`setForceAliveTime`](#setforcealivetime) | private |  | settings | documented | Forces how long acr2 stays alive. |
| [`setSessionControl`](#setsessioncontrol) | private |  | settings | documented | Controls an ACR session. |
| [`setVideoPig`](#setvideopig) | private |  | settings | documented | ACR PIG (picture-in-graphic) control. Name only. |
| [`startAcr`](#startacr) | private |  | system-info | documented | Starts the ACR service. An activity-manager rule also starts it at boot when consents are on. |
| [`subscribeEvent`](#subscribeevent) | private | yes | system-info | documented | Subscribes to ACR events. |

<a id="closedapplication"></a>
## `closedApplication`

`luna://com.webos.service.acr/closedApplication`

Notifies ACR that an app closed. Name only.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/closedApplication '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getacrappstatus"></a>
## `getACRAppStatus`

`luna://com.webos.service.acr/getACRAppStatus`

Reports the ACR app status.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getACRAppStatus '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getacrlaunchflag"></a>
## `getACRLaunchFlag`

`luna://com.webos.service.acr/getACRLaunchFlag`

Reports the ACR launch flag.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getACRLaunchFlag '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getacrsolutionstatus"></a>
## `getACRSolutionStatus`

`luna://com.webos.service.acr/getACRSolutionStatus`

Read-only: reports whether the ACR fingerprinting solution is active (Glasshouse saw 'false' with consents off).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getACRSolutionStatus '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse)

<a id="getacrstatus"></a>
## `getACRstatus`

`luna://com.webos.service.acr/getACRstatus`

Read-only: reports ACR on/off status. Starts acr2 if dynamic.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getACRstatus '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getcontentproperty"></a>
## `getContentProperty`

`luna://com.webos.service.acr/getContentProperty`

Returns recognised-content properties.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getContentProperty '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getproductversion"></a>
## `getProductVersion`

`luna://com.webos.service.acr/getProductVersion`

Returns the ACR product/solution version.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getProductVersion '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getvideocapturestatus"></a>
## `getVideoCaptureStatus`

`luna://com.webos.service.acr/getVideoCaptureStatus`

Reports the ACR video-capture state (Glasshouse: 'stopped', captureSpeed 0 with consents off).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/getVideoCaptureStatus '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it.

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse)

<a id="launchapplication"></a>
## `launchApplication`

`luna://com.webos.service.acr/launchApplication`

Launches an app from an ACR trigger. Name only.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/launchApplication '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setacrsetting"></a>
## `setACRsetting`

`luna://com.webos.service.acr/setACRsetting`

Changes an ACR setting.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setACRsetting '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setclosecaption"></a>
## `setCloseCaption`

`luna://com.webos.service.acr/setCloseCaption`

ACR closed-caption control. Name only.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setCloseCaption '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdebug"></a>
## `setDebug`

`luna://com.webos.service.acr/setDebug`

ACR debug control.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setDebug '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setforcealivetime"></a>
## `setForceAliveTime`

`luna://com.webos.service.acr/setForceAliveTime`

Forces how long acr2 stays alive.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setForceAliveTime '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setsessioncontrol"></a>
## `setSessionControl`

`luna://com.webos.service.acr/setSessionControl`

Controls an ACR session.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setSessionControl '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setvideopig"></a>
## `setVideoPig`

`luna://com.webos.service.acr/setVideoPig`

ACR PIG (picture-in-graphic) control. Name only.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/setVideoPig '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startacr"></a>
## `startAcr`

`luna://com.webos.service.acr/startAcr`

Starts the ACR service. An activity-manager rule also starts it at boot when consents are on.

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/startAcr '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: activities.callbacks, configurator.callbacks, private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="subscribeevent"></a>
## `subscribeEvent`

`luna://com.webos.service.acr/subscribeEvent`

Subscribes to ACR events.

- **Access:** private  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS TV (seen on W22O 7.0; behaviour from Glasshouse research across webOS 4-11); listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.acr/subscribeEvent '{}'
```

> ACR (Automatic Content Recognition, LG 'Live Plus') fingerprints what is on screen for LG's analytics/ads. Glasshouse's privacy research: the service is Type=dynamic, so any call (even a status query) starts it; a running acr2 is not proof it is collecting. With Live Plus and consents off it loaded no fingerprinting (Alphonso) library, opened no network sockets, and wrote no /tmp/acr.xml; it reads consent/country/device then checks sdx device-auth and stops if not provisioned. Documented so owners can audit it. \|\| ACG groups: private, public, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://rorygallagher2024.github.io/glasshouse/development/TV-RESEARCH/), [2](https://github.com/rorygallagher2024/glasshouse), [3](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
