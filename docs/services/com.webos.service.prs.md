# `com.webos.service.prs`

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`activityStart`](#activitystart) | private |  | activity | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`debugSqlQuery`](#debugsqlquery) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`deleteRecommendChannelList`](#deleterecommendchannellist) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). ⚠️ |
| [`getExample`](#getexample) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`getRecommendChannelList`](#getrecommendchannellist) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`listRecommendations`](#listrecommendations) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`notifyPinup`](#notifypinup) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`notifyPlayback`](#notifyplayback) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`notifyRecommendInfoChanged`](#notifyrecommendinfochanged) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`ping`](#ping) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`reportScheduledRecord`](#reportscheduledrecord) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`reportScheduledWatch`](#reportscheduledwatch) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`reportSelectedProgramInfo`](#reportselectedprograminfo) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`setConfig`](#setconfig) | private |  | settings | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`setDebug`](#setdebug) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`testNotifyRecommendInfoChanged`](#testnotifyrecommendinfochanged) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`testNotifyRecommendInfoGetHistory`](#testnotifyrecommendinfogethistory) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |
| [`testNotifyRecommendInfoSetHistory`](#testnotifyrecommendinfosethistory) | private |  | tv-broadcast | Method on com.webos.service.prs (from on-device permission registry; parameters undocumented). |

<a id="activitystart"></a>
## `activityStart`

`luna://com.webos.service.prs/activityStart`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/activityStart '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debugsqlquery"></a>
## `debugSqlQuery`

`luna://com.webos.service.prs/debugSqlQuery`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/debugSqlQuery '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deleterecommendchannellist"></a>
## `deleteRecommendChannelList` ⚠️ DANGEROUS

`luna://com.webos.service.prs/deleteRecommendChannelList`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/deleteRecommendChannelList '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getexample"></a>
## `getExample`

`luna://com.webos.service.prs/getExample`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/getExample '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrecommendchannellist"></a>
## `getRecommendChannelList`

`luna://com.webos.service.prs/getRecommendChannelList`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/getRecommendChannelList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listrecommendations"></a>
## `listRecommendations`

`luna://com.webos.service.prs/listRecommendations`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/listRecommendations '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifypinup"></a>
## `notifyPinup`

`luna://com.webos.service.prs/notifyPinup`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/notifyPinup '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyplayback"></a>
## `notifyPlayback`

`luna://com.webos.service.prs/notifyPlayback`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/notifyPlayback '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyrecommendinfochanged"></a>
## `notifyRecommendInfoChanged`

`luna://com.webos.service.prs/notifyRecommendInfoChanged`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/notifyRecommendInfoChanged '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ping"></a>
## `ping`

`luna://com.webos.service.prs/ping`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/ping '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="reportscheduledrecord"></a>
## `reportScheduledRecord`

`luna://com.webos.service.prs/reportScheduledRecord`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/reportScheduledRecord '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="reportscheduledwatch"></a>
## `reportScheduledWatch`

`luna://com.webos.service.prs/reportScheduledWatch`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/reportScheduledWatch '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="reportselectedprograminfo"></a>
## `reportSelectedProgramInfo`

`luna://com.webos.service.prs/reportSelectedProgramInfo`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/reportSelectedProgramInfo '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setconfig"></a>
## `setConfig`

`luna://com.webos.service.prs/setConfig`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/setConfig '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdebug"></a>
## `setDebug`

`luna://com.webos.service.prs/setDebug`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/setDebug '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="testnotifyrecommendinfochanged"></a>
## `testNotifyRecommendInfoChanged`

`luna://com.webos.service.prs/testNotifyRecommendInfoChanged`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/testNotifyRecommendInfoChanged '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="testnotifyrecommendinfogethistory"></a>
## `testNotifyRecommendInfoGetHistory`

`luna://com.webos.service.prs/testNotifyRecommendInfoGetHistory`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/testNotifyRecommendInfoGetHistory '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="testnotifyrecommendinfosethistory"></a>
## `testNotifyRecommendInfoSetHistory`

`luna://com.webos.service.prs/testNotifyRecommendInfoSetHistory`

Method on com.webos.service.prs (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.prs/testNotifyRecommendInfoSetHistory '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
