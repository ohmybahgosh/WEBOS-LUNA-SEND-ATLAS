# `com.webos.service.googlehomecontroller`

Google Home integration controller: enables, disables, starts, and stops the Google Home service, reports its status, and updates its package. _(inferred from the service's methods)_

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`disableGhpService`](#disableghpservice) | private |  | misc | inferred | Disables the ghp service. |
| [`enableGhpService`](#enableghpservice) | public |  | misc | inferred | Enables the ghp service. |
| [`getGhpStatus`](#getghpstatus) | public |  | misc | inferred | Returns the ghp status. |
| [`startGhpService`](#startghpservice) | public |  | misc | inferred | Starts the ghp service. |
| [`stopGhpService`](#stopghpservice) | public |  | misc | inferred | Stops the ghp service. |
| [`test`](#test) | public |  | misc | inferred | Tests the googlehomecontroller. |
| [`updateGhpPackage`](#updateghppackage) | public |  | update | inferred | Updates the ghp package. |

<a id="disableghpservice"></a>
## `disableGhpService`

`luna://com.webos.service.googlehomecontroller/disableGhpService`

Disables the ghp service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.googlehomecontroller/disableGhpService '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enableghpservice"></a>
## `enableGhpService`

`luna://com.webos.service.googlehomecontroller/enableGhpService`

Enables the ghp service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.googlehomecontroller/enableGhpService '{}'
```

> ACG groups: com.webos.service.googlehomecontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getghpstatus"></a>
## `getGhpStatus`

`luna://com.webos.service.googlehomecontroller/getGhpStatus`

Returns the ghp status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.googlehomecontroller/getGhpStatus '{}'
```

> ACG groups: com.webos.service.googlehomecontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startghpservice"></a>
## `startGhpService`

`luna://com.webos.service.googlehomecontroller/startGhpService`

Starts the ghp service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.googlehomecontroller/startGhpService '{}'
```

> ACG groups: com.webos.service.googlehomecontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopghpservice"></a>
## `stopGhpService`

`luna://com.webos.service.googlehomecontroller/stopGhpService`

Stops the ghp service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.googlehomecontroller/stopGhpService '{}'
```

> ACG groups: com.webos.service.googlehomecontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="test"></a>
## `test`

`luna://com.webos.service.googlehomecontroller/test`

Tests the googlehomecontroller.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.googlehomecontroller/test '{}'
```

> ACG groups: com.webos.service.googlehomecontroller, private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateghppackage"></a>
## `updateGhpPackage`

`luna://com.webos.service.googlehomecontroller/updateGhpPackage`

Updates the ghp package.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.googlehomecontroller/updateGhpPackage '{}'
```

> ACG groups: com.webos.service.googlehomecontroller, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
