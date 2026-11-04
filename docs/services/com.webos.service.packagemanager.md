# `com.webos.service.packagemanager`

6 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`closePackage`](#closepackage) | private |  | misc | Method on com.webos.service.packagemanager (introspected on-device; parameters undocumented). |
| [`getStatus`](#getstatus) | private |  | misc | Getter on com.webos.service.packagemanager (introspected on-device; parameters undocumented). |
| [`lockPackage`](#lockpackage) | private |  | misc | Method on com.webos.service.packagemanager (introspected on-device; parameters undocumented). |
| [`run`](#run) | private |  | misc | Method on com.webos.service.packagemanager (from on-device permission registry; parameters undocumented). |
| [`squashfsMount`](#squashfsmount) | private |  | misc | Method on com.webos.service.packagemanager (introspected on-device; parameters undocumented). |
| [`unlockPackage`](#unlockpackage) | private |  | misc | Method on com.webos.service.packagemanager (introspected on-device; parameters undocumented). |

<a id="closepackage"></a>
## `closePackage`

`luna://com.webos.service.packagemanager/closePackage`

Method on com.webos.service.packagemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.packagemanager/closePackage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.packagemanager/getStatus`

Getter on com.webos.service.packagemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.packagemanager/getStatus '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="lockpackage"></a>
## `lockPackage`

`luna://com.webos.service.packagemanager/lockPackage`

Method on com.webos.service.packagemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.packagemanager/lockPackage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="run"></a>
## `run`

`luna://com.webos.service.packagemanager/run`

Method on com.webos.service.packagemanager (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.packagemanager/run '{}'
```

> ACG groups: com.webos.service.packagemanager. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="squashfsmount"></a>
## `squashfsMount`

`luna://com.webos.service.packagemanager/squashfsMount`

Method on com.webos.service.packagemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.packagemanager/squashfsMount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unlockpackage"></a>
## `unlockPackage`

`luna://com.webos.service.packagemanager/unlockPackage`

Method on com.webos.service.packagemanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.packagemanager/unlockPackage '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
