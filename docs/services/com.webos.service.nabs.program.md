# `com.webos.service.nabs.program`

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`callSqliteMethod`](#callsqlitemethod) | private |  | tv-broadcast | Method on com.webos.service.nabs.program (from on-device permission registry; parameters undocumented). |
| [`scanProgramGuide`](#scanprogramguide) | private |  | tv-broadcast | Method on com.webos.service.nabs.program (from on-device permission registry; parameters undocumented). |
| [`stopScanProgramGuide`](#stopscanprogramguide) | private |  | tv-broadcast | Method on com.webos.service.nabs.program (from on-device permission registry; parameters undocumented). |

<a id="callsqlitemethod"></a>
## `callSqliteMethod`

`luna://com.webos.service.nabs.program/callSqliteMethod`

Method on com.webos.service.nabs.program (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.program/callSqliteMethod '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="scanprogramguide"></a>
## `scanProgramGuide`

`luna://com.webos.service.nabs.program/scanProgramGuide`

Method on com.webos.service.nabs.program (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.program/scanProgramGuide '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))

<a id="stopscanprogramguide"></a>
## `stopScanProgramGuide`

`luna://com.webos.service.nabs.program/stopScanProgramGuide`

Method on com.webos.service.nabs.program (from on-device permission registry; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** listed in webOS TV 7.0 (W22O 33.31.68) api-permissions.d  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.nabs.program/stopScanProgramGuide '{}'
```

> ACG groups: tv.services. Registered in on-disk api-permissions.d; the service may be dormant unless its context is active (e.g. Live TV, recording, a paired device).

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device /usr/share/luna-service2/api-permissions.d, LG OLED webOS TV 7.0, W22O 33.31.68))
