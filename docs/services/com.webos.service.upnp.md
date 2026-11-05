# `com.webos.service.upnp`

UPnP service providing control-point and device roles: discovers and lists devices, services, actions and state variables, registers devices, invokes actions and manages event subscriptions.

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`controlpoint/generateId`](#controlpoint_generateid) | public |  | network | inferred | Handles the generate ID (controlpoint) |
| [`controlpoint/listDevices`](#controlpoint_listdevices) | public |  | network | inferred | Lists the devices (controlpoint) |
| [`controlpoint/listServiceActions`](#controlpoint_listserviceactions) | public |  | network | inferred | Lists the service actions (controlpoint) |
| [`controlpoint/listServices`](#controlpoint_listservices) | public |  | network | inferred | Lists the services (controlpoint) |
| [`controlpoint/listStateVariables`](#controlpoint_liststatevariables) | public |  | network | inferred | Lists the state variables (controlpoint) |
| [`controlpoint/register`](#controlpoint_register) | public |  | network | inferred | Registers the upnp (controlpoint) |
| [`controlpoint/requestAction`](#controlpoint_requestaction) | public |  | network | inferred | Requests the action (controlpoint) |
| [`controlpoint/requestSubscription`](#controlpoint_requestsubscription) | public |  | network | inferred | Requests the subscription (controlpoint) |
| [`controlpoint/requestUnsubscription`](#controlpoint_requestunsubscription) | public |  | network | inferred | Requests the unsubscription (controlpoint) |
| [`controlpoint/setLog`](#controlpoint_setlog) | public |  | network | inferred | Sets the log (controlpoint) |
| [`controlpoint/unregister`](#controlpoint_unregister) | public |  | network | inferred | Unregisters the upnp (controlpoint) |
| [`device/getStateVariable`](#device_getstatevariable) | public |  | network | inferred | Returns the state variable (device) |
| [`device/register`](#device_register) | public |  | network | inferred | Registers the upnp (device) |
| [`device/requestActionResponse`](#device_requestactionresponse) | public |  | network | inferred | Requests the action response (device) |
| [`device/setStateVariable`](#device_setstatevariable) | public |  | network | inferred | Sets the state variable (device) |
| [`device/start`](#device_start) | public |  | network | inferred | Starts the upnp (device) |
| [`device/stop`](#device_stop) | public |  | network | inferred | Stops the upnp (device) |
| [`device/unregister`](#device_unregister) | public |  | network | inferred | Unregisters the upnp (device) |

<a id="controlpoint_generateid"></a>
## `controlpoint/generateId`

`luna://com.webos.service.upnp/controlpoint/generateId`

Handles the generate ID (controlpoint)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/controlpoint/generateId '{}'
```

> ACG groups: public, private, all, upnp.controlpoint, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controlpoint_listdevices"></a>
## `controlpoint/listDevices`

`luna://com.webos.service.upnp/controlpoint/listDevices`

Lists the devices (controlpoint)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/controlpoint/listDevices '{}'
```

> ACG groups: public, private, all, upnp.controlpoint, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controlpoint_listserviceactions"></a>
## `controlpoint/listServiceActions`

`luna://com.webos.service.upnp/controlpoint/listServiceActions`

Lists the service actions (controlpoint)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/controlpoint/listServiceActions '{}'
```

> ACG groups: public, private, all, upnp.controlpoint, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controlpoint_listservices"></a>
## `controlpoint/listServices`

`luna://com.webos.service.upnp/controlpoint/listServices`

Lists the services (controlpoint)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/controlpoint/listServices '{}'
```

> ACG groups: public, private, all, upnp.controlpoint, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controlpoint_liststatevariables"></a>
## `controlpoint/listStateVariables`

`luna://com.webos.service.upnp/controlpoint/listStateVariables`

Lists the state variables (controlpoint)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/controlpoint/listStateVariables '{}'
```

> ACG groups: public, private, all, upnp.controlpoint, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controlpoint_register"></a>
## `controlpoint/register`

`luna://com.webos.service.upnp/controlpoint/register`

Registers the upnp (controlpoint)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/controlpoint/register '{}'
```

> ACG groups: public, private, all, upnp.controlpoint, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controlpoint_requestaction"></a>
## `controlpoint/requestAction`

`luna://com.webos.service.upnp/controlpoint/requestAction`

Requests the action (controlpoint)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/controlpoint/requestAction '{}'
```

> ACG groups: public, private, all, upnp.controlpoint, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controlpoint_requestsubscription"></a>
## `controlpoint/requestSubscription`

`luna://com.webos.service.upnp/controlpoint/requestSubscription`

Requests the subscription (controlpoint)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/controlpoint/requestSubscription '{}'
```

> ACG groups: public, private, all, upnp.controlpoint, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controlpoint_requestunsubscription"></a>
## `controlpoint/requestUnsubscription`

`luna://com.webos.service.upnp/controlpoint/requestUnsubscription`

Requests the unsubscription (controlpoint)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/controlpoint/requestUnsubscription '{}'
```

> ACG groups: public, private, all, upnp.controlpoint, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controlpoint_setlog"></a>
## `controlpoint/setLog`

`luna://com.webos.service.upnp/controlpoint/setLog`

Sets the log (controlpoint)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/controlpoint/setLog '{}'
```

> ACG groups: public, private, all, upnp.controlpoint, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="controlpoint_unregister"></a>
## `controlpoint/unregister`

`luna://com.webos.service.upnp/controlpoint/unregister`

Unregisters the upnp (controlpoint)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/controlpoint/unregister '{}'
```

> ACG groups: public, private, all, upnp.controlpoint, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_getstatevariable"></a>
## `device/getStateVariable`

`luna://com.webos.service.upnp/device/getStateVariable`

Returns the state variable (device)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/device/getStateVariable '{}'
```

> ACG groups: public, upnp.device, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_register"></a>
## `device/register`

`luna://com.webos.service.upnp/device/register`

Registers the upnp (device)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/device/register '{}'
```

> ACG groups: public, upnp.device, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_requestactionresponse"></a>
## `device/requestActionResponse`

`luna://com.webos.service.upnp/device/requestActionResponse`

Requests the action response (device)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/device/requestActionResponse '{}'
```

> ACG groups: public, upnp.device, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_setstatevariable"></a>
## `device/setStateVariable`

`luna://com.webos.service.upnp/device/setStateVariable`

Sets the state variable (device)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/device/setStateVariable '{}'
```

> ACG groups: public, upnp.device, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_start"></a>
## `device/start`

`luna://com.webos.service.upnp/device/start`

Starts the upnp (device)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/device/start '{}'
```

> ACG groups: public, upnp.device, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_stop"></a>
## `device/stop`

`luna://com.webos.service.upnp/device/stop`

Stops the upnp (device)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/device/stop '{}'
```

> ACG groups: public, upnp.device, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="device_unregister"></a>
## `device/unregister`

`luna://com.webos.service.upnp/device/unregister`

Unregisters the upnp (device)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.upnp/device/unregister '{}'
```

> ACG groups: public, upnp.device, private, all, devices.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
