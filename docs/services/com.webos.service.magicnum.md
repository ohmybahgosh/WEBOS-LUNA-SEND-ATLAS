# `com.webos.service.magicnum`

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`checkApp`](#checkapp) | public |  | misc | Method on com.webos.service.magicnum (from on-device permission registry; parameters undocumented). |
| [`checkChannel`](#checkchannel) | public |  | misc | Method on com.webos.service.magicnum (introspected on-device; parameters undocumented). |
| [`checkLauncher`](#checklauncher) | private |  | apps | Method on com.webos.service.magicnum (introspected on-device; parameters undocumented). |
| [`info`](#info) | private |  | misc | Method on com.webos.service.magicnum (introspected on-device; parameters undocumented). |
| [`quit`](#quit) | private |  | misc | Method on com.webos.service.magicnum (introspected on-device; parameters undocumented). |
| [`setCountry`](#setcountry) | private |  | misc | Setter on com.webos.service.magicnum (introspected on-device; parameters undocumented). ⚠️ |

<a id="checkapp"></a>
## `checkApp`

`luna://com.webos.service.magicnum/checkApp`

Method on com.webos.service.magicnum (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/checkApp '{}'
```

> ACG groups: configurator.callbacks, magicnum.action, private, public, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkchannel"></a>
## `checkChannel`

`luna://com.webos.service.magicnum/checkChannel`

Method on com.webos.service.magicnum (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/checkChannel '{}'
```

> ACG groups: public, magicnum.action, private, configurator.callbacks, service.magicnum, all, activities.callbacks, services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="checklauncher"></a>
## `checkLauncher`

`luna://com.webos.service.magicnum/checkLauncher`

Method on com.webos.service.magicnum (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/checkLauncher '{}'
```

> ACG groups: configurator.callbacks, service.magicnum, all, activities.callbacks.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="info"></a>
## `info`

`luna://com.webos.service.magicnum/info`

Method on com.webos.service.magicnum (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/info '{}'
```

> ACG groups: magicnum.action, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="quit"></a>
## `quit`

`luna://com.webos.service.magicnum/quit`

Method on com.webos.service.magicnum (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/quit '{}'
```

> ACG groups: magicnum.action, private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setcountry"></a>
## `setCountry` ⚠️ DANGEROUS

`luna://com.webos.service.magicnum/setCountry`

Setter on com.webos.service.magicnum (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.magicnum/setCountry '{}'
```

> ACG groups: configurator.callbacks, service.magicnum, all, activities.callbacks. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
