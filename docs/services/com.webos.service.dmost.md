# `com.webos.service.dmost`

Appears to manage LG Channels / Channel Plus free streaming: reports broadcast and channel state, enables/disables Channel Plus, handles the home app and screensaver, and checks country/lock support. _(inferred from the service's methods)_

29 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`call`](#call) | private |  | media | inferred | Calls the dmost. |
| [`changeDmostState`](#changedmoststate) | private |  | media | inferred | Changes the dmost state. |
| [`disableChannelPlus`](#disablechannelplus) | public |  | media | inferred | Disables the channel plus. |
| [`disableLGchannelsByHome`](#disablelgchannelsbyhome) | private |  | media | inferred | Disables the l gchannels by home. |
| [`enableChannelPlus`](#enablechannelplus) | public |  | media | inferred | Enables the channel plus. |
| [`getBroadcastState`](#getbroadcaststate) | private |  | security | inferred | Returns the broadcast state. |
| [`getCdpBeaconInfo`](#getcdpbeaconinfo) | private |  | media | inferred | Returns the cdp beacon info. |
| [`getChannel`](#getchannel) | private |  | media | inferred | Returns the channel. |
| [`getChannelChangeResult`](#getchannelchangeresult) | private |  | media | inferred | Returns the channel change result. |
| [`getChannelState`](#getchannelstate) | private |  | media | inferred | Returns the channel state. |
| [`getClientMacInfo`](#getclientmacinfo) | public |  | media | inferred | Returns the client MAC info. |
| [`getDmostScreenSaverResponse`](#getdmostscreensaverresponse) | private |  | media | inferred | Returns the dmost screen saver response. |
| [`getDmostState`](#getdmoststate) | private |  | media | inferred | Returns the dmost state. |
| [`getHomeAppId`](#gethomeappid) | private |  | media | inferred | Returns the home app ID. |
| [`isChannelPlusEnabled`](#ischannelplusenabled) | public |  | media | inferred | Reports whether the channel plus enabled is set. |
| [`isSupportedCountry`](#issupportedcountry) | private |  | media | inferred | Reports whether the supported country is set. |
| [`isSystemLocked`](#issystemlocked) | public |  | media | inferred | Reports whether the system locked is set. |
| [`launchHomeApplication`](#launchhomeapplication) | private |  | apps | inferred | Launches the home application. |
| [`loadData`](#loaddata) | public |  | media | inferred | Loads the data. |
| [`reportLiveDmostError`](#reportlivedmosterror) | private |  | media | inferred | Reports the live dmost error. |
| [`saveData`](#savedata) | public |  | media | inferred | Saves the data. |
| [`setChannel`](#setchannel) | private |  | media | inferred | Sets the channel. |
| [`setDmostScreenSaverResponse`](#setdmostscreensaverresponse) | private |  | media | inferred | Sets the dmost screen saver response. |
| [`setPlayerState`](#setplayerstate) | private |  | media | inferred | Sets the player state. |
| [`setSink`](#setsink) | private |  | media | inferred | Sets the sink. |
| [`startService`](#startservice) | public |  | media | inferred | Starts the service. |
| [`stopChannel`](#stopchannel) | private |  | media | inferred | Stops the channel. |
| [`subscribe`](#subscribe) | private |  | media | inferred | Subscribes to the dmost. |
| [`unsubscribe`](#unsubscribe) | private |  | media | inferred | Unsubscribes from the dmost. |

<a id="call"></a>
## `call`

`luna://com.webos.service.dmost/call`

Calls the dmost.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/call '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="changedmoststate"></a>
## `changeDmostState`

`luna://com.webos.service.dmost/changeDmostState`

Changes the dmost state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/changeDmostState '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disablechannelplus"></a>
## `disableChannelPlus`

`luna://com.webos.service.dmost/disableChannelPlus`

Disables the channel plus.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/disableChannelPlus '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="disablelgchannelsbyhome"></a>
## `disableLGchannelsByHome`

`luna://com.webos.service.dmost/disableLGchannelsByHome`

Disables the l gchannels by home.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/disableLGchannelsByHome '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="enablechannelplus"></a>
## `enableChannelPlus`

`luna://com.webos.service.dmost/enableChannelPlus`

Enables the channel plus.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/enableChannelPlus '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getbroadcaststate"></a>
## `getBroadcastState`

`luna://com.webos.service.dmost/getBroadcastState`

Returns the broadcast state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getBroadcastState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcdpbeaconinfo"></a>
## `getCdpBeaconInfo`

`luna://com.webos.service.dmost/getCdpBeaconInfo`

Returns the cdp beacon info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getCdpBeaconInfo '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannel"></a>
## `getChannel`

`luna://com.webos.service.dmost/getChannel`

Returns the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getChannel '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelchangeresult"></a>
## `getChannelChangeResult`

`luna://com.webos.service.dmost/getChannelChangeResult`

Returns the channel change result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getChannelChangeResult '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getchannelstate"></a>
## `getChannelState`

`luna://com.webos.service.dmost/getChannelState`

Returns the channel state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getChannelState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getclientmacinfo"></a>
## `getClientMacInfo`

`luna://com.webos.service.dmost/getClientMacInfo`

Returns the client MAC info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getClientMacInfo '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdmostscreensaverresponse"></a>
## `getDmostScreenSaverResponse`

`luna://com.webos.service.dmost/getDmostScreenSaverResponse`

Returns the dmost screen saver response.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getDmostScreenSaverResponse '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdmoststate"></a>
## `getDmostState`

`luna://com.webos.service.dmost/getDmostState`

Returns the dmost state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getDmostState '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gethomeappid"></a>
## `getHomeAppId`

`luna://com.webos.service.dmost/getHomeAppId`

Returns the home app ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/getHomeAppId '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ischannelplusenabled"></a>
## `isChannelPlusEnabled`

`luna://com.webos.service.dmost/isChannelPlusEnabled`

Reports whether the channel plus enabled is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/isChannelPlusEnabled '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="issupportedcountry"></a>
## `isSupportedCountry`

`luna://com.webos.service.dmost/isSupportedCountry`

Reports whether the supported country is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/isSupportedCountry '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="issystemlocked"></a>
## `isSystemLocked`

`luna://com.webos.service.dmost/isSystemLocked`

Reports whether the system locked is set.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/isSystemLocked '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="launchhomeapplication"></a>
## `launchHomeApplication`

`luna://com.webos.service.dmost/launchHomeApplication`

Launches the home application.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/launchHomeApplication '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="loaddata"></a>
## `loadData`

`luna://com.webos.service.dmost/loadData`

Loads the data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/loadData '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="reportlivedmosterror"></a>
## `reportLiveDmostError`

`luna://com.webos.service.dmost/reportLiveDmostError`

Reports the live dmost error.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/reportLiveDmostError '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="savedata"></a>
## `saveData`

`luna://com.webos.service.dmost/saveData`

Saves the data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/saveData '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setchannel"></a>
## `setChannel`

`luna://com.webos.service.dmost/setChannel`

Sets the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/setChannel '{}'
```

> ACG groups: private, all, dmost.provide, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdmostscreensaverresponse"></a>
## `setDmostScreenSaverResponse`

`luna://com.webos.service.dmost/setDmostScreenSaverResponse`

Sets the dmost screen saver response.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/setDmostScreenSaverResponse '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setplayerstate"></a>
## `setPlayerState`

`luna://com.webos.service.dmost/setPlayerState`

Sets the player state.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/setPlayerState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setsink"></a>
## `setSink`

`luna://com.webos.service.dmost/setSink`

Sets the sink.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/setSink '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="startservice"></a>
## `startService`

`luna://com.webos.service.dmost/startService`

Starts the service.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/startService '{}'
```

> ACG groups: private, all, public, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopchannel"></a>
## `stopChannel`

`luna://com.webos.service.dmost/stopChannel`

Stops the channel.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/stopChannel '{}'
```

> ACG groups: private, all, dmost.provide, tv.services.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="subscribe"></a>
## `subscribe`

`luna://com.webos.service.dmost/subscribe`

Subscribes to the dmost.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/subscribe '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="unsubscribe"></a>
## `unsubscribe`

`luna://com.webos.service.dmost/unsubscribe`

Unsubscribes from the dmost.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.dmost/unsubscribe '{}'
```

> ACG groups: private, all, dmost.provide.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
