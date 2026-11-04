# `com.webos.service.dial`

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`heartbeat/notifyNamedSocket`](#heartbeat_notifynamedsocket) | private |  | misc | Method on com.webos.service.dial (introspected on-device; parameters undocumented). |
| [`heartbeat/ping`](#heartbeat_ping) | private |  | misc | Method on com.webos.service.dial (introspected on-device; parameters undocumented). |
| [`info`](#info) | public |  | misc | Method on com.webos.service.dial (introspected on-device; parameters undocumented). |
| [`quit`](#quit) | public |  | misc | Method on com.webos.service.dial (introspected on-device; parameters undocumented). |
| [`start`](#start) | public |  | misc | Method on com.webos.service.dial (from on-device permission registry; parameters undocumented). |
| [`wolwowlanAlert`](#wolwowlanalert) | private |  | misc | Method on com.webos.service.dial (from on-device permission registry; parameters undocumented). |

<a id="heartbeat_notifynamedsocket"></a>
## `heartbeat/notifyNamedSocket`

`luna://com.webos.service.dial/heartbeat/notifyNamedSocket`

Method on com.webos.service.dial (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dial/heartbeat/notifyNamedSocket '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="heartbeat_ping"></a>
## `heartbeat/ping`

`luna://com.webos.service.dial/heartbeat/ping`

Method on com.webos.service.dial (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dial/heartbeat/ping '{}'
```

> ACG groups: com.webos.service.dial, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.dial/info`

Method on com.webos.service.dial (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dial/info '{}'
```

> ACG groups: public, private, dial.action, networking.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.dial/quit`

Method on com.webos.service.dial (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dial/quit '{}'
```

> ACG groups: public, private, dial.action, networking.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="start"></a>
## `start`

`luna://com.webos.service.dial/start`

Method on com.webos.service.dial (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dial/start '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, dial.action, networking.internal, private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="wolwowlanalert"></a>
## `wolwowlanAlert`

`luna://com.webos.service.dial/wolwowlanAlert`

Method on com.webos.service.dial (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dial/wolwowlanAlert '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
