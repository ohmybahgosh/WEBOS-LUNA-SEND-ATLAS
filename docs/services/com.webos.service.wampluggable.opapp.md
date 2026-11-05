# `com.webos.service.wampluggable.opapp`

WAM pluggable operator-app (OpApp) service: reports OpApp context, ID, info and state, handles live-TV state changes, and manages OpApp UI elements. _(inferred from the service's methods)_

11 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`debug`](#debug) | private |  | misc | inferred | Handles the debug. |
| [`getOpAppContext`](#getopappcontext) | private |  | misc | inferred | Returns the op app context. |
| [`getOpAppId`](#getopappid) | private |  | misc | inferred | Returns the op app ID. |
| [`getOpAppInfo`](#getopappinfo) | private |  | misc | inferred | Returns the op app info. |
| [`getOpAppState`](#getopappstate) | private |  | misc | inferred | Returns the op app state. |
| [`notifyLiveTvStateChanged`](#notifylivetvstatechanged) | private |  | misc | inferred | Notifies of the live TV state changed. |
| [`onRecordingUserConfirm`](#onrecordinguserconfirm) | private |  | misc | inferred | Event handler: fires on the recording user confirm. |
| [`replaceUIElements`](#replaceuielements) | private |  | misc | inferred | Replaces the UI elements. |
| [`setOpAppState`](#setopappstate) | private |  | misc | inferred | Sets the op app state. |
| [`setQueryOrganisations`](#setqueryorganisations) | private |  | misc | inferred | Sets the query organisations. |
| [`subscribeOipfAppLoadChange`](#subscribeoipfapploadchange) | private |  | misc | inferred | Subscribes to the oipf app load change. |

<a id="debug"></a>
## `debug`

`luna://com.webos.service.wampluggable.opapp/debug`

Handles the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.opapp/debug '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getopappcontext"></a>
## `getOpAppContext`

`luna://com.webos.service.wampluggable.opapp/getOpAppContext`

Returns the op app context.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.opapp/getOpAppContext '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getopappid"></a>
## `getOpAppId`

`luna://com.webos.service.wampluggable.opapp/getOpAppId`

Returns the op app ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.opapp/getOpAppId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getopappinfo"></a>
## `getOpAppInfo`

`luna://com.webos.service.wampluggable.opapp/getOpAppInfo`

Returns the op app info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.opapp/getOpAppInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getopappstate"></a>
## `getOpAppState`

`luna://com.webos.service.wampluggable.opapp/getOpAppState`

Returns the op app state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.opapp/getOpAppState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifylivetvstatechanged"></a>
## `notifyLiveTvStateChanged`

`luna://com.webos.service.wampluggable.opapp/notifyLiveTvStateChanged`

Notifies of the live TV state changed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.opapp/notifyLiveTvStateChanged '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="onrecordinguserconfirm"></a>
## `onRecordingUserConfirm`

`luna://com.webos.service.wampluggable.opapp/onRecordingUserConfirm`

Event handler: fires on the recording user confirm.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.opapp/onRecordingUserConfirm '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="replaceuielements"></a>
## `replaceUIElements`

`luna://com.webos.service.wampluggable.opapp/replaceUIElements`

Replaces the UI elements.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.opapp/replaceUIElements '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setopappstate"></a>
## `setOpAppState`

`luna://com.webos.service.wampluggable.opapp/setOpAppState`

Sets the op app state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.opapp/setOpAppState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setqueryorganisations"></a>
## `setQueryOrganisations`

`luna://com.webos.service.wampluggable.opapp/setQueryOrganisations`

Sets the query organisations.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.opapp/setQueryOrganisations '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribeoipfapploadchange"></a>
## `subscribeOipfAppLoadChange`

`luna://com.webos.service.wampluggable.opapp/subscribeOipfAppLoadChange`

Subscribes to the oipf app load change.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wampluggable.opapp/subscribeOipfAppLoadChange '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
