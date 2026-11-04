# `com.webos.service.dmost`

29 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`call`](#call) | private |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`changeDmostState`](#changedmoststate) | private |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`disableChannelPlus`](#disablechannelplus) | public |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`disableLGchannelsByHome`](#disablelgchannelsbyhome) | private |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`enableChannelPlus`](#enablechannelplus) | public |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`getBroadcastState`](#getbroadcaststate) | private |  | security | Getter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`getCdpBeaconInfo`](#getcdpbeaconinfo) | private |  | media | Getter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`getChannel`](#getchannel) | private |  | media | Getter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`getChannelChangeResult`](#getchannelchangeresult) | private |  | media | Getter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`getChannelState`](#getchannelstate) | private |  | media | Getter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`getClientMacInfo`](#getclientmacinfo) | public |  | media | Getter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`getDmostScreenSaverResponse`](#getdmostscreensaverresponse) | private |  | media | Getter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`getDmostState`](#getdmoststate) | private |  | media | Getter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`getHomeAppId`](#gethomeappid) | private |  | media | Getter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`isChannelPlusEnabled`](#ischannelplusenabled) | public |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`isSupportedCountry`](#issupportedcountry) | private |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`isSystemLocked`](#issystemlocked) | public |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`launchHomeApplication`](#launchhomeapplication) | private |  | apps | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`loadData`](#loaddata) | public |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`reportLiveDmostError`](#reportlivedmosterror) | private |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`saveData`](#savedata) | public |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`setChannel`](#setchannel) | private |  | media | Setter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`setDmostScreenSaverResponse`](#setdmostscreensaverresponse) | private |  | media | Setter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`setPlayerState`](#setplayerstate) | private |  | media | Setter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`setSink`](#setsink) | private |  | media | Setter on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`startService`](#startservice) | public |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`stopChannel`](#stopchannel) | private |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`subscribe`](#subscribe) | private |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |
| [`unsubscribe`](#unsubscribe) | private |  | media | Method on com.webos.service.dmost (introspected on-device; parameters undocumented). |

<a id="call"></a>
## `call`

`luna://com.webos.service.dmost/call`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/call '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changedmoststate"></a>
## `changeDmostState`

`luna://com.webos.service.dmost/changeDmostState`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/changeDmostState '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disablechannelplus"></a>
## `disableChannelPlus`

`luna://com.webos.service.dmost/disableChannelPlus`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/disableChannelPlus '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disablelgchannelsbyhome"></a>
## `disableLGchannelsByHome`

`luna://com.webos.service.dmost/disableLGchannelsByHome`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/disableLGchannelsByHome '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablechannelplus"></a>
## `enableChannelPlus`

`luna://com.webos.service.dmost/enableChannelPlus`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/enableChannelPlus '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcaststate"></a>
## `getBroadcastState`

`luna://com.webos.service.dmost/getBroadcastState`

Getter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getBroadcastState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcdpbeaconinfo"></a>
## `getCdpBeaconInfo`

`luna://com.webos.service.dmost/getCdpBeaconInfo`

Getter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getCdpBeaconInfo '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannel"></a>
## `getChannel`

`luna://com.webos.service.dmost/getChannel`

Getter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getChannel '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelchangeresult"></a>
## `getChannelChangeResult`

`luna://com.webos.service.dmost/getChannelChangeResult`

Getter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getChannelChangeResult '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelstate"></a>
## `getChannelState`

`luna://com.webos.service.dmost/getChannelState`

Getter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getChannelState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getclientmacinfo"></a>
## `getClientMacInfo`

`luna://com.webos.service.dmost/getClientMacInfo`

Getter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getClientMacInfo '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdmostscreensaverresponse"></a>
## `getDmostScreenSaverResponse`

`luna://com.webos.service.dmost/getDmostScreenSaverResponse`

Getter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getDmostScreenSaverResponse '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdmoststate"></a>
## `getDmostState`

`luna://com.webos.service.dmost/getDmostState`

Getter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getDmostState '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethomeappid"></a>
## `getHomeAppId`

`luna://com.webos.service.dmost/getHomeAppId`

Getter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getHomeAppId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ischannelplusenabled"></a>
## `isChannelPlusEnabled`

`luna://com.webos.service.dmost/isChannelPlusEnabled`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/isChannelPlusEnabled '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="issupportedcountry"></a>
## `isSupportedCountry`

`luna://com.webos.service.dmost/isSupportedCountry`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/isSupportedCountry '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="issystemlocked"></a>
## `isSystemLocked`

`luna://com.webos.service.dmost/isSystemLocked`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/isSystemLocked '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchhomeapplication"></a>
## `launchHomeApplication`

`luna://com.webos.service.dmost/launchHomeApplication`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/launchHomeApplication '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="loaddata"></a>
## `loadData`

`luna://com.webos.service.dmost/loadData`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/loadData '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reportlivedmosterror"></a>
## `reportLiveDmostError`

`luna://com.webos.service.dmost/reportLiveDmostError`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/reportLiveDmostError '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="savedata"></a>
## `saveData`

`luna://com.webos.service.dmost/saveData`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/saveData '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannel"></a>
## `setChannel`

`luna://com.webos.service.dmost/setChannel`

Setter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/setChannel '{}'
```

> ACG groups: private, all, dmost.provide, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdmostscreensaverresponse"></a>
## `setDmostScreenSaverResponse`

`luna://com.webos.service.dmost/setDmostScreenSaverResponse`

Setter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/setDmostScreenSaverResponse '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setplayerstate"></a>
## `setPlayerState`

`luna://com.webos.service.dmost/setPlayerState`

Setter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/setPlayerState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsink"></a>
## `setSink`

`luna://com.webos.service.dmost/setSink`

Setter on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/setSink '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startservice"></a>
## `startService`

`luna://com.webos.service.dmost/startService`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/startService '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopchannel"></a>
## `stopChannel`

`luna://com.webos.service.dmost/stopChannel`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/stopChannel '{}'
```

> ACG groups: private, all, dmost.provide, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribe"></a>
## `subscribe`

`luna://com.webos.service.dmost/subscribe`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/subscribe '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unsubscribe"></a>
## `unsubscribe`

`luna://com.webos.service.dmost/unsubscribe`

Method on com.webos.service.dmost (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/unsubscribe '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
