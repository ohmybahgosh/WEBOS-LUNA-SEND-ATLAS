# `com.webos.service.legacybroadcast.display`

Legacy broadcast display helper: freezes the DTV picture and runs decoder tests. _(inferred from the service's methods)_

3 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`freezeDTV`](#freezedtv) | private |  | tv-broadcast | inferred | Handles the freeze DTV. |
| [`getDecoderTest`](#getdecodertest) | private |  | tv-broadcast | inferred | Returns the decoder test. |
| [`setDecoderTest`](#setdecodertest) | private |  | tv-broadcast | inferred | Sets the decoder test. |

<a id="freezedtv"></a>
## `freezeDTV`

`luna://com.webos.service.legacybroadcast.display/freezeDTV`

Handles the freeze DTV.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.display/freezeDTV '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getdecodertest"></a>
## `getDecoderTest`

`luna://com.webos.service.legacybroadcast.display/getDecoderTest`

Returns the decoder test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

**Returns:**

| Field | Type / notes |
|---|---|
| `afd` |  |
| `atsc30CurrentTimeNsec` |  |
| `atsc30CurrentTimeSec` |  |
| `atsc30CurrentTimeWallClock` |  |
| `bIs2Tuner` |  |
| `bIsSectionEventOccur0` |  |
| `bIsSectionEventOccur1` |  |
| `bIsSectionEventOccur2` |  |
| `bIsSectionEventOccur3` |  |
| `broadcastId` |  |
| `checkCis` |  |
| `colourPrimaries` |  |
| `detectCard` |  |
| `eGoodVideo` |  |
| `eVDECAFD` |  |
| `h` |  |
| `hashValueOnceLSB` |  |
| `hashValueOnceMSB` |  |
| `hdrTransferCharacteristicIdc` |  |
| `matrixCoeffs` |  |
| `numOfHash` |  |
| `numOfSocName` |  |
| `scanType` |  |
| `sdecPort` |  |
| `secfIndex0` |  |
| `secfIndex1` |  |
| `secfIndex2` |  |
| `secfIndex3` |  |
| `stc0` |  |
| `stc1` |  |
| `stc2` |  |
| `transferChareristics` |  |
| `vFreq` |  |
| `vdecGoodVideoTime` |  |
| `videoPTS0` |  |
| `videoPTS1` |  |
| `videoPTS2` |  |
| `videoPTS3` |  |
| `videoPTS4` |  |
| `w` |  |

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.display/getDecoderTest '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setdecodertest"></a>
## `setDecoderTest`

`luna://com.webos.service.legacybroadcast.display/setDecoderTest`

Sets the decoder test.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.legacybroadcast.display/setDecoderTest '{}'
```

> ACG groups: all, legacybroadcast.service.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
