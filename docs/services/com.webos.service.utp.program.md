# `com.webos.service.utp.program`

UTP program-guide service: scans the program guide and reports the current program rating. _(inferred from the service's methods)_

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`checkProgramGuide`](#checkprogramguide) | private |  | misc | inferred | Checks the program guide. |
| [`getCurrentProgramRating`](#getcurrentprogramrating) | private |  | misc | inferred | Returns the current program rating. |
| [`scanProgramGuide`](#scanprogramguide) | public |  | misc | inferred | Scans for program guide. |
| [`stopScanProgramGuide`](#stopscanprogramguide) | public |  | misc | inferred | Stops the scan program guide. |

<a id="checkprogramguide"></a>
## `checkProgramGuide`

`luna://com.webos.service.utp.program/checkProgramGuide`

Checks the program guide.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.program/checkProgramGuide '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentprogramrating"></a>
## `getCurrentProgramRating`

`luna://com.webos.service.utp.program/getCurrentProgramRating`

Returns the current program rating.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.program/getCurrentProgramRating '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scanprogramguide"></a>
## `scanProgramGuide`

`luna://com.webos.service.utp.program/scanProgramGuide`

Scans for program guide.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.program/scanProgramGuide '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopscanprogramguide"></a>
## `stopScanProgramGuide`

`luna://com.webos.service.utp.program/stopScanProgramGuide`

Stops the scan program guide.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.utp.program/stopScanProgramGuide '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
