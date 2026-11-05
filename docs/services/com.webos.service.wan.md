# `com.webos.service.wan`

WAN/cellular data service: connects and disconnects data contexts, sets host routes, and reports connection status. _(inferred from the service's methods)_

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`connect`](#connect) | public |  | network | inferred | Connects the wan. |
| [`disconnect`](#disconnect) | public |  | network | inferred | Disconnects the wan. |
| [`getContext`](#getcontext) | public |  | network | inferred | Returns the context. |
| [`getContexts`](#getcontexts) | public |  | network | inferred | Returns the contexts. |
| [`getStatus`](#getstatus) | public |  | network | inferred | Returns the status. |
| [`setHostRoutes`](#sethostroutes) | public |  | network | inferred | Sets the host routes. |

<a id="connect"></a>
## `connect`

`luna://com.webos.service.wan/connect`

Connects the wan.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wan/connect '{}'
```

> ACG groups: networking, public, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disconnect"></a>
## `disconnect`

`luna://com.webos.service.wan/disconnect`

Disconnects the wan.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wan/disconnect '{}'
```

> ACG groups: networking, public, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcontext"></a>
## `getContext`

`luna://com.webos.service.wan/getContext`

Returns the context.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wan/getContext '{}'
```

> ACG groups: networking, public, private, all, networking.query, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcontexts"></a>
## `getContexts`

`luna://com.webos.service.wan/getContexts`

Returns the contexts.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wan/getContexts '{}'
```

> ACG groups: networking, public, private, all, networking.query, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.wan/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wan/getStatus '{}'
```

> ACG groups: networking, public, private, all, networking.query, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="sethostroutes"></a>
## `setHostRoutes`

`luna://com.webos.service.wan/setHostRoutes`

Sets the host routes.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.wan/setHostRoutes '{}'
```

> ACG groups: networking, public, private, all, networking.internal.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
