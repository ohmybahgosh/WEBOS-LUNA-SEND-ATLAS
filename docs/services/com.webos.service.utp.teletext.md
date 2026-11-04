# `com.webos.service.utp.teletext`

10 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`disableTeletextPes`](#disableteletextpes) | private |  | misc | Method on com.webos.service.utp.teletext (introspected on-device; parameters undocumented). |
| [`enableTeletext`](#enableteletext) | public |  | misc | Method on com.webos.service.utp.teletext (from on-device permission registry; parameters undocumented). |
| [`enableTeletextPes`](#enableteletextpes) | private |  | misc | Method on com.webos.service.utp.teletext (introspected on-device; parameters undocumented). |
| [`getCurrentTeletext`](#getcurrentteletext) | public |  | misc | Method on com.webos.service.utp.teletext (from on-device permission registry; parameters undocumented). |
| [`getTeletextData`](#getteletextdata) | private |  | misc | Getter on com.webos.service.utp.teletext (introspected on-device; parameters undocumented). |
| [`getTeletextInfo`](#getteletextinfo) | private |  | misc | Getter on com.webos.service.utp.teletext (introspected on-device; parameters undocumented). |
| [`getTeletextList`](#getteletextlist) | public |  | misc | Getter on com.webos.service.utp.teletext (introspected on-device; parameters undocumented). |
| [`getTeletextState`](#getteletextstate) | public |  | misc | Getter on com.webos.service.utp.teletext (introspected on-device; parameters undocumented). |
| [`isTimeAvailable`](#istimeavailable) | public |  | input | Method on com.webos.service.utp.teletext (from on-device permission registry; parameters undocumented). |
| [`setTeletext`](#setteletext) | public |  | misc | Method on com.webos.service.utp.teletext (from on-device permission registry; parameters undocumented). |

<a id="disableteletextpes"></a>
## `disableTeletextPes`

`luna://com.webos.service.utp.teletext/disableTeletextPes`

Method on com.webos.service.utp.teletext (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.teletext/disableTeletextPes '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enableteletext"></a>
## `enableTeletext`

`luna://com.webos.service.utp.teletext/enableTeletext`

Method on com.webos.service.utp.teletext (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.teletext/enableTeletext '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="enableteletextpes"></a>
## `enableTeletextPes`

`luna://com.webos.service.utp.teletext/enableTeletextPes`

Method on com.webos.service.utp.teletext (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.teletext/enableTeletextPes '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentteletext"></a>
## `getCurrentTeletext`

`luna://com.webos.service.utp.teletext/getCurrentTeletext`

Method on com.webos.service.utp.teletext (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.teletext/getCurrentTeletext '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getteletextdata"></a>
## `getTeletextData`

`luna://com.webos.service.utp.teletext/getTeletextData`

Getter on com.webos.service.utp.teletext (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.teletext/getTeletextData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextinfo"></a>
## `getTeletextInfo`

`luna://com.webos.service.utp.teletext/getTeletextInfo`

Getter on com.webos.service.utp.teletext (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.teletext/getTeletextInfo '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextlist"></a>
## `getTeletextList`

`luna://com.webos.service.utp.teletext/getTeletextList`

Getter on com.webos.service.utp.teletext (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.teletext/getTeletextList '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getteletextstate"></a>
## `getTeletextState`

`luna://com.webos.service.utp.teletext/getTeletextState`

Getter on com.webos.service.utp.teletext (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.teletext/getTeletextState '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="istimeavailable"></a>
## `isTimeAvailable`

`luna://com.webos.service.utp.teletext/isTimeAvailable`

Method on com.webos.service.utp.teletext (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.teletext/isTimeAvailable '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="setteletext"></a>
## `setTeletext`

`luna://com.webos.service.utp.teletext/setTeletext`

Method on com.webos.service.utp.teletext (from on-device permission registry; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.teletext/setTeletext '{}'
```

> ACG groups: private, public. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
