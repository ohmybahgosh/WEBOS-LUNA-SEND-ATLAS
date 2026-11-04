# `com.webos.service.oledepl`

23 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getEplStatus`](#geteplstatus) | public |  | display | Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`getFixedOSDResult`](#getfixedosdresult) | public |  | display | Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`getGlobalStressReduction`](#getglobalstressreduction) | private |  | display | OLED care read-only query |
| [`getOledPanelUTT`](#getoledpanelutt) | private |  | display | OLED care read-only query |
| [`getPanelTemperature`](#getpaneltemperature) | private |  | display | OLED care read-only query |
| [`getPcScreenSaverResponse`](#getpcscreensaverresponse) | public |  | display | Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`getPixelRefresherInfoList`](#getpixelrefresherinfolist) | private |  | display | OLED care read-only query |
| [`getPixelRefresherMode`](#getpixelrefreshermode) | public |  | display | Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`getStraStatus`](#getstrastatus) | public |  | display | Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`getTemporalPeakControl`](#gettemporalpeakcontrol) | public |  | display | Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`isPixelRefresherCondition`](#ispixelrefreshercondition) | private |  | display | Queries OLED pixel refresher condition (used by home-chooser e2e to check panel state) |
| [`notifyPopupClosed`](#notifypopupclosed) | public |  | display | Method on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`playMusicPixelRefresher`](#playmusicpixelrefresher) | public |  | display | Method on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`restoreEplCondition`](#restoreeplcondition) | public |  | display | Method on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`setEplAppInfo`](#seteplappinfo) | public |  | display | Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`setEplCtrl`](#seteplctrl) | public |  | display | Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`setGlobalStressReduction`](#setglobalstressreduction) | private |  | display | Toggles OLED GSR (In-Start service menu option) ⚠️ |
| [`setPcScreenSaverResponse`](#setpcscreensaverresponse) | public |  | display | Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`setPixelRefresherInfoList`](#setpixelrefresherinfolist) | public |  | display | Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`setPixelRefresherMode`](#setpixelrefreshermode) | public |  | display | Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`setTemporalPeakControl`](#settemporalpeakcontrol) | private |  | display | Toggles OLED TPC (In-Start service menu option) ⚠️ |
| [`setTurnOnAoD`](#setturnonaod) | public |  | display | Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented). |
| [`testForQ`](#testforq) | public |  | display | Method on com.webos.service.oledepl (introspected on-device; parameters undocumented). |

<a id="geteplstatus"></a>
## `getEplStatus`

`luna://com.webos.service.oledepl/getEplStatus`

Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/getEplStatus '{}'
```

> ACG groups: private, all, public. Example reply (W22O 7.0): {"subscribed":false,"returnValue":true,"status":true}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfixedosdresult"></a>
## `getFixedOSDResult`

`luna://com.webos.service.oledepl/getFixedOSDResult`

Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/getFixedOSDResult '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getglobalstressreduction"></a>
## `getGlobalStressReduction`

`luna://com.webos.service.oledepl/getGlobalStressReduction`

OLED care read-only query

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** OLED  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.oledepl/getGlobalStressReduction '{}'
```

Sources: [1](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="getoledpanelutt"></a>
## `getOledPanelUTT`

`luna://com.webos.service.oledepl/getOledPanelUTT`

OLED care read-only query

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** OLED  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.oledepl/getOledPanelUTT '{}'
```

Sources: [1](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="getpaneltemperature"></a>
## `getPanelTemperature`

`luna://com.webos.service.oledepl/getPanelTemperature`

OLED care read-only query

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** OLED  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.oledepl/getPanelTemperature '{}'
```

Sources: [1](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="getpcscreensaverresponse"></a>
## `getPcScreenSaverResponse`

`luna://com.webos.service.oledepl/getPcScreenSaverResponse`

Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/getPcScreenSaverResponse '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getpixelrefresherinfolist"></a>
## `getPixelRefresherInfoList`

`luna://com.webos.service.oledepl/getPixelRefresherInfoList`

OLED care read-only query

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** OLED  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.oledepl/getPixelRefresherInfoList '{}'
```

Sources: [1](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="getpixelrefreshermode"></a>
## `getPixelRefresherMode`

`luna://com.webos.service.oledepl/getPixelRefresherMode`

Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/getPixelRefresherMode '{}'
```

> ACG groups: private, all, public. Example reply (W22O 7.0): {"subscribed":false,"returnValue":true,"mode":"auto","onPlayMusicKeyLock":false}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstrastatus"></a>
## `getStraStatus`

`luna://com.webos.service.oledepl/getStraStatus`

Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/getStraStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettemporalpeakcontrol"></a>
## `getTemporalPeakControl`

`luna://com.webos.service.oledepl/getTemporalPeakControl`

Getter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/getTemporalPeakControl '{}'
```

> ACG groups: private, all, public. Example reply (W22O 7.0): {"subscribed":false,"returnValue":true,"enable":true}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="ispixelrefreshercondition"></a>
## `isPixelRefresherCondition`

`luna://com.webos.service.oledepl/isPixelRefresherCondition`

Queries OLED pixel refresher condition (used by home-chooser e2e to check panel state)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** code

```sh
luna-send -n 1 luna://com.webos.service.oledepl/isPixelRefresherCondition '{}'
```

Sources: [1](https://github.com/webosbrew/home-chooser/blob/main/e2e/hc_e2e/steps/screen.py)

<a id="notifypopupclosed"></a>
## `notifyPopupClosed`

`luna://com.webos.service.oledepl/notifyPopupClosed`

Method on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/notifyPopupClosed '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="playmusicpixelrefresher"></a>
## `playMusicPixelRefresher`

`luna://com.webos.service.oledepl/playMusicPixelRefresher`

Method on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/playMusicPixelRefresher '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="restoreeplcondition"></a>
## `restoreEplCondition`

`luna://com.webos.service.oledepl/restoreEplCondition`

Method on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/restoreEplCondition '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="seteplappinfo"></a>
## `setEplAppInfo`

`luna://com.webos.service.oledepl/setEplAppInfo`

Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/setEplAppInfo '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="seteplctrl"></a>
## `setEplCtrl`

`luna://com.webos.service.oledepl/setEplCtrl`

Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/setEplCtrl '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setglobalstressreduction"></a>
## `setGlobalStressReduction` ⚠️ DANGEROUS

`luna://com.webos.service.oledepl/setGlobalStressReduction`

Toggles OLED GSR (In-Start service menu option)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** OLED  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `enable` | boolean |

```sh
luna-send -n 1 luna://com.webos.service.oledepl/setGlobalStressReduction '{"enable":true}'
```

> Overglass advises never calling oledepl setters. \|\| LGTV Companion: -servicemenu_gsr_enable/-servicemenu_gsr_disable. Affects OLED panel protection. Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [2](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [3](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md), [4](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [5](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [6](https://github.com/JPersson77/LGTVCompanion/blob/master/LGTV%20Companion%20Service/companion.cpp)

<a id="setpcscreensaverresponse"></a>
## `setPcScreenSaverResponse`

`luna://com.webos.service.oledepl/setPcScreenSaverResponse`

Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/setPcScreenSaverResponse '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpixelrefresherinfolist"></a>
## `setPixelRefresherInfoList`

`luna://com.webos.service.oledepl/setPixelRefresherInfoList`

Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/setPixelRefresherInfoList '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpixelrefreshermode"></a>
## `setPixelRefresherMode`

`luna://com.webos.service.oledepl/setPixelRefresherMode`

Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/setPixelRefresherMode '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="settemporalpeakcontrol"></a>
## `setTemporalPeakControl` ⚠️ DANGEROUS

`luna://com.webos.service.oledepl/setTemporalPeakControl`

Toggles OLED TPC (In-Start service menu option)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** OLED  
- **Confidence:** code

| Param | Type / notes |
|---|---|
| `enable` | boolean |

```sh
luna-send -n 1 luna://com.webos.service.oledepl/setTemporalPeakControl '{"enable":true}'
```

> Overglass advises never calling oledepl setters. \|\| LGTV Companion: -servicemenu_tpc_enable/-servicemenu_tpc_disable. Affects OLED panel protection (disabling may increase burn-in risk). Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [2](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [3](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md), [4](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [5](https://github.com/JPersson77/LGTVCompanion/blob/master/Common/lg_api.h), [6](https://github.com/JPersson77/LGTVCompanion/blob/master/LGTV%20Companion%20Service/companion.cpp)

<a id="setturnonaod"></a>
## `setTurnOnAoD`

`luna://com.webos.service.oledepl/setTurnOnAoD`

Setter on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/setTurnOnAoD '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testforq"></a>
## `testForQ`

`luna://com.webos.service.oledepl/testForQ`

Method on com.webos.service.oledepl (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/testForQ '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
