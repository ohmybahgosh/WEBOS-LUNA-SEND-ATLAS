# `com.webos.service.sysuicompmgr`

System-UI composition manager: launches and closes system UI views and changes the view and its state transitions. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`changeSystemUIView`](#changesystemuiview) | private |  | misc | inferred | Changes the system UI view. |
| [`changeSystemUIViewStateTransition`](#changesystemuiviewstatetransition) | private |  | misc | inferred | Changes the system UI view state transition. |
| [`close`](#close) | private |  | misc | inferred | Closes the sysuicompmgr. |
| [`launch`](#launch) | private |  | apps | inferred | Launches the sysuicompmgr. |

<a id="changesystemuiview"></a>
## `changeSystemUIView`

`luna://com.webos.service.sysuicompmgr/changeSystemUIView`

Changes the system UI view.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sysuicompmgr/changeSystemUIView '{}'
```

> ACG groups: private, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changesystemuiviewstatetransition"></a>
## `changeSystemUIViewStateTransition`

`luna://com.webos.service.sysuicompmgr/changeSystemUIViewStateTransition`

Changes the system UI view state transition.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sysuicompmgr/changeSystemUIViewStateTransition '{}'
```

> ACG groups: private, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="close"></a>
## `close`

`luna://com.webos.service.sysuicompmgr/close`

Closes the sysuicompmgr.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sysuicompmgr/close '{}'
```

> ACG groups: private, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launch"></a>
## `launch`

`luna://com.webos.service.sysuicompmgr/launch`

Launches the sysuicompmgr.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.sysuicompmgr/launch '{}'
```

> ACG groups: private, launcher.control, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
