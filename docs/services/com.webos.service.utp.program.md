# `com.webos.service.utp.program`

4 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`checkProgramGuide`](#checkprogramguide) | private |  | misc | Method on com.webos.service.utp.program (introspected on-device; parameters undocumented). |
| [`getCurrentProgramRating`](#getcurrentprogramrating) | private |  | misc | Getter on com.webos.service.utp.program (introspected on-device; parameters undocumented). |
| [`scanProgramGuide`](#scanprogramguide) | public |  | misc | Method on com.webos.service.utp.program (introspected on-device; parameters undocumented). |
| [`stopScanProgramGuide`](#stopscanprogramguide) | public |  | misc | Method on com.webos.service.utp.program (introspected on-device; parameters undocumented). |

<a id="checkprogramguide"></a>
## `checkProgramGuide`

`luna://com.webos.service.utp.program/checkProgramGuide`

Method on com.webos.service.utp.program (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.program/checkProgramGuide '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getcurrentprogramrating"></a>
## `getCurrentProgramRating`

`luna://com.webos.service.utp.program/getCurrentProgramRating`

Getter on com.webos.service.utp.program (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.program/getCurrentProgramRating '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="scanprogramguide"></a>
## `scanProgramGuide`

`luna://com.webos.service.utp.program/scanProgramGuide`

Method on com.webos.service.utp.program (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.program/scanProgramGuide '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="stopscanprogramguide"></a>
## `stopScanProgramGuide`

`luna://com.webos.service.utp.program/stopScanProgramGuide`

Method on com.webos.service.utp.program (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.utp.program/stopScanProgramGuide '{}'
```

> ACG groups: private, all, public.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
