# `com.webos.service.nlp`

14 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`cancel`](#cancel) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`getNlpStatus`](#getnlpstatus) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`getSttStatus`](#getsttstatus) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`getTipsCategory`](#gettipscategory) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`requestCancel`](#requestcancel) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`requestStt`](#requeststt) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`selectSttResult`](#selectsttresult) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`startNlp`](#startnlp) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`startNlpText`](#startnlptext) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`startSearch`](#startsearch) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`startSearchMore`](#startsearchmore) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`startStt`](#startstt) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`startTips`](#starttips) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |
| [`withdraw`](#withdraw) | private |  | input | Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented). |

<a id="cancel"></a>
## `cancel`

`luna://com.webos.service.nlp/cancel`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/cancel '{}'
```

> ACG groups: nlp.action, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getnlpstatus"></a>
## `getNlpStatus`

`luna://com.webos.service.nlp/getNlpStatus`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/getNlpStatus '{}'
```

> ACG groups: nlp.read, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getsttstatus"></a>
## `getSttStatus`

`luna://com.webos.service.nlp/getSttStatus`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/getSttStatus '{}'
```

> ACG groups: nlp.read, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="gettipscategory"></a>
## `getTipsCategory`

`luna://com.webos.service.nlp/getTipsCategory`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/getTipsCategory '{}'
```

> ACG groups: nlp.read, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requestcancel"></a>
## `requestCancel`

`luna://com.webos.service.nlp/requestCancel`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/requestCancel '{}'
```

> ACG groups: nlp.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="requeststt"></a>
## `requestStt`

`luna://com.webos.service.nlp/requestStt`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/requestStt '{}'
```

> ACG groups: nlp.action, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="selectsttresult"></a>
## `selectSttResult`

`luna://com.webos.service.nlp/selectSttResult`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/selectSttResult '{}'
```

> ACG groups: nlp.action, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startnlp"></a>
## `startNlp`

`luna://com.webos.service.nlp/startNlp`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/startNlp '{}'
```

> ACG groups: nlp.action, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startnlptext"></a>
## `startNlpText`

`luna://com.webos.service.nlp/startNlpText`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/startNlpText '{}'
```

> ACG groups: nlp.action, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startsearch"></a>
## `startSearch`

`luna://com.webos.service.nlp/startSearch`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/startSearch '{}'
```

> ACG groups: nlp.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startsearchmore"></a>
## `startSearchMore`

`luna://com.webos.service.nlp/startSearchMore`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/startSearchMore '{}'
```

> ACG groups: nlp.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="startstt"></a>
## `startStt`

`luna://com.webos.service.nlp/startStt`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/startStt '{}'
```

> ACG groups: nlp.action, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="starttips"></a>
## `startTips`

`luna://com.webos.service.nlp/startTips`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/startTips '{}'
```

> ACG groups: nlp.action, private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="withdraw"></a>
## `withdraw`

`luna://com.webos.service.nlp/withdraw`

Method on com.webos.service.nlp (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nlp/withdraw '{}'
```

> ACG groups: activities.callbacks, configurator.callbacks, nlp.action, private, services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
