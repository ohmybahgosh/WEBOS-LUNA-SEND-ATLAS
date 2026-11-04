# `com.webos.service.nop`

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`addNopTimer`](#addnoptimer) | private |  | input | Method on com.webos.service.nop (introspected on-device; parameters undocumented). |
| [`getInformation`](#getinformation) | private |  | misc | Getter on com.webos.service.nop (introspected on-device; parameters undocumented). |
| [`getTimerInfo`](#gettimerinfo) | private |  | input | Getter on com.webos.service.nop (introspected on-device; parameters undocumented). |
| [`notifyExpireTimer`](#notifyexpiretimer) | private |  | input | Method on com.webos.service.nop (introspected on-device; parameters undocumented). |
| [`removeNopTimer`](#removenoptimer) | private |  | input | Method on com.webos.service.nop (introspected on-device; parameters undocumented). ⚠️ |

<a id="addnoptimer"></a>
## `addNopTimer`

`luna://com.webos.service.nop/addNopTimer`

Method on com.webos.service.nop (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nop/addNopTimer '{}'
```

> ACG groups: private, nop.control, applications.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getinformation"></a>
## `getInformation`

`luna://com.webos.service.nop/getInformation`

Getter on com.webos.service.nop (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nop/getInformation '{}'
```

> ACG groups: private, nop.control, applications.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettimerinfo"></a>
## `getTimerInfo`

`luna://com.webos.service.nop/getTimerInfo`

Getter on com.webos.service.nop (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nop/getTimerInfo '{}'
```

> ACG groups: private, nop.control, applications.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="notifyexpiretimer"></a>
## `notifyExpireTimer`

`luna://com.webos.service.nop/notifyExpireTimer`

Method on com.webos.service.nop (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nop/notifyExpireTimer '{}'
```

> ACG groups: private, nop.control, applications.internal, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="removenoptimer"></a>
## `removeNopTimer` ⚠️ DANGEROUS

`luna://com.webos.service.nop/removeNopTimer`

Method on com.webos.service.nop (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nop/removeNopTimer '{}'
```

> ACG groups: private, nop.control, applications.internal, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
