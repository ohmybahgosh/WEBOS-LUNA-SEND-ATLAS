# `com.webos.service.chromecast.provisioning`

Chromecast built-in (DIAL) provisioning: reports status and DIAL UUID, toggles the activation popup and launches Chromecast settings. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`createNotification`](#createnotification) | private |  | notifications | inferred | Creates the notification. |
| [`disableActivationPopup`](#disableactivationpopup) | private |  | security | inferred | Disables the activation popup. |
| [`getDialUuid`](#getdialuuid) | private |  | security | inferred | Returns the dial uuid. |
| [`getStatus`](#getstatus) | private |  | security | inferred | Returns the status. |
| [`launchChromecastSettings`](#launchchromecastsettings) | private |  | settings | inferred | Launches the chromecast settings. |

<a id="createnotification"></a>
## `createNotification`

`luna://com.webos.service.chromecast.provisioning/createNotification`

Creates the notification.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.chromecast.provisioning/createNotification '{}'
```

> ACG groups: com.webos.service.chromecast.provisioning.operation, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disableactivationpopup"></a>
## `disableActivationPopup`

`luna://com.webos.service.chromecast.provisioning/disableActivationPopup`

Disables the activation popup.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.chromecast.provisioning/disableActivationPopup '{}'
```

> ACG groups: private, com.webos.service.chromecast.provisioning.operation, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdialuuid"></a>
## `getDialUuid`

`luna://com.webos.service.chromecast.provisioning/getDialUuid`

Returns the dial uuid.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.chromecast.provisioning/getDialUuid '{}'
```

> ACG groups: com.webos.service.chromecast.provisioning.operation, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.chromecast.provisioning/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.chromecast.provisioning/getStatus '{}'
```

> ACG groups: private, com.webos.service.chromecast.provisioning.query, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchchromecastsettings"></a>
## `launchChromecastSettings`

`luna://com.webos.service.chromecast.provisioning/launchChromecastSettings`

Launches the chromecast settings.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.chromecast.provisioning/launchChromecastSettings '{}'
```

> ACG groups: private, com.webos.service.chromecast.provisioning.operation, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
