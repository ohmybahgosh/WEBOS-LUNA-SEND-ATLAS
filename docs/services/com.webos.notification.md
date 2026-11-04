# `com.webos.notification`

36 methods.  Platforms seen: webOS OSE, webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`$activity`](#_activity) | unknown |  | notifications | Contains detailed information of an activity which is fired by the Actvity Manager . This object is returned from the Activity Manager. For  |
| [`action`](#action) | unknown |  | notifications | Describes the action parameter for the toast. |
| [`alertInfo`](#alertinfo) | unknown |  | notifications | Contains the alert information. |
| [`button`](#button) | unknown |  | notifications | Contains alert button information |
| [`closeAlert`](#closealert) | public |  | notifications | Closes the currently displayed alert notification. |
| [`closeAllAlerts`](#closeallalerts) | public |  | notifications | Closes all the open alerts. Note: This method is for internal use. It must only be used by com.webos.service.battest during BAT test . If th |
| [`closeInputAlert`](#closeinputalert) | private |  | notifications | Method registered by com.webos.notification (root category) |
| [`closePincodePrompt`](#closepincodeprompt) | private |  | notifications | Method registered by com.webos.notification (root category) |
| [`closeToast`](#closetoast) | public |  | notifications | Removes a toast notification from the database. |
| [`createAlert`](#createalert) | public |  | notifications | Creates a system alert notification. |
| [`createInputAlert`](#createinputalert) | private |  | notifications | Method registered by com.webos.notification (root category) |
| [`createNotification`](#createnotification) | private |  | notifications | Method registered by com.webos.notification (root category) |
| [`createPincodePrompt`](#createpincodeprompt) | public |  | notifications | Method registered by com.webos.notification (root category) |
| [`createSignageAlert`](#createsignagealert) | public |  | notifications | Method registered by com.webos.notification (root category) |
| [`createToast`](#createtoast) | public |  | notifications | Creates a toast notification. |
| [`disable`](#disable) | public |  | notifications | Disables all notification features (Toast, Alert, Input Alert, Pin Prompt). Note: Only a privileged application or service can call this met |
| [`enable`](#enable) | public |  | notifications | Enables all notification features (Toast, Alert, Input Alert, Pin Prompt). Note: Only a privileged app/service can call this method. |
| [`getAlertNotification`](#getalertnotification) | public | yes | notifications | Subscribe to create alert notifications. Note: This method should only be used by the Surface Manager . |
| [`getInputAlertNotification`](#getinputalertnotification) | private |  | notifications | Method registered by com.webos.notification (root category) |
| [`getNotification`](#getnotification) | private |  | notifications | Method registered by com.webos.notification (root category) |
| [`getNotificationInfo`](#getnotificationinfo) | private |  | notifications | Method registered by com.webos.notification (root category) |
| [`getPincodePromptNotification`](#getpincodepromptnotification) | private |  | notifications | Method registered by com.webos.notification (root category) |
| [`getToastCount`](#gettoastcount) | public | yes | notifications | Queries the toast notification details of the stored messages and provides the read/unread count of the toast notifications. Note: Only "com |
| [`getToastList`](#gettoastlist) | public |  | notifications | Lists the toasts created for the app/client based on the user logged into the particular session. |
| [`getToastNotification`](#gettoastnotification) | public | yes | notifications | Subscribe to created toast notification. Note: This method should only be used by Surface Manager only. |
| [`image`](#image) | unknown |  | notifications | Defines extra toast image. |
| [`input`](#input) | unknown |  | notifications | Contain information about an input alert. |
| [`onclick`](#onclick) | unknown |  | notifications | Contains action information when a user clicks the toast |
| [`onclose`](#onclose) | unknown |  | notifications | Contains close action when alert is closed with close button or automatically |
| [`onfail`](#onfail) | unknown |  | notifications | Action to be performed on failure to create alert from view side (LSM). |
| [`onFailAction`](#onfailaction) | unknown |  | notifications | Action to be performed on failure to create alert. |
| [`removeAllNotification`](#removeallnotification) | public |  | notifications | Removes all notifications that are currently being displayed. |
| [`removeNotification`](#removenotification) | public |  | notifications | Deletes the given notification(s) from DB. We can remove given set of notifications or remove all notifications from a given sourceId. |
| [`schedule`](#schedule) | unknown |  | notifications | Creates a toast notification as a persistent message and define its schedule. |
| [`setToastStatus`](#settoaststatus) | public |  | notifications | Specifies whether the toast is to be marked as read or unread. |
| [`toastInfo`](#toastinfo) | unknown |  | notifications | Contains information about the stored toasts |

<a id="_activity"></a>
## `$activity`

`luna://com.webos.notification/$activity`

Contains detailed information of an activity which is fired by the Actvity Manager . This object is returned from the Activity Manager. For more details, see com.webos.service.activitymanager .

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/$activity '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="action"></a>
## `action`

`luna://com.webos.notification/action`

Describes the action parameter for the toast.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/action '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="alertinfo"></a>
## `alertInfo`

`luna://com.webos.notification/alertInfo`

Contains the alert information.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/alertInfo '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="button"></a>
## `button`

`luna://com.webos.notification/button`

Contains alert button information

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/button '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="closealert"></a>
## `closeAlert`

`luna://com.webos.notification/closeAlert`

Closes the currently displayed alert notification.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 3+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `alertId` | String (required) The ID of the alert notification to close. |

```sh
luna-send -n 1 -f -a com.webos.surfacemanager luna://com.webos.notification/closeAlert '{"alertId":"com.webos.surfacemanager-1582876366095"}
```

> ACG: notification.management \| Returns: returnValue:Boolean \| Service: Manages the system notifications. \|\| home-chooser closes alerts with -a com.webos.applicationManager. Companion closes alerts with id prefix com.webos.service.apiadapter-.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/), [2](https://github.com/webosbrew/home-chooser/blob/HEAD/docs/service.md), [3](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [4](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py)

<a id="closeallalerts"></a>
## `closeAllAlerts`

`luna://com.webos.notification/closeAllAlerts`

Closes all the open alerts. Note: This method is for internal use. It must only be used by com.webos.service.battest during BAT test . If the caller is not com.webos.service.battest , the method will fail.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

```sh
luna-send -n 1 -f -a com.webos.service.battest luna://com.webos.notification/closeAllAlerts '{}
```

> ACG: notification.management \| Returns: returnValue:Boolean \| Service: Manages the system notifications.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="closeinputalert"></a>
## `closeInputAlert`

`luna://com.webos.notification/closeInputAlert`

Method registered by com.webos.notification (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.notification/closeInputAlert '{}'
```

> Seen via `ls-monitor -i com.webos.notification` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, notifications, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="closepincodeprompt"></a>
## `closePincodePrompt`

`luna://com.webos.notification/closePincodePrompt`

Method registered by com.webos.notification (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.notification/closePincodePrompt '{}'
```

> Seen via `ls-monitor -i com.webos.notification` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, notifications, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="closetoast"></a>
## `closeToast`

`luna://com.webos.notification/closeToast`

Removes a toast notification from the database.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `toastId` | String (optional) ID of the toast notification to remove from the database. Note : Either toastId or sourceId is required. |
| `sourceId` | String (optional) ID of the app/service to remove from the database. Note : Either toastId or sourceId is required. |

```sh
luna-send -n 1 -f -a com.webos.app.test luna://com.webos.notification/closeToast '{"toastId":"com.webos.app.test-1433221930402"}
```

> ACG: notification.management \| Returns: returnValue:Boolean \| Service: Manages the system notifications. \|\| Documented in the Overglass findings table.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/), [2](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="createalert"></a>
## `createAlert`

`luna://com.webos.notification/createAlert`

Creates a system alert notification.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 3+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `iconUrl` | String (optional) The file path of the alert icon. The file path must be local to the device. |
| `title` | String (optional) A brief title for the alert notification. |
| `message` | String (required) A detailed message for the alert notification. |
| `modal` | Boolean (optional) Indicates whether to display a modal or non-modal alert notification. Possible values are: true: Display a modal alert notification. false (Default): Display a non-modal alert notification. |
| `buttons` | Object array: button (required) Defines the button label, and onclick action. Button specification is given in an array. An example is: "buttons":[ {"label":"button1", "onclick":"luna://com.webos.service.applicationmanager/launch", "params":{"id":"com.webos.app.settings"}}, {"label":"button2", "focus":true}, {"label":"button3"} ] |
| `onclose` | Object: onclose (optional) Defines the close action to be performed when an alert is closed. |
| `type` | String (optional) Defines the button type in the alert. Possible values are: confirm (Default) warning |
| `isSysReq` | Boolean (optional) Indicates whether the notification has come from an app or system​. Possible values are: true: Notification comes from system. false: Notification comes from an app. |
| `onfail` | Object: onfail (optional) Action to be performed on failure to create an alert. |
| `timeout` | int (0) |
| `sourceId` | string |

```sh
luna-send -n 1 -f -a com.webos.surfacemanager luna://com.webos.notification/createAlert '{ "message":"hello world", "buttons":[ { "label":"launch", "params":{ "id":"youtube.leanback.v4" } } ] }
```

> ACG: notification.operation \| Returns: alertId:String; returnValue:Boolean \| Service: Manages the system notifications. \|\| THE createAlert trick: the TV itself invokes the luna URI in onClick/onclose/onfail (see libs-notes.md). Returns alertId (e.g. com.webos.service.apiadapter-<n>; LG_Buddy also sees prefix com.webos.service.apiadapter.pub-). Needs permission WRITE_NOTIFICATION_ALERT / WRITE_NOTIFICATION_TOAST (LG_Buddy: omitting WRITE_NOTIFICATION_TOAST in the unsigned manifest makes createAlert return 401). webos-homebrew-channel's startup.sh calls luna://com.webos.notification/createAlert with buttons[{label,onclick,params}]. \|\| Called as root with -a com.webos.service.secondscreen.gateway by Homebrew Channel/RootMyTV. Returns alertId. This is the mechanism bscpylgtv/ColorControl/LGTVCompanion abuse over SSAP (ssap://system.notifications/createAlert) to execute private luna calls: they put the target URI in buttons[0].onClick, onclose.uri and onfail.uri then closeAlert, so the private call runs without root. Returned data from the inner call is not visible.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [4](https://github.com/webosbrew/webos-homebrew-channel/blob/main/services/startup.sh), [5](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [6](https://github.com/Staphylococcus/LG_Buddy/blob/main/docs/webos-testing.md), [7](https://github.com/Tecnosimples-git/Hubitat_LG_TV_Trato/blob/main/Hubitat_LG_TV_Trato_v1.8.3-TRATO-1.0.groovy), [8](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/startup.sh)

<a id="createinputalert"></a>
## `createInputAlert`

`luna://com.webos.notification/createInputAlert`

Method registered by com.webos.notification (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.notification/createInputAlert '{}'
```

> Seen via `ls-monitor -i com.webos.notification` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, notifications, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="createnotification"></a>
## `createNotification`

`luna://com.webos.notification/createNotification`

Method registered by com.webos.notification (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.notification/createNotification '{}'
```

> Seen via `ls-monitor -i com.webos.notification` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, notifications.manage, notifications, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="createpincodeprompt"></a>
## `createPincodePrompt`

`luna://com.webos.notification/createPincodePrompt`

Method registered by com.webos.notification (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.notification/createPincodePrompt '{}'
```

> Seen via `ls-monitor -i com.webos.notification` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, public, notifications, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="createsignagealert"></a>
## `createSignageAlert`

`luna://com.webos.notification/createSignageAlert`

Method registered by com.webos.notification (root category)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.notification/createSignageAlert '{}'
```

> Seen via `ls-monitor -i com.webos.notification` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, public, notifications, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="createtoast"></a>
## `createToast`

`luna://com.webos.notification/createToast`

Creates a toast notification.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 11+; webOS 3+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `sourceId` | String (optional) The ID of the application or service that creates the toast notification. |
| `iconUrl` | String (optional) The file path of the alert icon. The file path must be local to the device. NOTE : The icon must be 80 x 80 and in PNG format. |
| `message` | String (required) The detailed message to be displayed as part of the toast notification. The maximum length is 60. |
| `onclick` | Object: onclick (optional) Defines the toast action. An example is: {"appId":"com.webos.app.test"} |
| `noaction` | Boolean (optional) Indicates no action is required. Possible values are: true: If no action is required. false (Default): If action is defined. |
| `stale` | Boolean (optional) Indicates whether the notification is old or current. Possible values are: true: Toast notification is old and does not need to be displayed. false (Default): Toast notification is current and should be displayed. |
| `persistent` | Boolean (optional) Indicates whether the toast message should be saved in the database. Possible values are: true: Toast message will be saved in the database. false: Not saved in database. |
| `isSysReq` | Boolean (optional) Defines notification comes from app or system. Possible values are: true: Notification comes from system. false: Notification comes from app. |
| `schedule` | Object: schedule (optional) Creates a toast notification as a persistent message and defines its schedule. |
| `type` | String (optional) Defines the toast type. Possible values are: standard (Default) light |
| `extra` | Object array: image (optional) Defines extra toast resource. |
| `onlyToast` | Boolean (optional) Indicates if notification to be created is just a simple toast. Possible values are: true (Default): Shows simple information. false: Calls createNotification API and notiInfo is added in notification list. |
| `iconData` | base64 string |
| `iconExtension` | png/jpg |
| `onClick` | {appId, params} |

```sh
luna-send -n 1 -f -a com.webos.app.test luna://com.webos.notification/createToast '{ "sourceId":"com.webos.app.test", "onclick": {"appId":"com.webos.app.test"}, "message":"hello world", "noaction": false, "persistent":true }
```

> ACG: notification.operation \| Returns: returnValue:Boolean; toastId:String \| Service: Manages the system notifications. \|\| Works from luna-send-pub (public) and root luna-send -a <appId>. Homebrew Channel, RootMyTV and the autoroot scripts use sourceId. Reply contains toastId (Overglass uses closeToast {toastId}). An alias luna://com.webos.service.notification/createToast and luna://com.webos.service.mrcu/createToast also appear. Lumen found a non-app caller can pass any app id as sourceId and the toast shows over a full-screen app. \|\| SSAP alias system.notifications/createToast. Mapping to luna://com.webos.notification/createToast: webos-homebrew-channel calls luna://com.webos.notification/createToast with {message,...} directly (root/service context). homebridge-webos-tv documents params: message, iconData, iconExtension, onClick[appId, params]. Returns toastId.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/), [2](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts), [3](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/startup.sh), [4](https://github.com/RootMyTV/RootMyTV.github.io/blob/HEAD/files/stage3.sh), [5](https://github.com/throwaway96/dejavuln-autoroot/blob/HEAD/autoroot.sh), [6](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md), [7](https://github.com/SunnySide007/lumen-webos/blob/HEAD/docs/device/b9.md), [8](https://github.com/andrewfraley/magic_mapper/blob/HEAD/magic_mapper.py)

<a id="disable"></a>
## `disable`

`luna://com.webos.notification/disable`

Disables all notification features (Toast, Alert, Input Alert, Pin Prompt). Note: Only a privileged application or service can call this method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented, code

```sh
luna-send -n 1 -f -a com.webos.app.test luna://com.webos.notification/disable '{}
```

> ACG: notification.management \| Returns: returnValue:Boolean \| Service: Manages the system notifications. \|\| Parameters unread; presence only.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/), [2](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/docs/development/TV-RESEARCH.md)

<a id="enable"></a>
## `enable`

`luna://com.webos.notification/enable`

Enables all notification features (Toast, Alert, Input Alert, Pin Prompt). Note: Only a privileged app/service can call this method.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented, code

```sh
luna-send -n 1 -f -a com.webos.app.test luna://com.webos.notification/enable '{}
```

> ACG: notification.management \| Returns: returnValue:Boolean \| Service: Manages the system notifications. \|\| Parameters unread; presence only.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/), [2](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/docs/development/TV-RESEARCH.md)

<a id="getalertnotification"></a>
## `getAlertNotification`

`luna://com.webos.notification/getAlertNotification`

Subscribe to create alert notifications. Note: This method should only be used by the Surface Manager .

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE, webOS TV  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented, code

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send -i -f -a com.webos.surfacemanager luna://com.webos.notification/getAlertNotification '{"subscribe":true}
```

> ACG: notification.management \| Returns: returnValue:Boolean; subscribed:Boolean \| Service: Manages the system notifications. \|\| Parameters unread; presence only.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/), [2](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/docs/development/TV-RESEARCH.md)

<a id="getinputalertnotification"></a>
## `getInputAlertNotification`

`luna://com.webos.notification/getInputAlertNotification`

Method registered by com.webos.notification (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.notification/getInputAlertNotification '{}'
```

> Seen via `ls-monitor -i com.webos.notification` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, notifications, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getnotification"></a>
## `getNotification`

`luna://com.webos.notification/getNotification`

Method registered by com.webos.notification (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.notification/getNotification '{}'
```

> Seen via `ls-monitor -i com.webos.notification` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, notifications, all, notifications.query. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getnotificationinfo"></a>
## `getNotificationInfo`

`luna://com.webos.notification/getNotificationInfo`

Method registered by com.webos.notification (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.notification/getNotificationInfo '{}'
```

> Seen via `ls-monitor -i com.webos.notification` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, notifications, all, notifications.query. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="getpincodepromptnotification"></a>
## `getPincodePromptNotification`

`luna://com.webos.notification/getPincodePromptNotification`

Method registered by com.webos.notification (root category)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.notification/getPincodePromptNotification '{}'
```

> Seen via `ls-monitor -i com.webos.notification` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, notifications, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="gettoastcount"></a>
## `getToastCount`

`luna://com.webos.notification/getToastCount`

Queries the toast notification details of the stored messages and provides the read/unread count of the toast notifications. Note: Only "com.webos.surfacemanager" and "com.webos.app.notification" have permission to monitor the notification status change.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed. false: Not subscribed. |
| `displayId` | Number (optional) Identifier of the display where the notification is to be displayed. Possible values are: 0 1 |

```sh
luna-send -i -f -a com.webos.app.notification luna://com.webos.notification/getToastCount '{"subscribe":true, "displayId": 0}
```

> ACG: notification.management \| Returns: returnValue:Boolean; subscribed:Boolean \| Service: Manages the system notifications.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="gettoastlist"></a>
## `getToastList`

`luna://com.webos.notification/getToastList`

Lists the toasts created for the app/client based on the user logged into the particular session.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `displayId` | Number (optional) Identifier of the display where the notification is to be displayed. Possible values are: 0 1 |

```sh
luna-send -n 1 -f -a com.webos.app.notification luna://com.webos.notification/getToastList '{"displayId": 0}
```

> ACG: notification.management \| Returns: returnValue:Boolean; toastInfo:Object array: toastInfo \| Service: Manages the system notifications.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="gettoastnotification"></a>
## `getToastNotification`

`luna://com.webos.notification/getToastNotification`

Subscribe to created toast notification. Note: This method should only be used by Surface Manager only.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notifications. Possible values are: true: Subscribed. false (Default): Not subscribed. |

```sh
luna-send -i -f -a com.webos.surfacemanager luna://com.webos.notification/getToastNotification '{"subscribe":true}
```

> ACG: notification.management \| Returns: subscribed:Boolean; returnValue:Boolean \| Service: Manages the system notifications.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="image"></a>
## `image`

`luna://com.webos.notification/image`

Defines extra toast image.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/image '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="input"></a>
## `input`

`luna://com.webos.notification/input`

Contain information about an input alert.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 32+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/input '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="onclick"></a>
## `onclick`

`luna://com.webos.notification/onclick`

Contains action information when a user clicks the toast

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/onclick '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="onclose"></a>
## `onclose`

`luna://com.webos.notification/onclose`

Contains close action when alert is closed with close button or automatically

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/onclose '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="onfail"></a>
## `onfail`

`luna://com.webos.notification/onfail`

Action to be performed on failure to create alert from view side (LSM).

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/onfail '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="onfailaction"></a>
## `onFailAction`

`luna://com.webos.notification/onFailAction`

Action to be performed on failure to create alert.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/onFailAction '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="removeallnotification"></a>
## `removeAllNotification`

`luna://com.webos.notification/removeAllNotification`

Removes all notifications that are currently being displayed.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `displayId` | Number (optional) Identifier of the display where the notification is to be displayed. Possible values are: 0 1 |

```sh
luna-send -a com.webos.surfacemanager -n 1 luna://com.webos.notification/removeAllNotification '{"displayId": 0}
```

> ACG: notification.management \| Returns: returnValue:Boolean; removeAllNotiId:Boolean; displayId:Number \| Service: Manages the system notifications.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="removenotification"></a>
## `removeNotification`

`luna://com.webos.notification/removeNotification`

Deletes the given notification(s) from DB. We can remove given set of notifications or remove all notifications from a given sourceId.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 21+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `removeNotiId` | String array (optional) A list of IDs of the notifications to be deleted. Notification ID is composed of the URI of the notification source, a dash, and the timestamp of the time when the notification was issued. Format: "Source URI-Timestamp" Example "com.webos.surfacemanager-1393548223764" Note: Either one of "removeNotiId" or "sourceId" is mandatory to be provided. |
| `sourceId` | String (optional) Identifies the app or service that created the notification to be deleted. Format: URI Note: Either one of "removeNotiId" or "sourceId" is mandatory to be provided. |

```sh
luna-send -a com.webos.surfacemanager -n 1 -f luna://com.webos.notification/removeNotification '{"removeNotiId": ["com.sloy.jbnotif-1393548393417"]}
```

> ACG: notification.management \| Returns: returnValue:Boolean; removeNotiId:String array; sourceId:String \| Service: Manages the system notifications.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="schedule"></a>
## `schedule`

`luna://com.webos.notification/schedule`

Creates a toast notification as a persistent message and define its schedule.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/schedule '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="settoaststatus"></a>
## `setToastStatus`

`luna://com.webos.notification/setToastStatus`

Specifies whether the toast is to be marked as read or unread.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 12+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `toastId` | String (required) Indicates the unique ID of the toast created. |
| `readStatus` | Boolean (required) Indicates the status of a toast to be set by the user. Possible values are: true: toast is read. false: toast is unread. |

```sh
luna-send -i -f -a com.webos.app.notification luna://com.webos.notification/setToastStatus '{ "toastId" : "com.webos.app.notification-1584349101435", "readStatus" : true }
```

> ACG: notification.management \| Returns: returnValue:Boolean; toastId:String; readStatus:Boolean \| Service: Manages the system notifications.

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)

<a id="toastinfo"></a>
## `toastInfo`

`luna://com.webos.notification/toastInfo`

Contains information about the stored toasts

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.notification/toastInfo '{}'
```

> Service: Manages the system notifications. \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-notification/)
