# `com.webos.service.terminalmanager`

Terminal manager: controls RS-232 serial ports (baud rate, attributes, RS232 control), attaches a debug console, and registers/routes terminal commands. _(inferred from the service's methods)_

19 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`command/registerCommand`](#command_registercommand) | private |  | input | inferred | Registers the command (command) |
| [`command/registerCommandList`](#command_registercommandlist) | private |  | input | inferred | Registers the command list (command) |
| [`command/requestCommandPriority`](#command_requestcommandpriority) | private |  | input | inferred | Requests the command priority (command) |
| [`command/returnCommandPriority`](#command_returncommandpriority) | private |  | input | inferred | Handles the return command priority (command) |
| [`command/sendCommandThruVirtualInput`](#command_sendcommandthruvirtualinput) | private |  | input | inferred | Sends the command thru virtual input (command) |
| [`command/test1`](#command_test1) | private |  | input | inferred | Tests the 1 (command) |
| [`console/attachDevice`](#console_attachdevice) | private |  | input | inferred | Handles the attach device (console) |
| [`console/detachDevice`](#console_detachdevice) | private |  | input | inferred | Handles the detach device (console) |
| [`console/requestDebugConsolName`](#console_requestdebugconsolname) | private |  | input | inferred | Requests the debug consol name (console) |
| [`console/startConsole2`](#console_startconsole2) | private |  | input | inferred | Starts the console 2 (console) |
| [`getAttr`](#getattr) | private |  | input | inferred | Returns the attr. |
| [`getBaudRate`](#getbaudrate) | private |  | input | inferred | Returns the baud rate. |
| [`getRS232Control`](#getrs232control) | private |  | input | inferred | Returns the RS 232 control. |
| [`printMessage`](#printmessage) | private |  | input | inferred | Prints the message. |
| [`setAttr`](#setattr) | private |  | input | inferred | Sets the attr. |
| [`setAttrOneShot`](#setattroneshot) | private |  | input | inferred | Sets the attr one shot. |
| [`setBaudRate`](#setbaudrate) | private |  | input | inferred | Sets the baud rate. |
| [`setRS232Control`](#setrs232control) | private |  | input | inferred | Sets the RS 232 control. |
| [`svcOutput`](#svcoutput) | private |  | input | inferred | Handles the svc output. |

<a id="command_registercommand"></a>
## `command/registerCommand`

`luna://com.webos.service.terminalmanager/command/registerCommand`

Registers the command (command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/command/registerCommand '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="command_registercommandlist"></a>
## `command/registerCommandList`

`luna://com.webos.service.terminalmanager/command/registerCommandList`

Registers the command list (command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/command/registerCommandList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="command_requestcommandpriority"></a>
## `command/requestCommandPriority`

`luna://com.webos.service.terminalmanager/command/requestCommandPriority`

Requests the command priority (command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/command/requestCommandPriority '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="command_returncommandpriority"></a>
## `command/returnCommandPriority`

`luna://com.webos.service.terminalmanager/command/returnCommandPriority`

Handles the return command priority (command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/command/returnCommandPriority '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="command_sendcommandthruvirtualinput"></a>
## `command/sendCommandThruVirtualInput`

`luna://com.webos.service.terminalmanager/command/sendCommandThruVirtualInput`

Sends the command thru virtual input (command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/command/sendCommandThruVirtualInput '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="command_test1"></a>
## `command/test1`

`luna://com.webos.service.terminalmanager/command/test1`

Tests the 1 (command)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/command/test1 '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="console_attachdevice"></a>
## `console/attachDevice`

`luna://com.webos.service.terminalmanager/console/attachDevice`

Handles the attach device (console)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/console/attachDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="console_detachdevice"></a>
## `console/detachDevice`

`luna://com.webos.service.terminalmanager/console/detachDevice`

Handles the detach device (console)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/console/detachDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="console_requestdebugconsolname"></a>
## `console/requestDebugConsolName`

`luna://com.webos.service.terminalmanager/console/requestDebugConsolName`

Requests the debug consol name (console)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/console/requestDebugConsolName '{}'
```

> ACG groups: private, all, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="console_startconsole2"></a>
## `console/startConsole2`

`luna://com.webos.service.terminalmanager/console/startConsole2`

Starts the console 2 (console)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/console/startConsole2 '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getattr"></a>
## `getAttr`

`luna://com.webos.service.terminalmanager/getAttr`

Returns the attr.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/getAttr '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbaudrate"></a>
## `getBaudRate`

`luna://com.webos.service.terminalmanager/getBaudRate`

Returns the baud rate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `baudrate` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/getBaudRate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getrs232control"></a>
## `getRS232Control`

`luna://com.webos.service.terminalmanager/getRS232Control`

Returns the RS 232 control.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `rs232control` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/getRS232Control '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="printmessage"></a>
## `printMessage`

`luna://com.webos.service.terminalmanager/printMessage`

Prints the message.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/printMessage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setattr"></a>
## `setAttr`

`luna://com.webos.service.terminalmanager/setAttr`

Sets the attr.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/setAttr '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setattroneshot"></a>
## `setAttrOneShot`

`luna://com.webos.service.terminalmanager/setAttrOneShot`

Sets the attr one shot.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/setAttrOneShot '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setbaudrate"></a>
## `setBaudRate`

`luna://com.webos.service.terminalmanager/setBaudRate`

Sets the baud rate.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/setBaudRate '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setrs232control"></a>
## `setRS232Control`

`luna://com.webos.service.terminalmanager/setRS232Control`

Sets the RS 232 control.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/setRS232Control '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="svcoutput"></a>
## `svcOutput`

`luna://com.webos.service.terminalmanager/svcOutput`

Handles the svc output.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.terminalmanager/svcOutput '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
