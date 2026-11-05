# `com.webos.service.usercontextmanager`

User-context manager: tracks usage history and computes content/usage rankings (overall, categorized, modeled) for personalization, with a monthly report. _(inferred from the service's methods)_

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`displayMonthlyReport`](#displaymonthlyreport) | private |  | misc | inferred | Handles the display monthly report. |
| [`getCategorizedRank`](#getcategorizedrank) | public |  | misc | inferred | Returns the categorized rank. |
| [`getHistory`](#gethistory) | public |  | misc | inferred | Returns the history. |
| [`getHistoryFromServer`](#gethistoryfromserver) | public |  | misc | inferred | Returns the history from server. |
| [`getModeledRank`](#getmodeledrank) | public |  | misc | inferred | Returns the modeled rank. |
| [`getRank`](#getrank) | public |  | misc | inferred | Returns the rank. |
| [`getRankFromServer`](#getrankfromserver) | public |  | misc | inferred | Returns the rank from server. |
| [`getSubRank`](#getsubrank) | public |  | misc | inferred | Returns the sub rank. |
| [`reset`](#reset) | public |  | misc | inferred | Resets the usercontextmanager. ⚠️ |
| [`test`](#test) | private |  | misc | inferred | Tests the usercontextmanager. |

<a id="displaymonthlyreport"></a>
## `displayMonthlyReport`

`luna://com.webos.service.usercontextmanager/displayMonthlyReport`

Handles the display monthly report.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.usercontextmanager/displayMonthlyReport '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcategorizedrank"></a>
## `getCategorizedRank`

`luna://com.webos.service.usercontextmanager/getCategorizedRank`

Returns the categorized rank.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.usercontextmanager/getCategorizedRank '{}'
```

> ACG groups: usercontextmanager.internal, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethistory"></a>
## `getHistory`

`luna://com.webos.service.usercontextmanager/getHistory`

Returns the history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.usercontextmanager/getHistory '{}'
```

> ACG groups: usercontextmanager.internal, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethistoryfromserver"></a>
## `getHistoryFromServer`

`luna://com.webos.service.usercontextmanager/getHistoryFromServer`

Returns the history from server.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.usercontextmanager/getHistoryFromServer '{}'
```

> ACG groups: usercontextmanager.internal, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getmodeledrank"></a>
## `getModeledRank`

`luna://com.webos.service.usercontextmanager/getModeledRank`

Returns the modeled rank.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `appId` |  |
| `appList` |  |
| `count` |  |
| `eventType` |  |
| `rank` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.usercontextmanager/getModeledRank '{}'
```

> ACG groups: usercontextmanager.internal, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrank"></a>
## `getRank`

`luna://com.webos.service.usercontextmanager/getRank`

Returns the rank.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.usercontextmanager/getRank '{}'
```

> ACG groups: usercontextmanager.internal, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrankfromserver"></a>
## `getRankFromServer`

`luna://com.webos.service.usercontextmanager/getRankFromServer`

Returns the rank from server.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.usercontextmanager/getRankFromServer '{}'
```

> ACG groups: usercontextmanager.internal, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getsubrank"></a>
## `getSubRank`

`luna://com.webos.service.usercontextmanager/getSubRank`

Returns the sub rank.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.usercontextmanager/getSubRank '{}'
```

> ACG groups: usercontextmanager.internal, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reset"></a>
## `reset` ⚠️ DANGEROUS

`luna://com.webos.service.usercontextmanager/reset`

Resets the usercontextmanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.usercontextmanager/reset '{}'
```

> ACG groups: public, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.usercontextmanager/test`

Tests the usercontextmanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.usercontextmanager/test '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
