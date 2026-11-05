# `com.webos.service.oledepl`

OLED panel-protection service (extended panel life): runs the pixel refresher, reports panel temperature and refresher status, and manages global stress reduction, temporal peak control and screensaver response. _(inferred from the service's methods)_

23 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`getEplStatus`](#geteplstatus) | public |  | display | inferred | Returns the epl status. |
| [`getFixedOSDResult`](#getfixedosdresult) | public |  | display | inferred | Returns the fixed OSD result. |
| [`getGlobalStressReduction`](#getglobalstressreduction) | private |  | display | documented | OLED care read-only query |
| [`getOledPanelUTT`](#getoledpanelutt) | private |  | display | documented | OLED care read-only query |
| [`getPanelTemperature`](#getpaneltemperature) | private |  | display | documented | OLED care read-only query |
| [`getPcScreenSaverResponse`](#getpcscreensaverresponse) | public |  | display | inferred | Returns the pc screen saver response. |
| [`getPixelRefresherInfoList`](#getpixelrefresherinfolist) | private |  | display | documented | OLED care read-only query |
| [`getPixelRefresherMode`](#getpixelrefreshermode) | public |  | display | inferred | Returns the pixel refresher mode. |
| [`getStraStatus`](#getstrastatus) | public |  | display | inferred | Returns the stra status. |
| [`getTemporalPeakControl`](#gettemporalpeakcontrol) | public |  | display | inferred | Returns the temporal peak control. |
| [`isPixelRefresherCondition`](#ispixelrefreshercondition) | private |  | display | documented | Queries OLED pixel refresher condition (used by home-chooser e2e to check panel state) |
| [`notifyPopupClosed`](#notifypopupclosed) | public |  | display | inferred | Notifies of the popup closed. |
| [`playMusicPixelRefresher`](#playmusicpixelrefresher) | public |  | display | inferred | Plays the music pixel refresher. |
| [`restoreEplCondition`](#restoreeplcondition) | public |  | display | inferred | Restores the epl condition. |
| [`setEplAppInfo`](#seteplappinfo) | public |  | display | inferred | Sets the epl app info. |
| [`setEplCtrl`](#seteplctrl) | public |  | display | inferred | Sets the epl ctrl. |
| [`setGlobalStressReduction`](#setglobalstressreduction) | private |  | display | documented | Toggles OLED GSR (In-Start service menu option) ⚠️ |
| [`setPcScreenSaverResponse`](#setpcscreensaverresponse) | public |  | display | inferred | Sets the pc screen saver response. |
| [`setPixelRefresherInfoList`](#setpixelrefresherinfolist) | public |  | display | inferred | Sets the pixel refresher info list. |
| [`setPixelRefresherMode`](#setpixelrefreshermode) | public |  | display | inferred | Sets the pixel refresher mode. |
| [`setTemporalPeakControl`](#settemporalpeakcontrol) | private |  | display | documented | Toggles OLED TPC (In-Start service menu option) ⚠️ |
| [`setTurnOnAoD`](#setturnonaod) | public |  | display | inferred | Sets the turn on ao d. |
| [`testForQ`](#testforq) | public |  | display | inferred | Tests the for q. |

<a id="geteplstatus"></a>
## `getEplStatus`

`luna://com.webos.service.oledepl/getEplStatus`

Returns the epl status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `status` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/getEplStatus '{}'
```

> ACG groups: private, all, public. Example reply (W22O 7.0): {"subscribed":false,"returnValue":true,"status":true}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getfixedosdresult"></a>
## `getFixedOSDResult`

`luna://com.webos.service.oledepl/getFixedOSDResult`

Returns the fixed OSD result.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `fixedOSD` |  |

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
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `enable` |  |
| `stressCount` |  |

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
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `oledPanelUTT` |  |

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
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `tempLSB` |  |
| `tempMSB` |  |

```sh
luna-send -n 1 luna://com.webos.service.oledepl/getPanelTemperature '{}'
```

Sources: [1](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="getpcscreensaverresponse"></a>
## `getPcScreenSaverResponse`

`luna://com.webos.service.oledepl/getPcScreenSaverResponse`

Returns the pc screen saver response.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.oledepl/getPixelRefresherInfoList '{}'
```

Sources: [1](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md)

<a id="getpixelrefreshermode"></a>
## `getPixelRefresherMode`

`luna://com.webos.service.oledepl/getPixelRefresherMode`

Returns the pixel refresher mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/getPixelRefresherMode '{}'
```

> ACG groups: private, all, public. Example reply (W22O 7.0): {"subscribed":false,"returnValue":true,"mode":"auto","onPlayMusicKeyLock":false}

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getstrastatus"></a>
## `getStraStatus`

`luna://com.webos.service.oledepl/getStraStatus`

Returns the stra status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `status` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/getStraStatus '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="gettemporalpeakcontrol"></a>
## `getTemporalPeakControl`

`luna://com.webos.service.oledepl/getTemporalPeakControl`

Returns the temporal peak control.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `enable` |  |

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
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.oledepl/isPixelRefresherCondition '{}'
```

Sources: [1](https://github.com/webosbrew/home-chooser/blob/main/e2e/hc_e2e/steps/screen.py)

<a id="notifypopupclosed"></a>
## `notifyPopupClosed`

`luna://com.webos.service.oledepl/notifyPopupClosed`

Notifies of the popup closed.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/notifyPopupClosed '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="playmusicpixelrefresher"></a>
## `playMusicPixelRefresher`

`luna://com.webos.service.oledepl/playMusicPixelRefresher`

Plays the music pixel refresher.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/playMusicPixelRefresher '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="restoreeplcondition"></a>
## `restoreEplCondition`

`luna://com.webos.service.oledepl/restoreEplCondition`

Restores the epl condition.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/restoreEplCondition '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="seteplappinfo"></a>
## `setEplAppInfo`

`luna://com.webos.service.oledepl/setEplAppInfo`

Sets the epl app info.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/setEplAppInfo '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="seteplctrl"></a>
## `setEplCtrl`

`luna://com.webos.service.oledepl/setEplCtrl`

Sets the epl ctrl.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

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

Sets the pc screen saver response.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/setPcScreenSaverResponse '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpixelrefresherinfolist"></a>
## `setPixelRefresherInfoList`

`luna://com.webos.service.oledepl/setPixelRefresherInfoList`

Sets the pixel refresher info list.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/setPixelRefresherInfoList '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setpixelrefreshermode"></a>
## `setPixelRefresherMode`

`luna://com.webos.service.oledepl/setPixelRefresherMode`

Sets the pixel refresher mode.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

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
- **Confidence:** documented

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

Sets the turn on ao d.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/setTurnOnAoD '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="testforq"></a>
## `testForQ`

`luna://com.webos.service.oledepl/testForQ`

Tests the for q.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.oledepl/testForQ '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
