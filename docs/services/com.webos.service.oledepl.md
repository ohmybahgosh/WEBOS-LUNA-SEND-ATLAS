# `com.webos.service.oledepl`

7 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`getGlobalStressReduction`](#getglobalstressreduction) | private |  | display | OLED care read-only query |
| [`getOledPanelUTT`](#getoledpanelutt) | private |  | display | OLED care read-only query |
| [`getPanelTemperature`](#getpaneltemperature) | private |  | display | OLED care read-only query |
| [`getPixelRefresherInfoList`](#getpixelrefresherinfolist) | private |  | display | OLED care read-only query |
| [`isPixelRefresherCondition`](#ispixelrefreshercondition) | private |  | display | Queries OLED pixel refresher condition (used by home-chooser e2e to check panel state) |
| [`setGlobalStressReduction`](#setglobalstressreduction) | private |  | display | Toggles OLED GSR (In-Start service menu option) ⚠️ |
| [`setTemporalPeakControl`](#settemporalpeakcontrol) | private |  | display | Toggles OLED TPC (In-Start service menu option) ⚠️ |

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
