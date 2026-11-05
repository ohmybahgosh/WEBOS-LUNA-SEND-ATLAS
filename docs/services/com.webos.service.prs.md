# `com.webos.service.prs`

Program recommendation service (PRS): manages recommended-channel lists and reports playback, scheduled recordings/watches and selected-program info for recommendations. _(inferred from the service's methods)_

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`activityStart`](#activitystart) | private |  | activity | inferred | Handles the activity start. |
| [`debugSqlQuery`](#debugsqlquery) | private |  | tv-broadcast | inferred | Handles the debug sql query. |
| [`deleteRecommendChannelList`](#deleterecommendchannellist) | private |  | tv-broadcast | inferred | Deletes the recommend channel list. ⚠️ |
| [`getExample`](#getexample) | private |  | tv-broadcast | inferred | Returns the example. |
| [`getRecommendChannelList`](#getrecommendchannellist) | private |  | tv-broadcast | inferred | Returns the recommend channel list. |
| [`listRecommendations`](#listrecommendations) | private |  | tv-broadcast | inferred | Lists the recommendations. |
| [`notifyPinup`](#notifypinup) | private |  | tv-broadcast | inferred | Notifies of the pinup. |
| [`notifyPlayback`](#notifyplayback) | private |  | tv-broadcast | inferred | Notifies of the playback. |
| [`notifyRecommendInfoChanged`](#notifyrecommendinfochanged) | private |  | tv-broadcast | inferred | Notifies of the recommend info changed. |
| [`ping`](#ping) | private |  | tv-broadcast | inferred | Pings the prs. |
| [`reportScheduledRecord`](#reportscheduledrecord) | private |  | tv-broadcast | inferred | Reports the scheduled record. |
| [`reportScheduledWatch`](#reportscheduledwatch) | private |  | tv-broadcast | inferred | Reports the scheduled watch. |
| [`reportSelectedProgramInfo`](#reportselectedprograminfo) | private |  | tv-broadcast | inferred | Reports the selected program info. |
| [`setConfig`](#setconfig) | private |  | settings | inferred | Sets the config. |
| [`setDebug`](#setdebug) | private |  | tv-broadcast | inferred | Sets the debug. |
| [`testNotifyRecommendInfoChanged`](#testnotifyrecommendinfochanged) | private |  | tv-broadcast | inferred | Tests the notify recommend info changed. |
| [`testNotifyRecommendInfoGetHistory`](#testnotifyrecommendinfogethistory) | private |  | tv-broadcast | inferred | Tests the notify recommend info get history. |
| [`testNotifyRecommendInfoSetHistory`](#testnotifyrecommendinfosethistory) | private |  | tv-broadcast | inferred | Tests the notify recommend info set history. |

<a id="activitystart"></a>
## `activityStart`

`luna://com.webos.service.prs/activityStart`

Handles the activity start.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/activityStart '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="debugsqlquery"></a>
## `debugSqlQuery`

`luna://com.webos.service.prs/debugSqlQuery`

Handles the debug sql query.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/debugSqlQuery '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="deleterecommendchannellist"></a>
## `deleteRecommendChannelList` ⚠️ DANGEROUS

`luna://com.webos.service.prs/deleteRecommendChannelList`

Deletes the recommend channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/deleteRecommendChannelList '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device). Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getexample"></a>
## `getExample`

`luna://com.webos.service.prs/getExample`

Returns the example.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/getExample '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getrecommendchannellist"></a>
## `getRecommendChannelList`

`luna://com.webos.service.prs/getRecommendChannelList`

Returns the recommend channel list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/getRecommendChannelList '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="listrecommendations"></a>
## `listRecommendations`

`luna://com.webos.service.prs/listRecommendations`

Lists the recommendations.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/listRecommendations '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifypinup"></a>
## `notifyPinup`

`luna://com.webos.service.prs/notifyPinup`

Notifies of the pinup.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/notifyPinup '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyplayback"></a>
## `notifyPlayback`

`luna://com.webos.service.prs/notifyPlayback`

Notifies of the playback.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/notifyPlayback '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="notifyrecommendinfochanged"></a>
## `notifyRecommendInfoChanged`

`luna://com.webos.service.prs/notifyRecommendInfoChanged`

Notifies of the recommend info changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/notifyRecommendInfoChanged '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="ping"></a>
## `ping`

`luna://com.webos.service.prs/ping`

Pings the prs.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/ping '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="reportscheduledrecord"></a>
## `reportScheduledRecord`

`luna://com.webos.service.prs/reportScheduledRecord`

Reports the scheduled record.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/reportScheduledRecord '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="reportscheduledwatch"></a>
## `reportScheduledWatch`

`luna://com.webos.service.prs/reportScheduledWatch`

Reports the scheduled watch.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/reportScheduledWatch '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="reportselectedprograminfo"></a>
## `reportSelectedProgramInfo`

`luna://com.webos.service.prs/reportSelectedProgramInfo`

Reports the selected program info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/reportSelectedProgramInfo '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setconfig"></a>
## `setConfig`

`luna://com.webos.service.prs/setConfig`

Sets the config.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/setConfig '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setdebug"></a>
## `setDebug`

`luna://com.webos.service.prs/setDebug`

Sets the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/setDebug '{}'
```

> ACG groups: private, tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="testnotifyrecommendinfochanged"></a>
## `testNotifyRecommendInfoChanged`

`luna://com.webos.service.prs/testNotifyRecommendInfoChanged`

Tests the notify recommend info changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/testNotifyRecommendInfoChanged '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="testnotifyrecommendinfogethistory"></a>
## `testNotifyRecommendInfoGetHistory`

`luna://com.webos.service.prs/testNotifyRecommendInfoGetHistory`

Tests the notify recommend info get history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/testNotifyRecommendInfoGetHistory '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="testnotifyrecommendinfosethistory"></a>
## `testNotifyRecommendInfoSetHistory`

`luna://com.webos.service.prs/testNotifyRecommendInfoSetHistory`

Tests the notify recommend info set history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.prs/testNotifyRecommendInfoSetHistory '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
