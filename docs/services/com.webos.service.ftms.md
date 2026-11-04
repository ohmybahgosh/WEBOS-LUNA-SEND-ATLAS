# `com.webos.service.ftms`

9 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`appendBlockedDeviceList`](#appendblockeddevicelist) | private |  | db | Method on com.webos.service.ftms (introspected on-device; parameters undocumented). |
| [`clearScanFilter`](#clearscanfilter) | private |  | misc | Method on com.webos.service.ftms (from on-device permission registry; parameters undocumented). |
| [`connect`](#connect) | private |  | misc | Method on com.webos.service.ftms (introspected on-device; parameters undocumented). |
| [`createPopup`](#createpopup) | private |  | misc | Method on com.webos.service.ftms (introspected on-device; parameters undocumented). |
| [`debug`](#debug) | private |  | misc | Method on com.webos.service.ftms (introspected on-device; parameters undocumented). |
| [`getStatus`](#getstatus) | private |  | misc | Getter on com.webos.service.ftms (introspected on-device; parameters undocumented). |
| [`getWorkoutData`](#getworkoutdata) | private |  | misc | Getter on com.webos.service.ftms (introspected on-device; parameters undocumented). |
| [`removeBlockedDeviceList`](#removeblockeddevicelist) | private |  | misc | Method on com.webos.service.ftms (introspected on-device; parameters undocumented). ⚠️ |
| [`saveWorkoutData`](#saveworkoutdata) | private |  | misc | Method on com.webos.service.ftms (from on-device permission registry; parameters undocumented). |

<a id="appendblockeddevicelist"></a>
## `appendBlockedDeviceList`

`luna://com.webos.service.ftms/appendBlockedDeviceList`

Method on com.webos.service.ftms (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ftms/appendBlockedDeviceList '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="clearscanfilter"></a>
## `clearScanFilter`

`luna://com.webos.service.ftms/clearScanFilter`

Method on com.webos.service.ftms (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ftms/clearScanFilter '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="connect"></a>
## `connect`

`luna://com.webos.service.ftms/connect`

Method on com.webos.service.ftms (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ftms/connect '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="createpopup"></a>
## `createPopup`

`luna://com.webos.service.ftms/createPopup`

Method on com.webos.service.ftms (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ftms/createPopup '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="debug"></a>
## `debug`

`luna://com.webos.service.ftms/debug`

Method on com.webos.service.ftms (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ftms/debug '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstatus"></a>
## `getStatus`

`luna://com.webos.service.ftms/getStatus`

Getter on com.webos.service.ftms (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ftms/getStatus '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getworkoutdata"></a>
## `getWorkoutData`

`luna://com.webos.service.ftms/getWorkoutData`

Getter on com.webos.service.ftms (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ftms/getWorkoutData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removeblockeddevicelist"></a>
## `removeBlockedDeviceList` ⚠️ DANGEROUS

`luna://com.webos.service.ftms/removeBlockedDeviceList`

Method on com.webos.service.ftms (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ftms/removeBlockedDeviceList '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="saveworkoutdata"></a>
## `saveWorkoutData`

`luna://com.webos.service.ftms/saveWorkoutData`

Method on com.webos.service.ftms (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.ftms/saveWorkoutData '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
