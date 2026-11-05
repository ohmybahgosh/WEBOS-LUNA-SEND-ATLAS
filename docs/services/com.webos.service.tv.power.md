# `com.webos.service.tv.power`

TV power service: reboots, turns the screen on and off, cancels a scheduled power-off, and enables Wake-on-LAN.

5 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`cancelPowerOff`](#cancelpoweroff) | private |  | power | documented | Cancels a power-off in progress |
| [`enableWol`](#enablewol) | private |  | power | documented | TV power method: enableWol |
| [`reboot`](#reboot) | private |  | power-mgmt | documented | Soft reboot the TV (webOS 4/5 path) |
| [`turnOffScreen`](#turnoffscreen) | ssap |  | display | documented | Blank the panel (legacy, webOS 4.0 path) |
| [`turnOnScreen`](#turnonscreen) | ssap |  | display | documented | Unblank the panel (legacy, webOS 4.0 path) |

<a id="cancelpoweroff"></a>
## `cancelPowerOff`

`luna://com.webos.service.tv.power/cancelPowerOff`

Cancels a power-off in progress

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 6+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.tv.power/cancelPowerOff '{}'
```

> Only reverses a power-off still in progress (Glasshouse).

Sources: [1](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/controls.js)

<a id="enablewol"></a>
## `enableWol`

`luna://com.webos.service.tv.power/enableWol`

TV power method: enableWol

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.4.3 (per audit)  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tv.power/enableWol '{}'
```

> Reported by the Powback/LGTV audit as a registered API in /usr/share/luna-service2/api-permissions.d/tv.internal.api.json of a rooted webOS 4.4.3 TV; method names only, not individually tested.

Sources: [1](https://github.com/Powback/LGTV/blob/main/audit/capabilities.md)

<a id="reboot"></a>
## `reboot`

`luna://com.webos.service.tv.power/reboot`

Soft reboot the TV (webOS 4/5 path)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4/5; webOS 5+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `reason` | string, e.g. 'remoteKey' |

```sh
via SSAP createAlert trick: {"type":"request","id":"1","uri":"ssap://system.notifications/createAlert","payload":{"message":" ","buttons":[{"label":"","onClick":"luna://com.webos.service.tv.power/reboot","params":{}}],"onclose":{"uri":"luna://com.webos.service.tv.power/reboot","params":{}},"onfail":{"uri":"luna://com.webos.service.tv.power/reboot","params":{}}}}
```

> bscpylgtv LUNA_REBOOT_TV_WO4 (`reboot_soft(webos_ver='4')`); homebridge-lgwebos-tv names it 'RebootTvWebOs5'. Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client. \|\| ColorControl passes reason ""; bscpylgtv lists it as LUNA_REBOOT_TV_WO4; homebridge calls it RebootTvWebOs5.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js), [4](https://github.com/Maassoft/ColorControl/blob/HEAD/ColorControl/lgtv/LgTvApi.cs), [5](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/HEAD/src/constants.js)

<a id="turnoffscreen"></a>
## `turnOffScreen`

`luna://com.webos.service.tv.power/turnOffScreen`

Blank the panel (legacy, webOS 4.0 path)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.0 (removed in later versions)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `standbyMode` | 'active' \| 'passive' |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.tv.power/turnOffScreen","payload":{"standbyMode":"active"}}
```

> bscpylgtv marks TURN_OFF_SCREEN_WO4 as 'removed at some point'; used by `turn_screen_off(webos_ver='4')`.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js), [4](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js)

<a id="turnonscreen"></a>
## `turnOnScreen`

`luna://com.webos.service.tv.power/turnOnScreen`

Unblank the panel (legacy, webOS 4.0 path)

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.0 (removed in later versions)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `standbyMode` | 'active' \| 'passive' |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.tv.power/turnOnScreen","payload":{"standbyMode":"active"}}
```

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js), [4](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js)
