# `com.webos.service.servicemanager`

Service manager: launches and closes prerequisite services, sets and reads their priority levels, and reports status. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`closePrerequisiteServices`](#closeprerequisiteservices) | private |  | misc | inferred | Closes the prerequisite services. |
| [`getPriorityLevel`](#getprioritylevel) | private |  | misc | inferred | Returns the priority level. |
| [`launchPrerequisiteServices`](#launchprerequisiteservices) | private |  | apps | inferred | Launches the prerequisite services. |
| [`setPriorityLevel`](#setprioritylevel) | private |  | misc | inferred | Sets the priority level. |
| [`status`](#status) | private |  | misc | inferred | Handles the status. |

<a id="closeprerequisiteservices"></a>
## `closePrerequisiteServices`

`luna://com.webos.service.servicemanager/closePrerequisiteServices`

Closes the prerequisite services.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.servicemanager/closePrerequisiteServices '{}'
```

> ACG groups: servicemanager.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getprioritylevel"></a>
## `getPriorityLevel`

`luna://com.webos.service.servicemanager/getPriorityLevel`

Returns the priority level.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.servicemanager/getPriorityLevel '{}'
```

> ACG groups: servicemanager.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchprerequisiteservices"></a>
## `launchPrerequisiteServices`

`luna://com.webos.service.servicemanager/launchPrerequisiteServices`

Launches the prerequisite services.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.servicemanager/launchPrerequisiteServices '{}'
```

> ACG groups: servicemanager.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setprioritylevel"></a>
## `setPriorityLevel`

`luna://com.webos.service.servicemanager/setPriorityLevel`

Sets the priority level.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.servicemanager/setPriorityLevel '{}'
```

> ACG groups: servicemanager.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="status"></a>
## `status`

`luna://com.webos.service.servicemanager/status`

Handles the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.servicemanager/status '{}'
```

> ACG groups: servicemanager.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
