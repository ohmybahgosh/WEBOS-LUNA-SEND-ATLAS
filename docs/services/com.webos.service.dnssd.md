# `com.webos.service.dnssd`

DNS-SD / mDNS (Avahi) service: registers and unregisters network service browse and publish entries, and reports status. _(inferred from the service's methods)_

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getStatus`](#getstatus) | private |  | misc | inferred | Returns the status. |
| [`registerAvahiBrowse`](#registeravahibrowse) | private |  | misc | inferred | Registers the avahi browse. |
| [`registerAvahiPublish`](#registeravahipublish) | private |  | misc | inferred | Registers the avahi publish. |
| [`unregisterAvahiBrowse`](#unregisteravahibrowse) | private |  | misc | inferred | Unregisters the avahi browse. |
| [`unregisterAvahiPublish`](#unregisteravahipublish) | private |  | misc | inferred | Unregisters the avahi publish. |

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.dnssd/getStatus`

Returns the status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `clientState` |  |
| `context` |  |
| `name` |  |
| `publishState` |  |
| `publishStatus` |  |
| `serviceType` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.dnssd/getStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registeravahibrowse"></a>
## `registerAvahiBrowse`

`luna://com.webos.service.dnssd/registerAvahiBrowse`

Registers the avahi browse.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dnssd/registerAvahiBrowse '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registeravahipublish"></a>
## `registerAvahiPublish`

`luna://com.webos.service.dnssd/registerAvahiPublish`

Registers the avahi publish.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dnssd/registerAvahiPublish '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unregisteravahibrowse"></a>
## `unregisterAvahiBrowse`

`luna://com.webos.service.dnssd/unregisterAvahiBrowse`

Unregisters the avahi browse.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dnssd/unregisterAvahiBrowse '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unregisteravahipublish"></a>
## `unregisterAvahiPublish`

`luna://com.webos.service.dnssd/unregisterAvahiPublish`

Unregisters the avahi publish.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dnssd/unregisterAvahiPublish '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
