# `com.webos.service.tvpower`

TV power daemon: powers the TV on/off, reboots (including MICOM), reports power state and power-on reason/time, and registers suspend/resume/standby/screensaver handshakes.

83 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`power/cancelPowerOff`](#power_cancelpoweroff) | private |  | power | inferred | Cancels the power off (power) |
| [`power/getClientList`](#power_getclientlist) | private |  | power | documented | Lists clients registered with tvpower for the power-state lifecycle (name from introspection; behaviour undocumented) |
| [`power/getPowerOnReason`](#power_getpoweronreason) | private |  | power | documented | Returns why the TV was last powered on (e.g. ON_BY_REMOTE_KEY) |
| [`power/getPowerOnTime`](#power_getpowerontime) | private |  | power | documented | Returns uptime since boot in seconds |
| [`power/getPowerState`](#power_getpowerstate) | ssap | yes | power | documented | Get (or subscribe to) TV power state |
| [`power/powerOff`](#power_poweroff) | private |  | power | documented | Puts the TV into standby (quick-start suspend when Quick Start+ is on) |
| [`power/powerOn`](#power_poweron) | private |  | power | documented | Brings a TV back from Active Standby/Always-on |
| [`power/reboot`](#power_reboot) | private |  | power | documented | Soft reboots the TV |
| [`power/rebootMicom`](#power_rebootmicom) | private |  | power | inferred | Reboots the MICOM (power) |
| [`power/registerActiveStandbyRequest`](#power_registeractivestandbyrequest) | private |  | power | inferred | Registers the active standby request (power) |
| [`power/registerPowerOffLogoRequest`](#power_registerpowerofflogorequest) | private |  | power | inferred | Registers the power off logo request (power) |
| [`power/registerPowerOffRequest`](#power_registerpoweroffrequest) | private |  | power | inferred | Registers the power off request (power) |
| [`power/registerPrepareActiveStandby`](#power_registerprepareactivestandby) | public |  | power | inferred | Registers the prepare active standby (power) |
| [`power/registerPreparePowerOff`](#power_registerpreparepoweroff) | public |  | power | inferred | Registers the prepare power off (power) |
| [`power/registerPreparePowerOn`](#power_registerpreparepoweron) | public |  | power | inferred | Registers the prepare power on (power) |
| [`power/registerPrepareResume`](#power_registerprepareresume) | public |  | power | inferred | Registers the prepare resume (power) |
| [`power/registerPrepareSuspend`](#power_registerpreparesuspend) | public |  | power | inferred | Registers the prepare suspend (power) |
| [`power/registerScreenSaverRequest`](#power_registerscreensaverrequest) | private | yes | display | documented | Subscription: LG asks before starting its screensaver; the subscriber replies via responseScreenSaverRequest |
| [`power/registerSuspendRequest`](#power_registersuspendrequest) | private |  | power | inferred | Registers the suspend request (power) |
| [`power/responseActiveStandbyRequest`](#power_responseactivestandbyrequest) | private |  | power | inferred | Handles the response active standby request (power) |
| [`power/responsePowerOffLogoRequest`](#power_responsepowerofflogorequest) | private |  | power | inferred | Handles the response power off logo request (power) |
| [`power/responsePowerOffRequest`](#power_responsepoweroffrequest) | private |  | power | inferred | Handles the response power off request (power) |
| [`power/responsePrepareActiveStandby`](#power_responseprepareactivestandby) | public |  | power | inferred | Handles the response prepare active standby (power) |
| [`power/responsePreparePowerOff`](#power_responsepreparepoweroff) | public |  | power | inferred | Handles the response prepare power off (power) |
| [`power/responsePreparePowerOn`](#power_responsepreparepoweron) | public |  | power | inferred | Handles the response prepare power on (power) |
| [`power/responsePrepareResume`](#power_responseprepareresume) | public |  | power | inferred | Handles the response prepare resume (power) |
| [`power/responsePrepareSuspend`](#power_responsepreparesuspend) | public |  | power | inferred | Handles the response prepare suspend (power) |
| [`power/responseScreenSaverRequest`](#power_responsescreensaverrequest) | private |  | display | documented | Answers a screensaver request |
| [`power/responseSuspendRequest`](#power_responsesuspendrequest) | private |  | power | inferred | Handles the response suspend request (power) |
| [`power/sendActiveStandbyRequestAck`](#power_sendactivestandbyrequestack) | private |  | power | inferred | Sends the active standby request ack (power) |
| [`power/sendPowerOffRequestAck`](#power_sendpoweroffrequestack) | private |  | power | inferred | Sends the power off request ack (power) |
| [`power/sendPrepareActiveStandbyAck`](#power_sendprepareactivestandbyack) | private |  | power | inferred | Sends the prepare active standby ack (power) |
| [`power/sendPreparePowerOffAck`](#power_sendpreparepoweroffack) | private |  | power | inferred | Sends the prepare power off ack (power) |
| [`power/sendPreparePowerOnAck`](#power_sendpreparepoweronack) | private |  | power | inferred | Sends the prepare power on ack (power) |
| [`power/setHostReady`](#power_sethostready) | private |  | power | inferred | Sets the host ready (power) |
| [`power/setPowerInitState`](#power_setpowerinitstate) | private |  | power | inferred | Sets the power init state (power) |
| [`power/setPowerOffTimeout`](#power_setpowerofftimeout) | private |  | power | inferred | Sets the power off timeout (power) |
| [`power/setPowerOnReason`](#power_setpoweronreason) | private |  | power | documented | Sets the recorded power-on reason (counterpart of power/getPowerOnReason) |
| [`power/setScreenBlock`](#power_setscreenblock) | private |  | power | documented | Screen block control on tvpower (name only) |
| [`power/shutDown`](#power_shutdown) | private |  | power | documented | Full power off, cold boot next start; Wake-on-LAN no longer wakes the TV |
| [`power/test`](#power_test) | private |  | power | inferred | Tests the tvpower (power) |
| [`power/turnOffScreen`](#power_turnoffscreen) | ssap |  | display | documented | Blank the panel (screen off) while keeping the TV powered |
| [`power/turnOnScreen`](#power_turnonscreen) | ssap |  | display | documented | Unblank the panel |
| [`power/turnOnScreenSaver`](#power_turnonscreensaver) | private |  | display | documented | Starts the LG screensaver now |
| [`power2/cancelPowerOff`](#power2_cancelpoweroff) | private |  | power | inferred | Cancels the power off (power 2) |
| [`power2/getClientList`](#power2_getclientlist) | private |  | power | inferred | Returns the client list (power 2) |
| [`power2/getPowerOnReason`](#power2_getpoweronreason) | private |  | power | inferred | Returns the power on reason (power 2) |
| [`power2/getPowerOnTime`](#power2_getpowerontime) | private |  | power | inferred | Returns the power on time (power 2) |
| [`power2/getPowerState`](#power2_getpowerstate) | private |  | power | inferred | Returns the power state (power 2) |
| [`power2/power`](#power2_power) | private |  | power | inferred | Powers the tvpower (power 2) |
| [`power2/powerOff`](#power2_poweroff) | private |  | power | inferred | Powers the off (power 2) |
| [`power2/powerOn`](#power2_poweron) | private |  | power | inferred | Powers the on (power 2) |
| [`power2/reboot`](#power2_reboot) | private |  | power | inferred | Reboots the tvpower (power 2) |
| [`power2/rebootMicom`](#power2_rebootmicom) | private |  | power | inferred | Reboots the MICOM (power 2) |
| [`power2/registerActiveStandbyRequest`](#power2_registeractivestandbyrequest) | private |  | power | inferred | Registers the active standby request (power 2) |
| [`power2/registerAlwaysOnDisplayRequest`](#power2_registeralwaysondisplayrequest) | private |  | power | inferred | Registers the always on display request (power 2) |
| [`power2/registerAlwaysReadyRequest`](#power2_registeralwaysreadyrequest) | private |  | power | inferred | Registers the always ready request (power 2) |
| [`power2/registerPowerOffLogoRequest`](#power2_registerpowerofflogorequest) | private |  | power | inferred | Registers the power off logo request (power 2) |
| [`power2/registerPowerOffRequest`](#power2_registerpoweroffrequest) | private |  | power | inferred | Registers the power off request (power 2) |
| [`power2/registerPreparePowerOff`](#power2_registerpreparepoweroff) | private |  | power | inferred | Registers the prepare power off (power 2) |
| [`power2/registerPreparePowerOn`](#power2_registerpreparepoweron) | private |  | power | inferred | Registers the prepare power on (power 2) |
| [`power2/registerScreenSaverRequest`](#power2_registerscreensaverrequest) | private |  | power | inferred | Registers the screen saver request (power 2) |
| [`power2/registerSuspendRequest`](#power2_registersuspendrequest) | private |  | power | inferred | Registers the suspend request (power 2) |
| [`power2/responseActiveStandbyRequest`](#power2_responseactivestandbyrequest) | private |  | power | inferred | Handles the response active standby request (power 2) |
| [`power2/responseAlwaysOnDisplayRequest`](#power2_responsealwaysondisplayrequest) | private |  | power | inferred | Handles the response always on display request (power 2) |
| [`power2/responseAlwaysReadyRequest`](#power2_responsealwaysreadyrequest) | private |  | power | inferred | Handles the response always ready request (power 2) |
| [`power2/responsePowerOffLogoRequest`](#power2_responsepowerofflogorequest) | private |  | power | inferred | Handles the response power off logo request (power 2) |
| [`power2/responsePowerOffRequest`](#power2_responsepoweroffrequest) | private |  | power | inferred | Handles the response power off request (power 2) |
| [`power2/responsePreparePowerOff`](#power2_responsepreparepoweroff) | private |  | power | inferred | Handles the response prepare power off (power 2) |
| [`power2/responsePreparePowerOn`](#power2_responsepreparepoweron) | private |  | power | inferred | Handles the response prepare power on (power 2) |
| [`power2/responseScreenSaverRequest`](#power2_responsescreensaverrequest) | private |  | power | inferred | Handles the response screen saver request (power 2) |
| [`power2/responseSuspendRequest`](#power2_responsesuspendrequest) | private |  | power | inferred | Handles the response suspend request (power 2) |
| [`power2/setHostReady`](#power2_sethostready) | private |  | power | inferred | Sets the host ready (power 2) |
| [`power2/setPowerInitState`](#power2_setpowerinitstate) | private |  | power | inferred | Sets the power init state (power 2) |
| [`power2/setPowerOffTimeout`](#power2_setpowerofftimeout) | private |  | power | inferred | Sets the power off timeout (power 2) |
| [`power2/setScreenBlock`](#power2_setscreenblock) | private |  | power | inferred | Sets the screen block (power 2) |
| [`power2/shutDown`](#power2_shutdown) | private |  | power | inferred | Handles the shut down (power 2) ⚠️ |
| [`power2/test`](#power2_test) | private |  | power | inferred | Tests the tvpower (power 2) |
| [`power2/turnOffAoD`](#power2_turnoffaod) | private |  | power | inferred | Turns the off ao d (power 2) |
| [`power2/turnOffScreen`](#power2_turnoffscreen) | private |  | display | documented | Alternate screen-off path tried as fallback |
| [`power2/turnOnAoD`](#power2_turnonaod) | private |  | power | inferred | Turns the on ao d (power 2) |
| [`power2/turnOnScreen`](#power2_turnonscreen) | private |  | power | inferred | Turns the on screen (power 2) |
| [`power2/turnOnScreenSaver`](#power2_turnonscreensaver) | private |  | power | documented | Starts the screen saver (webOS 7+ variant; webOS 6 uses power/turnOnScreenSaver) |

<a id="power_cancelpoweroff"></a>
## `power/cancelPowerOff`

`luna://com.webos.service.tvpower/power/cancelPowerOff`

Cancels the power off (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/cancelPowerOff '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power_getclientlist"></a>
## `power/getClientList`

`luna://com.webos.service.tvpower/power/getClientList`

Lists clients registered with tvpower for the power-state lifecycle (name from introspection; behaviour undocumented)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/getClientList '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tvpower.md)

<a id="power_getpoweronreason"></a>
## `power/getPowerOnReason`

`luna://com.webos.service.tvpower/power/getPowerOnReason`

Returns why the TV was last powered on (e.g. ON_BY_REMOTE_KEY)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 7.6  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.tvpower/power/getPowerOnReason '{}'
```

Sources: [1](https://github.com/rudra-avatar/Hearth/blob/HEAD/src/poweron/README.md), [2](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/docs/IMPLEMENTATION.md)

<a id="power_getpowerontime"></a>
## `power/getPowerOnTime`

`luna://com.webos.service.tvpower/power/getPowerOnTime`

Returns uptime since boot in seconds

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.tvpower/power/getPowerOnTime '{}'
```

Sources: [1](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/docs/IMPLEMENTATION.md)

<a id="power_getpowerstate"></a>
## `power/getPowerState`

`luna://com.webos.service.tvpower/power/getPowerState`

Get (or subscribe to) TV power state

- **Access:** ssap  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** webOS 3+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | bool |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.tvpower/power/getPowerState","payload":{}}
```

> state values seen in sources: 'Active', 'Active Standby', 'Suspend', 'Screen Off', 'Power Off', 'Unknown' (bscpylgtv is_on/is_screen_on logic; lgtv2 README). snabb/webostv recorded '404 no such service or method' for this URI on its (older) test TV. \|\| state strings seen: Active, Screen Saver, Screen Off, Active Standby. Glasshouse treats Active/Screen Saver as on. Also power2/getPowerState exists on newer firmware.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/hobbyquaker/lgtv2/blob/master/README.md), [4](https://github.com/snabb/webostv/blob/master/mmisc.go), [5](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [6](https://github.com/Osyna/Overglass/blob/HEAD/docs/FINDINGS.md), [7](https://github.com/SunnySide007/lumen-webos/blob/HEAD/docs/device/b9.md), [8](https://github.com/webosbrew/hyperion-webos/blob/HEAD/src/service.c)

<a id="power_poweroff"></a>
## `power/powerOff`

`luna://com.webos.service.tvpower/power/powerOff`

Puts the TV into standby (quick-start suspend when Quick Start+ is on)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** confirmed on webOS 22 (65QNED866QA)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `reason` | string e.g. remoteKey |

```sh
luna-send -n 1 luna://com.webos.service.tvpower/power/powerOff '{"reason":"remoteKey"}'
```

> With Quick Start+ on this only suspends: Wake-on-LAN wakes it in seconds.

Sources: [1](https://github.com/lasharor/cleanyourtv-WebOS/blob/HEAD/docs/troubleshooting.md), [2](https://github.com/SunnySide007/lumen-webos/blob/HEAD/shell/crates/lumen-ctl/src/lg.rs), [3](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/controls.js)

<a id="power_poweron"></a>
## `power/powerOn`

`luna://com.webos.service.tvpower/power/powerOn`

Brings a TV back from Active Standby/Always-on

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 9.2 (C2) confirmed  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `reason` | remoteKey |

```sh
luna-send -n 1 luna://com.webos.service.tvpower/power/powerOn '{"reason":"remoteKey"}'
```

> Only reachable while in Active Standby.

Sources: [1](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/controls.js)

<a id="power_reboot"></a>
## `power/reboot`

`luna://com.webos.service.tvpower/power/reboot`

Soft reboots the TV

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3-4 (variant tv.power/reboot on 5+); older webOS only  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `reason` | string, remoteKey or cpuCommand |

```sh
luna-send -n 1 luna://com.webos.service.tvpower/power/reboot '{"reason":"remoteKey"}'
```

> Homebrew Channel uses reason:"cpuCommand" and falls back to /sbin reboot. bscpylgtv warns it no longer works via the alert hack on newer webOS. \|\| Called with {'reason':'remoteKey'}. bscpylgtv `reboot_soft`: 'does not work anymore on newer WebOS versions'. Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client.

Sources: [1](https://github.com/webosbrew/webos-homebrew-channel/blob/HEAD/services/service.ts), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/HEAD/src/constants.js), [4](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [5](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)

<a id="power_rebootmicom"></a>
## `power/rebootMicom`

`luna://com.webos.service.tvpower/power/rebootMicom`

Reboots the MICOM (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/rebootMicom '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power_registeractivestandbyrequest"></a>
## `power/registerActiveStandbyRequest`

`luna://com.webos.service.tvpower/power/registerActiveStandbyRequest`

Registers the active standby request (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/registerActiveStandbyRequest '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_registerpowerofflogorequest"></a>
## `power/registerPowerOffLogoRequest`

`luna://com.webos.service.tvpower/power/registerPowerOffLogoRequest`

Registers the power off logo request (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/registerPowerOffLogoRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power_registerpoweroffrequest"></a>
## `power/registerPowerOffRequest`

`luna://com.webos.service.tvpower/power/registerPowerOffRequest`

Registers the power off request (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/registerPowerOffRequest '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_registerprepareactivestandby"></a>
## `power/registerPrepareActiveStandby`

`luna://com.webos.service.tvpower/power/registerPrepareActiveStandby`

Registers the prepare active standby (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/registerPrepareActiveStandby '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_registerpreparepoweroff"></a>
## `power/registerPreparePowerOff`

`luna://com.webos.service.tvpower/power/registerPreparePowerOff`

Registers the prepare power off (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/registerPreparePowerOff '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_registerpreparepoweron"></a>
## `power/registerPreparePowerOn`

`luna://com.webos.service.tvpower/power/registerPreparePowerOn`

Registers the prepare power on (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/registerPreparePowerOn '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_registerprepareresume"></a>
## `power/registerPrepareResume`

`luna://com.webos.service.tvpower/power/registerPrepareResume`

Registers the prepare resume (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/registerPrepareResume '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_registerpreparesuspend"></a>
## `power/registerPrepareSuspend`

`luna://com.webos.service.tvpower/power/registerPrepareSuspend`

Registers the prepare suspend (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/registerPrepareSuspend '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_registerscreensaverrequest"></a>
## `power/registerScreenSaverRequest`

`luna://com.webos.service.tvpower/power/registerScreenSaverRequest`

Subscription: LG asks before starting its screensaver; the subscriber replies via responseScreenSaverRequest

- **Access:** private  
- **Subscribe:** yes  
- **Platform:** webOS TV  
- **Versions:** seen on webOS 4.5 (LG B9)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | boolean |

```sh
luna-send -i luna://com.webos.service.tvpower/power/registerScreenSaverRequest '{"subscribe":true}'
```

> Lumen answers ack:true to allow it (OLED protection). Glasshouse notes screenmanager/browser use ack too.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/HEAD/shell/crates/lumen-shell/src/watch.rs), [2](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/docs/development/TV-RESEARCH.md)

<a id="power_registersuspendrequest"></a>
## `power/registerSuspendRequest`

`luna://com.webos.service.tvpower/power/registerSuspendRequest`

Registers the suspend request (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/registerSuspendRequest '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_responseactivestandbyrequest"></a>
## `power/responseActiveStandbyRequest`

`luna://com.webos.service.tvpower/power/responseActiveStandbyRequest`

Handles the response active standby request (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/responseActiveStandbyRequest '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_responsepowerofflogorequest"></a>
## `power/responsePowerOffLogoRequest`

`luna://com.webos.service.tvpower/power/responsePowerOffLogoRequest`

Handles the response power off logo request (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/responsePowerOffLogoRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power_responsepoweroffrequest"></a>
## `power/responsePowerOffRequest`

`luna://com.webos.service.tvpower/power/responsePowerOffRequest`

Handles the response power off request (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/responsePowerOffRequest '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_responseprepareactivestandby"></a>
## `power/responsePrepareActiveStandby`

`luna://com.webos.service.tvpower/power/responsePrepareActiveStandby`

Handles the response prepare active standby (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/responsePrepareActiveStandby '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_responsepreparepoweroff"></a>
## `power/responsePreparePowerOff`

`luna://com.webos.service.tvpower/power/responsePreparePowerOff`

Handles the response prepare power off (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/responsePreparePowerOff '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_responsepreparepoweron"></a>
## `power/responsePreparePowerOn`

`luna://com.webos.service.tvpower/power/responsePreparePowerOn`

Handles the response prepare power on (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/responsePreparePowerOn '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_responseprepareresume"></a>
## `power/responsePrepareResume`

`luna://com.webos.service.tvpower/power/responsePrepareResume`

Handles the response prepare resume (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/responsePrepareResume '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_responsepreparesuspend"></a>
## `power/responsePrepareSuspend`

`luna://com.webos.service.tvpower/power/responsePrepareSuspend`

Handles the response prepare suspend (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/responsePrepareSuspend '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all, public. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_responsescreensaverrequest"></a>
## `power/responseScreenSaverRequest`

`luna://com.webos.service.tvpower/power/responseScreenSaverRequest`

Answers a screensaver request

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** unknown  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `ack` | boolean |
| `timestamp` | string echoed from request |

```sh
luna-send -n 1 luna://com.webos.service.tvpower/power/responseScreenSaverRequest '{"ack":true}'
```

> Lumen echoes the short timestamp string.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/HEAD/shell/crates/lumen-shell/src/watch.rs)

<a id="power_responsesuspendrequest"></a>
## `power/responseSuspendRequest`

`luna://com.webos.service.tvpower/power/responseSuspendRequest`

Handles the response suspend request (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/responseSuspendRequest '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_sendactivestandbyrequestack"></a>
## `power/sendActiveStandbyRequestAck`

`luna://com.webos.service.tvpower/power/sendActiveStandbyRequestAck`

Sends the active standby request ack (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/sendActiveStandbyRequestAck '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_sendpoweroffrequestack"></a>
## `power/sendPowerOffRequestAck`

`luna://com.webos.service.tvpower/power/sendPowerOffRequestAck`

Sends the power off request ack (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/sendPowerOffRequestAck '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_sendprepareactivestandbyack"></a>
## `power/sendPrepareActiveStandbyAck`

`luna://com.webos.service.tvpower/power/sendPrepareActiveStandbyAck`

Sends the prepare active standby ack (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/sendPrepareActiveStandbyAck '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_sendpreparepoweroffack"></a>
## `power/sendPreparePowerOffAck`

`luna://com.webos.service.tvpower/power/sendPreparePowerOffAck`

Sends the prepare power off ack (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/sendPreparePowerOffAck '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_sendpreparepoweronack"></a>
## `power/sendPreparePowerOnAck`

`luna://com.webos.service.tvpower/power/sendPreparePowerOnAck`

Sends the prepare power on ack (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/sendPreparePowerOnAck '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_sethostready"></a>
## `power/setHostReady`

`luna://com.webos.service.tvpower/power/setHostReady`

Sets the host ready (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/setHostReady '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power_setpowerinitstate"></a>
## `power/setPowerInitState`

`luna://com.webos.service.tvpower/power/setPowerInitState`

Sets the power init state (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/setPowerInitState '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_setpowerofftimeout"></a>
## `power/setPowerOffTimeout`

`luna://com.webos.service.tvpower/power/setPowerOffTimeout`

Sets the power off timeout (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/setPowerOffTimeout '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power_setpoweronreason"></a>
## `power/setPowerOnReason`

`luna://com.webos.service.tvpower/power/setPowerOnReason`

Sets the recorded power-on reason (counterpart of power/getPowerOnReason)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/setPowerOnReason '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read. \| Behaviour inferred only from the paired getter; unverified.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_setscreenblock"></a>
## `power/setScreenBlock`

`luna://com.webos.service.tvpower/power/setScreenBlock`

Screen block control on tvpower (name only)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/setScreenBlock '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, tv.management, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt), [2](https://github.com/rhinoswirl/webostv-research/blob/main/apis/com.webos.service.tvpower.md)

<a id="power_shutdown"></a>
## `power/shutDown`

`luna://com.webos.service.tvpower/power/shutDown`

Full power off, cold boot next start; Wake-on-LAN no longer wakes the TV

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** confirmed on webOS 22 (65QNED866QA)  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `reason` | remoteKey |

```sh
luna-send -n 1 luna://com.webos.service.tvpower/power/shutDown '{"reason":"remoteKey"}'
```

> Lower power than powerOff but only remote/HDMI-CEC wakes it, and boot scripts rerun at next start.

Sources: [1](https://github.com/lasharor/cleanyourtv-WebOS/blob/HEAD/docs/troubleshooting.md), [2](https://github.com/lasharor/cleanyourtv-WebOS/blob/HEAD/helper/apps.js)

<a id="power_test"></a>
## `power/test`

`luna://com.webos.service.tvpower/power/test`

Tests the tvpower (power)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS TV 4.5 (4.10.2-31); newer firmware unverified  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power/test '{}'
```

> Seen via `ls-monitor -i com.webos.service.tvpower` on a rooted retail TV (LG OLED55B9PUA, webOS TV 4.5 (firmware 4.10.2-31)); ACG groups: private, all. Only the name and ACG groups are known; parameters/return fields were not read.

Sources: [1](https://github.com/SunnySide007/lumen-webos/blob/main/docs/device/remote-20261031-060938.txt)

<a id="power_turnoffscreen"></a>
## `power/turnOffScreen`

`luna://com.webos.service.tvpower/power/turnOffScreen`

Blank the panel (screen off) while keeping the TV powered

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.5+ (per homebridge-lgwebos-tv: webOS >= 4.5); webOS 4+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `standbyMode` | 'active' \| 'passive' (passive cannot turn screen back on; need power cycle) |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.tvpower/power/turnOffScreen","payload":{"standbyMode":"active"}}
```

> webOS 4.5+ path; older TVs use com.webos.service.tv.power/turnOffScreen (see that record). \|\| Not callable by a dev-mode app (webos-homebar routes it through HBC exec). getPowerState then reports Screen Off. Fallback in gprot42: power2/turnOffScreen; alternative setSystemSettings {category:option, settings:{screenOff:"on"}} or {category:picture, settings:{energySaving:"screen_off"}}.

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/lgwebosdevice.js), [4](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [5](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [6](https://github.com/andrewfraley/magic_mapper/blob/HEAD/magic_mapper.py), [7](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/README.md), [8](https://github.com/Jezzarium/Actually-Good-WebOS/blob/HEAD/control/src/tv.cpp)

<a id="power_turnonscreen"></a>
## `power/turnOnScreen`

`luna://com.webos.service.tvpower/power/turnOnScreen`

Unblank the panel

- **Access:** ssap  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 4.5+; webOS 4+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `standbyMode` | 'active' \| 'passive' |

```sh
{"type":"request","id":"1","uri":"ssap://com.webos.service.tvpower/power/turnOnScreen","payload":{"standbyMode":"active"}}
```

> Only undoes screen-off, not standby (Glasshouse).

Sources: [1](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/lgwebosdevice.js), [4](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [5](https://github.com/webosbrew/pages/blob/HEAD/content/pages/cheatsheet.md), [6](https://github.com/rorygallagher2024/glasshouse/blob/HEAD/server/lib/controls.js)

<a id="power_turnonscreensaver"></a>
## `power/turnOnScreenSaver`

`luna://com.webos.service.tvpower/power/turnOnScreenSaver`

Starts the LG screensaver now

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 3+ (bscpylgtv: does not work on newer webOS); older webOS only (disabled on newer, per bscpylgtv)  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.tvpower/power/turnOnScreenSaver '{}'
```

> Used by homebridge and bscpylgtv. \|\| bscpylgtv: 'access disabled at some point'; does not work anymore on newer webOS. Via Luna it is sent with params {}. Related app: com.webos.app.screensaver (LGTV Companion doc: -start_app com.webos.app.screensaver). Not exposed as an SSAP method; reachable without root only through the createAlert/closeAlert trick (see libs-notes.md): the alert button onClick/onclose/onfail luna URI is invoked by the TV; response data is NOT returned to the websocket client.

Sources: [1](https://github.com/merdok/homebridge-webos-tv/blob/master/lib/LgTvController.js), [2](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/webos_client.py), [3](https://github.com/chros73/bscpylgtv/blob/master/bscpylgtv/endpoints.py), [4](https://github.com/grzegorz914/homebridge-lgwebos-tv/blob/main/src/constants.js)

<a id="power2_cancelpoweroff"></a>
## `power2/cancelPowerOff`

`luna://com.webos.service.tvpower/power2/cancelPowerOff`

Cancels the power off (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/cancelPowerOff '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_getclientlist"></a>
## `power2/getClientList`

`luna://com.webos.service.tvpower/power2/getClientList`

Returns the client list (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/getClientList '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_getpoweronreason"></a>
## `power2/getPowerOnReason`

`luna://com.webos.service.tvpower/power2/getPowerOnReason`

Returns the power on reason (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/getPowerOnReason '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_getpowerontime"></a>
## `power2/getPowerOnTime`

`luna://com.webos.service.tvpower/power2/getPowerOnTime`

Returns the power on time (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/getPowerOnTime '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_getpowerstate"></a>
## `power2/getPowerState`

`luna://com.webos.service.tvpower/power2/getPowerState`

Returns the power state (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/getPowerState '{}'
```

> ACG groups: private, configurator.callbacks, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_power"></a>
## `power2/power`

`luna://com.webos.service.tvpower/power2/power`

Powers the tvpower (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/power '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_poweroff"></a>
## `power2/powerOff`

`luna://com.webos.service.tvpower/power2/powerOff`

Powers the off (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/powerOff '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_poweron"></a>
## `power2/powerOn`

`luna://com.webos.service.tvpower/power2/powerOn`

Powers the on (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/powerOn '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_reboot"></a>
## `power2/reboot`

`luna://com.webos.service.tvpower/power2/reboot`

Reboots the tvpower (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/reboot '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_rebootmicom"></a>
## `power2/rebootMicom`

`luna://com.webos.service.tvpower/power2/rebootMicom`

Reboots the MICOM (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/rebootMicom '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_registeractivestandbyrequest"></a>
## `power2/registerActiveStandbyRequest`

`luna://com.webos.service.tvpower/power2/registerActiveStandbyRequest`

Registers the active standby request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/registerActiveStandbyRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_registeralwaysondisplayrequest"></a>
## `power2/registerAlwaysOnDisplayRequest`

`luna://com.webos.service.tvpower/power2/registerAlwaysOnDisplayRequest`

Registers the always on display request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/registerAlwaysOnDisplayRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_registeralwaysreadyrequest"></a>
## `power2/registerAlwaysReadyRequest`

`luna://com.webos.service.tvpower/power2/registerAlwaysReadyRequest`

Registers the always ready request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/registerAlwaysReadyRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_registerpowerofflogorequest"></a>
## `power2/registerPowerOffLogoRequest`

`luna://com.webos.service.tvpower/power2/registerPowerOffLogoRequest`

Registers the power off logo request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/registerPowerOffLogoRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_registerpoweroffrequest"></a>
## `power2/registerPowerOffRequest`

`luna://com.webos.service.tvpower/power2/registerPowerOffRequest`

Registers the power off request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/registerPowerOffRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_registerpreparepoweroff"></a>
## `power2/registerPreparePowerOff`

`luna://com.webos.service.tvpower/power2/registerPreparePowerOff`

Registers the prepare power off (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/registerPreparePowerOff '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_registerpreparepoweron"></a>
## `power2/registerPreparePowerOn`

`luna://com.webos.service.tvpower/power2/registerPreparePowerOn`

Registers the prepare power on (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/registerPreparePowerOn '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_registerscreensaverrequest"></a>
## `power2/registerScreenSaverRequest`

`luna://com.webos.service.tvpower/power2/registerScreenSaverRequest`

Registers the screen saver request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/registerScreenSaverRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_registersuspendrequest"></a>
## `power2/registerSuspendRequest`

`luna://com.webos.service.tvpower/power2/registerSuspendRequest`

Registers the suspend request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/registerSuspendRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_responseactivestandbyrequest"></a>
## `power2/responseActiveStandbyRequest`

`luna://com.webos.service.tvpower/power2/responseActiveStandbyRequest`

Handles the response active standby request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/responseActiveStandbyRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_responsealwaysondisplayrequest"></a>
## `power2/responseAlwaysOnDisplayRequest`

`luna://com.webos.service.tvpower/power2/responseAlwaysOnDisplayRequest`

Handles the response always on display request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/responseAlwaysOnDisplayRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_responsealwaysreadyrequest"></a>
## `power2/responseAlwaysReadyRequest`

`luna://com.webos.service.tvpower/power2/responseAlwaysReadyRequest`

Handles the response always ready request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/responseAlwaysReadyRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_responsepowerofflogorequest"></a>
## `power2/responsePowerOffLogoRequest`

`luna://com.webos.service.tvpower/power2/responsePowerOffLogoRequest`

Handles the response power off logo request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/responsePowerOffLogoRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_responsepoweroffrequest"></a>
## `power2/responsePowerOffRequest`

`luna://com.webos.service.tvpower/power2/responsePowerOffRequest`

Handles the response power off request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/responsePowerOffRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_responsepreparepoweroff"></a>
## `power2/responsePreparePowerOff`

`luna://com.webos.service.tvpower/power2/responsePreparePowerOff`

Handles the response prepare power off (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/responsePreparePowerOff '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_responsepreparepoweron"></a>
## `power2/responsePreparePowerOn`

`luna://com.webos.service.tvpower/power2/responsePreparePowerOn`

Handles the response prepare power on (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/responsePreparePowerOn '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_responsescreensaverrequest"></a>
## `power2/responseScreenSaverRequest`

`luna://com.webos.service.tvpower/power2/responseScreenSaverRequest`

Handles the response screen saver request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/responseScreenSaverRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_responsesuspendrequest"></a>
## `power2/responseSuspendRequest`

`luna://com.webos.service.tvpower/power2/responseSuspendRequest`

Handles the response suspend request (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/responseSuspendRequest '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_sethostready"></a>
## `power2/setHostReady`

`luna://com.webos.service.tvpower/power2/setHostReady`

Sets the host ready (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/setHostReady '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_setpowerinitstate"></a>
## `power2/setPowerInitState`

`luna://com.webos.service.tvpower/power2/setPowerInitState`

Sets the power init state (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/setPowerInitState '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_setpowerofftimeout"></a>
## `power2/setPowerOffTimeout`

`luna://com.webos.service.tvpower/power2/setPowerOffTimeout`

Sets the power off timeout (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/setPowerOffTimeout '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_setscreenblock"></a>
## `power2/setScreenBlock`

`luna://com.webos.service.tvpower/power2/setScreenBlock`

Sets the screen block (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/setScreenBlock '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_shutdown"></a>
## `power2/shutDown` ⚠️ DANGEROUS

`luna://com.webos.service.tvpower/power2/shutDown`

Handles the shut down (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/shutDown '{}'
```

> ACG groups: private, all, tv.management. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_test"></a>
## `power2/test`

`luna://com.webos.service.tvpower/power2/test`

Tests the tvpower (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/test '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_turnoffaod"></a>
## `power2/turnOffAoD`

`luna://com.webos.service.tvpower/power2/turnOffAoD`

Turns the off ao d (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/turnOffAoD '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_turnoffscreen"></a>
## `power2/turnOffScreen`

`luna://com.webos.service.tvpower/power2/turnOffScreen`

Alternate screen-off path tried as fallback

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** newer firmware  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.tvpower/power2/turnOffScreen '{}'
```

Sources: [1](https://github.com/gprot42/webos-launch-home/blob/HEAD/voice/daemon/tv_control.py)

<a id="power2_turnonaod"></a>
## `power2/turnOnAoD`

`luna://com.webos.service.tvpower/power2/turnOnAoD`

Turns the on ao d (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/turnOnAoD '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_turnonscreen"></a>
## `power2/turnOnScreen`

`luna://com.webos.service.tvpower/power2/turnOnScreen`

Turns the on screen (power 2)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.tvpower/power2/turnOnScreen '{}'
```

> ACG groups: private, all, tv.management.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="power2_turnonscreensaver"></a>
## `power2/turnOnScreenSaver`

`luna://com.webos.service.tvpower/power2/turnOnScreenSaver`

Starts the screen saver (webOS 7+ variant; webOS 6 uses power/turnOnScreenSaver)

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** webOS 7+  
- **Confidence:** documented

```sh
luna-send -n 1 luna://com.webos.service.tvpower/power2/turnOnScreenSaver '{}'
```

> home-chooser README: root luna-send -n 1 with no -a, payload {}.

Sources: [1](https://github.com/webosbrew/home-chooser/blob/main/e2e/README.md)
