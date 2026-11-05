# `com.webos.service.nabs.program`

NABS program-guide service: scans the EPG and runs SQLite queries against the guide database. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`callSqliteMethod`](#callsqlitemethod) | private |  | tv-broadcast | inferred | Calls the sqlite method. |
| [`scanProgramGuide`](#scanprogramguide) | private |  | tv-broadcast | inferred | Scans for program guide. |
| [`stopScanProgramGuide`](#stopscanprogramguide) | private |  | tv-broadcast | inferred | Stops the scan program guide. |

<a id="callsqlitemethod"></a>
## `callSqliteMethod`

`luna://com.webos.service.nabs.program/callSqliteMethod`

Calls the sqlite method.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.program/callSqliteMethod '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scanprogramguide"></a>
## `scanProgramGuide`

`luna://com.webos.service.nabs.program/scanProgramGuide`

Scans for program guide.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.program/scanProgramGuide '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stopscanprogramguide"></a>
## `stopScanProgramGuide`

`luna://com.webos.service.nabs.program/stopScanProgramGuide`

Stops the scan program guide.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.program/stopScanProgramGuide '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
