# `com.webos.service.signageplayer`

Commercial-signage player (SuperSign): plays scheduled and local signage content, manages the scheduler and shared folder, handles failover and content verification. _(inferred from the service's methods)_

18 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`autoPlayManager/failover`](#autoplaymanager_failover) | private |  | apps | inferred | Handles the failover (auto play manager) |
| [`autoPlayManager/playInternalMemory`](#autoplaymanager_playinternalmemory) | private |  | apps | inferred | Plays the internal memory (auto play manager) |
| [`checkAlive`](#checkalive) | private |  | apps | inferred | Checks the alive. |
| [`getPlayerStatus`](#getplayerstatus) | private |  | apps | inferred | Returns the player status. |
| [`localcontents/checkPlay`](#localcontents_checkplay) | private |  | apps | inferred | Checks the play (localcontents) |
| [`localcontents/control`](#localcontents_control) | private |  | apps | inferred | Controls the signageplayer (localcontents) |
| [`localcontents/verifyContent`](#localcontents_verifycontent) | private |  | apps | inferred | Verifies the content (localcontents) |
| [`player/checkContentsFile`](#player_checkcontentsfile) | private |  | apps | inferred | Checks the contents file (player) |
| [`player/checkPlayLocalSchedule`](#player_checkplaylocalschedule) | private |  | apps | inferred | Checks the play local schedule (player) |
| [`player/checkSchedule`](#player_checkschedule) | private |  | apps | inferred | Checks the schedule (player) |
| [`setErrorStatus`](#seterrorstatus) | private |  | apps | inferred | Sets the error status. |
| [`supersign/createGaplessList`](#supersign_creategaplesslist) | private |  | apps | inferred | Creates the gapless list (supersign) |
| [`supersign/playContent`](#supersign_playcontent) | private |  | apps | inferred | Plays the content (supersign) |
| [`supersign/restartScheduler`](#supersign_restartscheduler) | private |  | apps | inferred | Restarts the scheduler (supersign) |
| [`supersign/setScheduleChannel`](#supersign_setschedulechannel) | private |  | tv-broadcast | inferred | Sets the schedule channel (supersign) |
| [`supersign/setSharedFolder`](#supersign_setsharedfolder) | private |  | apps | inferred | Sets the shared folder (supersign) |
| [`supersign/stopContent`](#supersign_stopcontent) | private |  | apps | inferred | Stops the content (supersign) |
| [`supersign/stopScheduler`](#supersign_stopscheduler) | private |  | apps | inferred | Stops the scheduler (supersign) |

<a id="autoplaymanager_failover"></a>
## `autoPlayManager/failover`

`luna://com.webos.service.signageplayer/autoPlayManager/failover`

Handles the failover (auto play manager)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/autoPlayManager/failover '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="autoplaymanager_playinternalmemory"></a>
## `autoPlayManager/playInternalMemory`

`luna://com.webos.service.signageplayer/autoPlayManager/playInternalMemory`

Plays the internal memory (auto play manager)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/autoPlayManager/playInternalMemory '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="checkalive"></a>
## `checkAlive`

`luna://com.webos.service.signageplayer/checkAlive`

Checks the alive.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/checkAlive '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="getplayerstatus"></a>
## `getPlayerStatus`

`luna://com.webos.service.signageplayer/getPlayerStatus`

Returns the player status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/getPlayerStatus '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="localcontents_checkplay"></a>
## `localcontents/checkPlay`

`luna://com.webos.service.signageplayer/localcontents/checkPlay`

Checks the play (localcontents)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/localcontents/checkPlay '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="localcontents_control"></a>
## `localcontents/control`

`luna://com.webos.service.signageplayer/localcontents/control`

Controls the signageplayer (localcontents)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/localcontents/control '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="localcontents_verifycontent"></a>
## `localcontents/verifyContent`

`luna://com.webos.service.signageplayer/localcontents/verifyContent`

Verifies the content (localcontents)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/localcontents/verifyContent '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="player_checkcontentsfile"></a>
## `player/checkContentsFile`

`luna://com.webos.service.signageplayer/player/checkContentsFile`

Checks the contents file (player)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/player/checkContentsFile '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="player_checkplaylocalschedule"></a>
## `player/checkPlayLocalSchedule`

`luna://com.webos.service.signageplayer/player/checkPlayLocalSchedule`

Checks the play local schedule (player)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/player/checkPlayLocalSchedule '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="player_checkschedule"></a>
## `player/checkSchedule`

`luna://com.webos.service.signageplayer/player/checkSchedule`

Checks the schedule (player)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/player/checkSchedule '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="seterrorstatus"></a>
## `setErrorStatus`

`luna://com.webos.service.signageplayer/setErrorStatus`

Sets the error status.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/setErrorStatus '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="supersign_creategaplesslist"></a>
## `supersign/createGaplessList`

`luna://com.webos.service.signageplayer/supersign/createGaplessList`

Creates the gapless list (supersign)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/supersign/createGaplessList '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="supersign_playcontent"></a>
## `supersign/playContent`

`luna://com.webos.service.signageplayer/supersign/playContent`

Plays the content (supersign)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/supersign/playContent '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="supersign_restartscheduler"></a>
## `supersign/restartScheduler`

`luna://com.webos.service.signageplayer/supersign/restartScheduler`

Restarts the scheduler (supersign)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/supersign/restartScheduler '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="supersign_setschedulechannel"></a>
## `supersign/setScheduleChannel`

`luna://com.webos.service.signageplayer/supersign/setScheduleChannel`

Sets the schedule channel (supersign)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/supersign/setScheduleChannel '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="supersign_setsharedfolder"></a>
## `supersign/setSharedFolder`

`luna://com.webos.service.signageplayer/supersign/setSharedFolder`

Sets the shared folder (supersign)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/supersign/setSharedFolder '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="supersign_stopcontent"></a>
## `supersign/stopContent`

`luna://com.webos.service.signageplayer/supersign/stopContent`

Stops the content (supersign)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/supersign/stopContent '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="supersign_stopscheduler"></a>
## `supersign/stopScheduler`

`luna://com.webos.service.signageplayer/supersign/stopScheduler`

Stops the scheduler (supersign)

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.signageplayer/supersign/stopScheduler '{}'
```

> ACG groups: private. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
