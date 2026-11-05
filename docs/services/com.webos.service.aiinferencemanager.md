# `com.webos.service.aiinferencemanager`

AI inference manager: installs machine-learning models, requests and releases inference resources, and reports device inference capability and status. _(inferred from the service's methods)_

11 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`close`](#close) | private |  | misc | inferred | Closes the aiinferencemanager. |
| [`createNotification`](#createnotification) | private |  | notifications | inferred | Creates the notification. |
| [`getDeviceCapability`](#getdevicecapability) | private |  | input | inferred | Returns the device capability. |
| [`getDeviceStatus`](#getdevicestatus) | private |  | misc | inferred | Returns the device status. |
| [`getEvent`](#getevent) | private |  | misc | inferred | Returns the event. |
| [`getResourceList`](#getresourcelist) | private |  | misc | inferred | Returns the resource list. |
| [`handleModelInstall`](#handlemodelinstall) | private |  | misc | inferred | Handles the model install. |
| [`installModel`](#installmodel) | private |  | misc | inferred | Installs the model. |
| [`open`](#open) | private |  | misc | inferred | Opens the aiinferencemanager. |
| [`releaseResource`](#releaseresource) | private |  | misc | inferred | Releases the resource. |
| [`requestResource`](#requestresource) | private |  | misc | inferred | Requests the resource. |

<a id="close"></a>
## `close`

`luna://com.webos.service.aiinferencemanager/close`

Closes the aiinferencemanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.aiinferencemanager/close '{}'
```

> ACG groups: all, aiinferencemanager.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createnotification"></a>
## `createNotification`

`luna://com.webos.service.aiinferencemanager/createNotification`

Creates the notification.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.aiinferencemanager/createNotification '{}'
```

> ACG groups: all, aiinferencemanager.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevicecapability"></a>
## `getDeviceCapability`

`luna://com.webos.service.aiinferencemanager/getDeviceCapability`

Returns the device capability.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.aiinferencemanager/getDeviceCapability '{}'
```

> ACG groups: all, aiinferencemanager, aiinferencemanager.query.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdevicestatus"></a>
## `getDeviceStatus`

`luna://com.webos.service.aiinferencemanager/getDeviceStatus`

Returns the device status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.aiinferencemanager/getDeviceStatus '{}'
```

> ACG groups: all, aiinferencemanager, aiinferencemanager.query.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getevent"></a>
## `getEvent`

`luna://com.webos.service.aiinferencemanager/getEvent`

Returns the event.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.aiinferencemanager/getEvent '{}'
```

> ACG groups: all, aiinferencemanager, aiinferencemanager.query.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getresourcelist"></a>
## `getResourceList`

`luna://com.webos.service.aiinferencemanager/getResourceList`

Returns the resource list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.aiinferencemanager/getResourceList '{}'
```

> ACG groups: all, aiinferencemanager, aiinferencemanager.query.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="handlemodelinstall"></a>
## `handleModelInstall`

`luna://com.webos.service.aiinferencemanager/handleModelInstall`

Handles the model install.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.aiinferencemanager/handleModelInstall '{}'
```

> ACG groups: all, aiinferencemanager.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="installmodel"></a>
## `installModel`

`luna://com.webos.service.aiinferencemanager/installModel`

Installs the model.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.aiinferencemanager/installModel '{}'
```

> ACG groups: all, aiinferencemanager.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="open"></a>
## `open`

`luna://com.webos.service.aiinferencemanager/open`

Opens the aiinferencemanager.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.aiinferencemanager/open '{}'
```

> ACG groups: all, aiinferencemanager.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="releaseresource"></a>
## `releaseResource`

`luna://com.webos.service.aiinferencemanager/releaseResource`

Releases the resource.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.aiinferencemanager/releaseResource '{}'
```

> ACG groups: all, aiinferencemanager.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="requestresource"></a>
## `requestResource`

`luna://com.webos.service.aiinferencemanager/requestResource`

Requests the resource.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.aiinferencemanager/requestResource '{}'
```

> ACG groups: all, aiinferencemanager.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
